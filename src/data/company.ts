/**
 * Data terpusat identitas perusahaan, profil pimpinan, perizinan, rekam jejak,
 * alur pendaftaran, serta galeri dokumentasi PT Samira Ali Wisata (Samira Travel).
 */

import type { VerificationStatus } from './site-config';

export interface LicenseRecord {
  id: string;
  type: 'PPIU' | 'PIHK' | 'PPIU_HISTORICAL';
  label: string;
  number: string;
  yearMentioned: string;
  issuingBody: string;
  status: VerificationStatus;
  verificationDisclaimer: string;
}

export interface MilestoneItem {
  year: string;
  title: string;
  description: string;
  status: VerificationStatus;
}

export interface AwardRecord {
  id: string;
  organization: string;
  title: string;
  contextDescription: string;
  yearOrDateInDoc: string;
  imageUrl?: string;
  imageAlt?: string;
  status: VerificationStatus;
  sourceSlide: string;
}

export interface RegistrationStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  StatusNote: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  category: 'DOKUMENTASI_PERUSAHAAN' | 'REFERENSI_AKOMODASI';
  sourceTypeLabel: string;
  imageUrl: string;
  imageAlt: string;
  status: VerificationStatus;
  sourceSlide: string;
}

export const COMPANY_PROFILE = {
  brandName: 'Samira Travel',
  legalEntityName: 'PT Samira Ali Wisata',
  ecosystemGroup: 'DGI (Dini Group Indonesia)',
  taglinePrimary: 'Sahabat Umroh & Haji Keluarga Anda',
  taglineSecondary: 'Layanan Perjalanan Ibadah Umrah, Haji Khusus & Halal Tour',
  foundedYear: {
    value: 2014,
    status: 'NEEDS_CONFIRMATION' as VerificationStatus,
    sourceNote: 'Tercantum pada Slide 3 dokumen Product Knowledge 2026.',
  },
  licensedYear: {
    value: 2016,
    status: 'NEEDS_CONFIRMATION' as VerificationStatus,
    sourceNote: 'Tercantum pada Slide 3 dokumen Product Knowledge 2026 (PPIU D834/2016).',
  },
  renewalYear: {
    value: 2024,
    status: 'NEEDS_CONFIRMATION' as VerificationStatus,
    sourceNote: 'Tercantum pada Slide 3 dokumen Product Knowledge 2026.',
  },
  founder: {
    name: 'Ust. Fauzi Wahyu Muntoro',
    role: 'Pendiri & Direktur Utama PT Samira Ali Wisata',
    photoUrl: '/images/founder/ust-fauzi-wahyu-muntoro.webp',
    photoAlt: 'Potret Ust. Fauzi Wahyu Muntoro, Direktur Utama PT Samira Ali Wisata (Samira Travel)',
    bioSummary:
      'Mendirikan Samira Travel pada tahun 2014 dengan komitmen melayani tamu Allah sesuai tuntunan Sunnah Rasulullah SAW melalui pendampingan yang tulus, tertib administrasi, dan pelayanan yang bersahabat.',
    status: 'NEEDS_CONFIRMATION' as VerificationStatus,
    sourceSlide: 'Slide 3 Product Knowledge 2026',
  },
  overviewParagraphs: [
    'Samira Travel (PT Samira Ali Wisata) adalah penyelenggara perjalanan ibadah umrah, haji khusus, dan wisata halal yang melayani calon jamaah mulai dari tahap konsultasi pendaftaran, pengurusan dokumen perjalanan, bimbingan manasik, pendampingan ibadah di Tanah Suci, hingga kepulangan kembali ke Tanah Air.',
    'Berdasarkan dokumen Product Knowledge perusahaan, Samira Travel dirintis oleh Ust. Fauzi Wahyu Muntoro pada tahun 2014 dan memperoleh izin penyelenggaraan dari Kementerian Agama RI pada tahun 2016, dengan pembaruan izin operasional pada tahun 2024.',
  ],
  serviceCommitmentNote: {
    title: 'Komitmen Pelayanan Terpadu ("Five Star Service" dalam Materi Klien)',
    description:
      'Dalam materi Product Knowledge klien, filosofi layanan Samira Travel digambarkan sebagai pelayanan menyeluruh dari pendaftaran, handling bagasi bandara ke kamar hotel, pendampingan muthawwif berbahasa Indonesia, hingga koordinasi kepulangan jamaah.',
    visionMissionStatus: 'PLACEHOLDER' as VerificationStatus,
    visionMissionNote:
      'Dokumen Product Knowledge memuat komitmen layanan, namun belum mencantumkan teks rumusan Visi dan Misi korporasi formal secara terpisah. Teks visi-misi resmi menunggu konfirmasi tertulis dari manajemen.',
  },
};

