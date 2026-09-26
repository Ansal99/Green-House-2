export const HOTEL_INFO = {
  name: 'Green House',
  location: 'Dharamkot, Dharamshala, Himachal Pradesh',
  region: 'Dharamkot · Kangra Valley',
  elevation: '2,100 m / 6,890 ft',
  coordinates: '32.2532° N, 76.3245° E',
  owner: 'Rahul Kapoor',
  est: '2024',
  tagline: 'A Peaceful Luxury Hotel in the Himalayas',
  ctaText: 'Book Your Stay',
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Rooms', href: '#stay' },
  { label: 'Services', href: '#experience' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
] as const;

export const TOTAL_FRAMES = 240;

export const getFrameUrl = (index: number): string => {
  const frameNumber = Math.min(Math.max(1, index + 1), TOTAL_FRAMES);
  const padded = String(frameNumber).padStart(3, '0');
  return `/frames/ezgif-frame-${padded}.jpg`;
};

export interface Chapter {
  id: string;
  startProgress: number; // 0 to 1
  endProgress: number;   // 0 to 1
  tag: string;
  title: string;
  description: string;
  alignment: 'center' | 'left' | 'right';
  badge?: string;
}

export const CHAPTERS: Chapter[] = [
  {
    id: 'arrival',
    startProgress: 0.0,
    endProgress: 0.22,
    tag: 'BOUTIQUE HOTEL IN DHARAMKOT',
    title: 'Welcome to Green House Hotel',
    description: 'A quiet mountain hotel surrounded by tall pine trees, fresh air, and beautiful views of the Dhauladhar peaks.',
    alignment: 'center',
    badge: 'Dharamkot, Himachal Pradesh',
  },
  {
    id: 'architecture',
    startProgress: 0.28,
    endProgress: 0.52,
    tag: 'COMFORTABLE MOUNTAIN STAY',
    title: 'Built with Wood & Natural Stone',
    description: 'Cozy wooden rooms, large glass windows, and private balconies designed for peaceful mornings and mountain views.',
    alignment: 'left',
  },
  {
    id: 'threshold',
    startProgress: 0.58,
    endProgress: 0.78,
    tag: 'WARM INDIAN HOSPITALITY',
    title: 'Feel at Home in the Hills',
    description: 'Heated rooms, warm wooden interiors, and friendly local care to make your mountain holiday truly relaxing.',
    alignment: 'right',
  },
  {
    id: 'interior',
    startProgress: 0.82,
    endProgress: 1.0,
    tag: 'SPECTACULAR MOUNTAIN VIEWS',
    title: 'Wake Up to Snowy Peaks',
    description: 'Enjoy morning tea with direct views of snow-capped mountains right from your comfortable bed.',
    alignment: 'center',
    badge: 'Green House Hotel · Dharamkot',
  },
];

