<template>
  <div class="statistics__container">
    <nxt-title :theme="'tellStory'" v-text="block.title"></nxt-title>
    <div class="statistic__grid">
      <panel v-for="stat in statistics" :key="stat.id">
        <nxt-statcard
          :qoute="stat.description"
          :title="stat.summary"
          :source="stat.source"
        >
          <nxt-statusbar
            v-if="stat.id < 3"
            :value="stat.currentValue"
            :maxValue="stat.maxValue"
          />
          <!--newValue="stat.maxValue" когда данные появятся в API -->
          <nxt-statusbar-thin v-else :value="stat.maxValue" :newValue="-25" />
        </nxt-statcard>
      </panel>
    </div>
  </div>
</template>

<script>
import Statusbar from '@/components/ui/Statusbar';
import Title from '@/components/Title';
import StatCard from '@/components/StatCard';
import StatusbarThin from '@/components/ui/StatusbarThin';
import Panel from '@/components/Panel';

export default {
  components: {
    'nxt-statusbar': Statusbar,
    'nxt-title': Title,
    'nxt-statcard': StatCard,
    'nxt-statusbar-thin': StatusbarThin,
    panel: Panel,
  },
  props: {
    blockName: String,
  },
  computed: {
    block() {
      const blocks = this.$store.getters['blocks/getBlocks'];
      return blocks.find(x => x.block === this.blockName);
    },
    statistics() {
      return this.$store.getters['statistics/getStatistics'];
    },
  },
};
</script>

<style scoped>
.statistics__container {
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  margin-bottom: 100px;
}
.statistic__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 40px;
  margin-top: 40px;
  margin-bottom: 0;
}

@media screen and (max-width: 768px) {
  .statistics__container {
    margin-top: 80px;
    margin-bottom: 80px;
  }
  .statistic__grid {
    column-gap: 30px;
    margin-top: 30px;
    overflow-x: scroll;
  }
}

@media screen and (max-width: 320px) {
  .statistics__container {
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .statistic__grid {
    margin-top: 0;
  }
}
</style>
