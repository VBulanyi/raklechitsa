<template>
  <button
    v-if="!hide"
    :class="[
      'button',
      `button__theme-${theme}`,
      { button__disabled: disabled },
    ]"
    @click="$emit('btnClick')"
    :disabled="disabled"
    :show="true"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    theme: String,
    type: String,
    disabled: Boolean,
    className: String,
    hide: Boolean,
  },
};
</script>

<style scoped>
.button {
  font-size: 16px;
  cursor: pointer;
  box-sizing: border-box;
  max-width: 100%;
  flex: 0 0 auto;
  border: none;
}
.button__theme-light {
  background-color: white;
  color: #121212;
  padding: 0;
  font-size: 1.125rem;
  margin-left: 20px;
}
.button__theme-light:hover {
  opacity: 0.9;
  background-color: white;
  color: black;
}
.button__theme-purple {
  background-color: #613a93;
  color: white;
  width: 280px;
  height: 52px;
}
.button__theme-purple:hover {
  background-color: #613a93;
  color: white;
  opacity: 0.9;
}

.button__theme-width {
  width: 100%;
  height: 82px;
  background-color: #fbfbfb;
  margin-bottom: 30px;
  margin-top: 60px;
}

.button__theme-width:hover {
  background-color: #f8f8f8;
}

.button__theme-input {
  margin-left: 30px;
  background-color: #613a93;
  color: white;
  width: 280px;
  height: 52px;
}

.button__theme-share {
  background-color: #fff;
  font-size: 1.125rem;
  text-align: start;
}

.button__disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

@media screen and (max-width: 320px) {
  .button__theme-width {
    width: 100%;
    background-color: #fbfbfb;
    margin-top: 40px;
    font-size: 13px;
    height: 50px;
  }
  .button {
    margin-bottom: 0;
  }
  .button__theme-input {
    margin-left: 30px;
    background-color: #613a93;
    color: white;
    width: 280px;
    height: 30px;
  }
  .button__theme-share {
    font-size: 0.81rem;
    width: 80%;
  }
}
</style>
