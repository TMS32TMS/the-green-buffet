import { VideoSource } from '@/types';

export const SITE_NAME = 'The Green Buffet';
export const SITE_DESCRIPTION = 'Fresh, healthy bowls and burritos made with quality ingredients.';

export const NAV_LINKS = [
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'About' },
  { href: '/location', label: 'Location' },
] as const;

// Placeholder videos — replace with actual videos later
export const HERO_VIDEOS: VideoSource[] = [
  {
    src: '/videos/hero-1.mp4',
    poster: '/images/hero-poster-1.jpg',
    alt: 'Fresh ingredients being prepared at The Green Buffet',
  },
  {
    src: '/videos/hero-2.mp4',
    poster: '/images/hero-poster-2.jpg',
    alt: 'Building a custom bowl with fresh vegetables',
  },
  {
    src: '/videos/hero-3.mp4',
    poster: '/images/hero-poster-3.jpg',
    alt: 'A finished signature burrito being wrapped',
  },
];

export const MENU_ITEMS = [
  {
    id: 'signature-bowl',
    name: 'The Signature Bowl',
    description: 'Brown rice, black beans, grilled chicken, fresh avocado, pico de gallo, corn salsa, and our signature green sauce.',
    price: 12.99,
    category: 'bowls' as const,
    dietary: ['gluten-free'],
    popular: true,
  },
  {
    id: 'veggie-power-bowl',
    name: 'Veggie Power Bowl',
    description: 'Quinoa, roasted sweet potatoes, chickpeas, kale, pickled onions, tahini dressing, and toasted seeds.',
    price: 11.99,
    category: 'bowls' as const,
    dietary: ['vegetarian', 'vegan', 'gluten-free'],
    popular: false,
  },
  {
    id: 'spicy-fiesta-bowl',
    name: 'Spicy Fiesta Bowl',
    description: 'Cilantro lime rice, spicy chicken, black beans, jalapeños, pepper jack cheese, sour cream, and hot salsa.',
    price: 13.49,
    category: 'bowls' as const,
    dietary: ['gluten-free'],
    popular: true,
  },
  {
    id: 'mediterranean-bowl',
    name: 'Mediterranean Bowl',
    description: 'Lemon herb rice, grilled chicken, cucumber, tomatoes, olives, feta cheese, red onion, and tzatziki.',
    price: 12.99,
    category: 'bowls' as const,
    dietary: [],
    popular: false,
  },
  {
    id: 'signature-burrito',
    name: 'The Signature Burrito',
    description: 'Large flour tortilla with your choice of protein, Mexican rice, black beans, cheese, sour cream, and fresh salsa.',
    price: 13.99,
    category: 'burritos' as const,
    dietary: [],
    popular: true,
  },
  {
    id: 'california-burrito',
    name: 'California Burrito',
    description: 'Grilled steak, french fries, cheese, sour cream, guacamole, and pico de gallo wrapped in a warm tortilla.',
    price: 14.99,
    category: 'burritos' as const,
    dietary: [],
    popular: true,
  },
  {
    id: 'veggie-burrito',
    name: 'Garden Veggie Burrito',
    description: 'Whole wheat tortilla, black beans, roasted vegetables, brown rice, guacamole, and corn salsa.',
    price: 12.49,
    category: 'burritos' as const,
    dietary: ['vegetarian', 'vegan'],
    popular: false,
  },
  {
    id: 'breakfast-burrito',
    name: 'Sunrise Burrito',
    description: 'Scrambled eggs, turkey sausage, hash browns, cheese, and chipotle aioli. Available until 11am.',
    price: 10.99,
    category: 'burritos' as const,
    dietary: [],
    popular: false,
  },
];