<template>
  <div class="habits__container">
    <nxt-title
      class="habits__title"
      :theme="'bm'"
      v-text="block.title"
    ></nxt-title>
    <div class="habits__grid">
      <slot></slot>
    </div>
    <nxt-button @btnClick="goToStories" :theme="'width'"
      >Больше статей</nxt-button
    >
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
    goToStories() {
      this.$router.push('/stories/');
    },
  },
  props: {
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
.habits__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 40px;
  row-gap: 60px;
}

@media screen and (max-width: 768px) {
  .habits__grid {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 40px;
  }
  .habits__container {
    display: flex;
    flex-direction: column;
  }
}

@media screen and (max-width: 320px) {
  .habits__grid {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(6, 1fr);
    column-gap: 0px;
    row-gap: 30px;
  }
  .habits__title {
    text-align: left;
  }
}
</style>
