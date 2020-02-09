<template>
  <div>
    <header>
      <Search />
    </header>
    <van-pull-refresh v-model="isLoading"
                      @refresh="onRefresh">
      <van-tabs>
        <van-tab v-for="(item, index) in NavList"
                 :key="index"
                 :title="item.meta[0]">
          <component class="coms"
                     :is="item.component"></component>
        </van-tab>
      </van-tabs>

      <router-view></router-view>
    </van-pull-refresh>
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
  data () {
    return {
      NavList: HomeNav,
      isLoading: false
    }
  },
  methods: {
    onRefresh () {
      setTimeout(() => {
        this.$toast('刷新成功')
        this.isLoading = false
      }, 1000)
    }
  }
}
</script>

<style lang="stylus" scoped>
.van-tabs
  width 100%
  overflow hidden
  background #fff
  .coms
    height 37em
    overflow auto
</style>
