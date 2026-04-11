import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle, Star, TrendingUp, Shield, Zap,
  Globe, Megaphone, Palette, Users, Award,
  ChevronRight, BarChart3, Clock, ThumbsUp, Sparkles
} from 'lucide-react';

// ─── Hero Section ────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Hero background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/60 via-[#0F172A]/40 to-[#0F172A]" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Radial glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2563EB]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-[#7C3AED]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-[#06B6D4]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/70 mb-8 backdrop-blur-sm hover:border-[#2563EB]/40 transition-colors duration-300">
          <Sparkles size={14} className="text-[#06B6D4]" />
          <span>Agence Digitale Premium · International</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
        </div>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 max-w-5xl mx-auto">
          Transformez votre{' '}
          <span className="gradient-text">présence digitale</span>
          {' '}en une{' '}
          <span className="relative inline-block">
            <span className="gradient-text">machine à générer</span>
          </span>
          {' '}des clients
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          Nous concevons des sites web premium, des tunnels de vente puissants et des marques magnétiques qui attirent, convertissent et fidélisent vos clients idéaux — en pilote automatique.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            to="/contact"
            className="group flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white font-semibold text-base shadow-2xl hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>Démarrer Mon Projet</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-semibold text-base hover:bg-white/10 hover:border-[#25D366]/40 transition-all duration-300 backdrop-blur-sm"
          >
            <span className="text-[#25D366]">📱</span>
            <span>Contactez-nous sur WhatsApp</span>
          </a>
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {[
            { value: '50+', label: 'Projets Livrés' },
            { value: '98%', label: 'Satisfaction Client' },
            { value: '3x', label: 'ROI Moyen' },
            { value: '24h', label: 'Temps de Réponse' },
          ].map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="text-2xl md:text-3xl font-black gradient-text mb-1">{stat.value}</div>
              <div className="text-white/40 text-xs uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-xs uppercase tracking-widest">Défiler</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}

// ─── Pain Points / Problem Section ───────────────────────────────────────────
function Problems() {
  const problems = [
    { icon: '😤', title: 'Invisible en Ligne', desc: 'Vos concurrents dominent les résultats de recherche pendant que votre entreprise est enterrée à la page 5.' },
    { icon: '💸', title: 'Budget Publicitaire Gaspillé', desc: 'Dépenser des milliers en publicités qui attirent du trafic vers un site web qui ne convertit personne.' },
    { icon: '📉', title: 'Pas de Stratégie Claire', desc: 'Des efforts marketing aléatoires sans système cohérent pour attirer régulièrement des clients.' },
    { icon: '🕰️', title: 'Chronophage', desc: 'Essayer de gérer votre présence digitale vous-même au lieu de vous concentrer sur votre entreprise.' },
  ];

  return (
    <section className="py-24 bg-[#0a0f1e] relative overflow-hidden">
      <div className="absolute inset-0 dots-bg opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center justify-center mb-6">
          <div className="px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-widest">
            Le Vrai Problème
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white text-center mb-4 max-w-3xl mx-auto">
          Votre entreprise a du mal à{' '}
          <span className="text-red-400">croître en ligne ?</span>
        </h2>
        <p className="text-white/50 text-center max-w-xl mx-auto mb-16 text-base">
          Vous n'êtes pas seul. La plupart des entreprises font face aux mêmes défis frustrants — jusqu'à ce qu'elles réparent leur base digitale.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item) => (
            <div
              key={item.title}
              className="group p-6 rounded-2xl bg-white/3 border border-white/8 hover:border-red-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-[#2563EB]/10 to-[#7C3AED]/10 border border-[#2563EB]/20">
            <Sparkles size={16} className="text-[#06B6D4]" />
            <p className="text-white/70 text-sm">
              <span className="text-white font-semibold">DOCASY résout tout cela.</span> Voici comment →
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Services Overview ────────────────────────────────────────────────────────
function ServicesOverview() {
  const services = [
    {
      icon: Globe,
      title: 'Création de Sites Web',
      desc: 'Des sites web premium et performants conçus pour convertir les visiteurs en clients payants.',
      features: ['Design Personnalisé', 'Mobile-First', 'Optimisé SEO', 'Chargement Rapide'],
      color: '#2563EB',
      link: '/services#websites',
    },
    {
      icon: TrendingUp,
      title: 'Tunnels de Vente',
      desc: 'Des systèmes de tunnels stratégiques qui automatisent votre génération de leads et l\'acquisition de clients.',
      features: ['Pages de Destination', 'Capture de Leads', 'Séquences Email', 'Tests A/B'],
      color: '#7C3AED',
      link: '/services#funnels',
    },
    {
      icon: Megaphone,
      title: 'Marketing Digital',
      desc: 'Des campagnes marketing basées sur les données qui placent votre marque devant la bonne audience.',
      features: ['Réseaux Sociaux', 'Stratégie de Contenu', 'Publicités Payantes', 'Analyses'],
      color: '#06B6D4',
      link: '/services#marketing',
    },
    {
      icon: Palette,
      title: 'Branding',
      desc: 'Une identité de marque cohérente qui communique votre valeur et instaure une confiance immédiate.',
      features: ['Design de Logo', 'Guide de Marque', 'Identité Visuelle', 'Voix de la Marque'],
      color: '#F59E0B',
      link: '/services#branding',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7C3AED]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2563EB]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-6">
          <div className="px-4 py-1.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#06B6D4] text-xs font-semibold uppercase tracking-widest">
            Nos Services
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white text-center mb-4 max-w-3xl mx-auto">
          Tout ce dont votre entreprise a besoin pour{' '}
          <span className="gradient-text">dominer en ligne</span>
        </h2>
        <p className="text-white/50 text-center max-w-xl mx-auto mb-16 text-base">
          De la première impression à la conversion finale — nous couvrons chaque étape de votre croissance digitale.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                to={service.link}
                className="group p-8 rounded-2xl bg-white/3 border border-white/8 hover:border-white/15 transition-all duration-300 hover:-translate-y-1 card-hover"
              >
                <div className="flex items-start gap-5 mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${service.color}20`, border: `1px solid ${service.color}30` }}
                  >
                    <Icon size={22} style={{ color: service.color }} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">{service.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{service.desc}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 rounded-full text-xs font-medium text-white/60 border border-white/10 bg-white/5"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: service.color }}>
                  <span>En savoir plus</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white font-semibold text-base hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] transition-all duration-300 hover:scale-105"
          >
            Explorer Tous les Services <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Why Choose Us ────────────────────────────────────────────────────────────
