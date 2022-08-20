<template>
  <div>
    <ProductDisplay
      v-if="displayedProduct"
      :product="displayedProduct"
    />
  </div>
</template>

<script>
import ProductDisplay from "@/components/ProductDisplay.vue";
import items from "@/assets/items.json";

export default {
  components: {
    ProductDisplay,
  },

  data () {
    return {
      displayedProduct: null,
    }
  },

  methods: {
    /**
     * loads a product based on the category from parameters.
     * @param {String} categoryName category name from the route params.
     */
    loadProductFromParams (categoryName) {
      if (categoryName === 't-shirts') {
        this.displayedProduct = items[0];
      } else if (categoryName === 'skirts') {
        this.displayedProduct = items[1];
      } else if (categoryName === 'heels') {
        this.displayedProduct = items[2];
      }
    }
  },

  watch: {
    /**
     * triggered when the route param has changed, fires the given method.
     * @param {String} newCategoryName the new value of the category name.
     * @param {String} _oldCategoryName the previous value of the category name.
     */
    '$route.params.categoryName' (newCategoryName, _oldCategoryName) {
      this.loadProductFromParams(newCategoryName);
    }
  },

  created () {
    /**
     * loads the product from a parameter when the page is entered for the first time.
     */
    this.loadProductFromParams(this.$route.params.categoryName);
  }
}
</script>
