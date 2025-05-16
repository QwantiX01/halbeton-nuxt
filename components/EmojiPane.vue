<script setup lang="ts"></script>

<template>
  <div
      class="bg-light flex flex-col items-center gap-5 rounded-xl p-8 shadow-sm hover:-translate-y-2 transition-transform"
  >
    <h1 class="text-accent text-[40px] font-bold">
      <slot name="emoji"/>
    </h1>
    <h2 class="text-primary text-xl font-bold">
      <slot name="title"/>
    </h2>
    <p class="text-secondary text-center leading-[1.4]">
      <slot name="additional-info"/>
    </p>
  </div>
</template>

<style scoped></style>
