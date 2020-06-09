<template>
  <div class="card-page">
    <div v-if="tabCheck || mobileCheck" class="card-page__mobile">
      <div class="card-page__main">
        <span class="card-page__title">{{ currentUser.author }}</span>
        <span class="card-page__qoute">{{ currentUser.title }}</span>
      </div>
      <img :src="url + currentUser.ImageUrl[0].url" class="card-page__image" />

      <div class="card-page__share">
        <nxt-button @btnClick="showContacts" :theme="'share'"
          >Поделитесь &#8599;</nxt-button
        >
        <span class="card-page__date">20 апреля 2018</span>
      </div>
    </div>

    <div v-else class="card-page__descripton">
      <div class="card-page__image-wrapper">
        <img
          :src="url + currentUser.ImageUrl[0].url"
          class="card-page__image"
        />
      </div>
      <div class="card-page__about">
        <div class="card-page__main">
          <span class="card-page__title">{{ currentUser.author }}</span>
          <span class="card-page__qoute">{{ currentUser.title }}</span>
        </div>
        <div class="card-page__share">
          <nxt-button @btnClick="showContacts" :theme="'share'"
            >Поделитесь &#8599;</nxt-button
          >
          <span class="card-page__date">20 апреля 2018</span>
        </div>
      </div>
    </div>

    <p class="card-page__text" v-html="currentUser.text"></p>
    <nxt-button
      class="card-page__share-btn"
      :theme="'share'"
      @btnClick="showContacts"
      >Поделитесь этой статьей в своих социальных сетях &#8599;</nxt-button
    >

    <div class="card-page__container">
      <panel
        v-for="user in cardsReturn()"
        :key="user.id"
        class="stories-page__panel"
      >
        <card
          :title="user.author"
          :text="user.title"
          :url="url + user.ImageUrl[0].url"
          @cardClick="goToDetail(user.id)"
        />
      </panel>
    </div>
    <nxt-button @btnClick="goToStories" :theme="'width'"
      >Больше статей</nxt-button
    >
    <nxt-footer :blockName="'footer'" />
  </div>
</template>

<script>
import Panel from '@/components/Panel';
import Card from '@/components/Card';
import Button from '@/components/ui/Button';
import Footer from '@/components/Footer';

export default {
  components: {
    panel: Panel,
    card: Card,
    'nxt-button': Button,
    'nxt-footer': Footer,
  },
  data() {
    return {
      mobile: false,
    };
  },
  computed: {
    currentUser() {
      return this.$store.getters['users/getCurrentUsers'];
    },
    users() {
      return this.$store.getters['users/getUsers'];
    },
    url() {
      return process.env.BASE_URL;
    },
    mobileCheck() {
      return this.$store.getters['mobile/getMobileState'];
    },
    tabCheck() {
      return this.$store.getters['mobile/getTabState'];
    },
  },
  head() {
    return {
      title: this.currentUser.author,
    };
  },
  async fetch({ store, route }) {
    await store.dispatch('users/fetchUsersApiWithID', { id: route.params.id });
  },
  methods: {
    goToStories() {
      this.$router.push('/stories/');
    },
    showContacts() {
      this.$store.commit('popup/togglShare');
    },
    goToDetail(id) {
      this.$router.push(`/stories/${id}`);
    },
    cardsReturn() {
      if (this.tabCheck) {
        return this.users.slice(0, 3);
      }
      if (this.mobileCheck) {
        return this.users.slice(0, 2);
      } else return this.users.slice(0, 4);
      console.log(this.mobile);
    },
  },
};
</script>

<style lang="css" scoped>
.card-page {
  margin: 100px 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 70px;
}

.card-page__descripton {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.card-page__image {
  width: 580px;
  height: 580px;
  object-fit: cover;
}
.card-page__image:after {
  content: '';
  display: block;
  padding-bottom: 100%;
}
.card-page__main {
  font-size: 2.375rem;
}

.card-page__title {
  font-weight: bold;
}
.card-page__about {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 40px;
  width: 100%;
}

.card-page__share {
  display: flex;
  justify-content: space-between;
  font-size: 1.125rem;
}

.card-page__share-btn {
  width: 54%;
  padding: 30px 0px;
  margin-top: 70px;
}
.card-page__text {
  max-width: 54%;
  margin-top: 130px;
  font-size: 1.375rem;
}
.card-page__container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 40px;
  margin-top: 160px;
}

@media screen and (max-width: 768px) {
  .card-page {
    margin: 100px 64px;
  }
  .card-page__mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .card-page__descripton {
    flex-direction: column;
  }
  .card-page__image {
    width: 420px;
    height: 420px;
    margin-bottom: 60px;
  }
  .card-page__main {
    font-size: 30px;
    margin-bottom: 60px;
  }

  .card-page__container {
    margin-top: 120px;
    grid-template-columns: repeat(3, 1fr);
  }
  .footer__container {
    padding-bottom: 0;
    margin-top: 70px;
  }
  .card-page__share {
    font-size: 1rem;
    width: 100%;
  }
  .card-page__text {
    max-width: 100%;
    font-size: 1.125rem;
    margin-top: 100px;
  }
  .card-page__share-btn {
    padding: 24px 0 24px 0;
    margin-top: 80px;
    width: 100%;
    border: 1px solid #efefef;
    text-align: center;
    line-height: 1rem;
  }
}

@media screen and (max-width: 320px) {
  .card-page {
    margin: 50px 15px;
  }
  .card-page__text {
    font-size: 0.81rem;
    margin-top: 60px;
  }
  .card-page__main {
    font-size: 1.125rem;
    text-align: center;
    margin-bottom: 30px;
  }

  .card-page__image {
    width: 100%;
    height: 100%;
    margin-bottom: 30px;
  }
  .card-page__share {
    font-size: 0.81rem;
  }
  .card-page__share-btn {
    padding: 20px 0 20px 0;
    margin-top: 40px;
  }
  .card-page__container {
    margin-top: 100px;
    grid-template-columns: repeat(1, 1fr);
    row-gap: 30px;
  }
}
</style>
