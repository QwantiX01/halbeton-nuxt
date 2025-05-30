<script setup lang="ts">
const concreteData = useFetch("/api/concrete-types").data;
const productTypes = useFetch("/api/product-types").data;
</script>

<template>
  <DefaulSection :minimal="true">
    <template v-slot:content class="">
      <h1 class="text-center font-bold mb-4 text-4xl text-primary">
        Наша продукція
      </h1>
      <p class="text-center text-lg max-w-[800px] mx-auto text-secondary">
        Пропонуємо широкий асортимент бетону, будівельних матеріалів та послуг
        для вашого будівництва. Висока якість, доступні ціни та швидка доставка!
      </p>
    </template>
  </DefaulSection>
  <DefaulSection variant="shaded">
    <template v-slot:label>Категорії продукції</template>
    <template v-slot:content>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          class="bg-background min-h-32 rounded-xl p-5 py-7 shadow hover:-translate-y-2 transition-transform"
          v-for="item in productTypes"
          :key="item.id"
        >
          <NuxtLink :to="'#' + item.category">
            <h1 class="text-primary text-xl font-semibold pb-4">
              {{ item.label }}
            </h1>
            <p class="text-secondary mb-5">{{ item.description }}</p>
            <ButtonLink class="bg-dark hover:bg-accent w-full"
              >Перейти
            </ButtonLink>
          </NuxtLink>
        </div>
      </div>
    </template>
  </DefaulSection>

  <DefaulSection variant="product" :id="'concrete'">
    <template v-slot:emoji>🏗️</template>
    <template v-slot:label>Бетон</template>
    <template v-slot:description
      >Пропонуємо високоякісний бетон різних марок для всіх видів будівельних
      робіт. Весь бетон виготовляється на сучасному обладнанні з використанням
      якісних компонентів, що гарантує надійність та довговічність ваших
      конструкцій.
    </template>
    <template v-slot:content>
      <ProductTable
        :data="concreteData"
        :head-row="[
          'Марка',
          'Ціна за м³',
          'Характеристики',
          'Застосування',
          'Дії',
        ]"
    /></template>
  </DefaulSection>

  <DefaulSection variant="product" :id="'pumps'">
    <template v-slot:emoji>🏗️</template>
    <template v-slot:label>Бетононасоси</template>
    <template v-slot:description
      >Пропонуємо високоякісний бетон різних марок для всіх видів будівельних
      робіт. Весь бетон виготовляється на сучасному обладнанні з використанням
      якісних компонентів, що гарантує надійність та довговічність ваших
      конструкцій.
    </template>
    <template v-slot:content> </template>
  </DefaulSection>

  <DefaulSection variant="product" :id="'materials'">
    <template v-slot:emoji>🏗️</template>
    <template v-slot:label>Цементні розчини</template>
    <template v-slot:description
      >Пропонуємо високоякісний бетон різних марок для всіх видів будівельних
      робіт. Весь бетон виготовляється на сучасному обладнанні з використанням
      якісних компонентів, що гарантує надійність та довговічність ваших
      конструкцій.
    </template>
    <template v-slot:content> </template>
  </DefaulSection>
</template>
