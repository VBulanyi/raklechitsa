<template>
  <div class="instagram__container">
    <div class="instagram_card">
      <nxt-title
        class="instagram__title"
        :theme="'underline'"
        v-text="block.title"
      ></nxt-title>

      <p class="instagram__text" v-html="block.text"></p>
    </div>
    <div class="instagram__cards">
      <div
        v-for="photo in instagram.slice(0, 8)"
        :key="photo.id"
        class="instagram__image-container"
      >
        <a :href="photo.url" target="blank">
          <img class="instagram__image-item" :src="photo.display_url" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title';
export default {
  components: {
    'nxt-title': Title,
  },

  props: {
    itemArray: {
      type: Array,
      default: {},
    },
    blockName: String,
  },
  computed: {
    block() {
      const blocks = this.$store.getters['blocks/getBlocks'];
      return blocks.find(x => x.block === this.blockName);
    },
    instagram() {
      const { instagram } = this.$store.state;
      return instagram.photos;
    },
  },
};
</script>

<style scoped>
.instagram__container {
  display: flex;
  margin-bottom: 100px;
  width: 100%;
}

.instagram_card {
  margin-right: 110px;
  max-width: 24%;
}

.instagram__cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 30px;
  row-gap: 30px;
  width: 100%;
}

.instagram__image-container {
  width: 100%;
  padding-top: 100%;
  background-color: black;
  position: relative;
}

.instagram__image-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media screen and (max-width: 1280px) {
  .instagram__text {
    font-size: 16px;
  }

  .instagram__container {
    margin-bottom: 90px;
  }
}

@media screen and (max-width: 1024px) {
  .instagram__container {
    margin-bottom: 80px;
  }

  .instagram__text {
    font-size: 13px;
  }
}
@media screen and (max-width: 768px) {
  .instagram__container {
    flex-direction: column;
    align-items: center;
  }
  .instagram__title {
    max-width: 100%;
  }

  .instagram__cards {
    column-gap: 20px;
    row-gap: 20px;
    margin-top: 60px;
  }

  .instagram_card {
    margin: 0;
    max-width: 50%;
  }
}

@media screen and (max-width: 320px) {
  .instagram__title {
    text-align: justify;
  }
  .instagram__text {
    margin: 0;
  }

  .instagram_card {
    max-width: 100%;
  }

  .instagram__cards {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    column-gap: 10px;
    row-gap: 10px;
    width: 100%;
  }

  .instagram__container {
    margin-bottom: 50px;
  }
}
</style>
