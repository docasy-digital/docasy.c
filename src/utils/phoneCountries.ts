// ─── Types et données des pays ─────────────────────────────────────────────────

export interface Country {
  name: string;
  code: string;
  dialCode: string;
  flag: string;
  format: string;
}

export const COUNTRIES: Country[] = [
  // ─── AFRIQUE (60 pays) ──────────────────────────────────────────────────────
  { name: 'Afrique du Sud', code: 'ZA', dialCode: '+27', flag: '🇿🇦', format: '+27 XX XXX XXXX' },
  { name: 'Algérie', code: 'DZ', dialCode: '+213', flag: '🇦🇿', format: '+213 XXX XXX XXX' },
  { name: 'Angola', code: 'AO', dialCode: '+244', flag: '🇦🇴', format: '+244 XXX XXX XXX' },
  { name: 'Bénin', code: 'BJ', dialCode: '+229', flag: '🇧🇯', format: '+229 XX XX XX XX' },
  { name: 'Botswana', code: 'BW', dialCode: '+267', flag: '🇧🇼', format: '+267 XX XX XX XX' },
  { name: 'Burkina Faso', code: 'BF', dialCode: '+226', flag: '🇧🇫', format: '+226 XX XX XX XX' },
  { name: 'Burundi', code: 'BI', dialCode: '+257', flag: '🇧🇮', format: '+257 XX XX XXXX' },
  { name: 'Cameroun', code: 'CM', dialCode: '+237', flag: '🇨🇲', format: '+237 XXX XXX XXX' },
  { name: 'Cap-Vert', code: 'CV', dialCode: '+238', flag: '🇨🇻', format: '+238 XXX XX XX' },
  { name: 'Comores', code: 'KM', dialCode: '+269', flag: '🇰🇲', format: '+269 XXX XX XX' },
  { name: 'Congo', code: 'CG', dialCode: '+242', flag: '🇨🇬', format: '+242 XXX XXXXX' },
  { name: 'Congo (RDC)', code: 'CD', dialCode: '+243', flag: '🇨🇩', format: '+243 XXX XXX XXX' },
  { name: 'Côte d\'Ivoire', code: 'CI', dialCode: '+225', flag: '🇨🇮', format: '+225 XX XX XX XX' },
  { name: 'Djibouti', code: 'DJ', dialCode: '+253', flag: '🇩🇯', format: '+253 XXX XX XX' },
  { name: 'Égypte', code: 'EG', dialCode: '+20', flag: '🇪🇬', format: '+20 XXX XXX XXXX' },
  { name: 'Érythrée', code: 'ER', dialCode: '+291', flag: '🇪🇷', format: '+291 X XXX XXX' },
  { name: 'Eswatini', code: 'SZ', dialCode: '+268', flag: '🇸🇿', format: '+268 XXXX XXXX' },
  { name: 'Éthiopie', code: 'ET', dialCode: '+251', flag: '🇪🇹', format: '+251 XXX XXX XXX' },
  { name: 'Gabon', code: 'GA', dialCode: '+241', flag: '🇬🇦', format: '+241 X XX XX XX' },
  { name: 'Gambie', code: 'GM', dialCode: '+220', flag: '🇬🇲', format: '+220 XXX XXXX' },
  { name: 'Ghana', code: 'GH', dialCode: '+233', flag: '🇬🇭', format: '+233 XXX XXX XXX' },
  { name: 'Guinée', code: 'GN', dialCode: '+224', flag: '🇬🇳', format: '+224 XXX XX XX XX' },
  { name: 'Guinée équatoriale', code: 'GQ', dialCode: '+240', flag: '🇬🇶', format: '+240 XXX XXX XXX' },
  { name: 'Guinée-Bissau', code: 'GW', dialCode: '+245', flag: '🇬🇼', format: '+245 XXX XXXX' },
  { name: 'Kenya', code: 'KE', dialCode: '+254', flag: '🇰🇪', format: '+254 XXX XXX XXX' },
  { name: 'Lesotho', code: 'LS', dialCode: '+266', flag: '🇱🇸', format: '+266 XXXXX XXXX' },
  { name: 'Liberia', code: 'LR', dialCode: '+231', flag: '🇱🇷', format: '+231 XX XXX XXXX' },
  { name: 'Libye', code: 'LY', dialCode: '+218', flag: '🇱🇾', format: '+218 XXX XXX XXX' },
  { name: 'Madagascar', code: 'MG', dialCode: '+261', flag: '🇲🇬', format: '+261 XX XXX XXXX' },
  { name: 'Malawi', code: 'MW', dialCode: '+265', flag: '🇲🇼', format: '+265 X XXX XXX XX' },
  { name: 'Mali', code: 'ML', dialCode: '+223', flag: '🇲🇱', format: '+223 XX XX XX XX' },
  { name: 'Maroc', code: 'MA', dialCode: '+212', flag: '🇲🇦', format: '+212 XXX XXX XXX' },
  { name: 'Mauritanie', code: 'MR', dialCode: '+222', flag: '🇲🇷', format: '+222 XXXX XXXX' },
  { name: 'Maurice', code: 'MU', dialCode: '+230', flag: '🇲🇺', format: '+230 XXXX XXXX' },
  { name: 'Mozambique', code: 'MZ', dialCode: '+258', flag: '🇲🇿', format: '+258 XXX XXX XXX' },
  { name: 'Namibie', code: 'NA', dialCode: '+264', flag: '🇳🇦', format: '+264 XX XXX XXXX' },
  { name: 'Niger', code: 'NE', dialCode: '+227', flag: '🇳🇪', format: '+227 XX XX XX XX' },
  { name: 'Nigeria', code: 'NG', dialCode: '+234', flag: '🇳🇬', format: '+234 XXX XXX XXXX' },
  { name: 'Ouganda', code: 'UG', dialCode: '+256', flag: '🇺🇬', format: '+256 XXX XXX XXX' },
  { name: 'Rwanda', code: 'RW', dialCode: '+250', flag: '🇷🇼', format: '+250 XXX XXX XXX' },
  { name: 'Sahara occidental', code: 'EH', dialCode: '+212', flag: '🇪🇭', format: '+212 XXX XXXXX' },
  { name: 'Sao Tomé-et-Principe', code: 'ST', dialCode: '+239', flag: '🇸🇹', format: '+239 XX XXXXX' },
  { name: 'Sénégal', code: 'SN', dialCode: '+221', flag: '🇸🇳', format: '+221 XX XXX XXXX' },
  { name: 'Seychelles', code: 'SC', dialCode: '+248', flag: '🇸🇨', format: '+248 XXX XXXX' },
  { name: 'Sierra Leone', code: 'SL', dialCode: '+232', flag: '🇸🇱', format: '+232 XX XXX XXX' },
  { name: 'Somalie', code: 'SO', dialCode: '+252', flag: '🇸🇴', format: '+252 XX XXX XXX' },
  { name: 'Soudan', code: 'SD', dialCode: '+249', flag: '🇸🇩', format: '+249 XXX XXX XXXX' },
  { name: 'Soudan du Sud', code: 'SS', dialCode: '+211', flag: '🇸🇸', format: '+211 XXX XXX XXX' },
  { name: 'Tanzanie', code: 'TZ', dialCode: '+255', flag: '🇹🇿', format: '+255 XXX XXX XXX' },
  { name: 'Tchad', code: 'TD', dialCode: '+235', flag: '🇹🇩', format: '+235 XX XX XX XX' },
  { name: 'Togo', code: 'TG', dialCode: '+228', flag: '🇹🇬', format: '+228 XX XX XX XX' },
  { name: 'Tunisie', code: 'TN', dialCode: '+216', flag: '🇹🇳', format: '+216 XX XXX XXX' },
  { name: 'Zambie', code: 'ZM', dialCode: '+260', flag: '🇿🇲', format: '+260 XXX XXX XXX' },
  { name: 'Zimbabwe', code: 'ZW', dialCode: '+263', flag: '🇿🇼', format: '+263 XXX XXX XXX' },

  // ─── EUROPE (53 pays) ───────────────────────────────────────────────────────
  { name: 'Albanie', code: 'AL', dialCode: '+355', flag: '🇦🇱', format: '+355 XXX XXX XXX' },
  { name: 'Allemagne', code: 'DE', dialCode: '+49', flag: '🇩🇪', format: '+49 XXX XXXXXXX' },
  { name: 'Andorre', code: 'AD', dialCode: '+376', flag: '🇦🇩', format: '+376 XXX XXX' },
  { name: 'Autriche', code: 'AT', dialCode: '+43', flag: '🇦🇹', format: '+43 XXX XXXXXXX' },
  { name: 'Belgique', code: 'BE', dialCode: '+32', flag: '🇧🇪', format: '+32 X XX XX XX XX' },
  { name: 'Biélorussie', code: 'BY', dialCode: '+375', flag: '🇧🇾', format: '+375 XX XXX XX XX' },
  { name: 'Bosnie-Herzégovine', code: 'BA', dialCode: '+387', flag: '🇧🇦', format: '+387 XX XXX XXX' },
  { name: 'Bulgarie', code: 'BG', dialCode: '+359', flag: '🇧🇬', format: '+359 XXX XXX XXX' },
  { name: 'Chypre', code: 'CY', dialCode: '+357', flag: '🇨🇾', format: '+357 XXXX XXXX' },
  { name: 'Croatie', code: 'HR', dialCode: '+385', flag: '🇭🇷', format: '+385 X XXX XXXX' },
  { name: 'Danemark', code: 'DK', dialCode: '+45', flag: '🇩🇰', format: '+45 XXXX XXXX' },
  { name: 'Espagne', code: 'ES', dialCode: '+34', flag: '🇪🇸', format: '+34 XXX XX XX XX' },
  { name: 'Estonie', code: 'EE', dialCode: '+372', flag: '🇪🇪', format: '+372 XXXX XXXX' },
  { name: 'Finlande', code: 'FI', dialCode: '+358', flag: '🇫🇮', format: '+358 X XXX XXXX' },
  { name: 'France', code: 'FR', dialCode: '+33', flag: '🇫🇷', format: '+33 X XX XX XX XX' },
  { name: 'Géorgie', code: 'GE', dialCode: '+995', flag: '🇬🇪', format: '+995 XXX XX XXXX' },
  { name: 'Gibraltar', code: 'GI', dialCode: '+350', flag: '🇬🇮', format: '+350 XXXXX' },
  { name: 'Grèce', code: 'GR', dialCode: '+30', flag: '🇬🇷', format: '+30 XXX XXX XXXX' },
  { name: 'Groenland', code: 'GL', dialCode: '+299', flag: '🇬🇱', format: '+299 XXXX XXXX' },
  { name: 'Hongrie', code: 'HU', dialCode: '+36', flag: '🇭🇺', format: '+36 X XXX XXXX' },
  { name: 'Îles Féroé', code: 'FO', dialCode: '+298', flag: '🇫🇴', format: '+298 XXXXX' },
  { name: 'Irlande', code: 'IE', dialCode: '+353', flag: '🇮🇪', format: '+353 XXX XXX XXXX' },
  { name: 'Islande', code: 'IS', dialCode: '+354', flag: '🇮🇸', format: '+354 XXX XXXX' },
  { name: 'Italie', code: 'IT', dialCode: '+39', flag: '🇮🇹', format: '+39 XXX XXX XXXX' },
  { name: 'Lettonie', code: 'LV', dialCode: '+371', flag: '🇱🇻', format: '+371 XXXX XXXX' },
  { name: 'Liechtenstein', code: 'LI', dialCode: '+423', flag: '🇱🇮', format: '+423 XXX XXXXX' },
  { name: 'Lituanie', code: 'LT', dialCode: '+370', flag: '🇱🇹', format: '+370 XXX XXXXX' },
  { name: 'Luxembourg', code: 'LU', dialCode: '+352', flag: '🇱🇺', format: '+352 XXX XXXXX' },
  { name: 'Macédoine du Nord', code: 'MK', dialCode: '+389', flag: '🇲🇰', format: '+389 XX XXX XXX' },
  { name: 'Malte', code: 'MT', dialCode: '+356', flag: '🇲🇹', format: '+356 XXXX XXXX' },
  { name: 'Moldavie', code: 'MD', dialCode: '+373', flag: '🇲🇩', format: '+373 XXX XXX XX' },
  { name: 'Monaco', code: 'MC', dialCode: '+377', flag: '🇲🇨', format: '+377 XXXX XXXX' },
  { name: 'Monténégro', code: 'ME', dialCode: '+382', flag: '🇲🇪', format: '+382 XX XXX XXX' },
  { name: 'Norvège', code: 'NO', dialCode: '+47', flag: '🇳🇴', format: '+47 XXXX XXXX' },
  { name: 'Pays-Bas', code: 'NL', dialCode: '+31', flag: '🇳🇱', format: '+31 X XX XX XX XX' },
  { name: 'Pologne', code: 'PL', dialCode: '+48', flag: '🇵🇱', format: '+48 XXX XXX XXX' },
  { name: 'Portugal', code: 'PT', dialCode: '+351', flag: '🇵🇹', format: '+351 XXX XXX XXX' },
  { name: 'République Tchèque', code: 'CZ', dialCode: '+420', flag: '🇨🇿', format: '+420 XXX XXX XXX' },
  { name: 'Roumanie', code: 'RO', dialCode: '+40', flag: '🇷🇴', format: '+40 XXX XXX XXXX' },
  { name: 'Royaume-Uni', code: 'GB', dialCode: '+44', flag: '🇬🇧', format: '+44 XXXX XXX XXX' },
  { name: 'Russie', code: 'RU', dialCode: '+7', flag: '🇷🇺', format: '+7 XXX XXX XX XX' },
  { name: 'Saint-Marin', code: 'SM', dialCode: '+378', flag: '🇸🇲', format: '+378 XXXX XXXXX' },
  { name: 'Serbie', code: 'RS', dialCode: '+381', flag: '🇷🇸', format: '+381 XX XXX XXXX' },
  { name: 'Slovaquie', code: 'SK', dialCode: '+421', flag: '🇸🇰', format: '+421 XXX XXX XXX' },
  { name: 'Slovénie', code: 'SI', dialCode: '+386', flag: '🇸🇮', format: '+386 X XXX XXXX' },
  { name: 'Suède', code: 'SE', dialCode: '+46', flag: '🇸🇪', format: '+46 XXX XXXXX' },
  { name: 'Suisse', code: 'CH', dialCode: '+41', flag: '🇨🇭', format: '+41 XX XXX XX XX' },
  { name: 'Turquie', code: 'TR', dialCode: '+90', flag: '🇹🇷', format: '+90 XXX XXX XXXX' },
  { name: 'Ukraine', code: 'UA', dialCode: '+380', flag: '🇺🇦', format: '+380 XXX XXX XXX' },
  { name: 'Vatican', code: 'VA', dialCode: '+379', flag: '🇻🇦', format: '+379 XXXXXXXXX' },

  // ─── AMÉRIQUE (58 pays) ────────────────────────────────────────────────────
  { name: 'Anguilla', code: 'AI', dialCode: '+1264', flag: '🇦🇮', format: '+1264 XXX XXXX' },
  { name: 'Antigua-et-Barbuda', code: 'AG', dialCode: '+1268', flag: '🇦🇬', format: '+1268 XXX XXXX' },
  { name: 'Antilles Néerlandaises', code: 'AN', dialCode: '+599', flag: '🇦🇳', format: '+599 XXX XXXX' },
  { name: 'Argentine', code: 'AR', dialCode: '+54', flag: '🇦🇷', format: '+54 XXX XXX XXXX' },
  { name: 'Bahamas', code: 'BS', dialCode: '+1242', flag: '🇧🇸', format: '+1242 XXX XXXX' },
  { name: 'Barbade', code: 'BB', dialCode: '+1246', flag: '🇧🇧', format: '+1246 XXX XXXX' },
  { name: 'Belize', code: 'BZ', dialCode: '+501', flag: '🇧🇿', format: '+501 XXX XXXX' },
  { name: 'Bermudes', code: 'BM', dialCode: '+1441', flag: '🇧🇲', format: '+1441 XXX XXXX' },
  { name: 'Birmanie (Myanmar)', code: 'MM', dialCode: '+95', flag: '🇲🇲', format: '+95 XXX XXX XXXX' },
  { name: 'Bolivie', code: 'BO', dialCode: '+591', flag: '🇧🇴', format: '+591 XXXX XXXX' },
  { name: 'Brésil', code: 'BR', dialCode: '+55', flag: '🇧🇷', format: '+55 XXX XXXX XXXX' },
  { name: 'Canada', code: 'CA', dialCode: '+1', flag: '🇨🇦', format: '+1 (XXX) XXX-XXXX' },
  { name: 'Chili', code: 'CL', dialCode: '+56', flag: '🇨🇱', format: '+56 X XXXX XXXX' },
  { name: 'Colombie', code: 'CO', dialCode: '+57', flag: '🇨🇴', format: '+57 XXX XXX XXXX' },
  { name: 'Costa Rica', code: 'CR', dialCode: '+506', flag: '🇨🇷', format: '+506 XXXX XXXX' },
  { name: 'Curaçao', code: 'CW', dialCode: '+599', flag: '🇨🇼', format: '+599 XXXX XXXX' },
  { name: 'Dominique', code: 'DM', dialCode: '+1767', flag: '🇩🇲', format: '+1767 XXX XXXX' },
  { name: 'Équateur', code: 'EC', dialCode: '+593', flag: '🇪🇨', format: '+593 XX XXX XXXX' },
  { name: 'États-Unis', code: 'US', dialCode: '+1', flag: '🇺🇸', format: '+1 (XXX) XXX-XXXX' },
  { name: 'Grenade', code: 'GD', dialCode: '+1473', flag: '🇬🇩', format: '+1473 XXX XXXX' },
  { name: 'Guadeloupe', code: 'GP', dialCode: '+590', flag: '🇬🇵', format: '+590 XXX XX XX' },
  { name: 'Guam', code: 'GU', dialCode: '+1671', flag: '🇬🇺', format: '+1671 XXX XXXX' },
  { name: 'Guatémala', code: 'GT', dialCode: '+502', flag: '🇬🇹', format: '+502 XXXX XXXX' },
  { name: 'Guyana', code: 'GY', dialCode: '+592', flag: '🇬🇾', format: '+592 XXX XXXX' },
  { name: 'Haïti', code: 'HT', dialCode: '+509', flag: '🇭🇹', format: '+509 XXXX XXXX' },
  { name: 'Honduras', code: 'HN', dialCode: '+504', flag: '🇭🇳', format: '+504 XXXX XXXX' },
  { name: 'Îles Caïmans', code: 'KY', dialCode: '+1345', flag: '🇰🇾', format: '+1345 XXX XXXX' },
  { name: 'Îles Turques-et-Caïques', code: 'TC', dialCode: '+1649', flag: '🇹🇨', format: '+1649 XXX XXXX' },
  { name: 'Îles Vierges Britanniques', code: 'VG', dialCode: '+1284', flag: '🇻🇬', format: '+1284 XXX XXXX' },
  { name: 'Îles Vierges des États-Unis', code: 'VI', dialCode: '+1340', flag: '🇻🇮', format: '+1340 XXX XXXX' },
  { name: 'Jamaïque', code: 'JM', dialCode: '+1876', flag: '🇯🇲', format: '+1876 XXX XXXX' },
  { name: 'Martinique', code: 'MQ', dialCode: '+596', flag: '🇲🇶', format: '+596 XXX XX XX' },
  { name: 'Mexique', code: 'MX', dialCode: '+52', flag: '🇲🇽', format: '+52 XXX XXX XXXX' },
  { name: 'Montserrat', code: 'MS', dialCode: '+1664', flag: '🇲🇸', format: '+1664 XXX XXXX' },
  { name: 'Nicaragua', code: 'NI', dialCode: '+505', flag: '🇳🇮', format: '+505 XXXX XXXX' },
  { name: 'Panama', code: 'PA', dialCode: '+507', flag: '🇵🇦', format: '+507 XXXX XXXX' },
  { name: 'Paraguay', code: 'PY', dialCode: '+595', flag: '🇵🇾', format: '+595 XXX XXXXX' },
  { name: 'Pérou', code: 'PE', dialCode: '+51', flag: '🇵🇪', format: '+51 XXX XXX XXX' },
  { name: 'Porto Rico', code: 'PR', dialCode: '+1787', flag: '🇵🇷', format: '+1787 XXX XXXX' },
  { name: 'République Dominicaine', code: 'DO', dialCode: '+1809', flag: '🇩🇴', format: '+1809 XXX XXXX' },
  { name: 'Saint-Barthélemy', code: 'BL', dialCode: '+590', flag: '🇧🇱', format: '+590 XXX XX XX' },
  { name: 'Saint-Christophe-et-Niévès', code: 'KN', dialCode: '+1869', flag: '🇰🇳', format: '+1869 XXX XXXX' },
  { name: 'Saint-Martin', code: 'MF', dialCode: '+590', flag: '🇲🇫', format: '+590 XXX XX XX' },
  { name: 'Saint-Pierre-et-Miquelon', code: 'PM', dialCode: '+508', flag: '🇵🇲', format: '+508 XXXXX' },
  { name: 'Sainte-Lucie', code: 'LC', dialCode: '+1758', flag: '🇱🇨', format: '+1758 XXX XXXX' },
  { name: 'Surinam', code: 'SR', dialCode: '+597', flag: '🇸🇷', format: '+597 XXX XXXX' },
  { name: 'Trinité-et-Tobago', code: 'TT', dialCode: '+1868', flag: '🇹🇹', format: '+1868 XXX XXXX' },
  { name: 'Uruguay', code: 'UY', dialCode: '+598', flag: '🇺🇾', format: '+598 XXXX XXXX' },
  { name: 'Venezuela', code: 'VE', dialCode: '+58', flag: '🇻🇪', format: '+58 XXX XXX XXXX' },
  { name: 'Samoa Américaines', code: 'AS', dialCode: '+1684', flag: '🇦🇸', format: '+1684 XXX XXXX' },
  { name: 'Saint-Vincent-et-les-Grenadines', code: 'VC', dialCode: '+1784', flag: '🇻🇨', format: '+1784 XXX XXXX' },
  { name: 'Îles Åland', code: 'AX', dialCode: '+358', flag: '🇦🇽', format: '+358 XXX XXX XXXX' },
];

