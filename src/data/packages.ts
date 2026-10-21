/**
 * Data terpusat tingkatan paket umrah (Safara, Safawi, Sukari, Majol),
 * informasi maskapai referensi, kota keberangkatan, dan catatan jadwal/harga.
 *
 * PENTING: Jadwal keberangkatan Juli–Agustus 2026 pada flyer PDF telah lewat
 * terhadap waktu saat ini dan TIDAK ditampilkan sebagai jadwal keberangkatan aktif.
 */

import type { VerificationStatus } from './site-config';

export type PackageTierCode = 'SAFARA' | 'SAFAWI' | 'SUKARI' | 'MAJOL';

export interface PackageTierItem {
  id: string;
  tierCode: PackageTierCode;
  name: string;
  tagline: string;
  categoryLabel: string;
  badgeText: string;
  isFeatured?: boolean;
  makkahHotelClass: string;
  madinahHotelClass: string;
  makkahReferenceHotels: string[];
  madinahReferenceHotels: string[];
  approximateDistanceNote: {
    makkah: string;
    madinah: string;
    status: VerificationStatus;
  };
  durationOptionsInDoc: string[];
  departureCitiesInDoc: string[];
  airlinesInDoc: string[];
  keyHighlights: string[];
  scheduleStatus: {
    activeScheduleText: string;
    isExpiredReferenceInDoc: boolean;
    referenceNote: string;
    status: VerificationStatus;
  };
  priceStatus: {
    activePriceText: string;
    referencePriceNote: string;
    status: VerificationStatus;
  };
  status: VerificationStatus;
}

export interface AirlineReference {
  id: string;
  name: string;
  routeNoteInDoc: string;
  status: VerificationStatus;
}

export interface GroupProgramReference {
  id: string;
  code: string;
  title: string;
  description: string;
  status: VerificationStatus;
  sourceNote: string;
}

