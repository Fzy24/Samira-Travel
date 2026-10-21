# Integrasi Konsultasi WhatsApp (`WhatsApp Integration`)

Jalur komunikasi utama pada website company profile **Samira Travel (`PT Samira Ali Wisata`)** mengarah ke WhatsApp resmi perusahaan. Tidak ada nomor WhatsApp yang ditulis secara *hardcoded* di dalam komponen UI.

---

## 1. Lokasi Konfigurasi Nomor Terpusat

Nomor WhatsApp disimpan di satu tempat, yaitu pada [`src/data/site-config.ts`](../src/data/site-config.ts):

```ts
whatsapp: {
  displayNumber: '0812 9992 0849',
  internationalNumber: '6281299920849',
  status: 'VERIFIED',
  sourceNote: 'Nomor WhatsApp resmi terverifikasi: 081299920849.',
}
```

### Cara Mengganti Nomor WhatsApp

1. Buka [`src/data/site-config.ts`](../src/data/site-config.ts).
2. Ubah `displayNumber` (untuk tampilan teks di UI, misalnya `'0812 9992 0849'`) dan `internationalNumber` (untuk URL `https://wa.me/`, diawali kode negara `62` tanpa tanda `+` atau spasi).
3. Seluruh tombol CTA di Header, Hero, Kartu Layanan, Kartu Paket, Direktori Hotel, Daftar Cabang, Modal Konsultasi, Tombol Melayang (`FloatingWhatsAppCTA`), dan Footer akan otomatis mengikuti nomor baru tersebut.

---

## 2. Utilitas Pembuat URL & Pesan (`src/utils/whatsapp.ts`)

Seluruh logika pembentukan URL WhatsApp berada di dalam [`src/utils/whatsapp.ts`](../src/utils/whatsapp.ts):

- `sanitizeWhatsAppNumber(rawPhoneNumber)`: Membersihkan karakter non-digit dan mengubah awalan `0` menjadi `62`.
- `createWhatsAppUrl(phoneNumber, message)`: Membentuk tautan `https://wa.me/<nomor>?text=<pesan_terenkode>` menggunakan `encodeURIComponent()`.
- `buildContextualWhatsAppMessage(options)`: Menyusun pesan berdasarkan konteks tombol yang diklik pengunjung:
  - **Pesan Umum (Header / Hero / Floating CTA / Footer)**:
    > *"Halo Samira Travel, saya ingin mengetahui informasi lebih lanjut mengenai layanan dan paket perjalanan ibadah yang tersedia. Mohon informasi jadwal terbaru, fasilitas, harga, dan persyaratan pendaftaran."*
  - **Pesan Kontekstual Paket / Layanan / Kota**:
    Menyertakan nama paket (`Paket Safara`, `Paket Safawi`, `Paket Sukari`, atau `Paket Majol`), kelompok layanan, atau kota keberangkatan tanpa menjanjikan harga atau ketersediaan sepihak.
- `getOfficialWhatsAppUrl(options)`: Menggabungkan nomor resmi dari `SITE_CONFIG` dengan pesan kontekstual.

---

## 3. Jendela Kustomisasi Pesan (`ConsultationModal.astro`)

Komponen [`src/components/ConsultationModal.astro`](../src/components/ConsultationModal.astro) menyediakan dialog opsional bagi pengunjung untuk:
1. Mengisi nama sapaan (opsional).
2. Memilih kelompok layanan (`Ibadah Umrah`, `Haji Khusus & Furoda`, `Halal Tour`).
3. Memilih tingkatan paket (`Safara`, `Safawi`, `Sukari`, `Majol`).
4. Memilih kota rencana keberangkatan.
5. Menambahkan pertanyaan singkat.

Formulir ini tidak menyimpan data pribadi ke server manapun, melainkan memperbarui parameter `?text=` pada tautan `https://wa.me/` secara *real-time* di browser pengguna.