// ─── Fonctions utilitaires ─────────────────────────────────────────────────────

export function formatPhoneNumber(value: string, countryCode: string): string {
  const country = COUNTRIES.find(c => c.code === countryCode);
  if (!country) return value;

  // Enlever tous les caractères non numériques
  const cleaned = value.replace(/\D/g, '');

  // Ajouter le code pays s'il manque
  let formatted = cleaned;
  if (!cleaned.startsWith(country.dialCode.replace('+', ''))) {
    formatted = country.dialCode.replace('+', '') + cleaned;
  }

  // Appliquer le format
  const pattern = country.format
    .replace(/\+\d+\s?/, '') // Enlever le code pays du pattern
    .replace(/X/g, 'X');

  // Formater selon le pattern
  let result = '';
  let valueIndex = 0;
  for (let i = 0; i < pattern.length && valueIndex < formatted.length; i++) {
    if (pattern[i] === 'X') {
      result += formatted[valueIndex];
      valueIndex++;
    } else {
      result += pattern[i];
    }
  }

  return country.dialCode + ' ' + result.trim();
}

export function getCountryByDialCode(dialCode: string): Country | undefined {
  return COUNTRIES.find(c => c.dialCode === dialCode);
}

export function getDefaultCountry(): Country {
  return COUNTRIES[1]; // Bénin par défaut
}

export function getCountryByCode(code: string): Country | undefined {
  return COUNTRIES.find(c => c.code === code);
}
