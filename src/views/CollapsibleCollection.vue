// Child Component
<template>
  <ul ref="collapsible" class="collapsible">
    <li>
      <div class="collapsible-header">
        <button-component
          v-if="title.button.position === 'left'"
          :color="'success'"
          :name="title.button.name"
          :size="'small'"
          @click.stop="handleClick(title)"
        />
        {{ title.name }}
        <button-component
          v-if="title.button.position === 'right'"
          :color="'success'"
          :name="title.button.name"
          :size="'small'"
          @click.stop="handleClick(title)"
        />
      </div>
      <div class="collapsible-body">
        <ul>
          <li v-for="item in items" :key="item">
            <button
              v-if="item.button && item.button.position === 'left'"
              @click="handleClick(item)"
            >
              {{ item.button.name }}
            </button>
            <p>{{ item.name }}</p>
            <button
              v-if="item.button && item.button.position === 'right'"
              @click="handleClick(item)"
            >
              {{ item.button.name }}
            </button>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script>
import M from "materialize-css";
import ButtonComponent from "./ButtonComponent.vue";

export default {
  components: {
    ButtonComponent,
  },
  mounted() {
    M.Collapsible.init(this.$refs.collapsible);
  },
  props: {
    title: {
      type: Object,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleClick(item) {
      this.$emit("itemClick", item);
    },
  },
};
</script>
