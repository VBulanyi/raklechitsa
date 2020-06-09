<template>
  <div :class="['popup', `popup__theme_${theme}`]">
    <div class="close" @click="$emit('closeClick')"></div>
    <slot>Содержимое окна</slot>
  </div>
</template>

<script>
export default {
  props: {
    theme: String,
  },
};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 920px;
  height: 600px;
  box-sizing: border-box;
  padding: 40px;
  background-color: #fff;
  z-index: 2;
}
.close {
  position: absolute;
  top: 44px;
  right: 42px;
  width: 20px;
  height: 20px;
  background-size: contain;
  background-repeat: no-repeat;
  background: center;
  cursor: pointer;
  background-image: url('~@/assets/images/close.svg');
}

.popup__theme_share {
  width: 920px;
  height: 324px;
}

@media screen and (max-width: 1280px) {
  .popup__theme_share {
    width: 800px;
    height: 324px;
  }
}

@media screen and (max-width: 768px) {
  .popup {
    width: 580px;
    max-height: 100%;
  }
  .popup__theme_share {
    width: 580px;
    height: 324px;
  }
}

@media screen and (max-width: 320px) {
  .popup {
    width: 290px;
    padding: 15px;
    max-height: 90%;
  }
  .close {
    top: 20px;
    right: 20px;
  }
  .popup__theme_share {
    width: 290px;
    height: 191px;
  }
}
</style>
