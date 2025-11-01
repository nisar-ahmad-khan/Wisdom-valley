<template>
  <header class="flex justify-between items-center px-6 sm:px-10 py-6 relative">
    <h1 class="text-xl sm:text-2xl font-bold text-green-900 tracking-wide">
      Wisdom-Valley
    </h1>

    <!-- Desktop Nav -->
    <nav class="hidden md:flex space-x-6 text-gray-700 font-medium cursor-pointer">
      <router-link :to="{ name: 'home' }" class="hover:text-green-800 transition duration-200">Qur'anic Wisdom</router-link>
      <router-link :to="{ name: 'proficies' }" class="hover:text-green-800 transition duration-200">Prophecies</router-link>
      <router-link :to="{name : 'about'}" class="hover:text-green-800 transition duration-200">About</router-link>

      <!-- Language Toggle (Desktop) -->
      <button @click="store.toggleLang" class="p-1 hover:scale-110 transition">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke-width="1.5" stroke="currentColor" class="size-6 text-green-900">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0
                c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69
                15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589
                8.495a18.023 18.023 0 0 1-3.827-5.802"/>
        </svg>
      </button>
    </nav>

    <!-- Mobile Menu Button -->
    <button @click="toggleMenu" class="md:hidden focus:outline-none text-green-900">
      <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none"
           viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none"
           viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>

    <!-- Mobile Nav -->
    <nav v-if="menuOpen"
         class="absolute top-full left-0 w-full bg-[#f8f5f1] border-t border-gray-300 shadow-md flex flex-col text-center space-y-3 py-4 md:hidden z-50">
      <router-link @click="menuOpen = false" :to="{name:'home'}" class="hover:text-green-800 transition">Qur'anic Wisdom</router-link>
      <router-link @click="menuOpen = false" :to="{name:'proficies'}" class="hover:text-green-800 transition">Prophecies</router-link>

      <router-link @click="menuOpen = false" :to="{name:'about'}" class="hover:text-green-800 transition">About</router-link>
      <div class="flex justify-center">
        <button @click="store.toggleLang "  class="p-2 rounded-full hover:bg-gray-200 transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               stroke-width="1.5" stroke="currentColor" class="size-6 text-green-900">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474
                  48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038
                  3.334.114M9 5.25V3m3.334 2.364C11.176
                  10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061
                  1.785.147 2.666.257m-4.589 8.495a18.023
                  18.023 0 0 1-3.827-5.802"/>
          </svg>
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted , watch} from "vue";
import { useAppStore } from "../appStore";
import { router } from "../routes";
const store = useAppStore();
const menuOpen = ref(false);
const toggleMenu = () => (menuOpen.value = !menuOpen.value);

const language = ref(true); // true = English, false = Urdu
const eng = ref("english");
const urdu = ref("urdu");
const currentLang = ref("");



onMounted(() => {
  const stored = localStorage.getItem("language");
  if (stored) {
    const parsed = JSON.parse(stored);
    currentLang.value = parsed;
    language.value = parsed === eng.value;
  } else {
    // Default to English if nothing stored
    localStorage.setItem("language", JSON.stringify(eng.value));
    currentLang.value = eng.value;
  }
  console.log("Loaded language:", currentLang.value);
});

const toggleLanguage = () => {
  language.value = !language.value;
  currentLang.value = language.value ? eng.value : urdu.value;
  localStorage.setItem("language", JSON.stringify(currentLang.value));
  console.log("Toggled language:", currentLang.value);
};
</script>
