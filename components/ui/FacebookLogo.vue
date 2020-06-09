<template>
  <div>
    <a class="facbookLogo__link" target="_blank" :href="url">
      <div class="facbookLogo"></div>
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
.facbookLogo {
  width: 50px;
  height: 50px;
  background-image: url('~@/assets/images/facebook.svg');
}
</style>
