<template>
  <div>
    <FormBasicInfo @close-window="showMainContent" />
    <div v-if="isVisible">
      <Greetings />
      <MainPageContent />
    </div>
  </div>
</template>

<script>
import FormBasicInfo from "@/components/FormBasicInfo.vue";
import Greetings from "@/components/Greetings.vue";
import MainPageContent from "@/components/MainPageContent.vue";

export default {
  components: {
    FormBasicInfo,
    Greetings,
    MainPageContent,
  },

  data () {
    return {
      isVisible: true,
    };
  },

  methods: {
    showMainContent () {
      this.isVisible = true;
    },
  },
};
</script>
