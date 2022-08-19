<template>
  <div class="mx-auto py-2 px-4 w-fit">
    <h3 class="py-6 text-center text-2xl">Shop for:</h3>
    <div class="flex flex-col">
      <button
        type="button"
        @click="onClick(product)"
        v-for="(product, i) in productCategories"
        :key="i"
        class="
          my-2
          mx-4
          py-6
          px-10
          w-fit
          border border-solid border-gray-400
          bg-gray-50
          rounded-md
          text-gray-900 text-xl
        "
      >
        {{ product }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      productCategories: ["T-shirts", "Skirts", "Heels"],
    };
  },

  methods: {
    /**
     * compares the value of a parameter to the string ('T-shirts', 'Skirts' or 'Heels')
     * and redirects to the correct page.
     * @param {String} product item category from 'productCategories' array.
     */
    onClick (product) {
      this.$router.push({
        name: 'category',
        params: {
          categoryName: product.toLowerCase(),
        }
      })
    }
  }
}

</script>
