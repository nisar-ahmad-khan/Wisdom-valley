<template>
<div class="min-h-screen bg-gradient-to-b from-[#f8f5f1] to-[#efe9dd] font-serif  text-gray-800 flex flex-col">
<NavBar/>
<section  v-if="store.language == 'english'" class="text-center text-gray-800 px-4 sm:px-10 py-20 sm:py-24  bg-gradient-to-t from-[#e8dcc5] via-[#f5f1e6] to-[#f8f5f1] rounded-b-[3rem] sm:rounded-b-[4rem] shadow-inner flex flex-col items-center">
    <h2 class="text-3xl sm:text-4xl md:text-5xl font-semibold text-green-900 max-w-3xl leading-snug">
       “Guidance for Those Who Seek the Truth”
    </h2>
    <p  class="text-md  font-semibold text-green-900 max-w-3xl leading-snug">(Inspired by Al-Baqarah 2:2)</p>
</section>

<section  v-else class="text-center font-sans text-gray-800 px-4 sm:px-10 py-20 sm:py-24  bg-gradient-to-t from-[#e8dcc5] via-[#f5f1e6] to-[#f8f5f1] rounded-b-[3rem] sm:rounded-b-[4rem] shadow-inner flex flex-col items-center">
    <h2 class="text-3xl sm:text-4xl md:text-5xl font-semibold text-green-900 max-w-3xl leading-snug">
      رہنمائی ہے اُن کے لیے  جو حق کی تلاش میں ہیں۔    </h2>
    <p  class="text-md  font-semibold text-green-900 max-w-3xl leading-snug">(Inspired by Al-Baqarah 2:2)</p>
</section>

<section class="max-w-6xl m-auto px-6 sm:px-10 py-16 flex-1 text-center font-sans" v-if="store.language == 'urdu'">
<h3 class="text-2xl sm:text-3xl  font-semibold text-green-900 mb-10">پیغامِ توحید اور انبیاء کی قربانیاں</h3>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" >
<div 
v-for="(text, index) in tauheedAndPropheticSacrificeUrdu" :key="index"
class="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 cursor-pointer"
>
<h4 class="font-semibold text-lg mb-2">
{{ text.issue }}
</h4>
<div  v-for="(text , index) in text.ayats" :key="index">
    <div>
        <p class="text-sm text-gray-800 mb-4 font-serif">
        {{ text.text}}
        </p>
    </div>
 <div class="flex justify-end text-arial text-sm text-green-900">
<div> ( {{ text.reference }} )</div>
 </div>

  </div>
<button
            class="bg-[#b08b4f] text-white px-4 py-2 rounded-full hover:bg-[#9b7a44] transition text-sm"
            @click="readThis(text)"
          >
            Read
          </button>
</div>
</div>
</section>
<section class="max-w-6xl m-auto px-6 sm:px-10 py-16 flex-1 text-center font-serif" v-if="store.language == 'english'">
<h3 class="text-2xl sm:text-3xl  font-semibold text-green-900 mb-10">The Message of Oneness and the Prophets’ Sacrifice</h3>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" >
<div 
v-for="(text, index) in tauheedAndPropheticSacrificeEnglish" :key="index"
class="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 cursor-pointer"
>
<h4 class="font-semibold text-lg mb-2">
{{ text.issue }}
</h4>
<div  v-for="(text , index) in text.ayats" :key="index">
    <div>
        <p class="text-sm text-gray-800 mb-4 font-serif">
        {{ text.text}}
        </p>
    </div>
 <div class="flex justify-end text-arial text-sm text-green-900">
<div> ( {{ text.reference }} )</div>
 </div>
  </div>
<button
            class="bg-[#b08b4f] text-white px-4 py-2 rounded-full hover:bg-[#9b7a44] transition text-sm"
            @click="readThis(text)"
          >
            Read
          </button>
</div>
</div>
</section>



<section class="max-w-6xl m-auto px-6 sm:px-10 py-16 flex-1 text-center font-sans" v-if="store.language == 'english'">
<h3 class="text-2xl sm:text-3xl  font-semibold text-green-900 mb-10">One Ummah — The Qur’anic Call for Unity</h3>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" >
<div 
v-for="(text, index) in antiSectarianismEnglish" :key="index"
class="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 cursor-pointer"
>
<h4 class="font-semibold text-lg mb-2">
{{ text.issue }}
</h4>
<div  v-for="(text , index) in text.ayats" :key="index">
    <div>
        <p class="text-sm text-gray-800 mb-4 font-serif">
        {{ text.text}}
        </p>
    </div>
 <div class="flex justify-end text-arial text-sm text-green-900">
<div> ( {{ text.reference }} )</div>
 </div>
  </div>
<button
            class="bg-[#b08b4f] text-white px-4 py-2 rounded-full hover:bg-[#9b7a44] transition text-sm"
            @click="readThis(text)"
          >
            Read More
          </button>
</div>
</div>
</section>


<section class="max-w-6xl m-auto px-6 sm:px-10 py-16 flex-1 text-center font-sans" v-if="store.language == 'urdu'">
<h3 class="text-2xl sm:text-3xl  font-semibold text-green-900 mb-10">قرآن کا پیغامِ اتحاد — فرقہ واریت کی مذمت</h3>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" >
<div 
v-for="(text, index) in antiSectarianismUrdu" :key="index"
class="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 cursor-pointer"
>
<h4 class="font-semibold text-lg mb-2">
{{ text.issue }}
</h4>
<div  v-for="(text , index) in text.ayats" :key="index">
    <div>
        <p class="text-sm text-gray-800 mb-4 font-serif">
        {{ text.text}}
        </p>
    </div>
 <div class="flex justify-end text-arial text-sm text-green-900">
<div> ( {{ text.reference }} )</div>
 </div>
  </div>
<button
            class="bg-[#b08b4f] text-white px-4 py-2 rounded-full hover:bg-[#9b7a44] transition text-sm"
            @click="readThis(text)"
          >
            Read More
          </button>
</div>
</div>
</section>




<section class="max-w-6xl m-auto px-6 sm:px-10 py-16 flex-1 text-center font-sans" v-if="store.language == 'urdu'">
<h3 class="text-2xl sm:text-3xl  font-semibold text-green-900 mb-10">راہِ اخلاص</h3>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" >
<div 
v-for="(text, index) in sacrificeAndJihadUrdu" :key="index"
class="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 cursor-pointer"
>
<h4 class="font-semibold text-lg mb-2">
{{ text.issue }}
</h4>
<div  v-for="(text , index) in text.ayats" :key="index">
    <div>
        <p class="text-sm text-gray-800 mb-4 font-serif">
        {{ text.text}}
        </p>
    </div>
 <div class="flex justify-end text-arial text-sm text-green-900">
<div> ( {{ text.reference }} )</div>
 </div>
  </div>
<button
            class="bg-[#b08b4f] text-white px-4 py-2 rounded-full hover:bg-[#9b7a44] transition text-sm"
            @click="readThis(text)"
          >
            Read
          </button>
</div>
</div>
</section>
<section class="max-w-6xl m-auto px-6 sm:px-10 py-16 flex-1 text-center" v-if="store.language == 'english'">
<h3 class="text-2xl sm:text-3xl  font-semibold text-green-900 mb-10">The Path of Devotion</h3>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" >
<div 
v-for="(text, index) in sacrificeAndJihadEnglish" :key="index"
class="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 cursor-pointer"
>
<h4 class="font-semibold text-lg mb-2">
{{ text.issue }}
</h4>
<div  v-for="(text , index) in text.ayats" :key="index">
    <div>
        <p class="text-sm text-gray-800 mb-4 font-serif">
        {{ text.text}}
        </p>
    </div>
 <div class="flex justify-end text-arial text-sm text-green-900">
<div> ( {{ text.reference }} )</div>
 </div>
  </div>
<button
            class="bg-[#b08b4f] text-white px-4  py-2 rounded-full hover:bg-[#9b7a44] transition text-sm"
            @click="readThis(text)"
          >
            Read
          </button>
</div>
</div>
</section>



<section class="max-w-6xl m-auto px-6 sm:px-10 py-16 flex-1 text-center font-sans" v-if="store.language == 'urdu'">
<h3 class="text-2xl sm:text-3xl  font-semibold text-green-900 mb-10">دعوتِ توحید — بُت پرستی اور قبر پرستی کی تردید</h3>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" >
<div 
v-for="(text, index) in tawheedIssuesUrdu" :key="index"
class="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 cursor-pointer"
>
<h4 class="font-semibold text-lg mb-2">
{{ text.issue }}
</h4>
<div  v-for="(text , index) in text.ayats" :key="index">
    <div>
        <p class="text-sm text-gray-800 mb-4 font-serif">
        {{ text.text}}
        </p>
    </div>
 <div class="flex justify-end text-arial text-sm text-green-900">
<div> ( {{ text.reference }} )</div>
 </div>
  </div>
<button
            class="bg-[#b08b4f] text-white px-4 py-2 rounded-full hover:bg-[#9b7a44] transition text-sm"
            @click="readThis(text)"
          >
            Read
          </button>
