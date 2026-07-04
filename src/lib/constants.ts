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
    src: 'https://videos.pexels.com/video-files/3255275/3255275-uhd_2560_1440_24fps.mp4',
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

export const LOCATION_INFO = {
  name: 'The Green Buffet',
  address: 'Plot 4718, Corner of Haile Selassie Road & United Nations Avenue',
  city: 'Lusaka',
  state: 'Lusaka Province',
  zip: '10101',
  phone: '+260 97 2699005',
  email: 'thegreenbuffet@gmail.com',
  hours: {
    monday: '10:00 AM - 9:00 PM',
    tuesday: '10:00 AM - 9:00 PM',
    wednesday: '10:00 AM - 9:00 PM',
    thursday: '10:00 AM - 9:00 PM',
    friday: '10:00 AM - 10:00 PM',
    saturday: '9:00 AM - 10:00 PM',
    sunday: '9:00 AM - 8:00 PM',
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
    name: 'Green Machine',
    description: 'Spinach, kale, banana, mango, almond milk, and a touch of honey.',
    price: 7.99,
    category: 'smoothies' as const,
    dietary: ['vegetarian', 'vegan', 'gluten-free'],
    popular: true,
  },
  {
    id: 'berry-blast',
    name: 'Berry Blast',
    description: 'Mixed berries, banana, Greek yogurt, and orange juice. Packed with antioxidants.',
    price: 7.99,
    category: 'smoothies' as const,
    dietary: ['vegetarian', 'gluten-free'],
    popular: true,
  },
  {
    id: 'tropical-sunrise',
    name: 'Tropical Sunrise',
    description: 'Pineapple, mango, coconut milk, and a splash of lime. Taste the tropics.',
    price: 7.49,
    category: 'smoothies' as const,
    dietary: ['vegetarian', 'vegan', 'gluten-free'],
    popular: false,
  },
  {
    id: 'protein-power',
    name: 'Protein Power',
    description: 'Banana, peanut butter, chocolate protein, oat milk, and cacao nibs.',
    price: 8.49,
    category: 'smoothies' as const,
    dietary: ['vegetarian', 'gluten-free'],
    popular: false,
  },
  {
    id: 'mango-tango',
    name: 'Mango Tango',
    description: 'Fresh mango, passion fruit, orange juice, and coconut water.',
    price: 7.49,
    category: 'smoothies' as const,
    dietary: ['vegetarian', 'vegan', 'gluten-free'],
    popular: false,
  },
  {
    id: 'peanut-butter-bliss',
    name: 'Peanut Butter Bliss',
    description: 'Banana, peanut butter, dates, almond milk, and a dash of cinnamon.',
    price: 8.49,
    category: 'smoothies' as const,
    dietary: ['vegetarian', 'vegan', 'gluten-free'],
    popular: true,
  },
];
