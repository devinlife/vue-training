<template>
  <h1>This is Test</h1>
  <button @click="buttonClicked">TEST</button>
</template>

<script>
export default {
  props: ["families"],
  data() {},
  methods: {
    buttonClicked() {
      this.ouccrError();
    },
    ouccrError() {
      throw new Error("Failed something");
    },
  },
};
</script>