export const PACKAGE_TIERS: PackageTierItem[] = [
  {
    id: 'paket-safara',
    tierCode: 'SAFARA',
    name: 'Paket Safara',
    tagline: 'Pilihan ibadah umrah ekonomis dan terencana dengan fasilitas lengkap standar Samira Travel',
    categoryLabel: 'Umrah Reguler — Kelas Hemat',
    badgeText: 'Ekonomis & Nyaman',
    makkahHotelClass: 'Hotel Bintang 3 (★★★)',
    madinahHotelClass: 'Hotel Bintang 3 (★★★)',
    makkahReferenceHotels: ['Wahat Ajyad', 'Mias Al Majeed / Olayan Ajyad (Setaraf pada brosur)'],
    madinahReferenceHotels: ['Maysan Taqwa', 'Hayah Al Waha / Jawharat Al Rasheed (Setaraf pada brosur)'],
    approximateDistanceNote: {
      makkah: 'Referensi dokumen: ±600 meter ke Masjidil Haram (Wahat Ajyad)',
      madinah: 'Referensi dokumen: ±150 meter ke Masjid Nabawi (Maysan Taqwa)',
      status: 'NEEDS_CONFIRMATION',
    },
    durationOptionsInDoc: ['9 Hari', '10 Hari', '12 Hari', '13 Hari', '16 Hari'],
    departureCitiesInDoc: ['Jakarta', 'Surabaya', 'Aceh', 'Palembang', 'Makassar', 'Pontianak', 'Medan'],
    airlinesInDoc: ['Saudia Airlines', 'Lion Air', 'Batik Air'],
    keyHighlights: [
      'Tiket penerbangan internasional pulang-pergi sesuai rute embarkasi',
      'Makan 3 kali sehari (Full Board Hotel) sesuai program',
      'Transportasi bus eksekutif berfasilitas toilet selama di Arab Saudi',
      'Pendampingan Muthawwif berbahasa Indonesia & 2 Tour Leader bersertifikasi BNSP per bus',
      'Fasilitas Kereta Cepat Haramain (1x) sesuai ketentuan program aktif',
    ],
    scheduleStatus: {
      activeScheduleText: 'Jadwal akan dikonfirmasi.',
      isExpiredReferenceInDoc: true,
      referenceNote:
        'Materi flyer terakhir mencantumkan periode Juli–Agustus 2026 yang telah lewat. Hubungi konsultan untuk jadwal keberangkatan musim terbaru.',
      status: 'PLACEHOLDER',
    },
    priceStatus: {
      activePriceText: 'Hubungi agen untuk informasi harga terbaru.',
      referencePriceNote: 'Detail paket menunggu konfirmasi sesuai tanggal keberangkatan dan kota embarkasi.',
      status: 'PLACEHOLDER',
    },
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'paket-safawi',
    tierCode: 'SAFAWI',
    name: 'Paket Safawi',
    tagline: 'Keseimbangan jarak akomodasi dan kenyamanan untuk ibadah bersama keluarga',
    categoryLabel: 'Umrah Reguler — Kelas Menengah',
    badgeText: 'Favorit Keluarga',
    makkahHotelClass: 'Hotel Bintang 4 (★★★★)',
    madinahHotelClass: 'Hotel Bintang 3 (★★★)',
    makkahReferenceHotels: ['Maysan Al Maqam Makkah', 'Snood Ajyad / Elaf Ajyad (Setaraf pada brosur)'],
    madinahReferenceHotels: ['Golden Tulip Ansar', 'Mirage Al Salam / Artal International (Setaraf pada brosur)'],
    approximateDistanceNote: {
      makkah: 'Referensi dokumen: ±500 meter ke Masjidil Haram (Maysan Al Maqam)',
      madinah: 'Referensi dokumen: ±200 meter ke Masjid Nabawi (Golden Tulip Ansar)',
      status: 'NEEDS_CONFIRMATION',
    },
    durationOptionsInDoc: ['9 Hari', '10 Hari', '12 Hari', '13 Hari', '16 Hari'],
    departureCitiesInDoc: ['Jakarta', 'Surabaya', 'Aceh', 'Palembang', 'Makassar', 'Pontianak', 'Medan'],
    airlinesInDoc: ['Saudia Airlines', 'Lion Air', 'Batik Air'],
    keyHighlights: [
      'Peningkatan kelas hotel Makkah ke kategori Bintang 4 pada referensi paket',
      'Handling koper penuh dari bandara keberangkatan hingga depan kamar hotel',
      'Lounge keberangkatan dan sajian Welcome Food sesuai program',
      'Ziarah City Tour Madinah, Makkah, dan Jeddah dengan snack ziarah',
      'Fasilitas Kereta Cepat Haramain (1x) sesuai ketentuan program aktif',
    ],
    scheduleStatus: {
      activeScheduleText: 'Jadwal akan dikonfirmasi.',
      isExpiredReferenceInDoc: true,
      referenceNote:
        'Jadwal keberangkatan disesuaikan dengan kuota musim berjalan per kota embarkasi.',
      status: 'PLACEHOLDER',
    },
    priceStatus: {
      activePriceText: 'Hubungi agen untuk informasi harga terbaru.',
      referencePriceNote: 'Detail paket menunggu konfirmasi sesuai tanggal keberangkatan dan kota embarkasi.',
      status: 'PLACEHOLDER',
    },
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'paket-sukari',
    tierCode: 'SUKARI',
    name: 'Paket Sukari',
    tagline: 'Akses lebih dekat ke Masjidil Haram dengan hotel bintang lima di Makkah',
    categoryLabel: 'Umrah Semi-VIP — Akses Dekat',
    badgeText: 'Rekomendasi Utama',
    isFeatured: true,
    makkahHotelClass: 'Hotel Bintang 5 (★★★★★)',
    madinahHotelClass: 'Hotel Bintang 4 (★★★★)',
    makkahReferenceHotels: ['Anjum Makkah', 'Al Shohada / Pullman Zamzam (Setaraf pada brosur)'],
    madinahReferenceHotels: ['Emaar Royal', 'Rove Al Madinah / Taiba Front (Setaraf pada brosur)'],
    approximateDistanceNote: {
      makkah: 'Referensi dokumen: ±100 meter ke Masjidil Haram (Anjum Makkah)',
      madinah: 'Referensi dokumen: ±200 meter ke Masjid Nabawi (Emaar Royal)',
      status: 'NEEDS_CONFIRMATION',
    },
    durationOptionsInDoc: ['9 Hari', '10 Hari', '12 Hari', '13 Hari', '16 Hari'],
    departureCitiesInDoc: ['Jakarta', 'Surabaya', 'Aceh', 'Palembang', 'Makassar', 'Pontianak', 'Medan'],
    airlinesInDoc: ['Saudia Airlines', 'Lion Air', 'Batik Air'],
    keyHighlights: [
      'Referensi hotel Makkah Bintang 5 dengan akses jalan kaki yang sangat dekat ke pelataran Masjidil Haram',
      'Sangat ideal bagi jamaah lansia atau keluarga yang mengutamakan kemudahan bolak-balik ke masjid',
      'Layanan Full Board Hotel 3 kali sehari dengan hidangan bercita rasa bersahabat',
      'Pendampingan Muthawwif, 2 Tour Leader BNSP, serta Receiver Audio untuk tawaf & sai',
      'Fasilitas Kereta Cepat Haramain (1x) dan Air Zamzam 5 Liter (sesuai kebijakan Arab Saudi)',
    ],
    scheduleStatus: {
      activeScheduleText: 'Jadwal akan dikonfirmasi.',
      isExpiredReferenceInDoc: true,
      referenceNote:
        'Konfirmasikan ketersediaan kamar untuk tipe Quad, Triple, atau Double pada jadwal terbaru.',
      status: 'PLACEHOLDER',
    },
    priceStatus: {
      activePriceText: 'Hubungi agen untuk informasi harga terbaru.',
      referencePriceNote: 'Detail paket menunggu konfirmasi sesuai tanggal keberangkatan dan kota embarkasi.',
      status: 'PLACEHOLDER',
    },
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'paket-majol',
    tierCode: 'MAJOL',
    name: 'Paket Majol',
    tagline: 'Pengalaman ibadah kelas utama dengan akomodasi Bintang 5 di kawasan Zamzam Tower & pelataran masjid',
    categoryLabel: 'Umrah Eksekutif / VIP — Zamzam Tower',
    badgeText: 'Kelas Utama (VIP)',
    makkahHotelClass: 'Hotel Bintang 5 (★★★★★)',
    madinahHotelClass: 'Hotel Bintang 5 (★★★★★)',
    makkahReferenceHotels: [
      'Movenpick Makkah (Zamzam Tower)',
      'Al Marwa Rayhaan Rotana (Zamzam Tower)',
      'Pullman Zamzam / Safwah Royale Orchid (Setaraf pada brosur)',
    ],
    madinahReferenceHotels: [
      'Maysan Al Harithia',
      'Dar Al Taqwa / Hilton / Anwar Al Madinah Movenpick (Setaraf pada brosur)',
    ],
    approximateDistanceNote: {
      makkah: 'Referensi dokumen: Kawasan Zamzam Tower (Pelataran Masjidil Haram)',
      madinah: 'Referensi dokumen: ±50 meter ke Masjid Nabawi (Maysan Al Harithia)',
      status: 'NEEDS_CONFIRMATION',
    },
    durationOptionsInDoc: ['9 Hari', '10 Hari', '12 Hari', '13 Hari', '16 Hari'],
    departureCitiesInDoc: ['Jakarta', 'Surabaya', 'Aceh', 'Palembang', 'Makassar', 'Pontianak', 'Medan'],
    airlinesInDoc: ['Saudia Airlines', 'Lion Air', 'Batik Air'],
    keyHighlights: [
      'Akomodasi Bintang 5 di Makkah (kawasan Zamzam Tower) dan Bintang 5 di Madinah pada referensi paket',
      'Jarak tempuh paling dekat menuju pintu utama Masjidil Haram dan Masjid Nabawi',
      'Opsi permintaan tambahan (request) kamar View Haram / Ka\'bah dan transportasi privat VIP',
      'Layanan penanganan koper (full handling) dari bandara hingga ke depan kamar hotel',
      'Pendampingan intensif serta fasilitas lengkap standar tertinggi Samira Travel',
    ],
    scheduleStatus: {
      activeScheduleText: 'Jadwal akan dikonfirmasi.',
      isExpiredReferenceInDoc: true,
      referenceNote:
        'Alokasi antara Movenpick Makkah, Al Marwa Rayhaan Rotana, atau hotel setaraf mengikuti tanggal keberangkatan.',
      status: 'PLACEHOLDER',
    },
    priceStatus: {
      activePriceText: 'Hubungi agen untuk informasi harga terbaru.',
      referencePriceNote: 'Detail paket menunggu konfirmasi sesuai tanggal keberangkatan dan kota embarkasi.',
      status: 'PLACEHOLDER',
    },
    status: 'NEEDS_CONFIRMATION',
  },
];

