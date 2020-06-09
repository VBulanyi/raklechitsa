<template>
  <div class="layout__container" v-if="!this.loading">
    <mobile-menu
      v-if="isMobileMenuOpened"
      class="mobile-menu"
      @btnClick="showPopUp"
    />
    <main-header :blockName="'header'" />
    <nuxt />
    <overlay v-if="popupShown" @overlayClick="showPopUp"></overlay>
    <pop-up v-if="popupShown" @closeClick="showPopUp">
      <nxt-questionForm></nxt-questionForm>
    </pop-up>
    <overlay
      v-if="contactsFormShown"
      @overlayClick="showContactsForm"
    ></overlay>
    <pop-up v-if="contactsFormShown" @closeClick="showContactsForm">
      <nxt-contactsForm />
    </pop-up>
    <overlay v-if="shareShown" @overlayClick="showShare"></overlay>
    <pop-up v-if="shareShown" :theme="'share'" @closeClick="showShare">
      <share />
    </pop-up>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Overlay from '@/components/ui/Overlay';
import PopUp from '@/components/PopUp';
import QuestionForm from '@/components/QuestionForm';
import MobileMenu from '@/components/MobileMenu';
import ContactsForm from '@/components/ContactsForm';
import Share from '@/components/Share';

export default {
  components: {
    'main-header': Header,
    overlay: Overlay,
    'pop-up': PopUp,
    'nxt-questionForm': QuestionForm,
    'mobile-menu': MobileMenu,
    'nxt-contactsForm': ContactsForm,
    share: Share,
  },

  computed: {
    popupShown() {
      return this.$store.getters['popup/getPopupShown'];
    },
    contactsFormShown() {
      return this.$store.getters['popup/getcontactsFormShown'];
    },
    shareShown() {
      return this.$store.getters['popup/getShareShown'];
    },
    isMobileMenuOpened() {
      return this.$store.getters['mobile-menu/getMobileMenuState'];
    },
  },

  methods: {
    showPopUp() {
      this.$store.commit('popup/togglePopup');
      this.$store.commit('quiz/setIsFinishedFalse');
    },
    showContactsForm() {
      this.$store.commit('popup/toggleContactsForm');
    },
    showShare() {
      this.$store.commit('popup/togglShare');
    },
    onResize() {
      const tab =
        document.documentElement.clientWidth < 769 &&
        document.documentElement.clientWidth > 320
          ? true
          : false;
      const mobile = document.documentElement.clientWidth < 321 ? true : false;
      this.$store.commit('mobile/setState', { mobile, tab });
    },
  },
  beforeMount() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },

  data() {
    return {
      loading: true,
    };
  },
  async created() {
    await this.$store.dispatch('blocks/fetchBlocks');
    await this.$store.dispatch('users/fetchUsersApi');
    await this.$store.dispatch('videos/fetchVideos');
    await this.$store.dispatch('statistics/fetchStatistics');
    await this.$store.dispatch('instagram/fetchIntstagram');

    this.loading = false;
  },
};
</script>

<style>
html {
  font-family: 'Inter', Arial, Helvetica, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  max-width: 1600px;
  min-width: 320px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.mobile-menu {
  display: none;
}

@media screen and (max-width: 1280px) {
  html {
    font-size: 14px;
  }
}

@media screen and (max-width: 1024px) {
  html {
    font-size: 11, 4px;
  }
}
@media screen and (max-width: 768px) {
  .mobile-menu {
    display: flex;
  }
}
</style>
