import { defineStore } from 'pinia'

export const useInformationStore = defineStore('information', {
  state: () => ({
    name: "",
    nickname: "",
    email: "",
  }),

  actions: {
    /**
     * Updates the state with new information data.
     * @param {Array<Object>} informationData The array of Objects containing our data.
     */
    updateState (informationData) {
      informationData.forEach(
        /**
         * 
         * @param {Object} data The object { inputTitle, userEnteredData }
         */
        (data) => {
          this[data.inputTitle] = data.userEnteredData;
        });
    },

    clearData () {
      this.name = "";
      this.nickname = "";
      this.email = "";
    }
  }
})
