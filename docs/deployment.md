# Panduan Deployment Demo Gratis (`GitHub & Cloudflare Pages`)

Domain dan hosting produksi resmi Samira Travel belum dihubungkan pada tahap pertama ini. Proyek ini telah dikonfigurasi sebagai **Static Site Generation (SSG)** murni sehingga dapat ditayangkan secara gratis, cepat, dan aman menggunakan **GitHub** dan **Cloudflare Pages**.

> [!IMPORTANT]
> **Status Deployment Saat Ini**: Proyek telah selesai diimplementasikan dan diuji build produksinya secara lokal (`dist/`), namun **belum dipublikasikan ke internet** karena memerlukan otorisasi akun GitHub dan Cloudflare milik Anda. Ikuti langkah di bawah ini untuk menayangkan URL demo.

---

## 1. Menyiapkan Repository GitHub

1. Buka terminal pada direktori proyek `SAMIRA TRAVEL`.
2. Pastikan file PDF berukuran besar di dalam `reference/` atau folder `node_modules/` dan `dist/` tidak ikut terunggah jika tidak diperlukan (atau buat file `.gitignore` berisi `node_modules/`, `dist/`, `.astro/`).
3. Inisialisasi Git dan unggah ke repository GitHub Anda:
   ```bash
   git init
   git add .
   git commit -m "feat: initial company profile website Samira Travel"
   git branch -M main
   git remote add origin https://github.com/<username-anda>/<nama-repo-anda>.git
   git push -u origin main
   ```

---

## 2. Menghubungkan Repository ke Cloudflare Pages

1. Masuk ke dashboard [Cloudflare](https://dash.cloudflare.com/).
2. Pilih menu **Compute (Workers & Pages)** &rarr; **Create** &rarr; tab **Pages** &rarr; **Connect to Git**.
3. Pilih akun GitHub Anda dan berikan akses ke repository proyek Samira Travel.
4. Klik **Begin setup**.

---

## 3. Konfigurasi Build pada Cloudflare Pages

Gunakan pengaturan berikut pada halaman **Set up builds and deployments**:

| Parameter | Nilai Konfigurasi |
| :--- | :--- |
| **Production branch** | `main` |
| **Framework preset** | `Astro` |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Node.js version (Environment variable)** | Tambahkan variabel `NODE_VERSION` = `20` (atau `22`) |

> **Catatan Variabel Konfigurasi**: Proyek versi pertama ini tidak memerlukan rahasia API (*secret token*) karena seluruh konfigurasi publik berada di `src/data/site-config.ts`.

---

## 4. Menjalankan Deployment & Menguji URL Demo

1. Klik tombol **Save and Deploy** di Cloudflare Pages.
2. Tunggu proses instalasi dan build selesai (sekitar 1–2 menit).
3. Cloudflare akan memberikan URL demo gratis berformat `https://<nama-proyek>.pages.dev`.
4. Setelah URL demo aktif, lakukan pengujian berikut:
   - Buka URL di browser desktop dan smartphone.
   - Uji seluruh navigasi anchor (`#profil`, `#layanan`, `#paket`, `#hotel-fasilitas`, `#cabang`, `#galeri`, `#faq`, `#kontak`).
   - Klik tombol **Konsultasi via WhatsApp** untuk memastikan tautan `https://wa.me/6281299920849` terbuka dengan pesan yang benar.
   - Pastikan halaman `/kebijakan-privasi` dan `/syarat-ketentuan` dapat diakses tanpa error.