</div>
</div>
</section>
<section class="max-w-6xl m-auto px-6 sm:px-10 py-16 flex-1 text-center" v-if="store.language == 'english'">
<h3 class="text-2xl sm:text-3xl  font-semibold text-green-900 mb-10">The Call to Tawheed — Rejecting Idol and Grave Worship</h3>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" >
<div 
v-for="(text, index) in tawheedIssuesEnglish" :key="index"
class="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 cursor-pointer"
>
<h4 class="font-semibold text-lg mb-2">
{{ text.issue }}
</h4>
<div  v-for="(item , index) in text.ayats" :key="index">
    <div>
        <p class="text-sm text-gray-800 mb-4 font-serif">
        {{ item.text}}
        </p>
    </div>
 <div class="flex justify-end text-arial text-sm text-green-900">
<div> ( {{ item.reference }} )</div>

 </div>
 
  </div>
<div class="text-gray-500 ">
 <i> {{ text.message }}</i>
</div>
<button
            class="bg-[#b08b4f] text-white px-4 py-2 rounded-full hover:bg-[#9b7a44] transition text-sm"
            @click="readThis(text)"
          >
            Read
          </button>
</div>
</div>
</section>







<section class="max-w-6xl m-auto px-6 sm:px-10 py-16 flex-1 text-center" v-if="store.language == 'english'">
<h3 class="text-2xl sm:text-3xl  font-semibold text-green-900 mb-10">modern-day issues & their solutions</h3>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" >
<div 
v-for="(text, index) in modernIssues" :key="index"
class="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 cursor-pointer"
>
<h4 class="font-semibold text-lg mb-2">
{{ text.issue }}
</h4>
<div  v-for="(text , index) in text.ayats" :key="index">
    <div>
        <p class="text-sm text-gray-800 mb-4 font-serif">
        {{ text.text}}
        </p>
    </div>
 <div class="flex justify-end text-arial text-sm text-green-900">
<div> ( {{ text.reference }} )</div>
 </div>
  </div>
<button
            class="bg-[#b08b4f] text-white px-4 py-2 rounded-full hover:bg-[#9b7a44] transition text-sm"
            @click="readThis(text)"
          >
            Read
          </button>
</div>
</div>
</section>
<section class="max-w-6xl font-sans m-auto px-6 sm:px-10 py-16 flex-1 text-center" v-else>
<h3 class="text-2xl sm:text-3xl  font-semibold text-green-900 mb-10">عصرِ حاضر کے مسائل اور ان کے حل</h3>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" >
<div 
v-for="(text, index) in modernIssuesUrdu" :key="index"
class="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 cursor-pointer"
>
<h4 class="font-semibold text-lg mb-2">
{{ text.issue }}
</h4>
<div  v-for="(text , index) in text.ayats" :key="index">
    <div>
        <p class="text-sm text-gray-800 mb-4 font-serif">
        {{ text.text}}
        </p>
    </div>
 <div class="flex justify-start text-arial text-sm text-green-900">
<div> ( {{ text.reference }} )</div>
 </div>
  </div>
<button
            class="bg-[#b08b4f] text-white px-4 py-2 rounded-full hover:bg-[#9b7a44] transition text-sm"
            @click="readThis(text)"
          >
            Read
          </button>
</div>
</div>
</section>



<section class="max-w-6xl m-auto px-6 sm:px-10 py-16 flex-1 text-center" v-if="store.language == 'english'">
<h3 class="text-2xl sm:text-3xl  font-semibold text-green-900 mb-10">Timeless Wisdom from the Qur’an</h3>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" >
<div 
v-for="(text, index) in homePageTopics" :key="index"
class="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 cursor-pointer"
>
<h4 class="font-semibold text-lg mb-2">
{{ text.issue }}
</h4>
<div  v-for="(text , index) in text.ayats" :key="index">
    <div>
        <p class="text-sm text-gray-800 mb-4 font-serif">
        {{ text.text}}
        </p>
    </div>
 <div class="flex justify-end text-arial text-sm text-green-900">
<div> ( {{ text.reference }} )</div>
 </div>
  </div>
<button
            class="bg-[#b08b4f] text-white px-4 py-2 rounded-full hover:bg-[#9b7a44] transition text-sm"
            @click="readThis(text)"
          >
            Read More
          </button>
</div>
</div>
</section>
<section class="max-w-6xl m-auto px-6 sm:px-10 py-16 flex-1 text-center font-sans" v-if="store.language == 'urdu'">
<h3 class="text-2xl sm:text-3xl  font-semibold text-green-900 mb-10">قرآن کی لازوال حکمتیں</h3>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" >
<div 
v-for="(text, index) in homePageTopicsUrdu" :key="index"
class="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 cursor-pointer"
>
<h4 class="font-semibold text-lg mb-2">
{{ text.issue }}
</h4>
<div  v-for="(text , index) in text.ayats" :key="index">
    <div>
        <p class="text-sm text-gray-800 mb-4 font-serif">
        {{ text.text}}
        </p>
    </div>
 <div class="flex justify-end text-arial text-sm text-green-900">
<div> ( {{ text.reference }} )</div>
 </div>
  </div>
<button
            class="bg-[#b08b4f] text-white px-4 py-2 rounded-full hover:bg-[#9b7a44] transition text-sm"
            @click="readThis(text)"
          >
            Read More
          </button>
</div>
</div>
</section>












<div
  v-if="makeVisible"
  class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md p-4"
>
  <!-- Content area -->
  <div class="bg-white rounded-2xl shadow-lg max-w-3xl w-full p-6 overflow-y-auto max-h-[80vh]">
    <h2 class="text-3xl font-bold mb-4 text-center font-italic  text-amber-600 text-shadow-2xs text-shadow-amber-800">
       Sign of Truth
    </h2>

    <div class="border-b border-gray-200 py-4 font-sans">
      <h3 class="text-xl font-semibold text-gray-900 mb-2">
        {{ selected.issue }}
      </h3>

      <p class="text-gray-800 mb-2">
        {{ selected.message }} <br>
        {{ selected.ayats.reference }}
      </p>
      <p class="text-green-700 mb-2">
        {{ selected.theme }}
      </p>

      <ul class="list-disc list-inside text-gray-600 mb-2">
        <li
          v-for="(line, i) in selected.ayats"
          :key="i"
        >
        <b>  {{ line.text }} </b>
        <p class="text-sm text-gray-500">
        Ref:( {{ line.reference }} )
      </p>
        </li>
      </ul>

      
    </div>

    <button
      @click="makeVisible = false"
      class="mt-6 w-full py-2 bg-gradient-to-r from-amber-400 text-white rounded-lg to-amber-600"
    >
      Close
    </button>
  </div>
</div>



<fooBar/>
</div>
</template>

<script setup>
import { onMounted  , ref, watch} from 'vue';
const store = useAppStore();
import NavBar from './NavBar.vue';
import fooBar from './fooBar.vue';
import { useAppStore } from '../appStore';
const isEnglish = ref(true)
watch(isEnglish,(newVal , oldVal )=>{
  console.log(newVal)
  isEnglish.value = newVal
})
onMounted(()=>{
  const lang = localStorage.getItem("language");
  if(JSON.parse(lang) === "urdu"){
    isEnglish.value = false
  }
  else{
    isEnglish.value = true
  }
})

