/**
 * Data terpusat fasilitas perjalanan, komponen termasuk & belum termasuk dalam paket,
 * perlengkapan umrah jamaah (9 item), permintaan fasilitas tambahan, serta pilar keunggulan.
 * Disusun dari Slide 11–18, 23, 34, 35, dan 36 dokumen Product Knowledge 2026.
 */

import type { VerificationStatus } from './site-config';

export interface FacilityComponentItem {
  id: string;
  title: string;
  description: string;
  status: VerificationStatus;
}

export interface UmrahEquipmentItem {
  id: string;
  name: string;
  description: string;
}

export interface AdvantagePillarItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconKey: 'guidance' | 'handling' | 'hotel' | 'flight' | 'network' | 'preparation';
  status: VerificationStatus;
  sourceSlide: string;
}

/**
 * Komponen fasilitas kandidat "Termasuk dalam Paket" berdasarkan Slide 35.
 * Disajikan sebagai kandidat struktur fasilitas yang berlaku mengikuti konfirmasi paket.
 */
export const INCLUDED_FACILITIES: FacilityComponentItem[] = [
  {
    id: 'inc-flight',
    title: 'Tiket Pesawat Internasional (PP)',
    description: 'Penerbangan internasional pulang-pergi sesuai rute embarkasi dan maskapai pada program yang dipilih.',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'inc-hotel',
    title: 'Akomodasi Hotel Sesuai Program',
    description: 'Penginapan di Makkah dan Madinah sesuai tingkatan paket (Safara, Safawi, Sukari, atau Majol).',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'inc-bus',
    title: 'Transportasi Bus Eksekutif + Toilet',
    description: 'Armada bus berfasilitas toilet untuk perjalanan ziarah, city tour, dan transfer antar-kota di Arab Saudi.',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'inc-muthawwif',
    title: 'Muthawwif / Pembimbing Ibadah Berbahasa Indonesia',
    description: 'Pendampingan pelaksanaan rukun dan sunnah umrah oleh pembimbing berpengalaman.',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'inc-tour-leader',
    title: 'Tour Leader Bersertifikasi BNSP',
    description: 'Materi produk mencantumkan pendampingan 2 Tour Leader bersertifikasi BNSP dalam 1 bus rombongan.',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'inc-meals',
    title: 'Konsumsi 3 Kali Sehari (Full Board Hotel)',
    description: 'Makan dan minum 3 kali sehari di masing-masing hotel selama mengikuti program di Arab Saudi.',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'inc-visa',
    title: 'Visa Umrah Resmi',
    description: 'Pengurusan dokumen dan penerbitan visa perjalanan ibadah umrah sesuai regulasi Pemerintah Arab Saudi.',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'inc-lounge',
    title: 'Lounge Keberangkatan',
    description: 'Fasilitas ruang tunggu keberangkatan pada bandara yang ditentukan dalam program.',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'inc-welcome-food',
    title: 'Welcome Food & Snack Ziarah',
    description: 'Sajian konsumsi saat keberangkatan/kepulangan (termasuk hidangan Albaik pada materi klien) serta kudapan setiap agenda ziarah.',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'inc-city-tour',
    title: 'Ziarah & City Tour Madinah, Makkah, Jeddah',
    description: 'Kunjungan ke situs-situs bersejarah Islam di Madinah, Makkah, dan kota Jeddah sesuai jadwal perjalanan.',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'inc-baggage',
    title: 'Alokasi Bagasi Penerbangan',
    description: 'Referensi dokumen mencantumkan ketentuan bagasi 23 kg × 2 (mengikuti aturan maskapai penerbangan aktual).',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'inc-insurance',
    title: 'Asuransi Perjalanan',
    description: 'Perlindungan asuransi perjalanan selama mengikuti program ibadah sesuai ketentuan polis.',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'inc-manasik',
    title: 'Bimbingan Manasik Ibadah',
    description: 'Pembekalan tata cara ibadah dan kesiapan perjalanan sebelum keberangkatan ke Tanah Suci.',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'inc-zamzam',
    title: 'Air Zamzam 5 Liter (Sesuai Kebijakan Arab Saudi)',
    description: 'Pemberian air Zamzam 5 liter mengikuti ketentuan resmi maskapai dan otoritas Kerajaan Arab Saudi.',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'inc-haramain-train',
    title: 'Fasilitas Kereta Cepat Haramain (1x Sesuai Program)',
    description: 'Tiket Kereta Cepat Haramain satu arah sesuai program keberangkatan yang dikonfirmasi.',
    status: 'NEEDS_CONFIRMATION',
  },
];

