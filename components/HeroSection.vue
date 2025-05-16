<script setup lang="ts">
const props = defineProps({
  placeholder: String,
});
</script>

<template>
  <section class="bg-dark relative flex h-[500px] items-center justify-center">
    <!--    IMAGE    -->
    <img
      class="absolute top-0 left-0 z-10 h-full w-full object-cover"
      :src="placeholder"
      alt="placeholder"
    />
    <!--    COVER     -->
    <div
      class="from to- absolute top-0 left-0 z-20 h-full w-full bg-linear-to-r from-[#111111dd] to-[#111111bb]"
    />
    <!--    CONTENT    -->
    <div class="z-30 max-w-[800px] px-5 leading-[1.2] text-white">
      <h1 class="mb-5 text-[46px] font-bold">
        <slot name="label" />
      </h1>
      <p class="mb-8 text-white">
        <slot name="addition" />
      </p>
      <slot name="extra" />
    </div>
  </section>
</template>

<style scoped></style>