// ///////////////////
const antiSectarianismUrdu = [
  {
    issue: "اسلام میں اتحاد — فرقہ واریت کی مذمت",
    message:
      "قرآن مجید امت کے ٹکڑوں میں بٹنے کی سختی سے مذمت کرتا ہے۔ مسلمانوں کو حکم دیا گیا ہے کہ وہ اللہ کی رسی کو مضبوطی سے تھامے رہیں اور اختلافات سے بچیں۔",
    ayats: [
      {
        text: "اور تم سب مل کر اللہ کی رسی کو مضبوطی سے پکڑ لو اور فرقہ فرقہ نہ بنو۔",
        reference: "آل عمران 3:103",
      },
      {
        text: "بیشک جن لوگوں نے اپنے دین کو ٹکڑے ٹکڑے کر دیا اور فرقے بن گئے، تمہارا ان سے کوئی تعلق نہیں۔ ان کا معاملہ اللہ ہی کے سپرد ہے، پھر وہ انہیں ان کے اعمال کی خبر دے گا۔",
        reference: "الانعام 6:159",
      },
      {
        text: "اور ان لوگوں جیسے نہ بن جانا جو واضح دلائل آنے کے بعد بھی آپس میں بٹ گئے اور اختلاف کرنے لگے، انہی کے لیے بڑا عذاب ہے۔",
        reference: "آل عمران 3:105",
      },
    ],
    theme: "اسلام اتحاد کی دعوت دیتا ہے، تفرقہ کی نہیں۔",
  },
  {
    issue: "فرقہ واریت — امت کی کمزوری کا باعث",
    message:
      "اختلاف اور تفرقہ امت مسلمہ کو کمزور کرتا ہے اور اس کی اصل دعوت سے دور کر دیتا ہے۔ قرآن صبر، اتحاد اور اطاعت کی تلقین کرتا ہے۔",
    ayats: [
      {
        text: "اور اللہ اور اس کے رسول کی اطاعت کرو اور آپس میں جھگڑا نہ کرو ورنہ تم کمزور پڑ جاؤ گے اور تمہاری ہوا اکھڑ جائے گی۔ صبر سے کام لو، بے شک اللہ صبر کرنے والوں کے ساتھ ہے۔",
        reference: "الانفال 8:46",
      },
      {
        text: "بے شک یہ تمہاری امت ایک ہی امت ہے اور میں تمہارا رب ہوں، پس میری عبادت کرو۔",
        reference: "الانبیاء 21:92",
      },
    ],
    theme: "اختلاف ایمان اور اجتماعی قوت کو کمزور کرتا ہے۔",
  },
  {
    issue: "صراطِ مستقیم — فرقہ پرستی سے پاک راستہ",
    message:
      "قرآن مسلمانوں کو اللہ کے سیدھے راستے پر چلنے کی دعوت دیتا ہے اور ان راہوں سے بچنے کا حکم دیتا ہے جو انہیں حق سے جدا کر دیتی ہیں۔",
    ayats: [
      {
        text: "اور بیشک یہ میرا سیدھا راستہ ہے، سو اسی پر چلو، اور دوسری راہوں پر نہ چلو کہ وہ تمہیں اس کے راستے سے جدا کر دیں۔ یہی وہ نصیحت ہے جو اس نے تمہیں کی ہے تاکہ تم پرہیزگار بنو۔",
        reference: "الانعام 6:153",
      },
      {
        text: "اس نے تمہیں چن لیا ہے اور دین میں تم پر کوئی تنگی نہیں رکھی — یہ تمہارے باپ ابراہیم کا دین ہے۔ اسی نے تمہارا نام پہلے ہی مسلمان رکھا۔",
        reference: "الحج 22:78",
      },
    ],
    theme: "قرآن اسلام کو ایک ہی راہ قرار دیتا ہے — فرقوں میں بٹنے سے منع کرتا ہے۔",
  },
];

 const antiSectarianismEnglish = [
  {
    issue: "Unity in Islam — A Condemnation of Sectarianism",
    message:
      "The Qur’an strongly condemns dividing the Ummah into sects. Believers are commanded to remain united under the banner of Tawheed and obedience to Allah and His Messenger.",
    ayats: [
      {
        text: "And hold firmly to the rope of Allah all together and do not become divided.",
        reference: "Aal-E-Imran 3:103",
      },
      {
        text: "Indeed, those who have divided their religion and become sects — you have nothing to do with them. Their affair is only with Allah; then He will inform them about what they used to do.",
        reference: "Al-An’am 6:159",
      },
      {
        text: "Be not like those who became divided and differed after the clear proofs had come to them. And for them is a great punishment.",
        reference: "Aal-E-Imran 3:105",
      },
    ],
    theme: "Islam calls for unity, not division.",
  },
  {
    issue: "Sectarianism — A Source of Weakness",
    message:
      "Division among Muslims weakens the Ummah and distracts it from its divine mission. The Qur’an urges steadfastness and unity.",
    ayats: [
      {
        text: "And obey Allah and His Messenger and do not dispute and thus lose courage and your strength would depart; and be patient. Indeed, Allah is with the patient.",
        reference: "Al-Anfal 8:46",
      },
      {
        text: "Indeed, this Ummah of yours is one Ummah, and I am your Lord, so worship Me.",
        reference: "Al-Anbiya 21:92",
      },
    ],
    theme: "Disunity weakens faith and the collective strength of believers.",
  },
  {
    issue: "The Straight Path — Free from Sectarian Bias",
    message:
      "The Qur’an calls Muslims to follow the straight path of divine truth and avoid sectarian allegiance that distances them from revelation.",
    ayats: [
      {
        text: "And indeed, this is My straight path, so follow it; and do not follow other ways, for you will be separated from His way. This He has instructed you that you may become righteous.",
        reference: "Al-An’am 6:153",
      },
      {
        text: "He has chosen you and has not placed upon you in the religion any difficulty — the religion of your father Abraham. He named you 'Muslims' before.",
        reference: "Al-Hajj 22:78",
      },
    ],
    theme: "The Qur’an defines Islam as one path — not divided by sects or factions.",
  },
];


const tawheedIssuesEnglish = [
  {
    id: 1,
    issue: "Rejection of Idol and Grave Worship",
    message: "Worship belongs to Allah alone — He has no partner or equal.",
    ayats: [
      {
        text: "And your God is one God. There is no deity except Him, the Most Compassionate, the Most Merciful.",
        reference: "Surah Al-Baqarah 2:163"
      },
      {
        text: "And We certainly sent into every nation a messenger, [saying], ‘Worship Allah and avoid false gods.’",
        reference: "Surah An-Nahl 16:36"
      },
      {
        text: "And the mosques are for Allah [alone], so do not invoke anyone along with Allah.",
        reference: "Surah Al-Jinn 72:18"
      },
      {
        text: "Say: I do not worship what you worship.",
        reference: "Surah Al-Kafirun 109:2"
      }
    ],
    theme: "The Qur’an calls to pure monotheism — that worship, prayer, help, and fear should be directed only to Allah, not to any creation, grave, or idol."
  },
  {
    id: 2,
    issue: "Shirk and Its Consequences",
    message: "Shirk (associating partners with Allah) is the greatest sin, which Allah does not forgive.",
    ayats: [
      {
        text: "Indeed, Allah does not forgive association with Him, but He forgives what is less than that for whom He wills.",
        reference: "Surah An-Nisa 4:48"
      },
      {
        text: "Whoever associates others with Allah has certainly gone far astray.",
        reference: "Surah An-Nisa 4:116"
      },
      {
        text: "Say, ‘Do you worship besides Allah that which cannot harm or benefit you?’",
        reference: "Surah Az-Zumar 39:38"
      },
      {
        text: "And We certainly sent Noah to his people, and he said, ‘O my people, worship Allah; you have no deity other than Him.’",
        reference: "Surah Al-A‘raf 7:59"
      }
    ],
    theme: "The Qur’an makes clear that shirk is the gravest sin, leading mankind toward destruction and divine punishment."
  },
  {
    id: 3,
    issue: "The Message of Tawheed and the Prophets’ Call",
    message: "The core message of all Prophets was one — worship Allah alone.",
    ayats: [
      {
        text: "And We sent not before you any messenger except that We revealed to him that there is no deity except Me, so worship Me.",
        reference: "Surah Al-Anbiya 21:25"
      },
      {
        text: "Allah is the Creator of the heavens and the earth, and He is over all things in control.",
        reference: "Surah Az-Zumar 39:62"
      },
      {
        text: "O mankind, worship your Lord, who created you and those before you, that you may become righteous.",
        reference: "Surah Al-Baqarah 2:21"
      },
      {
        text: "And [remember] when Abraham said, ‘Indeed, I have turned my face toward He who created the heavens and the earth, inclining toward truth, and I am not of those who associate others with Allah.’",
        reference: "Surah Al-An‘am 6:79"
      }
    ],
    theme: "All messengers called mankind to the same truth — worship Allah alone and avoid all forms of shirk."
  }
];


