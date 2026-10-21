# Website Company Profile Samira Travel (PT Samira Ali Wisata)

Website company profile resmi dan pusat informasi konsultasi calon jamaah untuk **Samira Travel (`PT Samira Ali Wisata`)**, dibangun dengan **Astro 5**, **TypeScript**, dan **Tailwind CSS v3**.

Proyek ini dirancang khusus untuk memenuhi kebutuhan versi pertama: menyajikan profil perusahaan, tiga layanan utama (Ibadah Umrah, Haji Khusus & Furoda, serta Halal Tour), empat tingkatan paket umrah (`Safara`, `Safawi`, `Sukari`, `Majol`), direktori 9 hotel referensi, fasilitas perjalanan, jaringan kantor cabang, galeri dokumentasi, alur pendaftaran 5 tahap, FAQ interaktif, serta integrasi konsultasi WhatsApp terpusat.

---

## Fitur Utama

1. **Arsitektur Konten Terpusat (`src/data/`)**:
   - Seluruh data perusahaan, nomor izin, paket, hotel, fasilitas, cabang, FAQ, dan nomor WhatsApp disimpan di dalam satu direktori data bertipe ketat (*strict TypeScript*).
2. **Mekanisme `DEMO_MODE` & Klasifikasi Verifikasi Data**:
   - Setiap klaim dan informasi diklasifikasikan ke dalam `VERIFIED`, `NEEDS_CONFIRMATION`, atau `PLACEHOLDER` melalui komponen `VerificationBadge.astro` dan helper validasi di `src/utils/verification.ts`.
   - Mencegah jadwal kedaluwarsa (Juli–Agustus 2026 pada poster lama) ditampilkan sebagai penawaran mendatang.
   - Menyembunyikan dan mengecualikan materi internal mitra (seperti tabel pembiayaan konfidensial AMITRA/FIFGROUP, materi training agen, dan nomor rekening bank).
3. **Efek Interaktif Cahaya & Kunang-Kunang (`FireflyCursor.astro`)**:
   - Mengikuti gerakan pointer mouse dengan interpolasi halus (*smooth lerp*), jumlah partikel dibatasi maksimal 14 titik, berada di layer dekoratif (`pointer-events: none`), otomatis nonaktif pada perangkat sentuh (*touch*), dan menghormati `prefers-reduced-motion: reduce`.
4. **Integrasi WhatsApp Kontekstual (`src/utils/whatsapp.ts` & `ConsultationModal.astro`)**:
   - Nomor tujuan terpusat (`0812 3666 1876` / `6281236661876`) dengan pesan otomatis yang menyesuaikan pilihan layanan, tingkatan paket, atau kota keberangkatan.

---

## Prasyarat & Instalasi

Pastikan perangkat Anda telah terpasang:
- **Node.js** versi `20+` (diuji pada `v24.18.0`)
- **npm** versi `10+` (diuji pada `11.16.0`)

### Langkah Instalasi

```bash
npm install
```

---

## Cara Menjalankan Proyek

### 1. Menjalankan Server Pengembangan (Development)

```bash
npm run dev
```

Server lokal akan berjalan di `http://localhost:4321`.

### 2. Menjalankan Pemeriksaan Tipe & Build Produksi

```bash
npm run build
```

Perintah ini menjalankan `astro check` (pemeriksaan tipe TypeScript & Astro) diikuti oleh `astro build` yang menghasilkan halaman statis siap pakai di dalam direktori `dist/`.

### 3. Pratinjau Hasil Build Produksi

```bash
npm run preview
```

---

## Dokumentasi Lengkap (`docs/`)

- [`docs/architecture.md`](docs/architecture.md) — Arsitektur proyek dan struktur direktori.
- [`docs/content-management.md`](docs/content-management.md) — Panduan mengubah data perusahaan, paket, harga, galeri, FAQ, dan menonaktifkan `DEMO_MODE`.
- [`docs/design-system.md`](docs/design-system.md) — Dokumentasi palet warna, tipografi, spacing, komponen, dan aturan animasi.
- [`docs/whatsapp-integration.md`](docs/whatsapp-integration.md) — Cara mengubah nomor dan format pesan WhatsApp terpusat.
- [`docs/assets-and-licenses.md`](docs/assets-and-licenses.md) — Sumber aset visual, ekstraksi PDF, dan panduan penggantian media hero/video.
- [`docs/testing.md`](docs/testing.md) — Daftar pemeriksaan QA dan hasil pengujian aktual.
- [`docs/deployment.md`](docs/deployment.md) — Panduan langkah demi langkah deployment gratis melalui GitHub dan Cloudflare Pages.
- [`docs/known-issues.md`](docs/known-issues.md) — Keterbatasan versi pertama, data yang menunggu konfirmasi, dan risiko yang perlu diperhatikan.
- [`docs/client-verification-checklist.md`](docs/client-verification-checklist.md) — Daftar inventarisasi PDF 2026 (44 halaman), ketiadaan PDF 2025, serta poin-poin yang wajib dikonfirmasi klien sebelum peluncuran resmi.
