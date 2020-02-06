<template>
  <div>
    <van-search v-model="keywords" placeholder="请输入搜索关键词" />
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      keywords: ''
    }
  }
}
</script>

<style lang="scss" scoped></style>
