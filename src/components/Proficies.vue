<template>
    
  <div class="bg-gradient-to-b from-[#f8f5f1] to-[#efe9dd] text-gray-800 font-serif min-h-screen flex flex-col">
    <!-- Navbar -->
    <NavBar/>
    <!-- Hero Section -->
    <section v-if="store.language == 'urdu'"
      class="text-center font-sans px-4 sm:px-10 py-20 sm:py-24 bg-gradient-to-t from-[#e8dcc5] via-[#f5f1e6] to-[#f8f5f1] rounded-b-[3rem] sm:rounded-b-[4rem] shadow-inner flex flex-col items-center"
    >
      <h2
        class="text-3xl sm:text-4xl md:text-5xl font-semibold text-green-900 max-w-3xl leading-snug"
      >
        خاتم النبیین ﷺ کی پیش گوئیوں کا مطالعہ
      </h2>
      <p class="mt-4 text-base sm:text-lg text-gray-600 max-w-xl">
        Authentic. Verified. Timeless Truths.
      </p>
      <a href="#view">
              <button
        class="mt-8 bg-[#b08b4f] text-white px-6 py-3 rounded-full hover:bg-[#9b7a44] transition text-sm sm:text-base"
      >
        Start Exploring
      </button></a>
    </section>
    <section v-if="store.language == 'english'"
      class="text-center px-4 sm:px-10 py-20 sm:py-24 bg-gradient-to-t from-[#e8dcc5] via-[#f5f1e6] to-[#f8f5f1] rounded-b-[3rem] sm:rounded-b-[4rem] shadow-inner flex flex-col items-center"
    >
      <h2
        class="text-3xl sm:text-4xl md:text-5xl font-semibold text-green-900 max-w-3xl leading-snug"
      >
        Exploring the Prophecies of the Final Messenger ﷺ
      </h2>
      <p class="mt-4 text-base sm:text-lg text-gray-600 max-w-xl">
        Authentic. Verified. Timeless Truths.
      </p>
      <a href="#view">
              <button
        class="mt-8 bg-[#b08b4f] text-white px-6 py-3 rounded-full hover:bg-[#9b7a44] transition text-sm sm:text-base"
      >
        Start Exploring
      </button></a>
    </section>




    <!-- Others -->
<section v-if="store.language == 'english'" class="max-w-6xl mx-auto px-6 sm:px-10 py-16 text-center flex-1">
      <h3 class="text-2xl sm:text-3xl font-semibold text-green-900 mb-10">
    Fulfilled Prophecies
      </h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(prophecy, index) in allFulfilled"
          :key="index"
          class="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition"
        >
          <h4 class="font-semibold text-lg mb-2">{{ prophecy.title }}</h4>
          <p class="text-sm text-gray-500 mb-4">
            Source:#{{ prophecy.ref }}
          </p>
          <button
            class="bg-[#b08b4f] text-white px-4 py-2 rounded-full hover:bg-[#9b7a44] transition text-sm"
            @click="readThis(prophecy)"
          >
            Read More
          </button>
        </div>
      </div>
    </section>


    <section v-if="store.language=='urdu'" class="font-sans max-w-6xl mx-auto px-6 sm:px-10 py-16 text-center flex-1">
      <h3 class="text-2xl sm:text-3xl font-semibold text-green-900 mb-10">
   پیش گوئیاں جو پوری ہو چکیں
      </h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(prophecy, index) in allFulfilledUrdu"
          :key="index"
          class="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition"
        >
          <h4 class="font-semibold text-lg mb-2">{{ prophecy.title }}</h4>
          <p class="text-sm text-gray-500 mb-4">
            Source:#{{ prophecy.ref }}
          </p>
          <button
            class="bg-[#b08b4f] text-white px-4 py-2 rounded-full hover:bg-[#9b7a44] transition text-sm"
            @click="readThis(prophecy)"
          >
            Read More
          </button>
        </div>
      </div>
    </section>





    <section v-if="store.language == 'english'" id="view" class="max-w-6xl mx-auto px-6 sm:px-10 py-16 text-center flex-1">
      <h3 class="text-2xl sm:text-3xl font-semibold text-green-900 mb-10">
    End-Times War-Related Prophecies
      </h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(prophecy, index) in warRelatedProphecies"
          :key="index"
          class="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition"
        >
          <h4 class="font-semibold text-lg mb-2">{{ prophecy.title }}</h4>
          <p class="text-sm text-gray-500 mb-4">
            Source: #{{ prophecy.ref }}
          </p>
          <button
            class="bg-[#b08b4f] text-white px-4 py-2 rounded-full hover:bg-[#9b7a44] transition text-sm"
            @click="readThis(prophecy)"
          >
            Read More
          </button>
        </div>
      </div>
    </section>
    <section v-if="store.language == 'urdu'" id="view" class="font-sans max-w-6xl mx-auto px-6 sm:px-10 py-16 text-center flex-1">
      <h3 class="text-2xl sm:text-3xl font-sans font-semibold text-green-900 mb-10">
    قیامت سے پہلے کی جنگوں کی پیشین گوئیاں
      </h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(prophecy, index) in warRelatedPropheciesUrdu"
          :key="index"
          class="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition"
        >
          <h4 class="font-semibold text-lg mb-2">{{ prophecy.title }}</h4>
          <p class="text-sm text-gray-500 mb-4">
            Source: #{{ prophecy.ref }}
          </p>
          <button
            class="bg-[#b08b4f] text-white px-4 py-2 rounded-full hover:bg-[#9b7a44] transition text-sm"
            @click="readThis(prophecy)"
          >
            Read More
          </button>
        </div>
      </div>
    </section>




    <section v-if="store.language == 'urdu'" id="view" class="font-sans max-w-6xl mx-auto px-6 sm:px-10 py-16 text-center flex-1">
      <h3 class="text-2xl sm:text-3xl font-semibold text-green-900 mb-10">
    آخری دور کی عمومی پیش گوئیاں
      </h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(prophecy, index) in allUrdu"
          :key="index"
          class="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition"
        >
          <h4 class="font-semibold text-lg mb-2">{{ prophecy.title }}</h4>
          <p class="text-sm text-gray-500 mb-4">
            Source: #{{ prophecy.ref }}
          </p>
          <button
            class="bg-[#b08b4f] text-white px-4 py-2 rounded-full hover:bg-[#9b7a44] transition text-sm"
            @click="readThis(prophecy)"
          >
            Read More
          </button>
        </div>
      </div>
    </section>

    <section v-if="store.language == 'english'" id="view" class="max-w-6xl mx-auto px-6 sm:px-10 py-16 text-center flex-1">
      <h3 class="text-2xl sm:text-3xl font-semibold text-green-900 mb-10">
    End Times General Prophecies
      </h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(prophecy, index) in all"
          :key="index"
          class="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition"
        >
          <h4 class="font-semibold text-lg mb-2">{{ prophecy.title }}</h4>
          <p class="text-sm text-gray-500 mb-4">
            Source: #{{ prophecy.ref }}
          </p>
          <button
            class="bg-[#b08b4f] text-white px-4 py-2 rounded-full hover:bg-[#9b7a44] transition text-sm"
            @click="readThis(prophecy)"
          >
            Read More
          </button>
        </div>
      </div>
    </section>


      <iframe src="https://sunnah.com" frameborder="1" class="h-100" loading="lazy"></iframe>


<fooBar/>
    
  </div>


<div
  v-if="makeVisible"
  class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md p-4"
>
  <!-- Content area -->
  <div class="bg-white rounded-2xl shadow-lg max-w-3xl w-full p-6 overflow-y-auto max-h-[80vh]">
    <h2 class="text-3xl font-bold mb-4 text-center font-italic  text-amber-600 text-shadow-2xs text-shadow-amber-800">
       Prophecy
    </h2>

    <div class="border-b border-gray-200 py-4">
      <h3 class="text-xl font-semibold text-gray-900 mb-2">
        {{ selected.title }}
      </h3>

      <p class="text-gray-700 mb-2">
        {{ selected.body }}
      </p>

      <ul class="list-disc list-inside text-gray-600 mb-2">
        <li
          v-for="(line, i) in selected.prophecies"
          :key="i"
        >
        <b>  {{ line }} </b>
        </li>
      </ul>

      <p class="text-sm text-gray-500">
        Ref: {{ selected.ref }}
      </p>
    </div>

    <button
      @click="makeVisible = false"
      class="mt-6 w-full py-2 bg-gradient-to-r from-amber-400 text-white rounded-lg to-amber-600"
    >
      Close
    </button>
  </div>
</div>





</template>

<script setup>
import { ref } from "vue";
import NavBar from "./NavBar.vue";
import fooBar from "./fooBar.vue"; 
import { useAppStore } from "../appStore";
const store = useAppStore();
const menuOpen = ref(false);

const toggleMenu = () => (menuOpen.value = !menuOpen.value);

