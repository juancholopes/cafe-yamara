import { createClient } from '@/lib/supabase/client';
import { CreateProductDTO, Product } from '@/types';

export const productsService = {
  async createProduct(productData: CreateProductDTO): Promise<Product> {
    const supabase = createClient();
    
    const { data, error } = await supabase
      .from('products')
      .insert([productData])
      .select()
      .single();

    if (error) {
      throw new Error(`Error creating product: ${error.message}`);
    }

    return data;
  },

  async uploadProductImage(file: File): Promise<string> {
    const supabase = createClient();
    
    // Debug: Verificar sesión antes de subir
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();
    if (sessionError || !session) {
      console.error('Session error:', sessionError);
      throw new Error('No hay sesión activa. Por favor recarga la página e inicia sesión nuevamente.');
    }

    // Create a unique file name
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2)}_${Date.now()}.${fileExt}`;
    // Aseguramos que no haya caracteres especiales en el path
    const filePath = fileName.replace(/[^a-zA-Z0-9._-]/g, '');

    const { error: uploadError } = await supabase.storage
      .from('products')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (uploadError) {
      console.error('Upload error details:', uploadError);
      throw new Error(`Error uploading image: ${uploadError.message}`);
    }

    const { data } = supabase.storage
      .from('products')
      .getPublicUrl(filePath);

    return data.publicUrl;
  },

  async getProducts(): Promise<Product[]> {
    const supabase = createClient();
    
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw new Error(`Error fetching products: ${error.message}`);
    }

    return data || [];
  },

  async deleteProduct(id: string): Promise<void> {
    const supabase = createClient();
    
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id);

    if (error) {
      throw new Error(`Error deleting product: ${error.message}`);
    }
  }
};
