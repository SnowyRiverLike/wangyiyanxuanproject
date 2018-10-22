<template>
  <footer class="footer_guide border-1px">                <!--动态class类名确定了on只是不确定有还是没有就用对象显示-->
    <a href="javascript:;" class="guide_item" @click="goTo('/msite')" :class="{on: $route.path==='/msite'}">
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goTo('/Cloth')" :class="{on: $route.path==='/Cloth'}">
      <span class="item_icon">
        <i class="iconfont icon-shiwu"></i>
      </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goTo('/List')" :class="{on: $route.path==='/List'}">
      <span class="item_icon">
        <i class="iconfont icon-fen-lei"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goTo('/Shoppingcart')" :class="{on: $route.path==='/Shoppingcart'}">
      <span class="item_icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goTo('/profile')" :class="{on: $route.path==='/profile'}">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>个人</span>
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
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color red
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
