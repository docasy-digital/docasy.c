// ─── Types de validation ────────────────────────────────────────────────────────

import { Country } from './phoneCountries';

export interface FieldError {
  field: string;
  message: string;
  severity: 'error' | 'warning';
}

export interface ValidationResult {
  isValid: boolean;
  errors: FieldError[];
}

// ─── Options de formulaire (Source de vérité) ────────────────────────────────

export const SERVICE_OPTIONS = [
  'Création de Site Web',
  'Tunnel de Vente',
  'Marketing Digital / Community Management',
  'Branding & Identité',
  'Pack Digital Complet',
  'Autre / Pas encore sûr',
];

export const BUDGET_OPTIONS = [
  'Moins de 1 000 €',
  '1 000 € – 3 000 €',
  '3 000 € – 7 000 €',
  '7 000 € – 15 000 €',
  '15 000 € +',
];

// ─── Placeholders dynamiques par service ────────────────────────────────────────

export const PLACEHOLDERS_BY_SERVICE: Record<string, string> = {
  'Création de Site Web': 'Décrivez le type de site (e-commerce, blog, portfolio...), vos fonctionnalités clés, vos concurrents, et vos objectifs...',
  'Tunnel de Vente': 'Expliquez votre produit/service, votre audience cible, votre processus de vente actuel, et vos attentes en matière de conversion...',
  'Marketing Digital / Community Management': 'Détaillez votre industrie, vos réseaux sociaux actuels, votre fréquence de publication souhaitée, et vos objectifs (engagement, followers, ventes)...',
  'Branding & Identité': 'Décrivez votre entreprise, vos valeurs, votre public cible, votre ton de communication, et vos inspirations visuelles...',
  'Pack Digital Complet': 'Parlez-nous de votre vision globale, vos objectifs à court et long terme, votre budget approx, et vos priorités...',
  'Autre / Pas encore sûr': 'Parlez-nous de vos objectifs, de votre calendrier et de toute exigence spécifique...',
};

export const DEFAULT_MESSAGE_PLACEHOLDER = 'Parlez-nous de vos objectifs, de votre calendrier et de toute exigence spécifique...';

// ─── Fonctions de validation individuelles ─────────────────────────────────────

export function validateName(value: string | undefined | null): FieldError | null {
  const trimmed = (value ?? '').trim();

  if (!trimmed) {
    return { field: 'name', message: 'Le nom est requis.', severity: 'error' };
  }

  if (trimmed.length < 2) {
    return { field: 'name', message: 'Le nom doit contenir au moins 2 caractères.', severity: 'error' };
  }

  if (!/^[a-zA-ZÀ-ÿ\s'-]+$/.test(trimmed)) {
    return { field: 'name', message: 'Le nom ne doit contenir que des lettres.', severity: 'error' };
  }

  return null;
}

export function validateEmail(value: string | undefined | null): FieldError | null {
  const trimmed = (value ?? '').trim();

  if (!trimmed) {
    return { field: 'email', message: "L'email est requis.", severity: 'error' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmed)) {
    return { field: 'email', message: "Veuillez entrer une adresse email valide.", severity: 'error' };
  }

  // Avertissement pour les domaines génériques (non-bloquant)
  const genericDomains = [
    'gmail.com', 'hotmail.com', 'hotmail.fr', 'outlook.com', 'outlook.fr', 
    'live.com', 'yahoo.com', 'yahoo.fr', 'icloud.com'
  ];
  const domain = trimmed.split('@')[1]?.toLowerCase();

  if (domain && genericDomains.includes(domain)) {
    return { 
      field: 'email', 
      message: "L'utilisation d'une adresse professionnelle est recommandée pour un traitement prioritaire.", 
      severity: 'warning' 
    };
  }

  return null;
}

export function validatePhone(value: string | undefined | null, selectedBudget?: string, country?: Country): FieldError | null {
  const trimmed = (value ?? '').trim();
  const isHighBudget = selectedBudget === BUDGET_OPTIONS[BUDGET_OPTIONS.length - 1] || selectedBudget === BUDGET_OPTIONS[BUDGET_OPTIONS.length - 2];

  // Si le champ ne contient que le préfixe du pays, considérer comme vide
  if (country && trimmed === country.dialCode) {
    if (isHighBudget) {
      return { field: 'phone', message: 'Le numéro est requis pour les projets à haut budget.', severity: 'error' };
    }
    return null;
  }

  if (!trimmed) {
    if (isHighBudget) {
      return { field: 'phone', message: 'Le numéro est requis pour les projets à haut budget.', severity: 'error' };
    }
    return null;
  }

  const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\./0-9]*$/;
  if (!phoneRegex.test(trimmed)) {
    return { field: 'phone', message: 'Veuillez entrer un numéro de téléphone valide.', severity: 'error' };
  }

  // Compter les chiffres sans le préfixe du pays
  let allDigits = trimmed.replace(/\D/g, '');
  const dialCodeDigits = country?.dialCode.replace('+', '') || '';
  
  // Enlever les chiffres du préfixe du total
  if (dialCodeDigits && allDigits.startsWith(dialCodeDigits)) {
    allDigits = allDigits.slice(dialCodeDigits.length);
  }

  if (allDigits.length < 5) {
    return { field: 'phone', message: 'Le numéro semble trop court.', severity: 'warning' };
  }

  // Vérifier que le nombre de chiffres correspond exactement au format du pays
  if (country) {
    const expectedDigits = (country.format.match(/X/g) || []).length;
    if (allDigits.length !== expectedDigits) {
      return { 
        field: 'phone', 
        message: `Veuillez entrer un numéro de téléphone valide.`, 
        severity: 'error' 
      };
    }
  }

  return null;
}

