<template>
  <div class="story__container">
    <div class="story__card">
      <div class="story__card-container">
        <nxt-title class="story__title">{{ block.title }}</nxt-title>
        <p class="story__text" v-html="block.text"></p>
      </div>
    </div>
    <div class="story__slider">
      <slider :cellArray="videos" :blockNote="`${block.note}`"></slider>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title';
import Slider from '@/components/Slider';
import Carousel from '@/components/Carousel';
import VideoIframe from '@/components/VideoIframe';
export default {
  components: {
    'nxt-title': Title,
    slider: Slider,
    carousel: Carousel,
    videoiframe: VideoIframe,
  },

  props: {
    users: {},
    blockName: String,
  },
  computed: {
    block() {
      const blocks = this.$store.getters['blocks/getBlocks'];
      return blocks.find(x => x.block === this.blockName);
    },
    videos() {
      return this.$store.getters['videos/getVideos'];
    },
  },
};
</script>

<style scoped>
.story__container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  position: relative;
}
.story__card {
  width: 30%;
  margin-bottom: 50px;
}
.story__card-container {
  height: 100%;
  margin-right: 40px;
}
.story__text {
  display: flex;
  height: 70%;
  max-width: 340px;
  color: #666666;
}
.videoIframe-container {
  width: 100%;
  height: 100%;
  position: relative;
  right: 0px;
}

.story__slider {
  width: 60%;
  margin: auto;
}

@media screen and (max-width: 768px) {
  .story__card {
    width: 52%;
  }
  .story__container {
    flex-direction: column;
    align-items: center;
  }
  .story__title {
    text-align: center;
    max-width: 100%;
  }
  .story__card-container {
    margin-right: 0;
    align-items: center;
  }
  .story__text {
    max-width: none;
  }
  .story__slider {
    margin-right: 54px;
    margin-left: 54px;
    width: 92%;
  }
}

@media screen and (max-width: 320px) {
  .story__title {
    text-align: justify;
  }
  .story__card {
    width: 100%;
  }
}
</style>