export const AIRLINE_REFERENCES: AirlineReference[] = [
  {
    id: 'saudia',
    name: 'Saudia Airlines',
    routeNoteInDoc: 'Tercantum pada Slide 19 & 24 (Contoh rute langsung Jakarta – Jeddah pada materi referensi)',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'lion-air',
    name: 'Lion Air',
    routeNoteInDoc:
      'Tercantum pada Slide 19–22 & 24 (Contoh rute keberangkatan Surabaya, Palembang, Makassar, dan Medan pada materi referensi)',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'batik-air',
    name: 'Batik Air',
    routeNoteInDoc:
      'Tercantum pada Slide 20, 21 & 24 (Contoh rute keberangkatan Aceh dan Pontianak via Kuala Lumpur – Jeddah pada materi referensi)',
    status: 'NEEDS_CONFIRMATION',
  },
];

export const GROUP_PROMO_REFERENCES: GroupProgramReference[] = [
  {
    id: 'promo-5-free-1',
    code: '5 FREE 1',
    title: 'Program 5 Pendaftar Paket Majol',
    description: 'Tercantum pada Slide 38: Pendaftaran 5 Paket Majol mendapatkan 1 Paket Safara (menunggu konfirmasi masa berlaku).',
    status: 'NEEDS_CONFIRMATION',
    sourceNote: 'Slide 38 Product Knowledge 2026. Perlu konfirmasi apakah berlaku untuk jamaah grup umum atau program kemitraan.',
  },
  {
    id: 'promo-7-free-1',
    code: '7 FREE 1',
    title: 'Program 7 Pendaftar Paket Sukari',
    description: 'Tercantum pada Slide 38: Pendaftaran 7 Paket Sukari mendapatkan 1 Paket Safara (menunggu konfirmasi masa berlaku).',
    status: 'NEEDS_CONFIRMATION',
    sourceNote: 'Slide 38 Product Knowledge 2026. Perlu konfirmasi syarat, ketentuan, dan periode keberlakuan.',
  },
  {
    id: 'promo-10-free-1',
    code: '10 FREE 1',
    title: 'Program 10 Pendaftar Paket Safawi',
    description: 'Tercantum pada Slide 38: Pendaftaran 10 Paket Safawi mendapatkan 1 Paket Safawi (menunggu konfirmasi masa berlaku).',
    status: 'NEEDS_CONFIRMATION',
    sourceNote: 'Slide 38 Product Knowledge 2026. Perlu konfirmasi syarat, ketentuan, dan periode keberlakuan.',
  },
];

/**
 * Mengambil seluruh daftar tingkatan paket umrah untuk ditampilkan pada matriks perbandingan.
 *
 * @returns Array objek PackageTierItem.
 */
export function getPackageTiers(): PackageTierItem[] {
  return PACKAGE_TIERS;
}

/**
 * Mencari detail satu tingkatan paket berdasarkan kode tingkatannya.
 *
 * @param tierCode Kode tingkatan ('SAFARA' | 'SAFAWI' | 'SUKARI' | 'MAJOL').
 * @returns Objek PackageTierItem jika ditemukan, atau undefined.
 */
export function getPackageTierByCode(
  tierCode: PackageTierCode
): PackageTierItem | undefined {
  return PACKAGE_TIERS.find((pkg) => pkg.tierCode === tierCode);
}
