/**
 * Data terpusat kelompok layanan utama PT Samira Ali Wisata (Samira Travel).
 * Disusun berdasarkan Slide 9 & Slide 18 dokumen Product Knowledge 2026.
 */

import type { VerificationStatus } from './site-config';

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  benefits: string[];
  programHighlights: string[];
  availabilityNotice: string;
  whatsappContextName: string;
  status: VerificationStatus;
}

export const MAIN_SERVICES: ServiceItem[] = [
  {
    id: 'umrah',
    slug: 'perjalanan-ibadah-umrah',
    title: 'Jasa Perjalanan Ibadah Umrah',
    shortTitle: 'Ibadah Umrah',
    subtitle: 'Program umrah terstruktur dengan pilihan tingkatan hotel dan pendampingan sesuai tuntunan Sunnah',
    description:
      'Layanan perjalanan ibadah umrah untuk individu, keluarga, maupun grup dengan pilihan tingkatan akomodasi (Safara, Safawi, Sukari, hingga Majol), pendampingan muthawwif berbahasa Indonesia, serta penanganan bagasi terpadu.',
    imageUrl: '/images/services/umroh-service.webp',
    imageAlt: 'Suasana tenang menghadap kawasan Masjidil Haram untuk layanan perjalanan ibadah umrah',
    benefits: [
      'Pilihan empat tingkatan paket sesuai preferensi jarak hotel ke masjid',
      'Pendampingan ibadah oleh muthawwif berbahasa Indonesia dan tour leader bersertifikasi',
      'Penanganan koper (handling) dari bandara keberangkatan hingga ke depan kamar hotel',
      'Pilihan keberangkatan dari Jakarta serta berbagai kota besar di Indonesia sesuai jadwal aktif',
    ],
    programHighlights: [
      'Durasi program bervariasi (9, 10, 12, 13, hingga 16 hari mengikuti jadwal musim aktif)',
      'Bimbingan manasik sebelum keberangkatan',
      'Fasilitas perlengkapan ibadah lengkap (koper, tas, seragam, buku doa, dan receiver audio)',
    ],
    availabilityNotice:
      'Jadwal keberangkatan, pilihan maskapai, dan alokasi hotel mengikuti ketersediaan kuota musim berjalan dan wajib dikonfirmasi kepada konsultan resmi.',
    whatsappContextName: 'Jasa Perjalanan Ibadah Umrah',
    status: 'VERIFIED',
  },
  {
    id: 'haji-khusus-furoda',
    slug: 'haji-khusus-dan-furoda',
    title: 'Jasa Perjalanan Ibadah Haji Khusus & Furoda',
    shortTitle: 'Haji Khusus & Furoda',
    subtitle: 'Pendampingan ibadah haji khusus (ONH Plus) dan program Furoda di bawah izin PIHK PT Samira Ali Wisata',
    description:
      'Penyelenggaraan perjalanan ibadah haji khusus dan Furoda yang berfokus pada ketertiban administrasi, bimbingan manasik intensif, kenyamanan akomodasi selama puncak ibadah di Arafah-Muzdalifah-Mina (Armuzna), serta pendampingan pembimbing ibadah berpengalaman.',
    imageUrl: '/images/services/haji-khusus-furoda.webp',
    imageAlt: 'Kawasan pelataran Masjidil Haram dan Zamzam Tower untuk layanan Haji Khusus dan Furoda',
    benefits: [
      'Penyelenggaraan di bawah badan hukum PT Samira Ali Wisata (PIHK tercantum di dokumen: 16092100475620006)',
      'Bimbingan manasik haji bertahap untuk kesiapan fisik dan pemahaman rukun/wajib haji',
      'Pendampingan tim medis/kesehatan dan pembimbing ibadah sesuai ketentuan program',
      'Konsultasi transparan mengenai estimasi masa tunggu kuota Haji Khusus maupun prosedur visa Furoda',
    ],
    programHighlights: [
      'Program Haji Khusus (Kuota Resmi Pemerintah / Kemenag RI)',
      'Program Haji Furoda / Mujamalah (mengikuti kebijakan penerbitan visa Kerajaan Arab Saudi)',
      'Layanan administrasi pendaftaran dan pendampingan dokumen lengkap',
    ],
    availabilityNotice:
      'Rincian kuota, biaya penyelenggaraan ibadah haji (BPIH Khusus), dan ketentuan visa Furoda mengikuti regulasi terbaru Kementerian Agama RI serta Pemerintah Kerajaan Arab Saudi.',
    whatsappContextName: 'Jasa Perjalanan Ibadah Haji Khusus & Furoda',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'halal-tour',
    slug: 'perjalanan-halal-tour',
    title: 'Jasa Perjalanan Halal Tour',
    shortTitle: 'Halal Tour & Wisata Muslim',
    subtitle: 'Eksplorasi destinasi bersejarah Islam dan wisata ramah muslim dengan terjaganya waktu salat serta kuliner halal',
    description:
      'Program perjalanan wisata muslim maupun kunjungan tambahan (additional trip) ke berbagai destinasi bersejarah seperti Jeddah, Thaif, Riyadh, dan Al Ula dengan jadwal perjalanan yang memperhatikan waktu ibadah serta kenyamanan keluarga.',
    imageUrl: '/images/services/halal-tour.webp',
    imageAlt: 'Kenyamanan akomodasi dan pemandangan kota bersejarah untuk layanan Halal Tour',
    benefits: [
      'Rencana perjalanan (itinerary) yang menjaga waktu pelaksanaan salat wajib',
      'Penyediaan hidangan halal dan akomodasi ramah keluarga',
      'Opsi kunjungan tambahan (Additional Trip) ke Thaif, Jeddah, Riyadh, dan Al Ula',
      'Tersedia opsi transportasi privat untuk keluarga atau rombongan khusus',
    ],
    programHighlights: [
      'Ziarah dan City Tour Madinah, Makkah, serta Jeddah',
      'Perjalanan tambahan (Request Trip) ke Thaif, Riyadh, atau Al Ula',
      'Kustomisasi perjalanan grup keluarga atau korporasi',
    ],
    availabilityNotice:
      'Destinasi wisata halal mandiri maupun tambahan rute ziarah disesuaikan dengan jadwal musim dan ketersediaan kuota rombongan.',
    whatsappContextName: 'Jasa Perjalanan Halal Tour',
    status: 'NEEDS_CONFIRMATION',
  },
];

