<template>
  <div>
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
    <back-top @click.native="backTop" class="back-top" v-show="isShowBackTop">
      <img src="~assets/img/common/top.png" alt="" />
    </back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

import { backTopMixin } from "common/mixin";

export default {
  name: "Category",
  components: {
    NavBar,
  },
  mixins: [backTopMixin],
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {},
};
</script>

<style scoped>
.back-top {
  position: fixed;
  right: 10px;
  bottom: 65px;
}
.nav-bar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
}
</style>