/**
 * Komponen "Tidak Termasuk dalam Paket" berdasarkan Slide 36.
 */
export const EXCLUDED_FACILITIES: FacilityComponentItem[] = [
  {
    id: 'exc-passport',
    title: 'Biaya Pembuatan atau Perpanjangan Paspor',
    description: 'Pengurusan paspor pribadi di kantor imigrasi menjadi tanggung jawab masing-masing calon jamaah.',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'exc-vaccine',
    title: 'Biaya Vaksinasi Meningitis & Pemeriksaan Kesehatan',
    description: 'Biaya vaksinasi wajib dan surat keterangan kesehatan baru apabila disyaratkan untuk penerbitan visa.',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'exc-handling-gear',
    title: 'Perlengkapan Ibadah & Handling Domestik',
    description: 'Pada Slide 36 materi klien tercantum komponen Perlengkapan & Handling terpisah (perlu konfirmasi nominal aktual saat pendaftaran).',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'exc-domestic-ticket',
    title: 'Tiket Pesawat / Transportasi Domestik ke Kota Embarkasi',
    description: 'Biaya perjalanan dari daerah asal menuju bandara kota keberangkatan utama beserta hotel transit bila diperlukan.',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'exc-excess-baggage',
    title: 'Kelebihan Bagasi (Overweight)',
    description: 'Biaya kelebihan berat bagasi di luar batas kuota resmi maskapai penerbangan.',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'exc-personal',
    title: 'Pengeluaran Pribadi & Fasilitas Tambahan Hotel',
    description: 'Tagihan telepon, laundry, minibar, payview TV, serta tur atau makan/minum tambahan di luar program resmi.',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'exc-saudi-policy',
    title: 'Biaya Tambahan Regulasi Baru Pemerintah Arab Saudi (Apabila Ada)',
    description: 'Biaya tambahan resmi yang mungkin diterbitkan sewaktu-waktu oleh otoritas Kerajaan Arab Saudi terkait visa.',
    status: 'NEEDS_CONFIRMATION',
  },
];

/**
 * 9 item perlengkapan umrah yang ditampilkan pada Slide 23 dokumen Product Knowledge 2026.
 */
export const UMRAH_EQUIPMENT_ITEMS: UmrahEquipmentItem[] = [
  {
    id: 'eq-seragam',
    name: 'Seragam Jamaah',
    description: 'Seragam batik identitas jamaah Samira Travel serta busana muslim perjalanan.',
  },
  {
    id: 'eq-nametag',
    name: 'Name Tag Identitas',
    description: 'Tanda pengenal jamaah untuk memudahkan koordinasi rombongan selama perjalanan.',
  },
  {
    id: 'eq-idcard',
    name: 'ID Card & Lanyard',
    description: 'Kartu identitas jamaah beserta tali gantungan resmi Samira Travel.',
  },
  {
    id: 'eq-sajadah',
    name: 'Sajadah Perjalanan',
    description: 'Sajadah praktis yang nyaman dibawa saat beribadah di Tanah Suci.',
  },
  {
    id: 'eq-buku-doa',
    name: 'Buku Panduan Umrah & Doa',
    description: 'Buku panduan manasik dan kumpulan doa perjalanan ibadah PT Samira Ali Wisata.',
  },
  {
    id: 'eq-receiver',
    name: 'Receiver Audio Ibadah',
    description: 'Alat bantu dengar nirkabel agar jamaah dapat menyimak bimbingan doa muthawwif dengan jelas saat tawaf dan sai.',
  },
  {
    id: 'eq-ransel',
    name: 'Tas Ransel',
    description: 'Tas punggung serbaguna untuk membawa perlengkapan harian selama ziarah.',
  },
  {
    id: 'eq-koper-kabin',
    name: 'Koper Kabin',
    description: 'Koper ukuran kabin untuk barang bawaan penting selama penerbangan.',
  },
  {
    id: 'eq-koper-bagasi',
    name: 'Koper Bagasi Utama',
    description: 'Koper ukuran bagasi beridentitas seragam untuk kemudahan proses handling.',
  },
];

/**
 * Daftar permintaan fasilitas tambahan (Request Fasilitas) dari Slide 34.
 */
export const CUSTOM_FACILITY_REQUESTS: string[] = [
  'Additional Trip Jeddah',
  'Additional Trip Thaif',
  'Additional Trip Riyadh',
  'Additional Trip Al Ula',
  'Tiket Kereta Cepat Haramain Tambahan',
  'Permintaan Kamar View Haram (View Ka\'bah / View Nabawi)',
  'Transportasi Privat (GMC, Land Cruiser, Alphard, dll.)',
  'Upgrade Penerbangan Kelas Bisnis (Business Class Flights)',
];

