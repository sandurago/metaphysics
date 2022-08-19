<template>
  <div class="mx-auto py-2 px-4 w-fit border border-solid border-gray-700">
    <h3 class="pt-2 pb-4 text-center text-2xl">Shop for:</h3>
    <div class="flex">
      <button type="button"
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
  data() {
    return {
      productCategories: ["T-shirts", "Skirts", "Heels"],
    };
  },

  methods: {
    onClick(product) {
      if (product === 'T-shirts') {
        this.$router.push({
          name: 'category',
          params: {
            categoryName: 't-shirts',
          }
        })
      } else if (product === 'Skirts') {
        this.$router.push({
          name: 'category',
          params: {
            categoryName: 'skirts',
          }
        })
      } else if (product === 'Heels') {
        this.$router.push({
          name: 'category',
          params: {
            categoryName: 'heels',
          }
        })
      }
    }
  }
}
   
</script>
