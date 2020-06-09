<template>
  <div>
    <a class="twitterLogo__link" target="_blank" :href="url">
      <div class="twitterLogo"></div>
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
.twitterLogo {
  width: 50px;
  height: 50px;
  background-image: url('~@/assets/images/twitter.svg');
}
</style>