/**
 * Pilar alasan memilih Samira Travel yang disusun secara objektif dari Slide 11–18.
 */
export const ADVANTAGE_PILLARS: AdvantagePillarItem[] = [
  {
    id: 'adv-pendampingan',
    title: 'Pendampingan Perjalanan Menyeluruh',
    subtitle: 'Dari pengurusan berkas hingga kembali ke Tanah Air',
    description:
      'Setiap rombongan didampingi oleh pembimbing ibadah (muthawwif) berbahasa Indonesia dan tour leader bersertifikasi untuk membantu kelancaran pelaksanaan ibadah keluarga Anda.',
    iconKey: 'guidance',
    status: 'VERIFIED',
    sourceSlide: 'Slide 4, 11 & 35 Product Knowledge 2026',
  },
  {
    id: 'adv-handling',
    title: 'Penanganan Koper (Handling) Bandara ke Kamar Hotel',
    subtitle: 'Kemudahan perjalanan tanpa repot membawa koper besar',
    description:
      'Tim handling menangani koper jamaah sejak dari bandara keberangkatan hingga diantarkan ke depan kamar hotel di Tanah Suci, serta penjemputan koper kembali saat kepulangan.',
    iconKey: 'handling',
    status: 'NEEDS_CONFIRMATION',
    sourceSlide: 'Slide 16 Product Knowledge 2026',
  },
  {
    id: 'adv-persiapan',
    title: 'Bimbingan Manasik & Alat Bantu Receiver Audio',
    subtitle: 'Persiapan ilmu manasik dan panduan suara saat tawaf',
    description:
      'Jamaah dibekali bimbingan manasik, buku panduan doa, serta perangkat receiver audio agar bimbingan doa dari muthawwif tetap terdengar jelas di tengah keramaian pelataran masjid.',
    iconKey: 'preparation',
    status: 'NEEDS_CONFIRMATION',
    sourceSlide: 'Slide 23 & 35 Product Knowledge 2026',
  },
  {
    id: 'adv-akomodasi',
    title: 'Struktur Tingkatan Hotel yang Jelas',
    subtitle: 'Empat pilihan tier dari kelas hemat hingga kawasan Zamzam Tower',
    description:
      'Calon jamaah dapat memilih tingkatan paket (Safara, Safawi, Sukari, atau Majol) dengan referensi hotel dan estimasi jarak ke masjid yang disesuaikan dengan kebutuhan lansia maupun keluarga.',
    iconKey: 'hotel',
    status: 'NEEDS_CONFIRMATION',
    sourceSlide: 'Slide 14 & 25–33 Product Knowledge 2026',
  },
  {
    id: 'adv-penerbangan',
    title: 'Perencanaan Tiket & Rute Multi-Embarkasi',
    subtitle: 'Keberangkatan dari Jakarta dan berbagai kota besar di Indonesia',
    description:
      'Materi perusahaan mencatat pengelolaan blok kursi penerbangan dan opsi keberangkatan dari berbagai kota besar seperti Jakarta, Surabaya, Medan, Makassar, Aceh, Palembang, dan Pontianak sesuai jadwal aktif.',
    iconKey: 'flight',
    status: 'NEEDS_CONFIRMATION',
    sourceSlide: 'Slide 13, 15, 17 & 19–22 Product Knowledge 2026',
  },
  {
    id: 'adv-jaringan',
    title: 'Badan Hukum Resmi & Jaringan Layanan Daerah',
    subtitle: 'Bernaung di bawah PT Samira Ali Wisata',
    description:
      'Didukung oleh kantor pusat di Jakarta Timur serta daftar kantor cabang di berbagai provinsi untuk memudahkan konsultasi dan koordinasi dokumen calon jamaah di daerah.',
    iconKey: 'network',
    status: 'NEEDS_CONFIRMATION',
    sourceSlide: 'Slide 2, 12, 42 & 43 Product Knowledge 2026',
  },
];

/**
 * Mengambil daftar komponen fasilitas yang termasuk dan tidak termasuk dalam paket.
 *
 * @returns Objek berisi array included dan excluded.
 */
export function getPackageFacilityBreakdown(): {
  included: FacilityComponentItem[];
  excluded: FacilityComponentItem[];
} {
  return {
    included: INCLUDED_FACILITIES,
    excluded: EXCLUDED_FACILITIES,
  };
}
