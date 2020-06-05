<template>
  <div id="home">
    <nar-bar class="home-nav"><div slot="center">购物街</div></nar-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
    <feature-view/>
    <TabControl class="tab-control"
                :titles="['流行', '新款', '精选']"
                @tabClick="tabClick"/>
    <goods-list :goods="showGoods"/>

    <ul>
      <li v-for="i in 100">{{i}}</li>
    </ul>
  </div>
</template>

<script>
  //非公共组件
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  //公共组件
  import NarBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'

  //请求数据
  import {getHomeMultidata, getHomeGoods} from 'network/home'

export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,

    NarBar,
    TabControl,
    GoodsList

  },
  data: function () {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: 'pop'
    }
  },
  created: function(){
    //1.请求多个数据
    this.getHomeMultidata();

    //2.请求商品数据 其实我们可以手动去传这个类型参数，但是我们可以提前去数据库拿到这个数据，这样给用户延迟时间就少了。
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  computed: {
    showGoods: function () {
      return this.goods[this.currentType].list;
    }
  },
  methods: {
    /**
     * 1.事件监听
     */
    tabClick(index){
      switch(index){
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
    },

    /**
     * 2.网络请求
     */
    getHomeMultidata: function () {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },

    getHomeGoods: function(type){
      let page = this.goods[type].page;
      getHomeGoods(type, page + 1).then(res => {
        console.log(res);
        this.goods[type].list = res.data.list;
        this.goods[type].page = res.data.page;
      })
    }
  }
};
</script>

<style scoped>
  #home {
    padding-top: 44px;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }
</style>
