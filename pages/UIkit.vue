<template>
  <div class="uikit">
    <BaseInput v-model="name" name="Наименование товара" placeholder="Введите наименование товара" />
    <BaseInput error="Ошибка" name="Наименование товара" placeholder="Введите наименование товара" required />
    <BaseInput textarea name="Наименование товара" placeholder="Описание товара"/>
    <BaseBtn>Добавить товар</BaseBtn>
    <BaseBtn disabled>Добавить товар</BaseBtn>
    <BaseBtn icon color='danger'>
      <DeleteSvg />
    </BaseBtn>
  </div>
</template>

<script>
import DeleteSvg from '~/assets/icons/delete.svg?inline'

export default {
  components: { DeleteSvg },
  data () {
    return {
      name: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.uikit{
  width:30%
}
</style>
