<template>
  <div>
    <h3>{{ product.productName }}</h3>
    <img
      :src="selectedColorImage"
      alt="t-shirt"
      class="w-64"
    />
    <h3>Colors:</h3>
    <button
      @click="selectColor(color)"
      type="button"
      v-for="(color, i) in productColorsNames"
      :key="i"
      :style="colorStyle(color)"
      class="mx-2 w-6 h-6 border-2 border-solid border-white rounded-xl"
    ></button>
    <h3>Sizes:</h3>
    <button
      @click="selectSize(size)"
      type="button"
      v-for="(size, j) in product.productSize"
      :key="j"
      class="mx-2"
      :style="sizeStyle(size)"
    >
      {{ size }}
    </button>
    <p>Price:</p>
    <p>{{ product.productPrice }} €</p>
    <p>Quantity:</p>
    <div class="flex">
      <button
        @click="updateQuantity('-')"
        type="button"
        class="px-2 border border-solid border-sky-300 bg-sky-50 text-sm rounded-sm 
        disabled:bg-gray-300 disabled:border-gray-500 disabled:text-white"
        :disabled="quantity === 1"
      >-</button>
      <p class="px-2">{{ quantity }}</p>
      <button
        @click="updateQuantity('+')"
        type="button"
        class="px-2 border border-solid border-sky-300 bg-sky-50 text-sm rounded-sm"
      >+</button>
    </div>
    <p>Description: {{ product.productDescription }}</p>
    <button
      @click="add"
      type="button"
      class="p-2 border-2 border-solid border-sky-300 bg-sky-50 text-gray-900 rounded-sm transition-all duration-500"
      :style="transition"
    >Add to cart</button>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/cart'
import { mapStores } from 'pinia'

export default {
  props: ["product"],

  data () {
    return {
      selectedColor: Object.keys(this.product.productColors)[0],
      selectedSize: this.product.productSize[0],
      quantity: 1,
      isTransition: false,
    };
  },

  watch: {
    product (newProduct) {
      this.selectedColor = Object.keys(newProduct.productColors)[0];
      this.selectedSize = newProduct.productSize[0];
    },
    // selectedSize(newSize) { (for practice)
    //   console.log('selected size is ' + newSize);
    // }
  },

  computed: {
    ...mapStores(useCartStore),

    selectedColorImage () {
      return this.product.productColors[this.selectedColor];
    },

    productColorsNames () {
      return Object.keys(this.product.productColors);
    },

    transition () {
      return this.isTransition ? {
        "background-color": "rgb(125 211 252 / var(--tw-border-opacity)",
        color: "white",
      } : ""
    }
  },

  methods: {
    selectColor (color) {
      this.selectedColor = color;
    },

    /**
     * Gives the correct styles to a color bubble.
     * Gives it a background and a border (blue if selected, white if not).
     * @param {String} color The color name ("pink", "red", "black").
     */
    colorStyle (color) {
      return {
        "background-color": color,
        "border-color": color == this.selectedColor ? "#33ccff" : null,
      };
    },

    selectSize (size) {
      this.selectedSize = size;
    },

    sizeStyle (size) {
      const isSizeSelected = size == this.selectedSize;
      return isSizeSelected ? {
        border: "2px solid #33ccff",
        "border-radius": "10px",
        "background-color": "darkgray",
        padding: "0 8px",
        color: "white",
      } : null;
    },

    updateQuantity (param) {
      param == '-' ? this.quantity -= 1 : this.quantity += 1;
      if (this.quantity < 1) {
        this.quantity = 1;
      }
    },

    add () {
      const objectToAdd = {
        name: this.product.productName,
        color: this.selectedColor,
        size: this.selectedSize,
        quantity: this.quantity,
        price: this.product.productPrice
      };
      this.cartStore.addToCart(objectToAdd);
      this.quantity = 1;
      this.isTransition = true;
      setTimeout(() => {
        this.isTransition = false;
      }, 500);
    },
  },
};
</script>
