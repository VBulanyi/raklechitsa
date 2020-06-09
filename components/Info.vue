<template>
  <div :class="`info__container info__container_${theme}`">
    <h2
      v-if="titleTheme === 'main'"
      class="info__title"
      v-text="block.hashtag"
    ></h2>
    <nxt-title v-else :theme="`${titleTheme}`" class="index__title">
      {{ block.title }}
      <span class="info__title-span" v-text="block.hashtag"></span>
    </nxt-title>

    <slot></slot>
  </div>
</template>

<script>
import Title from '@/components/Title';
export default {
  components: {
    'nxt-title': Title,
  },
  props: {
    titleTheme: String,
    theme: String,
    blockName: String,
  },
  computed: {
    block() {
      const blocks = this.$store.getters['blocks/getBlocks'];
      return blocks.find(x => x.block === this.blockName);
    },
  },
};
</script>

<style scoped>
.info__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #613a93;
  color: #fff;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
}

.info__container_fixed {
  min-height: calc(100vh - 76px);
  margin-left: -60px;
  margin-right: -60px;
}

.info__container_tall {
  margin-left: -60px;
  margin-right: -60px;
  margin-bottom: 0;
}

.info__container_thin {
  flex-direction: column;
  max-height: 100%;
  margin-top: 60px;
  height: 86px;
}

.info__title {
  width: 100%;
  font-size: 5.75rem;
  text-align: center;
}

.info__title-span {
  font-weight: bold;
}

.info__title-span {
  font-weight: bold;
}

@media screen and (max-width: 1280px) {
  .info__container_fixed {
    margin-left: -50px;
    margin-right: -50px;
  }
  .info__container_tall {
    margin-left: -50px;
    margin-right: -50px;
  }

  @media screen and (max-width: 768px) {
    .info__container_fixed {
      margin-left: -40px;
      margin-right: -40px;
      margin-bottom: 80px;
    }
    .info__container_tall {
      margin-left: -40px;
      margin-right: -40px;
    }
  }

  @media screen and (max-width: 768px) {
    .info__container_thin {
      margin-top: 44px;
    }
    .info__container {
      margin-bottom: 80px;
    }
  }
  @media screen and (max-width: 320px) {
    .info__title {
      font-size: 36px;
    }
    .info__container {
      margin-bottom: 50px;
    }
    .info__container_fixed {
      margin-left: -15px;
      margin-right: -15px;
    }
    .info__container_thin {
      margin-top: 50px;
      font-size: 16px;
      line-height: 18px;
    }
    .info__container_tall {
      margin-right: -15px;
      margin-left: -15px;
    }
  }
}
</style>