export const COMPANY_LICENSES: LicenseRecord[] = [
  {
    id: 'ppiu-2024',
    type: 'PPIU',
    label: 'Izin Penyelenggara Perjalanan Ibadah Umrah (PPIU)',
    number: '16092100475620005',
    yearMentioned: 'Pembaruan 2024',
    issuingBody: 'Kementerian Agama Republik Indonesia (Data Dokumen Klien)',
    status: 'NEEDS_CONFIRMATION',
    verificationDisclaimer:
      'Nomor izin dikutip dari Slide 2 & 3 dokumen Product Knowledge klien. Pastikan nomor, nama badan hukum (PT Samira Ali Wisata), dan status berlakunya dikonfirmasi pada sistem resmi Kemenag RI sebelum peluncuran publik.',
  },
  {
    id: 'pihk-2024',
    type: 'PIHK',
    label: 'Izin Penyelenggara Ibadah Haji Khusus (PIHK)',
    number: '16092100475620006',
    yearMentioned: 'Tercantum pada Materi 2026',
    issuingBody: 'Kementerian Agama Republik Indonesia (Data Dokumen Klien)',
    status: 'NEEDS_CONFIRMATION',
    verificationDisclaimer:
      'Nomor izin dikutip dari Slide 2 dokumen Product Knowledge klien. Wajib dikonfirmasi status aktifnya oleh klien sebelum dipublikasikan sebagai klaim legalitas final.',
  },
  {
    id: 'ppiu-2016',
    type: 'PPIU_HISTORICAL',
    label: 'Riwayat Izin PPIU Awal',
    number: 'D834/2016',
    yearMentioned: '2016',
    issuingBody: 'Kementerian Agama Republik Indonesia (Riwayat Dokumen Klien)',
    status: 'NEEDS_CONFIRMATION',
    verificationDisclaimer:
      'Dicantumkan pada Slide 3 sebagai catatan sejarah perizinan awal tahun 2016.',
  },
];

export const COMPANY_MILESTONES: MilestoneItem[] = [
  {
    year: '2014',
    title: 'Perintisan Samira Travel',
    description:
      'Didirikan oleh Ust. Fauzi Wahyu Muntoro dengan fokus menghadirkan pendampingan perjalanan ibadah yang ramah dan terarah bagi keluarga Indonesia.',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    year: '2016',
    title: 'Pencantuman Legalitas PPIU Awal',
    description:
      'Dokumen perusahaan mencatat perolehan izin penyelenggaraan umrah awal (D834/2016) di bawah badan hukum PT Samira Ali Wisata.',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    year: '2022',
    title: 'Operasional Keberangkatan Masa Transisi Pandemi',
    description:
      'Materi klien mencatat keberangkatan jamaah umrah pada awal tahun 2022 dengan penerapan protokol kesehatan dan prosedur perjalanan lintas negara.',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    year: '2024',
    title: 'Pembaruan Perizinan & Pencapaian Operasional',
    description:
      'Pembaruan nomor izin PPIU (16092100475620005) serta pencatatan apresiasi operasional dalam materi internal perusahaan.',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    year: '2025 – 2026',
    title: 'Pengembangan Jaringan Layanan & Milad 1 Dekade',
    description:
      'Penyelenggaraan agenda kebersamaan jamaah di Jeddah serta perluasan layanan konsultasi melalui jaringan cabang dan mitra di berbagai provinsi.',
    status: 'NEEDS_CONFIRMATION',
  },
];

