import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [],
    isCartVisible: false,
  }),

  getters: {
    total (state) {
      let totalPrice = 0;
      for (let i = 0; i < state.cart.length; i++) {
        totalPrice += state.cart[i].quantity * state.cart[i].price;
      }
      return totalPrice;
    },

    itemsInCart (state) {
      let totalQuantity = 0;
      for (let i = 0; i < state.cart.length; i++) {
        totalQuantity += state.cart[i].quantity;
      }
      return totalQuantity;
    }
  },

  actions: {
    /**
     * adds to cart
     * @param {Object} item the item's properties that are going to be added to the cart
     */
    addToCart (item) {
      const itemIndex = this.isItemInCart(item);
      if (itemIndex > -1) {
        this.cart[itemIndex].quantity += item.quantity;
      } else {
        this.cart.push(item);
      }
    },

    /**
     * Check if the item is already in the cart, and return its position.
     * @param {Object} item The item to check if it’s already in the cart.
     * @returns {Number} `-1` if found, position otherwise.
     */
    isItemInCart (item) {
      return this.cart.findIndex(function (itemInCart) {
        // Compare all the important properties of the item.
        return itemInCart.name == item.name && itemInCart.color == item.color && itemInCart.size == item.size;
      })
    },

    emptyCart () {
      this.cart = [];
    },

    hideCart () {
      this.isCartVisible = false;
    },

    showCart () {
      this.isCartVisible = true;
    }
  }
})
