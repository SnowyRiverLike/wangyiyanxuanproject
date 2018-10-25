<template xmlns="http://www.w3.org/1999/html">
  <div class="scrollWrap">
    <div class="homeContainer">
      <!--//头部-->
      <div class="headerWrap">
        <div class="homeHd">
          <span>网易严选</span>
          <div class="search">
            <div class="sContent">
              <i class="iconfont icon-sousuo"></i>
              <span>搜索商品, 共9771款好物</span>
            </div>
          </div>
        </div>
        <!--导航区//-->
        <div class="hdScorllX">
          <div class="hdScorllItem">
            <span class="active">居家</span>
          </div>
          <div class="hdScorllItem">
            <span class="active">配饰</span>
          </div>
          <div class="hdScorllItem">
            <span class="active">服装</span>
          </div>
          <div class="hdScorllItem">
            <span class="active">电器</span>
          </div>
          <div class="hdScorllItem">
            <span class="active">洗护</span>
          </div>
        </div>
      </div>
        <!--   //轮播图-->
      <div class="swiper">
        <div class="swiper_img">
          <div class="swiper_item">
            <img src="./images/01.jpg" alt="首页轮播">
          </div>
        </div>
      </div>
      <!--轮播图下面的东西-->
      <div class="g-gorw">
        <div class="inline_item">
          <i class="iconfont icon-anonymous-iconfont"></i>
          <span class="inline_text">1网易自营品牌</span>
        </div>
        <div class="inline_item">
          <i class="iconfont icon-anonymous-iconfont"></i>
          <span class="inline_text">30天无忧退货</span>
        </div>
        <div class="inline_item">
          <i class="iconfont icon-anonymous-iconfont"></i>
          <span class="inline_text">48小时快速退款</span>
        </div>
      </div>
      <!--底部的一块-->
      <div class="m-indexFloor">
        <!--导航栏-->
        <header class="hd">
          <div class="navigate_content">
            <span >品牌制造商直供</span>
            <i class="iconfont icon-jiantou"></i>
          </div>
        </header>

        <div class="hd_collection">
          <div class="hd_index_item">
            <h4>CK制造商</h4>
            <div class="title">
              25元起
            </div>
          </div>
          <div class="hd_index_item">
            <h4>Nine West制造商</h4>
            <div class="title">
              199元起
            </div>
          </div>
          <div class="hd_index_item">
            <h4>新秀丽制造商</h4>
            <div class="title">
              49元起
            </div>
          </div>
          <div class="hd_index_item">
            <h4>Birkenstock集团制造商</h4>
            <div class="title">
              89.9元起
            </div>
          </div>
        </div>

      </div>

      <!--新品首发-->
      <div class="m-newItems">

        <div class="new_navigate_content">
          <header class="newItems">
            <span>新品首发</span>
            <div class="all">查看全部 ></div>
            <!--轮播-->
          </header>
          <!--小轮播-->
          <div class="m-goodGrid">
            <div class="list">
              <div class="goodGrid-item">
                <div class="wraper_img">
                  <img src="./images/9.png" alt="">
                </div>
                <div class="title">
                  新品
                </div>
                <div class="name">小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</div>
                <div class="newItemDesc">夏季爆品，媲美现煮</div>
                <div class="price">98￥</div>
              </div>
              <div class="goodGrid-item">
                <div class="wraper_img">
                  <img src="./images/10.png" alt="">
                </div>
                <div class="title">
                  新品
                </div>
                <div class="name">小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</div>
                <div class="newItemDesc">夏季爆品，媲美现煮</div>
                <div class="price">98￥</div>
              </div>
              <div class="goodGrid-item">
                <div class="wraper_img">
                  <img src="./images/11.png" alt="">
                </div>
                <div class="title">
                  新品
                </div>
                <div class="name">小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</div>
                <div class="newItemDesc">夏季爆品，媲美现煮</div>
                <div class="price">98￥</div>
              </div>
            </div>
          </div>
        </div>
        <!--简单图片-->
        <div class="m-sale">
          <img src="http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg" alt="">
        </div>
        <!--专题精选-->
        <div class="m-indexFloor">
          <div class="hd">
            <div class="navigate_content">
              <span>专题精选</span>
              <i class="iconfont icon-jiantou"></i>
            </div>
          </div>
        </div>
        <!--小轮播-->
        <div class="imgWrap">
          <div class="img-scroll">
            <div class="imgItem">
              <img src="./images/06.jpg">
              <div class="line1">
                <h4>给毛孔来一次深度清洁</h4>
                <span>107.1元起</span>
              </div>
              <div class="desc">硅胶洁面仪，洗出会发光的素颜肌</div>
            </div>
            <div class="imgItem">
              <img src="./images/06.jpg">
              <div class="line1">
                <h4>给毛孔来一次深度清洁</h4>
                <span>107.1元起</span>
              </div>
              <div class="desc">硅胶洁面仪，洗出会发光的素颜肌</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>
