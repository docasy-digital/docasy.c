import { useState, useCallback } from 'react';
import {
  FormValues,
  FieldError,
  validateField,
  validateContactForm,
} from '../utils/formValidation';
import { sendViaWhatsApp, ContactFormData } from '../utils/whatsapp';

// ─── Types du hook ─────────────────────────────────────────────────────────────

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export interface UseContactFormReturn {
  // État du formulaire
  values: FormValues;
  errors: Record<string, FieldError>;
  touched: Record<string, boolean>;

  // État de la soumission
  status: FormStatus;
  isSubmitting: boolean;
  isSuccess: boolean;

  // Handlers
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  resetForm: () => void;

  // Utilitaires
  getFieldError: (fieldName: string) => FieldError | undefined;
  getFieldClasses: (fieldName: string) => string;
}

// ─── État initial du formulaire ────────────────────────────────────────────────

const initialFormValues: FormValues = {
  name: '',
  email: '',
  phone: '',
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

  // ─── Validation d'un champ ─────────────────────────────────────────────────

  const validateFieldCallback = useCallback((fieldName: keyof FormValues, value: string) => {
    const error = validateField(fieldName, value);
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
    setValues(prev => ({ ...prev, [name]: value }));

    // Si le champ a déjà été touché, on re-valide en temps réel
    if (touched[name]) {
      validateFieldCallback(name as keyof FormValues, value);
    }
  }, [touched, validateFieldCallback]);

  // ─── Perte de focus ────────────────────────────────────────────────────────

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    validateFieldCallback(name as keyof FormValues, value);
  }, [validateFieldCallback]);

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
  }, []);

  // ─── Utilitaires ───────────────────────────────────────────────────────────

  const getFieldError = useCallback((fieldName: string): FieldError | undefined => {
    return errors[fieldName];
  }, [errors]);

  const getFieldClasses = useCallback((fieldName: string): string => {
    const hasError = errors[fieldName]?.severity === 'error';
    const hasWarning = errors[fieldName]?.severity === 'warning';
    const isTouchedField = touched[fieldName];
    const hasValue = values[fieldName as keyof FormValues]?.trim() !== '';

    if (!isTouchedField && !hasValue) {
      return 'border-white/10 focus:border-[#2563EB]/50';
    }

    if (hasError) {
      return 'border-red-500/70 focus:border-red-500 bg-red-500/5';
    }

    if (hasWarning) {
      return 'border-amber-500/70 focus:border-amber-500 bg-amber-500/5';
    }

    if (hasValue && isTouchedField) {
      return 'border-emerald-500/50 focus:border-emerald-500/70 bg-emerald-500/5';
    }

    return 'border-white/10 focus:border-[#2563EB]/50';
  }, [errors, touched, values]);

  // ─── Retour ────────────────────────────────────────────────────────────────

  return {
    values,
    errors,
    touched,
    status,
    isSubmitting: status === 'submitting',
    isSuccess: status === 'success',
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    getFieldError,
    getFieldClasses,
  };
}

export default useContactForm;
