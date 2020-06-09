<template>
  <div>
    <a class="odnoklassnikiLogo__link" target="_blank" :href="url">
      <div class="odnoklassnikiLogo"></div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    url: String,
  },
};
</script>

<style scoped>
.odnoklassnikiLogo {
  width: 50px;
  height: 50px;
  background-image: url('~@/assets/images/odnoklassniki.svg');
}
</style>