const tawheedIssuesUrdu = [
  {
    id: 1,
    issue: "بُت پرستی اور قبر پرستی کی تردید",
    message: "عبادت صرف اللہ کے لیے ہے، نہ کوئی شریک ہے نہ ہمسر۔",
    ayats: [
      {
        text: "اور تمہارے معبود ایک ہی معبود ہیں، اس کے سوا کوئی معبود نہیں، وہی رحمٰن اور رحیم ہے۔",
        reference: "سورۃ البقرہ 2:163"
      },
      {
        text: "اور یقیناً ہم نے ہر امت میں ایک رسول بھیجا کہ اللہ کی عبادت کرو اور طاغوت سے بچو۔",
        reference: "سورۃ النحل 16:36"
      },
      {
        text: "اور مسجدیں اللہ ہی کے لیے ہیں، پس اللہ کے ساتھ کسی کو نہ پکارو۔",
        reference: "سورۃ الجن 72:18"
      },
      {
        text: "کہہ دو: میں تمہاری عبادت نہیں کرتا جن کی تم عبادت کرتے ہو۔",
        reference: "سورۃ الکافرون 109:2"
      }
    ],
    theme: "قرآن خالص توحید کی دعوت دیتا ہے — کہ عبادت، دعا، مدد اور خوف صرف اللہ کے لیے ہو، نہ کہ کسی مخلوق، قبر یا بُت کے لیے۔"
  },
  {
    id: 2,
    issue: "شِرک اور اس کے نتائج",
    message: "شرک سب سے بڑا گناہ ہے جسے اللہ معاف نہیں کرتا۔",
    ayats: [
      {
        text: "بیشک اللہ اس بات کو نہیں بخشتا کہ اس کے ساتھ کسی کو شریک کیا جائے، اور اس کے سوا جسے چاہے بخش دیتا ہے۔",
        reference: "سورۃ النساء 4:48"
      },
      {
        text: "اور جو شخص اللہ کے ساتھ کسی کو شریک ٹھہرائے، تو وہ گمراہی میں بہت دور نکل گیا۔",
        reference: "سورۃ النساء 4:116"
      },
      {
        text: "ان سے کہو، کیا تم اللہ کے سوا ان کی عبادت کرتے ہو جو نہ نقصان پہنچا سکتے ہیں نہ نفع؟",
        reference: "سورۃ الزمر 39:38"
      },
      {
        text: "اور بیشک ہم نے نوح کو ان کی قوم کی طرف بھیجا، پس اس نے کہا: اے میری قوم! اللہ کی عبادت کرو، اس کے سوا تمہارا کوئی معبود نہیں۔",
        reference: "سورۃ الاعراف 7:59"
      }
    ],
    theme: "قرآن واضح کرتا ہے کہ شرک سب سے سنگین گناہ ہے، جو انسان کو ہلاکت اور عذاب کی طرف لے جاتا ہے۔"
  },
  {
    id: 3,
    issue: "توحید کی دعوت اور انبیاء کا پیغام",
    message: "تمام انبیاء کا بنیادی پیغام ایک ہی تھا — صرف اللہ کی عبادت۔",
    ayats: [
      {
        text: "اور ہم نے آپ سے پہلے کوئی رسول نہیں بھیجا مگر یہی وحی کی کہ میرے سوا کوئی معبود نہیں، پس میری ہی عبادت کرو۔",
        reference: "سورۃ الانبیاء 21:25"
      },
      {
        text: "اللہ وہ ہے جس نے آسمانوں اور زمین کو پیدا کیا، اور ہر چیز پر غالب ہے۔",
        reference: "سورۃ الزمر 39:62"
      },
      {
        text: "اے لوگو! اپنے رب کی عبادت کرو جس نے تمہیں اور تم سے پہلے لوگوں کو پیدا کیا تاکہ تم متقی بن جاؤ۔",
        reference: "سورۃ البقرہ 2:21"
      },
      {
        text: "اور ابراہیم نے کہا: میں نے اپنا رخ اس کی طرف کر لیا جس نے آسمانوں اور زمین کو پیدا کیا، یکسو ہو کر، اور میں مشرکوں میں سے نہیں۔",
        reference: "سورۃ الانعام 6:79"
      }
    ],
    theme: "تمام رسولوں نے انسان کو ایک ہی بات کی طرف بلایا — کہ صرف اللہ کی عبادت کرو، اور ہر قسم کے شرک سے بچو۔"
  }
];



const tauheedAndPropheticSacrificeUrdu = [
  {
    id: 1,
    issue: "توحید — ایمان کی بنیاد",
    message: "اللہ ایک ہے، اس کے سوا کوئی معبود نہیں۔",
    ayats: [
      {
        text: "اور تمہارا معبود ایک ہی معبود ہے، اس کے سوا کوئی عبادت کے لائق نہیں، وہی رحمٰن اور رحیم ہے۔",
        reference: "سورۃ البقرہ 2:163"
      },
      {
        text: "کہہ دو، وہ اللہ ایک ہے، اللہ بے نیاز ہے۔",
        reference: "سورۃ الاخلاص 112:1-2"
      },
      {
        text: "اللہ کے ساتھ کسی کو شریک نہ ٹھہراؤ، بے شک شرک ایک بڑا ظلم ہے۔",
        reference: "سورۃ لقمان 31:13"
      },
      {
        text: "اور ہم نے ہر امت میں ایک رسول بھیجا کہ اللہ کی عبادت کرو اور طاغوت سے بچو۔",
        reference: "سورۃ النحل 16:36"
      }
    ],
    theme: "توحید اسلام کا مرکزی پیغام ہے۔ تمام انبیاء نے انسانوں کو ایک ہی اللہ کی عبادت کی دعوت دی اور شرک سے روکا۔"
  },
  {
    id: 2,
    issue: "حضرت ابراہیمؑ — توحید کی خاطر قربانی کی علامت",
    message: "ابراہیمؑ نے ہر آزمائش میں اللہ کی توحید پر ثابت قدمی دکھائی۔",
    ayats: [
      {
        text: "جب ان کے رب نے کہا، 'مسلم ہو جاؤ'، تو انہوں نے کہا، 'میں رب العالمین کے لیے مسلم ہوں۔'",
        reference: "سورۃ البقرہ 2:131"
      },
      {
        text: "انہوں نے کہا: میں ان چیزوں سے بیزار ہوں جنہیں تم پوجتے ہو، میں نے اپنا رخ اس ذات کی طرف کیا جس نے آسمان و زمین کو پیدا کیا۔",
        reference: "سورۃ الانعام 6:79"
      },
      {
        text: "انہوں نے اپنے بیٹے سے کہا: اے میرے بیٹے! میں خواب میں دیکھتا ہوں کہ میں تجھے قربان کر رہا ہوں۔",
        reference: "سورۃ الصافات 37:102"
      },
      {
        text: "ہم نے کہا: اے ابراہیم! تم نے خواب کو سچا کر دکھایا۔",
        reference: "سورۃ الصافات 37:104-105"
      }
    ],
    theme: "حضرت ابراہیمؑ نے توحید کے لیے اپنی جان، گھر، اور اولاد تک قربان کر دی — ان کی قربانی خالص ایمان کی معراج ہے۔"
  },
  {
    id: 3,
    issue: "حضرت موسیٰؑ — ظلم کے مقابل توحید کا پیغام",
    message: "موسیٰؑ نے فرعون کے ظلم کے باوجود اللہ کی وحدانیت کا اعلان کیا۔",
    ayats: [
      {
        text: "جاؤ فرعون کے پاس، بے شک وہ سرکش ہو گیا ہے۔",
        reference: "سورۃ طٰہٰ 20:24"
      },
      {
        text: "موسیٰؑ نے کہا: اے فرعون! میں رب العالمین کا رسول ہوں۔",
        reference: "سورۃ الاعراف 7:104"
      },
      {
        text: "ہم نے موسیٰؑ کو اپنی نشانیوں کے ساتھ بھیجا کہ اپنی قوم کو اندھیروں سے نکالو روشنی کی طرف۔",
        reference: "سورۃ ابراہیم 14:5"
      },
      {
        text: "موسیٰؑ نے کہا: اگر تم اور جو سب زمین میں ہیں، سب منکر ہو جائیں تو بھی اللہ بے نیاز اور قابلِ تعریف ہے۔",
        reference: "سورۃ ابراہیم 14:8"
      }
    ],
    theme: "حضرت موسیٰؑ نے توحید کے لیے ظالم حکمران کا سامنا کیا اور اپنی قوم کو شرک و غلامی سے آزاد کیا۔"
  },
  {
    id: 4,
    issue: "حضرت نوحؑ — صبر و دعوت کا عظیم نمونہ",
    message: "نوحؑ نے صدیوں تک اپنی قوم کو ایک اللہ کی عبادت کی دعوت دی۔",
    ayats: [
      {
        text: "بیشک ہم نے نوحؑ کو ان کی قوم کی طرف بھیجا: اپنی قوم کو خبردار کرو۔",
        reference: "سورۃ نوح 71:1"
      },
      {
        text: "میں تمہارے لیے واضح طور پر خبردار کرنے والا ہوں کہ صرف اللہ کی عبادت کرو۔",
        reference: "سورۃ ہود 11:25-26"
      },
      {
        text: "نوحؑ نے کہا: اے میرے رب! میں نے اپنی قوم کو دن رات بلایا۔",
        reference: "سورۃ نوح 71:5"
      },
      {
        text: "انہوں نے کہا: اے میری قوم! میں تمہارے لیے واضح پیغام لایا ہوں۔",
        reference: "سورۃ الاعراف 7:61-62"
      }
    ],
    theme: "حضرت نوحؑ نے طویل عرصہ تک استقامت کے ساتھ توحید کی دعوت دی، باوجود اس کے کہ قوم نے انکار اور تمسخر کیا۔"
  },
  {
    id: 5,
    issue: "حضرت محمد ﷺ — آخری رسول اور توحید کا کامل پیغام",
    message: "رسولِ اکرم ﷺ نے توحید کی خاطر ظلم، بائیکاٹ، ہجرت اور جہاد سب برداشت کیا۔",
    ayats: [
      {
        text: "کہہ دو، میرا رب ایک ہی ہے، اسی کی عبادت کرو۔",
        reference: "سورۃ الانبیاء 21:108"
      },
      {
        text: "تو ثابت قدم رہو جیسا تمہیں حکم دیا گیا ہے، اور ان کی خواہشات کی پیروی نہ کرو۔",
        reference: "سورۃ الشوریٰ 42:15"
      },
      {
        text: "اور وہ لوگ جو ایمان لائے اور اللہ پر بھروسہ رکھتے ہیں۔",
        reference: "سورۃ العنکبوت 29:59"
      },
      {
        text: "تم پر تمہارے رب کا فضل بہت بڑا ہے، اگرچہ لوگ انکار کرتے ہیں۔",
        reference: "سورۃ النحل 16:83"
      }
    ],
    theme: "نبی ﷺ نے تمام مصائب کے باوجود توحید کا پیغام قائم رکھا — آپ کی سیرت صبر، محبت، اور یقین کا عملی مظہر ہے۔"
  }
];


