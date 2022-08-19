<template>
  <div v-if="isVisible" class="w-fit my-4 mx-auto text-center">
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
      Log In
    </button>
  </div>
</template>

<script>
import { useInformationStore } from "@/stores/information.js";
import { useLoginStore } from "@/stores/login";
import { mapStores } from "pinia";

export default {
  emits: ["close-window"],

  data() {
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
          description: "Age: ",
          inputType: "number",
          inputTitle: "age",
          userEnteredData: null,
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
    onClick() {
      this.informationStore.updateState(this.basicInformationData);
      this.loginStore.showLoggedIn();
      this.isVisible = false;
      this.$emit("close-window");
    },
  },
};
</script>
