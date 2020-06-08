<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot/>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';

  export default {
    name: "scroll",
    data: function () {
      return {
        scroll: null
      }
    },
    mounted: function () {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true//来限制span或者div这种标签
      })
    },
    methods: {
      scrollTo: function (x, y, time=300) {
        this.scroll.scrollTo(x, y, time);
      }
    }
  }
</script>

<style scoped>

</style>
