<template>
  <div class="textblock">
    <div class="textblock__description">
      <p>
        {{ description }}
      </p>
    </div>
    <div class="textblock__main-content">
      <div class="textblock__option-container">
        <span class="textblock__option textblock__option_active">{{
          option1
        }}</span>
        <span class="textblock__option">{{ option2 }}</span>
      </div>
      <div class="textblock__content">
        <p class="textblock__content1">
          {{ content }}
        </p>
        <p class="textblock__content2">
          {{ content2 }}
        </p>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    description: String,
    option1: String,
    option2: String,
    content: String,
    content2: String,
  },
};
</script>

<style scoped>
slot {
  margin: 0;
}
.textblock {
  display: flex;
  justify-content: space-between;
}
.textblock__main-content {
  display: flex;
}
.textblock__description {
  max-width: 340px;
}
.textblock__content {
  max-width: 640px;
  margin-bottom: 78px;
}
.textblock__option-container {
  display: flex;
  flex-direction: column;
  margin-right: 40px;
}
.textblock__option {
  margin-bottom: 10px;
}
.textblock__option_active {
  font-weight: bold;
}
.textblock__content2 {
  margin-top: 1.5rem;
}
</style>