const endTimesProphecies = [
  {
    title: "Widespread Killing and Bloodshed",
    body: "The Prophet ﷺ foretold that near the end of times, killing and violence would become widespread, to the point where people would not know the reason for fighting.",
    prophecies: [
      "The Hour will not come until there will be much killing. It will be said, ‘There is killing! There is killing!’ (Sahih al-Bukhari 7062; Sahih Muslim 157).",
      "It was said: 'What is al-Harj, O Messenger of Allah?' He said: 'Killing, killing!'"
    ],
    ref: "Sahih al-Bukhari 7062; Sahih Muslim 157"
  },
  {
    title: "Competition in Building Tall Buildings",
    body: "A sign of the Hour is that people — particularly the poor shepherds — will compete in constructing tall buildings.",
    prophecies: [
      "When the Prophet ﷺ was asked about the signs of the Hour, he said: 'You will see the barefoot, naked, destitute shepherds competing in constructing tall buildings.' (Sahih Muslim 1)"
    ],
    ref: "Sahih Muslim 1"
  },
  {
    title: "Time Passing Quickly",
    body: "The Prophet ﷺ said that time would appear to pass quickly as a sign of the end times — years will feel like months, and months like weeks.",
    prophecies: [
      "The Hour will not come until time passes quickly; a year will be like a month, a month like a week, and a day like an hour. (Musnad Ahmad 10560; Sunan al-Tirmidhi 2332)"
    ],
    ref: "Musnad Ahmad 10560; Tirmidhi 2332"
  },
  {
    title: "Abundance of Wealth and Neglect of Charity",
    body: "In the last days, wealth will be abundant to the point that people will struggle to find anyone in need of charity.",
    prophecies: [
      "The Hour will not come until wealth increases and becomes abundant, so much that a man will take out the zakat of his wealth and not find anyone to accept it. (Sahih al-Bukhari 1410; Sahih Muslim 1011)"
    ],
    ref: "Sahih al-Bukhari 1410; Sahih Muslim 1011"
  },
  {
    title: "Loss of Trust and Dishonest Leadership",
    body: "The Prophet ﷺ said that trustworthiness will disappear, and leadership will be given to those who are unfit for it.",
    prophecies: [
      "When honesty is lost, then wait for the Hour. It was asked: How will honesty be lost? He said: When authority is given to those who do not deserve it. (Sahih al-Bukhari 6496)"
    ],
    ref: "Sahih al-Bukhari 6496"
  },
  {
    title: "Women Outnumbering Men",
    body: "The Prophet ﷺ foretold that toward the end of time, the number of women would greatly exceed that of men.",
    prophecies: [
      "The Hour will not come until there are fifty women for every one man. (Sahih al-Bukhari 81; Sahih Muslim 101)"
    ],
    ref: "Sahih al-Bukhari 81; Sahih Muslim 101"
  },
  {
    title: "People Seeking Knowledge from the Unlearned",
    body: "One of the signs of the end is that people will seek religious rulings from the ignorant, who will misguide themselves and others.",
    prophecies: [
      "There will come a time when people will seek knowledge from the ignorant; they will go astray and lead others astray. (Ibn Majah 4048)"
    ],
    ref: "Sunan Ibn Majah 4048"
  },
  {
    title: "Drinking of Intoxicants and Music Becoming Common",
    body: "The Prophet ﷺ foretold that near the Hour, people would consider intoxicants and musical instruments lawful.",
    prophecies: [
      "There will be among my Ummah people who will regard as permissible: silk, alcohol, and musical instruments. (Sahih al-Bukhari 5590)"
    ],
    ref: "Sahih al-Bukhari 5590"
  },
  {
    title: "False Claimants to Prophethood",
    body: "The Prophet ﷺ warned that many false prophets and liars would appear before the Hour.",
    prophecies: [
      "The Hour will not come until nearly thirty impostors have been sent, each of them claiming to be the Messenger of Allah. (Sahih Muslim 157)"
    ],
    ref: "Sahih Muslim 157"
  },
  {
    title: "The Return of Jesus (ʿIsa عليه السلام)",
    body: "A major sign of the Hour is the descent of Prophet Jesus (ʿIsa عليه السلام), who will return to restore justice and truth and defeat the false messiah (Dajjal).",
    prophecies: [
      "By the One in Whose Hand is my soul, the son of Mary will soon descend among you as a just ruler. He will break the cross, kill the swine, and abolish the jizyah tax. (Sahih al-Bukhari 2222; Sahih Muslim 155)"
    ],
    ref: "Sahih al-Bukhari 2222; Sahih Muslim 155"
  }
];
const endTimesPropheciesUrdu = [
  {
    title: "قتل و خونریزی کا عام ہونا",
    body: "نبی کریم ﷺ نے پیش گوئی فرمائی کہ آخری زمانے میں قتل و غارت عام ہو جائے گی، یہاں تک کہ لوگ نہیں جانیں گے کہ وہ کیوں لڑ رہے ہیں۔",
    prophecies: [
      "قیامت اس وقت تک قائم نہیں ہوگی جب تک قتل عام نہ ہو جائے۔ کہا جائے گا: قتل! قتل! (صحیح بخاری 7062؛ صحیح مسلم 157)",
      "پوچھا گیا: اے اللہ کے رسول! 'الحرج' کیا ہے؟ فرمایا: قتل، قتل!"
    ],
    ref: "صحیح بخاری 7062؛ صحیح مسلم 157"
  },
  {
    title: "اونچی عمارتوں کی تعمیر میں مقابلہ",
    body: "قیامت کی نشانیوں میں سے ایک یہ ہے کہ لوگ — خصوصاً غریب چرواہے — اونچی اونچی عمارتیں بنانے میں ایک دوسرے سے مقابلہ کریں گے۔",
    prophecies: [
      "جب نبی ﷺ سے قیامت کی نشانیوں کے بارے میں پوچھا گیا تو فرمایا: 'تم دیکھو گے کہ ننگے پاؤں، ننگے بدن، محتاج چرواہے اونچی عمارتیں بنانے میں مقابلہ کریں گے۔' (صحیح مسلم 1)"
    ],
    ref: "صحیح مسلم 1"
  },
  {
    title: "وقت کا تیزی سے گزرنا",
    body: "نبی ﷺ نے فرمایا کہ آخری زمانے میں وقت تیزی سے گزرنے لگے گا — سال مہینے کی طرح، مہینہ ہفتے کی طرح محسوس ہوگا۔",
    prophecies: [
      "قیامت اس وقت تک قائم نہیں ہوگی جب تک وقت تیزی سے نہ گزرے؛ ایک سال ایک مہینے کی طرح، ایک مہینہ ایک ہفتے کی طرح، اور ایک دن ایک گھنٹے کی طرح ہو جائے گا۔ (مسند احمد 10560؛ ترمذی 2332)"
    ],
    ref: "مسند احمد 10560؛ ترمذی 2332"
  },
  {
    title: "مال کی فراوانی اور صدقہ دینے والا نہ ملنا",
    body: "آخری زمانے میں مال اتنا زیادہ ہو جائے گا کہ لوگ کسی محتاج کو زکوٰۃ یا صدقہ دینے کے لیے تلاش کریں گے مگر کوئی لینے والا نہیں ملے گا۔",
    prophecies: [
      "قیامت اس وقت تک قائم نہیں ہوگی جب تک مال بڑھ نہ جائے اور عام نہ ہو جائے، یہاں تک کہ آدمی اپنے مال کی زکوٰۃ نکالے اور اسے لینے والا نہ پائے۔ (صحیح بخاری 1410؛ صحیح مسلم 1011)"
    ],
    ref: "صحیح بخاری 1410؛ صحیح مسلم 1011"
  },
  {
    title: "امانت کا ضائع ہونا اور نااہل لوگوں کو قیادت دینا",
    body: "نبی ﷺ نے فرمایا کہ امانت ختم ہو جائے گی اور قیادت ایسے لوگوں کے سپرد کی جائے گی جو اس کے اہل نہیں ہوں گے۔",
    prophecies: [
      "جب امانت ضائع کر دی جائے تو قیامت کا انتظار کرو۔ پوچھا گیا: امانت کیسے ضائع ہوگی؟ فرمایا: جب اختیار نااہل لوگوں کو دیا جائے۔ (صحیح بخاری 6496)"
    ],
    ref: "صحیح بخاری 6496"
  },
  {
    title: "عورتوں کی تعداد مردوں سے زیادہ ہونا",
    body: "نبی ﷺ نے فرمایا کہ آخری زمانے میں عورتوں کی تعداد مردوں سے بہت زیادہ ہو جائے گی۔",
    prophecies: [
      "قیامت اس وقت تک قائم نہیں ہوگی جب تک پچاس عورتوں پر ایک مرد نہ ہو۔ (صحیح بخاری 81؛ صحیح مسلم 101)"
    ],
    ref: "صحیح بخاری 81؛ صحیح مسلم 101"
  },
  {
    title: "نادان لوگوں سے علم حاصل کرنا",
    body: "قیامت کی نشانیوں میں سے ایک یہ ہے کہ لوگ دینی علم جاہلوں سے حاصل کریں گے، جو خود بھی گمراہ ہوں گے اور دوسروں کو بھی گمراہ کریں گے۔",
    prophecies: [
      "ایسا زمانہ آئے گا جب لوگ جاہلوں سے علم حاصل کریں گے؛ وہ خود بھی گمراہ ہوں گے اور دوسروں کو بھی گمراہ کریں گے۔ (ابن ماجہ 4048)"
    ],
    ref: "سنن ابن ماجہ 4048"
  },
  {
    title: "شراب نوشی اور موسیقی کا عام ہونا",
    body: "نبی ﷺ نے فرمایا کہ آخری زمانے میں لوگ شراب اور موسیقی کو حلال سمجھنے لگیں گے۔",
    prophecies: [
      "میری امت میں کچھ لوگ ہوں گے جو ریشمی کپڑا، شراب اور موسیقی کے آلات کو حلال سمجھیں گے۔ (صحیح بخاری 5590)"
    ],
    ref: "صحیح بخاری 5590"
  },
  {
    title: "جھوٹے نبیوں کا ظاہر ہونا",
    body: "نبی ﷺ نے فرمایا کہ قیامت سے پہلے بہت سے جھوٹے نبی اور دعوے دار ظاہر ہوں گے۔",
    prophecies: [
      "قیامت اس وقت تک قائم نہیں ہوگی جب تک قریباً تیس جھوٹے مدعی ظاہر نہ ہو جائیں، ہر ایک دعویٰ کرے گا کہ وہ اللہ کا رسول ہے۔ (صحیح مسلم 157)"
    ],
    ref: "صحیح مسلم 157"
  },
  {
    title: "حضرت عیسیٰ علیہ السلام کا نزول",
    body: "قیامت کی بڑی نشانیوں میں سے ایک حضرت عیسیٰ علیہ السلام کا آسمان سے نزول ہے، جو انصاف اور سچائی کو بحال کریں گے اور دجال کو ہلاک کریں گے۔",
    prophecies: [
      "قسم ہے اُس ذات کی جس کے ہاتھ میں میری جان ہے، عنقریب مریم کے بیٹے (عیسیٰ علیہ السلام) تم میں نازل ہوں گے، عادل حاکم کی حیثیت سے۔ وہ صلیب کو توڑیں گے، خنزیر کو قتل کریں گے، اور جزیہ ختم کر دیں گے۔ (صحیح بخاری 2222؛ صحیح مسلم 155)"
    ],
    ref: "صحیح بخاری 2222؛ صحیح مسلم 155"
  }
];


