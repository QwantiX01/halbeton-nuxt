<script setup lang="ts">


const props = defineProps({
  bouncy: {
    type: Boolean,
    default: true,
    required: false
  }
})
</script>
<template>
  <div
      :class="[
          'bg-background w-full rounded-xl p-8 shadow-sm',
           bouncy ? 'hover:-translate-y-2 transition-transform' : ''
      ]">
    <h1 class="text-dark  after:bg-accent relative mb-10 pb-4  text-2xl font-semibold after:absolute after:bottom-0 after:left-0 after:h-1 after:w-12 ">
      <slot name="label"/>
    </h1>
    <slot name="content"/>
  </div>
</template>
