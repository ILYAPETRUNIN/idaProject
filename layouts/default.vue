<template>
  <div class="layout-products">
    <div class="layout-products__header">
      <h4>Добавление товара</h4>
      <BaseSelect class="layout-products__sort" placeholder="По умолчанию" />
    </div>
    <div class="layout-products__body">
      <FormAddProduct class="layout-products__form light-card" />
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.layout-products{
  padding: 32px;
  @include setFont(16px,400);
  &__header{
    @include flexy(space-between,center);
  }
  &__form{
    width:332px;
    padding:24px;
  }
  &__sort{
    width:125px;
  }
  &__body{
    width:100%;
    @include flexy(space-between,flex-start)
  }
}
</style>
