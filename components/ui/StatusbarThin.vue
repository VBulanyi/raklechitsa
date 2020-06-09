<template>
  <div class="statusbar">
    <div class="statusbar__initial" :style="initialStyle"></div>
    <div class="statusbar__fill" :style="style"></div>
  </div>
</template>

<script>
export default {
  props: {
    value: Number,
    newValue: Number,
  },
  computed: {
    initialStyle() {
      return `width: ${this.value * 0.615}%`;
    },
    style() {
      return `width: ${(this.value + this.newValue) * 0.617}%`;
    },
  },
};
</script>

<style scoped>
.statusbar {
  width: 90%;
  height: 40px;
  position: relative;
  margin-right: auto;
  margin-left: auto;
}

.statusbar__fill {
  position: absolute;
  left: 0;
  top: 50%;
  height: 50%;
  background: #613a93;
}

.statusbar__initial {
  position: absolute;
  left: 0;
  top: 0;
  height: 50%;
  background: #f4f4f4;
}

@media screen and (max-width: 1280px) {
  .statusbar {
    height: 35px;
  }
}

@media screen and (max-width: 1024px) {
  .statusbar {
    height: 28px;
  }
}
</style>
