import { Product } from './mocks/handlers';

interface ErrorResponse {
  message: string;
}

class ApiError extends Error {
  constructor(message: string, public status?: number) {
    super(message);
    this.name = 'ApiError';
  }
}

const handleResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    const errorData: ErrorResponse = await response.json();
    throw new ApiError(errorData.message || 'An error occurred', response.status);
  }
  return response.json();
};

export const productsApi = {
  getAll: async (): Promise<Product[]> => {
    try {
      const response = await fetch('/api/products');
      return handleResponse<Product[]>(response);
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError('Failed to fetch products');
    }
  },

  getByCategory: async (category: string): Promise<Product[]> => {
    try {
      const response = await fetch(`/api/categories/${category}`);
      return handleResponse<Product[]>(response);
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError(`Failed to fetch ${category} products`);
    }
  },

  getById: async (id: number): Promise<Product> => {
    try {
      const response = await fetch(`/api/products/${id}`);
      return handleResponse<Product>(response);
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError(`Failed to fetch product with id ${id}`);
    }
  }
}; 