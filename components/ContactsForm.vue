<template>
  <div class="contacts-form">
    <form @submit.prevent="submitContacts">
      <h2 class="contacts-form__title">Оставьте контакт для связи</h2>
      <div class="contacts-form__content">
        <p class="contacts-form__about contacts-form__text">
          Мы свяжемся с вами в течение недели, чтобы задать вопросы о вашей
          истории и разместить ее на сайте.
        </p>
        <div class="contacts-form__item">
          <p class="contacts-form__question contacts-form__text">
            Как вас зовут?
          </p>
          <nxt-input
            class="contacts-form__input"
            :required="'required'"
            :placeholder="'Напишите тут'"
            :border="'bottomBorder'"
            v-model="name"
          />
        </div>
        <div class="contacts-form__contacts contacts-form__text">
          <div class="contacts-form__item">
            <p class="contacts-form__question contacts-form__text">
              Электронная почта
            </p>
            <nxt-input
              class="contacts-form__input"
              :required="'required'"
              type="email"
              :placeholder="'pochta@example.com'"
              :border="'bottomBorder'"
              v-model="email"
            />
          </div>
          <div class="contacts-form__item">
            <p class="contacts-form__question contacts-form__text">Телефон</p>
            <nxt-input
              class="contacts-form__input"
              :required="'required'"
              :placeholder="'+7 000 000 00 00'"
              :border="'bottomBorder'"
              v-model="phone"
            />
          </div>
        </div>
        <div class="contacts-form__item">
          <p class="contacts-form__question contacts-form__text">
            Напишите, если есть предпочтительный способ связи и удобное время
          </p>
          <nxt-input
            class="contacts-form__input"
            :required="'required'"
            :placeholder="'Телефон / почта и удобное время'"
            :border="'bottomBorder'"
            v-model="pref"
          />
        </div>
        <div class="contacts-form__button-container">
          <nxt-button
            class="contacts-form__button"
            :theme="'input'"
            type="submit"
            >Отправить</nxt-button
          >
          <p class="contacts-form__legal">
            Нажимая на кнопку «отправить», вы даете согласие на
            <nuxt-link
              :to="{ name: 'legal' }"
              target="_blank"
              class="contacts-form__legal-link"
              >обработку персональных данных</nuxt-link
            >
          </p>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
export default {
  components: {
    'nxt-button': Button,
    'nxt-input': Input,
  },
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      pref: '',
    };
  },
  methods: {
    showPopUp() {
      this.$store.commit('popup/togglePopup');
    },
    submitContacts() {
      console.log(
        `name: ${this.name}, email: ${this.email}, phone: ${this.phone}, pref: ${this.pref}`
      );
      this.$store.commit('popup/toggleContactsForm');
    },
  },
  props: {
    title: String,
    quote: String,
    placeholder: {
      type: String,
      default: 'Напишите тут',
    },
  },
};
</script>

<style scoped>
.contacts-form {
  display: flex;
  flex-direction: column;
  max-height: 100%;
}
.contacts-form__title {
  font-size: 2rem;
}

.contacts-form__about {
  font-size: 1.14rem;
  font-weight: 500;
  margin-bottom: 40px;
}
.contacts-form__question {
  font-size: 1.14rem;
  font-weight: 500;
}
.contacts-form__container {
  height: 100%;
}

.contacts-form__item {
  width: 100%;
  margin-bottom: 30px;
}
.contacts-form__contacts {
  display: flex;
  justify-content: space-between;
}

.contacts-form__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-top: 40px;
  margin-bottom: 40px;
}

.contacts-form__button-container {
  width: 100%;
  display: flex;
}

.contacts-form__button {
  margin-left: 0;
}

.contacts-form__legal {
  margin-left: 30px;
  max-width: 40%;
  font-size: 0.875rem;
  align-self: center;
}

.contacts-form__legal-link {
  text-decoration: underline;
}

@media screen and (max-width: 768px) {
  .contacts-form__button-container_fin {
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .contacts-form__legal {
    margin-top: 10px;
    max-width: none;
  }
}
@media screen and (max-width: 768px) {
  .contacts-form__title {
    font-size: 1.125rem;
    width: 65%;
  }
  .contacts-form__text {
    font-size: 0.81rem;
  }
  .contacts-form__about {
    margin-bottom: 30px;
  }
  .contacts-form__content {
    margin: 30px 0 10px 0;
  }
  .contacts-form__button-container {
    display: flex;
    flex-direction: column;
  }
  .contacts-form__legal {
    margin-left: 0;
    font-size: 0.69rem;
  }
}
</style>
