<template>
  <form class="form-add-product" @submit.prevent="submit">
    <BaseInput v-model="$v.name.$model" :error="($v.name.$dirty && !$v.name.required) ? getError('required'): ''" required name="Наименование товара" placeholder="Введите наименование товара" />
    <BaseInput v-model="description" textarea name="Описание товара" placeholder="Введите описание товара" />
    <BaseInput v-model="$v.img.$model" :error="($v.img.$dirty && !$v.img.required) ? getError('required'):''" required name="Ссылка на изображение товара" placeholder="Введите наименование товара" />
    <BaseInput v-model="$v.price.$model" :error="($v.price.$dirty && !$v.price.required) ? getError('required'):''" required name="Цена товара" placeholder="Введите цену" />
    <BaseBtn :disabled="$v.$invalid" type="submit">
      Добавить товар
    </BaseBtn>
  </form>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import errorList from '@/models/ErrorList'

export default {
  data () {
    return {
      name: '',
      description: '',
      img: '',
      price: ''
    }
  },
  validations: {
    name: { required },
    img: { required },
    price: { required }
  },
  methods: {
    submit () {
      this.$v.$touch()
      const { name, description, img, price } = this
      if (!this.$v.$invalid) {
        this.$emit('submit', { name, description, img, price })
      }
    },
    getError (type) {
      return errorList.get(type)
    }
  }
}
</script>
