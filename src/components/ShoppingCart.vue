<template>
  <div class="p-2 border border-solid border-black fixed top-0 right-1 bg-stone-50 cart">
    <h3 class="text-center">Cart</h3>
    <p
      v-if="!cartStore.itemsInCart"
      class="text-center"
    >The cart is empty</p>
    <table
      v-else
      class="w-full text-sm"
    >
      <thead>
        <tr>
          <th>Item</th>
          <th>Color</th>
          <th>Size</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in cartStore.cart"
          :key="index"
        >
          <td>{{ item.name }}</td>
          <td class="text-center">{{ item.color }}</td>
          <td class="text-center">{{ item.size }}</td>
          <td class="text-center">{{ item.quantity }}</td>
          <td class="text-center">{{ item.price }} €</td>
        </tr>
      </tbody>
    </table>
    <p class="text-right">Total price: {{ cartStore.total }} €</p>
    <div class="mt-4 flex justify-around">
      <button
        v-if="cartStore.itemsInCart"
        @click="cartStore.emptyCart"
        class="px-2 text-rose-400
        hover:text-neutral-50
        hover:bg-rose-400"
      >Empty cart</button>
      <button
        @click="cartStore.hideCart"
        type="button"
        class="px-2 text-rose-400
        hover:text-neutral-50
        hover:bg-rose-400"
      >Close</button>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/cart'
import { mapStores } from 'pinia'

export default {
  computed: {
    ...mapStores(useCartStore),
  },
}
</script>

<style>
.cart {
  min-width: 25%;
}
</style>
