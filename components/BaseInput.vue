<template>
  <div v-on-clickaway="unfocus" :class="getClass" class="base-input">
    <div v-if="name" class="base-input__name">
      {{ name }}
      <div v-if="required" class="base-input__badge" />
    </div>
    <div class="base-input__wrapper light-card" @click="focus">
      <slot name="icon-prefix" />
      <input
        v-if="!textarea"
        ref="input"
        v-model="inputVal"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        class="base-input__input"
        @keypress="checkKey"
        @focus="focus"
      >
      <textarea
        v-if="textarea"
        ref="input"
        v-model="inputVal"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        class="base-input__input"
        @focus="focus"
      />
      <div class="base-input__suffix" @click="clickSuffix">
        <slot name="suffix" />
      </div>
    </div>
    <div class="base-input__notify error">
      <div v-if="error" class="shake-horizontal">{{ error }}</div>
    </div>
  </div>
</template>

<script>
import { directive as onClickaway } from 'vue-clickaway'
import { formatPrice, priceToNumber } from '@/helpers/formating.js'

export default {
  directives: { onClickaway },
  props: {
    name: {
      type: String
    },
    value: {
      required: true
    },
    type: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    readonly: {
      type: Boolean
    },
    placeholder: {
      type: String
    },
    error: {
      type: String
    },
    required: {
      type: Boolean
    },
    textarea: {
      type: Boolean
    }
  },
  data () {
    return {
      focused: false
    }
  },
  computed: {
    getClass () {
      return [
        this.readonly ? 'readonly' : '',
        this.textarea ? 'textarea' : '',
        this.disabled ? 'disabled' : '',
        (this.focused && !this.disabled) ? 'focused' : '',
        (this.error && !this.disabled) ? 'error' : ''
      ]
    },

    inputVal: {
      get () {
        if (this.onlyNumber) { return formatPrice(this.value) }
        return this.value
      },
      set (value) {
        let formatingValue = value
        if (this.onlyNumber) { formatingValue = priceToNumber(value) }
        this.$emit('input', formatingValue)
      }
    },

    onlyNumber () {
      return this.type === 'number'
    }
  },

  methods: {
    focus () {
      this.$emit('focus')
      this.focused = true
      this.$refs.input.focus()
    },
    unfocus () {
      this.focused = false
      this.$refs.input.blur()
    },
    clickSuffix () {
      this.$emit('clickSuffix')
    },
    checkKey (event) {
      if (this.onlyNumber) {
        if (!event.key.match(/[0-9]/)) {
          event.preventDefault()
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.base-input{
  @include fullWidth;
  margin-bottom:2px;
  &__name{
    @include flexy(flex-start,center);
    @include setFont(10px,400);
    @include noMargin;
    margin-bottom: 4px;
    letter-spacing: -0.02em;
    color:scotch-color($theme-light,'text-dark');
    height:13px;
    text-align:center;
  }
  &__input{
    outline: none;
    border: none;
    color:scotch-color($theme-light,'text-dark');
    @include setFont(12px,400);
    @include fullWidth;
    &::placeholder{
      color: scotch-color($theme-light,'text-light');
      font-family:SourceSansPro;
      font-size:12px;
      font-weight: 400;
    }
    &:read-only{
      cursor:inherit;
    }
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  &__suffix{
    @include flexy(center,center)
  }
  &__badge{
    @include setSize(4px,4px);
    background: scotch-color($theme-light,'danger');
    border-radius: 4px;
    align-self:flex-start;
  }
  &__wrapper{
    @include flexy(space-between,center);
    height:36px;
    padding:0px 16px;
    transition:all 0.5s;
    border: 1px solid;
    border-color: transparent;
    cursor: text;
    transition:all 0.5s;
  }
  &__notify{
    height: 10px;
    margin-top: 4px;
    color:scotch-color($theme-light,'danger');
    @include setFont(8px,400);
  }
}

.textarea{
  .base-input{
    &__input{
      height: 100%;
      resize: none;
    }
    &__wrapper{
      height:108px;
      padding:10px 16px;
    }
  }
}

.readonly{
  .base-input{
    &__wrapper{
      cursor: inherit
    }
  }
}

.focused{
  .base-input{
    &__wrapper{
      border-color:scotch-color($theme-light,'success');
    }
  }
}

.error{
  .base-input{
    &__wrapper{
      border-color:scotch-color($theme-light,'danger');
    }
  }
}

</style>
