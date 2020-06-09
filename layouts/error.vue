<template>
  <div class="error">
    <h2 class="error__title">404</h2>
    <p class="error__par">Страница не нейдена.</p>
    <a class="error__link" @click="goToMainPage">Перейти на главную.</a>
  </div>
</template>
<script>
export default {
  methods: {
    goToMainPage() {
      this.$router.push('/');
    },
  },
};
</script>
export default { methods }

<style scoped>
.error {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 76px);
}

.error__title {
  font-size: 9rem;
  line-height: 11rem;
  font-weight: normal;
}
.error__par {
  font-size: 1.125rem;
  line-height: 1.5rem;
}

.error__link {
  font-size: 1.125rem;
  text-decoration: underline;
  line-height: 1.5rem;
  cursor: pointer;
  padding-bottom: 37px;
}
</style>
