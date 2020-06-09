<template>
  <div>
    <a class="vkontakteLogo__link" target="_blank" :href="url">
      <div class="vkontakteLogo"></div>
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
.vkontakteLogo {
  width: 50px;
  height: 50px;
  background-image: url('~@/assets/images/vkontakte.svg');
}
</style>
