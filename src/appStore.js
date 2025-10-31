// 📁 src/stores/useAppStore.js
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    language: "english",
  }),

  actions: {
    toggleLang() {
      this.language = this.language === "english" ? "urdu" : "english";
      localStorage.setItem("language", JSON.stringify(this.language));
    },

    loadLang() {
      const stored = localStorage.getItem("language");
      if (stored) {
        this.language = JSON.parse(stored);
      }
    },
  },
});
