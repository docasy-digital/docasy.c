// ─── Types de validation ────────────────────────────────────────────────────────

export interface FieldError {
  field: string;
  message: string;
  severity: 'error' | 'warning';
}

export interface ValidationResult {
  isValid: boolean;
  errors: FieldError[];
}

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

  return null;
}

export function validatePhone(value: string | undefined | null): FieldError | null {
  const trimmed = (value ?? '').trim();

  // Téléphone optionnel mais si renseigné, doit être valide
  if (!trimmed) {
    return null; // Optionnel
  }

  const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\./0-9]*$/;
  if (!phoneRegex.test(trimmed)) {
    return { field: 'phone', message: 'Veuillez entrer un numéro de téléphone valide.', severity: 'error' };
  }

  if (trimmed.replace(/\D/g, '').length < 6) {
    return { field: 'phone', message: 'Le numéro semble trop court.', severity: 'warning' };
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

export function validateMessage(value: string | undefined | null): FieldError | null {
  const trimmed = (value ?? '').trim();

  if (!trimmed) {
    return { field: 'message', message: 'Le message est requis.', severity: 'error' };
  }

  if (trimmed.length < 10) {
    return { field: 'message', message: 'Le message doit contenir au moins 10 caractères.', severity: 'error' };
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

  const phoneError = validatePhone(values.phone);
  if (phoneError) errors.push(phoneError);

  const serviceError = validateService(values.service);
  if (serviceError) errors.push(serviceError);

  const budgetError = validateBudget(values.budget);
  if (budgetError) errors.push(budgetError);

  const messageError = validateMessage(values.message);
  if (messageError) errors.push(messageError);

  return {
    isValid: errors.filter(e => e.severity === 'error').length === 0,
    errors,
  };
}

// ─── Validation d'un seul champ ────────────────────────────────────────────────

export function validateField(fieldName: keyof FormValues, value: string | undefined | null): FieldError | null {
  switch (fieldName) {
    case 'name': return validateName(value);
    case 'email': return validateEmail(value);
    case 'phone': return validatePhone(value);
    case 'service': return validateService(value);
    case 'budget': return validateBudget(value);
    case 'message': return validateMessage(value);
    default: return null;
  }
}
