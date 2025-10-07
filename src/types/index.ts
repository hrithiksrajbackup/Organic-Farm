export interface Product {
  id: string;
  categoryId: string;
  name: string;
  nameMl: string;
  slug: string;
  description: string;
  culturalStory: string;
  price: number;
  compareAtPrice?: number;
  stockQuantity: number;
  imageUrl: string;
  images: string[];
  weightGrams: number;
  isFeatured: boolean;
  isAvailable: boolean;
  originDistrict: string;
}

export interface Category {
  id: string;
  name: string;
  nameMl: string;
  slug: string;
  description: string;
  imageUrl: string;
  displayOrder: number;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
}

export interface Address {
  id?: string;
  fullName: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pincode: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  orderNumber: string;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  totalAmount: number;
  shippingAmount: number;
  taxAmount: number;
  shippingAddress: Address;
  paymentMethod: string;
  paymentStatus: string;
  items: OrderItem[];
  createdAt: string;
}

export interface OrderItem {
  id: string;
  productName: string;
  quantity: number;
  price: number;
}
