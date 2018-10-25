<template>
  <footer class="footer_guide border-1px">                <!--动态class类名确定了on只是不确定有还是没有就用对象显示-->
    <a href="javascript:;" class="guide_item" @click="goTo('/msite')" :class="{on: $route.path==='/msite'}">
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span class="footer_text">首页</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goTo('/Cloth')" :class="{on: $route.path==='/Cloth'}">
      <span class="item_icon">
        <i class="iconfont icon-shiwu"></i>
      </span>
      <span class="footer_text">识物</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goTo('/List')" :class="{on: $route.path==='/List'}">
      <span class="item_icon">
        <i class="iconfont icon-fen-lei"></i>
      </span>
      <span class="footer_text">分类</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goTo('/Shoppingcart')" :class="{on: $route.path==='/Shoppingcart'}">
      <span class="item_icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span class="footer_text">购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goTo('/profile')" :class="{on: $route.path==='/profile'}">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span class="footer_text">个人</span>
    </a>
  </footer>
</template>
<script>
  export default {
    methods: {
      goTo(path) {
        // 通过路由导航跳转路由
        this.$router.replace(path)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .footer_guide  //footer
    top-border-1px(#999)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #f5f5f5;
    width 100%
    height (98/$rem)
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      justify-content space-around
      margin (5/$rem)
      color #999999
      &.on
        color #b4282d
      span
        font-size (24/$rem)
        margin-top 4px
        .iconfont
          font-size (40/$rem)
</style>

