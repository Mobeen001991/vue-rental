<template>
  <v-form v-model="valid">
    <v-row>
      <v-col cols="12" md="2">
        <v-text-field
          class="custom-field"
          outlined
          dense
          v-model="data.reg_no" 
          label="RA1000"
          
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="2">
        <v-text-field 
          v-model="data.company"
          label="OPEL"
          
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="2">
        <v-text-field
          v-model="data.brand"
          label="ASTRA"
          
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="1">
        <v-text-field
          v-model="data.engine"
          label="1.4 CC"
          
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="2">
        <v-text-field
          v-model="data.fuel"
          label="Diesel"
          
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="2">
        <v-text-field
          v-model="data.type"
          label="Manual"
          
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="1">
        <v-text-field
          v-model="data.vit"
          label="6 Vit"
          
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="2">
        <v-text-field v-model="data.vin" label="VIN" ></v-text-field>
      </v-col>

      <v-col cols="12" md="2">
        <v-text-field
          v-model="data.data_immatriculation"
          label="Date Immatriculation"
          
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="2">
        <v-text-field
          v-model="data.contact"
          label="Contract No."
          
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field
          v-model="data.date_fill_contact"
          label="Date Fin Contract"
          
        ></v-text-field>
      </v-col>
    </v-row>
  </v-form>
</template>
<script>
export default {
  name: "VehicleDewtail",
  computed: {
    data: function () {
      return this.vehicleData;
    },
  },
  props: {
    vehicleData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data: () => ({
    tab: null,
    regNo: "",
    valid: false,
    firstname: "",
    lastname: "",
    
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is ",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
  }),
};
</script>
