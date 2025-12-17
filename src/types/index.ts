export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface Product {
  id: string;
  title: string;
  cup_profile: string;
  tasting_notes: string;
  description: string;
  price: number;
  stock: number;
  image_url: string;
  category: string;
  created_at: string;
  updated_at: string;
}

export interface CreateProductDTO {
  title: string;
  cup_profile: string;
  tasting_notes: string;
  description: string;
  price: number;
  stock: number;
  image_url: string;
  category: string;
}

