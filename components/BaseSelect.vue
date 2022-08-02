<template>
  <div v-on-clickaway="hide" class="base-select" @click="toogle">
    <BaseInput :placeholder="placeholder" v-model="select" readonly class="base-select__input">
      <template #suffix>
        <ArrowSvg class="base-select__icon" :class="{&quot;base-select__icon_rotate&quot;:isShow}" />
      </template>
    </BaseInput>
    <ul v-if="isShow" class="base-select__menu light-card">
      <li v-for="(item,index) in items" :key="index" class="base-select__item" @click="setItem(item)">
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
      type: Array,
      default: () => { return ['По убыванию', 'По возростанию'] }
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
  methods: {
    toogle () {
      this.isShow = !this.isShow
    },
    hide () {
      this.isShow = false
    },
    setItem (item) {
      this.$emit('input', item)
      this.select = item
    }
  }

}
</script>
<style lang="scss" scoped>
.base-select{
  position:relative;
  &__input{
    cursor: pointer;
  }
  &__menu{
    position:absolute;
    min-height:40px;
    width:100%;
    top:26px;
    padding: 10px 0px;
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
