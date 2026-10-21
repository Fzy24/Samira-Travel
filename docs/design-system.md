# Sistem Desain (`Design System`)

Identitas visual website **Samira Travel (`PT Samira Ali Wisata`)** dirancang untuk menghadirkan kesan elegan, modern, menenangkan, hangat, dan berkelas tanpa meniru tata letak poster promosi yang padat.

---

## 1. Palet Warna

Dikonfigurasi di dalam [`tailwind.config.mjs`](../tailwind.config.mjs) dan [`src/styles/global.css`](../src/styles/global.css):

| Nama Token | Kode Hex Utama | Penggunaan Utama |
| :--- | :--- | :--- |
| **Midnight Navy** (`navy`) | `#081B3A` | Latar belakang utama bagian gelap (Header, Hero, Keunggulan, Footer) dan teks judul utama |
| **Deep Royal Blue** (`royal`) | `#103D78` | Gradasi latar sekunder, lencana kategori paket, dan aksen tombol |
| **Electric Blue** (`electric`) | `#1A67A8` | Sorotan tautan dan transisi gradasi aksen |
| **Turquoise** (`turquoise`) | `#45C6C6` | Aksen sekunder, indikator data terverifikasi, fokus keyboard (`:focus-visible`), dan partikel |
| **Soft Gold** (`gold`) | `#D7B56D` | Tombol CTA utama, aksen garis/border kartu unggulan, lencana merek, dan inti cahaya kunang-kunang |
| **Warm Ivory** (`ivory`) | `#F7F5EF` | Latar belakang dasar halaman yang hangat dan nyaman di mata |
| **White** (`white`) | `#FFFFFF` | Permukaan kartu konten (`card-surface`) dan modal dialog |
| **Charcoal** (`charcoal`) | `#202734` | Warna teks paragraf utama dengan kontras keterbacaan tinggi |

---

## 2. Tipografi

- **Headline & Judul Editorial (`font-editorial` / `font-serif`)**:
  - Font Utama: `'Cormorant Garamond'` (bobot 500, 600, 700, serta varian italic).
  - Fallback Sistem: `Georgia, Cambria, serif`.
- **Teks Isi, Navigasi & Komponen UI (`font-sans`)**:
  - Font Utama: `'DM Sans'` (bobot 400, 500, 600, 700).
  - Fallback Sistem: `system-ui, -apple-system, BlinkMacSystemFont, sans-serif`.

---

## 3. Tata Letak, Spacing & Komponen

- **Container Utama (`.container-luxury`)**: Lebar maksimum `max-w-7xl` (`1280px`) dengan padding horizontal adaptif (`px-4 sm:px-6 lg:px-8`).
- **Spacing Antar-Bagian (`.section-padding`)**: `py-16 sm:py-20 lg:py-24` untuk menjaga ruang kosong (*whitespace*) yang lega.
- **Permukaan Kartu (`.card-surface`)**: Radius sudut `rounded-2xl`, border tipis `border-navy-100/80`, dan bayangan lembut `shadow-luxury`.
- **Pola Progressive Disclosure**: Pada kartu tingkatan paket (`PackagesSection.astro`), rincian daftar hotel cadangan dan sorotan tambahan ditempatkan dalam elemen `<details>` aksesibel agar kartu tetap ringkas dan tidak membingungkan pengunjung.

---

## 4. Interaksi & Aturan Animasi (`FireflyCursor`)

1. **Efek Cahaya & Kunang-Kunang (`src/components/FireflyCursor.astro`)**:
   - Menggunakan elemen `<canvas>` pada layer tetap (`fixed inset-0 z-40 pointer-events-none`).
   - Posisi cahaya mengikuti pointer dengan interpolasi linier (`lerp` faktor `0.14`).
   - Jumlah partikel dibatasi maksimal **14 partikel** dengan variasi ukuran kecil (`1.4px` – `3.5px`) dan warna emas/pirus lembut.
2. **Aksesibilitas Gerakan (`prefers-reduced-motion`)**:
   - Apabila pengguna mengaktifkan pengurangan gerakan pada sistem operasi, aturan `@media (prefers-reduced-motion: reduce)` di `global.css` menonaktifkan animasi transisi, dan skrip `shouldEnableFireflyEffect()` langsung menghentikan inisialisasi canvas kunang-kunang.
3. **Perangkat Sentuh (`pointer: coarse`)**:
   - Efek pointer otomatis disembunyikan pada smartphone/tablet agar tidak membebani baterai dan kinerja layar sentuh.
