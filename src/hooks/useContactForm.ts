import { useState, useCallback } from 'react';
import {
  FormValues,
  FieldError,
  validateField,
  validateContactForm,
} from '../utils/formValidation';
import { sendViaWhatsApp, ContactFormData } from '../utils/whatsapp';
import { Country, getDefaultCountry } from '../utils/phoneCountries';

// ─── Types du hook ─────────────────────────────────────────────────────────────

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export interface UseContactFormReturn {
  // État du formulaire
  values: FormValues;
  errors: Record<string, FieldError>;
  touched: Record<string, boolean>;
  country: Country;

  // État de la soumission
  status: FormStatus;
  isSubmitting: boolean;
  isSuccess: boolean;
  isFormReady: boolean;

  // Handlers
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  resetForm: () => void;
  handleCountryChange: (newCountry: Country) => void;

  // Utilitaires
  getFieldError: (fieldName: string) => FieldError | undefined;
  getFieldClasses: (fieldName: string) => string;
  getSelectClasses: (fieldName: string) => string;
}

// ─── État initial du formulaire ────────────────────────────────────────────────

const defaultCountry = getDefaultCountry();

const initialFormValues: FormValues = {
  name: '',
  email: '',
  phone: defaultCountry.dialCode,
  country: defaultCountry,
  service: '',
  budget: '',
  message: '',
};

// ─── Hook personnalisé ─────────────────────────────────────────────────────────

