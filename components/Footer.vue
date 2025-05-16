<template>
  <footer class="bg-dark text-white py-12 px-4">
    <div class="container mx-auto max-w-6xl">
      <div class="flex flex-col md:flex-row justify-between mb-10 gap-8">
        <!-- Колонка про компанію -->
        <div class="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 class="text-lg font-semibold mb-5 pb-2 relative after:content-[''] after:absolute after:w-10 after:h-1 after:bg-accent after:bottom-0 after:left-0">
            Про компанію
          </h3>
          <p class="text-gray-300">ГалБетон - сучасний виробник високоякісного бетону для будь-яких потреб будівництва з 2020 року</p>
        </div>

        <!-- Колонка з контактами -->
        <div class="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 class="text-lg font-semibold mb-5 pb-2 relative after:content-[''] after:absolute after:w-10 after:h-1 after:bg-accent after:bottom-0 after:left-0">
            Контакти
          </h3>
          <p class="text-gray-300 mb-2">вул. Луганська, 3, Львів</p>
          <p class="text-gray-300 mb-2">+380 63 621 73 26</p>
          <p class="text-gray-300">contact@galbeton.com</p>
        </div>

        <!-- Колонка швидких посилань -->
        <div class="w-full md:w-1/3">
          <h3 class="text-lg font-semibold mb-5 pb-2 relative after:content-[''] after:absolute after:w-10 after:h-1 after:bg-accent after:bottom-0 after:left-0">
            Швидкі посилання
          </h3>
          <div class="flex flex-col">
            <a
                v-for="(link, index) in links"
                :key="index"
                :href="link.url"
                class="text-gray-300 mb-2 hover:text-accent transition-colors duration-300"
            >
              {{ link.name }}
            </a>
          </div>
        </div>
      </div>

      <!-- Копірайт -->
      <div class="text-center pt-5 border-t border-gray-800 text-gray-400 text-sm">
        <p>&copy; {{ currentYear }} Компанія ГалБетон. Всі права захищені.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from 'vue';

// Навігаційні посилання
const links = ref([
  { name: 'Головна', url: '#' },
  { name: 'Продукція', url: '#' },
  { name: 'Проекти', url: '#' },
  { name: 'Про нас', url: '#' },
  { name: 'Зв\'язок', url: '#' },
]);

// Поточний рік для копірайту
const currentYear = computed(() => new Date().getFullYear());
</script>

