<template>
  <div>
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(cell, index) in cellArray"
          :key="index"
        >
          <nxt-videoIframe
            :url="`${cell.url}`"
            :link="
              'https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F'
            "
            :linlText="blockNote"
          />
        </div>
      </div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card';
import VideoIframe from '@/components/VideoIframe';

export default {
  components: {
    card: Card,
    'nxt-videoIframe': VideoIframe,
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
      },
    };
  },

  props: ['cellArray', 'blockNote'],
};
</script>

<style scoped>
.swiper-slide {
  width: 100% !important;
}
</style>
