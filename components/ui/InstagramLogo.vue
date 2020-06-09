<template>
  <div>
    <a class="instagramLogo__link" target="_blank" :href="url">
      <div class="instagramLogo"></div>
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
.instagramLogo {
  width: 50px;
  height: 50px;
  background-image: url('~@/assets/images/instagram.svg');
}
</style>
