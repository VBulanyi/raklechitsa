<template>
  <div class="footer__container">
    <div class="footer__thanks-container">
      <h2 class="footer__thanks-title" v-text="block.title">
        Спасибо всем, кто помог состояться этому проекту
      </h2>
      <main-menu class="footer__menu" :hide="true" />
      <contacts />
    </div>
    <div class="footer__copyright">
      <span class="footer__logo">
        <p v-html="block.text"></p>
        <p class="footer__date">{{ date }}</p>
      </span>
      <span class="footer__author">Сделано студентами Яндекс Практикум</span>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu';
import Contacts from '@/components/Contacts';

export default {
  components: {
    'main-menu': Menu,
    contacts: Contacts,
  },
  props: {
    blockName: String,
  },
  computed: {
    date() {
      return new Date().getFullYear();
    },
    block() {
      const blocks = this.$store.getters['blocks/getBlocks'];
      return blocks.find(x => x.block === this.blockName);
    },
  },
};
</script>

<style scoped>
p {
  margin-inline-end: 5px;
}
.footer__container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 60px 0;
}
.footer__logo {
  display: flex;
  color: #898989;
  font-size: 1.125rem;
}
.footer__author {
  color: #898989;
  font-size: 1.125rem;
}

.footer__copyright {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.footer__date {
  margin-left: 5px;
}

.footer__thanks-container {
  display: flex;
  justify-content: space-between;
  padding-bottom: 50px;
  width: 100%;
}
.footer__thanks-title {
  max-width: 30%;
  font-size: 2rem;
}

@media screen and (max-width: 768px) {
  .footer__thanks-title {
    font-size: 24px;
    max-width: 36%;
  }
  .footer__container {
    padding-top: 0;
    margin-top: 80px;
  }
  .footer__thanks-container {
    padding-bottom: 90px;
  }
  .footer__menu {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    justify-content: space-between;
  }
}

@media screen and (max-width: 320px) {
  .footer__thanks-title {
    font-size: 18px;
    max-width: 100%;
    line-height: 21px;
  }
  .footer__container {
    margin-top: 50px;
    padding-bottom: 50px;
  }
  .footer__thanks-container {
    flex-direction: column;
    padding-bottom: 50px;
  }
  .footer__menu {
    min-height: 100%;
    align-items: flex-start;
    margin-top: 50px;
  }
  .footer__copyright {
    flex-direction: column;
  }
  .footer__logo {
    margin-bottom: 10px;
    font-size: 13px;
    line-height: 18px;
  }
  .footer__author {
    font-size: 13px;
    line-height: 18px;
  }
}
</style>
