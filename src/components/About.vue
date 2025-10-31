<template>
  <div class="min-h-screen bg-gradient-to-b from-[#f8f5f1] to-[#efe9dd] font-serif text-gray-800 flex flex-col">
    <NavBar/>

    <!-- Hero Section -->
    <section
      v-if="store.language == 'english'"
      class="text-center text-gray-800 px-4 sm:px-10 py-20 sm:py-24 bg-gradient-to-t from-[#e8dcc5] via-[#f5f1e6] to-[#f8f5f1] rounded-b-[3rem] sm:rounded-b-[4rem] shadow-inner flex flex-col items-center"
    >
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-semibold text-green-900 max-w-3xl leading-snug">
        About <span class="text-[#b08b4f]">Wisdom-Valley</span>
      </h2>
      <p class="text-md font-semibold text-green-900 max-w-3xl leading-snug">
        A project dedicated to illuminating hearts through the timeless message of the Qur’an.
      </p>
    </section>

    <section
      v-else
      class="text-center font-sans text-gray-800 px-4 sm:px-10 py-20 sm:py-24 bg-gradient-to-t from-[#e8dcc5] via-[#f5f1e6] to-[#f8f5f1] rounded-b-[3rem] sm:rounded-b-[4rem] shadow-inner flex flex-col items-center"
    >
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-semibold text-green-900 max-w-3xl leading-snug">
        <span class="text-[#b08b4f] font-serif">Wisdom-Valley</span> 
         </h2>
      <p class="text-md font-semibold text-green-900 max-w-3xl leading-snug">
        قرآنِ مجید کے ابدی پیغام کو دلوں تک پہنچانے کا ایک مخلصانہ منصوبہ ۔
      </p>
    </section>

    <!-- About Project Section -->
    <section v-if="store.language == 'english'" class="max-w-5xl mx-auto px-6 sm:px-10 py-16 flex-1 text-center">
      <h3 class="text-2xl sm:text-3xl font-semibold text-green-900 mb-10">Our Vision</h3>
      <div class="text-gray-700 leading-relaxed mb-6 font-serif">
        <b>Wisdom-Valley</b> is an initiative built to reconnect hearts and minds with the eternal message of the Qur’an.
        Every section on this platform is designed to help readers explore divine wisdom across time — from the
        Prophets’ sacrifices to modern-day challenges — with clarity and sincerity.
      </div>
      <div class="text-amber-700 font-bold">
         وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ
  
      </div>
             <div class="text-green-700">
                “And indeed, We have made the Qur’an easy to understand and remember, so is there anyone who will be mindful?”
       </div>
<div class="text-gray-700">
— Surah Al-Qamar (54:17)
</div>

      <p class="text-gray-700 leading-relaxed mb-6 font-serif">
        This project aims to bridge language barriers by presenting Qur’anic guidance in both
        <b>English</b> and <b>Urdu</b>, allowing readers from diverse backgrounds to reflect on its meanings.
      </p>

      <p class="text-gray-700 leading-relaxed mb-6 font-serif">
        The core of this project is <span class="text-green-900 font-semibold">Tawheed (Oneness of Allah)</span>,
        sincerity of purpose, and the timeless relevance of divine revelation.
      </p>

      <div class="bg-white rounded-2xl shadow-md p-8 mt-8">
        <h4 class="text-lg font-semibold text-[#b08b4f] mb-4">Contact</h4>
        <ul class="text-left list-disc list-inside text-gray-700 space-y-2">
          <p class="text-center">Feel free to contact me if you find any mistake </p>
          <div class="flex justify-center">
            <div><a href="https://wa.me/03247747752"><img src="../assets/whatsapp-svgrepo-com.svg" class="size-15"  alt=""></a></div> <div class="items-center flex ml-3 text-2xl font-bold">&LeftArrow;</div><div>
                
            </div>
          </div>
        </ul>
      </div>
    </section>

    <section v-if="store.language =='urdu'" class="max-w-5xl mx-auto px-6 sm:px-10 py-16 flex-1 text-center font-sans">
      <h3 class="text-2xl sm:text-3xl font-semibold text-green-900 mb-10">ہمارا مقصد</h3>
      <div class="text-gray-700 leading-relaxed mb-6 font-sans">
         ایک ایسا منصوبہ ہے جو دلوں کو قرآنِ مجید کے ابدی پیغام سے دوبارہ جوڑنے کے لیے بنایا گیا ہے۔
       
        اس ویب سائٹ کے ہر حصے کا مقصد یہ ہے کہ ریڈر کو قرآن کی حکمتوں اور رہنمائی پر غور و فکر کی دعوت دی جائے۔
      <br>
      <div class="text-amber-700 font-bold">
         وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ
  
      </div>
             <div class="text-green-700">
            
ترجمہ: "اور یقیناً ہم نے قرآن کو سمجھنے اور نصیحت حاصل کرنے کے لیے آسان بنا دیا ہے، پھر کیا کوئی ہے جو نصیحت حاصل کرے؟"
        </div>
<div class="text-gray-700">
— سورۃ القمر (54:17)
</div>
      </div>

      <p class="text-gray-700 leading-relaxed mb-6 font-serif">
        یہ منصوبہ <b>اردو</b> اور <b>انگریزی</b> دونوں زبانوں میں قرآنی پیغام پیش کرتا ہے تاکہ مختلف پس منظر کے
        لوگ اللہ کے کلام کی روشنی میں اپنی راہیں متعین کر سکیں۔
      </p>

      <p class="text-gray-700 leading-relaxed mb-6 font-serif">
        اس منصوبے کا بنیادی مقصد <span class="text-green-900 font-semibold">توحید</span>، اخلاصِ نیت، اور
        اللہ کے کلام کی ابدی رہنمائی کو اجاگر کرنا ہے۔
      </p>
      <div class="bg-white rounded-2xl shadow-md p-8 mt-8">
        <h4 class="text-lg font-semibold text-[#b08b4f] mb-4">Contact</h4>
        <ul class="text-left list-disc list-inside text-gray-700 space-y-2">
          <p class="text-center">اگر آپ کو کوئی غلطی نظر آئے تو بلا جھجھک مجھ سے رابطہ کریں۔ </p>
          <div class="flex justify-center">
            <div><a href="https://wa.me/03247747752" target="_blank"><img src="../assets/whatsapp-svgrepo-com.svg" class="size-15"  alt=""></a></div> <div class="items-center flex ml-3 text-2xl font-bold">&LeftArrow;</div><div>
                
            </div>
          </div>
        </ul>
      </div>
    </section>

    <!-- Footer -->
    <fooBar/>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useAppStore } from "../appStore";
import NavBar from "./NavBar.vue";
import fooBar from "./fooBar.vue";

const store = useAppStore();
</script>
