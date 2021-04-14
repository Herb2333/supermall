<template>
  <div class="toast">
    <div v-show="show">{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: "",
      isshow: false,
    };
  },
  props: {
    // message: {
    //   type: String,
    //   default: "",
    // },
    // show: {
    //   type: Boolean,
    //   default: true,
    // },
  },
  // created () {},
  // mounted () {},
  // computed: {},
  // watch: {},
  methods: {
    show(message, time = 1500) {
      this.isshow = true;
      this.message = message;
      setTimeout(() => {
        this.isshow = false;
        this.message = "";
      }, time);
    },
  },
};
</script>

<style scoped>
.toast {
  /* width: 200px;
  height: 150px; */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* margin: auto; */
  font-size: 23px;
  text-align: center;
  /* line-height: 150px; */

  color: #fff;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
}
</style>
