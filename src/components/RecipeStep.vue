<template>
  <div class="step-row">
    <input class="checkbox" :id="`recipe-step-checkbox-${index}`" type="checkbox" value="value1">
    <label :for="`recipe-step-checkbox-${index}`">{{ step }}</label>
  </div>
</template>

<script>
export default {
  props: {
    index: Number,
    step: String,
  },
};
</script>

<style scoped lang="scss">
$color: #fcc4de;

.step-row {
  margin-bottom: 20px;
}

.checkbox {
  position: absolute;
  opacity: 0;

  & + label {
    cursor: pointer;
    display: inline-block;
    line-height: 1.6;
    padding-left: 32px;
    position: relative;

    @media screen and (min-width: 768px) {
      padding-left: 44px;
    }
  }

  // checkbox
  & + label:before {
    content: '';
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 1000px;
    display: inline-block;
    width: 24px;
    height: 24px;

    position: absolute;
    top: -2px;
    left: 0;
    vertical-align: text-top;
  }

  // checkbox checked
  &:checked + label:before {
    background: $color;
    border-color: $color;
  }

  // Checkmark. Could be replaced with an image
  &:checked + label:after {
    content: '';
    position: absolute;
    left: 8px;
    top: 11px;
    background: #fff;
    width: 2px;
    height: 2px;
    box-shadow:
      2px 0 0 #fff,
      4px 0 0 #fff,
      4px -2px 0 #fff,
      4px -4px 0 #fff,
      4px -6px 0 #fff,
      4px -8px 0 #fff;
    transform: rotate(45deg);
  }

  &:checked + label {
    color: #ccc;
  }
}
</style>