export const COMPANY_AWARDS: AwardRecord[] = [
  {
    id: 'muri-pandemi',
    organization: 'Museum Rekor-Dunia Indonesia (MURI) — Materi Klien',
    title: 'Kategori Jumlah Jamaah Terbanyak di Masa Pandemi',
    contextDescription:
      'Tercantum pada Slide 2 dan Slide 6 materi Product Knowledge klien terkait pemberangkatan jamaah pada periode pembukaan kembali ibadah umrah.',
    yearOrDateInDoc: 'Periode Transisi Pandemi (Slide 6)',
    imageUrl: '/images/gallery/rekor-muri-samira.webp',
    imageAlt: 'Dokumentasi piagam dan penghargaan Rekor MURI pada materi Product Knowledge Samira Travel',
    status: 'NEEDS_CONFIRMATION',
    sourceSlide: 'Slide 2, 6, dan 24–44 Product Knowledge 2026',
  },
  {
    id: 'muri-talbiyah',
    organization: 'Museum Rekor-Dunia Indonesia (MURI) — Materi Klien',
    title: 'Kategori Melafalkan Talbiyah Peserta Terbanyak',
    contextDescription:
      'Tercantum pada lencana penghargaan Slide 2 dan dokumentasi Slide 6 materi Product Knowledge klien.',
    yearOrDateInDoc: 'Dokumentasi Materi Klien (Slide 6)',
    status: 'NEEDS_CONFIRMATION',
    sourceSlide: 'Slide 2 & 6 Product Knowledge 2026',
  },
  {
    id: 'muri-2024',
    organization: 'Museum Rekor-Dunia Indonesia (MURI) — Materi Klien',
    title: 'Kategori Jamaah Terbanyak Sepanjang Tahun 2024',
    contextDescription:
      'Tercantum pada Slide 2, 6, dan 8 materi Product Knowledge klien merujuk pada laporan operasional tahun 2024.',
    yearOrDateInDoc: '2024 (Slide 6 & 8)',
    status: 'NEEDS_CONFIRMATION',
    sourceSlide: 'Slide 2, 6 & 8 Product Knowledge 2026',
  },
  {
    id: 'gwr-halal-dinner',
    organization: 'Guinness World Records — Materi Klien',
    title: 'Largest Attendance of an Outdoor Halal Dinner Event',
    contextDescription:
      'Slide 7 menyebutkan kegiatan Milad ke-9 di Asfan, Jeddah (1 Agustus 2025) dan penyerahan sertifikat pada 7 Juni 2026. Pada lencana sudut kanan atas slide tertulis "Official Attempt". Konteks dan izin publikasi klaim ini memerlukan verifikasi klien.',
    yearOrDateInDoc: '2025 / 2026 (Slide 7)',
    imageUrl: '/images/gallery/guinness-world-records-milad.webp',
    imageAlt: 'Dokumentasi penyerahan sertifikat pada acara Milad Samira Travel di materi Product Knowledge',
    status: 'NEEDS_CONFIRMATION',
    sourceSlide: 'Slide 2 & 7 Product Knowledge 2026',
  },
];

