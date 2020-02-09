<template>
  <div class="shopList">
    <ul>
      <li v-for="(item, index) in shopList" :key="index">
        <img :src="item.imgsrc" />
        <span>{{ item.desc || '' }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ShopNav',
  computed: {
    shopList() {
      return this.$store.state.homeStore.shopList
    }
  },
  mounted() {}
}
</script>

<style lang="stylus" scoped>
.shopList
 width 100%
 margin-bottom 0.8rem
 overflow-y scroll
.shopList::-webkit-scrollbar
    width 5px
    height 7px
    margin 0 auto
.shopList::-webkit-scrollbar-track:horizontal
    background pink
    margin 0 155px
    border-radius 10px
.shopList::-webkit-scrollbar-thumb
    background red
    border-radius 10px
 ul
  width 600px
  height 180px
  display flex
  overflow scroll
  flex-wrap wrap
  li
     padding 0.2rem
     display flex
     margin 0.2rem 1.3rem
     flex-direction column
     justify-content center
     align-items center
  img
   width 50px
</style>
