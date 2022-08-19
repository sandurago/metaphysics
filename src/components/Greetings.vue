<template>
  <div>
    <h3 class="m-10 text-2xl text-center">
      Hello {{ informationStore.name }}!
    </h3>
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
