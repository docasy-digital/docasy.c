// ─── Configuration WhatsApp ─────────────────────────────────────────────────────

// ⚙️ NUMÉRO WHATSAPP — Modifiez ici avec votre numéro
// Format : code pays + numéro sans le + ni espaces
export const WHATSAPP_NUMBER = '2290160393906';

// ─── Type des données du formulaire ─────────────────────────────────────────────

import { Country } from './phoneCountries';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  country: Country;
  service: string;
  budget: string;
  message: string;
}

// ─── Formatage du message WhatsApp ──────────────────────────────────────────────

export function formatWhatsAppMessage(data: ContactFormData): string {
  const lines = [
    '🚀 *NOUVELLE DEMANDE DE PROJET — DOCASY*',
    '',
    '━━━━━━━━━━━━━━━━━━━━━━━',
    '',
    `👤 *Nom complet :* ${data.name}`,
    `📧 *Email :* ${data.email}`,
    data.phone ? `📱 *Téléphone :* ${data.phone}` : null,
    data.country ? `🌍 *Pays :* ${data.country.name} (${data.country.flag})` : null,
    `🔧 *Service souhaité :* ${data.service}`,
    `💰 *Budget estimé :* ${data.budget}`,
    '',
    '━━━━━━━━━━━━━━━━━━━━━━━',
    '',
    '📝 *Détails du projet :*',
    `${data.message}`,
    '',
    '━━━━━━━━━━━━━━━━━━━━━━━',
    '',
    `📅 _Demande envoyée le ${new Date().toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })}_`,
  ].filter(Boolean);

  return lines.join('\n');
}

// ─── Envoi via WhatsApp ─────────────────────────────────────────────────────────

export function sendViaWhatsApp(data: ContactFormData): void {
  const message = formatWhatsAppMessage(data);
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  // Ouvre WhatsApp dans un nouvel onglet
  window.open(url, '_blank', 'noopener,noreferrer');
}

// ─── Envoi via WhatsApp (format court alternatif) ───────────────────────────────
// Utilisez cette fonction si vous préférez un message plus court

export function sendViaWhatsAppShort(data: ContactFormData): void {
  const message = [
    `*Nouveau projet DOCASY*`,
    '',
    `👤 ${data.name}`,
    `📧 ${data.email}`,
    `${data.phone ? '📱 ' + data.phone : ''}`,
    `🔧 ${data.service}`,
    `💰 ${data.budget}`,
    '',
    `📝 ${data.message}`,
  ].filter(Boolean).join('\n');

  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  window.open(url, '_blank', 'noopener,noreferrer');
}
