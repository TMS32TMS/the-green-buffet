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
    src: '/videos/b.mp4',
    poster: '',
    alt: 'Fresh ingredients being prepared at The Green Buffet',
  },
  {
    src: '/videos/b.mp4',
    poster: '',
    alt: 'Building a custom bowl with fresh vegetables',
  },
  {
    src: 'https://videos.pexels.com/video-files/4065411/4065411-uhd_2560_1440_25fps.mp4',
    poster: '',
    alt: 'A finished signature burrito being wrapped',
  },
];

export const MENU_ITEMS = [
  {
    id: 'signature-bowl',
    name: 'Chicken Teriyaki Bowl',
    description: 'Sauteed spicy teriyaki chicken, toppings & signature sauces.',
    price: 75.00,
    category: 'bowls' as const,
    dietary: ['gluten-free'],
    popular: true,
    image: '/videos/96.jpg',
  },
  {
    id: 'veggie-power-bowl',
    name: 'Garden Salad',
    description: 'Veggies only.',
    price: 60.00,
    category: 'bowls' as const,
    dietary: ['vegetarian', 'vegan', 'gluten-free'],
    popular: false,
    image: '/videos/98.jpg',
  },
  {
    id: 'spicy-fiesta-bowl',
    name: 'Beef Birria Bowl',
    description: 'Slow-cooked birria beef, rice, toppings, & signature sauces.',
    price: 75.00,
    category: 'bowls' as const,
    dietary: ['gluten-free'],
    popular: true,
    image: '/videos/97.jpg',
  },

  {
    id: 'signature-burrito',
    name: 'Beef Birria Burrito',
    description: 'Slow-cooked birria beef, rice, toppings, & signature sauces wrapped in a warm tortilla.',
    price: 100.00,
    category: 'burritos' as const,
    dietary: [],
    popular: true,
    image: '/videos/60.jpg',
  },
  {
    id: 'california-burrito',
    name: 'Spicy Chicken Teriyaki Burrito',
    description: 'Sauteed spicy teriyaki chicken, toppings & signature sauces wrapped in a warm tortilla.',
    price: 100.00,
    category: 'burritos' as const,
    dietary: [],
    popular: true,
    image: '/videos/61.jpg',
  },
  
];

export const LOCATION_INFO = {
  name: 'The Green Buffet',
  address: 'Plot 4718, Corner of Haile Selassie Road & United Nations Avenue',
  city: 'Lusaka',
  state: 'Lusaka Province',
  zip: '10101',
  phone: '+260 97 2699005',
  email: 'thegreenbuffet@gmail.com',
  hours: {
    monday: '08:30 AM - 07:30 PM',
    tuesday: '08:30 AM - 07:30 PM',
    wednesday: '08:30 AM - 07:30 PM',
    thursday: '08:30 AM - 07:30 PM',
    friday: '08:30 AM -  07:30 PM',
    saturday: '08:30 AM -  07:30 PM',
    sunday: '08:30 AM - 03:00 PM',
  },
  coordinates: {
    lat: -15.4183114,
    lng: 28.3127568,
  },
  googleMapsUrl: 'https://www.google.com/maps/place/Liberty+mall+limited/@-15.4183114,28.3127568,21z/data=!4m16!1m9!4m8!1m6!1m2!1s0x1940f391ea4133bb:0x914030d930038c8d!2sPLUG+STORE,+United+Nations+Ave,+Lusaka!2m2!1d28.3127802!2d-15.4182936!1m0!3m5!1s0x19408de85e1ab8bb:0xd44185ec4f650f44!8m2!3d-15.4181573!4d28.3128686!16s%2Fg%2F11w3m06jnh?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D',
};

export const SMOOTHIE_ITEMS = [
  {
    id: 'green-machine',
    name: 'Green Energy',
    description: 'Spinach, Apple, Avocado, and a Pineapple.',
    price: 70.00,
    category: 'smoothies' as const,
    dietary: ['vegetarian', 'vegan', 'gluten-free'],
    popular: true,
    image: '/videos/41.jpg',
  },
  {
    id: 'berry-blast',
    name: 'Banana Peanut',
    description: 'Peanut butter and banana.',
    price: 70.00,
    category: 'smoothies' as const,
    dietary: ['vegetarian', 'gluten-free'],
    popular: true,
    image: '/videos/40.jpg',
  },
  
];