const extendedEndTimesProphecies = [
  // --- Minor Signs (Social / Moral / Political) ---

  {
    title: "Breaking of Family Ties and Disobedience to Parents",
    body: "The Prophet ﷺ foretold that disobedience to parents and severing of family relationships would become widespread, while respect for friends would outweigh respect for kin.",
    prophecies: [
      "Among the signs of the Hour is that a man will obey his wife and disobey his mother, and he will bring his friend close while keeping his father distant. (Tirmidhi 2209)"
    ],
    ref: "Jami‘ al-Tirmidhi 2209"
  },
  {
    title: "People Taking False Oaths and Dishonesty in Trade",
    body: "Dishonesty and deceit in trade will become common, and people will take oaths lightly to gain worldly benefit.",
    prophecies: [
      "There will come a time when people will cheat in trade until it will be said: ‘There is an honest man among such and such people,’ and he will be admired. (Bukhari 2083; Muslim 108)"
    ],
    ref: "Sahih al-Bukhari 2083; Sahih Muslim 108"
  },
  {
    title: "Prevalence of Immorality and Open Indecency",
    body: "The Prophet ﷺ warned that shamelessness and indecency would become open and accepted near the end of times.",
    prophecies: [
      "Among the signs of the Hour is that lewdness will appear and become widespread. (Musnad Ahmad 6611)"
    ],
    ref: "Musnad Ahmad 6611"
  },
  {
    title: "Frequent Earthquakes and Natural Disasters",
    body: "An increase in earthquakes and natural calamities is mentioned among the signs of the Hour.",
    prophecies: [
      "The Hour will not come until earthquakes increase in number. (Bukhari 7121)"
    ],
    ref: "Sahih al-Bukhari 7121"
  },
  {
    title: "Prevalence of Usury (Riba) and Illegal Wealth",
    body: "Engaging in usury will become so widespread that almost everyone will be affected by it indirectly.",
    prophecies: [
      "A time will come when there will be no one left who does not consume riba; and whoever does not consume it will be affected by its dust. (Ibn Majah 2278)"
    ],
    ref: "Sunan Ibn Majah 2278"
  },
  {
    title: "False Testimonies and Concealing the Truth",
    body: "People will give false witness and conceal truthful testimony, corrupting justice.",
    prophecies: [
      "Before the Hour, false testimony will become widespread and true testimony will be concealed. (Musnad Ahmad 23139)"
    ],
    ref: "Musnad Ahmad 23139"
  },
  {
    title: "Widespread Music, Entertainment, and Intoxicants",
    body: "People will indulge in entertainment, drinking, and musical instruments without remorse, considering them permissible.",
    prophecies: [
      "There will be among my Ummah people who will consider silk, alcohol, and musical instruments lawful. (Bukhari 5590)"
    ],
    ref: "Sahih al-Bukhari 5590"
  },
  {
    title: "The Slave Woman Giving Birth to Her Mistress",
    body: "One of the mysterious signs is that a slave woman will give birth to her mistress — interpreted by scholars as social upheaval and role reversal.",
    prophecies: [
      "A slave woman will give birth to her mistress. (Sahih Muslim 1)"
    ],
    ref: "Sahih Muslim 1"
  },
  {
    title: "Increase in Sudden Deaths",
    body: "Sudden, unexpected deaths will become more common before the Hour.",
    prophecies: [
      "Among the signs of the Hour is the increase of sudden death. (Musnad Ahmad 23139)"
    ],
    ref: "Musnad Ahmad 23139"
  },

  // --- Major Signs (Eschatological / Cosmic) ---

  {
    title: "Appearance of Al-Mahdi",
    body: "A righteous leader from the descendants of the Prophet ﷺ, known as Al-Mahdi, will appear before the Hour to restore justice.",
    prophecies: [
      "Even if there remains only one day before the end of the world, Allah will prolong it until a man from my family, whose name will be like mine, will be sent. (Abu Dawud 4282)"
    ],
    ref: "Sunan Abu Dawud 4282"
  },
  {
    title: "Appearance of the False Messiah (Al-Dajjal)",
    body: "The Dajjal will emerge before the Hour, deceiving many people with false miracles and claiming divinity.",
    prophecies: [
      "No Prophet was sent who did not warn his people of the one-eyed liar. Know that he is one-eyed, and your Lord is not one-eyed. (Bukhari 7131; Muslim 2933)"
    ],
    ref: "Sahih al-Bukhari 7131; Sahih Muslim 2933"
  },
  {
    title: "Ya’juj and Ma’juj (Gog and Magog) Breaking Free",
    body: "Two mighty tribes, Ya’juj and Ma’juj, confined behind a barrier since the time of Dhul-Qarnayn, will break free and cause great chaos in the world.",
    prophecies: [
      "The barrier of Ya’juj and Ma’juj will be opened and they will rush down from every height. (Qur’an 21:96; Hadith references confirm this as a major sign.)"
    ],
    ref: "Qur’an 21:96; Sahih Muslim 2937"
  },
  {
    title: "The Beast of the Earth (Dābbat al-Ard)",
    body: "A living creature will emerge from the earth and speak to people, affirming the truth of Allah’s signs.",
    prophecies: [
      "And when the word befalls them, We shall bring forth for them a beast from the earth who will speak to them. (Qur’an 27:82)"
    ],
    ref: "Qur’an 27:82; Tafsir & Hadith commentaries"
  },
  {
    title: "The Smoke (Ad-Dukhān)",
    body: "A great smoke will cover the earth, affecting believers lightly but causing great suffering for disbelievers.",
    prophecies: [
      "Wait for the Day when the sky will bring a visible smoke covering the people; this will be a painful torment. (Qur’an 44:10–11)"
    ],
    ref: "Qur’an 44:10-11; Hadith commentaries"
  },
  {
    title: "Three Major Landslides",
    body: "There will be three massive sinkings of the earth — one in the east, one in the west, and one in the Arabian Peninsula.",
    prophecies: [
      "The Hour will not come until there are three landslides: one in the east, one in the west, and one in Arabia. (Sahih Muslim 2901)"
    ],
    ref: "Sahih Muslim 2901"
  },
  {
    title: "Fire from Yemen Driving People to the Final Gathering",
    body: "A great fire will emerge from Yemen, driving people to their place of resurrection.",
    prophecies: [
      "And the last of the signs will be a fire that will emerge from Yemen and drive the people to their place of assembly. (Sahih Muslim 2901)"
    ],
    ref: "Sahih Muslim 2901"
  },
  {
    title: "The Sun Rising from the West",
    body: "When the sun rises from the west, the door of repentance will close forever — one of the final irreversible signs.",
    prophecies: [
      "The Hour will not come until the sun rises from the west; when it rises and people see it, none will benefit from faith then. (Sahih Muslim 158)"
    ],
    ref: "Sahih Muslim 158"
  },
  {
    title: "The Trumpet Blast and the Resurrection",
    body: "The Angel Israfil will blow the trumpet, causing all creation to perish, and a second blast will bring them back to life for judgment.",
    prophecies: [
      "And the Trumpet will be blown, and whoever is in the heavens and whoever is on the earth will fall dead except whom Allah wills; then it will be blown again, and behold, they will be standing, looking on. (Qur’an 39:68)"
    ],
    ref: "Qur’an 39:68; Hadith commentaries"
  }
];
const extendedEndTimesPropheciesUrdu = [
  // --- چھوٹی نشانیاں (سماجی / اخلاقی / سیاسی) ---

  {
    title: "والدین کی نافرمانی اور رشتہ داروں سے قطع تعلقی",
    body: "نبی کریم ﷺ نے پیش گوئی فرمائی کہ والدین کی نافرمانی اور خاندانی تعلقات کو توڑ دینا عام ہو جائے گا، جبکہ دوستوں کو رشتہ داروں پر ترجیح دی جائے گی۔",
    prophecies: [
      "قیامت کی نشانیوں میں سے ایک یہ ہے کہ آدمی اپنی بیوی کی بات مانے گا اور اپنی ماں کی نافرمانی کرے گا، اپنے دوست کو قریب کرے گا اور اپنے والد کو دور رکھے گا۔ (ترمذی 2209)"
    ],
    ref: "جامع الترمذی 2209"
  },
  {
    title: "جھوٹی قسمیں اور تجارت میں بددیانتی",
    body: "تجارت میں دھوکہ دہی اور جھوٹ عام ہو جائے گا، اور لوگ دنیاوی فائدے کے لیے آسانی سے جھوٹی قسمیں کھائیں گے۔",
    prophecies: [
      "ایسا وقت آئے گا جب لوگ تجارت میں دھوکہ دیں گے، یہاں تک کہ کہا جائے گا: فلاں قوم میں ایک ایماندار شخص ہے، اور وہ قابلِ تعریف سمجھا جائے گا۔ (بخاری 2083؛ مسلم 108)"
    ],
    ref: "صحیح بخاری 2083؛ صحیح مسلم 108"
  },
  {
    title: "بے حیائی اور فحاشی کا عام ہونا",
    body: "نبی ﷺ نے فرمایا کہ آخری زمانے میں بے حیائی اور کھلی فحاشی ظاہر ہوگی اور عام ہو جائے گی۔",
    prophecies: [
      "قیامت کی نشانیوں میں سے ایک یہ ہے کہ فحاشی ظاہر ہوگی اور عام ہو جائے گی۔ (مسند احمد 6611)"
    ],
    ref: "مسند احمد 6611"
  },
  {
    title: "زلزلوں اور قدرتی آفات کا بڑھ جانا",
    body: "قیامت کی نشانیوں میں زمین کے ہلنے اور قدرتی آفات کے بڑھنے کا ذکر ہے۔",
    prophecies: [
      "قیامت اس وقت تک قائم نہیں ہوگی جب تک زلزلے زیادہ نہ ہو جائیں۔ (بخاری 7121)"
    ],
    ref: "صحیح بخاری 7121"
  },
  {
    title: "سود (ربا) اور حرام مال کا عام ہونا",
    body: "سود خوری اتنی عام ہو جائے گی کہ تقریباً ہر شخص براہِ راست یا بالواسطہ اس سے متاثر ہوگا۔",
    prophecies: [
      "ایسا زمانہ آئے گا کہ کوئی شخص باقی نہیں رہے گا جو ربا (سود) سے متاثر نہ ہو، اور جو اسے نہ کھائے گا وہ بھی اس کی گرد سے متاثر ہوگا۔ (ابن ماجہ 2278)"
    ],
    ref: "سنن ابن ماجہ 2278"
  },
  {
    title: "جھوٹی گواہی دینا اور سچی گواہی چھپانا",
    body: "لوگ جھوٹی گواہیاں دیں گے اور سچی گواہیاں چھپائیں گے، جس سے انصاف ختم ہو جائے گا۔",
    prophecies: [
      "قیامت سے پہلے جھوٹی گواہی عام ہو جائے گی اور سچی گواہی کو چھپایا جائے گا۔ (مسند احمد 23139)"
    ],
    ref: "مسند احمد 23139"
  },
  {
    title: "موسیقی، لہو و لعب اور نشے کا عام ہونا",
    body: "لوگ موسیقی، تفریح اور شراب نوشی میں مگن ہوں گے اور انہیں حلال سمجھیں گے۔",
    prophecies: [
      "میری امت میں کچھ لوگ ہوں گے جو ریشمی کپڑا، شراب اور موسیقی کے آلات کو حلال سمجھیں گے۔ (بخاری 5590)"
    ],
    ref: "صحیح بخاری 5590"
  },
  {
    title: "لونڈی اپنی مالکہ کو جنم دے گی",
    body: "یہ ایک عجیب نشانی ہے کہ ایک لونڈی اپنی مالکہ کو جنم دے گی — علما نے اسے معاشرتی انقلاب اور کرداروں کی تبدیلی کی علامت قرار دیا ہے۔",
    prophecies: [
      "ایک لونڈی اپنی مالکہ کو جنم دے گی۔ (صحیح مسلم 1)"
    ],
    ref: "صحیح مسلم 1"
  },
  {
    title: "اچانک موتوں کا بڑھ جانا",
    body: "قیامت سے پہلے اچانک اور غیر متوقع اموات زیادہ ہو جائیں گی۔",
    prophecies: [
      "قیامت کی نشانیوں میں سے ایک اچانک موتوں کا بڑھ جانا ہے۔ (مسند احمد 23139)"
    ],
    ref: "مسند احمد 23139"
  },

  // --- بڑی نشانیاں (اخروی / کائناتی) ---

  {
    title: "امام مہدی کا ظہور",
    body: "نبی ﷺ کی اولاد میں سے ایک عادل رہنما، امام مہدی، قیامت سے پہلے ظاہر ہوں گے اور انصاف کو بحال کریں گے۔",
    prophecies: [
      "اگر دنیا کے خاتمے سے پہلے صرف ایک دن بھی باقی رہ گیا تو اللہ اسے لمبا کر دے گا، یہاں تک کہ میری اہلِ بیت میں سے ایک شخص ظاہر ہوگا جس کا نام میرے نام کی طرح ہوگا۔ (ابو داود 4282)"
    ],
    ref: "سنن ابو داود 4282"
  },
  {
    title: "دجال (جھوٹے مسیح) کا ظہور",
    body: "دجال قیامت سے پہلے ظاہر ہوگا، جھوٹے معجزات دکھا کر لوگوں کو دھوکہ دے گا اور خدائی کا دعویٰ کرے گا۔",
    prophecies: [
      "کوئی نبی ایسا نہیں گزرا جس نے اپنی امت کو ایک آنکھ والے جھوٹے سے خبردار نہ کیا ہو۔ یاد رکھو! وہ ایک آنکھ والا ہے اور تمہارا رب ایک آنکھ والا نہیں۔ (بخاری 7131؛ مسلم 2933)"
    ],
    ref: "صحیح بخاری 7131؛ صحیح مسلم 2933"
  },
  {
    title: "یأجوج و مأجوج کا نکلنا",
    body: "ذوالقرنین کے زمانے سے ایک رکاوٹ کے پیچھے قید دو طاقتور قومیں، یأجوج و مأجوج، قیامت کے قریب نکل آئیں گی اور زمین میں فساد پھیلائیں گی۔",
    prophecies: [
      "یأجوج و مأجوج کی رکاوٹ کھول دی جائے گی، اور وہ ہر بلندی سے تیزی سے نیچے آئیں گے۔ (القرآن 21:96؛ احادیث میں اس کو بڑی نشانیوں میں شمار کیا گیا ہے۔)"
    ],
    ref: "القرآن 21:96؛ صحیح مسلم 2937"
  },
  {
    title: "زمین سے نکلنے والا جانور (دابۃ الارض)",
    body: "ایک زندہ مخلوق زمین سے نکلے گی جو لوگوں سے بات کرے گی اور اللہ کی نشانیوں کی سچائی کی گواہی دے گی۔",
    prophecies: [
      "اور جب ان پر ہمارا وعدہ پورا ہوگا تو ہم ان کے لیے زمین سے ایک جانور نکالیں گے جو ان سے بات کرے گا۔ (القرآن 27:82)"
    ],
    ref: "القرآن 27:82؛ تفسیر و احادیث کی تشریحات"
  },
  {
    title: "دھوئیں (الدخان) کا ظاہر ہونا",
    body: "ایک بڑا دھواں زمین کو ڈھانپ لے گا، جو مومنوں پر ہلکا اور کافروں پر سخت عذاب ہوگا۔",
    prophecies: [
      "اس دن کا انتظار کرو جب آسمان ایک ظاہر دھواں لائے گا جو لوگوں کو ڈھانپ لے گا؛ یہ ایک دردناک عذاب ہوگا۔ (القرآن 44:10–11)"
    ],
    ref: "القرآن 44:10-11؛ احادیث و تفاسیر"
  },
  {
    title: "تین بڑی زمین دھنسنے کی آفات",
    body: "زمین میں تین بڑے دھنسنے کے واقعات ہوں گے — ایک مشرق میں، ایک مغرب میں، اور ایک جزیرۂ عرب میں۔",
    prophecies: [
      "قیامت اس وقت تک قائم نہیں ہوگی جب تک زمین کے تین دھنسنے نہ ہو جائیں: ایک مشرق میں، ایک مغرب میں، اور ایک عرب میں۔ (صحیح مسلم 2901)"
    ],
    ref: "صحیح مسلم 2901"
  },
  {
    title: "یمن سے آگ نکلنا جو لوگوں کو جمع ہونے کی جگہ کی طرف ہانکے گی",
    body: "یمن سے ایک بڑی آگ نکلے گی جو لوگوں کو ان کے جمع ہونے کی جگہ (محشر) کی طرف لے جائے گی۔",
    prophecies: [
      "اور آخری نشانی ایک آگ ہوگی جو یمن سے نکلے گی اور لوگوں کو ان کے جمع ہونے کی جگہ کی طرف لے جائے گی۔ (صحیح مسلم 2901)"
    ],
    ref: "صحیح مسلم 2901"
  },
  {
    title: "سورج کا مغرب سے طلوع ہونا",
    body: "جب سورج مغرب سے طلوع ہوگا تو توبہ کا دروازہ ہمیشہ کے لیے بند ہو جائے گا — یہ آخری ناقابلِ واپسی نشانیوں میں سے ایک ہے۔",
    prophecies: [
      "قیامت اس وقت تک قائم نہیں ہوگی جب تک سورج مغرب سے طلوع نہ ہو۔ جب لوگ اسے دیکھیں گے تو ایمان کسی کے لیے فائدہ مند نہیں ہوگا۔ (صحیح مسلم 158)"
    ],
    ref: "صحیح مسلم 158"
  },
  {
    title: "صور پھونکنا اور دوبارہ زندہ ہونا",
    body: "فرشتہ اسرافیل صور پھونکے گا، جس سے تمام مخلوقات مر جائیں گی، پھر دوسری بار پھونکنے پر سب دوبارہ زندہ ہو کر کھڑے ہوں گے۔",
    prophecies: [
      "اور صور پھونکا جائے گا، تو جو آسمانوں اور زمین میں ہیں سب گر پڑیں گے سوائے جنہیں اللہ چاہے۔ پھر دوبارہ پھونکا جائے گا، اور یکایک وہ کھڑے دیکھ رہے ہوں گے۔ (القرآن 39:68)"
    ],
    ref: "القرآن 39:68؛ احادیث و تفاسیر"
  }
];


