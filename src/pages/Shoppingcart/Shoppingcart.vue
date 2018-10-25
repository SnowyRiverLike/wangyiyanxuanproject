<template>
  <section class="shop_cart">
    <div class="my_header" >
      <div class="header_center">购物车</div>
      <div class="header_right">领券</div>
    </div>

    <section class="shopcart_no_login">

      <div class="route_alternative">
        <div class="item">
          <div class="servicePolicy"></div>
          <span>30天无忧退货</span>
        </div>
        <div class="item">
          <div class="servicePolicy"></div>
          <span>48小时快速退款</span>
        </div>
        <div class="item">
          <div class="servicePolicy"></div>
          <span>满88元免邮费</span>
        </div>
      </div>

      <div class="shop_cart_log_total">
         <div class="container">
           <img src="./images/shoppingCart.png">
           <h3>添加点什么吧</h3>
           <button>立即登陆</button>
         </div>
       </div>
    </section>
  </section>
</template>
<script>
  export default {
    data() {
      return {}
    }
  }
</script>
<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins';

  .shop_cart
    .my_header
      position fixed!important
      left 0
      top 0
      z-index 5
      width 100%
      height: (88/$rem)
      .header_center
        height (1.17333*75/$rem)
        padding (-0.6*75/$rem)
        line-height (1.17333*75/$rem)
        text-align center
        background-color #fff
        font-size (.48*75/$rem)
        position relative
      .header_right
        position absolute
        right 50px
        top 30px
        font-size (.4*75/$rem)
        color #B4282D
    .shopcart_no_login
      .route_alternative
        position relative
        z-index 1
        height (.93333*75/$rem)
        padding (0 .4*75/$rem)
        background #f4f4f4
        display flex
        flex-flow row nowrap
        align-item center
        justify-content space-between
        .item
          margin-top 162px
          display flex
          align-items center
          font-size (.32*75/$rem)
          color #666
          .servicePolicy
            display inline-block
            vertical-align middle
            background-image url(images/shoppingCart.png)
            background-repeat no-repeat
            width (.13333*75/$rem)
            height (.13333*75/$rem)
          span
            font-size (.32*75/$rem)
            color #666

      .shop_cart_log_total
        position fixed
        top (1.1733375*75/$rem)
        left 0
        bottom 0
        z-index 0
        width 100%
        background-color #f4f4f4
        text-align center
        .container
          position absolute
          top (-.66667*75/$rem)
          right 0
          bottom 0
          left 0
          height (4/$rem)
          margin auto
          img
            background-image url(images/shoppingCart.png)
            display inline-block
            vertical-align middle
            width (3.30667*75/$rem)
            height (3.30667*75/$rem)
            margin-bottom (.10667*75/$rem)
            background-size (3.30667*75/$rem 3.30667*75/$rem)
            background-position center center
            background-repeat no-repeat

          h3











</style>
