/**
 * Konfigurasi tautan media sosial dan situs resmi Samira Travel.
 * Seluruh data diambil dari Slide 43 dokumen Product Knowledge 2026 tanpa mengarang URL baru.
 */

import type { VerificationStatus } from './site-config';

export interface SocialLinkItem {
  id: string;
  platform: 'Website' | 'Instagram' | 'YouTube' | 'TikTok';
  handle: string;
  url: string;
  status: VerificationStatus;
  note: string;
}

export const SOCIAL_LINKS: SocialLinkItem[] = [
  {
    id: 'website',
    platform: 'Website',
    handle: 'samiratravel.co.id',
    url: 'https://samiratravel.co.id',
    status: 'NEEDS_CONFIRMATION',
    note: 'Tercantum sebagai www.samiratravel.co.id pada Slide 4, 5, dan 43 dokumen Product Knowledge 2026.',
  },
  {
    id: 'instagram',
    platform: 'Instagram',
    handle: '@samira_travel',
    url: 'https://www.instagram.com/samira_travel',
    status: 'NEEDS_CONFIRMATION',
    note: 'Tercantum sebagai samira_travel pada Slide 43 (juga tampak @samira_ali_wisata pada spanduk dokumentasi Slide 4).',
  },
  {
    id: 'youtube',
    platform: 'YouTube',
    handle: 'Samira Travel Official',
    url: 'https://www.youtube.com/@SamiraTravelOfficial',
    status: 'NEEDS_CONFIRMATION',
    note: 'Nama kanal Samira Travel Official tercantum pada Slide 43; URL kanal spesifik perlu dikonfirmasi klien.',
  },
  {
    id: 'tiktok',
    platform: 'TikTok',
    handle: '@samira.travel.id',
    url: 'https://www.tiktok.com/@samira.travel.id',
    status: 'NEEDS_CONFIRMATION',
    note: 'Akun samira.travel.id tercantum pada Slide 43 (pada footer flyer Slide 19–22 juga tertulis samiratravel.pusat).',
  },
];

/**
 * Mengambil daftar tautan media sosial yang tersedia dalam konfigurasi terpusat.
 *
 * @returns Array objek SocialLinkItem untuk ditampilkan pada bagian kontak dan footer.
 */
export function getSocialLinks(): SocialLinkItem[] {
  return SOCIAL_LINKS;
}
