<template>
  <div class="video-iframe">
    <iframe
      :src="url"
      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      class="video-iframe-item"
    >
    </iframe>
    <a :href="link" target="_blank" class="video-iframe__link">{{
      linlText
    }}</a>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: false,
    },
    linlText: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
.video-iframe {
  width: 100%;
  padding-bottom: calc(9 * 100% / 16);
  position: relative;
}
iframe {
  border: 0;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
}

/* .video-iframe-item {
  border: 0;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: calc(100% - 30px);
} */
.video-iframe__link {
  position: absolute;
  bottom: 0;
  color: #666666;
  text-decoration: none;
}

.video-iframe__link_underline {
  text-decoration: underline;
}

@media screen and (max-width: 768px) {
  .video-iframe__link {
    margin-top: 20px;
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .video-iframe {
    width: 100%;
    padding-bottom: calc(9 * 100% / 16);
  }
  .video-iframe__link {
    display: none;
  }
  .video-iframe-item {
    height: 100%;
  }
}
</style>
