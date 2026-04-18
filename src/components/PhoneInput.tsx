import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { COUNTRIES, Country, formatPhoneNumber } from '../utils/phoneCountries';
import { motion, AnimatePresence } from 'framer-motion';

interface PhoneInputProps {
  value: string;
  country: Country;
  onCountryChange: (country: Country) => void;
  onChange: (value: string) => void;
  onBlur: (formattedValue: string) => void;
  severity?: 'error' | 'warning' | null;
  placeholder?: string;
}

export function PhoneInput({
  value,
  country,
  onCountryChange,
  onChange,
  onBlur,
  severity,
  placeholder = '+229 01 60 39 39 06',
}: PhoneInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fermer le dropdown si on clique ailleurs
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    // Permettre la saisie libre sans formatage
    onChange(inputValue);
  };

  const handlePhoneBlur = () => {
    // Formater le numéro au blur
    const formatted = formatPhoneNumber(value, country.code);
    onChange(formatted);
    onBlur(formatted);
  };

  const handleCountrySelect = (selectedCountry: Country) => {
    // handleCountryChange gère la mise à jour du country et du téléphone
    // On n'appelle pas onChange pour éviter la validation en double
    onCountryChange(selectedCountry);
    setIsOpen(false);
    setSearchTerm('');
  };

  const filteredCountries = COUNTRIES.filter(
    c =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.dialCode.includes(searchTerm)
  );

  const outlineColor = severity === 'error' ? 'outline-red-500/70' : severity === 'warning' ? 'outline-amber-500/70' : 'outline-white/10';
  const focusColor = severity === 'error' ? 'focus:outline-red-500' : severity === 'warning' ? 'focus:outline-amber-500' : 'focus:outline-[#2563EB]/50';

  return (
    <div className="relative">
      <div className="flex gap-2">
        {/* Country Selector */}
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`px-3 py-3 rounded-xl bg-white/5 outline outline-1 text-white font-medium text-sm flex items-center gap-2 hover:bg-white/8 transition-all duration-200 ${outlineColor} ${focusColor} min-w-[140px] justify-between`}
          >
            <span className="text-lg">{country.flag}</span>
            <span className="text-xs text-white/70">{country.code}</span>
            <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.15 }}
                className="absolute top-full left-0 mt-2 w-56 bg-[#1e293b] border border-white/15 rounded-xl shadow-2xl z-50 overflow-hidden"
              >
                {/* Search */}
                <div className="p-3 border-b border-white/10">
                  <input
                    type="text"
                    placeholder="Rechercher..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-xs placeholder-white/40 focus:outline-none focus:border-[#2563EB]/50"
                  />
                </div>

                {/* Countries List */}
                <div className="max-h-64 overflow-y-auto">
                  {filteredCountries.length > 0 ? (
                    filteredCountries.map(c => (
                      <button
                        key={c.code}
                        type="button"
                        onClick={() => handleCountrySelect(c)}
                        className={`w-full px-4 py-3 text-left text-sm flex items-center gap-3 transition-colors ${
                          c.code === country.code
                            ? 'bg-[#2563EB]/20 text-white border-l-2 border-[#2563EB]'
                            : 'text-white/70 hover:bg-white/5'
                        }`}
                      >
                        <span className="text-lg">{c.flag}</span>
                        <div className="flex-1">
                          <div className="text-white text-xs font-medium">{c.name}</div>
                          <div className="text-white/50 text-[10px]">{c.dialCode}</div>
                        </div>
                      </button>
                    ))
                  ) : (
                    <div className="px-4 py-6 text-center text-white/40 text-xs">
                      Aucun pays trouvé
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Phone Input */}
        <input
          type="tel"
          value={value}
          onChange={handlePhoneChange}
          onBlur={handlePhoneBlur}
          placeholder={placeholder}
          className={`flex-1 px-4 py-3 rounded-xl bg-white/5 outline outline-1 text-white placeholder-white/25 text-sm focus:bg-white/8 transition-all duration-200 ${outlineColor} ${focusColor}`}
        />
      </div>
    </div>
  );
}
