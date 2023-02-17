// Error.vue
<template>
  <div>
    <h1>An error occurred</h1>
    <p>{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  name: "Error",
  computed: {
    errorMessage() {
      //   Get error message from query params
      return this.$route.query.message || "An unknown error occurred.";
    },
  },
};
</script>
