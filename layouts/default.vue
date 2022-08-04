<template>
  <div class="layout-products">
    <div class="layout-products__header">
      <h4>Добавление товара</h4>
      <BaseSelect :items="sortItems" class="layout-products__sort" placeholder="По умолчанию" @input="sort" />
    </div>
    <div class="layout-products__body">
      <FormAddProduct class="layout-products__form light-card" @submit="createProduct" />
      <Nuxt />
    </div>
    <transition-group name="list-complete" class="layout-products__snackbar">
      <base-snackbar class="list-complete-item" v-for="item in getSnackbars" :key="item.id" :type="item.type" :text="item.text" />
    </transition-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sortItems: ['По цене min', 'По цене max', 'По наименованию']
    }
  },
  computed: {
    getSnackbars () {
      return this.$store.getters.getSnackbars
    }
  },
  methods: {
    createProduct (product) {
      this.$store.dispatch('products/create', product)
      this.$store.dispatch('showSnackbar', { text: 'Товар добавлен', type: 'success', timeout: 5000 })
    },
    sort (type) {
      this.$store.dispatch('products/sort', type)
    }
  }
}
</script>

<style lang="scss" scoped>
.layout-products{
  height:100%;
  padding: 32px;
  @include setFont(16px,400);
  &__header{
    @include setFont(28px,600);
    @include flexy(space-between,center);
  }
  &__form{
    width:332px;
    padding:24px;
    margin-right:16px;
  }
  &__sort{
    width:125px;
  }
  &__body{
    width:100%;
    @include flexy(space-between,flex-start)
  }
  &__snackbar{
    @include flexy(center,center);
    width:100%;
  }
}
</style>
