import { Link } from 'react-router-dom';
import {
  TrendingUp, Megaphone, CheckCircle, ArrowRight,
  Code, Smartphone, Search, Zap, Mail, BarChart3, Target,
  Layers, Eye, Type, Image, Star
} from 'lucide-react';

function PageHero() {
  return (
    <section className="relative pt-36 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-r from-[#2563EB]/10 to-[#7C3AED]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#06B6D4] text-xs font-semibold uppercase tracking-widest mb-6">
          Ce Que Nous Faisons
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
          Services <span className="gradient-text">Digitaux Premium</span>
        </h1>
        <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
          Chaque service que nous proposons est conçu pour faire croître votre entreprise, attirer vos clients idéaux et générer des résultats mesurables.
        </p>
      </div>
    </section>
  );
}

// ─── Website Creation ─────────────────────────────────────────────────────────
function WebsiteService() {
  const features = [
    { icon: Code, title: 'Développement Sur Mesure', desc: 'Code fait main, sans constructeurs de pages lourds. Rapide, propre et évolutif.' },
    { icon: Smartphone, title: 'Design Mobile-First', desc: 'Perfectionné pour chaque écran — du mobile aux écrans ultra-larges.' },
    { icon: Search, title: 'Base SEO', desc: 'Conçu avec le SEO technique à l\'esprit pour que les moteurs de recherche aiment votre site.' },
    { icon: Zap, title: 'Vitesse Fulgurante', desc: 'Optimisé pour les Core Web Vitals. Temps de chargement inférieur à 2 secondes garanti.' },
  ];

  return (
    <section id="websites" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB] text-xs font-semibold uppercase tracking-widest mb-6">
              01 — Création de Sites Web
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Des sites web qui{' '}
              <span className="text-[#2563EB]">travaillent aussi dur</span>{' '}
              que vous
            </h2>
            <p className="text-white/55 text-base leading-relaxed mb-8">
              Nous ne construisons pas de simples brochures — nous construisons des machines à conversion. Chaque élément de votre site web est stratégiquement conçu pour guider les visiteurs vers l'acte d'achat. Des pages de destination aux plateformes e-commerce complètes, nous livrons une qualité premium dans les délais.
            </p>

            <div className="space-y-3 mb-10">
              {[
                'WordPress, React, Next.js & plus',
                'E-commerce & boutiques en ligne',
                'Sites vitrines & agences',
                'Landing pages & microsites',
                'Délais de livraison de 3 à 14 jours',
                'Support post-lancement inclus',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-[#2563EB] flex-shrink-0" />
                  <span className="text-white/65 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#2563EB] text-white font-semibold text-sm hover:bg-[#1D4ED8] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all duration-300 hover:scale-105"
            >
              Obtenir un Devis pour un Site Web <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="p-5 rounded-2xl bg-white/3 border border-[#2563EB]/15 hover:border-[#2563EB]/30 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={18} className="text-[#2563EB]" />
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-1">{f.title}</h4>
                  <p className="text-white/40 text-xs leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
            {/* Stats card */}
            <div className="col-span-2 p-5 rounded-2xl bg-gradient-to-r from-[#2563EB]/10 to-[#2563EB]/5 border border-[#2563EB]/20">
              <div className="flex items-center gap-6">
                {[{ v: '98%', l: 'Satisfaction Client' }, { v: '< 2s', l: 'Temps de Chargement' }, { v: '+45%', l: 'Conversion Moyenne' }].map(({ v, l }) => (
                  <div key={l} className="text-center flex-1">
                    <div className="text-2xl font-black text-[#2563EB]">{v}</div>
                    <div className="text-white/40 text-xs">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Sales Funnels ────────────────────────────────────────────────────────────
function FunnelsService() {
  const steps = [
    { num: '01', title: 'Attirer', desc: 'Générez un trafic ciblé vers votre tunnel via la publicité, le SEO et le contenu organique.' },
    { num: '02', title: 'Capturer', desc: 'Convertissez les visiteurs en leads avec des aimants à prospects et des offres irrésistibles.' },
    { num: '03', title: 'Nourrir', desc: 'Des séquences d\'emails automatisées instaurent la confiance et guident les prospects vers l\'achat.' },
    { num: '04', title: 'Convertir', desc: 'Des pages de vente optimisées et des tunnels de paiement maximisent vos revenus.' },
  ];

  return (
    <section id="funnels" className="py-24 bg-[#0a0f1e] relative overflow-hidden">
      <div className="absolute inset-0 dots-bg opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7C3AED]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Funnel visualization */}
          <div className="order-2 lg:order-1">
            <div className="space-y-3">
              {steps.map((step, i) => (
                <div
                  key={step.num}
                  className="flex items-center gap-5 p-5 rounded-2xl bg-white/3 border border-[#7C3AED]/15 hover:border-[#7C3AED]/30 transition-all duration-300 group"
                  style={{ marginLeft: `${i * 20}px`, marginRight: `${(steps.length - 1 - i) * 20}px` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#2563EB] flex items-center justify-center text-white font-black text-xs flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">{step.title}</h4>
                    <p className="text-white/40 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#7C3AED] text-xs font-semibold uppercase tracking-widest mb-6">
              02 — Tunnels de Vente
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Des systèmes automatisés qui{' '}
              <span className="text-[#7C3AED]">vendent pendant que vous dormez</span>
            </h2>
            <p className="text-white/55 text-base leading-relaxed mb-8">
              Un tunnel de vente est votre meilleur vendeur — il travaille 24h/24, 7j/7, ne prend jamais de pause et convertit de manière constante. Nous construisons des systèmes de tunnels, de la notoriété à l'achat, qui automatisent votre acquisition de clients.
            </p>

            <div className="space-y-3 mb-10">
              {[
                'Tunnels de génération de leads & opt-in',
                'Tunnels de lancement de produit',
                'Tunnels de webinaire & événement',
                'Séquences d\'automatisation d\'emails',
                'Tests A/B & optimisation',
                'Intégration & configuration CRM',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-[#7C3AED] flex-shrink-0" />
                  <span className="text-white/65 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#7C3AED] text-white font-semibold text-sm hover:bg-[#6D28D9] hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] transition-all duration-300 hover:scale-105"
            >
              Construire Mon Tunnel <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Digital Marketing ────────────────────────────────────────────────────────
function MarketingService() {
  const services = [
    { icon: Target, title: 'Publicité Payante', desc: 'Campagnes Meta Ads, Google Ads et TikTok optimisées pour un ROI maximum.' },
    { icon: BarChart3, title: 'Analyses & Rapports', desc: 'Tableaux de bord clairs et rapports mensuels pour toujours savoir ce qui fonctionne.' },
    { icon: Mail, title: 'Email Marketing', desc: 'Campagnes automatisées qui nourrissent les leads et réactivent les clients existants.' },
    { icon: Star, title: 'Stratégie de Contenu', desc: 'Plans de contenu basés sur les données qui vous positionnent comme l\'autorité dans votre niche.' },
    { icon: Megaphone, title: 'Community Management', desc: 'Présence active et constante sur les réseaux sociaux pour bâtir une audience fidèle.' },
    { icon: TrendingUp, title: 'Stratégie de Croissance', desc: 'Feuilles de route personnalisées pour augmenter la portée en ligne de votre marque mois après mois.' },
  ];

  return (
    <section id="marketing" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-[#06B6D4]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 text-[#06B6D4] text-xs font-semibold uppercase tracking-widest mb-6">
            03 — Marketing Digital & Community Management
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
            Un marketing qui{' '}
            <span className="text-[#06B6D4]">génère une croissance réelle</span>
          </h2>
          <p className="text-white/55 text-base max-w-2xl mx-auto leading-relaxed">
            Nous développons et exécutons des stratégies de marketing digital qui amènent systématiquement vos clients idéaux à votre porte — organiquement et via des canaux payants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="group p-6 rounded-2xl bg-white/3 border border-[#06B6D4]/10 hover:border-[#06B6D4]/30 transition-all duration-300 hover:-translate-y-1">
                <div className="w-11 h-11 rounded-xl bg-[#06B6D4]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={20} className="text-[#06B6D4]" />
                </div>
                <h4 className="text-white font-bold text-base mb-2">{s.title}</h4>
                <p className="text-white/45 text-sm leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#06B6D4] text-white font-semibold text-sm hover:bg-[#0891B2] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300 hover:scale-105"
          >
            Faire Croître Ma Marque <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Branding ─────────────────────────────────────────────────────────────────
function BrandingService() {
  const deliverables = [
    { icon: Eye, title: 'Design de Logo', desc: 'Des logos intemporels et polyvalents qui s\'adaptent partout.' },
    { icon: Layers, title: 'Charte Graphique', desc: 'Guide de style complet pour une application cohérente de la marque.' },
    { icon: Type, title: 'Typographie & Couleurs', desc: 'Systèmes de polices et de couleurs intentionnels qui communiquent vos valeurs.' },
    { icon: Image, title: 'Identité Visuelle', desc: 'Templates, graphismes et actifs pour un look de marque cohérent.' },
  ];

  return (
    <section id="branding" className="py-24 bg-[#0a0f1e] relative overflow-hidden">
      <div className="absolute inset-0 dots-bg opacity-15 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F59E0B]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#F59E0B] text-xs font-semibold uppercase tracking-widest mb-6">
              04 — Branding
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Une identité de marque qui{' '}
              <span className="text-[#F59E0B]">impose le premium</span>
            </h2>
            <p className="text-white/55 text-base leading-relaxed mb-8">
              Votre marque est plus qu'un logo — c'est l'expérience entière que vous créez pour vos clients. Nous construisons des identités de marque qui vous positionnent comme le choix premium sur votre marché et créent une impression inoubliable à chaque point de contact.
            </p>

            <div className="space-y-3 mb-10">
              {[
                'Stratégie de marque & positionnement profonds',
                'Analyse de la concurrence & étude de marché',
                'Design de logo (3 concepts + révisions)',
                'Palette de couleurs & système typographique complets',
                'Document de charte graphique',
                'Kit réseaux sociaux & templates',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-[#F59E0B] flex-shrink-0" />
                  <span className="text-white/65 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#F59E0B] text-black font-semibold text-sm hover:bg-[#D97706] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all duration-300 hover:scale-105"
            >
              Donner une Marque à Mon Business <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {deliverables.map((d) => {
              const Icon = d.icon;
              return (
                <div key={d.title} className="group p-6 rounded-2xl bg-white/3 border border-[#F59E0B]/15 hover:border-[#F59E0B]/30 transition-all duration-300 aspect-square flex flex-col justify-between">
                  <div className="w-11 h-11 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon size={20} className="text-[#F59E0B]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">{d.title}</h4>
                    <p className="text-white/40 text-xs leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Bottom CTA ───────────────────────────────────────────────────────────────
function ServicesCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/15 via-[#7C3AED]/10 to-transparent" />
      <div className="absolute inset-0 grid-bg opacity-15" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
          Vous ne savez pas de quel service vous avez besoin ?
        </h2>
        <p className="text-white/55 text-base mb-10 leading-relaxed">
          Réservez un appel stratégique gratuit de 30 minutes. Nous analyserons votre situation actuelle et recommanderons la combinaison exacte de services qui vous apportera des résultats le plus rapidement possible.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white font-semibold hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] transition-all duration-300 hover:scale-105"
          >
            Réserver un Appel Stratégique Gratuit <ArrowRight size={16} />
          </Link>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all duration-300"
          >
            💬 Contactez-nous sur WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero />
      <WebsiteService />
      <FunnelsService />
      <MarketingService />
      <BrandingService />
      <ServicesCTA />
    </>
  );
}
