<template>
  <div v-on-clickaway="hide" class="base-select" @click="toogle">
    <BaseInput v-model="select" :placeholder="placeholder" readonly class="base-select__input">
      <template #suffix>
        <ArrowSvg class="base-select__icon" :class="{&quot;base-select__icon_rotate&quot;:isShow}" />
      </template>
    </BaseInput>
    <ul v-if="isShow" class="base-select__menu light-card">
      <li v-for="(item,index) in getItems" :key="index" class="base-select__item" @click="setItem(item)">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script>
import { directive as onClickaway } from 'vue-clickaway'
import ArrowSvg from '~/assets/icons/arrow.svg?inline'

export default {
  directives: { onClickaway },
  components: { ArrowSvg },
  props: {
    items: {
      type: Array
    },
    placeholder: {
      type: String
    }
  },
  data () {
    return {
      select: '',
      isShow: false
    }
  },
  computed: {
    getItems () {
      return ['По умолчанию', ...this.items]
    }
  },
  methods: {
    toogle () {
      this.isShow = !this.isShow
    },
    hide () {
      this.isShow = false
    },
    setItem (item) {
      let select = item
      if (item === 'По умолчанию') { select = '' }
      this.$emit('input', select)
      this.select = select
    }
  }

}
</script>
<style lang="scss" scoped>
.base-select{
  position:relative;
  font-size:12px;
  &__input{
    cursor: pointer;
  }
  &__menu{
    position:absolute;
    min-height:40px;
    width:100%;
    top:26px;
    padding: 10px 0px;
    z-index:9999
  }
  &__icon{
    transition: all 0.5s;
    &_rotate{
      transform: rotate(180deg);
    }
  }
  &__item{
    padding:8px;
    cursor:pointer;
    &:hover{
      background: scotch-color($theme-light,'success');
      color:white;
    }
  }
}
</style>
