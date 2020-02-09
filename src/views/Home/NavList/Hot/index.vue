<template>
  <div>
    <ShopNav></ShopNav>
    <Notic></Notic>
    <GoodsDetails></GoodsDetails>
  </div>
</template>

<script>
import ShopNav from './ShopNav'
import Notic from './Notic'
import GoodsDetails from './GoodsDetails'
export default {
  name: 'hot',
  components: {
    ShopNav,
    Notic,
    GoodsDetails
  }
}
</script>

<style lang="scss" scoped></style>
