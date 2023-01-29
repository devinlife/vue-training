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
          <!-- Default Index 선택 -->
          <td v-if="header.name == 'default index'">
            {{ index + 1 }}
          </td>
          <!-- Input 선택  -->
          <td v-else-if="row[header.name]?.type === 'input'">
            <input
              v-model="row[header.name].description.value"
              :type="row[header.name].description.type"
              @blur="
                updateValue(
                  row,
                  header.name,
                  row[header.name].description.value
                )
              "
            />
          </td>
          <!-- Button 선택 -->
          <td v-else-if="row[header.name]?.type === 'button'">
            <button
              :class="row[header.name].description.name"
              @click="handleClick(row, row[header.name].description.name)"
            >
              {{ row[header.name].description.name }}
            </button>
          </td>
          <!-- 옵션 선택 없음. 그냥 value 보여줌 -->
          <td v-else>
            {{ row[header.name] }}
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
    updateValue(row, item, value) {
      console.log(row, item, value);
      // this.$emit("clicked", row, button);
    },
  },
};
</script>
