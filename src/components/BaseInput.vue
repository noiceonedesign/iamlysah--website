
<template>
<div class="input-wrapper">
  <label>{{label}}</label>
  <input type="text" :value="modelValue" :placeholder="placeholder"
         @input="$emit('update:modelValue', $event.target.value)">
</div>
</template>


<script lang="ts">
import {ref, defineComponent} from "vue";

export default defineComponent({
  name: "BaseInput",
  components: {},
  props: {
    label: {
      type: String,
      required: false,
      default: "InputLabel"
    },
    type: {
      type: String,
      required: false,
      default: "text"
    },
    modelValue: {
      type: String,
      default:"",
    },
    placeholder: {
      type: String,
      default:"placeholder"
    }
  },
  setup() {
    return {  }
  }
})
</script>

<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 60px;
}
label {
  font-size: 14px;
}
input {
  background: none;
  height: 100%;
  box-shadow: none;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid var(--main-font-color-light);
  color: var(--main-font-color-light);
}
input:focus {
  box-shadow: none;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid var(--main-font-color-light);
  outline: none;
}
</style>