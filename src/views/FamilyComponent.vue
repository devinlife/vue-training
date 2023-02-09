<template>
  <div>
    <template v-for="(family, gIndex) in families">
      <h1 @click="showFathers(gIndex)">{{ family.grandfather }}</h1>
      <template v-if="selectedGrandfather === gIndex">
        <template v-for="(father, fIndex) in family.fathers">
          <h3 @click="showChildren(gIndex, fIndex)">{{ father.name }}</h3>
          <template
            v-if="selectedFather === fIndex && selectedGrandfather === gIndex"
          >
            <template v-for="child in father.children">
              <h6>{{ child }}</h6>
            </template>
          </template>
        </template>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  props: ["families"],
  data() {
    return {
      selectedGrandfather: null,
      selectedFather: null,
    };
  },
  methods: {
    showFathers(index) {
      this.selectedGrandfather = index;
      this.selectedFather = null;
    },
    showChildren(gIndex, fIndex) {
      this.selectedGrandfather = gIndex;
      this.selectedFather = fIndex;
    },
  },
};
</script>
