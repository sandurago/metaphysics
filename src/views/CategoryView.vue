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
     * Load a product thanks to the route params.
     * @param {String} categoryName The category name from the route params.
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
     * Triggered when the route params (/category/>t-shirts< or /category/>skirts<) has changed.
     * @param {String} newCategoryName The new value of the category name (either "t-shirts" or "skirts").
     * @param {String} _oldCategoryName The previous value of the category name (either "t-shirts" or "skirts").
     */
    '$route.params.categoryName' (newCategoryName, _oldCategoryName) {
      this.loadProductFromParams(newCategoryName);
    }
  },

  created () {
    // Load product when we "arrive" on this page for the first time (from a different page)
    this.loadProductFromParams(this.$route.params.categoryName);

    // const whatToWatch = function() {
    //   return this.$route.params.categoryName;
    // };

    // const whatToDo = function(newCategoryName, _oldCategoryName) {
    //   this.loadProductFromParams(newCategoryName);
    // };

    // this.$watch(whatToWatch, whatToDo);

    // When the "route params" change, we load the new product according to those new params.
    // This happens when we already are on the category view page, and we chose a new category.
    this.$watch(
      function () {
        return this.$route.params;
      },
      function (toParams, _previousParams) {
        // react to route changes...
        this.loadProductFromParams(toParams);
      }
    )
  }
}
</script>