const additionalEndTimesProphecies = [
  // 🕌 Religious & Spiritual Decline
  {
    title: "Mosques Adorned but Empty of Guidance",
    body: "The Prophet ﷺ foretold that people would take pride in the outward beauty of their mosques while neglecting sincere worship and guidance within them.",
    prophecies: [
      "The Hour will not come until people boast with their mosques. (Abu Dawud 449; Ibn Majah 739)"
    ],
    ref: "Sunan Abu Dawud 449; Sunan Ibn Majah 739"
  },
  {
    title: "The Qur’an Recited but Not Followed",
    body: "The Prophet ﷺ said that near the end of time, people would recite the Qur’an beautifully but not act upon its teachings.",
    prophecies: [
      "There will come a time when nothing will remain of Islam but its name, and nothing will remain of the Qur’an but its script. (Ibn Majah 4049)"
    ],
    ref: "Sunan Ibn Majah 4049"
  },
  {
    title: "Loss of Religious Knowledge through Death of Scholars",
    body: "As scholars die, true knowledge will be lifted from the earth, and people will turn to ignorant leaders who misguide themselves and others.",
    prophecies: [
      "Allah does not take away knowledge by snatching it away from the people, but by taking away the scholars, until when none are left, people take ignorant ones as leaders; they will issue rulings without knowledge and will go astray and lead others astray. (Sahih al-Bukhari 100; Sahih Muslim 2673)"
    ],
    ref: "Sahih al-Bukhari 100; Sahih Muslim 2673"
  },

  // ⚔️ Political & Global Signs
  {
    title: "War over the Treasure of the Euphrates",
    body: "A great war will erupt over a treasure uncovered beneath the Euphrates River, causing massive loss of life.",
    prophecies: [
      "The Hour will not come until the Euphrates uncovers a mountain of gold, over which people will fight. Ninety-nine out of every hundred will be killed, and each man among them will say, ‘Perhaps I may be the one who survives.’ (Sahih Muslim 2894)"
    ],
    ref: "Sahih Muslim 2894"
  },
  {
    title: "Arab Land Returning to Greenery and Rivers",
    body: "The Prophet ﷺ foretold that the Arabian Peninsula — once desert — will again become fertile, with meadows and rivers.",
    prophecies: [
      "The Hour will not come until the land of the Arabs returns to being meadows and rivers. (Sahih Muslim 157a)"
    ],
    ref: "Sahih Muslim 157a"
  },
  {
    title: "Alliance Between Muslims and Romans Against a Common Enemy",
    body: "Before the appearance of Dajjal, Muslims and Romans (Christians) will form an alliance to fight a common enemy, followed by betrayal.",
    prophecies: [
      "You will make a secure truce with the Romans, then you will fight an enemy beyond them, and you will be victorious and take much booty. (Abu Dawud 4292; Ibn Majah 4095)"
    ],
    ref: "Sunan Abu Dawud 4292; Sunan Ibn Majah 4095"
  },

  // 🌍 Natural & Environmental Signs
  {
    title: "Increase in Rain but Decrease in Blessing",
    body: "Although rainfall will increase near the end times, it will bring little benefit to the land or people.",
    prophecies: [
      "Among the signs of the Hour is that rain will be abundant but the earth will not bring forth vegetation. (Ibn Majah 4036)"
    ],
    ref: "Sunan Ibn Majah 4036"
  },

  // 😈 Moral & Social Corruption
  {
    title: "Open Fornication and Perversion",
    body: "The Prophet ﷺ said that near the Hour, people would commit fornication openly without shame or privacy.",
    prophecies: [
      "Among the signs of the Hour is that people will commit fornication in the open like donkeys. (Musnad Ahmad 2/367)"
    ],
    ref: "Musnad Ahmad 2/367"
  },
  {
    title: "Competing in Decoration of Graves and Mosques",
    body: "People will begin to compete in adorning mosques and graves, focusing on outward beauty rather than spiritual value.",
    prophecies: [
      "The Hour will not come until people compete in the adornment of their mosques. (Abu Dawud 449)"
    ],
    ref: "Sunan Abu Dawud 449"
  },
  {
    title: "Men Imitating Women and Women Imitating Men",
    body: "The Prophet ﷺ cursed those who blur the distinctions between the genders in behavior, appearance, and dress.",
    prophecies: [
      "The Prophet ﷺ cursed men who imitate women and women who imitate men. (Sahih al-Bukhari 5885)"
    ],
    ref: "Sahih al-Bukhari 5885"
  }
];
const additionalEndTimesPropheciesUrdu = [
  // 🕌 دینی و روحانی زوال
  {
    title: "مسجدوں کی زینت مگر ہدایت سے خالی",
    body: "نبی کریم ﷺ نے پیش گوئی فرمائی کہ لوگ اپنی مسجدوں کی ظاہری خوبصورتی پر فخر کریں گے مگر ان میں خلوصِ عبادت اور ہدایت باقی نہیں رہے گی۔",
    prophecies: [
      "قیامت اس وقت تک قائم نہیں ہوگی جب تک لوگ اپنی مسجدوں پر فخر نہ کرنے لگیں۔ (ابو داود 449؛ ابن ماجہ 739)"
    ],
    ref: "سنن ابو داود 449؛ سنن ابن ماجہ 739"
  },
  {
    title: "قرآن کی تلاوت مگر عمل نہ کرنا",
    body: "نبی ﷺ نے فرمایا کہ آخری زمانے میں لوگ قرآن کو خوبصورت انداز میں پڑھیں گے مگر اس پر عمل نہیں کریں گے۔",
    prophecies: [
      "ایسا وقت آئے گا جب اسلام کا صرف نام باقی رہ جائے گا اور قرآن کا صرف رسم الخط۔ (ابن ماجہ 4049)"
    ],
    ref: "سنن ابن ماجہ 4049"
  },
  {
    title: "علماء کے انتقال سے علم کا اٹھ جانا",
    body: "جب علماء وفات پائیں گے تو حقیقی علم زمین سے اٹھ جائے گا، اور لوگ جاہلوں کو رہنما بنا لیں گے جو خود بھی گمراہ ہوں گے اور دوسروں کو بھی گمراہ کریں گے۔",
    prophecies: [
      "اللہ تعالیٰ علم کو لوگوں سے چھین کر نہیں اٹھائے گا بلکہ علماء کے انتقال سے علم اٹھائے گا، یہاں تک کہ جب کوئی عالم باقی نہیں رہے گا تو لوگ جاہلوں کو رہنما بنا لیں گے؛ وہ بغیر علم کے فتویٰ دیں گے، خود بھی گمراہ ہوں گے اور دوسروں کو بھی گمراہ کریں گے۔ (صحیح بخاری 100؛ صحیح مسلم 2673)"
    ],
    ref: "صحیح بخاری 100؛ صحیح مسلم 2673"
  },

  // ⚔️ سیاسی و عالمی نشانیاں
  {
    title: "دریائے فرات کے خزانے پر جنگ",
    body: "نبی ﷺ نے فرمایا کہ دریائے فرات کے نیچے ایک خزانہ ظاہر ہوگا، جس پر بڑی جنگ ہوگی اور بے شمار لوگ مارے جائیں گے۔",
    prophecies: [
      "قیامت اس وقت تک قائم نہیں ہوگی جب تک دریائے فرات سونے کے ایک پہاڑ کو ظاہر نہ کرے، جس پر لوگ لڑیں گے۔ سو میں سے ننانوے مارے جائیں گے، اور ہر شخص یہ کہے گا کہ شاید میں بچ جاؤں۔ (صحیح مسلم 2894)"
    ],
    ref: "صحیح مسلم 2894"
  },
  {
    title: "عرب کی سرزمین کا سرسبز و شاداب ہونا",
    body: "نبی ﷺ نے فرمایا کہ قیامت اس وقت تک قائم نہیں ہوگی جب تک عرب کی سرزمین دوبارہ سرسبز و شاداب نہ ہو جائے اور اس میں نہریں اور چراگاہیں نہ بن جائیں۔",
    prophecies: [
      "قیامت اس وقت تک قائم نہیں ہوگی جب تک عرب کی سرزمین چراگاہوں اور نہروں میں تبدیل نہ ہو جائے۔ (صحیح مسلم 157a)"
    ],
    ref: "صحیح مسلم 157a"
  },
  {
    title: "مسلمانوں اور رومیوں (عیسائیوں) کا ایک مشترکہ دشمن کے خلاف اتحاد",
    body: "دجال کے ظاہر ہونے سے پہلے مسلمان اور رومی (عیسائی) ایک مشترکہ دشمن کے خلاف اتحاد کریں گے، پھر بعد میں یہ اتحاد ٹوٹ جائے گا۔",
    prophecies: [
      "تم رومیوں کے ساتھ ایک پُرامن معاہدہ کرو گے، پھر تم دونوں ایک مشترکہ دشمن کے خلاف لڑو گے، فتح تمہیں نصیب ہوگی اور تمہیں مالِ غنیمت ملے گا۔ (ابو داود 4292؛ ابن ماجہ 4095)"
    ],
    ref: "سنن ابو داود 4292؛ سنن ابن ماجہ 4095"
  },

  // 🌍 قدرتی و ماحولیاتی نشانیاں
  {
    title: "بارش میں اضافہ مگر برکت کا خاتمہ",
    body: "آخری زمانے میں بارش تو زیادہ ہوگی مگر زمین میں اس کی برکت نہیں ہوگی، یعنی پیداوار کم ہو جائے گی۔",
    prophecies: [
      "قیامت کی نشانیوں میں سے ایک یہ ہے کہ بارش بہت ہوگی مگر زمین کوئی پیداوار نہیں دے گی۔ (ابن ماجہ 4036)"
    ],
    ref: "سنن ابن ماجہ 4036"
  },

  // 😈 اخلاقی و سماجی بگاڑ
  {
    title: "کھلم کھلا زنا اور بے حیائی",
    body: "نبی ﷺ نے فرمایا کہ قیامت کے قریب لوگ زنا کو علانیہ اور بے شرمی کے ساتھ کریں گے، جیسے گدھے کھلے عام ملاپ کرتے ہیں۔",
    prophecies: [
      "قیامت کی نشانیوں میں سے ایک یہ ہے کہ لوگ علانیہ زنا کریں گے جیسے گدھے کرتے ہیں۔ (مسند احمد 2/367)"
    ],
    ref: "مسند احمد 2/367"
  },
  {
    title: "قبروں اور مسجدوں کی سجاوٹ میں مقابلہ",
    body: "لوگ مسجدوں اور قبروں کی تزئین و آرائش میں مقابلہ کریں گے، اور اصل روحانیت اور خلوص نظر انداز کر دیں گے۔",
    prophecies: [
      "قیامت اس وقت تک قائم نہیں ہوگی جب تک لوگ اپنی مسجدوں کی آرائش میں مقابلہ نہ کرنے لگیں۔ (ابو داود 449)"
    ],
    ref: "سنن ابو داود 449"
  },
  {
    title: "مردوں کا عورتوں اور عورتوں کا مردوں کی مشابہت اختیار کرنا",
    body: "نبی ﷺ نے ان مردوں اور عورتوں پر لعنت فرمائی جو لباس، طرزِ عمل یا انداز میں ایک دوسرے کی مشابہت اختیار کرتے ہیں۔",
    prophecies: [
      "نبی ﷺ نے ان مردوں پر لعنت فرمائی جو عورتوں کی مشابہت اختیار کرتے ہیں، اور ان عورتوں پر جو مردوں کی مشابہت اختیار کرتی ہیں۔ (صحیح بخاری 5885)"
    ],
    ref: "صحیح بخاری 5885"
  }
];



