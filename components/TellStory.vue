<template>
  <div class="tellStory">
    <nxt-title :theme="'tellStory'" v-text="block.title"></nxt-title>
    <div class="tellStory__container">
      <div class="tellStory__content">
        <div class="tellStory__content-description">
          <p
            class="tellStory__content-description-text"
            v-html="block.text"
          ></p>
        </div>
        <div class="tellStory__options">
          <span
            @click="setActive(block.extraTexts[0].text)"
            class="tellStory__option"
            :class="{ tellStory__option_active: !isActive }"
            >{{ block.extraTexts[0].title }}</span
          >
          <span
            @click="setActive(block.extraTexts[1].text)"
            class="tellStory__option"
            :class="{ tellStory__option_active: isActive }"
            >{{ block.extraTexts[1].title }}</span
          >
        </div>
      </div>

      <div class="tellStory__option-text">
        <p class="tellStory__option-text-item" v-html="activeText"></p>
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
        '<p>Есть вещи, которые не лечатся. Особенности характера, страстные увлечения, привычки, ставшие частью нашего «я», фобии, которые мы приобрели в детстве. Список можно продолжать до бесконечности, но одна болезнь в него точно не войдет. Эта болезнь — рак. Рак лечится, и лучшее доказательство — люди с их неизлечимыми особенностями, которые сумели победить рак.&lt;br&gt;<br>&nbsp; &nbsp; &nbsp; Рак лечится — проект Благотворительного Фонда Константина Хабенского и Leo Burnett Moscow. С его помощью мы надеемся изменить отношение людей к раку и заставить каждого поверить: онкологическое заболевание — это не приговор.</p>',
      isActive: false,
    };
  },
};
</script>

<style scoped>
.tellStory {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #613a93;
  color: #fff;
  align-items: center;
  padding: 0 60px;
  margin-left: -60px;
  margin-right: -60px;
  margin-bottom: 0;
}

.tellStory__title {
  margin: 0px 0px 30px;
  max-width: 420px;
  font-family: 'Inter';
  font-weight: 600;
  line-height: 2.25rem;
  font-size: 4rem;
  padding-top: 90px;
  margin-bottom: 70px;
}
.tellStory__container {
  display: flex;
}

.tellStory__content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
}

.tellStory__content-description {
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin-bottom: 208px;
}

.tellStory__option {
  margin-bottom: 10px;
  cursor: pointer;
}

.tellStory__option_active {
  font-weight: bold;
}
.tellStory__options {
  display: flex;
  flex-direction: column;
  margin-right: 40px;
}

.tellStory__option-text {
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: space-between;
}

.tellStory__option-text-item {
  margin-bottom: 10px;
}

.tellStory__container_purple {
  background-color: #613a93;
  margin: 0;
  width: 100%;
  padding-top: 0;
  padding-bottom: 0;
}

@media screen and (max-width: 1280px) {
  .tellStory {
    margin-left: -50px;
    margin-right: -50px;
  }
}

@media screen and (max-width: 768px) {
  .tellStory {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: -40px;
    margin-left: -40px;
    padding: 80px 154px 80px 154px;
  }
  .tellStory__container {
    display: flex;
    flex-direction: column;
    padding: 0;
    align-items: center;
  }
  .tellStory__content {
    flex-direction: column;
    width: 100%;
  }
  .tellStory__option-box {
    flex-direction: column;
  }
  .tellStory__options {
    flex-direction: row;
    margin-bottom: 30px;
    margin-right: 0;
  }
  .tellStory__option_active {
    margin-bottom: 5px;
    border-bottom: 2px solid #fff;
  }
  .tellStory__content-description {
    margin: 0;
    width: 100%;
    margin-bottom: 80px;
  }
  .tellStory__option {
    margin-right: 30px;
  }
  .tellStory__option-text {
    width: 100%;
  }
  .tellStory__option:last-child {
    margin-right: 0px;
  }
}

@media screen and (max-width: 320px) {
  .tellStory {
    margin-top: 50px;
    margin-right: -15px;
    margin-left: -15px;

    padding: 50px 15px 50px 15px;
  }
  .tellStory__options {
    margin: 0;
    font-size: 13px;
    line-height: 19px;
  }
  .tellStory__content {
    max-width: 100%;
  }

  .tellStory__content-description-text {
    font-size: 13px;
    line-height: 16px;
  }
  .tellStory__option-text-item {
    font-size: 15px;
    line-height: 19px;
    margin-bottom: 20px;
  }
  .tellStory__content-description {
    margin-bottom: 40px;
  }
}
</style>
