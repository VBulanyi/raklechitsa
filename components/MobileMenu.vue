<template>
  <nav class="menu">
    <nuxt-link exact no-prefetch active-class="active" class="menu__link" to="/"
      >Главная</nuxt-link
    >
    <nuxt-link
      exact
      no-prefetch
      active-class="active"
      class="menu__link"
      to="/stories"
      >Истории</nuxt-link
    >
    <nxt-button
      @btnClick="$emit('btnClick')"
      :hide="hide"
      class="menu__button"
      :theme="'light'"
      >Рассказать историю</nxt-button
    >
  </nav>
</template>

<script>
import Button from '@/components/ui/Button';

export default {
  components: {
    'nxt-button': Button,
  },
  props: {
    hide: Boolean,
  },
};
</script>

<style scoped>
.menu {
  list-style: none;
  padding-left: 0;
  align-items: center;
  height: 50px;
  padding-left: 50px;
}
.menu__link {
  text-decoration: none;
  font-size: 1.125rem;
  color: #000;
  margin: 0 20px;
}

.menu__link:first-child {
  margin-left: 0;
}
.menu__link:hover {
  opacity: 0.8;
}

.menu__link.nuxt-link-exact-active {
  border-bottom: 1px solid #000;
}

@media screen and (max-width: 320px) {
  .menu {
    display: flex;
    flex-direction: column;
    padding: 0;
    align-items: flex-start;
    height: 120px;
    margin: 18px 0 0 18px;
  }
  .menu__link {
    font-size: 13px;
    line-height: 16px;
    padding-bottom: 18px;
    margin: 0;
  }
  .menu__button {
    font-size: 13px;
    line-height: 16px;
    margin: 0;
  }
  .menu__link.nuxt-link-exact-active {
    border: none;
  }
}
</style>
