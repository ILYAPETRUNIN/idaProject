<template>
  <button @click="click" :disabled="disabled" :class="getClasses" class="base-btn">
    <slot />
  </button>
</template>

<script>

export default {
  props: {
    color: {
      type: String,
      default: 'success'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: Boolean
    }
  },
  computed: {
    getClasses () {
      return [
        this.icon ? 'icon' : '',
        this.color ? this.color : '',
        this.disabled ? 'disabled' : '',
        this.text ? 'text' : ''
      ]
    }
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.base-btn{
  @include flexy(center,center);
  @include setSize(100%,36px);
  cursor:pointer;
  border:none;
  outline:none;
  border-radius: 10px;
}
.primary{
  background:scotch-color($theme-light,'primary')
}
.success{
  background:scotch-color($theme-light,'success');
  color:scotch-color($theme-light,'primary');
  font-family: 'Inter';
  font-weight: 600;
  font-size: 12px;
}
.danger{
  background:scotch-color($theme-light,'danger')
}
.disabled{
  background: scotch-color($theme-light,'disabled');
  color: scotch-color($theme-light,'text-light');
  cursor:auto
}
.icon{
  @include setSize(32px,32px);
  padding: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

</style>
