<template>
  <div class="about">
    <!-- parent component template -->
    <div>
      <state-component buttonState="failed"></state-component>
    </div>
    <div>
      <state-component
        @button-clicked="handleWaitingClick"
        buttonState="waiting"
      ></state-component>
    </div>
  </div>
</template>

<script>
import StateComponent from "./StateComponent.vue";

export default {
  components: { StateComponent },
  methods: {
    handleWaitingClick() {
      console.log("Child component was clicked!!");
    },
  },
  data() {
    return {};
  },
};
</script>