const tauheedAndPropheticSacrificeEnglish = [
  {
    id: 1,
    issue: "Tawheed — The Foundation of Faith",
    message: "Allah is One; there is no deity worthy of worship except Him.",
    ayats: [
      {
        text: "And your God is One God. There is no deity except Him, the Most Compassionate, the Most Merciful.",
        reference: "Surah Al-Baqarah 2:163"
      },
      {
        text: "Say, He is Allah, the One. Allah, the Eternal Refuge.",
        reference: "Surah Al-Ikhlas 112:1-2"
      },
      {
        text: "Do not associate anything with Allah. Indeed, associating partners with Him is a great injustice.",
        reference: "Surah Luqman 31:13"
      },
      {
        text: "And We certainly sent into every nation a messenger, saying, ‘Worship Allah and avoid false gods.’",
        reference: "Surah An-Nahl 16:36"
      }
    ],
    theme: "Tawheed (Oneness of Allah) is the central message of Islam. Every Prophet called humanity to worship Allah alone and to abandon all forms of idolatry."
  },
  {
    id: 2,
    issue: "Prophet Ibrahim (Abraham) — The Symbol of Sacrifice for Tawheed",
    message: "Ibrahim (AS) stood firm upon the Oneness of Allah through every trial and sacrifice.",
    ayats: [
      {
        text: "When his Lord said to him, ‘Submit,’ he said, ‘I have submitted to the Lord of the worlds.’",
        reference: "Surah Al-Baqarah 2:131"
      },
      {
        text: "He said, ‘Indeed, I have turned my face toward Him who created the heavens and the earth, inclining toward truth, and I am not of those who associate others with Allah.’",
        reference: "Surah Al-An’am 6:79"
      },
      {
        text: "He said, ‘O my son! Indeed, I have seen in a dream that I must sacrifice you, so see what you think.’",
        reference: "Surah As-Saffat 37:102"
      },
      {
        text: "We called out to him, ‘O Ibrahim! You have fulfilled the vision.’",
        reference: "Surah As-Saffat 37:104-105"
      }
    ],
    theme: "Prophet Ibrahim (AS) sacrificed his home, his people, and even his beloved son for the sake of Allah’s Oneness — his life stands as the ultimate model of pure faith and surrender."
  },
  {
    id: 3,
    issue: "Prophet Musa (Moses) — Preaching Tawheed Amidst Tyranny",
    message: "Musa (AS) proclaimed Allah’s Oneness before the most powerful tyrant of his time.",
    ayats: [
      {
        text: "Go to Pharaoh; indeed, he has transgressed all bounds.",
        reference: "Surah Taha 20:24"
      },
      {
        text: "Musa said, ‘O Pharaoh! I am a messenger from the Lord of the worlds.’",
        reference: "Surah Al-A’raf 7:104"
      },
      {
        text: "And We certainly sent Musa with Our signs, [saying], ‘Bring out your people from darkness into light.’",
        reference: "Surah Ibrahim 14:5"
      },
      {
        text: "Musa said, ‘If you and all who are on the earth were to disbelieve, indeed, Allah is Free of need, Praiseworthy.’",
        reference: "Surah Ibrahim 14:8"
      }
    ],
    theme: "Prophet Musa (AS) stood against oppression and falsehood, delivering the message of Tawheed to Pharaoh’s court and guiding his people from the darkness of servitude to the light of divine truth."
  },
  {
    id: 4,
    issue: "Prophet Nuh (Noah) — The Model of Patience and Perseverance",
    message: "Nuh (AS) called his people to worship Allah alone for centuries with unshakable patience.",
    ayats: [
      {
        text: "Indeed, We sent Nuh to his people, saying: ‘Warn your people before a painful punishment comes upon them.’",
        reference: "Surah Nuh 71:1"
      },
      {
        text: "He said, ‘O my people! Worship Allah; you have no deity other than Him.’",
        reference: "Surah Hud 11:25-26"
      },
      {
        text: "He said, ‘My Lord! Indeed, I invited my people night and day.’",
        reference: "Surah Nuh 71:5"
      },
      {
        text: "He said, ‘O my people! I am to you a clear warner.’",
        reference: "Surah Al-A’raf 7:61-62"
      }
    ],
    theme: "Prophet Nuh (AS) spent centuries calling his people to Tawheed with patience and compassion, even when faced with rejection, mockery, and hardship."
  },
  {
    id: 5,
    issue: "Prophet Muhammad ﷺ — The Final Messenger of Tawheed",
    message: "The Prophet ﷺ endured persecution, exile, and struggle to establish pure monotheism.",
    ayats: [
      {
        text: "Say, ‘My Lord is only One Lord; so worship Him alone.’",
        reference: "Surah Al-Anbiya 21:108"
      },
      {
        text: "So remain steadfast as you have been commanded, and do not follow their desires.",
        reference: "Surah Ash-Shura 42:15"
      },
      {
        text: "And those who believe and put their trust in Allah.",
        reference: "Surah Al-Ankabut 29:59"
      },
      {
        text: "And indeed, your Lord is full of bounty to mankind, but most of them are ungrateful.",
        reference: "Surah An-Nahl 16:83"
      }
    ],
    theme: "The Prophet Muhammad ﷺ upheld the message of Tawheed through patience, love, and courage. His life reflects unwavering devotion to Allah and mercy to all creation."
  }
];




const sacrificeAndJihadUrdu = [
  {
    id: 1,
    issue: "قربانی فی سبیل اللہ",
    message: "اللہ کی رضا کے لیے جان و مال قربان کرنا مومن کی شان ہے۔",
    ayats: [
      {
        text: "کہہ دو! بے شک میری نماز، میری قربانی، میری زندگی اور میری موت سب اللہ رب العالمین کے لیے ہیں۔",
        reference: "سورۃ الانعام 6:162"
      },
      {
        text: "تم نیکی کو نہیں پا سکتے جب تک اپنی پسندیدہ چیزوں میں سے اللہ کی راہ میں خرچ نہ کرو۔",
        reference: "سورۃ آل عمران 3:92"
      },
      {
        text: "اللہ ان کے گوشت اور خون کو نہیں پاتا بلکہ تمہارا تقویٰ پاتا ہے۔",
        reference: "سورۃ الحج 22:37"
      },
      {
        text: "اور ہم نے قربانی کے جانور تمہارے لیے اللہ کی نشانیوں میں سے بنائے ہیں۔",
        reference: "سورۃ الحج 22:36"
      }
    ],
    theme: "قرآن قربانی کو بندگی، شکرگزاری اور تقویٰ کا مظہر قرار دیتا ہے۔ مومن اپنی پسندیدہ چیز بھی اللہ کی راہ میں قربان کرتا ہے۔"
  },
  {
    id: 2,
    issue: "جہاد فی سبیل اللہ کا مفہوم",
    message: "جہاد صرف جنگ نہیں بلکہ حق کے لیے ہر جدوجہد ہے۔",
    ayats: [
      {
        text: "اور ان سے قرآن کے ذریعے جہاد کرو، ایک عظیم جہاد۔",
        reference: "سورۃ الفرقان 25:52"
      },
      {
        text: "اور جو لوگ ہمارے راستے میں جہاد کرتے ہیں، ہم انہیں اپنی راہیں ضرور دکھائیں گے۔",
        reference: "سورۃ العنکبوت 29:69"
      },
      {
        text: "پس اللہ سے ڈرو اور اس کی راہ میں اپنے مالوں اور جانوں سے جہاد کرو۔",
        reference: "سورۃ التوبہ 9:41"
      },
      {
        text: "جو شخص اللہ کی راہ میں کوشش کرتا ہے وہ اپنے ہی فائدے کے لیے کرتا ہے۔",
        reference: "سورۃ العنکبوت 29:6"
      }
    ],
    theme: "قرآن کے مطابق جہاد ہر اُس جدوجہد کا نام ہے جو حق، عدل، اور ایمان کے قیام کے لیے کی جائے — چاہے علم، عمل، یا دفاع کے ذریعے۔"
  },
  {
    id: 3,
    issue: "جان کی قربانی فی سبیل اللہ",
    message: "شہادت اعلاءِ کلمۃ الحق کی سب سے بلند مثال ہے۔",
    ayats: [
      {
        text: "اور جو لوگ اللہ کی راہ میں قتل کیے گئے انہیں مردہ مت کہو، بلکہ وہ زندہ ہیں۔",
        reference: "سورۃ آل عمران 3:169"
      },
      {
        text: "اللہ نے مومنوں سے ان کی جانیں اور ان کے مال جنت کے بدلے خرید لیے ہیں۔",
        reference: "سورۃ التوبہ 9:111"
      },
      {
        text: "اور جو اللہ کی راہ میں مارے جائیں، اللہ ان کے اعمال کو ضائع نہیں کرتا۔",
        reference: "سورۃ محمد 47:4"
      },
      {
        text: "اللہ کے راستے میں قتل ہونے والوں کو زندہ سمجھو، وہ اپنے رب کے پاس رزق پاتے ہیں۔",
        reference: "سورۃ آل عمران 3:170"
      }
    ],
    theme: "قرآن کے نزدیک جان کی قربانی محض موت نہیں بلکہ ابدی زندگی کی معراج ہے۔ یہ ایمان اور اخلاص کی انتہا ہے۔"
  },
  {
    id: 4,
    issue: "مال کی قربانی اور انفاق فی سبیل اللہ",
    message: "اللہ کی راہ میں خرچ کرنا ایمان کی پہچان ہے۔",
    ayats: [
      {
        text: "جو کچھ تم خرچ کرو گے اللہ اس کا بدلہ دے گا اور وہ سب کچھ جاننے والا ہے۔",
        reference: "سورۃ سبا 34:39"
      },
      {
        text: "جو لوگ اللہ کی راہ میں اپنے مال خرچ کرتے ہیں، ان کی مثال ایک دانے کی ہے جو سات بالیاں نکالے۔",
        reference: "سورۃ البقرہ 2:261"
      },
      {
        text: "جو کچھ تم اللہ کی راہ میں خرچ کرو گے، وہ تمہیں پورا دیا جائے گا اور تم پر ظلم نہیں کیا جائے گا۔",
        reference: "سورۃ الانفال 8:60"
      },
      {
        text: "جو اللہ کی راہ میں اپنا مال دیتا ہے تاکہ پاکیزگی حاصل کرے۔",
        reference: "سورۃ اللیل 92:18–19"
      }
    ],
    theme: "قرآن مال کی قربانی کو روح کی تطہیر اور اجتماعی فلاح کا ذریعہ قرار دیتا ہے۔ انفاق دراصل مومن کی سخاوت اور ایثار کا مظہر ہے۔"
  },
  {
    id: 5,
    issue: "صبر، استقامت اور جہاد کا تعلق",
    message: "جہاد بغیر صبر اور ثابت قدمی کے ممکن نہیں۔",
    ayats: [
      {
        text: "اے ایمان والو! صبر اور نماز سے مدد لو، بے شک اللہ صبر کرنے والوں کے ساتھ ہے۔",
        reference: "سورۃ البقرہ 2:153"
      },
      {
        text: "اور ہم ضرور تمہیں آزمائیں گے خوف، بھوک، مال اور جانوں کے نقصان سے۔",
        reference: "سورۃ البقرہ 2:155"
      },
      {
        text: "اور جب تمہارے مقابلے پر کوئی مصیبت آئے تو ثابت قدم رہو، بے شک یہی کامیابی ہے۔",
        reference: "سورۃ آل عمران 3:200"
      },
      {
        text: "اللہ صبر کرنے والوں کو پسند کرتا ہے۔",
        reference: "سورۃ آل عمران 3:146"
      }
    ],
    theme: "قرآن کے نزدیک جہاد صرف جسمانی نہیں بلکہ روحانی جدوجہد بھی ہے — جس کی بنیاد صبر، یقین اور عزم پر ہے۔"
  }
];



