import { useState } from 'react';
import {
  Mail, Phone, MapPin, Clock, CheckCircle, Sparkles, Send,
  AlertCircle, AlertTriangle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICE_OPTIONS, BUDGET_OPTIONS, FieldError, PLACEHOLDERS_BY_SERVICE, DEFAULT_MESSAGE_PLACEHOLDER } from '../utils/formValidation';
import { useContactForm } from '../hooks/useContactForm';
import { PhoneInput } from '../components/PhoneInput';

// ─── Composant d'affichage des erreurs ────────────────────────────────────────

interface FieldErrorDisplayProps {
  message: string;
  severity: 'error' | 'warning';
}

function FieldErrorDisplay({ message, severity }: FieldErrorDisplayProps) {
  const variants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -5 },
  };

  if (severity === 'warning') {
    return (
      <AnimatePresence>
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-1.5 mt-1.5 text-amber-400/90 text-xs"
        >
          <AlertTriangle size={12} className="flex-shrink-0" />
          <span>{message}</span>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    // Framer Motion's AnimatePresence is crucial for exit animations
    <AnimatePresence>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.2 }}
        className="flex items-center gap-1.5 mt-1.5 text-red-400/90 text-xs"
      >
        <AlertCircle size={12} className="flex-shrink-0" />
        <span>{message}</span>
      </motion.div>
    </AnimatePresence>
  );
}

function PageHero() {
  return (
    <section className="relative pt-36 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-r from-[#2563EB]/10 to-[#7C3AED]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 text-[#10B981] text-xs font-semibold uppercase tracking-widest mb-6">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          Nous sommes Disponibles
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
          Construisons quelque chose{' '}
          <span className="gradient-text">d'extraordinaire</span>
        </h1>
        <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
          Parlez-nous de votre projet et nous vous montrerons exactement comment DOCASY peut transformer votre présence digitale. Consultation gratuite, sans pression.
        </p>
      </div>
    </section>
  );
}

// ─── Section Contact ───────────────────────────────────────────────────────────

