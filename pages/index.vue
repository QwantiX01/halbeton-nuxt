<script setup lang="ts">
import HeroSection from "~/components/HeroSection.vue";

const mainPlaceholder = ref("img/main-placeholder.jpg");
</script>

<template>
  <!--  HERO SECTION  -->
  <HeroSection :placeholder="mainPlaceholder">
    <template v-slot:label>
      <span>Гал</span>
      <span class="text-accent">Бетон</span>
      — Надійний фундамент вашого успіху
    </template>
    <template v-slot:addition
      >Виробник якісного висококласного бетону, за новими стандартами
    </template>
    <template v-slot:extra>
      <ButtonLink>
        <NuxtLink to="/about"> Дізнатися більше</NuxtLink>
      </ButtonLink>
    </template>
  </HeroSection>

  <!--  &lt;!&ndash;  &ndash;&gt;-->
  <!--  <DefaulSection variant="shaded">-->
  <!--    <template v-slot:label>Компанії, які обрали наші послуги</template>-->
  <!--    <template v-slot:description-->
  <!--    >Обирайте оптимальну марку бетону для вашого проекту. Кожна марка має свої-->
  <!--      унікальні характеристики та сфери застосування.-->
  <!--    </template>-->
  <!--  </DefaulSection>-->

  <!--  -->
  <DefaulSection>
    <template v-slot:label>Про бетон</template>
    <template v-slot:description
      >Наш бетон - це поєднання інновацій та традицій. Ми пропонуємо широкий
      спектр марок для різних будівельних потреб, від простих побутових робіт до
      складних інженерних проектів.
    </template>
    <template v-slot:content>
      <div class="grid grid-cols-1 flex-wrap gap-8 md:grid-cols-2">
        <EmojiPane>
          <template v-slot:emoji>✓</template>
          <template v-slot:title>Гарантована якість</template>
          <template v-slot:additional-info
            >Всі марки бетону відповідають зазаначеним стандартам
          </template>
        </EmojiPane>
        <EmojiPane>
          <template v-slot:emoji>🚚</template>
          <template v-slot:title>Швидка доставка</template>
          <template v-slot:additional-info
            >Доставляємо в зазначений вами термін
          </template>
        </EmojiPane>
        <EmojiPane>
          <template v-slot:emoji>📋</template>
          <template v-slot:title>Для будь-яких проектів</template>
          <template v-slot:additional-info
            >Від малих до великих будівельних робіт
          </template>
        </EmojiPane>
        <EmojiPane>
          <template v-slot:emoji>🔍</template>
          <template v-slot:title>Точне дозування</template>
          <template v-slot:additional-info
            >Власні контрольні склади сумішей
          </template>
        </EmojiPane>
      </div>
    </template>
  </DefaulSection>

  <!--  -->
  <DefaulSection variant="shaded">
    <template v-slot:label>Марки бетону та їх застосування</template>
    <template v-slot:description
      >Обирайте оптимальну марку бетону для вашого проекту. Кожна марка має свої
      унікальні характеристики та сфери застосування.
    </template>
    <template v-slot:content>
      <ConcreteShow />
    </template>
  </DefaulSection>
  <DefaulSection variant="default">
    <template v-slot:label>Потрібна консультація?</template>
    <template v-slot:description
      >Наші спеціалісти допоможуть підібрати оптимальну марку бетону для вашого
      проекту
    </template>
    <template v-slot:content>
      <div class="mx-auto w-fit">
        <ButtonLink>
          <NuxtLink to="/pages/contact">Зв'язатися з нами</NuxtLink>
        </ButtonLink>
      </div>
    </template>
  </DefaulSection>
</template>
