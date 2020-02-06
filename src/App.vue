<template>
  <div id="app">
    <van-tabbar router v-model="active" fixed :safe-area-inset-bottom="true">
      <van-tabbar-item
        v-for="(item, index) in routerList"
        :key="index"
        :to="item.path"
        :name="item.name"
        :icon="item.meta.icon"
        >{{ item.meta.desc }}</van-tabbar-item
      >
    </van-tabbar>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      active: 'home'
    }
  },
  computed: {
    routerList() {
      return this.$router.options.routes.filter(item => {
        return item.path != '/'
      })
    }
  }
}
</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  width 100%
  height 100%
</style>
