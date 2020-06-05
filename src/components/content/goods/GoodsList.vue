<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :goods-item="item"/>
  </div>
</template>

<script>
  import GoodsListItem from 'components/content/goods/GoodsListItem'

  export default {
    name: "goods-list",
    components: {
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        default: function () {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
  }
</style>
