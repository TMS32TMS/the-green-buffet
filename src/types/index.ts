export interface VideoSource {
  src: string;
  poster?: string; // Image shown before video loads
  alt: string; // For accessibility
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'bowls' | 'burritos' | 'drinks' | 'sides';
  image?: string;
  dietary?: ('vegetarian' | 'vegan' | 'gluten-free')[];
  popular?: boolean;
}

export interface LocationInfo {
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  hours: {
    [day: string]: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
}