export const SYARIAH_FINANCING_INFO = {
  title: 'Informasi Opsi Pembiayaan Perjalanan Ibadah Syariah',
  subtitle: 'Kemudahan perencanaan ibadah melalui lembaga keuangan syariah mitra',
  description:
    'Dokumen Product Knowledge Samira Travel mencantumkan kerja sama dengan Lembaga Keuangan Syariah yang terdaftar dan diawasi oleh OJK serta berlandaskan fatwa Dewan Syariah Nasional MUI (prinsip akad sesuai ketentuan syariah).',
  generalHighlights: [
    'Persyaratan dokumen dasar meliputi KTP dan Kartu Keluarga (KK) sesuai ketentuan lembaga pembiayaan',
    'Landasan akad merujuk pada ketentuan Dewan Syariah Nasional Majelis Ulama Indonesia (DSN-MUI)',
    'Proses pengajuan, persetujuan plafon, uang muka (DP), dan tenor angsuran ditentukan sepenuhnya oleh lembaga pembiayaan mitra berdasarkan verifikasi data pemohon',
  ],
  confidentialityNotice:
    'Sesuai kebijakan tata kelola informasi, tabel simulasi angsuran internal pihak ketiga (AMITRA / FIFGROUP) tidak dipublikasikan di halaman ini. Hubungi konsultan resmi untuk mendapatkan penjelasan prosedur pengajuan terbaru.',
  status: 'NEEDS_CONFIRMATION' as VerificationStatus,
};

/**
 * Mengambil seluruh daftar layanan utama Samira Travel.
 *
 * @returns Array objek ServiceItem untuk dirender pada halaman utama maupun halaman layanan.
 */
export function getMainServices(): ServiceItem[] {
  return MAIN_SERVICES;
}
