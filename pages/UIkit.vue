<template>
  <div class="uikit">
    <div class="uikit__input">
      <BaseInput v-model="name" name="Наименование товара" placeholder="Введите наименование товара" />
      <BaseInput error="Ошибка" name="Наименование товара" placeholder="Введите наименование товара" required />
      <BaseInput textarea name="Наименование товара" placeholder="Описание товара" />
      <BaseSelect placeholder="По умолчанию" />
      <BaseBtn>Добавить товар</BaseBtn>
      <BaseBtn disabled>
        Добавить товар
      </BaseBtn>
      <BaseBtn icon color="danger">
        <DeleteSvg />
      </BaseBtn>
      <BaseSnackbar type="danger" text="Ошибка" />
      <BaseSnackbar type="success" text="Успешно" />
    </div>
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
  background: scotch-color($theme-light,'background');
  width:100%;
  padding:40px;
  &__input{
    width:30%;
  }
}
</style>
