<template>
  <div class="contacts__container">
    <span class="contacts__social">
      Мы в
      <a
        href="https://www.instagram.com/raklechitsa/"
        target="_blank"
        class="contacts__link"
        >Инстаграмме</a
      >
      и
      <a
        href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F"
        target="_blank"
        class="contacts__link"
        >Youtube</a
      >
    </span>
    <nxt-button @btnClick="showContacts" class="contacts__share"
      >Поделитесь &#8599;</nxt-button
    >
  </div>
</template>

<script>
import Button from '@/components/ui/Button';

export default {
  components: {
    'nxt-button': Button,
  },
  methods: {
    showContacts() {
      this.$store.commit('popup/togglShare');
    },
  },
};
</script>

<style scoped>
.contacts__container {
  display: flex;
  flex-direction: column;
}
.contacts__social {
  font-size: 1.125rem;
}
.contacts__link {
  text-decoration: none;
  color: #000;
}
.contacts__link:hover {
  opacity: 0.8;
}
.contacts__share {
  font-size: 1.125rem;
  margin-top: 44px;
  align-self: start;
  background-color: #fff;
  padding: 0;
}
@media screen and (max-width: 320px) {
  .contacts__social {
    font-size: 13px;
    line-height: 15px;
  }
  .contacts__share {
    margin-top: 18px;
    font-size: 13px;
    line-height: 15px;
  }
}
</style>
