import { Link } from 'react-router-dom';
import {
  ArrowRight, Target, Eye, Heart,
  Globe, Users, Award, TrendingUp, Sparkles, Star,
  Crosshair, Rocket, Handshake, BarChart2, Lightbulb
} from 'lucide-react';

function PageHero() {
  return (
    <section className="relative pt-36 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-r from-[#2563EB]/10 to-[#7C3AED]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#7C3AED] text-xs font-semibold uppercase tracking-widest mb-6">
          Notre Histoire
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
          Qui est <span className="gradient-text">DOCASY ?</span>
        </h1>
        <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
          Une équipe de stratèges digitaux, designers et développeurs passionnés, unis par une mission : aider les entreprises à prospérer à l'ère du numérique.
        </p>
      </div>
    </section>
  );
}

function OurStory() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="/images/about-team.jpg"
                alt="Équipe DOCASY"
                className="w-full h-80 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent" />
              {/* Floating card */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-[#0F172A]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED] flex items-center justify-center flex-shrink-0">
                    <Sparkles size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Basé sur la confiance & les résultats</p>
                    <p className="text-white/50 text-xs">Plus de 50 projets livrés dans le monde entier</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative blobs */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#2563EB]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-[#7C3AED]/10 rounded-full blur-2xl pointer-events-none" />
          </div>

          {/* Story text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#06B6D4] text-xs font-semibold uppercase tracking-widest mb-6">
              L'Histoire d'Origine
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight">
              Né de la frustration,{' '}
              <span className="gradient-text">conçu pour les résultats</span>
            </h2>
            <div className="space-y-4 text-white/60 text-base leading-relaxed">
              <p>
                DOCASY a été fondé après avoir constaté un problème récurrent : des entreprises talentueuses avec des produits et services incroyables, luttant pour se développer en ligne car leur présence digitale ne leur rendait tout simplement pas justice.
              </p>
              <p>
                Les agences coûteuses livraient des solutions génériques. Les freelances promettaient la lune et disparaissaient. Les propriétaires d'entreprises se retrouvaient avec des sites web "corrects" mais qui ne convertissaient personne, et des stratégies marketing qui brûlaient leur budget sans retour.
              </p>
              <p>
                Nous avons donc créé DOCASY — une agence digitale différente. Une agence qui combine un design de qualité premium avec une science stratégique de la conversion, offrant des résultats mesurables pour chaque client avec lequel nous collaborons.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { value: '2021', label: 'Fondé en' },
                { value: '50+', label: 'Projets' },
                { value: '12+', label: 'Pays' },
              ].map(({ value, label }) => (
                <div key={label} className="p-4 rounded-2xl bg-white/3 border border-white/8 text-center">
                  <div className="text-2xl font-black gradient-text">{value}</div>
                  <div className="text-white/40 text-xs mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {[
            {
              icon: Target,
              color: '#2563EB',
              title: 'Notre Mission',
              desc: 'Donner aux entreprises de toutes tailles les moyens de disposer de solutions digitales premium générant une croissance réelle et mesurable — en rendant l\'expertise digitale de classe mondiale accessible et axée sur les résultats.',
            },
            {
              icon: Eye,
              color: '#7C3AED',
              title: 'Notre Vision',
              desc: 'Devenir l\'agence digitale la plus fiable pour les entrepreneurs et les entreprises du monde entier, reconnue pour transformer les marques grâce à un design intelligent et une exécution digitale stratégique.',
            },
            {
              icon: Heart,
              color: '#F43F5E',
              title: 'Nos Valeurs',
              desc: 'L\'excellence dans chaque pixel, l\'intégrité dans chaque conversation et un engagement sans faille pour le succès de nos clients. Nous ne gagnons que lorsque vous gagnez.',
            },
          ].map(({ icon: Icon, color, title, desc }) => (
            <div key={title} className="group p-8 rounded-2xl bg-white/3 border border-white/8 hover:border-white/15 transition-all duration-300 hover:-translate-y-1">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: `${color}15`, border: `1px solid ${color}25` }}
              >
                <Icon size={22} style={{ color }} />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">{title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section className="py-24 bg-[#0a0f1e] relative overflow-hidden">
      <div className="absolute inset-0 dots-bg opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#2563EB]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#06B6D4] text-xs font-semibold uppercase tracking-widest mb-6">
            Rencontrez le Fondateur
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
            L'esprit derrière{' '}
            <span className="gradient-text">DOCASY</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-12 rounded-3xl bg-white/3 border border-white/8 hover:border-[#2563EB]/20 transition-all duration-500">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED] flex items-center justify-center text-4xl font-black text-white shadow-2xl">
                    D
                  </div>
                  {/* Online indicator */}
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#25D366] border-2 border-[#0a0f1e]" />
                </div>
                {/* Social proof */}
                <div className="mt-4 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-[#F59E0B]" fill="#F59E0B" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-white font-black text-2xl md:text-3xl">Le Fondateur de DOCASY</h3>
                    <p className="text-[#06B6D4] font-medium text-sm">Fondateur & Stratège Digital Principal</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Stratégie Digitale', 'Dév Web', 'Marketing'].map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 text-white/60 text-sm leading-relaxed mb-6">
                  <p>
                    Avec plus de 5 ans d'expérience en stratégie digitale, développement web et optimisation de la conversion, le fondateur a créé DOCASY sur une conviction simple : les entreprises méritent un partenaire aussi investi dans leur succès qu'elles-mêmes.
                  </p>
                  <p>
                    Ayant travaillé avec des startups, des marques établies et des entreprises du Fortune 500 sur trois continents, l'expérience apportée à DOCASY est profonde, diversifiée et aux résultats prouvés. Chaque stratégie est élaborée à partir de victoires réelles — et de leçons tirées des défis du business digital.
                  </p>
                  <p>
                    "J'ai lancé DOCASY parce que j'ai vu trop de formidables entreprises échouer en ligne non pas à cause de leur produit ou service, mais parce que leur présence digitale était une réflexion après coup. Nous corrigeons cela. Nous faisons du digital votre plus grand atout."
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  {[
                    { icon: Globe, label: '12+ Pays' },
                    { icon: Users, label: '50+ Clients' },
                    { icon: Award, label: '5 Ans d\'Expérience' },
                    { icon: TrendingUp, label: 'ROI Moyen x3' },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2 text-white/40">
                      <Icon size={14} className="text-[#2563EB]" />
                      <span className="text-xs">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamValues() {
  const values = [
    { icon: Crosshair, title: 'Précision', desc: 'Nous sommes obsédés par les détails qui génèrent de grands résultats.' },
    { icon: Rocket, title: 'Vitesse', desc: 'Livraison rapide sans compromis sur la qualité.' },
    { icon: Handshake, title: 'Partenariat', desc: 'Nous traitons chaque client comme un partenaire à long terme.' },
    { icon: BarChart2, title: 'Basé sur les Données', desc: 'Décisions appuyées par des analyses, pas par des suppositions.' },
    { icon: Lightbulb, title: 'Innovation', desc: 'Toujours en utilisant les outils les plus récents et les plus efficaces.' },
    { icon: Award, title: 'Excellence', desc: 'Qualité premium dans tout ce que nous livrons.' },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Comment nous <span className="gradient-text">opérons</span>
          </h2>
          <p className="text-white/50 max-w-lg mx-auto">
            Ce ne sont pas seulement des mots à la mode — ce sont les principes qui guident chaque projet que nous entreprenons.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="group p-5 rounded-2xl bg-white/3 border border-white/8 hover:border-[#2563EB]/30 transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#2563EB]/10 to-[#7C3AED]/10 border border-[#2563EB]/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={20} className="text-[#2563EB]" />
                </div>
                <h4 className="text-white font-bold text-sm mb-1">{v.title}</h4>
                <p className="text-white/40 text-xs leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#2563EB]/10 via-[#7C3AED]/8 to-transparent border border-[#2563EB]/20 text-center">
          <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
            Vous voulez travailler avec nous ?
          </h3>
          <p className="text-white/55 mb-8 max-w-md mx-auto">
            Nous sommes sélectifs quant aux clients avec lesquels nous travaillons — car nous nous engageons à fournir des résultats réels pour chacun d'entre eux.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white font-semibold hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] transition-all duration-300 hover:scale-105"
            >
              Postuler pour Collaborer <ArrowRight size={16} />
            </Link>
            <Link
              to="/portfolio"
              className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Voir Notre Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero />
      <OurStory />
      <Founder />
      <TeamValues />
    </>
  );
}
