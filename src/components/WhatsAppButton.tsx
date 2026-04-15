import { useState } from 'react';
import { X, MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="flex items-center gap-2 bg-[#1E293B] border border-white/10 rounded-2xl px-4 py-3 shadow-2xl shadow-black/50 animate-bounce-once">
          <p className="text-white text-sm font-medium whitespace-nowrap">Discutez avec nous sur WhatsApp !</p>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-white/40 hover:text-white transition-colors ml-1"
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* WhatsApp button */}
      <a
        href="https://wa.me/1234567890?text=Bonjour%20DOCASY%20!%20Je%20souhaite%20discuter%20d'un%20projet."
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setShowTooltip(false)}
        className="relative w-14 h-14 rounded-2xl bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-110 active:scale-95 group"
        aria-label="Discuter sur WhatsApp"
      >
        {/* Ping animation */}
        <span className="absolute inset-0 rounded-2xl bg-[#25D366] opacity-40 group-hover:scale-150 group-hover:opacity-0 transition-all duration-700" />
        <MessageCircle size={26} className="text-white relative z-10" fill="white" />
      </a>
    </div>
  );
}
