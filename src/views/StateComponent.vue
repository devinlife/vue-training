<template>
  <div>
    <template v-if="clickable">
      <button @click="handleClick" class="btn">{{ buttonState }}</button>
      <div class="progress">
        <div class="indeterminate"></div>
      </div>
    </template>
    <template v-else>
      <button :class="{ disabled: !clickable }" class="btn" disabled>
        {{ buttonState }}
      </button>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    buttonState: {
      type: String,
      default: "waiting",
      validator: (value) =>
        ["waiting", "converting", "success", "canceled", "failed"].includes(
          value
        ),
    },
  },
  computed: {
    clickable() {
      return ["waiting", "converting"].includes(this.buttonState);
    },
  },
  methods: {
    handleClick() {
      this.$emit("button-clicked");
    },
  },
};
</script>
