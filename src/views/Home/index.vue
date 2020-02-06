<template>
  <div>
    <header>
      <Search />
    </header>
    <van-tabs>
      <van-tab
        v-for="(item, index) in NavList"
        :key="index"
        :title="item.meta[0]"
      >
        <component :is="item.component"></component>
      </van-tab>
    </van-tabs>
    <router-view></router-view>
  </div>
</template>

<script>
import HomeNav from 'router/homeChildren'
import Search from './Search'
export default {
  name: 'Home',
  components: {
    Search
  },
  computed: {},
  data() {
    return {
      NavList: HomeNav
    }
  }
}
</script>

<style lang="stylus" scoped>
.van-tabs
  width 100%
  overflow auto
</style>