const modernIssuesUrdu = [
  {
    id: 1,
    issue: "انسانی وقار اور اس کا فرض",
    message: "انسان زمین کے خلیفہ اور محافظ ہیں۔",
    ayats: [
      {
        text: "اور زمین میں اصلاح کے بعد فساد نہ پھیلاؤ۔",
        reference: "سورۃ الاعراف 7:56"
      },
      {
        text: "وہی ہے جس نے تمہیں زمین پر جانشین بنایا۔",
        reference: "سورۃ فاطر 35:39"
      },
      {
        text: "اللہ کے رزق سے کھاؤ اور پیو، اور زمین میں فساد نہ پھیلاؤ۔",
        reference: "سورۃ البقرہ 2:60"
      },
      {
        text: "خشکی اور تری میں فساد ظاہر ہو گیا ہے، انسانوں کے اعمال کے سبب۔",
        reference: "سورۃ الروم 30:41"
      }
    ],
    theme: "قرآن پاک پائیداری، توازن، اور ذمہ داری کو فروغ دیتا ہے — جو آج کے ماحولیاتی مسائل کے حل کے لیے بنیادی ہیں۔"
  },
  {
    id: 2,
    issue: "ذہنی صحت، اضطراب اور باطنی سکون",
    message: "حقیقی سکون اللہ کی یاد میں ہے۔",
    ayats: [
      {
        text: "یقیناً اللہ کے ذکر سے دلوں کو سکون ملتا ہے۔",
        reference: "سورۃ الرعد 13:28"
      },
      {
        text: "جو اللہ پر بھروسہ کرے، تو وہی اس کے لیے کافی ہے۔",
        reference: "سورۃ الطلاق 65:3"
      },
      {
        text: "صبر کرو، بے شک اللہ نیکوکاروں کے اجر کو ضائع نہیں کرتا۔",
        reference: "سورۃ ہود 11:115"
      },
      {
        text: "پس تم میرا ذکر کرو، میں تمہیں یاد رکھوں گا۔ اور میرا شکر ادا کرو، ناشکری نہ کرو۔",
        reference: "سورۃ البقرہ 2:152"
      }
    ],
    theme: "اضطراب، دباؤ اور غیر یقینی حالات میں قرآن روحانی سکون اور مضبوطی فراہم کرتا ہے۔"
  },
  {
    id: 3,
    issue: "اقتصادی ناانصافی اور عدم مساوات",
    message: "عدل، خیرات اور استحصال کی ممانعت۔",
    ayats: [
      {
        text: "پورا ناپ اور پورا تول عدل کے ساتھ دو۔",
        reference: "سورۃ الانعام 6:152"
      },
      {
        text: "اور ان کے مال میں مانگنے والے اور محروم کا حق ہے۔",
        reference: "سورۃ الذاریات 51:19"
      },
      {
        text: "اور ایک دوسرے کا مال ناجائز طور پر نہ کھاؤ۔",
        reference: "سورۃ البقرہ 2:188"
      },
      {
        text: "خرابی ہے ان کے لیے جو ناپ تول میں کمی کرتے ہیں۔",
        reference: "سورۃ المطففین 83:1–3"
      }
    ],
    theme: "اسلام انصاف، زکوٰۃ اور سود کی ممانعت کے ذریعے معاشی عدل سکھاتا ہے۔"
  },
  {
    id: 4,
    issue: "علم، سائنس اور عقلی غور و فکر",
    message: "علم حاصل کرو اور کائنات پر غور کرو۔",
    ayats: [
      {
        text: "بیشک آسمانوں اور زمین کی پیدائش میں عقل والوں کے لیے نشانیاں ہیں۔",
        reference: "سورۃ آل عمران 3:190"
      },
      {
        text: "کہہ دو، کیا جاننے والے اور نہ جاننے والے برابر ہو سکتے ہیں؟",
        reference: "سورۃ الزمر 39:9"
      },
      {
        text: "پڑھو اپنے رب کے نام سے جس نے پیدا کیا۔",
        reference: "سورۃ العلق 96:1"
      },
      {
        text: "اور اس نے آدم کو تمام چیزوں کے نام سکھائے۔",
        reference: "سورۃ البقرہ 2:31"
      }
    ],
    theme: "قرآن علم، غور و فکر اور تحقیق کی ترغیب دیتا ہے — جو جدید سائنسی ترقی سے ہم آہنگ ہے۔"
  },
  {
    id: 5,
    issue: "انسانی حقوق اور انصاف",
    message: "انصاف پر قائم رہو، خواہ اپنے خلاف ہی کیوں نہ ہو۔",
    ayats: [
      {
        text: "اے ایمان والو! انصاف پر مضبوطی سے قائم رہو، اللہ کے لیے گواہ بنتے ہوئے، اگرچہ اپنے خلاف ہی ہو۔",
        reference: "سورۃ النساء 4:135"
      },
      {
        text: "یقیناً اللہ انصاف، احسان اور قرابت داروں کو دینے کا حکم دیتا ہے۔",
        reference: "سورۃ النحل 16:90"
      },
      {
        text: "اور کسی قوم کی دشمنی تمہیں انصاف سے نہ روکے۔ انصاف کرو، یہی تقویٰ کے قریب تر ہے۔",
        reference: "سورۃ المائدہ 5:8"
      },
      {
        text: "ہم نے اپنے رسولوں کو واضح دلائل کے ساتھ بھیجا تاکہ لوگ انصاف پر قائم رہیں۔",
        reference: "سورۃ الحدید 57:25"
      }
    ],
    theme: "قرآن کا عدل و انصاف پر مبنی نظام جدید انسانی حقوق کی بنیاد فراہم کرتا ہے۔"
  },
  {
    id: 6,
    issue: "خاندانی ٹوٹ پھوٹ اور سماجی اقدار",
    message: "خاندان، محبت اور احترام مقدس ہیں۔",
    ayats: [
      {
        text: "اور ہم نے تمہیں جوڑے جوڑے پیدا کیا۔",
        reference: "سورۃ النبأ 78:8"
      },
      {
        text: "اور ہم نے انسان کو والدین کے ساتھ حسن سلوک کا حکم دیا۔",
        reference: "سورۃ العنکبوت 29:8"
      },
      {
        text: "اور اس کی نشانیوں میں سے یہ ہے کہ اس نے تمہارے لیے تمہی میں سے جوڑے بنائے تاکہ تم ان سے سکون پاؤ۔",
        reference: "سورۃ الروم 30:21"
      },
      {
        text: "اور تیرے رب نے فیصلہ کر دیا کہ اس کے سوا کسی کی عبادت نہ کرو، اور والدین کے ساتھ بھلائی کرو۔",
        reference: "سورۃ الاسراء 17:23"
      }
    ],
    theme: "قرآن خاندانی نظام، باہمی احترام اور اخلاقی اقدار کو بحال کرتا ہے — جو آج کے معاشروں میں کمزور ہو چکے ہیں۔"
  },
  {
    id: 7,
    issue: "زندگی کا مقصد، معنی اور شناخت کا بحران",
    message: "زندگی کا مقصد اللہ کی عبادت اور خدمت ہے۔",
    ayats: [
      {
        text: "اور میں نے جنات اور انسانوں کو صرف اپنی عبادت کے لیے پیدا کیا۔",
        reference: "سورۃ الذاریات 51:56"
      },
      {
        text: "کیا انسان یہ گمان کرتا ہے کہ وہ یوں ہی چھوڑ دیا جائے گا؟",
        reference: "سورۃ القیامہ 75:36"
      },
      {
        text: "کیا تم نے یہ سمجھ رکھا تھا کہ ہم نے تمہیں بےکار پیدا کیا؟",
        reference: "سورۃ المؤمنون 23:115"
      },
      {
        text: "جو نیک عمل کرے گا، ہم اس کے عمل کو ضائع نہیں کریں گے۔",
        reference: "سورۃ الانبیاء 21:94"
      }
    ],
    theme: "قرآن مادہ پرستی اور الجھن کے دور میں زندگی کو مقصد اور سمت عطا کرتا ہے۔"
  }
];

