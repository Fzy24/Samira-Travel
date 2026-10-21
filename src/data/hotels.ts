/**
 * Direktori 9 hotel referensi dari Slide 25–33 dokumen Product Knowledge 2026.
 * Nama dan jarak hotel disajikan sebagai referensi materi produk, bukan jaminan mutlak
 * untuk setiap jadwal keberangkatan.
 */

import type { PackageTierCode } from './packages';
import type { VerificationStatus } from './site-config';

export interface HotelReferenceItem {
  id: string;
  name: string;
  city: 'Makkah' | 'Madinah';
  tierCode: PackageTierCode;
  tierName: string;
  starRatingInBrochure: number;
  distanceInDoc: string;
  locationHighlight: string;
  imageUrl: string;
  exteriorImageUrl: string;
  imageAlt: string;
  featuresShownInDoc: string[];
  sourceSlide: string;
  status: VerificationStatus;
}

export const HOTEL_REFERENCES: HotelReferenceItem[] = [
  {
    id: 'maysan-taqwa',
    name: 'Maysan Taqwa',
    city: 'Madinah',
    tierCode: 'SAFARA',
    tierName: 'Paket Safara',
    starRatingInBrochure: 3,
    distanceInDoc: '±150 Meter ke Masjid Nabawi (Data Slide 25)',
    locationHighlight: 'Kawasan sekitar Masjid Nabawi, Madinah',
    imageUrl: '/images/hotels/maysan-taqwa-madinah.webp',
    exteriorImageUrl: '/images/hotels/maysan-taqwa-madinah-exterior.webp',
    imageAlt: 'Interior lobi dan ruang tunggu Hotel Maysan Taqwa di Madinah',
    featuresShownInDoc: ['Akses jalan kaki ke Masjid Nabawi', 'Restoran Full Board', 'Kamar Twin/Quad nyaman', 'Area resepsionis & lobi'],
    sourceSlide: 'Slide 25 Product Knowledge 2026',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'wahat-ajyad',
    name: 'Wahat Ajyad',
    city: 'Makkah',
    tierCode: 'SAFARA',
    tierName: 'Paket Safara',
    starRatingInBrochure: 3,
    distanceInDoc: '±600 Meter ke Masjidil Haram (Data Slide 26)',
    locationHighlight: 'Kawasan Ajyad, Makkah',
    imageUrl: '/images/hotels/wahat-ajyad-makkah.webp',
    exteriorImageUrl: '/images/hotels/wahat-ajyad-makkah-exterior.webp',
    imageAlt: 'Area resepsionis dan interior Hotel Wahat Ajyad di Makkah',
    featuresShownInDoc: ['Terletak di koridor Ajyad menuju Masjidil Haram', 'Ruang makan prasmanan', 'Kamar ber-AC nyaman'],
    sourceSlide: 'Slide 26 Product Knowledge 2026',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'golden-tulip-ansar',
    name: 'Golden Tulip Ansar',
    city: 'Madinah',
    tierCode: 'SAFAWI',
    tierName: 'Paket Safawi',
    starRatingInBrochure: 3,
    distanceInDoc: '±200 Meter ke Masjid Nabawi (Data Slide 27)',
    locationHighlight: 'Kawasan Masjid Nabawi, Madinah',
    imageUrl: '/images/hotels/golden-tulip-ansar-madinah.webp',
    exteriorImageUrl: '/images/hotels/golden-tulip-ansar-madinah-exterior.webp',
    imageAlt: 'Lobi elegan Hotel Golden Tulip Ansar di Madinah',
    featuresShownInDoc: ['Lobi luas bergaya modern', 'Hidangan prasmanan lengkap', 'Jarak tempuh singkat ke pelataran Nabawi'],
    sourceSlide: 'Slide 27 Product Knowledge 2026',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'maysan-al-maqam',
    name: 'Maysan Al Maqam Makkah',
    city: 'Makkah',
    tierCode: 'SAFAWI',
    tierName: 'Paket Safawi',
    starRatingInBrochure: 4,
    distanceInDoc: '±500 Meter ke Masjidil Haram (Data Slide 28)',
    locationHighlight: 'Kawasan Makkah Al Mukarramah',
    imageUrl: '/images/hotels/maysan-al-maqam-makkah.webp',
    exteriorImageUrl: '/images/hotels/maysan-al-maqam-makkah-exterior.webp',
    imageAlt: 'Interior lobi dan area duduk Hotel Maysan Al Maqam Makkah',
    featuresShownInDoc: ['Standar akomodasi kelas menengah-atas', 'Restoran prasmanan dan lounge', 'Kamar tidur modern'],
    sourceSlide: 'Slide 28 Product Knowledge 2026',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'emaar-royal',
    name: 'Emaar Royal',
    city: 'Madinah',
    tierCode: 'SUKARI',
    tierName: 'Paket Sukari',
    starRatingInBrochure: 4,
    distanceInDoc: '±200 Meter ke Masjid Nabawi (Data Slide 29)',
    locationHighlight: 'Kawasan Pusat Madinah dekat Masjid Nabawi',
    imageUrl: '/images/hotels/emaar-royal-madinah.webp',
    exteriorImageUrl: '/images/hotels/emaar-royal-madinah-exterior.webp',
    imageAlt: 'Interior kamar tidur Hotel Emaar Royal di Madinah',
    featuresShownInDoc: ['Kamar elegan berstandar bintang 4', 'Sajian katering dan buffet penutup', 'Akses lift dan lobi nyaman'],
    sourceSlide: 'Slide 29 Product Knowledge 2026',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'anjum-makkah',
    name: 'Anjum Makkah',
    city: 'Makkah',
    tierCode: 'SUKARI',
    tierName: 'Paket Sukari',
    starRatingInBrochure: 5,
    distanceInDoc: '±100 Meter ke Masjidil Haram (Data Slide 30)',
    locationHighlight: 'Akses langsung menuju pelataran perluasan Masjidil Haram',
    imageUrl: '/images/hotels/anjum-makkah.webp',
    exteriorImageUrl: '/images/hotels/anjum-makkah-exterior.webp',
    imageAlt: 'Kamar Hotel Anjum Makkah dengan pemandangan ke arah Masjidil Haram',
    featuresShownInDoc: ['Hotel Bintang 5 populer bagi jamaah keluarga', 'Akses jalan kaki sangat dekat ke pelataran Haram', 'Restoran berkapasitas besar'],
    sourceSlide: 'Slide 30 Product Knowledge 2026',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'maysan-al-harithia',
    name: 'Maysan Al Harithia',
    city: 'Madinah',
    tierCode: 'MAJOL',
    tierName: 'Paket Majol',
    starRatingInBrochure: 5,
    distanceInDoc: '±50 Meter ke Masjid Nabawi (Data Slide 31)',
    locationHighlight: 'Barisan depan kawasan Masjid Nabawi, Madinah',
    imageUrl: '/images/hotels/maysan-al-harithia-madinah.webp',
    exteriorImageUrl: '/images/hotels/maysan-al-harithia-madinah-exterior.webp',
    imageAlt: 'Interior kamar Bintang 5 Hotel Maysan Al Harithia di Madinah',
    featuresShownInDoc: ['Lokasi sangat dekat (±50m pada referensi) ke Masjid Nabawi', 'Interior kamar dan lounge mewah', 'Fasilitas kamar mandi lengkap'],
    sourceSlide: 'Slide 31 Product Knowledge 2026',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'movenpick-makkah',
    name: 'Movenpick Makkah',
    city: 'Makkah',
    tierCode: 'MAJOL',
    tierName: 'Paket Majol',
    starRatingInBrochure: 5,
    distanceInDoc: 'Kawasan Zamzam Tower — Pelataran Masjidil Haram (Data Slide 32)',
    locationHighlight: 'Kompleks Abraj Al Bait / Zamzam Tower, Makkah',
    imageUrl: '/images/hotels/movenpick-makkah.webp',
    exteriorImageUrl: '/images/hotels/movenpick-makkah-exterior.webp',
    imageAlt: 'Kamar tidur mewah Hotel Movenpick Makkah di kompleks Zamzam Tower',
    featuresShownInDoc: ['Berada tepat di kompleks menara pelataran Masjidil Haram', 'Standar hospitalitas internasional Bintang 5', 'Sajian kuliner premium'],
    sourceSlide: 'Slide 32 Product Knowledge 2026',
    status: 'NEEDS_CONFIRMATION',
  },
  {
    id: 'al-marwa-rayhaan-rotana',
    name: 'Al Marwa Rayhaan Rotana',
    city: 'Makkah',
    tierCode: 'MAJOL',
    tierName: 'Paket Majol',
    starRatingInBrochure: 5,
    distanceInDoc: 'Kawasan Zamzam Tower — Pelataran Masjidil Haram (Data Slide 33)',
    locationHighlight: 'Kompleks Abraj Al Bait / Zamzam Tower, Makkah',
    imageUrl: '/images/hotels/al-marwa-rayhaan-rotana-makkah.webp',
    exteriorImageUrl: '/images/hotels/al-marwa-rayhaan-rotana-makkah-exterior.webp',
    imageAlt: 'Kamar tidur Hotel Al Marwa Rayhaan by Rotana dengan pemandangan Masjidil Haram',
    featuresShownInDoc: ['Teras dan restoran dengan pemandangan ke arah Masjidil Haram', 'Akses langsung ke kompleks perbelanjaan & pelataran masjid', 'Kamar Bintang 5 berkelas'],
    sourceSlide: 'Slide 33 Product Knowledge 2026',
    status: 'NEEDS_CONFIRMATION',
  },
];

/**
 * Mengambil daftar hotel referensi dengan dukungan filter berdasarkan kota atau kode paket.
 *
 * @param city Filter opsional berdasarkan kota ('Makkah' | 'Madinah').
 * @param tierCode Filter opsional berdasarkan tingkatan paket ('SAFARA' | 'SAFAWI' | 'SUKARI' | 'MAJOL').
 * @returns Array objek HotelReferenceItem yang memenuhi filter.
 */
export function getHotelReferences(
  city?: 'Makkah' | 'Madinah',
  tierCode?: PackageTierCode
): HotelReferenceItem[] {
  return HOTEL_REFERENCES.filter((hotel) => {
    const matchCity = !city || hotel.city === city;
    const matchTier = !tierCode || hotel.tierCode === tierCode;
    return matchCity && matchTier;
  });
}
