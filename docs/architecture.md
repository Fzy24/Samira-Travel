# Arsitektur & Struktur Proyek

Proyek website company profile **Samira Travel (`PT Samira Ali Wisata`)** dibangun menggunakan **Astro 5** dengan pendekatan **Static Site Generation (SSG)**, **TypeScript** ketat, dan **Tailwind CSS v3**.

## Alasan Pemilihan Stack Teknis

- **Astro 5 (Static Output)**: Menghasilkan HTML semantik murni dengan beban JavaScript minimal di sisi klien, sehingga pemuatan halaman sangat cepat dan seluruh konten utama tetap terbaca meskipun JavaScript animasi dinonaktifkan.
- **TypeScript (`astro/tsconfigs/strict`)**: Menjamin keamanan tipe data pada seluruh struktur konfigurasi, mencegah kesalahan penulisan properti paket/hotel, dan memvalidasi status `VERIFIED`, `NEEDS_CONFIRMATION`, serta `PLACEHOLDER`.
- **Tailwind CSS v3 (`^3.4.19`)**: Menyediakan sistem token desain terpusat di `tailwind.config.mjs` dan `src/styles/global.css`.
- **Vanilla TypeScript/JavaScript Ringan**: Digunakan khusus untuk interaksi UI yang memiliki manfaat langsung (menu mobile, filter hotel/galeri, lightbox aksesibel, accordion FAQ, modal konteks WhatsApp, dan efek kunang-kunang `FireflyCursor`).

---

## Struktur Direktori Utama

```text
SAMIRA TRAVEL/
├── docs/                                # Dokumentasi teknis, tata kelola konten, QA, dan deployment
│   ├── architecture.md
│   ├── assets-and-licenses.md
│   ├── client-verification-checklist.md
│   ├── content-management.md
│   ├── deployment.md
│   ├── design-system.md
│   ├── known-issues.md
│   ├── testing.md
│   └── whatsapp-integration.md
├── public/                              # Aset statis yang disajikan langsung
│   ├── favicon.svg                      # Ikon vektor bertema bulan sabit & Ka'bah Samira
│   └── images/                          # Aset gambar WebP/JPG yang diekstrak bersih dari materi klien
│       ├── founder/
│       ├── gallery/
│       ├── hero/
│       ├── hotels/
│       ├── logo/
│       └── services/
├── reference/                           # Dokumen referensi PDF dari klien (dikecualikan dari build)
│   └── PRODUCT KNOWLEDGE TERBARU UPDATE 2026.pdf
├── src/
│   ├── components/                      # Komponen UI Astro modular
│   │   ├── BranchesSection.astro        # Bagian H: Kantor pusat, embarkasi, dan 23 wilayah cabang
│   │   ├── CompanyProfileSection.astro  # Bagian C: Sejarah, badan usaha, profil pendiri, lini masa
│   │   ├── ConsultationModal.astro      # Dialog penyusun pesan WhatsApp kontekstual
│   │   ├── FireflyCursor.astro          # Bagian 10: Efek glow & partikel kunang-kunang ramah performa
│   │   ├── FloatingWhatsAppCTA.astro    # Tombol WhatsApp melayang di sudut kanan bawah
│   │   ├── Footer.astro                 # Bagian N: Identitas, alamat, sosmed, dan tautan kebijakan
│   │   ├── GalleryProcessFaqSection.astro # Bagian J, K, L, M, N: Galeri, alur pendaftaran, FAQ, Kontak
│   │   ├── Header.astro                 # Bagian A: Navigasi sticky, lencana mode demo, menu mobile
│   │   ├── HeroSection.astro            # Bagian B: Hero video/poster fallback, headline, CTA utama
│   │   ├── HotelsAirlinesSection.astro  # Bagian I: Direktori 9 hotel referensi & 3 maskapai
│   │   ├── PackagesSection.astro        # Bagian E: 4 tier paket, termasuk/tidak termasuk, perlengkapan
│   │   ├── ServicesSection.astro        # Bagian D: 3 layanan utama & info umum pembiayaan syariah
│   │   ├── VerificationBadge.astro      # Penanda status data pada DEMO_MODE
│   │   └── WhyChooseSection.astro       # Bagian F & G: Pilar keunggulan, nomor izin, dan penghargaan
│   ├── data/                            # Sumber data terpusat (Single Source of Truth)
│   │   ├── branches.ts                  # Data kantor cabang & kota keberangkatan
│   │   ├── company.ts                   # Identitas perusahaan, pendiri, lisensi, rekam jejak, galeri
│   │   ├── facilities.ts                # Fasilitas termasuk/tidak termasuk, 9 perlengkapan, keunggulan
│   │   ├── faq.ts                       # Pertanyaan & jawaban FAQ
│   │   ├── hotels.ts                    # 9 hotel referensi beserta pemetaan paket dan kota
│   │   ├── packages.ts                  # 4 tingkatan paket (Safara, Safawi, Sukari, Majol) & maskapai
│   │   ├── services.ts                  # 3 kelompok layanan utama
│   │   ├── site-config.ts               # Konfigurasi global, DEMO_MODE, nomor WA, alamat, hero media
│   │   └── social-links.ts              # Tautan website & media sosial resmi
│   ├── layouts/
│   │   └── BaseLayout.astro             # Kerangka dokumen HTML, metadata SEO dasar, dan slot halaman
│   ├── pages/
│   │   ├── 404.astro                    # Halaman error 404 kustom
│   │   ├── index.astro                  # Homepage utama lengkap satu halaman dengan anchor navigation
│   │   ├── kebijakan-privasi.astro      # Halaman kebijakan privasi
│   │   └── syarat-ketentuan.astro       # Halaman ketentuan penggunaan informasi
│   ├── styles/
│   │   └── global.css                   # Font import, CSS custom properties, dan utility class
│   └── utils/
│       ├── verification.ts              # Fungsi pengaman jadwal & harga agar tidak menampilkan data kedaluwarsa
│       └── whatsapp.ts                  # Fungsi pembuat URL & pesan WhatsApp terpusat
├── astro.config.mjs                     # Konfigurasi Astro & integrasi Tailwind
├── package.json                         # Daftar skrip dan dependensi proyek
├── tailwind.config.mjs                  # Konfigurasi tema warna, font, dan shadow Samira Travel
└── tsconfig.json                        # Konfigurasi TypeScript ketat
```
