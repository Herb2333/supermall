<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :goods-item="item" :key="item.acm">
    </goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";

export default {
  name: "GoodsList",
  components: {
    GoodsListItem,
  },
  data() {
    return {};
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  // created () {},
  // mounted () {},
  computed: {},
  // watch: {},
  // methods: {}
};
</script>

<style scoped>
.goods {
  /* width: 100%; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 3px;
}
</style>
