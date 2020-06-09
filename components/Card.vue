<template>
  <div class="card" @click="$emit('cardClick')">
    <div class="card__image">
      <img class="card__image-item" :src="url" alt="" />
    </div>
    <h2 class="card__title">{{ title }}</h2>
    <p class="card__text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
}
.card__image {
  width: 100%;
  padding-bottom: 100%;
  position: relative;
}
.card__title {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 1.375rem;
  margin-top: 20px;
}

.card__image-item {
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.card__image-item:after {
  content: '';
  display: block;
  padding-bottom: 100%;
}

.card__text {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 0, 875rem;
  color: #666666;
  margin-top: 16px;
  padding-right: 15px;
}

@media screen and (max-width: 1280px) {
  .card__title {
    font-size: 1.57rem;
  }
}

@media screen and (max-width: 1024px) {
  .card__title {
    font-size: 18px;
  }
}

@media screen and (max-width: 320px) {
  .card__text {
    font-size: 13px;
    line-height: 16px;
    margin-top: 16px;
  }
  .card__title {
    margin-top: 16px;
  }
}
</style>
