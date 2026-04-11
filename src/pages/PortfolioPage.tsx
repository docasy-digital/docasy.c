import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, TrendingUp, Star, ChevronRight } from 'lucide-react';

const categories = ['Tous', 'Sites Web', 'Tunnels', 'Branding', 'Marketing'];

const projects = [
  {
    id: 1,
    title: 'TechVenture Pro',
    category: 'Sites Web',
    tags: ['Site Web', 'SEO', 'React'],
    image: '/images/portfolio-1.jpg',
    client: 'TechVenture Inc.',
    desc: 'Plateforme e-commerce premium avec tunnel d\'achat personnalisé et vitrine de produits.',
    results: [
      { metric: '+280%', label: 'Trafic Organique' },
      { metric: '4.2s → 1.1s', label: 'Temps de Chargement' },
      { metric: '+45%', label: 'Taux de Conversion' },
    ],
    color: '#2563EB',
  },
  {
    id: 2,
    title: 'GrowthLab SaaS',
    category: 'Tunnels',
    tags: ['Tunnel de Vente', 'Email', 'Analyses'],
    image: '/images/portfolio-2.jpg',
    client: 'GrowthLab',
    desc: 'Tunnel d\'acquisition SaaS complet avec inscription en 4 étapes et nurturing automatisé.',
    results: [
      { metric: '18%', label: 'Taux de Conversion' },
      { metric: 'x3', label: 'Croissance Revenus' },
      { metric: '-60%', label: 'Réduction du CAC' },
    ],
    color: '#7C3AED',
  },
  {
    id: 3,
    title: 'Luxe Beauty Brand',
    category: 'Branding',
    tags: ['Logo', 'Identité de Marque', 'Charte Graphique'],
    image: '/images/portfolio-3.jpg',
    client: 'Luxe Beauty Co.',
    desc: 'Identité de marque de luxe complète, de la stratégie de positionnement au système visuel total.',
    results: [
      { metric: '+120%', label: 'Notoriété de Marque' },
      { metric: 'x2', label: 'Tarification Premium' },
      { metric: '95%', label: 'Approbation Client' },
    ],
    color: '#F59E0B',
  },
  {
    id: 4,
    title: 'ProFit Academy',
    category: 'Tunnels',
    tags: ['Landing Page', 'Tunnel Webinaire', 'CRM'],
    image: '/images/portfolio-4.jpg',
    client: 'ProFit Academy',
    desc: 'Tunnel de programme de coaching à haute conversion avec inscription webinaire et séquence d\'upsell.',
    results: [
      { metric: '22%', label: 'Taux d\'Inscription' },
      { metric: '+400%', label: 'Croissance Inscriptions' },
      { metric: '8.5x', label: 'ROAS' },
    ],
    color: '#06B6D4',
  },
  {
    id: 5,
    title: 'NexTech Solutions',
    category: 'Sites Web',
    tags: ['Site Corporate', 'WordPress', 'SEO'],
    image: '/images/portfolio-1.jpg',
    client: 'NexTech Solutions',
    desc: 'Refonte de site corporate avec UI moderne, blog et système de génération de leads.',
    results: [
      { metric: '+190%', label: 'Génération de Leads' },
      { metric: '#1', label: 'Classement Google' },
      { metric: '60%', label: 'Baisse Taux Rebond' },
    ],
    color: '#10B981',
  },
  {
    id: 6,
    title: 'EcoMind Campaign',
    category: 'Marketing',
    tags: ['Réseaux Sociaux', 'Contenu', 'Publicités'],
    image: '/images/portfolio-2.jpg',
    client: 'EcoMind',
    desc: 'Campagne de marketing digital à grande échelle sur Instagram, LinkedIn et Google Ads.',
    results: [
      { metric: '150K+', label: 'Portée' },
      { metric: '5.2%', label: 'Taux d\'Engagement' },
      { metric: '+340%', label: 'Croissance Abonnés' },
    ],
    color: '#F43F5E',
  },
];

const caseStudy = {
  client: 'Plateforme SaaS GrowthLab',
  challenge: 'GrowthLab luttait avec un processus d\'inscription complexe qui perdait 78% des visiteurs avant même qu\'ils n\'atteignent le paiement. Leur tunnel existant était basé sur un template générique sans aucune réflexion stratégique.',
  solution: 'Nous avons complètement repensé leur tunnel d\'acquisition de A à Z — en commençant par une page de destination ciblée, suivie d\'une offre d\'essai gratuit à forte valeur ajoutée, d\'une séquence d\'emails automatisés en 5 parties et d\'un paiement simplifié avec une communication claire sur les prix.',
  results: [
    { metric: '18%', label: 'Taux de Conversion', sub: 'Contre 1,2%' },
    { metric: 'x3', label: 'Revenu Mensuel', sub: 'En 90 jours' },
    { metric: '-60%', label: 'Coût d\'Acquisition', sub: 'Vs précédent' },
    { metric: '4.9/5', label: 'Satisfaction Client', sub: '50+ avis' },
  ],
};

