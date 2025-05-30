<script setup>
import { ref, computed, onMounted } from "vue";

const concreteTypes = useFetch("/api/concrete-types").data;

const filterCategories = [
  {
    id: "all",
    name: "Всі марки",
    description: "Перегляд усіх марок бетону",
    color: "#e74c3c",
  },
  { id: "low", name: "Легкі", description: "M100-M150", color: "#95a5a6" },
  {
    id: "medium-low",
    name: "Базові",
    description: "M200-M250",
    color: "#3498db",
  },
  {
    id: "medium",
    name: "Стандартні",
    description: "M300-M350",
    color: "#2ecc71",
  },
  { id: "high", name: "Міцні", description: "M400-M450", color: "#f39c12" },
  {
    id: "very-high",
    name: "Суперміцні",
    description: "M500",
    color: "#e74c3c",
  },
];

const viewModes = [
  { id: "grid", icon: "▦", label: "Сітка" },
  { id: "table", icon: "☰", label: "Таблиця" },
  { id: "slider", icon: "◎", label: "Слайдер" },
];

const activeFilter = ref("all");
const activeViewMode = ref("grid");
const selectedConcrete = ref(null);
const showModal = ref(false);

const filteredConcreteTypes = computed(() => {
  if (activeFilter.value === "all") {
    return concreteTypes.value;
  }
  return concreteTypes.value.filter(
    (concrete) => concrete.category === activeFilter.value,
  );
});

const setFilter = (filter) => {
  activeFilter.value = filter;
};
const setViewMode = (mode) => {
  activeViewMode.value = mode;
};
const openDetails = (concrete) => {
  selectedConcrete.value = concrete;
  showModal.value = true;
};
const closeModal = () => {
  showModal.value = false;
};

const activeSlideIndex = ref(0);
const slideCount = computed(() => filteredConcreteTypes.value.length);

const nextSlide = () => {
  activeSlideIndex.value = (activeSlideIndex.value + 1) % slideCount.value;
};

const prevSlide = () => {
  activeSlideIndex.value =
    (activeSlideIndex.value - 1 + slideCount.value) % slideCount.value;
};

let slideInterval = null;

const startSlideshow = () => {
  stopSlideshow();
  slideInterval = setInterval(() => {
    if (activeViewMode.value === "slider") {
      nextSlide();
    }
  }, 5000);
};

const stopSlideshow = () => {
  if (slideInterval) {
    clearInterval(slideInterval);
  }
};

const watchViewMode = () => {
  if (activeViewMode.value === "slider") {
    startSlideshow();
  } else {
    stopSlideshow();
  }
};

onMounted(() => {
  watchViewMode();
});

const unwatchMode = computed(() => {
  watchViewMode();
  return activeViewMode.value;
});

const getCategoryColor = (category) => {
  const foundCategory = filterCategories.find((cat) => cat.id === category);
  return foundCategory ? foundCategory.color : "#95a5a6";
};
</script>

