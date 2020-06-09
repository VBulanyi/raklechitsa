<template>
  <div
    :class="['mobile-button', { 'mobile-button_type_close': isMenuOpend }]"
    @click="toggleMobile"
  ></div>
</template>

<script>
export default {
  computed: {
    isMenuOpend() {
      return this.$store.getters['mobile-menu/getMobileMenuState'];
    },
  },
  methods: {
    toggleMobile() {
      this.$store.commit('mobile-menu/toggleMobileMenu');
    },
  },
};
</script>

<style scoped>
.mobile-button {
  width: 32px;
  height: 32px;
  background-image: url('~@/assets/images/mobile-menu-icon.svg');
}

.mobile-button_type_close {
  background-image: url('~@/assets/images/close.svg');
}

@media screen and (max-width: 320px) {
  .mobile-button {
    width: 26px;
    height: 26px;
  }
}
</style>
