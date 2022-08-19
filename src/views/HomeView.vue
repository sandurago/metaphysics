<template>
  <div>
    <Greetings />
    <MainPageContent />
  </div>
</template>

<script>
import Greetings from "@/components/Greetings.vue";
import MainPageContent from "@/components/MainPageContent.vue";

export default {
  components: {
    Greetings,
    MainPageContent,
  },
};
</script>
