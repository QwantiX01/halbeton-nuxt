<script setup lang="ts">
const variantClasses = {
  default: "py-16 bg-background",
  shaded: "py-16 bg-background-shaded",
  product: "py-16 bg-background-shaded",
} as const;

type Variant = keyof typeof variantClasses;

const props = defineProps({
  variant: {
    default: "default",
    type: String,
  },
  minimal: Boolean,
  id: String,
});

const getClasses = (variant: Variant = "default"): string => {
  return variantClasses[variant];
};
</script>

<template>
  <div v-if="variant == 'default'">
    <section class="py-16 bg-background">
      <div v-if="!minimal" class="mx-auto max-w-[1200px] px-5">
        <h1
          class="text-primary after:bg-accent relative mb-10 pb-4 text-center text-4xl font-bold after:absolute after:bottom-0 after:left-1/2 after:h-1 after:w-20 after:translate-x-[-50%]"
        >
          <slot name="label" />
        </h1>
        <p
          class="text-secondary mx-auto mb-12 max-w-[800px] text-center text-lg"
        >
          <slot name="description" />
        </p>
        <slot name="content" />
      </div>
      <div v-else class="mx-auto max-w-[1200px] px-5">
        <slot name="content" />
      </div>
    </section>
  </div>

  <div v-if="variant == 'shaded'">
    <section class="py-16 bg-background-shaded">
      <div v-if="!minimal" class="mx-auto max-w-[1200px] px-5">
        <h1
          class="text-primary after:bg-accent relative mb-10 pb-4 text-center text-4xl font-bold after:absolute after:bottom-0 after:left-1/2 after:h-1 after:w-20 after:translate-x-[-50%]"
        >
          <slot name="label" />
        </h1>
        <p
          class="text-secondary mx-auto mb-12 max-w-[800px] text-center text-lg"
        >
          <slot name="description" />
        </p>
        <slot name="content" />
      </div>
      <div v-else class="mx-auto max-w-[1200px] px-5">
        <slot name="content" />
      </div>
    </section>
  </div>

  <div v-if="variant == 'product'" :id="id">
    <section class="py-16 bg-background-shaded">
      <div v-if="!minimal" class="mx-auto max-w-[1200px] px-5">
        <h1
          class="text-primary flex gap-4 after:bg-accent relative mb-10 pb-4 text-3xl font-bold after:absolute after:bottom-0 after:h-1 after:w-full after:left-0"
        >
          <span class="block"><slot name="emoji" /></span>
          <slot name="label" />
        </h1>
        <p class="text-secondary mb-12 text-lg">
          <slot name="description" />
        </p>
        <slot name="content" />
      </div>
      <div v-else class="mx-auto max-w-[1200px] px-5">
        <slot name="content" />
      </div>
    </section>
  </div>
</template>

<style scoped></style>
