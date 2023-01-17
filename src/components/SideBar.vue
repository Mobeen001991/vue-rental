<template>
  <v-list class="custom-list">
    <v-list-item-group v-model="selectedItem" color="primary">
      <v-list-item v-for="(item, i) in regData" :key="i">
        <v-list-item-content @click="showRegInfo(item)">
          <v-list-item-title>{{ item.reg_no }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>
<script>
import * as jsonData from "../assets/data/register.json";

export default {
  name: "SideBar",
  props: {},
  data: () => ({
    selectedItem: null,
    regData: jsonData,
  }),
  methods: {
    showRegInfo(value) {
      this.selectedItem = value;
      this.$emit("showRegInfo", value);
    },
  },
};
</script>
<style >
.v-list.custom-list .v-item-group .v-list-item {
  min-height: 35px !important;
}
.v-list-item__title {
  font-size: 14px !important;
}
</style>