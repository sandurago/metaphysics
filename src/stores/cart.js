import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [],
    isCartVisible: false,
  }),

  getters: {
    /**
     * calculates total price by multiplying quality and price of products. 
     * @param {Object} state the current value of the state.
     * @returns {Number} total price of added items in cart.
     */
    total (state) {
      let totalPrice = 0;
      for (let i = 0; i < state.cart.length; i++) {
        totalPrice += state.cart[i].quantity * state.cart[i].price;
      }
      return totalPrice;
    },

    /**
     * checks for the quantity of each item in cart and calculates it.
     * @param {Object} state the current value of the state.
     * @returns {Number} the quantity of the items in cart.
     */
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
     * checks if item is already in the cart.
     * if yes, increases its quantity by the given amount.
     * if not, adds it to the cart. 
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
     * checks if the item is already in cart, and returns its position.
     * @param {Object} item the item to check if it’s already in the cart.
     * @returns {Number} `-1` if not found, position otherwise.
     */
    isItemInCart (item) {
      return this.cart.findIndex(function (itemInCart) {
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
