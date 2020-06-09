<template>
  <nav class="menu">
    <nuxt-link
      exact
      no-prefetch
      active-class="active"
      class="menu__link"
      to="/"
    >
      Главная
    </nuxt-link>
    <nuxt-link
      exact
      no-prefetch
      active-class="active"
      class="menu__link"
      to="/stories"
    >
      Истории
    </nuxt-link>
    <nxt-button
      @btnClick="$emit('btnClick')"
      :hide="hide"
      class="menu__button"
      :theme="'light'"
    >
      Рассказать историю
    </nxt-button>
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
}
.menu__link {
  text-decoration: none;
  font-size: 1.125rem;
  color: #000;
  margin: 0 20px;
}
.menu__link:hover {
  opacity: 0.8;
}

.menu__link.nuxt-link-exact-active {
  border-bottom: 1px solid #000;
}

@media screen and (max-width: 320px) {
  .menu__link {
    margin-left: 0;
    margin-bottom: 18px;
    font-size: 13px;
    line-height: 15px;
  }
}
</style>