function WhyUs() {
  const reasons = [
    { icon: Zap, title: 'Livraison Rapide', desc: 'Nous travaillons avec précision et rapidité. Pas de retards interminables — votre projet est lancé à temps.', color: '#F59E0B' },
    { icon: Shield, title: 'Résultats Garantis', desc: 'Notre travail est soutenu par une stratégie et des données. Nous nous concentrons sur les résultats, pas seulement sur l\'esthétique.', color: '#10B981' },
    { icon: Users, title: 'Équipe Dédiée', desc: 'Vous bénéficiez d\'une équipe engagée qui traite votre projet comme si c\'était sa propre entreprise.', color: '#2563EB' },
    { icon: Award, title: 'Qualité Premium', desc: 'Chaque pixel, chaque ligne de code, chaque message est conçu selon les normes les plus élevées.', color: '#7C3AED' },
    { icon: BarChart3, title: 'Basé sur les Données', desc: 'Nous prenons des décisions basées sur des analyses et des insights réels du marché, pas sur des suppositions.', color: '#06B6D4' },
    { icon: Clock, title: 'Support 24/7', desc: 'Nous sommes toujours accessibles. Vos questions reçoivent une réponse rapide et professionnelle.', color: '#F43F5E' },
  ];

  return (
    <section className="py-24 bg-[#0a0f1e] relative overflow-hidden">
      <div className="absolute inset-0 dots-bg opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#7C3AED] text-xs font-semibold uppercase tracking-widest mb-6">
              Pourquoi DOCASY
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              L'agence qui{' '}
              <span className="gradient-text">apporte réellement</span> des résultats
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-8">
              Nous ne sommes pas seulement une agence créative — nous sommes votre partenaire stratégique digital. Chaque décision que nous prenons est alignée avec un seul objectif : faire croître votre entreprise.
            </p>
            <div className="space-y-3 mb-10">
              {[
                'Pas de templates génériques — tout est conçu sur mesure',
                'Transparence totale avec des mises à jour du projet en temps réel',
                'Approche axée sur la stratégie soutenue par des études de marché',
                '100% satisfaction ou nous révisons jusqu\'à ce que vous aimiez'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-[#10B981] flex-shrink-0" />
                  <span className="text-white/70 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-[#06B6D4] font-semibold hover:gap-3 transition-all duration-200"
            >
              Notre Histoire <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className="group p-5 rounded-2xl bg-white/3 border border-white/8 hover:border-white/15 transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${reason.color}15`, border: `1px solid ${reason.color}25` }}
                  >
                    <Icon size={18} style={{ color: reason.color }} />
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-1">{reason.title}</h4>
                  <p className="text-white/40 text-xs leading-relaxed">{reason.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechVenture Inc.',
      avatar: 'SJ',
      rating: 5,
      text: 'DOCASY a complètement transformé notre présence en ligne. Dans les 3 mois suivant le lancement de notre nouveau site web et tunnel de vente, nous avons constaté une augmentation de 280% des leads qualifiés. Un travail absolument exceptionnel.',
      result: '+280% de Leads',
    },
    {
      name: 'Marcus Chen',
      role: 'Fondateur, GrowthLab',
      avatar: 'MC',
      rating: 5,
      text: 'Le pack branding était au-delà de mes attentes. Ils ont vraiment compris notre vision et l\'ont transformée en une identité visuelle qui résonne avec notre marché cible. Professionnel, rapide et créatif.',
      result: 'Revenus x3',
    },
    {
      name: 'Amelia Torres',
      role: 'Directrice, Luxe Beauty',
      avatar: 'AT',
      rating: 5,
      text: 'Notre tunnel de vente construit par DOCASY convertit à 18% — la moyenne du secteur est de 2-3%. Leur approche stratégique du marketing digital est véritablement de classe mondiale.',
      result: '18% de Conversion',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#2563EB]/5 via-[#7C3AED]/5 to-[#06B6D4]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-6">
          <div className="px-4 py-1.5 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#F59E0B] text-xs font-semibold uppercase tracking-widest">
            Résultats Clients
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white text-center mb-4">
          Des résultats réels pour de{' '}
          <span className="gradient-text">vrais clients</span>
        </h2>
        <p className="text-white/50 text-center max-w-lg mx-auto mb-16">
          Ne nous croyez pas sur parole — voici ce que nos clients disent après avoir travaillé avec DOCASY.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group p-7 rounded-2xl bg-white/3 border border-white/8 hover:border-[#2563EB]/30 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Quote mark */}
              <div className="absolute top-4 right-6 text-6xl text-white/5 font-serif leading-none">"</div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-[#F59E0B]" fill="#F59E0B" />
                ))}
              </div>

              <p className="text-white/65 text-sm leading-relaxed mb-6 relative">"{t.text}"</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-white/40 text-xs">{t.role}</p>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 text-[#10B981] text-xs font-bold">
                  {t.result}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {[
            { icon: ThumbsUp, label: '98% de Taux de Satisfaction' },
            { icon: Users, label: '50+ Clients Heureux' },
            { icon: Award, label: 'Agence la Mieux Notée' },
            { icon: Shield, label: '100% Sécurisé & Fiable' },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors duration-200">
              <Icon size={16} className="text-[#06B6D4]" />
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/20 via-[#7C3AED]/15 to-[#06B6D4]/10" />
        <div className="absolute inset-0 grid-bg opacity-20" />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#2563EB]/15 to-[#7C3AED]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/70 text-xs font-semibold uppercase tracking-widest mb-8">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          Places Limitées Disponibles
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
          Prêt à faire croître votre entreprise{' '}
          <span className="gradient-text">de la bonne manière ?</span>
        </h2>
        <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Rejoignez plus de 50 entreprises qui ont choisi DOCASY pour transformer leur présence digitale. Construisons ensemble quelque chose d'extraordinaire.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="group flex items-center gap-2 px-10 py-4.5 rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white font-bold text-base shadow-2xl hover:shadow-[0_0_50px_rgba(37,99,235,0.5)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>Démarrer Mon Projet Aujourd'hui</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-10 py-4.5 rounded-2xl bg-[#25D366] text-white font-bold text-base hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>💬</span>
            <span>Discuter sur WhatsApp</span>
          </a>
        </div>

        <p className="mt-8 text-white/30 text-sm">
          Sans engagement · Consultation gratuite · Réponse sous 24 heures
        </p>
      </div>
    </section>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <Hero />
      <Problems />
      <ServicesOverview />
      <WhyUs />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
