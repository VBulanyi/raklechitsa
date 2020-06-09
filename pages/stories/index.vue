<template>
  <div class="stories-page">
    <nxt-title class="stories-page__title">{{ title }}</nxt-title>
    <form @submit.prevent="search" class="stories-page__search-container">
      <nxt-input v-model="storiesName" />

      <nxt-button
        v-if="mobileCheck.mobile"
        :class="['stories-page__search-btn', { lupa: mobileCheck }]"
        theme="purple"
        type="submit"
      ></nxt-button>
      <nxt-button
        class="stories-page__search-btn"
        type="submit"
        v-else
        theme="purple"
        >Поиск</nxt-button
      >
    </form>
    <div class="stories-page__cards">
      <panel
        v-for="user in usersToRender"
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
    <nxt-pagination
      :totalItems="initialUsers.length"
      :ItemsPerPage="itemsPerPage"
      @onPageChanged="changeStartIndex"
    />
    <nxt-footer :blockName="'footer'" />
  </div>
</template>

<script>
import Title from '@/components/Title';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Panel from '@/components/Panel';
import Card from '@/components/Card';
import Pagination from '@/components/ui/Pagination';
import Footer from '@/components/Footer';

export default {
  components: {
    'nxt-title': Title,
    'nxt-input': Input,
    'nxt-button': Button,
    panel: Panel,
    card: Card,
    'nxt-pagination': Pagination,
    'nxt-footer': Footer,
  },
  computed: {
    initialUsers() {
      const { users } = this.$store.state;
      if (!this.appliedStoriesName || this.appliedStoriesName === '') {
        return users.users;
      }
      return users.users.filter(
        (item, idx) =>
          item.author.toLowerCase().indexOf(this.appliedStoriesName) > -1
      );
    },
    usersToRender() {
      return this.initialUsers.filter(
        (item, idx) =>
          idx >= this.startIndex &&
          idx <= this.startIndex + this.itemsPerPage - 1
      );
    },
    mobileCheck() {
      return this.$store.getters['mobile/getMobileState'];
    },
    url() {
      return process.env.BASE_URL;
    },
  },
  methods: {
    goToDetail(id) {
      this.$router.push(`/stories/${id}`);
    },
    changeStartIndex(index) {
      this.startIndex = (index - 1) * this.itemsPerPage;
    },
    search() {
      this.appliedStoriesName = this.storiesName.toLowerCase();
    },
  },
  data() {
    return {
      itemsPerPage: 16,
      startIndex: 0,
      storiesName: '',
      appliedStoriesName: '',
      title: this.$store.getters['blocks/getBlocks'].find(
        x => x.block === 'stories'
      ).title,
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>

<style lang="css" scoped>
.stories-page {
  margin: 100px 60px 0px 60px;
  display: flex;
  flex-direction: column;
}
.stories-page__search-container {
  display: flex;
}
.stories-page__cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 40px;
  row-gap: 60px;
  margin-top: 70px;
  margin-bottom: 40px;
}

@media screen and (max-width: 768px) {
  .stories-page {
    margin: 80px 40px 0px 40px;
  }
  .stories-page__search-container {
    margin-top: 20px;
  }
  .stories-page__search-btn {
    max-width: 208px;
    margin-left: 20px;
  }
}

@media screen and (max-width: 320px) {
  .stories-page {
    margin: 50px 15px 0 15px;
  }
  .stories-page__search-container {
    margin-top: 20px;
  }
  .stories-page__search-btn {
    width: auto;
    margin-left: 6px;
    display: block;
    position: relative;
    height: 46px;
    width: 46px;
  }

  .stories-page__cards {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 30px;
    margin-top: 30px;
  }
  .lupa:before,
  .lupa:after {
    content: '';
    height: 12px;
    display: block;
    position: absolute;
    top: 15px;
    left: 15px;
  }

  .lupa:before {
    width: 12px;
    border: 1px #fff solid;
    border-radius: 100%;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
  }

  .lupa:after {
    width: 1px;
    background: #fff;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    top: 25px;
    left: 30px;
  }
  .stories-page__title {
    align-self: start;
    text-align: start;
  }
}
</style>
