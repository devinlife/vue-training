<template>
  <div>
    <button-component
      :color="'success'"
      :name="'Save'"
      :icon="'fa fa-save'"
      :size="'large'"
      :position="'right'"
      @click="saveData1"
    />

    <button-component
      :color="'danger'"
      :name="'Edit'"
      :icon="'fa fa-save'"
      :size="'medium'"
      :position="'right'"
      @click="saveData2"
    />
 
  </div>
</template>

<script>
import ButtonComponent from "./ButtonComponent.vue";
export default {
  components: {
    ButtonComponent,
  },
  methods: {
    saveData1() {
      // handle delete logic here
      console.log("clicked: data1");
    },
    saveData2() {
      // handle delete logic here
      console.log("clicked: data2");
    },
  },
};
</script>
