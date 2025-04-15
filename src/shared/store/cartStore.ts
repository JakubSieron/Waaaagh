import { create } from 'zustand';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  isOpen: false,

  addItem: (item) => {
    const currentItems = get().items;
    const existingItem = currentItems.find((i) => i.id === item.id);

    if (existingItem) {
      set({
        items: currentItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      });
    } else {
      set({
        items: [...currentItems, { ...item, quantity: 1 }],
      });
    }

    get().openCart();
  },

  removeItem: (id) => {
    set({
      items: get().items.filter((i) => i.id !== id),
    });
  },

  updateQuantity: (id, quantity) => {
    if (quantity <= 0) {
      set({
        items: get().items.filter((item) => item.id !== id),
      });
    } else {
      set({
        items: get().items.map((item) =>
          item.id === id ? { ...item, quantity } : item
        ),
      });
    }
  },

  toggleCart: () => {
    set((state) => ({ isOpen: !state.isOpen }));
  },

  openCart: () => {
    set({ isOpen: true });
  },

  closeCart: () => {
    set({ isOpen: false });
  },

  totalItems: () => 
    get().items.reduce((sum, item) => sum + item.quantity, 0),

  totalPrice: () =>
    get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),
})); 