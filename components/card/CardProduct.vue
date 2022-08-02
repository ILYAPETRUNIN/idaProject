<template>
  <div class="card-product light-card">
    <img class="card-product__img" :src="item.img">
    <div class="card-product__info">
      <h4 class="card-product__name">
        {{ item.name }}
      </h4>
      <p class="card-product__description">
        {{ item.description }}
      </p>
      <p class="card-product__price">
        {{ item.price }}
        <span> руб.</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          id: 0,
          name: 'Наименование товара',
          description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: '10000',
          img: 'https://avatars.mds.yandex.net/get-mpic/4249638/img_id6129126127483725327.jpeg/orig'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card-product{
  @include flexy(center,center,nowrap,column);
  width: 332px;
  &__img{
    height:200px
  }
  &__info{
    padding:16px;
    color:scotch-color($theme-light,'text-dark');
  }
  &__name{
    @include setFont(20px,600);
    margin-bottom: 16px
  }
  &__description{
    @include setFont(16px,400);
    margin-bottom: 32px;
  }
  &__price{
    @include setFont(24px,600);
    margin-bottom: 8px;
  }
}
</style>
