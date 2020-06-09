<template>
  <header class="header">
    <nuxt-link
      to="/"
      v-if="$route.path !== '/'"
      class="header__logo"
      v-text="block.title"
    ></nuxt-link>
    <h1 class="header__logo" v-else v-text="block.title"></h1>
    <mobile-icon class="header__mobile-icon" />
    <main-menu class="header__main-menu" @btnClick="showPopUp" />
  </header>
</template>

<script>
import Menu from '@/components/Menu';
import Button from '@/components/ui/Button';
import MobileIcon from '@/components/ui/MobileIcon';

export default {
  components: {
    'main-menu': Menu,
    'nxt-button': Button,
    'mobile-icon': MobileIcon,
  },
  methods: {
    showPopUp() {
      this.$store.commit('popup/togglePopup');
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
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 76px;
  padding: 0 60px;
}
.header__logo {
  font-size: 1rem;
  text-decoration: none;
  max-width: 30%;
  color: #000;
  font-weight: bold;
}

.header__mobile-icon {
  display: none;
}

@media screen and (max-width: 1280px) {
  .header {
    padding: 0 50px;
  }
}

@media screen and (max-width: 768px) {
  .header__logo {
    max-width: 45%;
  }
  .header__main-menu {
    display: none;
  }
  .header__mobile-icon {
    display: block;
  }
}

@media screen and (max-width: 320px) {
  .header {
    padding: 0 15px;
  }
  .header__logo {
    max-width: 80%;
    font-size: 12px;
  }
}
</style>