const all = [...endTimesProphecies , ...extendedEndTimesProphecies ,...additionalEndTimesProphecies]
const allUrdu = [...endTimesPropheciesUrdu , ...extendedEndTimesPropheciesUrdu ,...additionalEndTimesPropheciesUrdu]
const  fulfilledProphecies = [
  {
    title: "Spread of Islam and Global Reach",
    body: "The Prophet ﷺ foretold that Islam would spread across the earth, reaching the eastern and western horizons. Within a century, Islam had expanded beyond Arabia into Africa, Asia, and Europe — far beyond what could have been imagined at the time.",
    prophecies: [
      "The Messenger of Allah ﷺ said: 'Allah folded the earth for me, and I saw its eastern and western parts. The dominion of my Ummah will reach what was folded for me of it.' (Sahih Muslim 2889)"
    ],
    ref: "Sahih Muslim 2889"
  },
  {
    title: "Fall of the Persian Empire",
    body: "The Prophet ﷺ foretold that the Persian Empire would fall and its treasures would be spent in Allah’s cause. Within a few decades, the Sassanid Empire was conquered by Muslim armies, fulfilling this prophecy.",
    prophecies: [
      "The Prophet ﷺ said: 'When Kisra (the Persian king) perishes, there will be no Kisra after him; and when Caesar perishes, there will be no Caesar after him. You will spend their treasures in Allah’s cause.' (Sahih al-Bukhari 3176, Sahih Muslim 2918)"
    ],
    ref: "Sahih al-Bukhari 3176; Sahih Muslim 2918"
  },
  {
    title: "Conquest of Makkah",
    body: "The peaceful conquest of Makkah was predicted in the Qur'an and realized when the Prophet ﷺ and his companions entered the city without bloodshed, reclaiming it as the center of Islam.",
    prophecies: [
      "Indeed, We have given you, [O Muhammad], a clear conquest. (Qur'an 48:1)",
      "Certainly has Allah showed to His Messenger the vision in truth: You will surely enter al-Masjid al-Haram, if Allah wills, in safety... (Qur'an 48:27)"
    ],
    ref: "Qur'an 48:1, 48:27"
  },
  {
    title: "Prediction of Battle of Badr Outcome",
    body: "Before the Battle of Badr, the Prophet ﷺ pointed to specific spots where the leaders of Quraysh would fall. The battle later unfolded exactly as foretold.",
    prophecies: [
      "Anas reported: The Prophet ﷺ pointed to the ground and said, 'This is the place where so-and-so will fall.' None of them missed the place where the Prophet ﷺ pointed. (Sahih Muslim 1779)"
    ],
    ref: "Sahih Muslim 1779"
  },
  {
    title: "Prediction of Large-Scale Wealth, Buildings, and Killing",
    body: "The Prophet ﷺ foretold that near the end of time, wealth would increase, people would compete in building tall buildings, and killing would become widespread — phenomena observable today in many parts of the world.",
    prophecies: [
      "The Hour will not come until wealth becomes abundant, so that a wealthy person will be anxious lest nobody accept his charity; until people compete with one another in constructing high buildings; and until killing increases. (Sahih al-Bukhari 7121; Sahih Muslim 157)"
    ],
    ref: "Sahih al-Bukhari 7121; Sahih Muslim 157"
  },
  {
    title: "Prediction of Battles Against the Turks and Mongols",
    body: "The Prophet ﷺ described future wars against a people with small eyes, flat noses, and faces like shields coated with leather — a description matching Turkic and Mongol tribes encountered centuries later.",
    prophecies: [
      "The Hour will not come until you fight a people whose faces are like shields covered with leather. (Sahih al-Bukhari 2928; Sahih Muslim 2912)"
    ],
    ref: "Sahih al-Bukhari 2928; Sahih Muslim 2912"
  }

];
const fulfilledPropheciesUrdu = [
  {
    title: "اسلام کا پھیلاؤ اور عالمی غلبہ",
    body: "نبی کریم ﷺ نے پیش گوئی فرمائی تھی کہ اسلام پوری زمین پر پھیل جائے گا، مشرق و مغرب کے کناروں تک پہنچے گا۔ آپ ﷺ کے وصال کے ایک صدی کے اندر ہی اسلام عرب سے نکل کر افریقہ، ایشیا اور یورپ تک پھیل چکا تھا — جو اس وقت کے لحاظ سے ناقابلِ تصور تھا۔",
    prophecies: [
      "رسول اللہ ﷺ نے فرمایا: 'اللہ نے میرے لیے زمین کو لپیٹ دیا، میں نے اس کے مشرقی اور مغربی حصے دیکھے، اور میری امت کی بادشاہت ان حصوں تک پہنچے گی جو میرے لیے لپیٹے گئے۔' (صحیح مسلم 2889)"
    ],
    ref: "صحیح مسلم 2889"
  },
  {
    title: "فارس (ایران) کی سلطنت کا خاتمہ",
    body: "نبی کریم ﷺ نے خبر دی تھی کہ فارس کی سلطنت (ساسانی سلطنت) ختم ہو جائے گی اور اس کے خزانے اللہ کی راہ میں خرچ کیے جائیں گے۔ چند دہائیوں کے اندر ہی مسلمان فوجوں نے ساسانی سلطنت کو فتح کر لیا اور یہ پیش گوئی پوری ہوئی۔",
    prophecies: [
      "نبی ﷺ نے فرمایا: 'جب کسریٰ (فارس کا بادشاہ) ہلاک ہوگا تو اس کے بعد کوئی کسریٰ نہ ہوگا، اور جب قیصر (روم کا بادشاہ) ہلاک ہوگا تو اس کے بعد کوئی قیصر نہ ہوگا، تم ان کے خزانے اللہ کی راہ میں خرچ کرو گے۔' (صحیح بخاری 3176؛ صحیح مسلم 2918)"
    ],
    ref: "صحیح بخاری 3176؛ صحیح مسلم 2918"
  },
  {
    title: "فتحِ مکہ کی پیش گوئی",
    body: "قرآن میں مکہ کی پرامن فتح کی خبر دی گئی تھی، جو اس وقت پوری ہوئی جب نبی ﷺ اور آپ کے صحابہؓ بغیر خون خرابے کے مکہ میں داخل ہوئے اور اسے اسلام کا مرکز بنا دیا۔",
    prophecies: [
      "بیشک ہم نے تمہیں (اے محمد ﷺ) ایک کھلی فتح عطا کی۔ (القرآن 48:1)",
      "یقیناً اللہ نے اپنے رسول کو سچا خواب دکھایا کہ تم ضرور مسجدِ حرام میں امن کے ساتھ داخل ہوگے اگر اللہ نے چاہا۔ (القرآن 48:27)"
    ],
    ref: "القرآن 48:1، 48:27"
  },
  {
    title: "جنگِ بدر کے نتائج کی پیش گوئی",
    body: "جنگِ بدر سے پہلے نبی ﷺ نے ان مقامات کی نشاندہی فرمائی جہاں قریش کے بڑے سردار مارے جائیں گے۔ بعد میں جنگ کے دوران وہ سب بالکل انہی جگہوں پر مارے گئے جہاں آپ ﷺ نے اشارہ فرمایا تھا۔",
    prophecies: [
      "انسؓ سے روایت ہے کہ نبی ﷺ نے زمین پر اشارہ کرتے ہوئے فرمایا: 'یہاں فلاں گرے گا، یہاں فلاں گرے گا۔' اور کوئی بھی اس جگہ سے نہ ہٹا جہاں آپ ﷺ نے نشاندہی فرمائی تھی۔ (صحیح مسلم 1779)"
    ],
    ref: "صحیح مسلم 1779"
  },
  {
    title: "مال و دولت، بلند عمارتوں اور قتل و غارت کی کثرت",
    body: "نبی کریم ﷺ نے پیش گوئی فرمائی کہ قیامت کے قریب مال و دولت بہت بڑھ جائے گی، لوگ ایک دوسرے سے اونچی عمارتیں بنانے میں مقابلہ کریں گے، اور قتل و غارت عام ہو جائے گی — جیسا کہ آج دنیا میں دیکھا جا سکتا ہے۔",
    prophecies: [
      "قیامت اس وقت تک قائم نہیں ہوگی جب تک مال اس قدر زیادہ نہ ہو جائے کہ دولت مند کو یہ فکر ہو کہ کوئی اس کا صدقہ قبول کرے، یہاں تک کہ لوگ ایک دوسرے سے اونچی عمارتیں بنانے میں مقابلہ کریں گے، اور قتل و غارت عام ہو جائے گی۔ (صحیح بخاری 7121؛ صحیح مسلم 157)"
    ],
    ref: "صحیح بخاری 7121؛ صحیح مسلم 157"
  },
  {
    title: "ترکوں اور منگولوں سے جنگوں کی پیش گوئی",
    body: "نبی ﷺ نے خبر دی تھی کہ تم ایک ایسی قوم سے جنگ کرو گے جن کی آنکھیں چھوٹی ہوں گی، چہرے ایسے ہوں گے جیسے چمڑے سے ڈھکے ہوئے ڈھال، اور ناک چپٹی ہوں گی — یہ وصف ترک اور منگول اقوام پر پورا اترتا ہے جن سے صدیوں بعد مسلمانوں کی جنگیں ہوئیں۔",
    prophecies: [
      "قیامت اس وقت تک قائم نہیں ہوگی جب تک تم ایک ایسی قوم سے جنگ نہ کرو جن کے چہرے چمڑے سے ڈھکی ہوئی ڈھالوں کی طرح ہوں۔ (صحیح بخاری 2928؛ صحیح مسلم 2912)"
    ],
    ref: "صحیح بخاری 2928؛ صحیح مسلم 2912"
  }
];

