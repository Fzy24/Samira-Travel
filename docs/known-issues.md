# Keterbatasan, Masalah yang Diketahui & Data Menunggu Konfirmasi (`Known Issues`)

Dokumen ini mencatat keterbatasan ruang lingkup versi pertama, perbedaan data yang ditemukan di dalam dokumen klien, serta hal-hal yang memerlukan konfirmasi sebelum website diluncurkan untuk publik.

---

## 1. Dokumen Referensi 2025 Tidak Ditemukan di Direktori `reference/`

- **Temuan**: Saat memeriksa direktori `reference/`, hanya ditemukan satu file yaitu `PRODUCT KNOWLEDGE TERBARU UPDATE 2026.pdf` (44 halaman). Dokumen `UPDATE PRODUCT KNOWLEDGE SAMIRA TRAVEL (2025).pdf` tidak tersedia di dalam workspace.
- **Penanganan**: Sesuai instruksi proyek, kami tidak mengarang isi dokumen 2025 dan menjadikan dokumen 2026 sebagai sumber utama, serta mencatat hal ini di dalam [`docs/client-verification-checklist.md`](client-verification-checklist.md).

---

## 2. Inkonsistensi Internal di Dalam Dokumen PDF 2026

1. **Perbedaan Nomor Alamat Kantor Pusat**:
   - **Slide 43** mencantumkan: `Jl. Malaka Merah No. 8, Pd. Kopi, Kec. Duren Sawit, Kota Jakarta Timur, DKI Jakarta 13460`.
   - **Slide 4 & Slide 7** mencantumkan: `Jl. Malaka Merah Raya No. 7/6 Pondok Kopi Duren Sawit JAKARTA TIMUR`.
   - **Penanganan**: Alamat `No. 8` digunakan sebagai alamat utama sesuai spesifikasi awal, sedangkan alamat `No. 7/6` dicatat secara transparan sebagai catatan verifikasi di bagian Kantor Pusat & Footer.
2. **Duplikasi Nama Cabang Jambi pada Daftar 24 Cabang (Slide 42)**:
   - Pada Slide 42 tertulis judul *"Memiliki 24 Kantor Cabang di Indonesia"*, namun item nomor `7` dan nomor `24` sama-sama tertulis **`Samira Travel Cabang Jambi`**, sehingga hanya terdapat **23 wilayah cabang unik**.
   - **Penanganan**: Website menampilkan 23 wilayah unik secara rapi tanpa duplikasi tampilan dan menyertakan catatan penjelas.
3. **Perbedaan Referensi Hotel antara Flyer (Slide 19–22) dan Slide Hotel (Slide 25–33)**:
   - Kolom teks kecil pada flyer keberangkatan Juli–Agustus 2026 (Slide 19–22) mencantumkan beberapa nama hotel alternatif (seperti *Hayah Al Waha*, *Mirage Al Salam*, *Al Shohada*, *Rove Al Madinah*, *Pullman Zamzam*, *Dar Al Taqwa*) yang berbeda dari 9 slide hotel khusus (Slide 25–33: *Maysan Taqwa*, *Wahat Ajyad*, *Golden Tulip Ansar*, *Maysan Al Maqam*, *Emaar Royal*, *Anjum Makkah*, *Maysan Al Harithia*, *Movenpick Makkah*, *Al Marwa Rayhaan Rotana*).
   - **Penanganan**: Direktori visual hotel menampilkan ke-9 hotel dari Slide 25–33, sementara daftar rincian pada kartu paket (`<details>`) mencantumkan baik hotel utama maupun referensi hotel setaraf dari brosur, disertai penegasan bahwa alokasi hotel aktual mengikuti jadwal keberangkatan yang dikonfirmasi.

---

## 3. Jadwal Keberangkatan pada Dokumen Sudah Kedaluwarsa

- **Temuan**: Seluruh poster jadwal keberangkatan di dalam PDF (Slide 19–22) memuat tanggal keberangkatan **Juli – Agustus 2026**, sedangkan waktu pengerjaan saat ini adalah **Oktober 2026**.
- **Penanganan**: Tanggal dan harga estimasi dari poster Juli–Agustus 2026 **tidak ditampilkan sebagai jadwal mendatang**. Komponen paket menampilkan status aman: *"Jadwal akan dikonfirmasi."* dan *"Hubungi agen untuk informasi harga terbaru."*

---

## 4. Materi Konfidensial yang Sengaja Dikecualikan dari Website Publik

Sesuai aturan tata kelola dan kepatuhan hukum:
1. **Tabel Angsuran & Harga Ijarah AMITRA / FIFGROUP (Slide 40)** yang memiliki penanda *"Property of Amitra. the contents are confidential. Prohibited to use, copy or distribute without Amitra permission"* **tidak dipublikasikan** ke dalam website.
2. **Poster Training Internal Agen / Mitra (Slide 1)** (*"ZOOM PAGI MITRA - Semakin Paham Produknya, Semakin Mudah Closingnya"* & *Roadmap Syiar EAGLE TEAM*) **tidak ditampilkan** pada website calon jamaah.
3. **Nomor Rekening Bank Perusahaan (Slide 19–22 & Slide 37)** **tidak ditampilkan** di halaman publik untuk mencegah transfer dana tanpa verifikasi pendaftaran resmi.

---

## 5. Keterbatasan Teknis & Ruang Lingkup Versi Pertama

- **Media Hero Video**: Karena file video resmi dari Samira Travel belum tersedia di dalam workspace, `HeroSection.astro` saat ini menggunakan fallback poster visual beresolusi tinggi (`/images/hero/makkah-haram-view.webp`). Dukungan elemen `<video>` telah siap diaktifkan melalui `SITE_CONFIG.heroMedia.useVideo`.
- **Peringatan `allow-scripts` pada `npm install`**: npm versi 11 menampilkan pemberitahuan bahwa script postinstall opsional untuk `sharp`/`esbuild` menunggu persetujuan (`allowScripts`), namun hal ini tidak menghambat proses `astro check` maupun `astro build` yang berjalan sukses (exit code `0`).
