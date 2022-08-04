<template>
  <div class="card-product light-card">
    <div class="card-product__wrapper">
      <img class="card-product__img" :src="item.img">
    </div>
    <div class="card-product__info">
      <h4 class="card-product__name">
        {{ item.name.substr(0,24) }}
        <span v-if="item.name.length>24">...</span>
      </h4>
      <p class="card-product__description">
        {{ item.description }}
      </p>
      <p class="card-product__price">
        {{ item.price }}
        <span> руб.</span>
      </p>
    </div>
    <BaseBtn class="card-product__btn" icon color="danger" @click="deleteItem">
      <DeleteSvg />
    </BaseBtn>
  </div>
</template>

<script>
import DeleteSvg from '~/assets/icons/delete.svg?inline'

export default {
  components: { DeleteSvg },
  props: {
    item: {
      type: Object
    }
  },
  methods: {
    deleteItem () {
      this.$emit('delete')
    }
  }
}
</script>

<style lang="scss" scoped>
.card-product{
  @include flexy(flex-start,flex-start,nowrap,column);
  position:relative;
  width: 332px;
  height:423px;
  &:hover{
    .card-product{
      &__btn{
        display:flex
      }
    }
  }
  &__wrapper{
    @include flexy(center,center);
    width:100%
  }
  &__img{
    height:200px
  }
  &__info{
    overflow:hidden;
    margin:16px;
    color:scotch-color($theme-light,'text-dark');
  }
  &__name{
    @include setFont(20px,600);
    margin-bottom: 16px
  }
  &__description{
    @include setFont(16px,400);
    margin-bottom: 32px;
    height: 80px;
  }
  &__price{
    @include setFont(24px,600);
    margin-bottom: 8px;
  }
  &__btn{
    display:none;
    position:absolute;
    top:-8px;
    right: -8px;
  }
}
</style>
