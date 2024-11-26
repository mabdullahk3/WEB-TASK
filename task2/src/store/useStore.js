import { create } from 'zustand';


// Zustand store
export const useStore = create((set) => ({
  products: [],
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  user: { loggedIn: false, profile: null },
  
  // Fetch products and cache them
  fetchProducts: async () => {
    const response = await fetch('https://fakestoreapi.com/products');  // Public API
    const data = await response.json();
    set({ products: data });
  },

  // Cart actions
  addToCart: (product) => set((state) => {
    const newCart = [...state.cart, product];
    localStorage.setItem('cart', JSON.stringify(newCart));
    return { cart: newCart };
  }),

  removeFromCart: (productId) => set((state) => {
    const newCart = state.cart.filter(product => product.id !== productId);
    localStorage.setItem('cart', JSON.stringify(newCart));
    return { cart: newCart };
  }),

  updateCartQuantity: (productId, quantity) => set((state) => {
    const newCart = state.cart.map(product =>
      product.id === productId ? { ...product, quantity } : product
    );
    localStorage.setItem('cart', JSON.stringify(newCart));
    return { cart: newCart };
  }),

  // User actions
  login: (profile) => set({ user: { loggedIn: true, profile } }),
  logout: () => set({ user: { loggedIn: false, profile: null } }),
  
  // Checkout
  checkout: () => set({ cart: [] }),
}));