const homePageTopicsUrdu = [
  {
    id: 8,
    issue: "امن، برداشت اور بین المذاہب ہم آہنگی",
    message: "اسلام امن، صبر اور انسانیت کے احترام کا دین ہے۔",
    ayats: [
      {
        text: "اور اگر وہ صلح کی طرف مائل ہوں، تو تم بھی اس کی طرف مائل ہو جاؤ، اور اللہ پر بھروسہ رکھو۔",
        reference: "سورۃ الانفال 8:61"
      },
      {
        text: "اللہ تمہیں ان لوگوں سے منع نہیں کرتا جنہوں نے دین کے بارے میں تم سے جنگ نہیں کی کہ تم ان کے ساتھ نیکی اور انصاف کرو۔",
        reference: "سورۃ الممتحنہ 60:8"
      },
      {
        text: "اور ہم نے تمہیں ایک امتِ وسط (درمیانی امت) بنایا تاکہ تم لوگوں پر گواہ بنو۔",
        reference: "سورۃ البقرہ 2:143"
      }
    ],
    theme: "قرآن امن، انصاف اور برداشت پر مبنی عالمی معاشرتی ہم آہنگی کا پیغام دیتا ہے۔"
  },
  {
    id: 9,
    issue: "شکرگزاری اور قناعت",
    message: "نعمتوں کی قدر اور دل کا اطمینان شکر میں ہے۔",
    ayats: [
      {
        text: "اگر تم شکر ادا کرو گے تو میں تمہیں اور زیادہ دوں گا۔",
        reference: "سورۃ ابراہیم 14:7"
      },
      {
        text: "اور تم اپنے رب کی کون کون سی نعمتوں کو جھٹلاؤ گے؟",
        reference: "سورۃ الرحمن 55:13"
      },
      {
        text: "اور بے شک اللہ شکر گزار بندوں کو جانتا ہے۔",
        reference: "سورۃ آل عمران 3:145"
      }
    ],
    theme: "قرآن انسان کو مادی لالچ سے نکال کر شکر، قناعت اور روحانی سکون کی راہ دکھاتا ہے۔"
  },
  {
    id: 10,
    issue: "عدل و مساواتِ جنس",
    message: "اسلام مرد و عورت دونوں کے لیے عزت، حقوق اور ذمہ داریوں کا متوازن تصور دیتا ہے۔",
    ayats: [
      {
        text: "اور عورتوں کے لیے ویسے ہی حقوق ہیں جیسے مردوں کے ان پر ہیں۔",
        reference: "سورۃ البقرہ 2:228"
      },
      {
        text: "میں تم میں سے کسی عمل کرنے والے کے عمل کو ضائع نہیں کرتا، خواہ مرد ہو یا عورت۔",
        reference: "سورۃ آل عمران 3:195"
      },
      {
        text: "جو نیک عمل کرے، مرد ہو یا عورت، ہم اسے بہتر زندگی عطا کریں گے۔",
        reference: "سورۃ النحل 16:97"
      }
    ],
    theme: "قرآن مساوات، عزت اور کردار کی بنیاد پر معاشرے میں عورت و مرد کی متوازن حیثیت بیان کرتا ہے۔"
  }
];


const homePageTopics = [
  {
    id: 8,
    issue: "Peace, Tolerance & Interfaith Harmony",
    message: "Islam is a religion of peace, patience, and respect for all humanity.",
    ayats: [
      {
        text: "And if they incline to peace, then incline to it also, and rely upon Allah.",
        reference: "Surah Al-Anfal 8:61"
      },
      {
        text: "Allah does not forbid you from those who do not fight you because of religion, from being righteous and just toward them.",
        reference: "Surah Al-Mumtahanah 60:8"
      },
      {
        text: "And thus We have made you a just nation so that you will be witnesses over the people.",
        reference: "Surah Al-Baqarah 2:143"
      }
    ],
    theme: "The Qur’an promotes peace, justice, and coexistence — foundations for global harmony."
  },
  {
    id: 9,
    issue: "Gratitude & Contentment",
    message: "True satisfaction lies in being thankful for Allah’s blessings.",
    ayats: [
      {
        text: "If you are grateful, I will surely increase you [in favor].",
        reference: "Surah Ibrahim 14:7"
      },
      {
        text: "So which of the favors of your Lord will you deny?",
        reference: "Surah Ar-Rahman 55:13"
      },
      {
        text: "Indeed, Allah knows those who are grateful.",
        reference: "Surah Aal Imran 3:145"
      }
    ],
    theme: "The Qur’an shifts the human heart from material greed to gratitude, patience, and spiritual peace."
  },
  {
    id: 10,
    issue: "Gender Justice & Equality",
    message: "Islam grants both men and women dignity, rights, and balanced responsibilities.",
    ayats: [
      {
        text: "And for women are rights similar to those of men, according to what is equitable.",
        reference: "Surah Al-Baqarah 2:228"
      },
      {
        text: "Indeed, I do not allow to be lost the deeds of any worker among you, whether male or female.",
        reference: "Surah Aal Imran 3:195"
      },
      {
        text: "Whoever does righteousness, whether male or female, We will surely cause him to live a good life.",
        reference: "Surah An-Nahl 16:97"
      }
    ],
    theme: "The Qur’an establishes equality, honor, and moral accountability for both men and women."
  }
];


// ////////////////////

