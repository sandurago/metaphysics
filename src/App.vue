<template>
  <nav class="flex h-10 bg-red-100 px-10">
    <router-link
      to="/"
      class="px-2 leading-10 hover:text-rose-500"
    >Home</router-link>
    <router-link
      to="/category/t-shirts"
      class="px-2 leading-10 hover:text-rose-500"
    >T-shirts</router-link>
    <router-link
      to="/category/skirts"
      class="px-2 leading-10 hover:text-rose-500"
    >Skirts</router-link>
    <router-link
      to="/category/heels"
      class="px-2 leading-10 hover:text-rose-500"
    >Heels</router-link>
    <button
      @click="cartStore.showCart"
      type="button"
      class="ml-auto hover:text-rose-500"
    >Cart ({{ cartStore.itemsInCart }})</button>
  </nav>
  <div class="p-4">
    <ShoppingCart v-if="cartStore.isCartVisible" />

    <h3 class="ml-auto -mt-4 -mb-10 px-2 leading-10 w-fit">
      <template v-if="loginStore.isLoggedIn">
        Logged in as: {{ informationStore.nickname }} ({{
            informationStore.email
        }}). <button
          @click="logOut"
          type="button"
          class="underline decoration-solid"
        >Log out</button>
      </template>
      <template v-else>
        Not logged in.
        <button
          @click="displayLogin"
          type="button"
          class="underline decoration-solid"
        >Log in</button> now
      </template>
    </h3>
    <router-view />
  </div>
</template>

<script>
import ShoppingCart from '@/components/ShoppingCart.vue'
import { useCartStore } from '@/stores/cart'
import { useInformationStore } from "@/stores/information";
import { useLoginStore } from "@/stores/login";
import { mapStores } from 'pinia'

export default {

  components: {
    ShoppingCart,
  },

  computed: {
    ...mapStores(useInformationStore, useLoginStore, useCartStore),
  },

  methods: {
    displayLogin () {
      this.$router.push({
        path: '/login'
      })
    },

    logOut () {
      this.loginStore.logOut();
      this.informationStore.clearData();
    }
  }
}
</script>
