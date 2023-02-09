<template>
  <div>
    <Child :families="families" />
  </div>
</template>

<script>
import Child from "./FamilyComponent.vue";

export default {
  components: {
    Child,
  },
  data() {
    return {
      families: [
        {
          grandfather: "John",
          fathers: [
            {
              name: "James",
              children: ["Jane", "Joe"],
            },
            {
              name: "Jacob",
              children: ["Jack", "Jill"],
            },
          ],
        },
        {
          grandfather: "Michael",
          fathers: [
            {
              name: "David",
              children: ["Daniel", "Diana"],
            },
            {
              name: "Daniel",
              children: ["Daisy", "Danny"],
            },
          ],
        },
        {
          grandfather: "William",
          fathers: [
            {
              name: "Thomas",
              children: ["Tina", "Tom"],
            },
            {
              name: "Timothy",
              children: ["Tara", "Tony"],
            },
          ],
        },
      ],
    };
  },
};
</script>