const modernIssues = [
  {
    id: 1,
    issue: "Environmental Crisis & Climate Change",
    message: "Humans are caretakers (Khalifah) of the Earth.",
    ayats: [
      {
        text: "And do not cause corruption upon the earth after its reformation.",
        reference: "Surah Al-A‘rāf 7:56"
      },
      {
        text: "He it is Who has made you successors upon the earth.",
        reference: "Surah Fāṭir 35:39"
      },
      {
        text: "Eat and drink from the provision of Allah, and do not commit abuse on the earth, spreading corruption.",
        reference: "Surah Al-Baqarah 2:60"
      },
      {
        text: "Corruption has appeared throughout the land and sea by what the hands of people have earned.",
        reference: "Surah Ar-Rūm 30:41"
      }
    ],
    theme: "The Qur’an promotes sustainability, balance, and responsibility — essential in today’s climate discussions."
  },
  {
    id: 2,
    issue: "Mental Health, Anxiety & Inner Peace",
    message: "True peace comes through remembrance of Allah.",
    ayats: [
      {
        text: "Verily, in the remembrance of Allah do hearts find rest.",
        reference: "Surah Ar-Ra‘d 13:28"
      },
      {
        text: "Whoever relies upon Allah — then He is sufficient for him.",
        reference: "Surah At-Talāq 65:3"
      },
      {
        text: "And be patient, for indeed Allah does not allow the reward of the doers of good to be lost.",
        reference: "Surah Hūd 11:115"
      },
      {
        text: "So remember Me; I will remember you. And be grateful to Me and do not deny Me.",
        reference: "Surah Al-Baqarah 2:152"
      }
    ],
    theme: "Amid depression, stress, and uncertainty, the Qur’an offers spiritual grounding and calm."
  },
  {
    id: 3,
    issue: "Economic Injustice & Inequality",
    message: "Fairness, charity, and prohibition of exploitation.",
    ayats: [
      {
        text: "Give full measure and weight in justice.",
        reference: "Surah Al-An‘ām 6:152"
      },
      {
        text: "And in their wealth there is a right for the beggar and the deprived.",
        reference: "Surah Adh-Dhāriyāt 51:19"
      },
      {
        text: "And do not consume one another’s wealth unjustly or send it in bribery to the rulers.",
        reference: "Surah Al-Baqarah 2:188"
      },
      {
        text: "Woe to those who give less [than due], who when they take a measure from people, take in full; but if they give by measure or weight to them, they cause loss.",
        reference: "Surah Al-Muṭaffifīn 83:1–3"
      }
    ],
    theme: "Islam teaches ethical finance, zakat (charity), and bans interest (riba) — solutions to economic inequality."
  },
  {
    id: 4,
    issue: "Knowledge, Science & Rational Thinking",
    message: "Seek knowledge and reflect upon creation.",
    ayats: [
      {
        text: "Indeed, in the creation of the heavens and the earth… are signs for those of understanding.",
        reference: "Surah Āl-‘Imrān 3:190"
      },
      {
        text: "Say, ‘Are those who know equal to those who do not know?’",
        reference: "Surah Az-Zumar 39:9"
      },
      {
        text: "Read in the name of your Lord who created.",
        reference: "Surah Al-‘Alaq 96:1"
      },
      {
        text: "And He taught Adam the names of all things.",
        reference: "Surah Al-Baqarah 2:31"
      }
    ],
    theme: "The Qur’an encourages curiosity, scientific reflection, and learning — aligning with modern scientific exploration."
  },
  {
    id: 5,
    issue: "Human Rights & Justice",
    message: "Uphold justice, even against yourself.",
    ayats: [
      {
        text: "O you who believe! Stand out firmly for justice, as witnesses to Allah, even though it be against yourselves or parents or relatives.",
        reference: "Surah An-Nisā’ 4:135"
      },
      {
        text: "Indeed, Allah commands justice, good conduct, and giving to relatives.",
        reference: "Surah An-Naḥl 16:90"
      },
      {
        text: "And do not let the hatred of a people prevent you from being just. Be just; that is nearer to righteousness.",
        reference: "Surah Al-Mā’idah 5:8"
      },
      {
        text: "We sent Our messengers with clear proofs and sent down with them the Book and the balance that the people may maintain [their affairs] in justice.",
        reference: "Surah Al-Ḥadīd 57:25"
      }
    ],
    theme: "The Qur’an’s justice-based ethics underpin modern human rights principles."
  },
  {
    id: 6,
    issue: "Family Breakdown & Social Values",
    message: "Family, mercy, and respect are sacred.",
    ayats: [
      {
        text: "And We created you in pairs.",
        reference: "Surah An-Naba’ 78:8"
      },
      {
        text: "And We have enjoined upon man kindness to parents.",
        reference: "Surah Al-‘Ankabūt 29:8"
      },
      {
        text: "And among His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy.",
        reference: "Surah Ar-Rūm 30:21"
      },
      {
        text: "Your Lord has decreed that you worship none but Him, and to parents, good treatment.",
        reference: "Surah Al-Isrā’ 17:23"
      }
    ],
    theme: "The Qur’an restores family structure, mutual respect, and moral values — all of which modern societies are struggling to maintain."
  },
  {
    id: 7,
    issue: "Purpose, Meaning & Identity Crisis",
    message: "Life has purpose — to worship and serve Allah.",
    ayats: [
      {
        text: "And I did not create the jinn and mankind except to worship Me.",
        reference: "Surah Adh-Dhāriyāt 51:56"
      },
      {
        text: "Does man think that he will be left neglected?",
        reference: "Surah Al-Qiyāmah 75:36"
      },
      {
        text: "Did you think that We created you uselessly and that to Us you would not be returned?",
        reference: "Surah Al-Mu’minūn 23:115"
      },
      {
        text: "So whoever does righteous deeds while he is a believer — no denial will there be for his effort, and indeed We record it for him.",
        reference: "Surah Al-Anbiyā’ 21:94"
      }
    ],
    theme: "The Qur’an gives direction in a world lost in materialism and confusion."
  }
];

const sacrificeAndJihadEnglish = [
  {
    id: 1,
    issue: "Sacrifice in the Way of Allah",
    message: "To sacrifice life and wealth for Allah’s pleasure is the mark of a true believer.",
    ayats: [
      {
        text: "Say, ‘Indeed, my prayer, my sacrifice, my living and my dying are for Allah, Lord of all worlds.’",
        reference: "Surah Al-An’am 6:162"
      },
      {
        text: "You will never attain righteousness until you spend from what you love.",
        reference: "Surah Aal Imran 3:92"
      },
      {
        text: "It is neither their meat nor their blood that reaches Allah, but your piety that reaches Him.",
        reference: "Surah Al-Hajj 22:37"
      },
      {
        text: "And We have made the sacrificial animals among the symbols of Allah for you.",
        reference: "Surah Al-Hajj 22:36"
      }
    ],
    theme: "The Quran presents sacrifice as a symbol of devotion, gratitude, and piety. A believer willingly gives up even what he loves most for the sake of Allah."
  },
  {
    id: 2,
    issue: "The Concept of Jihad fi Sabeelillah",
    message: "Jihad is not limited to battle — it includes every struggle for truth and justice.",
    ayats: [
      {
        text: "And strive against them with it (the Quran) a great striving.",
        reference: "Surah Al-Furqan 25:52"
      },
      {
        text: "And those who strive in Our cause – We will surely guide them to Our paths.",
        reference: "Surah Al-Ankabut 29:69"
      },
      {
        text: "So fear Allah as much as you can and strive with your wealth and your lives in His cause.",
        reference: "Surah At-Tawbah 9:41"
      },
      {
        text: "Whoever strives, only strives for his own soul; indeed, Allah is free from need of the worlds.",
        reference: "Surah Al-Ankabut 29:6"
      }
    ],
    theme: "According to the Quran, jihad means striving for the establishment of truth, justice, and faith — whether through knowledge, effort, or defense."
  },
  {
    id: 3,
    issue: "Sacrificing Life for Allah",
    message: "Martyrdom is the highest expression of standing for truth and faith.",
    ayats: [
      {
        text: "Do not say of those who are killed in the way of Allah that they are dead. Rather, they are alive.",
        reference: "Surah Aal Imran 3:169"
      },
      {
        text: "Indeed, Allah has purchased from the believers their lives and their properties in exchange for Paradise.",
        reference: "Surah At-Tawbah 9:111"
      },
      {
        text: "And those who are killed in the way of Allah – He will never waste their deeds.",
        reference: "Surah Muhammad 47:4"
      },
      {
        text: "They rejoice in the bounty that Allah has bestowed upon them and are happy for those who have not yet joined them.",
        reference: "Surah Aal Imran 3:170"
      }
    ],
    theme: "In the Quran, the sacrifice of life is not seen as loss but as the peak of faith and eternal honor — a transition to everlasting life."
  },
  {
    id: 4,
    issue: "Financial Sacrifice and Charity in Allah’s Path",
    message: "Spending in Allah’s cause is the sign of sincere faith.",
    ayats: [
      {
        text: "Whatever you spend in His cause, He will replace it, and He is the best of providers.",
        reference: "Surah Saba 34:39"
      },
      {
        text: "The example of those who spend their wealth in the way of Allah is like a seed of grain that grows seven ears, in every ear a hundred grains.",
        reference: "Surah Al-Baqarah 2:261"
      },
      {
        text: "Whatever you spend in the cause of Allah will be fully repaid to you, and you will not be wronged.",
        reference: "Surah Al-Anfal 8:60"
      },
      {
        text: "He who gives his wealth only to purify himself.",
        reference: "Surah Al-Lail 92:18–19"
      }
    ],
    theme: "The Quran considers spending for Allah as a means of self-purification and social well-being — a reflection of generosity and compassion."
  },
  {
    id: 5,
    issue: "Patience, Perseverance, and Jihad",
    message: "True striving in Allah’s cause requires patience and steadfastness.",
    ayats: [
      {
        text: "O believers! Seek help through patience and prayer. Surely Allah is with those who are patient.",
        reference: "Surah Al-Baqarah 2:153"
      },
      {
        text: "And We will surely test you with something of fear and hunger and loss of wealth and lives and fruits.",
        reference: "Surah Al-Baqarah 2:155"
      },
      {
        text: "So be patient and steadfast, for indeed, that is true success.",
        reference: "Surah Aal Imran 3:200"
      },
      {
        text: "And Allah loves those who are patient.",
        reference: "Surah Aal Imran 3:146"
      }
    ],
    theme: "Jihad is not merely a physical struggle but a spiritual discipline — rooted in patience, endurance, and trust in Allah’s plan."
  }
];

onMounted(()=>{
  const lang = localStorage.getItem("language");
  if(lang){
    store.language = JSON.parse(lang)
  }
})
let makeVisible = ref(false)
const selected = ref(null)
const readThis = (text)=>{
   
    selected.value = text
    makeVisible.value = !makeVisible.value
    
}
</script>
