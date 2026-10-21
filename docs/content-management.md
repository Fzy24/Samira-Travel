# Panduan Pengelolaan Konten (`Content Management`)

Seluruh teks informasi perusahaan, paket, hotel, fasilitas, jaringan cabang, FAQ, dan kontak pada website Samira Travel dikelola secara terpusat di dalam direktori `src/data/`. Anda **tidak perlu** mengedit file komponen di `src/components/` hanya untuk memperbarui teks, jadwal, harga, atau nomor telepon.

---

## 1. Menonaktifkan `DEMO_MODE` Saat Siap Rilis Publik

Selama tahap peninjauan klien, properti `demoMode` di `src/data/site-config.ts` diatur ke `true` untuk menampilkan bilah informasi presentasi dan lencana status verifikasi (`Data Terverifikasi`, `Menunggu Konfirmasi Klien`, `Placeholder`).

Untuk menonaktifkan Mode Demo setelah seluruh data disetujui klien:
1. Buka file [`src/data/site-config.ts`](../src/data/site-config.ts).
2. Ubah nilai `demoMode: true` menjadi:
   ```ts
   export const SITE_CONFIG: SiteConfig = {
     demoMode: false,
     // ...
   };
   ```
3. Jalankan `npm run build` untuk menghasilkan versi produksi bersih tanpa lencana demo.

---

## 2. Mengubah Identitas Perusahaan, Alamat & Nomor Izin

- **Alamat Kantor Pusat & Nomor WhatsApp**:
  Edit objek `SITE_CONFIG.headOffice` dan `SITE_CONFIG.whatsapp` di dalam [`src/data/site-config.ts`](../src/data/site-config.ts).
- **Profil Pendiri, Sejarah & Nomor Izin (PPIU / PIHK)**:
  Edit `COMPANY_PROFILE`, `COMPANY_LICENSES`, `COMPANY_MILESTONES`, dan `COMPANY_AWARDS` di dalam [`src/data/company.ts`](../src/data/company.ts).

---

## 3. Memperbarui Paket Umrah, Jadwal & Harga Terbaru

Buka file [`src/data/packages.ts`](../src/data/packages.ts) pada konstanta `PACKAGE_TIERS`.

Secara default, karena jadwal pada poster referensi (Juli–Agustus 2026) telah lewat, setiap paket menggunakan:
- `isExpiredReferenceInDoc: true` (sehingga UI menampilkan *"Jadwal akan dikonfirmasi."*)
- `priceStatus.status: 'PLACEHOLDER'` (sehingga UI menampilkan *"Hubungi agen untuk informasi harga terbaru."*)

Ketika jadwal dan harga musim baru telah dikonfirmasi oleh klien:
1. Pada item paket yang bersangkutan di [`src/data/packages.ts`](../src/data/packages.ts), ubah `scheduleStatus`:
   ```ts
   scheduleStatus: {
     activeScheduleText: 'November – Desember 2026 (Keberangkatan Mingguan)',
     isExpiredReferenceInDoc: false,
     referenceNote: 'Jadwal resmi musim baru telah dikonfirmasi.',
     status: 'VERIFIED',
   },
   ```
2. Untuk menampilkan harga resmi yang sudah disetujui, perbarui `priceStatus.status` menjadi `'VERIFIED'` dan sesuaikan pemanggilan `getSafePriceDisplay` pada komponen paket jika harga nominal ingin ditampilkan langsung.

---

## 4. Memperbarui Daftar Hotel Referensi & Maskapai

- **Hotel Referensi**: Edit array `HOTEL_REFERENCES` di dalam [`src/data/hotels.ts`](../src/data/hotels.ts). Setiap hotel memiliki properti `city` (`'Makkah'` | `'Madinah'`), `tierCode` (`'SAFARA'` | `'SAFAWI'` | `'SUKARI'` | `'MAJOL'`), `distanceInDoc`, dan `imageUrl`.
- **Maskapai Penerbangan**: Edit array `AIRLINE_REFERENCES` di dalam [`src/data/packages.ts`](../src/data/packages.ts).

---

## 5. Memperbarui Fasilitas & Perlengkapan Jamaah

Buka [`src/data/facilities.ts`](../src/data/facilities.ts):
- `INCLUDED_FACILITIES`: Daftar fasilitas yang termasuk dalam paket.
- `EXCLUDED_FACILITIES`: Daftar komponen biaya yang tidak termasuk dalam paket.
- `UMRAH_EQUIPMENT_ITEMS`: Daftar 9 perlengkapan fisik jamaah.
- `CUSTOM_FACILITY_REQUESTS`: Daftar opsi permintaan fasilitas tambahan (*Request Fasilitas*).

---

## 6. Memperbarui Jaringan Cabang, Galeri & FAQ

- **Kantor Cabang & Kota Embarkasi**: Edit `BRANCH_NETWORK` dan `EMBARKATION_CITIES_IN_DOC` di dalam [`src/data/branches.ts`](../src/data/branches.ts).
- **Galeri Foto**: Edit `GALLERY_ITEMS` di dalam [`src/data/company.ts`](../src/data/company.ts). Pastikan atribut `category` diatur dengan benar antara `'DOKUMENTASI_PERUSAHAAN'` dan `'REFERENSI_AKOMODASI'`.
- **FAQ (Pertanyaan Umum)**: Edit `FAQ_ITEMS` di dalam [`src/data/faq.ts`](../src/data/faq.ts).