function PageHero() {
  return (
    <section className="relative pt-36 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-r from-[#2563EB]/10 to-[#7C3AED]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 text-[#06B6D4] text-xs font-semibold uppercase tracking-widest mb-6">
          Notre Travail
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
          Des projets qui{' '}
          <span className="gradient-text">parlent d'eux-mêmes</span>
        </h1>
        <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
          Chaque projet que nous entreprenons devient une success story. Voici une sélection rigoureuse des travaux dont nous sommes les plus fiers.
        </p>
      </div>
    </section>
  );
}

function ProjectGrid() {
  const [active, setActive] = useState('Tous');
  const filtered = active === 'Tous' ? projects : projects.filter(p => p.category === active);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 dots-bg opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? 'bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white shadow-lg'
                  : 'bg-white/5 text-white/50 border border-white/10 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl overflow-hidden bg-white/3 border border-white/8 hover:border-white/15 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent" />
                {/* Category badge */}
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white"
                  style={{ backgroundColor: `${project.color}30`, border: `1px solid ${project.color}40` }}
                >
                  {project.category}
                </div>
                {/* External link */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <ExternalLink size={14} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-white/40 text-xs mb-1">{project.client}</p>
                <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{project.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-lg text-xs text-white/50 bg-white/5 border border-white/8">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Results */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  {project.results.slice(0, 2).map((r) => (
                    <div key={r.label} className="flex-1">
                      <div className="font-black text-base" style={{ color: project.color }}>{r.metric}</div>
                      <div className="text-white/35 text-xs">{r.label}</div>
                    </div>
                  ))}
                  <ChevronRight size={16} className="text-white/20 group-hover:text-white/50 transition-colors ml-auto" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudy() {
  return (
    <section className="py-24 bg-[#0a0f1e] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#7C3AED]/8 to-[#2563EB]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#7C3AED] text-xs font-semibold uppercase tracking-widest mb-6">
            Featured Case Study
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            From struggling funnel to{' '}
            <span className="gradient-text">18% conversion rate</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Challenge & Solution */}
          <div className="lg:col-span-3 space-y-6">
            <div className="p-7 rounded-2xl bg-white/3 border border-red-500/15">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                  <span className="text-red-400 text-sm font-bold">!</span>
                </div>
                <h3 className="text-white font-bold">Le Défi</h3>
              </div>
              <p className="text-white/55 text-sm leading-relaxed">{caseStudy.challenge}</p>
            </div>

            <div className="p-7 rounded-2xl bg-white/3 border border-[#2563EB]/15">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#2563EB]/10 flex items-center justify-center">
                  <span className="text-[#2563EB] text-sm font-bold">✓</span>
                </div>
                <h3 className="text-white font-bold">La Solution DOCASY</h3>
              </div>
              <p className="text-white/55 text-sm leading-relaxed">{caseStudy.solution}</p>
            </div>

            <div className="p-7 rounded-2xl bg-gradient-to-r from-[#2563EB]/10 to-[#7C3AED]/5 border border-[#2563EB]/20">
              <div className="flex items-center gap-2 mb-4">
                <Star size={16} className="text-[#F59E0B]" fill="#F59E0B" />
                <h3 className="text-white font-bold">Témoignage Client</h3>
              </div>
              <p className="text-white/65 text-sm leading-relaxed italic">
                "DOCASY ne nous a pas seulement construit un tunnel — ils nous ont construit une machine à revenus. En 90 jours, notre revenu mensuel récurrent a triplé. L'investissement a été rentabilisé dès la deuxième semaine."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#2563EB] flex items-center justify-center text-white font-bold text-xs">
                  MC
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Marcus Chen</p>
                  <p className="text-white/40 text-xs">Fondateur, GrowthLab</p>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-2">
            <div className="p-7 rounded-2xl bg-white/3 border border-[#7C3AED]/20 h-full">
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <TrendingUp size={18} className="text-[#7C3AED]" />
                Résultats Obtenus
              </h3>
              <div className="space-y-6">
                {caseStudy.results.map((r) => (
                  <div key={r.label} className="p-4 rounded-xl bg-white/3 border border-white/5">
                    <div className="text-3xl font-black gradient-text mb-1">{r.metric}</div>
                    <div className="text-white font-semibold text-sm">{r.label}</div>
                    <div className="text-white/30 text-xs">{r.sub}</div>
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

function PortfolioCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/15 via-[#7C3AED]/10 to-transparent" />
      <div className="absolute inset-0 grid-bg opacity-15" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="text-[#F59E0B]" fill="#F59E0B" />
            ))}
          </div>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
          Votre projet pourrait être le{' '}
          <span className="gradient-text">prochain</span>
        </h2>
        <p className="text-white/55 text-base mb-10">
          Chaque projet de notre portfolio a commencé par une conversation. Commençons la vôtre aujourd'hui — appel stratégique gratuit et sans engagement.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white font-semibold hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] transition-all duration-300 hover:scale-105"
          >
            Démarrer Mon Projet <ArrowRight size={16} />
          </Link>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#25D366] text-white font-semibold hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-105"
          >
            💬 Contactez-nous sur WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default function PortfolioPage() {
  return (
    <>
      <PageHero />
      <ProjectGrid />
      <CaseStudy />
      <PortfolioCTA />
    </>
  );
}
