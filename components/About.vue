<template>
  <div :class="'about__container'">
    <nxt-title :theme="'tellStory'" v-text="block.title"></nxt-title>

    <div class="about__content">
      <div class="about__content-description">
        <p class="about__content-description-text" v-html="block.text"></p>

        <div class="about__options">
          <span
            @click="setActive(block.extraTexts[0].text)"
            class="about__option"
            :class="{ about__option_active: !isActive }"
            >{{ block.extraTexts[0].title }}</span
          >
          <span
            @click="setActive(block.extraTexts[1].text)"
            class="about__option"
            :class="{ about__option_active: isActive }"
            >{{ block.extraTexts[1].title }}</span
          >
        </div>
      </div>

      <div class="about__option-text">
        <span class="about__option-text-item" v-html="activeText"></span>
        <nxt-button
          v-if="!isActive"
          class="about__button"
          @btnClick="showPopUp"
          :theme="'purple'"
          >Заполнить форму</nxt-button
        >
        <nxt-button
          v-else
          class="about__button"
          @btnClick="showContactsForm"
          :theme="'purple'"
          >Оставить контакт</nxt-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title';
import Button from '@/components/ui/Button';

export default {
  components: {
    'nxt-title': Title,
    'nxt-button': Button,
  },
  methods: {
    showPopUp() {
      this.$store.commit('popup/togglePopup');
    },
    showContactsForm() {
      this.$store.commit('popup/toggleContactsForm');
    },
    setActive(index) {
      this.activeText = index;
      this.isActive = !this.isActive;
    },
  },
  props: {
    theme: String,
    blockName: String,
  },

  computed: {
    block() {
      const blocks = this.$store.getters['blocks/getBlocks'];
      return blocks.find(x => x.block === this.blockName);
    },
  },
  data() {
    return {
      activeText:
        '<p>Заполнить подробную форму прямо на сайте и мы опубликуем вашу историю после проверки. Пожалуйста, заполняйте все пункты корректно, если вы испытаете какие-то сложности, воспользуйтесь 2-м вариантом.</p>',
      isActive: false,
    };
  },
};
</script>

<style scoped>
.about__container {
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
  margin-right: -60px;
  margin-left: -60px;
  padding: 100px 100px 0 60px;
  font-size: 1.125rem;
  line-height: 1.375rem;
}

.about__content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.about__content-description {
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin-bottom: 208px;
}

.about__content-description-text {
  width: 50%;
}

.about__option {
  margin-bottom: 10px;
  cursor: pointer;
}

.about__option_active {
  font-weight: bold;
}
.about__options {
  display: flex;
  flex-direction: column;
  min-width: 100px;
  margin-right: 40px;
}

.about__option-text {
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: space-between;
}

.about__button {
  margin-bottom: 100px;
}

.about__container_purple {
  background-color: #613a93;
  margin: 0;
  width: 100%;
  padding-top: 0;
  padding-bottom: 0;
}

@media screen and (max-width: 1280px) {
  .about__container {
    margin-left: -50px;
    margin-right: -50px;
  }
}

@media screen and (max-width: 768px) {
  .about__container {
    flex-direction: column;
    margin-right: -40px;
    margin-left: -40px;
    padding: 80px 150px 0 150px;
    align-items: center;
  }
  .about__content {
    flex-direction: column;
    align-items: center;
  }

  .about__options {
    flex-direction: row;
    margin-top: 80px;
  }
  .about__option-text {
    width: 100%;
  }

  .about__option_active {
    border-bottom: 2px solid #613a93;
  }

  .about__option-text-item {
    margin-bottom: 50px;
  }
  .about__content-description {
    flex-direction: column;
    margin: 0;
    width: 100%;
    margin-bottom: 30px;
  }
  .about__content-description-text {
    width: 100%;
  }
  .about__option {
    margin-right: 30px;
  }
  .about__option:last-child {
    margin-right: 0px;
  }

  .about__button {
    max-width: 60%;
    margin-bottom: 80px;
  }
}
@media screen and (max-width: 320px) {
  .about__container {
    margin-right: -15px;
    margin-left: -15px;
    padding: 50px 30px 0 30px;
  }
  .about__options {
    margin-top: 40px;
  }
  .about__option-text-item {
    margin-bottom: 30px;
  }
  .about__button {
    max-width: 100%;
    margin-bottom: 50px;
  }
}
</style>
px
