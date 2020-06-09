<template>
  <div class="textarea">
    <textarea
      :placeholder="placeholder"
      :name="name"
      :required="required"
      @input="handleInput"
      v-model="content"
    ></textarea>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    placeholder: String,
    name: String,
    required: String,
  },
  data() {
    return {
      content: this.value,
    };
  },
  watch: {
    value(newVal, oldVal) {
      if (newVal !== this.content) {
        this.content = newVal;
      }
    },
  },
  methods: {
    handleInput(e) {
      this.$emit('input', this.content);
    },
  },
};
</script>

<style scoped>
.textarea textarea {
  display: block;
  width: 100%;
  max-height: 100%;
  resize: none;
  border: none;
  border-bottom: 1px solid #e7e7e7;
  padding: 5px;
  font-size: 1.125rem;
  box-sizing: border-box;
  font-family: inherit;
}

.question-form__textarea {
  font-size: 1.125rem;
  font-weight: 500;
  color: #000;
}
</style>
