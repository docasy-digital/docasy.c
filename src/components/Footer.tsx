import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const services = [
  { name: 'Création de Sites Web', path: '/services#websites' },
  { name: 'Tunnels de Vente', path: '/services#funnels' },
  { name: 'Marketing Digital', path: '/services#marketing' },
  { name: 'Branding', path: '/services#branding' },
];

const company = [
  { name: 'À Propos', path: '/about' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
  { name: 'Démarrer un Projet', path: '/contact' },
];

const socials = [
  { label: 'X', href: '#', char: '𝕏' },
  { label: 'LinkedIn', href: '#', char: 'in' },
  { label: 'Instagram', href: '#', char: '◈' },
  { label: 'Facebook', href: '#', char: 'f' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0f1e] border-t border-white/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2563EB]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#7C3AED]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter strip */}
        <div className="py-12 border-b border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Prêt à transformer votre entreprise ?</h3>
              <p className="text-white/50 text-sm">Rejoignez plus de 50 clients qui ont fait confiance à DOCASY pour se développer en ligne.</p>
            </div>
            <Link
              to="/contact"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white font-semibold text-sm hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              Démarrer Votre Projet <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-5">
              <img 
                src="/images/docasy-logo.png" 
                alt="DOCASY Logo" 
                className="w-9 h-9 object-contain rounded-xl"
              />
              <span className="text-xl font-bold tracking-wider text-white">
                DOC<span className="gradient-text">ASY</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Nous concevons des expériences numériques premium qui transforment votre présence en ligne en une machine à générer des clients.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ label, href, char }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-gradient-to-br hover:from-[#2563EB] hover:to-[#7C3AED] flex items-center justify-center text-white/50 hover:text-white transition-all duration-300 border border-white/5 text-xs font-bold"
                >
                  {char}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-white/50 text-sm hover:text-[#06B6D4] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-0.5 bg-[#06B6D4] transition-all duration-300 rounded-full" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Entreprise</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-white/50 text-sm hover:text-[#06B6D4] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-0.5 bg-[#06B6D4] transition-all duration-300 rounded-full" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:hello@docasy.com" className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#2563EB]/20 transition-colors">
                    <Mail size={14} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <p className="text-white/30 text-xs uppercase tracking-wide">Email</p>
                    <p className="text-white/70 text-sm group-hover:text-white transition-colors">hello@docasy.com</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-[#25D366]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366]/20 transition-colors">
                    <Phone size={14} className="text-[#25D366]" />
                  </div>
                  <div>
                    <p className="text-white/30 text-xs uppercase tracking-wide">WhatsApp</p>
                    <p className="text-white/70 text-sm group-hover:text-white transition-colors">+1 (234) 567-890</p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#7C3AED]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={14} className="text-[#7C3AED]" />
                  </div>
                  <div>
                    <p className="text-white/30 text-xs uppercase tracking-wide">Localisation</p>
                    <p className="text-white/70 text-sm">À distance · Partout dans le monde</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} DOCASY. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors">Politique de confidentialité</a>
            <a href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors">Conditions d'utilisation</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
