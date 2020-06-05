<template>
  <!-- 8.插槽会被替换，所以用标签以及表达式时应该在插槽外再包裹一个标签使用 -->
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <!-- <div :class="{active: isActive}"> -->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: {
      type: String,
      required: true
    },
    colorStyle: {
      type: String,
      default: "red"
    }
  },
  data: function() {
    return {
      //isActive: true
    };
  },
  computed: {
    isActive: function() {
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeStyle: function() {
      return this.isActive ? { color: this.colorStyle } : {};
    }
  },
  methods: {
    itemClick: function() {
      this.$router.push(this.path);
    }
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}

/* .active {
  color: red;
}*/
</style>
