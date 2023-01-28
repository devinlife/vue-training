<!-- TableComponent.vue -->
<template>
  <table>
    <thead>
      <tr>
        <template v-for="header in headers" :key="header">
          <th v-if="header.name == 'default index'" :width="header.width">
            {{ DEFAULT_INDEX }}
          </th>
          <th v-else :width="header.width">
            {{ header.name }}
          </th>
        </template>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in rows" :key="index">
        <template v-for="header in headers" :key="header">
          <td v-if="header.name == 'default index'">
            {{ index + 1 }}
          </td>
          <td v-else>
            {{ row[header.name] }}

            <button
              v-if="header.button"
              :class="header.button.type"
              @click="handleClick(row, header.button.name)"
            >
              {{ header.button.name }}
            </button>
          </td>
        </template>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    headers: Array,
    rows: Array,
  },
  data() {
    return {
      DEFAULT_INDEX: "No.",
    };
  },
  methods: {
    handleClick(row, button) {
      this.$emit("clicked", row, button);
    },
  },
};
</script>
