# Laporan Pengujian & Quality Assurance (`Testing Report`)

Dokumen ini mencatat daftar pemeriksaan kualitas (*Quality Assurance*) dan hasil pengujian aktual yang telah dijalankan pada proyek website company profile **Samira Travel (`PT Samira Ali Wisata`)**.

---

## Ringkasan Eksekusi Pengujian Aktual

| No | Kategori Pemeriksaan | Perintah / Metode Uji | Hasil Aktual | Status |
| :---: | :--- | :--- | :--- | :---: |
| 1 | Instalasi Dependensi | `npm install` | `423 packages installed`, exit code `0` | **LULUS** |
| 2 | Type Check (`astro check` & TypeScript) | `npx astro check` | `Result (33 files): 0 errors, 0 warnings, 0 hints` | **LULUS** |
| 3 | Build Produksi Statis (`astro build`) | `npm run build` | `4 page(s) built in 1.68s` (`/index.html`, `/kebijakan-privasi/index.html`, `/syarat-ketentuan/index.html`, `/404.html`) | **LULUS** |
| 4 | Server HTTP Lokal (`astro preview`) | Pengujian HTTP `GET` pada port `4322` | `/` (`HTTP 200`, `227.344 bytes`), `/kebijakan-privasi/` (`HTTP 200`), `/syarat-ketentuan/` (`HTTP 200`) | **LULUS** |
| 5 | Validasi Tautan Internal & Anchor | Parser HTML otomatis pada `dist/index.html` | `0` tautan anchor rusak (`#beranda`, `#profil`, `#layanan`, `#paket`, `#keunggulan`, `#rekam-jejak`, `#hotel-fasilitas`, `#cabang`, `#galeri`, `#pendaftaran`, `#faq`, `#kontak` terverifikasi memiliki elemen `id` yang sesuai) | **LULUS** |
| 6 | Pemeriksaan Aset Gambar & Alt Text | Parser HTML & pemeriksaan sistem file `dist/` | `0` gambar gagal dimuat (`Missing images: 0`) dan `0` gambar tanpa atribut `alt` (`Missing alt attributes: 0`) | **LULUS** |
| 7 | Validasi Pembentukan URL WhatsApp | Inspeksi seluruh tautan `https://wa.me/` di HTML hasil build | Seluruh **43 tautan CTA WhatsApp** mengarah ke nomor konfigurasi terpusat `https://wa.me/6281299920849?text=...` dengan encoding URL yang valid | **LULUS** |
| 8 | Audit Keamanan & Konten Rahasia Mitra | Pencarian string terlarang pada hasil build `dist/index.html` | Nomor rekening bank (`1810717676`, `1660031767676`, `1976076766`, `3290037676`), istilah tabel rahasia AMITRA (`HARGA IJARAH`), dan materi internal (`EAGLE TEAM`) dipastikan **tidak muncul** (`0 matches`) di HTML publik | **LULUS** |
| 9 | Menu Navigasi Mobile | Inspeksi handler `setupMobileNavigation()` di `Header.astro` | Mendukung buka/tutup drawer, pembaruan `aria-expanded`, penutupan otomatis saat klik link anchor, dan penutupan dengan tombol `Escape` | **LULUS** |
| 10 | Interaksi FAQ, Filter Hotel & Galeri | Inspeksi `HotelsAirlinesSection.astro` & `GalleryProcessFaqSection.astro` | Filter kota/paket hotel (`aria-pressed`), filter kategori galeri, modal lightbox aksesibel (`Escape`), dan accordion FAQ (`aria-expanded` & `aria-controls`) berfungsi tanpa error | **LULUS** |
| 11 | Efek Kunang-Kunang & `prefers-reduced-motion` | Inspeksi `FireflyCursor.astro` & `global.css` | Menggunakan `<canvas>` pada layer `pointer-events: none`, jumlah partikel dibatasi maks `14`, otomatis nonaktif pada perangkat sentuh (`pointer: coarse`) dan ketika `prefers-reduced-motion: reduce` aktif | **LULUS** |
| 12 | Responsivitas Viewport (`375px`, `768px`, `1024px`, `1440px`) | Audit struktur grid Tailwind & `overflow-x: hidden` di `global.css` | Menggunakan grid mobile-first (`grid-cols-1` pada `375px`, `sm:grid-cols-2` / `md:grid-cols-2` pada `768px`, `lg:grid-cols-3` / `xl:grid-cols-4` pada `1024px–1440px`) tanpa horizontal overflow | **LULUS** |

---

## Cara Menjalankan Ulang Pengujian Secara Mandiri

1. **Menjalankan Type Check dan Build Produksi**:
   ```bash
   npm run build
   ```
2. **Menjalankan Server untuk Pemeriksaan Browser**:
   ```bash
   npm run dev
   ```
   Buka `http://localhost:4321` menggunakan Google Chrome / Edge DevTools dan uji:
   - **Device Toolbar (`Ctrl+Shift+M`)**: Ubah ukuran layar ke `375px` (Mobile), `768px` (Tablet), `1024px` (Laptop), dan `1440px` (Desktop).
   - **Emulasi Reduced Motion**: Buka *Rendering* tab di Chrome DevTools &rarr; atur *Emulate CSS media feature prefers-reduced-motion* ke `reduce` untuk memverifikasi efek kunang-kunang berhenti secara otomatis.