export function useContactForm(): UseContactFormReturn {
  const [values, setValues] = useState<FormValues>(initialFormValues);
  const [errors, setErrors] = useState<Record<string, FieldError>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [country, setCountry] = useState<Country>(defaultCountry);

  // ─── Validation d'un champ ─────────────────────────────────────────────────

  const validateFieldCallback = useCallback((fieldName: keyof FormValues, value: string, currentValues: FormValues) => {
    const error = validateField(fieldName, value, currentValues);
    setErrors(prev => {
      const next = { ...prev };
      if (error) {
        next[fieldName] = error;
      } else {
        delete next[fieldName];
      }
      return next;
    });
    return error;
  }, []);

  // ─── Changement de valeur ──────────────────────────────────────────────────

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const safeValue = value ?? '';

    setValues(prev => {
      const nextValues = { ...prev, [name]: safeValue };
      
      // Service et Budget maintiennent leur validation au onChange
      // pour faire les validations croisées en temps réel
      
      // Validation croisée : si on change le service, on re-valide le message
      // car la règle de longueur peut changer (ex: Tunnel de Vente)
      if (name === 'service' && (touched['message'] || prev.message.length > 0)) {
        validateFieldCallback('message', prev.message, nextValues);
      }

      // Validation croisée : si on change le budget, on re-valide le téléphone
      if (name === 'budget' && (touched['phone'] || prev.phone.length > 0)) {
        validateFieldCallback('phone', prev.phone, nextValues);
      }

      return nextValues;
    });
  }, [touched, validateFieldCallback]);

  // ─── Perte de focus ────────────────────────────────────────────────────────

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const safeValue = value ?? '';
    setTouched(prev => ({ ...prev, [name]: true }));
    validateFieldCallback(name as keyof FormValues, safeValue, values);

    // Validation croisée : si on change le service, on re-valide le message
    // car la règle de longueur peut changer (ex: Tunnel de Vente)
    if (name === 'service' && values.message.length > 0) {
      validateFieldCallback('message', values.message, values);
    }

    // Validation croisée : si on change le budget, on re-valide le téléphone
    if (name === 'budget' && values.phone !== values.country.dialCode) {
      validateFieldCallback('phone', values.phone, values);
    }
  }, [validateFieldCallback, values]);

  // ─── Soumission du formulaire ──────────────────────────────────────────────

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();

    // Marquer tous les champs comme touchés
    const allTouched: Record<string, boolean> = {};
    Object.keys(initialFormValues).forEach(key => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    // Valider tous les champs
    const result = validateContactForm(values);

    // Mettre à jour les erreurs
    const newErrors: Record<string, FieldError> = {};
    result.errors.forEach(error => {
      newErrors[error.field] = error;
    });
    setErrors(newErrors);

    // Si erreurs bloquantes, on arrête
    if (!result.isValid) {
      setStatus('error');
      return;
    }

    // Soumission
    setStatus('submitting');

    try {
      // Envoi via WhatsApp
      sendViaWhatsApp(values as ContactFormData);

      // Succès après un court délai
      setTimeout(() => {
        setStatus('success');
      }, 500);
    } catch {
      setStatus('error');
    }
  }, [values]);

  // ─── Réinitialisation ──────────────────────────────────────────────────────

  const resetForm = useCallback(() => {
    setValues(initialFormValues);
    setErrors({});
    setTouched({});
    setStatus('idle');
    setCountry(defaultCountry);
  }, []);

  // ─── Utilitaires ───────────────────────────────────────────────────────────

  const getFieldError = useCallback((fieldName: string): FieldError | undefined => {
    return errors[fieldName];
  }, [errors]);

  const getFieldClasses = useCallback((fieldName: string): string => {
    const hasError = errors[fieldName]?.severity === 'error';
    const hasWarning = errors[fieldName]?.severity === 'warning';
    const isTouchedField = touched[fieldName];
    const fieldValue = values[fieldName as keyof FormValues];
    const hasValue = typeof fieldValue === 'string' ? fieldValue.trim() !== '' : !!fieldValue;

    if (!isTouchedField && !hasValue) {
      return 'outline-white/10 focus:outline-[#2563EB]/50';
    }

    if (hasError) {
      return 'outline-red-500/70 focus:outline-red-500 bg-red-500/5';
    }

    if (hasWarning) {
      return 'outline-amber-500/70 focus:outline-amber-500 bg-amber-500/5';
    }

    if (hasValue && isTouchedField) {
      return 'outline-emerald-500/50 focus:outline-emerald-500/70 bg-emerald-500/5';
    }

    return 'outline-white/10 focus:outline-[#2563EB]/50';
  }, [errors, touched, values]);

  // ─── Classes pour les <select> (sans background pour garder bg-[#1e293b]) ──

  const getSelectClasses = useCallback((fieldName: string): string => {
    const hasError = errors[fieldName]?.severity === 'error';
    const hasWarning = errors[fieldName]?.severity === 'warning';
    const isTouchedField = touched[fieldName];
    const fieldValue = values[fieldName as keyof FormValues];
    const hasValue = typeof fieldValue === 'string' ? fieldValue.trim() !== '' : !!fieldValue;

    if (!isTouchedField && !hasValue) {
      return 'outline-white/10 focus:outline-[#2563EB]/50';
    }

    if (hasError) {
      return 'outline-red-500/70 focus:outline-red-500';
    }

    if (hasWarning) {
      return 'outline-amber-500/70 focus:outline-amber-500';
    }

    if (hasValue && isTouchedField) {
      return 'outline-emerald-500/50 focus:outline-emerald-500/70';
    }

    return 'outline-white/10 focus:outline-[#2563EB]/50';
  }, [errors, touched, values]);

  // ─── Changement de pays ────────────────────────────────────────────────────

  const handleCountryChange = useCallback((newCountry: Country) => {
    setCountry(newCountry);
    // Mettre à jour le pays ET le téléphone (avec le nouveau préfixe) dans le même setState
    setValues(prev => ({ ...prev, country: newCountry, phone: newCountry.dialCode }));
    // Nettoyer l'erreur du champ téléphone quand on change de pays
    setErrors(prev => {
      const next = { ...prev };
      delete next['phone'];
      return next;
    });
  }, []);

  // ─── Vérification si le formulaire est prêt ────────────────────────────────

  const isFormReady = useCallback(() => {
    // Valider le formulaire complet
    const validationResult = validateContactForm(values);
    
    // Le formulaire est prêt si :
    // 1. Aucune erreur bloquante
    // 2. Tous les champs requis ont du contenu
    // 3. Au moins 3 champs ont été touchés (engagement utilisateur)
    const hasNoErrors = validationResult.errors.filter(e => e.severity === 'error').length === 0;
    const touchedFieldsCount = Object.values(touched).filter(Boolean).length;
    
    return hasNoErrors && touchedFieldsCount >= 3;
  }, [values, touched]);

  // ─── Retour ────────────────────────────────────────────────────────────────

  return {
    values,
    errors,
    touched,
    country,
    status,
    isSubmitting: status === 'submitting',
    isSuccess: status === 'success',
    isFormReady: isFormReady(),
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    handleCountryChange,
    getFieldError,
    getFieldClasses,
    getSelectClasses,
  };
}

export default useContactForm;
