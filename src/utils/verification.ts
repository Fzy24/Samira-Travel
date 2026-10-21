/**
 * Utilitas validasi tipe data dan pengamanan konten untuk mencegah data placeholder
 * atau jadwal kedaluwarsa ditampilkan sebagai penawaran aktif.
 */

import type { VerificationStatus } from '../data/site-config';

export interface SafeScheduleDisplay {
  displayText: string;
  isBookable: boolean;
  warningNote?: string;
}

export interface SafePriceDisplay {
  displayText: string;
  isFinalPrice: boolean;
  disclaimer: string;
}

/**
 * Memvalidasi apakah suatu tanggal atau periode keberangkatan dari materi dokumen
 * sudah kedaluwarsa terhadap tanggal referensi sistem saat ini.
 * Poster keberangkatan Juli–Agustus 2026 wajib ditolak sebagai jadwal mendatang.
 *
 * @param periodLabel Label periode pada dokumen (misal: "Juli – Agustus 2026").
 * @param isExpiredFlag Penanda eksplisit dari konfigurasi paket apakah jadwal sudah lewat.
 * @returns Objek SafeScheduleDisplay dengan teks aman untuk ditampilkan kepada pengunjung.
 */
export function getSafeScheduleDisplay(
  periodLabel: string | undefined,
  isExpiredFlag: boolean
): SafeScheduleDisplay {
  if (!periodLabel || isExpiredFlag) {
    return {
      displayText: 'Jadwal akan dikonfirmasi.',
      isBookable: false,
      warningNote:
        'Jadwal pada materi referensi sebelumnya (Juli–Agustus 2026) telah berakhir dan tidak ditampilkan sebagai jadwal aktif.',
    };
  }

  return {
    displayText: periodLabel,
    isBookable: true,
  };
}

/**
 * Memvalidasi tampilan informasi harga agar nilai placeholder atau estimasi lama
 * tidak disajikan sebagai harga mengikat.
 *
 * @param priceValue Nilai harga dari konfigurasi (jika ada).
 * @param status Status verifikasi data harga ('VERIFIED' | 'NEEDS_CONFIRMATION' | 'PLACEHOLDER').
 * @returns Objek SafePriceDisplay dengan teks aman yang patuh pada pedoman konten.
 */
export function getSafePriceDisplay(
  priceValue: string | null | undefined,
  status: VerificationStatus
): SafePriceDisplay {
  if (!priceValue || status === 'PLACEHOLDER' || status === 'NEEDS_CONFIRMATION') {
    return {
      displayText: 'Hubungi agen untuk informasi harga terbaru.',
      isFinalPrice: false,
      disclaimer:
        'Detail paket menunggu konfirmasi. Biaya aktual mengikuti jadwal keberangkatan, ketersediaan kursi maskapai, dan kurs yang berlaku.',
    };
  }

  return {
    displayText: priceValue,
    isFinalPrice: true,
    disclaimer: 'Harga mengikuti syarat dan ketentuan program keberangkatan resmi PT Samira Ali Wisata.',
  };
}
