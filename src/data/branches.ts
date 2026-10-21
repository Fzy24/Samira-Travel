/**
 * Data jaringan kantor cabang dan kota keberangkatan (embarkasi) PT Samira Ali Wisata.
 * Disusun berdasarkan Slide 17, 19–22, dan Slide 42 dokumen Product Knowledge 2026.
 *
 * Catatan Verifikasi: Pada Slide 42 tertulis "24 Kantor Cabang di Indonesia", namun
 * "Samira Travel Cabang Jambi" tercantum dua kali (pada nomor urut 7 dan 24),
 * sehingga terdapat 23 nama kota/wilayah unik.
 */

import type { VerificationStatus } from './site-config';

export interface BranchItem {
  id: string;
  numberInDoc: number;
  name: string;
  cityOrRegion: string;
  islandGroup: 'Sumatra' | 'Jawa' | 'Kalimantan' | 'Bali & Nusa Tenggara' | 'Sulawesi';
  addressDetailStatus: string;
  duplicateNoteInDoc?: string;
  status: VerificationStatus;
}

export const BRANCH_NETWORK: BranchItem[] = [
  {
    id: 'cabang-aceh',
    numberInDoc: 1,
    name: 'Samira Travel Cabang Aceh',
    cityOrRegion: 'Aceh',
    islandGroup: 'Sumatra',
    addressDetailStatus: 'Alamat lengkap kantor cabang menunggu konfirmasi klien.',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'cabang-medan',
    numberInDoc: 2,
    name: 'Samira Travel Cabang Medan',
    cityOrRegion: 'Medan, Sumatera Utara',
    islandGroup: 'Sumatra',
    addressDetailStatus: 'Alamat lengkap kantor cabang menunggu konfirmasi klien.',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'cabang-pekanbaru',
    numberInDoc: 3,
    name: 'Samira Travel Cabang Pekanbaru',
    cityOrRegion: 'Pekanbaru, Riau',
    islandGroup: 'Sumatra',
    addressDetailStatus: 'Alamat lengkap kantor cabang menunggu konfirmasi klien.',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'cabang-padang',
    numberInDoc: 4,
    name: 'Samira Travel Cabang Padang',
    cityOrRegion: 'Padang, Sumatera Barat',
    islandGroup: 'Sumatra',
    addressDetailStatus: 'Alamat lengkap kantor cabang menunggu konfirmasi klien.',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'cabang-batam',
    numberInDoc: 5,
    name: 'Samira Travel Cabang Batam',
    cityOrRegion: 'Batam, Kepulauan Riau',
    islandGroup: 'Sumatra',
    addressDetailStatus: 'Alamat lengkap kantor cabang menunggu konfirmasi klien.',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'cabang-palembang',
    numberInDoc: 6,
    name: 'Samira Travel Cabang Palembang',
    cityOrRegion: 'Palembang, Sumatera Selatan',
    islandGroup: 'Sumatra',
    addressDetailStatus: 'Alamat lengkap kantor cabang menunggu konfirmasi klien.',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'cabang-jambi',
    numberInDoc: 7,
    name: 'Samira Travel Cabang Jambi',
    cityOrRegion: 'Jambi',
    islandGroup: 'Sumatra',
    addressDetailStatus: 'Alamat lengkap kantor cabang menunggu konfirmasi klien.',
    duplicateNoteInDoc: 'Tercantum pada nomor urut 7 dan 24 di Slide 42 dokumen klien.',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'cabang-lubuklinggau',
    numberInDoc: 8,
    name: 'Samira Travel Cabang Lubuklinggau',
    cityOrRegion: 'Lubuklinggau, Sumatera Selatan',
    islandGroup: 'Sumatra',
    addressDetailStatus: 'Alamat lengkap kantor cabang menunggu konfirmasi klien.',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'cabang-lampung',
    numberInDoc: 9,
    name: 'Samira Travel Cabang Lampung',
    cityOrRegion: 'Lampung',
    islandGroup: 'Sumatra',
    addressDetailStatus: 'Alamat lengkap kantor cabang menunggu konfirmasi klien.',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'cabang-cirebon',
    numberInDoc: 10,
    name: 'Samira Travel Cabang Cirebon',
    cityOrRegion: 'Cirebon, Jawa Barat',
    islandGroup: 'Jawa',
    addressDetailStatus: 'Alamat lengkap kantor cabang menunggu konfirmasi klien.',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'cabang-solo-raya',
    numberInDoc: 11,
    name: 'Samira Travel Cabang Solo Raya',
    cityOrRegion: 'Solo Raya, Jawa Tengah',
    islandGroup: 'Jawa',
    addressDetailStatus: 'Alamat lengkap kantor cabang menunggu konfirmasi klien.',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'cabang-palangkaraya',
    numberInDoc: 12,
    name: 'Samira Travel Cabang Palangkaraya',
    cityOrRegion: 'Palangkaraya, Kalimantan Tengah',
    islandGroup: 'Kalimantan',
    addressDetailStatus: 'Alamat lengkap kantor cabang menunggu konfirmasi klien.',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'cabang-semarang',
    numberInDoc: 13,
    name: 'Samira Travel Cabang Semarang',
    cityOrRegion: 'Semarang, Jawa Tengah',
    islandGroup: 'Jawa',
    addressDetailStatus: 'Alamat lengkap kantor cabang menunggu konfirmasi klien.',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'cabang-sidoarjo-surabaya',
    numberInDoc: 14,
    name: 'Samira Travel Cabang Sidoarjo-Surabaya',
    cityOrRegion: 'Sidoarjo & Surabaya, Jawa Timur',
    islandGroup: 'Jawa',
    addressDetailStatus: 'Alamat lengkap kantor cabang menunggu konfirmasi klien.',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'cabang-jember',
    numberInDoc: 15,
    name: 'Samira Travel Cabang Jember',
    cityOrRegion: 'Jember, Jawa Timur',
    islandGroup: 'Jawa',
    addressDetailStatus: 'Alamat lengkap kantor cabang menunggu konfirmasi klien.',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'cabang-bali',
    numberInDoc: 16,
    name: 'Samira Travel Cabang Bali',
    cityOrRegion: 'Bali',
    islandGroup: 'Bali & Nusa Tenggara',
    addressDetailStatus: 'Alamat lengkap kantor cabang menunggu konfirmasi klien.',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'cabang-lombok',
    numberInDoc: 17,
    name: 'Samira Travel Cabang Lombok',
    cityOrRegion: 'Lombok, Nusa Tenggara Barat',
    islandGroup: 'Bali & Nusa Tenggara',
    addressDetailStatus: 'Alamat lengkap kantor cabang menunggu konfirmasi klien.',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'cabang-ketapang',
    numberInDoc: 18,
    name: 'Samira Travel Cabang Ketapang',
    cityOrRegion: 'Ketapang, Kalimantan Barat',
    islandGroup: 'Kalimantan',
    addressDetailStatus: 'Alamat lengkap kantor cabang menunggu konfirmasi klien.',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'cabang-banjarmasin',
    numberInDoc: 19,
    name: 'Samira Travel Cabang Banjarmasin',
    cityOrRegion: 'Banjarmasin, Kalimantan Selatan',
    islandGroup: 'Kalimantan',
    addressDetailStatus: 'Alamat lengkap kantor cabang menunggu konfirmasi klien.',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'cabang-balikpapan',
    numberInDoc: 20,
    name: 'Samira Travel Cabang Balikpapan',
    cityOrRegion: 'Balikpapan, Kalimantan Timur',
    islandGroup: 'Kalimantan',
    addressDetailStatus: 'Alamat lengkap kantor cabang menunggu konfirmasi klien.',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'cabang-makassar',
    numberInDoc: 21,
    name: 'Samira Travel Cabang Makassar',
    cityOrRegion: 'Makassar, Sulawesi Selatan',
    islandGroup: 'Sulawesi',
    addressDetailStatus: 'Alamat lengkap kantor cabang menunggu konfirmasi klien.',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'cabang-yogyakarta',
    numberInDoc: 22,
    name: 'Samira Travel Cabang Yogyakarta',
    cityOrRegion: 'DI Yogyakarta',
    islandGroup: 'Jawa',
    addressDetailStatus: 'Alamat lengkap kantor cabang menunggu konfirmasi klien.',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'cabang-luwuk-banggai',
    numberInDoc: 23,
    name: 'Samira Travel Cabang Luwuk Banggai',
    cityOrRegion: 'Luwuk Banggai, Sulawesi Tengah',
    islandGroup: 'Sulawesi',
    addressDetailStatus: 'Alamat lengkap kantor cabang menunggu konfirmasi klien.',
    status: 'NEEDS_CONFIRMATION',
  },
];

export const EMBARKATION_CITIES_IN_DOC: string[] = [
  'Jakarta',
  'Surabaya',
  'Aceh',
  'Medan',
  'Padang',
  'Batam',
  'Palembang',
  'Kertajati',
  'Solo',
  'Pontianak',
  'Balikpapan',
  'Makassar',
];

/**
 * Mengelompokkan daftar kantor cabang berdasarkan wilayah kepulauan di Indonesia
 * untuk memudahkan pencarian oleh pengunjung.
 *
 * @returns Objek pemetaan nama wilayah kepulauan ke daftar cabang di wilayah tersebut.
 */
export function getBranchesGroupedByIsland(): Record<BranchItem['islandGroup'], BranchItem[]> {
  return BRANCH_NETWORK.reduce(
    (acc, branch) => {
      acc[branch.islandGroup].push(branch);
      return acc;
    },
    {
      Sumatra: [],
      Jawa: [],
      Kalimantan: [],
      'Bali & Nusa Tenggara': [],
      Sulawesi: [],
    } as Record<BranchItem['islandGroup'], BranchItem[]>
  );
}
