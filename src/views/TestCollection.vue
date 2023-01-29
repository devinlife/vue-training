// Parent Component
<template>
  <div>
    <CollapsibleCollection
      :title="title"
      :items="data"
      @itemClick="handleItemClick"
    />
  </div>
</template>

<script>
import CollapsibleCollection from "./CollapsibleCollection.vue";

export default {
  components: {
    CollapsibleCollection,
  },
  data() {
    return {
      titleCount: 0,
      dataCount: {
        "Item 1": 0,
        "Item 2": 0,
        "Item 3": 0,
      },
    };
  },
  computed: {
    title() {
      return {
        name: `Collection Title : ${this.titleCount}`,
        button: { name: "edit", type: "success", position: "right" },
      };
    },
    data() {
      return [
        {
          name: `Item 1 : ${this.titleCount}`,
          button: { name: "delete", type: "success", position: "left" },
        },
        {
          name: "Item 2",
          button: { name: "delete", type: "success", position: "right" },
        },
        {
          name: "Item 3",
        },
      ];
    },
  },
  methods: {
    handleItemClick(item) {
      console.log(item.name);
      if (item.name === this.title.name) {
        console.log(item, this.titleCount++);
      }
    },
  },
};
</script>
