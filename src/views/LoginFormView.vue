<template>
  <div
    v-if="isVisible"
    class="w-fit my-4 mx-auto text-center"
  >
    <div
      v-for="(dataInformation, index) in basicInformationData"
      :key="index"
      class="py-2 flex justify-between"
    >
      <label :for="dataInformation.inputTitle">{{
          dataInformation.description
      }}</label>
      <input
        v-model="dataInformation.userEnteredData"
        :type="dataInformation.inputType"
        :name="dataInformation.inputTitle"
        class="ml-2 border border-solid border-black"
      />
    </div>
    <button
      @click="onClick"
      type="button"
      class="
        my-2
        px-2
        border border-solid border-black
        bg-sky-100
        rounded-sm
        hover:text-white hover:bg-sky-700 hover:border-white
      "
    >
      Submit
    </button>
  </div>
</template>

<script>
import { useInformationStore } from "@/stores/information.js";
import { useLoginStore } from "@/stores/login";
import { mapStores } from "pinia";

export default {
  emits: ["close-window"],

  data () {
    return {
      basicInformationData: [
        {
          description: "Name: ",
          inputType: "text",
          inputTitle: "name",
          userEnteredData: "",
        },
        {
          description: "Nickname: ",
          inputType: "text",
          inputTitle: "nickname",
          userEnteredData: "",
        },
        {
          description: "Email: ",
          inputType: "email",
          inputTitle: "email",
          userEnteredData: "",
        },
      ],
      isVisible: true,
    };
  },

  computed: {
    ...mapStores(useInformationStore),
    ...mapStores(useLoginStore),
  },

  methods: {
    /**
     * fires actions in Pinia: updates login information & displays logged in user,
     * redirects to the home page. 
     */
    onClick () {
      this.informationStore.updateState(this.basicInformationData);
      this.loginStore.showLoggedIn();
      this.$router.replace({
        path: '/'
      })
    },
  },
};
</script>
