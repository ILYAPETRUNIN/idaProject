<template>
  <div v-on-clickaway="unfocus" :class="getClass" class="base-input">
    <div v-if="name" class="base-input__name">
      {{ name }}
      <div class="base-input__badge" />
    </div>
    <div class="base-input__wrapper light-card" @click="focus">
      <slot name="icon-prefix" />
      <component
        :is="textarea ? 'textarea': 'input'"
        ref="input"
        v-model="inputVal"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :type="visible ? &quot;password&quot;:&quot;text&quot;"
        :class="{'base-input__input_password':visible}"
        class="base-input__input"
        @focus="focus"
      />
      <div class="base-input__suffix" @click="clickSuffix">
        <slot name="icon-suffix">
          <svg-icon v-if="type=='password'" class="base-input__icon" :name="`eye${visible?&quot;_closed&quot;:&quot;&quot;}`" />
        </slot>
      </div>
    </div>
    <div class="base-input__notify">
      <span>{{ error }}</span>
    </div>
  </div>
</template>

<script>
import { directive as onClickaway } from 'vue-clickaway'

export default {
  directives: { onClickaway },
  props: {
    name: {
      type: String
    },
    value: {
      type: String
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
      focused: false,
      visible: false
    }
  },
  computed: {
    getClass () {
      return [
        this.textarea ? 'textarea' : '',
        this.disabled ? 'disabled' : '',
        (this.focused && !this.disabled) ? 'focused' : '',
        (this.error && !this.disabled) ? 'error' : ''
      ]
    },

    inputVal: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
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
    cursor:text;
    transition:all 0.5s;
    border: 1px solid;
    border-color: transparent;
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

.error{
  .base-input{
    &__wrapper{
      border-color:scotch-color($theme-light,'danger');
    }
  }
}

</style>