const additionalFulfilledProphecies = [
  {
    title: "Death of the Prophet ﷺ and the Apostasy Wars",
    body: "The Prophet ﷺ foretold his own passing and that many Arabs would abandon Islam afterward — both of which occurred soon after his death, leading to the Ridda (apostasy) wars during Abu Bakr’s caliphate.",
    prophecies: [
      "The Prophet ﷺ said: 'You will follow the ways of those before you, handspan by handspan, arm’s length by arm’s length...' (Bukhari 7320)",
      "He also foretold: 'The people will turn back on their heels after me.' (Sahih al-Bukhari 3178; Sahih Muslim 2296)"
    ],
    ref: "Sahih al-Bukhari 3178, 7320; Sahih Muslim 2296"
  },
  {
    title: "Martyrdom of ‘Uthman ibn ‘Affan رضي الله عنه",
    body: "The Prophet ﷺ predicted that ‘Uthman would be tested severely and that he would be killed unjustly while reciting the Qur’an — a prophecy fulfilled during his caliphate.",
    prophecies: [
      "The Prophet ﷺ said to ‘Uthman: 'O ‘Uthman, Allah will surely clothe you with a garment (of leadership), and if the hypocrites seek to strip it from you, do not remove it until you meet me.' (Tirmidhi 3704)"
    ],
    ref: "Jami‘ al-Tirmidhi 3704"
  },
  {
    title: "The Battle of Siffin and Fitnah Among Muslims",
    body: "The Prophet ﷺ foretold that after his time, there would be severe internal conflict among the Muslims — including fighting between ‘Ali and Mu‘awiyah — which occurred in the Battle of Siffin.",
    prophecies: [
      "The Prophet ﷺ said: 'Do not revert to disbelief after me by striking the necks of one another.' (Sahih al-Bukhari 121; Sahih Muslim 65)"
    ],
    ref: "Sahih al-Bukhari 121; Sahih Muslim 65"
  },
  {
    title: "Plague of ‘Amwās (in Syria)",
    body: "The Prophet ﷺ said that a plague would strike the people, and indeed, the plague of ‘Amwās occurred during the caliphate of ‘Umar ibn al-Khattab, claiming thousands of lives including companions.",
    prophecies: [
      "The Prophet ﷺ said: 'This plague is a punishment which Allah used to send on whom He wished, but He has made it a mercy for the believers.' (Sahih al-Bukhari 3474; Sahih Muslim 2218)"
    ],
    ref: "Sahih al-Bukhari 3474; Sahih Muslim 2218"
  },
  {
    title: "Fire in Hijaz Lighting Up the Necks of Camels in Busra",
    body: "The Prophet ﷺ said that a fire would emerge from the land of Hijaz illuminating the necks of camels in Busra (in Syria). In 654 AH, a massive volcanic eruption near Madinah fulfilled this description.",
    prophecies: [
      "The Prophet ﷺ said: 'The Hour will not come until a fire comes out from the land of Hijaz and lights up the necks of camels in Busra.' (Sahih al-Bukhari 7118; Sahih Muslim 2902)"
    ],
    ref: "Sahih al-Bukhari 7118; Sahih Muslim 2902"
  },
  {
    title: "Conquest of Jerusalem",
    body: "The Prophet ﷺ foretold that Jerusalem (Bayt al-Maqdis) would be conquered — it happened in 15 AH under Caliph ‘Umar ibn al-Khattab.",
    prophecies: [
      "The Prophet ﷺ said: 'Count six things before the Hour: my death, then the conquest of Jerusalem...' (Sahih al-Bukhari 3176; Ahmad 5/388)"
    ],
    ref: "Sahih al-Bukhari 3176; Musnad Ahmad 5/388"
  },
  {
    title: "Conquest of Egypt",
    body: "The Prophet ﷺ foretold that Egypt would be conquered and advised kind treatment of its people. This was fulfilled during the caliphate of ‘Umar رضي الله عنه.",
    prophecies: [
      "The Prophet ﷺ said: 'You will conquer Egypt, a land where the qirat is mentioned. So treat its people well, for they have protection and kinship with us.' (Sahih Muslim 2543)"
    ],
    ref: "Sahih Muslim 2543"
  },
  {
    title: "Prediction of Caliphate Then Tyrannical Rule",
    body: "The Prophet ﷺ outlined the future political phases after him: the rightly guided caliphate, followed by hereditary kingship and tyrannical rule — a sequence that occurred exactly as foretold.",
    prophecies: [
      "The Prophet ﷺ said: 'The Prophethood will remain among you as long as Allah wills... then there will be caliphate on the Prophetic method... then kingship... then tyranny.' (Musnad Ahmad 18406)"
    ],
    ref: "Musnad Ahmad 18406"
  },
  {
    title: "Prediction of the Division of the Muslim Ummah",
    body: "The Prophet ﷺ foretold that his Ummah would split into many sects, each claiming to be upon the truth. This fragmentation occurred early in Islamic history and continues today.",
    prophecies: [
      "The Prophet ﷺ said: 'My Ummah will divide into seventy-three sects; all of them will be in the Fire except one.' (Abu Dawud 4597; Tirmidhi 2641)"
    ],
    ref: "Sunan Abu Dawud 4597; Jami‘ al-Tirmidhi 2641"
  },
  {
    title: "Loss of Trust and Appointment of the Unqualified",
    body: "The Prophet ﷺ said that trust would diminish and leadership would fall into the hands of the unfit — a reality that began even in early generations.",
    prophecies: [
      "When honesty is lost, then wait for the Hour. It was asked: ‘How will honesty be lost?’ He said: ‘When authority is given to those who do not deserve it.’ (Sahih al-Bukhari 6496)"
    ],
    ref: "Sahih al-Bukhari 6496"
  }
];
const additionalFulfilledPropheciesUrdu = [
  {
    title: "نبی کریم ﷺ کا وصال اور ارتداد کی جنگیں",
    body: "نبی کریم ﷺ نے اپنے وصال اور اپنے بعد عربوں کے اسلام سے پھر جانے کی خبر دی تھی — یہ دونوں باتیں آپ ﷺ کے وصال کے فوراً بعد واقع ہوئیں، جب خلیفہ ابو بکرؓ کے دور میں ارتداد کی جنگیں ہوئیں۔",
    prophecies: [
      "نبی ﷺ نے فرمایا: 'تم ضرور ان لوگوں کے طریقوں کی پیروی کرو گے جو تم سے پہلے تھے، بالشت در بالشت، ہاتھ در ہاتھ...' (بخاری 7320)",
      "اور فرمایا: 'لوگ میرے بعد اپنی ایڑیوں کے بل پلٹ جائیں گے۔' (صحیح بخاری 3178؛ صحیح مسلم 2296)"
    ],
    ref: "صحیح بخاری 3178، 7320؛ صحیح مسلم 2296"
  },
  {
    title: "حضرت عثمان بن عفانؓ کی شہادت",
    body: "نبی ﷺ نے پیش گوئی فرمائی کہ حضرت عثمانؓ کو سخت آزمائش پیش آئے گی اور وہ قرآن کی تلاوت کرتے ہوئے ناحق قتل کیے جائیں گے — یہ پیش گوئی ان کے دورِ خلافت میں پوری ہوئی۔",
    prophecies: [
      "نبی ﷺ نے فرمایا: 'اے عثمان! اللہ تمہیں خلافت کا لباس پہنائے گا، اور اگر منافق تم سے اسے اتارنے کی کوشش کریں تو اسے مت اتارنا یہاں تک کہ تم مجھ سے ملاقات کرو۔' (ترمذی 3704)"
    ],
    ref: "جامع الترمذی 3704"
  },
  {
    title: "جنگ صفین اور مسلمانوں میں فتنہ",
    body: "نبی ﷺ نے فرمایا کہ میرے بعد مسلمانوں کے درمیان شدید اختلافات اور خون ریزی ہوگی — جس میں حضرت علیؓ اور معاویہؓ کے درمیان جنگ صفین بھی شامل تھی۔",
    prophecies: [
      "نبی ﷺ نے فرمایا: 'میرے بعد کفر کی طرف مت لوٹنا کہ تم ایک دوسرے کی گردنیں مارنے لگو۔' (صحیح بخاری 121؛ صحیح مسلم 65)"
    ],
    ref: "صحیح بخاری 121؛ صحیح مسلم 65"
  },
  {
    title: "شام میں عمواس کی طاعون",
    body: "نبی ﷺ نے خبر دی کہ ایک طاعون لوگوں پر آئے گا، اور واقعی خلافتِ عمرؓ کے زمانے میں شام کے علاقے عمواس میں طاعون آیا، جس میں ہزاروں لوگ بشمول کئی صحابہ کرامؓ وفات پا گئے۔",
    prophecies: [
      "نبی ﷺ نے فرمایا: 'یہ طاعون ایک عذاب ہے جسے اللہ جس پر چاہے بھیجتا ہے، لیکن مومنوں کے لیے یہ رحمت ہے۔' (صحیح بخاری 3474؛ صحیح مسلم 2218)"
    ],
    ref: "صحیح بخاری 3474؛ صحیح مسلم 2218"
  },
  {
    title: "حجاز میں آگ کا ظہور جو بُصرٰی کے اونٹوں کی گردنوں کو روشن کرے گی",
    body: "نبی ﷺ نے فرمایا کہ حجاز کی سرزمین سے ایک آگ نکلے گی جو بُصرٰی (شام) میں اونٹوں کی گردنوں کو روشن کرے گی۔ 654 ہجری میں مدینہ کے قریب ایک عظیم آتش فشاں پھٹا جس سے آسمان تک روشنی پھیل گئی — یہ پیش گوئی حرف بہ حرف پوری ہوئی۔",
    prophecies: [
      "نبی ﷺ نے فرمایا: 'قیامت اس وقت تک قائم نہیں ہوگی جب تک حجاز کی زمین سے ایک آگ نہ نکلے جو بُصرٰی کے اونٹوں کی گردنوں کو روشن کرے۔' (صحیح بخاری 7118؛ صحیح مسلم 2902)"
    ],
    ref: "صحیح بخاری 7118؛ صحیح مسلم 2902"
  },
  {
    title: "بیت المقدس (یروشلم) کی فتح",
    body: "نبی ﷺ نے خبر دی تھی کہ بیت المقدس فتح کیا جائے گا — یہ پیش گوئی خلافتِ عمرؓ کے زمانے میں 15 ہجری میں پوری ہوئی۔",
    prophecies: [
      "نبی ﷺ نے فرمایا: 'قیامت سے پہلے چھ چیزیں شمار کرو: میرا انتقال، پھر بیت المقدس کی فتح...' (صحیح بخاری 3176؛ احمد 5/388)"
    ],
    ref: "صحیح بخاری 3176؛ مسند احمد 5/388"
  },
  {
    title: "مصر کی فتح",
    body: "نبی ﷺ نے پیش گوئی فرمائی کہ مصر فتح کیا جائے گا اور وہاں کے لوگوں کے ساتھ حسنِ سلوک کی تاکید فرمائی۔ یہ پیش گوئی خلافتِ عمرؓ کے زمانے میں پوری ہوئی۔",
    prophecies: [
      "نبی ﷺ نے فرمایا: 'تم مصر فتح کرو گے، وہ سرزمین ہے جہاں قیراط کا ذکر ہے، پس اس کے لوگوں کے ساتھ اچھا سلوک کرنا کیونکہ ان کا ہمارے ساتھ قرابت اور ذمہ داری کا رشتہ ہے۔' (صحیح مسلم 2543)"
    ],
    ref: "صحیح مسلم 2543"
  },
  {
    title: "خلافت اور پھر جابرانہ بادشاہت کی پیش گوئی",
    body: "نبی ﷺ نے اپنے بعد آنے والے سیاسی ادوار کی خبر دی: پہلے خلافتِ راشدہ، پھر ملوکیت، پھر ظلم و جبر کا دور — اور یہ ترتیب بالکل اسی طرح تاریخ میں ظاہر ہوئی۔",
    prophecies: [
      "نبی ﷺ نے فرمایا: 'نبوت تم میں رہے گی جب تک اللہ چاہے گا... پھر نبوت کے طریقے پر خلافت ہوگی... پھر بادشاہت... پھر ظلم و جبر کا دور آئے گا۔' (مسند احمد 18406)"
    ],
    ref: "مسند احمد 18406"
  },
  {
    title: "امتِ مسلمہ کا فرقوں میں بٹ جانا",
    body: "نبی ﷺ نے فرمایا کہ میری امت تہتر فرقوں میں بٹ جائے گی، اور ہر گروہ اپنے آپ کو حق پر سمجھے گا — یہ پیش گوئی ابتدائی صدیوں میں ہی پوری ہو گئی اور آج بھی قائم ہے۔",
    prophecies: [
      "نبی ﷺ نے فرمایا: 'میری امت تہتر فرقوں میں تقسیم ہو جائے گی، ان میں سے سب جہنم میں ہوں گے سوائے ایک کے۔' (ابو داود 4597؛ ترمذی 2641)"
    ],
    ref: "سنن ابو داود 4597؛ جامع الترمذی 2641"
  },
  {
    title: "امانت کا ضیاع اور نااہلوں کا اقتدار میں آنا",
    body: "نبی ﷺ نے فرمایا کہ امانت داری ختم ہو جائے گی اور اقتدار نااہل لوگوں کے ہاتھوں میں چلا جائے گا — یہ کیفیت بعد کے ادوار میں واضح طور پر ظاہر ہوئی۔",
    prophecies: [
      "جب امانت ضائع کر دی جائے تو قیامت کا انتظار کرو۔ پوچھا گیا: امانت کیسے ضائع ہوگی؟ فرمایا: جب اقتدار نااہلوں کے حوالے کیا جائے۔ (صحیح بخاری 6496)"
    ],
    ref: "صحیح بخاری 6496"
  }
];


