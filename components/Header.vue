<template>
  <header class="bg-background sticky box-border p-4 shadow-sm">
    <div class="mx-auto flex max-w-[1160px] justify-between">
      <div class="flex items-center text-2xl font-bold">
        <span class="text-primary">Гал</span
        ><span class="text-accent block">Бетон</span>
      </div>
      <ul
        class="text-secondary hidden font-semibold sm:gap-4 md:flex md:items-center md:gap-8"
      >
        <li class="hover:text-accent-dark transition-colors">
          <NuxtLink to="/">Головна</NuxtLink>
        </li>
        <li class="hover:text-accent-dark transition-colors">
          <NuxtLink to="/projects">Проєкти</NuxtLink>
        </li>
        <li class="hover:text-accent-dark transition-colors">
          <NuxtLink to="/products">Продукція</NuxtLink>
        </li>
        <li class="hover:text-accent-dark transition-colors">
          <NuxtLink to="/about">Про нас</NuxtLink>
        </li>
        <li class="hover:text-accent-dark transition-colors">
          <NuxtLink to="/price-lists">Прайс-листи</NuxtLink>
        </li>
        <li class="hover:text-accent-dark transition-colors">
          <NuxtLink to="/contact-page">Зв'язок</NuxtLink>
        </li>
      </ul>
      <div class="">
        <ButtonLink>Замовити бетон</ButtonLink>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts"></script>
