<template>
  <div>
    <van-notice-bar
      color="#F56C6C"
      background="#fef0f0"
      :text="message"
      left-icon="volume-o"
      :scrollable="false"
    />
  </div>
</template>

<script>
export default {
  name: 'Notic',
  data() {
    return {
      message: '硕大的撒多撒多所'
    }
  }
}
</script>

<style lang="stylus" scoped></style>