const warRelatedProphecies = [
  {
    title: "The Great Battle (Al-Malhama al-Kubra)",
    body: "The Prophet ﷺ foretold a massive apocalyptic war between the Muslims and the Romans (Byzantines) before the emergence of the Dajjal. It will be one of the greatest and most intense battles in human history.",
    prophecies: [
      "The Last Hour will not come until the Romans camp at al-A'maq or in Dabiq. Then an army from Madinah of the best people on earth at that time will go out to meet them. There will be a terrible battle... (Sahih Muslim 2897a)"
    ],
    ref: "Sahih Muslim 2897a"
  },
  {
    title: "The Muslim–Roman Alliance and Betrayal",
    body: "Before the Great Battle, Muslims and Romans will form an alliance to fight a common enemy. After their joint victory, a disagreement will lead to betrayal and war.",
    prophecies: [
      "You will make a secure truce with the Romans and together you will fight an enemy behind them and be victorious. Then a man from among the Romans will raise the cross and say, 'The cross has prevailed!' A Muslim will become angry and break it, leading to betrayal and the Great Battle. (Abu Dawud 4292; Ibn Majah 4095)"
    ],
    ref: "Sunan Abu Dawud 4292; Sunan Ibn Majah 4095"
  },
  {
    title: "Conquest of Constantinople After the Great War",
    body: "After the Malhama, Muslims will conquer Constantinople peacefully through takbir (glorifying Allah) rather than warfare, shortly before the appearance of the Dajjal.",
    prophecies: [
      "The Prophet ﷺ said: 'The Great Battle will occur; then the conquest of Constantinople; and then the Dajjal will appear.' (Abu Dawud 4294)"
    ],
    ref: "Sunan Abu Dawud 4294"
  },
  {
    title: "The Black Flags from the East",
    body: "The Prophet ﷺ foretold that an army with black flags would emerge from the east, fighting for truth and justice. Some narrations connect this to the appearance of the Mahdi.",
    prophecies: [
      "An army will come from the east carrying black banners; they will fight for the truth until they prevail. Then they will hand over authority to the Mahdi. (Ibn Majah 4084; Musnad Ahmad 22387)"
    ],
    ref: "Sunan Ibn Majah 4084; Musnad Ahmad 22387"
  },
  {
    title: "The Army that Will Be Swallowed by the Earth",
    body: "An army will march toward Makkah to attack the Mahdi but will be swallowed by the earth before reaching him — a sign confirming his legitimacy.",
    prophecies: [
      "An army will attack the Ka'bah and when they reach the desert, the earth will swallow them up, the first and the last of them. (Sahih al-Bukhari 2118; Sahih Muslim 2882)"
    ],
    ref: "Sahih al-Bukhari 2118; Sahih Muslim 2882"
  },
  {
    title: "Wars Between Muslims Themselves",
    body: "The Prophet ﷺ warned that his Ummah would eventually turn on itself, with Muslims fighting Muslims due to worldly disputes and false leaders.",
    prophecies: [
      "The Prophet ﷺ said: 'Do not revert to disbelief after me by striking the necks of one another.' (Sahih al-Bukhari 121; Sahih Muslim 65)"
    ],
    ref: "Sahih al-Bukhari 121; Sahih Muslim 65"
  },
  {
    title: "Battle Against the Turks and Mongols",
    body: "The Prophet ﷺ described future wars against a people with small eyes and flat faces — interpreted as Turks and Mongols — which took place centuries later.",
    prophecies: [
      "The Hour will not come until you fight people with small eyes, broad faces, and flat noses, whose faces look like shields coated with leather. (Sahih al-Bukhari 2928; Sahih Muslim 2912)"
    ],
    ref: "Sahih al-Bukhari 2928; Sahih Muslim 2912"
  },
  {
    title: "Wars and Civil Strife Near the Euphrates",
    body: "The Prophet ﷺ foretold that a great treasure or resource would be uncovered beneath the Euphrates River, sparking bloody conflict.",
    prophecies: [
      "The Hour will not come until the Euphrates uncovers a mountain of gold, over which people will fight. Ninety-nine out of every hundred will be killed. (Sahih Muslim 2894)"
    ],
    ref: "Sahih Muslim 2894"
  },
  {
    title: "The Battle Between the Army of the Mahdi and the Dajjal",
    body: "After the Great War and conquest of Constantinople, the Dajjal will emerge and lead a massive army against the believers. Prophet ‘Isa عليه السلام will descend to kill the Dajjal and bring peace.",
    prophecies: [
      "Then Allah will send the Messiah, son of Mary, who will pursue the Dajjal and kill him at the gate of Ludd. (Sahih Muslim 2937)"
    ],
    ref: "Sahih Muslim 2937"
  },
  {
    title: "Wars of Deception and Sudden Conflicts",
    body: "The Prophet ﷺ described that near the end times, wars would erupt suddenly and treaties would often be broken.",
    prophecies: [
      "There will be years of deception in which the liar will be believed, and the truthful will be denied; treaties will often be broken, and bloodshed will become common. (Ahmad 23139; Ibn Majah 4049)"
    ],
    ref: "Musnad Ahmad 23139; Sunan Ibn Majah 4049"
  }
];
const warRelatedPropheciesUrdu = [
  {
    title: "عظیم جنگ (الملحمۃ الکبریٰ)",
    body: "نبی کریم ﷺ نے ایک بہت بڑی آخری جنگ کی پیش گوئی فرمائی تھی جو مسلمانوں اور رومیوں (بازنطینیوں) کے درمیان دجال کے ظہور سے پہلے ہوگی۔ یہ انسانی تاریخ کی سب سے بڑی اور شدید ترین جنگوں میں سے ایک ہوگی۔",
    prophecies: [
      "قیامت اس وقت تک قائم نہیں ہوگی جب تک رومی العَماق یا دابق میں قیام نہ کریں۔ پھر مدینہ سے ایک لشکر، جو اس وقت زمین کے بہترین لوگوں میں سے ہوگا، ان سے مقابلہ کرنے کے لیے نکلے گا۔ پھر ایک سخت جنگ برپا ہوگی... (صحیح مسلم 2897a)"
    ],
    ref: "صحیح مسلم 2897a"
  },
  {
    title: "مسلمانوں اور رومیوں کا اتحاد اور غداری",
    body: "عظیم جنگ سے پہلے مسلمان اور رومی ایک مشترکہ دشمن کے خلاف اتحاد کریں گے۔ فتح کے بعد ایک رومی کے قول پر اختلاف پیدا ہوگا جو غداری اور جنگ کا سبب بنے گا۔",
    prophecies: [
      "تم رومیوں کے ساتھ ایک پُرامن معاہدہ کرو گے اور تم دونوں مل کر ایک مشترکہ دشمن کے خلاف لڑو گے اور غالب آؤ گے۔ پھر ایک رومی صلیب بلند کرے گا اور کہے گا: 'صلیب غالب آگئی!'، اس پر ایک مسلمان غصے میں آکر اسے توڑ دے گا، جس سے غداری اور عظیم جنگ برپا ہوگی۔ (ابو داود 4292؛ ابن ماجہ 4095)"
    ],
    ref: "سنن ابو داود 4292؛ سنن ابن ماجہ 4095"
  },
  {
    title: "عظیم جنگ کے بعد قسطنطنیہ کی فتح",
    body: "الملحمہ کے بعد مسلمان قسطنطنیہ کو بغیر جنگ کے صرف تکبیر اور تسبیح کے ذریعے فتح کریں گے، اور یہ واقعہ دجال کے ظہور سے کچھ پہلے ہوگا۔",
    prophecies: [
      "نبی ﷺ نے فرمایا: 'عظیم جنگ ہوگی، پھر قسطنطنیہ کی فتح ہوگی، پھر دجال ظاہر ہوگا۔' (ابو داود 4294)"
    ],
    ref: "سنن ابو داود 4294"
  },
  {
    title: "مشرق سے سیاہ جھنڈوں والی فوج",
    body: "نبی کریم ﷺ نے فرمایا کہ مشرق سے ایک فوج سیاہ جھنڈے اٹھائے ہوئے نکلے گی جو حق کے لیے لڑے گی اور غالب آئے گی۔ بعض روایات میں اسے امام مہدی سے جوڑا گیا ہے۔",
    prophecies: [
      "مشرق سے ایک لشکر سیاہ جھنڈے لے کر نکلے گا، وہ حق کے لیے جنگ کریں گے یہاں تک کہ غالب آجائیں، پھر وہ اقتدار امام مہدی کے حوالے کریں گے۔ (ابن ماجہ 4084؛ مسند احمد 22387)"
    ],
    ref: "سنن ابن ماجہ 4084؛ مسند احمد 22387"
  },
  {
    title: "وہ لشکر جو زمین میں دھنسا دیا جائے گا",
    body: "ایک لشکر مکہ کی طرف امام مہدی پر حملہ کرنے کے لیے روانہ ہوگا، لیکن راستے میں زمین ان سب کو نگل لے گی — یہ امام مہدی کی حقانیت کی نشانی ہوگی۔",
    prophecies: [
      "ایک لشکر کعبہ پر حملہ کرے گا، اور جب وہ صحرا میں پہنچے گا تو زمین ان سب کو نگل لے گی، ان کے پہلے اور آخری کو۔ (صحیح بخاری 2118؛ صحیح مسلم 2882)"
    ],
    ref: "صحیح بخاری 2118؛ صحیح مسلم 2882"
  },
  {
    title: "مسلمانوں کے درمیان آپسی جنگیں",
    body: "نبی ﷺ نے خبردار فرمایا کہ ایک وقت آئے گا جب امتِ محمد ﷺ خود آپس میں لڑنے لگے گی، دنیاوی جھگڑوں اور جھوٹے رہنماؤں کی وجہ سے۔",
    prophecies: [
      "نبی ﷺ نے فرمایا: 'میرے بعد کفر کی طرف مت لوٹنا کہ ایک دوسرے کی گردنیں کاٹنے لگو۔' (صحیح بخاری 121؛ صحیح مسلم 65)"
    ],
    ref: "صحیح بخاری 121؛ صحیح مسلم 65"
  },
  {
    title: "ترکوں اور منگولوں سے جنگ",
    body: "نبی ﷺ نے ایک ایسی قوم کے خلاف جنگوں کا ذکر کیا جن کی آنکھیں چھوٹی، چہرے چوڑے اور ناک چپٹی ہوں گی — یہ اوصاف ترک اور منگول اقوام پر پورے اترتے ہیں جن سے صدیوں بعد مسلمانوں کی جنگیں ہوئیں۔",
    prophecies: [
      "قیامت اس وقت تک قائم نہیں ہوگی جب تک تم ایک ایسی قوم سے جنگ نہ کرو جن کی آنکھیں چھوٹی، چہرے چوڑے اور ناکیں چپٹی ہوں، اور جن کے چہرے چمڑے سے ڈھکی ڈھالوں کی طرح ہوں۔ (صحیح بخاری 2928؛ صحیح مسلم 2912)"
    ],
    ref: "صحیح بخاری 2928؛ صحیح مسلم 2912"
  },
  {
    title: "فرات کے قریب جنگیں اور فتنے",
    body: "نبی کریم ﷺ نے خبر دی کہ دریائے فرات کے نیچے سے ایک خزانہ یا دولت ظاہر ہوگی جس پر لوگوں میں خونریز جنگ ہوگی۔",
    prophecies: [
      "قیامت اس وقت تک قائم نہیں ہوگی جب تک فرات ایک سونے کے پہاڑ کو ظاہر نہ کر دے، جس پر لوگ لڑیں گے، اور سو میں سے ننانوے قتل کیے جائیں گے۔ (صحیح مسلم 2894)"
    ],
    ref: "صحیح مسلم 2894"
  },
  {
    title: "امام مہدی اور دجال کے لشکر کے درمیان جنگ",
    body: "عظیم جنگ اور قسطنطنیہ کی فتح کے بعد دجال ظاہر ہوگا، وہ ایک عظیم لشکر لے کر مومنین سے جنگ کرے گا۔ پھر حضرت عیسیٰ علیہ السلام نازل ہوں گے اور دجال کو قتل کریں گے۔",
    prophecies: [
      "پھر اللہ مسیح ابن مریم کو بھیجے گا جو دجال کا پیچھا کرے گا اور اسے لُد کے دروازے پر قتل کرے گا۔ (صحیح مسلم 2937)"
    ],
    ref: "صحیح مسلم 2937"
  },
  {
    title: "فریب اور اچانک بھڑک اٹھنے والی جنگیں",
    body: "نبی ﷺ نے فرمایا کہ آخری زمانے میں ایسے سال آئیں گے جن میں دھوکہ عام ہوگا، معاہدے بار بار توڑے جائیں گے اور جنگیں اچانک شروع ہوں گی۔",
    prophecies: [
      "ایسے دھوکے کے سال آئیں گے جن میں جھوٹے کی تصدیق کی جائے گی اور سچے کو جھٹلایا جائے گا؛ معاہدے توڑے جائیں گے اور خونریزی عام ہو جائے گی۔ (مسند احمد 23139؛ ابن ماجہ 4049)"
    ],
    ref: "مسند احمد 23139؛ سنن ابن ماجہ 4049"
  }
];


const allFulfilled = [...fulfilledProphecies,...additionalFulfilledProphecies]
const allFulfilledUrdu = [...fulfilledPropheciesUrdu,...additionalFulfilledPropheciesUrdu]
let makeVisible = ref(false)
const selected = ref(null)
const readThis = (prophecy)=>{
    console.log(prophecy)
    selected.value = prophecy
    makeVisible.value = !makeVisible.value
    console.log(selected.value)
}

const date = new Date()
</script>
