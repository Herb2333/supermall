<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.acm">
      <a :href="item.link"><img :src="item.image" alt="" class="image" /></a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  components: { Swiper, SwiperItem },
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      dafault() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  // created () {},
  // mounted () {},
  // computed: {},
  // watch: {},
  // methods: {}
};
</script>

<style scoped>
.image {
  width: 100%;
}
</style>
