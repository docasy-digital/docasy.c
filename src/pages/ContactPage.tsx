import { useState } from 'react';
import {
  Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle, Sparkles, Send
} from 'lucide-react';

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

function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const services = [
    'Création de Site Web',
    'Tunnel de Vente',
    'Marketing Digital / Community Management',
    'Branding & Identité',
    'Pack Digital Complet',
    'Autre / Pas encore sûr',
  ];

  const budgets = [
    'Moins de 1 000 €',
    '1 000 € – 3 000 €',
    '3 000 € – 7 000 €',
    '7 000 € – 15 000 €',
    '15 000 € +',
  ];

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
      value: '+1 (234) 567-890',
      sub: 'Discutez avec nous directement',
      href: 'https://wa.me/1234567890',
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
              href="https://wa.me/1234567890?text=Bonjour%20DOCASY!%20Je%20souhaiterais%20discuter%20d'un%20projet."
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
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-16">
                  <div className="w-20 h-20 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center mb-6">
                    <CheckCircle size={36} className="text-[#10B981]" />
                  </div>
                  <h3 className="text-white font-black text-2xl mb-3">Message Reçu ! 🎉</h3>
                  <p className="text-white/55 text-base max-w-sm leading-relaxed mb-6">
                    Merci de nous avoir contactés ! Notre équipe va examiner les détails de votre projet et reviendra vers vous sous 24 heures.
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => { setSubmitted(false); setFormState({ name: '', email: '', phone: '', service: '', budget: '', message: '' }); }}
                      className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-sm hover:bg-white/10 transition-colors"
                    >
                      Envoyer un autre
                    </button>
                    <a
                      href="https://wa.me/1234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-[#25D366] text-white font-medium text-sm hover:bg-[#22C55E] transition-colors"
                    >
                      Discuter sur WhatsApp
                    </a>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-white font-black text-2xl md:text-3xl mb-2">Démarrez Votre Projet</h2>
                    <p className="text-white/45 text-sm">Remplissez les détails ci-dessous et nous préparerons une proposition personnalisée pour vous.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/50 text-xs font-medium uppercase tracking-wider mb-2">
                          Nom Complet *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          placeholder="Jean Dupont"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#2563EB]/50 focus:bg-white/8 transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-white/50 text-xs font-medium uppercase tracking-wider mb-2">
                          Adresse Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          placeholder="jean@entreprise.com"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#2563EB]/50 focus:bg-white/8 transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-white/50 text-xs font-medium uppercase tracking-wider mb-2">
                        Téléphone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="+33 6 00 00 00 00"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#2563EB]/50 focus:bg-white/8 transition-all duration-200"
                      />
                    </div>

                    {/* Service & Budget */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/50 text-xs font-medium uppercase tracking-wider mb-2">
                          Service Souhaité *
                        </label>
                        <select
                          name="service"
                          value={formState.service}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-[#1e293b] border border-white/10 text-white text-sm focus:outline-none focus:border-[#2563EB]/50 transition-all duration-200 appearance-none"
                        >
                          <option value="" disabled>Sélectionnez un service</option>
                          {services.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-white/50 text-xs font-medium uppercase tracking-wider mb-2">
                          Budget Estimé *
                        </label>
                        <select
                          name="budget"
                          value={formState.budget}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-[#1e293b] border border-white/10 text-white text-sm focus:outline-none focus:border-[#2563EB]/50 transition-all duration-200 appearance-none"
                        >
                          <option value="" disabled>Sélectionnez une fourchette</option>
                          {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-white/50 text-xs font-medium uppercase tracking-wider mb-2">
                        Détails du Projet *
                      </label>
                      <textarea
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Parlez-nous de vos objectifs, de votre calendrier et de toute exigence spécifique..."
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#2563EB]/50 focus:bg-white/8 transition-all duration-200 resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white font-bold text-base shadow-2xl hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Envoyer ma Demande</span>
                          <Send size={18} />
                        </>
                      )}
                    </button>

                    <p className="text-center text-white/25 text-xs">
                      En envoyant ce formulaire, vous acceptez nos <a href="#" className="underline hover:text-white/40 transition-colors">Conditions</a> et <a href="#" className="underline hover:text-white/40 transition-colors">Politique de Confidentialité</a>.
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