export function validateService(value: string | undefined | null): FieldError | null {
  if (!value) {
    return { field: 'service', message: 'Veuillez sélectionner un service.', severity: 'error' };
  }

  return null;
}

export function validateBudget(value: string | undefined | null): FieldError | null {
  if (!value) {
    return { field: 'budget', message: 'Veuillez sélectionner une fourchette de budget.', severity: 'error' };
  }

  return null;
}

export function validateMessage(value: string | undefined | null, selectedService?: string): FieldError | null {
  const trimmed = (value ?? '').trim();

  if (!trimmed) {
    return { field: 'message', message: 'Le message est requis.', severity: 'error' };
  }

  // Validation conditionnelle pour Tunnel de Vente (100 caractères min)
  const minLength = selectedService === 'Tunnel de Vente' ? 100 : 10;

  if (trimmed.length < minLength) {
    const errorMsg = selectedService === 'Tunnel de Vente' 
      ? 'Pour un Tunnel de Vente, merci de détailler votre besoin (100 caractères minimum).'
      : 'Le message doit contenir au moins 10 caractères.';
    return { field: 'message', message: errorMsg, severity: 'error' };
  }

  if (trimmed.length > 2000) {
    return { field: 'message', message: 'Le message ne doit pas dépasser 2000 caractères.', severity: 'warning' };
  }

  return null;
}

// ─── Validation globale du formulaire ──────────────────────────────────────────

export interface FormValues {
  name: string;
  email: string;
  phone: string;
  country: Country;
  service: string;
  budget: string;
  message: string;
}

export function validateContactForm(values: FormValues): ValidationResult {
  const errors: FieldError[] = [];

  const nameError = validateName(values.name);
  if (nameError) errors.push(nameError);

  const emailError = validateEmail(values.email);
  if (emailError) errors.push(emailError);

  const phoneError = validatePhone(values.phone, values.budget, values.country);
  if (phoneError) errors.push(phoneError);

  const serviceError = validateService(values.service);
  if (serviceError) errors.push(serviceError);

  const budgetError = validateBudget(values.budget);
  if (budgetError) errors.push(budgetError);

  const messageError = validateMessage(values.message, values.service);
  if (messageError) errors.push(messageError);

  return {
    isValid: errors.filter(e => e.severity === 'error').length === 0,
    errors,
  };
}

// ─── Validation d'un seul champ ────────────────────────────────────────────────

export function validateField(fieldName: keyof FormValues, value: string | undefined | null, allValues?: FormValues): FieldError | null {
  switch (fieldName) {
    case 'name': return validateName(value);
    case 'email': return validateEmail(value);
    case 'phone': return validatePhone(value, allValues?.budget, allValues?.country);
    case 'service': return validateService(value);
    case 'budget': return validateBudget(value);
    case 'message': return validateMessage(value, allValues?.service);
    default: return null;
  }
}
