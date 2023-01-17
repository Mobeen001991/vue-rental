<template>
  <v-data-table
    v-model="selected"
    :headers="headers"
    :items="data"
    :items-per-page="5"
    class="elevation-1 w-100"
    :sort-desc="[true]"
    :sort-by="['driver']"
  >
    <template v-slot:[`item.active`]="{ item }">
      <v-checkbox v-model="item.active"></v-checkbox>
    </template>

    <template v-slot:[`item.action`]="{ item }">
      <router-link
        class="link"
        :to="{ name: 'action', params: { id: item.id } }"
        >Edit</router-link
      >
    </template>
  </v-data-table>
</template>
<script>
export default {
  name: "RegisterationHistory",
  props: {
    data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  
  data: () => ({
    selected:[],
    headers: [
      {
        text: "#",
        align: "start",
        sortable: true,
        value: "id",
      },
      { text: "Driver", value: "driver_name" },
      { text: "Agency", value: "agency" },
      { text: "Start Date", value: "startDate" },
      { text: "End Date", value: "endDate" },
      { text: "Active", value: "active" },
      { text: "Action", value: "action" },
    ],
  }),
  methods:{
    
  }
};
</script>
