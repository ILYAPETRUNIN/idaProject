<template>
  <div class="page-products">
    <CardProduct class="page-products__item" v-for='n in 10' :key="n"/>
  </div>
</template>

<script>
import CardProduct from '~/components/card/CardProduct.vue'

export default {
  name: 'IndexPage',
  components: { CardProduct }
}
</script>

<style lang="scss" scoped>
.page-products{
  width:100%;
  @include flexy(flex-end,flex-start,wrap);
  @include lg-and-down{
    justify-content:center
  }
  &__item{
    &:not(:last-child){
      margin-right:16px;
    }
    margin-bottom:16px;
    @include xl-only {
      &:nth-child(4n+4){
        margin-right:0px;
      }
    }
    @include xl-and-down {
      &:nth-child(3n+3){
        margin-right:0px;
      }
    }

    @include lg-and-down {
      &:nth-child(3n+3){
        margin-right:16px;
      }
      &:nth-child(2n+2){
        margin-right:0px;
      }
    }

    @include sm-and-down{
      margin-right:0px!important;
    }

  }
}
</style>
