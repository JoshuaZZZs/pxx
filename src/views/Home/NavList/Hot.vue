<template>
  <div>
    <ul>
      <li v-for="(item, index) in shopList" :key="index">
        <img :src="item" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hot',
  computed: {
    shopList() {
      return this.$store.state.homeStore.shopList
    }
  },
  mounted() {}
}
</script>

<style lang="stylus" scoped>
ul
 width 100%
 display flex
 overflow auto
li
 padding 24px
img
 width 50px
</style>
