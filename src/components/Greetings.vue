<template>
  <div>
    <h3 class="mt-10 mb-6 text-2xl text-center">
      Hello
      <template v-if="informationStore.name !== ''">
        {{ informationStore.name }}!
      </template>
      <template v-else>
        User!
      </template>
    </h3>
    <p class="pb-2 text-center">Welcome to The Online Store. We wish you a happy shopping!</p>
  </div>
</template>

<script>
import { useInformationStore } from "@/stores/information";
import { mapStores } from "pinia";

export default {
  computed: {
    ...mapStores(useInformationStore),
  },
};
</script>