<script>
  export default {
    data() {
      return {

      }
    },

    mounted() {

    }

  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins';
  .scrollWrap
    width 100%
    height 100%
    overflow hidden
    .homeContainer
      background #F4F4F4
      overflow hidden
      .headerWrap
        background #F4F4F4
        overflow hidden
        position fixed
        z-index 100
        top 0
        width 100%
      .homeHd
        background #ffffff
        padding 16px
        width 100%
        height (75/$rem)
        display flex
        justify-content space-between
        align-items center
        span
          width 24%
          font-size (34/$rem)
        .search
          width 70%
          height (60/$rem)
          font-size (.37333/$rem)
          color #666
          background-color #ededed
          border-radius (.10667/$rem)
          display flex
          align-items center
          justify-content center
          margin-right 34px
          .sContent
            .icon-sousuo
              font-size (.37333*75/$rem)
              color #666

      .hdScorllX
        width 100%
        overflow: hidden
        background #ffffff
        display flex
        padding 0 0 (12/$rem) 0
        .hdScorllItem
          padding 0 0 (12$rem) 0
          display flex
          justify-content space-between
          align-items center
          span
            width (70/$rem)
            text-align center
            flex-shrink 0
            flex-wrap nowrap
            margin 0 (.5*75/$rem)
            font-size (.37333*75/$rem)
            &.active
              padding: 0 0 (12/$rem) 0
              border-bottom: (3/$rem) solid #b4282d
              color: #b4282d
      .swiper
        height (400/$rem)
        margin-top 152px
        .swiper_img
          .swiper_item
            img
              width (750/$rem)
              height (400/$rem)
      .g-gorw
        background #fff
        width 100%
        display flex
        justify-content center
        text-align center
        margin-right (0.4*75/$rem)
        vertical-align middle
        margin-bottom (0.26667*75/$rem)
        .inline_item
          width 33%
          height (.96*75/$rem)
          margin-left: 0 (0.2*75/$rem)

          .iconfont
            width (.42667*75/$rem)
            height (.42667*75/$rem)
            vertical-align middle
            font-size (0.4*75/$rem)
            color red
          .inline_text
            font-size (.32*75/$rem)
            color #333
            line-height (.42667*75/$rem)
            vertical-align middle



      .m-indexFloor
        margin-bottom: (.26667*75/$rem)
        background-color #fff
        .navigate_content
          display flex
          flex-flow row nowrap
          align-items center
          justify-content center
          height (1.46667*75/$rem)
          font-size (.42667*75/$rem)
          .iconfont
            font-size (30/$rem)
            color lightgray

        .hd_collection
          .hd_index_item
            display inline-block
            margin-bottom (.10667*75/$rem)
            width 42%
            height (3.14667*75/$rem)
            overflow hidden
            /*background #f4f4f4*/
            padding 18px
            border 1px solid #666
            &:nth-child(1),&:nth-child(3){
              margin-left: (8/$rem)
            }
            &:nth-child(1){
              background url("images/1.png")
              background-size 100%
            }
            &:nth-child(2){
              background: url("images/2.png")
              background-size: 100%;
            }
            &:nth-child(3){
              background url("images/3.png")
              background-size 100%
            }
            &:nth-child(4){
              background url("images/4.png")
              background-size 100%
            }
            h4{
              text-overflow ellipsis
              white-space nowrap
              overflow hidden
              color #333
              font-size (.37333*75/$rem)
              line-height (.45333*75/$rem)
              margin-bottom (0.08*75/$rem)
            }
            .title
              color #333
              font-size (.32*75/$rem)
              height (.45333*75$rem)
              margin-top (-0.08*75/$rem)




      .new_navigate_content
        margin-top: -8px;
        margin-bottom: .26667*75/@rem;
        background-color: #fff;
        .newItems
          background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap-d4f7b37e32.png)
          background-size (10*75/$rem 3.46667*75/$rem)
          height (3.46667*75/$rem)
          margin-bottom (.42667*75$rem)
          position relative
          span
            position: absolute;
            top 20%
            left 50%
            transform translateX(-50%)
            font-size (.48*75/$rem)
            color #8BA0B6
          .all
            text-align center
            margin (.21333*75/$rem) auto 0
            width (3.2*75/$rem)
            height (.74667*75/$rem)
            font-size (.37333*75/$rem)
            line-height (.74667*75/$rem)
            background #D8E5F1
            color #8BA0B6
            position absolute
            top 35%
            left 50%
            transform translateX(-50%)


        .m-goodGrid
          padding-bottom (.3*75/$rem)
          margin-top (.3*75/$rem)
          height (6.4*75/$rem)
          background-color #fff
          display flex
          .list
            display flex
            flex-flow row nowrap
            align-items center
            justify-content center
            .goodGrid-item
              margin-left (.4*75/$rem)
              width (3.73333*75/$rem)
              .wraper_img
                width (3.73333*75/$rem)
                background-color #f4f4f4
                img
                  width 100%
                  background-size 100% 100%


              .title
                z-index 1
                margin-top (-.2*75/$rem)
                margin-left (.2*75/$rem)
                height (.4*75/$rem)
                overflow hidden
                background-color #f48f18
                padding (.06667*75/$rem) (.21333*75/$rem)
                line-height (.26667*75/$rem)
                text-align center
                color #fff
                font-size (.26667*75/$rem)
                border-radius (.02667*75/$rem)
                display inline-block
                vertical-align middle
              .name
                margin-bottom (.13333*75/$rem)
                padding 0 (.13333*75/$rem)
                font-size (.37333*75/$rem)
                line-height (.45333*75/$rem)
                text-overflow ellipsis
                overflow hidden
                white-space nowrap
                color #333
                text-align left
              .newItemDesc
                display block
                margin-bottom (.18667*75/$rem)
                font-size (.32*75/$rem)
                color #7f7f7f
                line-height .4*75/$rem
                white-space nowrap
                text-overflow ellipsis
                overflow hidden
                padding 0 (.13333*75/$rem)
              .price
                padding 0 (.13333*75/$rem)
                font-size (.37333*75/$rem)
                text-align left
                color #b4282d
                line-height 1





      .m-sale
        margin-top (.2*75/$rem)
        img
          width 100%


      .imgWrap
        display flex
        .img-scroll
          margin-left (.3*75/$rem)
          display flex
          justify-content space-between
          align-items center
          .imgItem
            margin-right 20.8444px
            width (7.66667*75/$rem)
            margin-bottom (.21333*75/$rem)
            border-radius 8px
            overflow hidden
            float left
            img
              width 100%
              margin-bottom (.1*75/$rem)
            .line1
              height (.5.9*75/$rem)
              margin-bottom (.1*75/$rem)
              overflow hidden
              h4
                white-space nowrap
                overflow hidden
                -ms-text-overflow ellipsis
                -o-text-overflow ellipsis
                text-overflow ellipsis
                width (5.46667*75/$rem)
                float left
                font-size (.37333*75/$rem)
              span
                float right
                font-size (.37333*75/$rem)
                color #b4282d


            .desc
              white-space nowrap
              overflow hidden
              -ms-text-overflow ellipsis
              -o-text-overflow ellipsis
              text-overflow ellipsis
              width (7.66667*75/$rem)
              font-size (.32*75/$rem)
              color #7F7F7F































</style>
