/**
 * Utilitas terpusat untuk pembuatan URL dan pesan konsultasi WhatsApp Samira Travel.
 * Memastikan tidak ada nomor WhatsApp yang ditulis secara hardcoded di komponen UI
 * serta tidak menjanjikan harga atau ketersediaan jadwal yang belum dikonfirmasi.
 */

import { SITE_CONFIG } from '../data/site-config';

export interface WhatsAppContextOptions {
  /** Nama layanan (misal: Perjalanan Ibadah Umrah, Haji Khusus & Furoda, Halal Tour) */
  serviceName?: string;
  /** Nama tingkatan paket (misal: Paket Safara, Paket Safawi, Paket Sukari, Paket Majol) */
  packageName?: string;
  /** Kota keberangkatan atau cabang yang diminati calon jamaah */
  departureCity?: string;
  /** Nama calon jamaah dari form konsultasi opsional */
  visitorName?: string;
  /** Catatan atau pertanyaan khusus dari pengunjung */
  customQuestion?: string;
}

/**
 * Membersihkan nomor telepon agar hanya berisi digit angka untuk parameter URL wa.me.
 *
 * @param rawPhoneNumber Nomor telepon mentah dari konfigurasi.
 * @returns String digit nomor telepon internasional yang valid.
 */
export function sanitizeWhatsAppNumber(rawPhoneNumber: string): string {
  const digitsOnly = rawPhoneNumber.replace(/\D/g, '');
  if (digitsOnly.startsWith('0')) {
    return `62${digitsOnly.slice(1)}`;
  }
  return digitsOnly;
}

/**
 * Membuat URL WhatsApp dengan nomor tujuan dan pesan sesuai konteks.
 * Pesan dienkode agar dapat digunakan sebagai parameter URL.
 *
 * @param phoneNumber Nomor WhatsApp dalam format internasional.
 * @param message Pesan awal yang akan ditampilkan kepada pengguna.
 * @returns URL WhatsApp yang siap digunakan oleh tautan.
 */
export function createWhatsAppUrl(
  phoneNumber: string,
  message: string
): string {
  const cleanNumber = sanitizeWhatsAppNumber(phoneNumber);
  const encodedMessage = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
}

/**
 * Menyusun teks pesan konsultasi WhatsApp berdasarkan konteks interaksi pengunjung
 * (umum, layanan tertentu, tingkatan paket tertentu, atau kota keberangkatan).
 *
 * @param options Parameter konteks layanan, paket, kota, atau pertanyaan tambahan.
 * @returns Kalimat pesan berbahasa Indonesia yang sopan dan tidak menjanjikan harga/jadwal sepihak.
 */
export function buildContextualWhatsAppMessage(
  options: WhatsAppContextOptions = {}
): string {
  const {
    serviceName,
    packageName,
    departureCity,
    visitorName,
    customQuestion,
  } = options;

  if (!serviceName && !packageName && !departureCity && !visitorName && !customQuestion) {
    return 'Halo Samira Travel, saya ingin mengetahui informasi lebih lanjut mengenai layanan dan paket perjalanan ibadah yang tersedia. Mohon informasi jadwal terbaru, fasilitas, harga, dan persyaratan pendaftaran.';
  }

  const greeting = visitorName
    ? `Halo Samira Travel, perkenalkan saya ${visitorName}.`
    : 'Halo Samira Travel,';

  const details: string[] = [];

  if (packageName) {
    details.push(`tingkatan *${packageName}*`);
  }
  if (serviceName) {
    details.push(`layanan *${serviceName}*`);
  }
  if (departureCity) {
    details.push(`rencana keberangkatan dari *${departureCity}*`);
  }

  const contextSentence =
    details.length > 0
      ? ` Saya ingin berkonsultasi mengenai ${details.join(' untuk ')}.`
      : ' Saya ingin mengetahui informasi lebih lanjut mengenai layanan dan paket perjalanan ibadah yang tersedia.';

  const questionSentence = customQuestion
    ? ` Pertanyaan tambahan saya: "${customQuestion}".`
    : '';

  return `${greeting}${contextSentence}${questionSentence} Mohon informasi mengenai jadwal terbaru yang tersedia, rincian fasilitas, estimasi biaya aktual, serta prosedur pendaftaran resminya. Terima kasih.`;
}

/**
 * Menghasilkan URL WhatsApp siap pakai menggunakan nomor resmi dari SITE_CONFIG
 * beserta pesan kontekstual yang sesuai.
 *
 * @param options Opsi konteks pesan (paket, layanan, kota keberangkatan, nama pengunjung).
 * @returns URL lengkap https://wa.me/... menuju nomor pusat di konfigurasi.
 */
export function getOfficialWhatsAppUrl(
  options: WhatsAppContextOptions = {}
): string {
  const message = buildContextualWhatsAppMessage(options);
  return createWhatsAppUrl(SITE_CONFIG.whatsapp.internationalNumber, message);
}