export const REGISTRATION_STEPS: RegistrationStep[] = [
  {
    stepNumber: 1,
    title: 'Konsultasi Awal',
    subtitle: 'Diskusi kebutuhan ibadah bersama konsultan resmi',
    description:
      'Hubungi layanan WhatsApp resmi untuk mendiskusikan rencana waktu keberangkatan, jumlah anggota keluarga, preferensi jarak hotel, serta kota embarkasi terdekat.',
    StatusNote: 'Tanpa pengumpulan data pribadi sensitif di website.',
  },
  {
    stepNumber: 2,
    title: 'Pemilihan Program & Tingkatan Paket',
    subtitle: 'Penyesuaian paket (Safara, Safawi, Sukari, atau Majol)',
    description:
      'Pilih kategori layanan (Umrah, Haji Khusus/Furoda, atau Halal Tour) serta tingkatan akomodasi yang sesuai dengan kebutuhan kenyamanan keluarga Anda.',
    StatusNote: 'Ketersediaan kursi dan jadwal dikonfirmasi oleh tim.',
  },
  {
    stepNumber: 3,
    title: 'Konfirmasi Persyaratan & Ketentuan',
    subtitle: 'Pemeriksaan dokumen perjalanan & rincian fasilitas',
    description:
      'Pastikan kelengkapan dokumen paspor, ketentuan vaksinasi kesehatan, komponen biaya yang termasuk maupun belum termasuk, serta skema pembayaran resmi.',
    StatusNote: 'Seluruh ketentuan merujuk pada kebijakan resmi yang berlaku.',
  },
  {
    stepNumber: 4,
    title: 'Pendaftaran Sesuai Prosedur Resmi',
    subtitle: 'Verifikasi administrasi langsung melalui PT Samira Ali Wisata',
    description:
      'Pendaftaran dan administrasi dilakukan secara tertib mengikuti prosedur perusahaan. Sesuai pedoman resmi pada materi klien, pembayaran hanya ditujukan ke rekening korporasi resmi atas nama PT Samira Ali Wisata setelah diverifikasi.',
    StatusNote: 'Website ini tidak menerima transaksi atau pembayaran langsung.',
  },
  {
    stepNumber: 5,
    title: 'Persiapan Keberangkatan & Manasik',
    subtitle: 'Pembagian perlengkapan, bimbingan manasik & keberangkatan',
    description:
      'Jamaah menerima perlengkapan ibadah, mengikuti bimbingan manasik, serta mendapatkan pendampingan tim handling bandara dan muthawwif hingga kembali ke Tanah Air.',
    StatusNote: 'Jadwal manasik diinformasikan menjelang keberangkatan.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-haram-terrace',
    title: 'Pemandangan Pelataran Masjidil Haram',
    caption:
      'Ilustrasi pemandangan kawasan Masjidil Haram dari area teras hotel referensi pada materi paket utama.',
    category: 'REFERENSI_AKOMODASI',
    sourceTypeLabel: 'Foto Referensi Hotel (Materi Klien)',
    imageUrl: '/images/hero/makkah-haram-view.webp',
    imageAlt: 'Teras hotel dengan latar pemandangan menara dan pelataran Masjidil Haram di Makkah',
    status: 'VERIFIED',
    sourceSlide: 'Diekstrak dari Slide 33 Product Knowledge 2026',
  },
  {
    id: 'gal-gwr-milad',
    title: 'Dokumentasi Apresiasi Acara Milad Samira Travel',
    caption:
      'Dokumentasi kegiatan penyerahan piagam pada perhelatan Milad perusahaan yang tercantum dalam dokumen Product Knowledge klien.',
    category: 'DOKUMENTASI_PERUSAHAAN',
    sourceTypeLabel: 'Dokumentasi Perusahaan (Materi Klien)',
    imageUrl: '/images/gallery/guinness-world-records-milad.webp',
    imageAlt: 'Dokumentasi penyerahan sertifikat Guinness World Records kepada pimpinan PT Samira Ali Wisata',
    status: 'NEEDS_CONFIRMATION',
    sourceSlide: 'Diekstrak dari Slide 7 Product Knowledge 2026',
  },
  {
    id: 'gal-muri-polaroid',
    title: 'Dokumentasi Penghargaan Rekor MURI',
    caption:
      'Kolase dokumentasi penyerahan piagam penghargaan MURI pada materi profil perusahaan PT Samira Ali Wisata.',
    category: 'DOKUMENTASI_PERUSAHAAN',
    sourceTypeLabel: 'Dokumentasi Perusahaan (Materi Klien)',
    imageUrl: '/images/gallery/rekor-muri-samira.webp',
    imageAlt: 'Kolase tiga foto dokumentasi penerimaan penghargaan Rekor MURI Samira Travel',
    status: 'NEEDS_CONFIRMATION',
    sourceSlide: 'Diekstrak dari Slide 6 Product Knowledge 2026',
  },
  {
    id: 'gal-zamzam-tower',
    title: 'Kawasan Zamzam Tower & Masjidil Haram',
    caption:
      'Referensi kawasan akomodasi pelataran Masjidil Haram untuk tingkatan Paket Majol.',
    category: 'REFERENSI_AKOMODASI',
    sourceTypeLabel: 'Foto Referensi Hotel (Materi Klien)',
    imageUrl: '/images/services/haji-khusus-furoda.webp',
    imageAlt: 'Menara Zamzam Tower dan pelataran Ka\'bah di Masjidil Haram Makkah',
    status: 'VERIFIED',
    sourceSlide: 'Diekstrak dari Slide 32 Product Knowledge 2026',
  },
  {
    id: 'gal-anjum-room',
    title: 'Referensi Kamar Hotel dengan Pemandangan Haram',
    caption:
      'Contoh tata ruang kamar hotel referensi pada materi Paket Sukari (Anjum Makkah). Ketersediaan tipe kamar mengikuti konfirmasi program.',
    category: 'REFERENSI_AKOMODASI',
    sourceTypeLabel: 'Foto Referensi Hotel (Materi Klien)',
    imageUrl: '/images/services/halal-tour.webp',
    imageAlt: 'Interior kamar hotel dengan jendela menghadap ke kawasan Masjidil Haram',
    status: 'VERIFIED',
    sourceSlide: 'Diekstrak dari Slide 30 Product Knowledge 2026',
  },
  {
    id: 'gal-madinah-lounge',
    title: 'Area Lounge & Ruang Tunggu Hotel Referensi Madinah',
    caption:
      'Fasilitas ruang tunggu dan lobi hotel referensi di Madinah pada materi Product Knowledge klien.',
    category: 'REFERENSI_AKOMODASI',
    sourceTypeLabel: 'Foto Referensi Hotel (Materi Klien)',
    imageUrl: '/images/gallery/madinah-lounge.webp',
    imageAlt: 'Area tempat duduk lobi hotel referensi di Madinah yang bersih dan nyaman',
    status: 'VERIFIED',
    sourceSlide: 'Diekstrak dari Slide 31 Product Knowledge 2026',
  },
];

/**
 * Mengambil daftar perizinan perusahaan beserta catatan verifikasinya.
 *
 * @returns Array objek LicenseRecord dari konfigurasi perusahaan.
 */
export function getCompanyLicenses(): LicenseRecord[] {
  return COMPANY_LICENSES;
}

/**
 * Mengambil daftar galeri dengan opsi pemfilteran berdasarkan kategori sumber foto
 * (dokumentasi perusahaan vs foto referensi akomodasi).
 *
 * @param category Kategori opsional untuk menyaring item galeri.
 * @returns Array item galeri yang sesuai kriteria.
 */
export function getGalleryItems(
  category?: GalleryItem['category']
): GalleryItem[] {
  if (!category) {
    return GALLERY_ITEMS;
  }
  return GALLERY_ITEMS.filter((item) => item.category === category);
}
