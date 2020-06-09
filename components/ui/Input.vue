<template>
  <div class="input">
    <input
      :class="['input__item', `input__item_${border}`]"
      :type="type"
      :placeholder="placeholder"
      :name="name"
      :required="required"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    name: String,
    required: String,
    placeholder: String,
    border: String,
  },
};
</script>

<style scoped>
.input__item {
  display: block;
  width: 100%;
  border: 1px solid #e8e8e8;
  height: 52px;
  padding: 5px;
  font-size: 14px;
  box-sizing: border-box;
  font-family: inherit;
}

.input__item_bottomBorder {
  border: none;
  border-bottom: 1px solid #e8e8e8;
}

.input {
  flex: 1 1 auto;
}

@media screen and (max-width: 320px) {
  .input__item {
    height: 46px;
    font-size: 0.81rem;
  }
}
</style>