<template>
  <div class="py-12">
    <!-- Селектор режиму перегляду -->
    <div class="mb-8 flex justify-center">
      <div class="flex bg-background rounded-full p-1.5">
        <button
          v-for="mode in viewModes"
          :key="mode.id"
          @click="setViewMode(mode.id)"
          :class="[
            'rounded-full px-4 py-2 transition-all duration-300',
            activeViewMode === mode.id
              ? 'bg-background-shaded font-medium text-dark shadow-md'
              : 'text-secondary hover:text-primary',
          ]"
        >
          <span class="mr-2">{{ mode.icon }}</span>
          {{ mode.label }}
        </button>
      </div>
    </div>

    <!-- Фільтр категорій -->
    <div class="mb-10 flex flex-wrap justify-center gap-3">
      <button
        v-for="category in filterCategories"
        :key="category.id"
        @click="setFilter(category.id)"
        :class="[
          'rounded-lg bg-background border-2 px-4 py-2 transition-all duration-300',
          activeFilter === category.id
            ? 'border-accent bg-accent bg-opacity-10 font-medium'
            : 'border-gray hover:border-dark-gray',
        ]"
        :style="
          activeFilter === category.id
            ? `border-color: ${category.color || '#e67e22'}; background-color: ${category.color}10;`
            : ''
        "
      >
        <div class="text-sm text-primary font-medium">{{ category.name }}</div>
        <div class="text-xs text-secondary">{{ category.description }}</div>
      </button>
    </div>

    <!-- Відображення сіткою -->
    <div v-if="activeViewMode === 'grid'" class="container mx-auto">
      <div
        class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <div
          v-for="concrete in filteredConcreteTypes"
          :key="concrete.id"
          class="group bg-background overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          :style="`border-top: 4px solid ${getCategoryColor(concrete.category)};`"
        >
          <div class="relative h-48 overflow-hidden">
            <img
              :src="concrete.image"
              :alt="concrete.mark"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              class="bg-background text-dark absolute top-2 right-2 rounded-full px-3 py-1 text-sm font-bold shadow-md"
            >
              {{ concrete.mark }}
            </div>
          </div>
          <div class="p-5">
            <h3 class="text-dark mb-2 text-lg font-bold">
              {{ concrete.description }}
            </h3>
            <div class="mb-3 flex items-center justify-between">
              <span class="bg-light text-primary rounded-full px-3 py-1 text-sm"
                >Клас: {{ concrete.class }}</span
              >
              <span
                class="bg-light text-primary rounded-full px-3 py-1 text-sm"
                >{{ concrete.strength }}</span
              >
            </div>
            <div class="mb-4">
              <h4 class="text-secondary mb-1 text-sm font-medium">
                Застосування:
              </h4>
              <ul class="text-secondary text-sm">
                <li
                  v-for="app in concrete.applications.slice(0, 2)"
                  :key="app"
                  class="mb-1 flex items-start"
                >
                  <span class="mr-1 text-success">✓</span> {{ app }}
                </li>
                <li
                  v-if="concrete.applications.length > 2"
                  class="text-secondary text-sm opacity-90"
                >
                  + ще {{ concrete.applications.length - 2 }}
                </li>
              </ul>
            </div>
            <button
              @click="openDetails(concrete)"
              class="mt-auto w-full rounded-md border py-2 text-center text-sm font-medium transition-all hover:bg-light"
              :style="`color: ${getCategoryColor(concrete.category)}; border-color: ${getCategoryColor(concrete.category)};`"
            >
              Детальніше
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Відображення таблицею -->
    <div
      v-else-if="activeViewMode === 'table'"
      class="container mx-auto overflow-x-auto"
    >
      <table
        class="bg-background min-w-full divide-y divide-gray-200 rounded-lg shadow-md"
      >
        <thead>
          <tr>
            <th
              class="px-6 py-3 text-left text-xs font-medium tracking-wider text-secondary uppercase"
            >
              Марка
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium tracking-wider text-secondary uppercase"
            >
              Клас
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium tracking-wider text-secondary uppercase"
            >
              Міцність
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium tracking-wider text-secondary uppercase"
            >
              Опис
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium tracking-wider text-secondary uppercase"
            >
              Застосування
            </th>
            <th class="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody class="divide-y divide-dark-gray">
          <tr
            v-for="concrete in filteredConcreteTypes"
            :key="concrete.id"
            class="hover:bg-light"
          >
            <td class="px-6 py-4 whitespace-nowrap">
              <span
                class="inline-block rounded-md px-3 py-1 font-bold"
                :style="`color: ${getCategoryColor(concrete.category)}; background-color: ${getCategoryColor(concrete.category)}15;`"
              >
                {{ concrete.mark }}
              </span>
            </td>
            <td class="px-6 py-4 text-dark whitespace-nowrap">
              {{ concrete.class }}
            </td>
            <td class="px-6 py-4 text-dark whitespace-nowrap">
              {{ concrete.strength }}
            </td>
            <td class="px-6 py-4 text-dark">{{ concrete.description }}</td>
            <td class="px-6 py-4">
              <ul class="list-inside text-sm text-gray-600">
                <li
                  v-for="app in concrete.applications.slice(0, 1)"
                  :key="app"
                  class="mb-1 flex items-start"
                >
                  <span class="mr-1 text-success">✓</span>

                  <p class="text-secondary">
                    {{ app }}
                  </p>
                  <span
                    v-if="concrete.applications.length > 1"
                    class="ml-1 text-secondary"
                  >
                    + ще {{ concrete.applications.length - 1 }}
                  </span>
                </li>
              </ul>
            </td>
            <td class="px-6 py-4 text-right whitespace-nowrap">
              <button
                @click="openDetails(concrete)"
                class="rounded-md px-4 py-2 text-sm font-medium transition-all hover:bg-gray"
                :style="`color: ${getCategoryColor(concrete.category)};`"
              >
                Деталі
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Відображення слайдером -->
    <div v-else-if="activeViewMode === 'slider'" class="container mx-auto">
      <div
        class="bg-background relative overflow-hidden rounded-xl px-14 p-6 pb-12 shadow-lg"
      >
        <div class="flex">
          <div class="box-content w-full flex-shrink-0">
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div class="overflow-hidden rounded-lg">
                <img
                  :src="concreteTypes[activeSlideIndex].image"
                  :alt="concreteTypes[activeSlideIndex].mark || 1"
                  class="h-full w-full object-cover"
                />
              </div>
              <div>
                <div class="mb-4 flex items-center justify-between">
                  <h2
                    class="text-3xl font-bold"
                    :style="`color: ${getCategoryColor(filteredConcreteTypes[activeSlideIndex].category)};`"
                  >
                    {{ filteredConcreteTypes[activeSlideIndex].mark }}
                  </h2>
                  <span
                    class="rounded-md bg-gray-100 px-3 py-1 text-sm font-medium"
                  >
                    Клас: {{ filteredConcreteTypes[activeSlideIndex].class }}
                  </span>
                </div>
                <div class="mb-6">
                  <h3 class="mb-2 text-xl font-semibold text-gray-800">
                    {{ filteredConcreteTypes[activeSlideIndex].description }}
                  </h3>
                  <p class="text-gray-600">
                    Міцність:
                    <span class="font-medium">{{
                      filteredConcreteTypes[activeSlideIndex].strength
                    }}</span>
                  </p>
                </div>
                <div class="mb-8">
                  <h4 class="mb-3 text-lg font-medium text-gray-700">
                    Застосування:
                  </h4>
                  <ul class="space-y-2 text-gray-600">
                    <li
                      v-for="app in filteredConcreteTypes[activeSlideIndex]
                        .applications"
                      :key="app"
                      class="flex items-start"
                    >
                      <span
                        class="mr-2 aspect-square rounded-full p-0.5 text-white"
                        :style="`background-color: ${getCategoryColor(filteredConcreteTypes[activeSlideIndex].category)};`"
                        >✓</span
                      >
                      {{ app }}
                    </li>
                  </ul>
                </div>
                <ButtonLink
                  @click="openDetails(filteredConcreteTypes[activeSlideIndex])"
                  >Детальні характеристики
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Кнопки навігації слайдера -->
        <button
          @click="prevSlide"
          class="bg-light text-primary absolute top-1/2 left-2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-xl shadow-md transition-all hover:bg-gray-100"
        >
          ❮
        </button>
        <button
          @click="nextSlide"
          class="bg-light text-primary absolute top-1/2 right-2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-xl shadow-md transition-all hover:bg-dark-gray"
        >
          ❯
        </button>

        <!-- Індикатори слайдів -->
        <div class="absolute bottom-6 left-1/2 flex -translate-x-1/2 space-x-2">
          <button
            v-for="(_, index) in filteredConcreteTypes"
            :key="index"
            @click="activeSlideIndex = index"
            :class="[
              'h-2.5 w-2.5 rounded-full transition-all',
              activeSlideIndex === index ? 'bg-accent w-6' : 'bg-gray-300',
            ]"
            :style="
              activeSlideIndex === index
                ? `background-color: ${getCategoryColor(filteredConcreteTypes[index].category)};`
                : ''
            "
          ></button>
        </div>
      </div>
    </div>

    <!-- Модальне вікно з детальною інформацією -->
    <ModalDeteils
      :show-modal="showModal"
      :data="selectedConcrete"
      @closeModal="closeModal"
    />
  </div>
</template>
