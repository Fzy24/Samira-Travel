/**
 * Data Pertanyaan yang Sering Diajukan (FAQ) untuk calon jamaah Samira Travel.
 * Seluruh jawaban disusun berdasarkan data yang diketahui dan mengarahkan hal-hal
 * terkait visa, refund, jadwal aktif, serta biaya aktual kepada konfirmasi resmi.
 */

export interface FaqItem {
  id: string;
  category:
    | 'Pemilihan Paket'
    | 'Fasilitas & Hotel'
    | 'Persyaratan & Dokumen'
    | 'Jadwal & Biaya'
    | 'Persiapan Perjalanan'
    | 'Konsultasi Resmi';
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-pilih-paket',
    category: 'Pemilihan Paket',
    question: 'Apa perbedaan utama antara Paket Safara, Safawi, Sukari, dan Majol?',
    answer:
      'Dalam materi produk Samira Travel, keempat paket tersebut dibedakan terutama berdasarkan kelas bintang dan estimasi jarak hotel ke Masjidil Haram serta Masjid Nabawi. Paket Safara merupakan kelas ekonomis (referensi hotel Bintang 3), Paket Safawi kelas menengah (Makkah Bintang 4 / Madinah Bintang 3), Paket Sukari kelas semi-VIP dengan akses dekat ke pelataran Masjidil Haram (Makkah Bintang 5 / Madinah Bintang 4), sedangkan Paket Majol menempatkan jamaah pada hotel Bintang 5 di kawasan Zamzam Tower Makkah dan barisan depan Masjid Nabawi. Ketersediaan masing-masing tier mengikuti jadwal keberangkatan yang aktif.',
  },
  {
    id: 'faq-jadwal-harga',
    category: 'Jadwal & Biaya',
    question: 'Mengapa tanggal keberangkatan dan harga pasti tidak langsung dicantumkan di halaman ini?',
    answer:
      'Jadwal keberangkatan, ketersediaan kursi maskapai, serta harga paket bersifat dinamis mengikuti kuota musim berjalan, kota embarkasi, dan kurs nilai tukar yang berlaku. Materi brosur periode sebelumnya (Juli–Agustus 2026) tidak ditampilkan sebagai penawaran mendatang agar calon jamaah hanya memperoleh informasi jadwal baru yang benar-benar terkonfirmasi melalui konsultan resmi kami.',
  },
  {
    id: 'faq-fasilitas-termasuk',
    category: 'Fasilitas & Hotel',
    question: 'Apa saja komponen yang umumnya sudah termasuk dan belum termasuk dalam paket umrah?',
    answer:
      'Berdasarkan materi Product Knowledge perusahaan, komponen yang umumnya termasuk meliputi tiket pesawat internasional pulang-pergi, akomodasi hotel sesuai program, makan 3 kali sehari (full board), transportasi bus eksekutif di Arab Saudi, muthawwif berbahasa Indonesia, tour leader bersertifikasi, visa umrah, asuransi perjalanan, bimbingan manasik, serta air Zamzam 5 liter sesuai kebijakan Arab Saudi. Adapun pembuatan paspor, vaksinasi meningitis, perjalanan domestik ke kota embarkasi, perlengkapan & handling, serta pengeluaran pribadi belum termasuk dalam harga dasar paket. Rincian final wajib dikonfirmasi per paket sebelum pendaftaran.',
  },
  {
    id: 'faq-handling-koper',
    category: 'Persiapan Perjalanan',
    question: 'Bagaimana sistem penanganan koper (handling) jamaah saat keberangkatan dan kepulangan?',
    answer:
      'Dalam materi layanan Samira Travel, tim handling membantu menangani koper bagasi jamaah sejak dari bandara keberangkatan hingga diantarkan ke depan kamar hotel masing-masing di Tanah Suci. Saat kepulangan, koper dijemput dari depan kamar hotel dan diterima kembali oleh jamaah di bandara kedatangan Tanah Air. Pastikan Anda mengonfirmasi teknis penyerahan koper pada bandara embarkasi pilihan Anda.',
  },
  {
    id: 'faq-persyaratan',
    category: 'Persyaratan & Dokumen',
    question: 'Apa saja persyaratan dokumen awal untuk berkonsultasi atau mendaftar?',
    answer:
      'Untuk konsultasi awal melalui WhatsApp, Anda tidak perlu mengirimkan dokumen pribadi sensitif. Setelah Anda memilih jadwal dan program yang telah dikonfirmasi, tim administrasi akan menjelaskan persyaratan dokumen resmi seperti paspor yang masih berlaku minimal sesuai ketentuan imigrasi/visa, KTP, Kartu Keluarga, buku bukti vaksinasi kesehatan yang disyaratkan otoritas Arab Saudi, serta ketentuan pembatalan/refund yang berlaku.',
  },
  {
    id: 'faq-keamanan-pembayaran',
    category: 'Konsultasi Resmi',
    question: 'Bagaimana prosedur pembayaran resmi agar calon jamaah terhindar dari penipuan?',
    answer:
      'Website company profile ini khusus ditujukan untuk informasi dan konsultasi awal, serta tidak menerima pembayaran online. Sesuai peringatan resmi pada dokumen PT Samira Ali Wisata, calon jamaah dilarang menitipkan pembayaran DP maupun pelunasan kepada perorangan. Seluruh transaksi resmi hanya dilakukan setelah pendaftaran terverifikasi dan ditujukan langsung ke rekening korporasi atas nama PT Samira Ali Wisata.',
  },
];

/**
 * Mengambil seluruh daftar pertanyaan dan jawaban FAQ.
 *
 * @returns Array objek FaqItem.
 */
export function getFaqItems(): FaqItem[] {
  return FAQ_ITEMS;
}
