<template>
  <div :class="type" class="base-snackbar light-card">
    <div class="base-snackbar__wrapper">
      <div class="base-snackbar__icon">
        <components :is="getComponent" />
      </div>
      <div class="base-snackbar__text">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script>
import SuccessSvg from '~/assets/icons/success.svg?inline'
import InfoSvg from '~/assets/icons/info.svg?inline'
export default {
  components: { SuccessSvg, InfoSvg },
  props: {
    type: {
      type: String,
      default: 'success',
      validator (value) {
        return ['success', 'danger'].includes(value)
      }
    },
    text: {
      type: String,
      default: 'text'
    }
  },
  computed: {
    getComponent () {
      return this.type === 'success' ? 'SuccessSvg' : 'InfoSvg'
    }
  }
}
</script>

<style lang="scss" scoped>
.base-snackbar{
  position:fixed;
  bottom:80px;
  @include flexy(space-between,center);
  width:254px;
  height:52px;
  border-radius: 8px;
  padding:8px;
  &__wrapper{
    @include flexy(center,center);
  }
  &__text{
    margin-left:12px;
    color: rgba(0, 0, 0, 0.67);
    font-weight: 400;
    font-size: 16px;
  }
  &__icon{
    fill:scotch-color($theme-light,'primary');
    padding:4px;
    @include flexy(center,center);
    width:20px;
    height:20px;
    border-radius: 8px;
    &_close{
      width:24px;
      height:24px;
      cursor:pointer;
      color:#999999;
    }
  }
}

.danger{
  background:lighten(scotch-color($theme-light,'danger'),20%);
  .base-snackbar{
    &__icon{
      background:scotch-color($theme-light,'danger');
    }
  }
}

.success{
  background:lighten(scotch-color($theme-light,'success'),20%);
  .base-snackbar{
    &__icon{
      background:scotch-color($theme-light,'success');
    }
  }
}

</style>
