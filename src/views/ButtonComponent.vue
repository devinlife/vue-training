<template>
  <button
    :class="['btn', sizeClass, colorClass]"
    :disabled="!clickable"
    @click="handleClick"
  >
    <template v-if="icon && position === 'left'">
      <i :class="icon"></i>
    </template>
    {{ name }}
    <template v-if="icon && position === 'right'">
      <i :class="icon"></i>
    </template>
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "primary",
    },
    clickable: {
      type: Boolean,
      default: true,
    },
    name: {
      type: String,
      default: "Button",
    },
    icon: {
      type: String,
    },
    size: {
      type: String,
      default: "medium",
      validator: (value) => ["large", "medium", "small"].includes(value),
    },
    position: {
      type: String,
      default: "left",
      validator: (value) => ["left", "right"].includes(value),
    },
  },
  computed: {
    colorClass() {
      return `btn-${this.color}`;
    },
    sizeClass() {
      return `btn-${this.size}`;
    },
  },
  methods: {},
};
</script>
