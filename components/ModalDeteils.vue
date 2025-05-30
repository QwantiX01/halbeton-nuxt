<script setup lang="ts">
const props = defineProps(["showModal", "data"]);
</script>

<template>
  <div
    v-if="showModal && data"
    class="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
    @click.self="$emit('closeModal')"
  >
    <div
      class="bg-background max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl p-6 shadow-2xl"
    >
      <div class="mb-4 flex items-center justify-between">
        <h2 class="text-2xl font-bold">{{ data.mark }} ({{ data.class }})</h2>
        <button
          @click="$emit('closeModal')"
          class="text-2xl text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>

      <div class="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <img
            :src="data.image"
            :alt="data.mark"
            class="h-auto w-full rounded-lg object-cover"
          />
        </div>
        <div>
          <h3 class="mb-4 text-xl font-semibold">
            {{ data.description }}
          </h3>

          <div class="mb-4 rounded-lg bg-gray-50 p-4">
            <h4 class="mb-2 font-medium text-gray-700">
              Технічні характеристики:
            </h4>
            <ul class="space-y-2">
              <li v-if="data.mark" class="flex justify-between">
                <span class="text-gray-600">Марка бетону:</span>
                <span class="font-medium text-gray-800">{{ data.mark }}</span>
              </li>
              <li v-if="data.class" class="flex justify-between">
                <span class="text-gray-600">Клас міцності:</span>
                <span class="font-medium text-gray-800">{{ data.class }}</span>
              </li>
              <li v-if="data.strength" class="flex justify-between">
                <span class="text-gray-600">Міцність на стиск:</span>
                <span class="font-medium text-gray-800">{{
                  data.strength
                }}</span>
              </li>
              <li class="flex justify-between">
                <!--<span class="text-gray-600">Категорія:</span>-->
                <!--<span-->
                <!--class="rounded-full px-3 py-0.5 text-sm font-medium text-white"-->
                <!--{{-->
                <!--filterCategories.find((c) => c.id === data.category)-->
                <!--?.name || data.category-->
                <!--}}-->
                <!--</span>-->
              </li>
            </ul>
          </div>

          <div>
            <h4 class="mb-2 font-medium text-gray-700">
              Область застосування:
            </h4>
            <ul class="space-y-2">
              <li
                v-for="app in data.applications"
                :key="app"
                class="flex items-center"
              >
                <p class="mr-2 text-lg">✓</p>
                <p class="h-full">{{ app }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-6 border-t border-gray-200 pt-6">
        <h4 class="mb-3 text-lg font-medium">Додаткова інформація:</h4>
        <p class="text-gray-600">{{ data.fullDescription }}.</p>

        <div class="mt-6 flex justify-end space-x-4">
          <button
            @click="$emit('closeModal')"
            class="rounded-md border border-gray-300 px-5 py-2.5 font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            Закрити
          </button>
          <button
            class="rounded-md px-5 py-2.5 font-medium text-white transition-colors hover:opacity-90"
          >
            Замовити
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
