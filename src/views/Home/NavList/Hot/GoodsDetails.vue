<template>
  <div class="goods-details">
    <ul>
      <li v-for="(item, index) in GoodsList" :key="index">
        <img :src="item.imgsrc" alt="" />
        <div class="goods-info">
          <div class="goods-desc">
            <h5>{{ item.desc }}</h5>
          </div>
          <div class="goods-content">
            <span class="goods-price"><span>￥</span>{{ item.price }}</span>
            <span class="goods-count">已拼{{ item.count }}件</span>
            <span class="good-users">
              <img :src="img" v-for="img in item.user" :key="img"
            /></span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'GoodsDetails',
  data() {
    return {}
  },
  computed: {
    GoodsList() {
      return this.$store.state.homeStore.goodsList
    }
  }
}
</script>

<style lang="stylus" scoped>
.goods-details
  ul
    li
     display flex
     img
      width 50%
      height 50%
     .goods-info
      flex-direction column
      display flex
      margin-right .5em
      border-bottom: 1px solid #f1f4f8;
      justify-content space-between
      .goods-desc
       display flex
       text-align left
      .goods-content
       color #DCDFE6
       align-items: center;
       justify-content: center;
       font-size 14px
       margin-bottom 0.3em
       display flex
       .goods-price
        color red
        flex 1
        font-size 16px
        font-weight bold
        margin-right .4em
        span
         font-size 12px
       .goods-price
        flex 1
        line-height 1
       .good-users
         flex 2
        img
         width 30%
         border-radius 11px
         &:last-of-type
          margin-left -.4em
</style>
