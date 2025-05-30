<script setup lang="ts"></script>

<template>
  <HeroSection
    placeholder="https://al-muradgranite.co.uk/app/uploads/2023/02/PHOTO-2022-10-29-07-16-31.jpg"
  >
    <template v-slot:label>
      <span>Гал</span>
      <span class="text-accent">Бетон</span> - лідер виробництва бетону у Західній Україні
    </template>
    <template v-slot:addition
      >Забезпечуємо якісними будівельними матеріалами ваші проекти з 2005 року
    </template>

  </HeroSection>

  <DefaulSection class="mt-12">
    <template v-slot:label>Про нашу компанію</template>
    <template v-slot:content>
      <div class="flex flex-col gap-10 md:flex-row">
        <div class="text-secondary flex-1 leading-[1.5]">
          <p class="mb-5">
            Компанія "ГалБетон" - це сучасне підприємство з виробництва бетону
            та залізобетонних виробів з досвідом роботи понад 18 років. Ми
            пропонуємо широкий асортимент будівельних матеріалів найвищої якості
            для будівництва будь-якої складності.
          </p>
          <p
            class="border-l-accent-dark text-primary mb-5 border-l-4 pl-10 text-lg font-semibold italic"
          >
            "Наша мета - бути надійним партнером для кожного клієнта,
            забезпечуючи їх будівельні проекти якісними матеріалами та
            професійним сервісом."
          </p>
          <p class="mb-5">
            Сьогодні "ГалБетон" - це потужний виробничий комплекс, оснащений
            сучасним обладнанням європейського рівня. Ми контролюємо якість на
            всіх етапах виробництва, від вибору сировини до доставки готової
            продукції на об'єкт замовника.
          </p>
          <p class="mb-5">Наші переваги:</p>
          <ul class="flex flex-col gap-4">
            <li
              class="before:text-accent before:mr-3 before:font-semibold before:content-['✓']"
            >
              Власне виробництво з автоматизованими лініями
            </li>
            <li
              class="before:text-accent before:mr-3 before:font-semibold before:content-['✓']"
            >
              Сучасна лабораторія контролю якості
            </li>
            <li
              class="before:text-accent before:mr-3 before:font-semibold before:content-['✓']"
            >
              Сертифікована продукція європейського рівня
            </li>
            <li
              class="before:text-accent before:mr-3 before:font-semibold before:content-['✓']"
            >
              Власний автопарк спеціалізованої техніки
            </li>
            <li
              class="before:text-accent before:mr-3 before:font-semibold before:content-['✓']"
            >
              Професійна команда інженерів та технологів
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <img
            class="h-full rounded-xl object-cover shadow-sm transition-transform hover:-translate-y-2"
            src="https://i.ytimg.com/vi/3A268i3X2lA/maxresdefault.jpg"
            alt=""
          />
        </div>
      </div>
    </template>
  </DefaulSection>

  <section class="bg-accent py-26">
    <div
      class="mx-auto flex flex-col flex-wrap gap-20 md:max-w-2/3 md:flex-row md:justify-between"
    >
      <div class="text-background text-center">
        <h1 class="text-6xl font-semibold">18+</h1>
        <p class="text-lg">років досвіду</p>
      </div>
      <div class="text-background text-center">
        <h1 class="text-6xl font-semibold">5000+</h1>
        <p class="text-lg">реалізованих проектів</p>
      </div>
      <div class="text-background text-center">
        <h1 class="text-6xl font-semibold">120+</h1>
        <p class="text-lg">працівників</p>
      </div>
      <div class="text-background text-center">
        <h1 class="text-6xl font-semibold">500+</h1>
        <p class="text-lg">постійних клієнтів</p>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
