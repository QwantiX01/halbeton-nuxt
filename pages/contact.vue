<template>
  <DefaulSection>
    <template v-slot:label>Зв'яжіться з нами</template>
    <template v-slot:description>Маєте запитання щодо нашої продукції чи послуг? Заповніть форму або скористайтесь
      зручним для вас способом зв'язку. Ми завжди раді допомогти!
    </template>
  </DefaulSection>
  <DefaulSection variant="shaded" :minimal="true">
    <template v-slot:content>
      <div class="flex gap-10 flex-col md:flex-row">
        <div class="flex-1 flex-grow">
          <LabeledPane :bouncy="false">
            <template v-slot:label>Форма зворотнього зв'язку</template>
            <template v-slot:content>
              <form class="gap-5 flex flex-col" action="http://localhost:8080/api/feedback-form" method="POST">
                <div class="flex flex-col">
                  <label class="font-semibold mb-2 text-primary" for="first-name-input">Ваше ім'я *</label>
                  <input required placeholder="Введіть ваше ім'я" class="w-full p-3 border border-solid rounded border-gray"
                         type="text" name="firstName" id="first-name-input">
                </div>

                <div class="flex flex-col text-primary">
                  <label class="font-semibold mb-2" for="phone-number-input">Телефон *</label>
                  <input required placeholder="+380 XX XXX XX XX" class="w-full p-3 border border-solid rounded border-gray"
                         type="tel" name="phoneNumber" id="phone-number-input" value="+380">
                </div>

                <div class="flex flex-col text-primary">
                  <label class="font-semibold mb-2" for="email-input">Email</label>
                  <input placeholder="example@email.com" class="w-full p-3 border border-solid rounded border-gray"
                         type="email" name="email" id="email-input">
                </div>

                <div class="flex flex-col text-primary">
                  <label class="font-semibold mb-2" for="topic-input">Тема звернення</label>
                  <select class="w-full p-3 border border-solid rounded border-gray" name="topic" id="topic-input">
                    <option value="consultation">Консультація щодо товару</option>
                    <option value="order">Замовлення бетону</option>
                    <option value="price">Питання щодо цін</option>
                    <option value="delivery">Питання щодо доставки</option>
                    <option value="cooperation">Співпраця</option>
                    <option value="other">Інше</option>
                  </select>
                </div>

                <div class="flex flex-col text-primary">
                  <label class="font-semibold mb-2" for="message-input">Повідомлення</label>
                  <textarea placeholder="Введіть ваше повідомлення"
                            class="w-full p-3 border border-solid rounded border-gray"
                            name="message" id="message-input" rows="9"></textarea>
                </div>

                <ButtonLink>
                  Надіслати форму
                </ButtonLink>
                <p class="text-center text-sm text-secondary">* поля, обов'язкові для заповнення</p>
              </form>
            </template>
          </LabeledPane>
        </div>
        <div class="flex flex-col gap-10 flex-1 flex-grow">
          <LabeledPane>
            <template v-slot:label>Контактна інформація</template>
            <template v-slot:content>
              <div class="flex flex-col gap-4 text-primary">
                <div class="flex gap-2">
                  <p class="text-xl">📱</p>
                  <div class="font-semibold leading-[1.6]">
                    <p>+38 (032) 255-57-77</p>
                    <p>+38 (067) 255-57-77</p>
                  </div>
                </div>
                <div class="flex gap-2">
                  <p class="text-xl">✉️</p>
                  <div class="font-semibold leading-[1.6]">
                    <p>info@galbeton.ua</p>
                    <p>sales@galbeton.ua</p>
                  </div>
                </div>
                <div class="flex gap-2">
                  <p class="text-xl">🏢</p>
                  <div class="font-semibold leading-[1.6]">
                    <p>м. Львів, вул. Промислова, 26</p>
                    <p>79000, Україна</p>
                  </div>
                </div>
                <div class="flex gap-2">
                  <p class="text-xl">🕐</p>
                  <div class="font-semibold leading-[1.6]">
                    <p>Пн-Пт: 8:00-18:00</p>
                    <p>Сб: 9:00-15:00</p>
                    <p>Нд: Вихідний</p>
                  </div>
                </div>
              </div>
            </template>
          </LabeledPane>
          <LabeledPane>
            <template v-slot:label>Ми в соціальних мережах</template>
            <template v-slot:content></template>
          </LabeledPane>
        </div>
      </div>

    </template>

  </DefaulSection>
  <DefaulSection>
    <template v-slot:label>Як нас знайти</template>
    <template v-slot:description></template>
    <template v-slot:content>
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d321.86695925056557!2d24.052205496703753!3d49.8060769966402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae93d359e67d7%3A0xdc91e1052b65beda!2z0JPQsNC70LHQtdGC0L7QvQ!5e0!3m2!1suk!2sua!4v1746819429631!5m2!1suk!2sua"
          class="w-full aspect-[3/1.4] rounded-2xl shadow-2xl"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
    </template>
  </DefaulSection>
  <DefaulSection variant="shaded">
    <template v-slot:label>Часті запитання</template>
    <template v-slot:description></template>
    <template v-slot:content>

    </template>
  </DefaulSection>
</template>

<script setup lang="ts">
</script>