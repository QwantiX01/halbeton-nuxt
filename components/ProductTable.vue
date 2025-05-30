<script setup lang="ts">
const props = defineProps({
  headRow: {
    type: Array as () => string[],
    required: true,
  },
  data: {
    type: Array as () => {
      id: number;
      price: string;
      mark: string;
      class: string;
      strength: string;
      category: string;
      description: string;
      applications: string[];
      features: string[];
      image: string;
    }[],
  },
});
</script>

<template>
  <table
    class="bg-background min-w-full divide-y divide-gray-200 rounded-lg shadow-md"
  >
    <thead>
      <tr>
        <th
          v-for="item in props.headRow"
          class="px-6 py-3 text-left text-xs font-medium tracking-wider text-secondary uppercase"
        >
          {{ item }}
        </th>
        <th class="px-6 py-3"></th>
      </tr>
    </thead>
    <tbody class="divide-y divide-dark-gray">
      <tr v-for="item in data" :key="item.id" class="hover:bg-light">
        <td class="px-6 py-4 whitespace-nowrap">
          <span class="inline-block rounded-md px-3 py-1 font-bold">
            {{ item.mark }}
          </span>
        </td>
        <td class="px-6 py-4 text-dark whitespace-nowrap">
          {{ item.price }}
        </td>
        <td class="px-6 py-4 text-dark whitespace-nowrap">
          {{ item.features }}
        </td>
        <td class="px-6 py-4">
          <ul class="list-inside text-sm text-gray-600">
            <li
              v-for="app in item.applications.slice(0, 1)"
              :key="app"
              class="mb-1 flex items-start"
            >
              <span class="mr-1 text-success">✓</span>

              <p class="text-secondary">
                {{ app }}
              </p>
              <span
                v-if="item.applications.length > 1"
                class="ml-1 text-secondary"
              >
                + ще {{ item.applications.length - 1 }}
              </span>
            </li>
          </ul>
        </td>
        <td class="px-6 py-4 text-right whitespace-nowrap">
          <button
            @click=""
            class="rounded-md px-4 py-2 text-sm font-medium transition-all hover:bg-gray"
          >
            Деталі
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
