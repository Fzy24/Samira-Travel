/**
 * Konfigurasi utama website Samira Travel (PT Samira Ali Wisata).
 * Mengatur mode demo, status verifikasi data, informasi kontak terpusat,
 * metadata dasar halaman, dan konfigurasi media hero.
 */

export type VerificationStatus = 'VERIFIED' | 'NEEDS_CONFIRMATION' | 'PLACEHOLDER';

export interface VerifiableField<T> {
  value: T;
  status: VerificationStatus;
  sourceNote: string;
}

export interface SiteConfig {
  /** Menentukan apakah mode demo aktif untuk menampilkan lencana status verifikasi data */
  demoMode: boolean;
  /** Nama brand publik */
  brandName: string;
  /** Nama badan hukum resmi sesuai dokumen klien */
  legalEntityName: string;
  /** Tagline pendamping brand dari materi resmi */
  tagline: string;
  /** Judul default website untuk tag <title> */
  defaultTitle: string;
  /** Deskripsi meta dasar untuk halaman utama */
  defaultDescription: string;
  /** URL kanonikal yang tercantum dalam dokumen klien */
  siteUrl: string;
  /** Konfigurasi nomor WhatsApp terpusat */
  whatsapp: {
    displayNumber: string;
    internationalNumber: string;
    status: VerificationStatus;
    sourceNote: string;
  };
  /** Konfigurasi alamat kantor pusat */
  headOffice: {
    addressPrimary: string;
    addressAlternateInDoc: string;
    city: string;
    province: string;
    postalCode: string;
    status: VerificationStatus;
    sourceNote: string;
  };
  /** Konfigurasi hero media agar mudah diganti saat video resmi tersedia */
  heroMedia: {
    useVideo: boolean;
    videoUrl: string;
    posterUrl: string;
    posterAlt: string;
    status: VerificationStatus;
  };
}

export const SITE_CONFIG: SiteConfig = {
  demoMode: true,
  brandName: 'Samira Travel',
  legalEntityName: 'PT Samira Ali Wisata',
  tagline: 'Sahabat Umroh & Haji Keluarga Anda',
  defaultTitle: 'Samira Travel — PT Samira Ali Wisata | Perjalanan Ibadah Umrah, Haji Khusus & Halal Tour',
  defaultDescription:
    'Profil resmi PT Samira Ali Wisata (Samira Travel). Informasi layanan perjalanan ibadah umrah, haji khusus & Furoda, halal tour, referensi hotel, fasilitas jamaah, dan konsultasi pendaftaran.',
  siteUrl: 'https://samiratravel.co.id',
  whatsapp: {
    displayNumber: '0812 9992 0849',
    internationalNumber: '6281299920849',
    status: 'VERIFIED',
    sourceNote: 'Nomor WhatsApp resmi terverifikasi: 081299920849.',
  },
  headOffice: {
    addressPrimary:
      'Jl. Malaka Merah No. 8, Pondok Kopi, Duren Sawit, Jakarta Timur, DKI Jakarta 13460',
    addressAlternateInDoc:
      'Jl. Malaka Merah Raya No. 7/6, Pondok Kopi, Duren Sawit, Jakarta Timur',
    city: 'Jakarta Timur',
    province: 'DKI Jakarta',
    postalCode: '13460',
    status: 'NEEDS_CONFIRMATION',
    sourceNote:
      'Slide 43 mencantumkan No. 8 (13460), sedangkan footer Slide 4 & 7 mencantumkan No. 7/6. Perlu konfirmasi nomor kavling/gedung aktif sebelum rilis resmi.',
  },
  heroMedia: {
    useVideo: false,
    videoUrl: '',
    posterUrl: '/images/hero/makkah-haram-view.webp',
    posterAlt: 'Suasana pelataran dan pemandangan Masjidil Haram di Makkah pada waktu senja',
    status: 'PLACEHOLDER',
  },
};

/**
 * Memeriksa apakah website sedang berjalan dalam mode demo presentasi klien.
 * Digunakan oleh komponen UI untuk menampilkan penanda verifikasi data dan catatan konfigurasi.
 *
 * @returns Nilai boolean status mode demo dari konfigurasi terpusat.
 */
export function isDemoModeEnabled(): boolean {
  return SITE_CONFIG.demoMode;
}

/**
 * Mengembalikan label berbahasa Indonesia yang ramah pengguna untuk setiap status klasifikasi data.
 *
 * @param status Status verifikasi data ('VERIFIED' | 'NEEDS_CONFIRMATION' | 'PLACEHOLDER').
 * @returns Teks label status dalam bahasa Indonesia.
 */
export function getVerificationStatusLabel(status: VerificationStatus): string {
  switch (status) {
    case 'VERIFIED':
      return 'Data Terverifikasi';
    case 'NEEDS_CONFIRMATION':
      return 'Menunggu Konfirmasi Klien';
    case 'PLACEHOLDER':
      return 'Placeholder / Menunggu Data Aktual';
  }
}