function ContactSection() {
  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    getFieldError,
    getFieldClasses,
    getSelectClasses,
    isSubmitting,
    isSuccess,
    country,
    handleCountryChange,
    isFormReady,
  } = useContactForm();

  const contactInfo = [
    {
      icon: Mail,
      color: '#2563EB',
      label: 'Email',
      value: 'hello@docasy.com',
      sub: 'Nous répondons sous 24h',
      href: 'mailto:hello@docasy.com',
    },
    {
      icon: Phone,
      color: '#25D366',
      label: 'WhatsApp',
      value: '+229 01 60 39 39 06',
      sub: 'Discutez avec nous directement',
      href: 'https://wa.me/2290160393906',
    },
    {
      icon: MapPin,
      color: '#7C3AED',
      label: 'Localisation',
      value: 'À distance · International',
      sub: 'Nous travaillons globalement',
      href: '#',
    },
    {
      icon: Clock,
      color: '#F59E0B',
      label: 'Temps de Réponse',
      value: 'Sous 24 Heures',
      sub: 'Lundi – Vendredi',
      href: '#',
    },
  ];

  return (
    <section className="pb-24 relative overflow-hidden">
      <div className="absolute inset-0 dots-bg opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact cards */}
            {contactInfo.map(({ icon: Icon, color, label, value, sub, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 rounded-2xl bg-white/3 border border-white/8 hover:border-white/15 transition-all duration-300 group hover:-translate-y-0.5"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${color}15`, border: `1px solid ${color}25` }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <div>
                  <p className="text-white/35 text-xs uppercase tracking-widest mb-0.5">{label}</p>
                  <p className="text-white font-semibold text-sm">{value}</p>
                  <p className="text-white/40 text-xs">{sub}</p>
                </div>
              </a>
            ))}

            {/* WhatsApp quick CTA */}
            <a
              href="https://wa.me/2290160393906?text=Bonjour%20DOCASY!%20Je%20souhaiterais%20discuter%20d'un%20projet."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full p-4 rounded-2xl bg-[#25D366] text-white font-bold hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span className="text-xl">💬</span>
              <span>Discuter sur WhatsApp maintenant</span>
            </a>

            {/* Trust signals */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#2563EB]/10 to-[#7C3AED]/5 border border-[#2563EB]/20">
              <h4 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
                <Sparkles size={14} className="text-[#06B6D4]" />
                Pourquoi les clients choisissent DOCASY
              </h4>
              <div className="space-y-2.5">
                {[
                  'Première consultation gratuite',
                  'Stratégie personnalisée pour votre entreprise',
                  'Pas de frais cachés ou de surprises',
                  'Garantie de satisfaction à 100%',
                  'Approche axée sur les résultats',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle size={13} className="text-[#10B981] flex-shrink-0" />
                    <span className="text-white/60 text-xs">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="p-8 md:p-10 rounded-3xl bg-white/3 border border-white/8">
              {isSuccess ? (
                /* ─── État de succès ─────────────────────────────────────── */
                <div className="flex flex-col items-center justify-center text-center py-16">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center">
                      <CheckCircle size={44} className="text-emerald-500" />
                    </div>
                    {/* Pulse ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-emerald-500/20 animate-ping" />
                  </div>

                  <h3 className="text-white font-black text-2xl mb-3">
                    Demande Envoyée avec Succès ! 🎉
                  </h3>

                  <p className="text-white/55 text-base max-w-sm leading-relaxed mb-2">
                    Merci de nous avoir contactés ! Votre demande a été transmise à notre équipe via WhatsApp.
                  </p>
                  <p className="text-emerald-400/80 text-sm mb-6">
                    ⏱️ Nous reviendrons vers vous sous 24 heures.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={resetForm}
                      className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-sm hover:bg-white/10 transition-colors"
                    >
                      Envoyer un autre message
                    </button>
                    <a
                      href="https://wa.me/2290160393906"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-[#25D366] text-white font-medium text-sm hover:bg-[#22C55E] transition-colors flex items-center justify-center gap-2"
                    >
                      <span>💬</span>
                      <span>Ouvrir WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                /* ─── Formulaire ─────────────────────────────────────────── */
                <>
                  <div className="mb-8">
                    <h2 className="text-white font-black text-2xl md:text-3xl mb-2">Démarrez Votre Projet</h2>
                    <p className="text-white/45 text-sm">Remplissez les détails ci-dessous et nous préparerons une proposition personnalisée pour vous.</p>

                    {/* Indicateur d'erreurs globales */}
                    {Object.values(errors).some((e: FieldError) => e.severity === 'error') && (
                      <div className="mt-4 flex items-start gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                        <AlertCircle size={16} className="text-red-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-red-400 text-xs font-semibold">
                            Veuillez corriger les erreurs ci-dessous.
                          </p>
                          <p className="text-red-400/60 text-xs">
                            {Object.values(errors).filter((e: FieldError) => e.severity === 'error').length} champ(s) à corriger
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Nom */}
                      <div>
                        <label htmlFor="name" className="block text-white/50 text-xs font-medium uppercase tracking-wider mb-2">
                          Nom Complet *
                        </label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Jean Dupont"
                          className={`w-full px-4 py-3 rounded-xl bg-white/5 outline outline-1 text-white placeholder-white/25 text-sm focus:bg-white/8 transition-all duration-200 ${getFieldClasses('name')}`}
                        />
                        {getFieldError('name') && (
                          <FieldErrorDisplay message={getFieldError('name')!.message} severity={getFieldError('name')!.severity} />
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-white/50 text-xs font-medium uppercase tracking-wider mb-2">
                          Adresse Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="jean@entreprise.com"
                          className={`w-full px-4 py-3 rounded-xl bg-white/5 outline outline-1 text-white placeholder-white/25 text-sm focus:bg-white/8 transition-all duration-200 ${getFieldClasses('email')}`}
                        />
                        {getFieldError('email') && (
                          <FieldErrorDisplay message={getFieldError('email')!.message} severity={getFieldError('email')!.severity} />
                        )}
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-white/50 text-xs font-medium uppercase tracking-wider mb-2">
                        Téléphone / WhatsApp *
                      </label>
                      <PhoneInput
                        value={values.phone}
                        country={country}
                        onCountryChange={handleCountryChange}
                        onChange={(val) =>
                          handleChange({
                            target: { name: 'phone', value: val },
                          } as React.ChangeEvent<HTMLInputElement>)
                        }
                        onBlur={() =>
                          handleBlur({
                            target: { name: 'phone' },
                          } as React.FocusEvent<HTMLInputElement>)
                        }
                        error={!!getFieldError('phone')}
                        placeholder={`${country.dialCode} XX XX XX XX`}
                      />
                      {getFieldError('phone') && (
                        <FieldErrorDisplay message={getFieldError('phone')!.message} severity={getFieldError('phone')!.severity} />
                      )}
                    </div>

                    {/* Service & Budget */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Service */}
                      <div>
                        <label htmlFor="service" className="block text-white/50 text-xs font-medium uppercase tracking-wider mb-2">
                          Service Souhaité *
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={values.service}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full px-4 py-3 rounded-xl bg-[#1e293b] outline outline-1 text-white text-sm transition-all duration-200 appearance-none ${getSelectClasses('service')}`}
                        >
                          <option value="" disabled>Sélectionnez un service</option>
                          {SERVICE_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                        {getFieldError('service') && (
                          <FieldErrorDisplay message={getFieldError('service')!.message} severity={getFieldError('service')!.severity} />
                        )}
                      </div>

                      {/* Budget */}
                      <div>
                        <label htmlFor="budget" className="block text-white/50 text-xs font-medium uppercase tracking-wider mb-2">
                          Budget Estimé *
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={values.budget}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full px-4 py-3 rounded-xl bg-[#1e293b] outline outline-1 text-white text-sm transition-all duration-200 appearance-none ${getSelectClasses('budget')}`}
                        >
                          <option value="" disabled>Sélectionnez une fourchette</option>
                          {BUDGET_OPTIONS.map(b => <option key={b} value={b}>{b}</option>)}
                        </select>
                        {getFieldError('budget') && (
                          <FieldErrorDisplay message={getFieldError('budget')!.message} severity={getFieldError('budget')!.severity} />
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-white/50 text-xs font-medium uppercase tracking-wider mb-2">
                        Détails du Projet *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        rows={5}
                        placeholder={PLACEHOLDERS_BY_SERVICE[values.service] || DEFAULT_MESSAGE_PLACEHOLDER}
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 outline outline-1 text-white placeholder-white/25 text-sm focus:bg-white/8 transition-all duration-200 resize-none ${getFieldClasses('message')}`}
                      />
                      {getFieldError('message') && (
                        <FieldErrorDisplay message={getFieldError('message')!.message} severity={getFieldError('message')!.severity} />
                      )}
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      animate={isFormReady ? { boxShadow: [
                        '0 0 20px rgba(37, 99, 235, 0.4), inset 0 0 20px rgba(37, 99, 235, 0.1)',
                        '0 0 40px rgba(37, 99, 235, 0.8), 0 0 60px rgba(124, 58, 237, 0.4), inset 0 0 20px rgba(37, 99, 235, 0.2)',
                        '0 0 20px rgba(37, 99, 235, 0.4), inset 0 0 20px rgba(37, 99, 235, 0.1)',
                      ], scale: [1, 1.02, 1] } : { scale: 1 }}
                      transition={isFormReady ? { duration: 2, repeat: Infinity, ease: 'easeInOut' } : { duration: 0 }}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white font-bold text-base shadow-2xl hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Envoi en cours...</span>
                        </>
                      ) : (
                        <>
                          <span>Envoyer ma Demande via WhatsApp</span>
                          <Send size={18} />
                        </>
                      )}
                    </motion.button>

                    <p className="text-center text-white/25 text-xs">
                      En envoyant ce formulaire, votre demande sera transmise directement via WhatsApp. Nous répondons sous 24h.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Combien de temps faut-il pour créer un site web ?',
      a: 'Selon la complexité, la plupart des sites web sont livrés en 3 à 14 jours ouvrables. Les landing pages simples peuvent être faites en 3 à 5 jours. Les sites web personnalisés complets prennent généralement 2 à 4 semaines. Nous fournissons toujours un calendrier précis avant de commencer.',
    },
    {
      q: 'Que comprend un projet avec DOCASY ?',
      a: 'Chaque projet inclut : session de stratégie, design sur mesure, développement, révisions, tests, support au lancement, et une période de support post-lancement de 30 jours. Sans frais cachés.',
    },
    {
      q: 'Offrez-vous un support continu après le lancement ?',
      a: 'Oui ! Nous proposons des forfaits de maintenance mensuels incluant les mises à jour, la surveillance de sécurité, les modifications de contenu et l\'optimisation des performances. Beaucoup de clients choisissent des partenariats durables.',
    },
    {
      q: 'Qu\'est-ce qui différencie DOCASY des autres agences ?',
      a: 'Nous sommes axés sur la conversion. Chaque décision est prise dans un esprit de croissance pour votre entreprise — pas seulement pour l\'esthétique. Nous combinons l\'excellence du design avec une réflexion marketing stratégique pour livrer un ROI mesurable.',
    },
    {
      q: 'Pouvez-vous travailler sur un site web existant ?',
      a: 'Absolument. Nous proposons des refontes, l\'optimisation des performances et l\'optimisation du taux de conversion pour les sites existants. Nous analyserons votre site actuel et recommanderons les changements les plus impactants.',
    },
    {
      q: 'Comment puis-je commencer ?',
      a: 'Remplissez le formulaire de contact ci-dessus ou envoyez-nous un message sur WhatsApp. Nous planifierons un appel stratégie gratuit de 30 minutes pour comprendre vos besoins et partager nos recommandations — sans engagement.',
    },
  ];

  return (
    <section className="py-24 bg-[#0a0f1e] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Questions{' '}
            <span className="gradient-text">Fréquentes</span>
          </h2>
          <p className="text-white/50">Tout ce que vous devez savoir avant de démarrer votre projet.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                open === i
                  ? 'bg-white/5 border-[#2563EB]/30'
                  : 'bg-white/3 border-white/8 hover:border-white/15'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-white font-semibold text-sm pr-4">{faq.q}</span>
                <span className={`text-[#2563EB] text-lg font-bold flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-white/55 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/40 text-sm mb-4">D'autres questions ?</p>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-105"
          >
            💬 Demandez-nous sur WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero />
      <ContactSection />
      <FAQSection />
    </>
  );
}
