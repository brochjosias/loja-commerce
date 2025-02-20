export interface Product {
  name: string;
  price_in_cents: number;
  id: string;
  image_url: string;
  description?: string;
  category?: string;
}

// Defina a estrutura esperada da resposta da API
export interface ProductFetchResponse {
  data: {
    Product: Product;
  };
}
