# Sumber Aset Visual & Lisensi (`Assets and Licenses`)

Dokumen ini mencatat asal-usul seluruh aset gambar, ikon, dan font yang digunakan pada website **Samira Travel (`PT Samira Ali Wisata`)**, serta panduan penggantian aset ketika materi resmi beresolusi penuh diterima dari klien.

---

## 1. Prinsip Penggunaan Aset

- **Tanpa Gambar Satu Halaman Penuh dari PDF**: Website dibangun sepenuhnya menggunakan HTML semantik, CSS/Tailwind, dan data terstruktur.
- **Ekstraksi Area Foto Bersih dari Dokumen Klien**: Seluruh aset gambar di dalam `public/images/` diekstrak khusus pada area foto/logo dari dokumen `reference/PRODUCT KNOWLEDGE TERBARU UPDATE 2026.pdf` dan dikonversi ke format **WebP** untuk performa pemuatan yang optimal.
- **Tidak Mengambil Aset dari Website Referensi Eksternal**: Tidak ada satu pun gambar, video, atau ikon yang diambil dari `kafiyah.id` maupun sumber tidak berlisensi.
- **Pemisahan Kategori Foto di Galeri**: Pada komponen Galeri (`src/data/company.ts` & `GalleryProcessFaqSection.astro`), setiap gambar diberi label eksplisit antara **`Dokumentasi Perusahaan (Materi Klien)`** dan **`Foto Referensi Hotel (Materi Klien)`**.

---

## 2. Daftar Aset Gambar di `public/images/`

| Path File | Ukuran & Format | Sumber Asli pada Dokumen Klien | Kategori & Status |
| :--- | :--- | :--- | :--- |
| `/images/logo/samira-logo-badge.webp` (`.jpg`) | `714×261` WebP/JPG | Objek gambar xref `60` pada Slide 19 PDF 2026 | Logo Identitas Brand (`VERIFIED`) |
| `/images/founder/ust-fauzi-wahyu-muntoro.webp` | WebP | Crop area potret kanan pada Slide 3 PDF 2026 | Dokumentasi Pimpinan (`NEEDS_CONFIRMATION`) |
| `/images/gallery/guinness-world-records-milad.webp` | WebP | Crop foto dokumentasi panggung pada Slide 7 PDF 2026 | Dokumentasi Perusahaan (`NEEDS_CONFIRMATION`) |
| `/images/gallery/rekor-muri-samira.webp` | WebP | Crop foto dokumentasi piagam MURI pada Slide 6 PDF 2026 | Dokumentasi Perusahaan (`NEEDS_CONFIRMATION`) |
| `/images/hero/makkah-haram-view.webp` | WebP | Crop foto teras menghadap Masjidil Haram pada Slide 33 PDF 2026 | Referensi Akomodasi / Hero Poster (`VERIFIED`) |
| `/images/services/umroh-service.webp` | WebP | Crop foto pelataran Masjidil Haram pada Slide 33 PDF 2026 | Ilustrasi Layanan dari Materi Klien (`VERIFIED`) |
| `/images/services/haji-khusus-furoda.webp` | WebP | Crop foto kawasan Zamzam Tower & Ka'bah pada Slide 32 PDF 2026 | Ilustrasi Layanan dari Materi Klien (`VERIFIED`) |
| `/images/services/halal-tour.webp` | WebP | Crop foto kamar menghadap Haram pada Slide 30 PDF 2026 | Ilustrasi Layanan dari Materi Klien (`VERIFIED`) |
| `/images/hotels/*.webp` (18 file interior & eksterior) | WebP | Crop bersih dari grid foto hotel pada Slide 25 s.d. Slide 33 PDF 2026 | Foto Referensi Hotel (`NEEDS_CONFIRMATION` untuk izin rilis publik) |
| `/favicon.svg` | SVG Vektor | Dibuat khusus secara orisinal untuk proyek ini | Ikon Vektor Orisinal (`VERIFIED`) |

---

## 3. Tipografi & Ikon

- **Font**: `Cormorant Garamond` dan `DM Sans` dimuat melalui **Google Fonts** (Lisensi Terbuka *SIL Open Font License 1.1*).
- **Ikon UI**: Seluruh ikon (WhatsApp, hamburger menu, tanda centang, panah, dan penutup modal) menggunakan **inline SVG** ringan tanpa dependensi paket ikon eksternal.

---

## 4. Cara Mengganti Poster Hero dengan Video Resmi

Komponen [`src/components/HeroSection.astro`](../src/components/HeroSection.astro) telah dilengkapi dukungan `<video autoplay muted loop playsinline poster="...">`.

Ketika klien menyediakan file video resmi (misalnya `hero-samira.mp4`):
1. Simpan file video (disarankan ukuran `< 5 MB` terkompresi H.264/WebM) ke dalam `public/videos/hero-samira.mp4`.
2. Buka [`src/data/site-config.ts`](../src/data/site-config.ts) dan ubah bagian `heroMedia`:
   ```ts
   heroMedia: {
     useVideo: true,
     videoUrl: '/videos/hero-samira.mp4',
     posterUrl: '/images/hero/makkah-haram-view.webp',
     posterAlt: 'Suasana pelataran dan pemandangan Masjidil Haram di Makkah',
     status: 'VERIFIED',
   },
   ```
