<template>
  <div class="pagination">
    <span
      :class="[
        'pagination__first',
        {
          pagination__first_active: active === 1,
        },
      ]"
      @click="first()"
      >Первая</span
    >
    <span @click="prev()" class="pagination__arrow-prev arrow"></span>
    <div
      v-for="index in pageCount"
      :key="index"
      @click="setActive(index)"
      :class="[
        'pagination__item',
        {
          pagination__item_active: index === active,
        },
      ]"
    >
      {{ index }}
    </div>
    <span @click="next()" class="pagination__arrow-next arrow"></span>
    <span
      :class="[
        'pagination__last',
        {
          pagination__last_active: active == pageCount,
        },
      ]"
      @click="last"
      >Последняя</span
    >
  </div>
</template>

<script>
export default {
  props: {
    totalItems: {
      type: Number,
      default: 0,
    },
    ItemsPerPage: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      active: 1,
    };
  },
  computed: {
    pageCount() {
      return Math.ceil(this.totalItems / this.ItemsPerPage);
    },
  },
  methods: {
    setActive(index) {
      this.active = index;
      this.$emit('onPageChanged', index);
    },
    prev() {
      if (this.active > 1) {
        this.active = this.active - 1;
        this.$emit('onPageChanged', this.active);
      } else return;
    },
    next() {
      if (this.active < this.pageCount) {
        this.active = this.active + 1;
        this.$emit('onPageChanged', this.active);
      } else return;
    },
    first() {
      this.active = 1;
      this.$emit('onPageChanged', this.active);
    },
    last() {
      this.active = this.pageCount;
      this.$emit('onPageChanged', this.active);
    },
  },
};
</script>

<style css scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
}

.pagination__item {
  width: 58px;
  height: 58px;
  cursor: pointer;
  display: flex;
  align-items: center;
  background: #fbfbfb;
  user-select: none;
  justify-content: center;
  transition: background 0.3s;
  font-size: 0.94rem;
}

.pagination__item:last-child {
  margin-right: 0px;
}

.pagination__item_active,
.pagination__item:hover {
  background: #f4f4f4;
}
.arrow {
  border: solid #000;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 7px;
}
.pagination__arrow-next {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

.pagination__arrow-prev {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}
.pagination__first {
  margin-right: 30px;
  font-weight: 500;
}
.pagination__last {
  margin-left: 30px;
  font-weight: 500;
}
.pagination__last_active {
  color: #a2a2a2;
}
.pagination__first_active {
  color: #a2a2a2;
}

@media screen and(max-width: 1024px) {
  .pagination__item {
    width: 50px;
    height: 50px;
  }
}
@media screen and(max-width: 3204px) {
  .pagination__item {
    height: auto;
  }
}
</style>
