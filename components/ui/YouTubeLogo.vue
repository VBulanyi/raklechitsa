<template>
  <div>
    <a class="youTubeLogo__link" target="_blank" :href="url">
      <div class="youTubeLogo"></div>
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
.youTubeLogo {
  width: 50px;
  height: 50px;
  background-image: url('~@/assets/images/youTube.svg');
}
</style>
