<template>
  <div class="about">
    <!-- parent component template -->
    <div>
      <table-component
        @clicked="handleChildClick"
        :rows="people"
        :headers="headers"
      ></table-component>
    </div>
  </div>
</template>

<script>
import TableComponent from "./TableComponent.vue";

export default {
  components: { TableComponent },
  methods: {
    handleChildClick(row, button) {
      console.log("Child component was clicked:", row.name, button);
    },
  },
  data() {
    return {
      headers: [
        { name: "default index", width: "10%" },
        { name: "name", width: "20%" },
        { name: "age", width: "10%" },
        {
          name: "height",
          width: "10%",
          button: { name: "edit", type: "success" },
        },
        { name: "address", width: "40%" },
        {
          name: "car",
          width: "10%",
          button: { name: "delete", type: "success" },
        },
      ],
      people: [
        {
          name: "John",
          age: 25,
          height: "6ft",
          address: "seoul jamsil",
        },
        {
          name: "Mary",
          age: 32,
          height: "5ft 8in",
          address: "seoul",
        },
        {
          name: "Jane",
          age: 20,
          height: "5ft 5in",
          address: "seoul",
        },
      ],
    };
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
