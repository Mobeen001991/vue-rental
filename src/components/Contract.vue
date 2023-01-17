<template>
  <v-card class="newregisteration mb-2">
    <v-card-title>
      <v-row>
        <v-col sm="12" md="5"> Create New Rental Contract </v-col>
        <v-col sm="12" md="7">
          <v-btn class="mx-1" elevation="2" depressed> Print Contract </v-btn>
          <v-btn class="mx-1" elevation="2" depressed> Add Document </v-btn>
          <v-btn class="mx-1" elevation="2" depressed color="error">
            Cancel
          </v-btn>
          <v-btn
            class="mx-1"
            elevation="2"
            depressed
            color="success"
            @click="validate"
          >
            Save
          </v-btn>
        </v-col>
      </v-row>
    </v-card-title>
    <div class="card-body pa-4">
      <p>Contract details</p>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row>
          <v-col md="4">
            <v-text-field
              v-model="contact_info.cli_name"
              required
              placeholder="Client (search an existing client)"
            ></v-text-field>
          </v-col>

          <v-col md="4">
            <v-text-field
              v-model="contact_info.start_date"
              required
              label="Start Date"
            ></v-text-field>
          </v-col>

          <v-col md="4">
            <v-text-field
              v-model="contact_info.end_date"
              label="End Date"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col md="6">
            <v-text-field
              required
              v-model="contact_info.client_contract"
              placeholder="Client Contract Reference (insurance)"
            ></v-text-field>
          </v-col>
          <v-col md="6">
            <v-text-field
              v-model="contact_info.internal_Reference"
              required
              placeholder="Internal Reference"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col md="5">
            <v-text-field
              v-model="contact_info.pickup_location"
              label="Pickup Location"
              required
            ></v-text-field>
          </v-col>
          <v-col md="3">
            <v-checkbox
              label="Same as Pickup"
              v-model="contact_info.is_same_pickup"
            ></v-checkbox>
          </v-col>
          <v-col md="4">
            <v-text-field
              required
              v-model="contact_info.delivery_location"
              label="Delivery Location"
            ></v-text-field>
          </v-col>
        </v-row>

        <p>Driver</p>
        <v-row>
          <v-col md="2">
            <v-select
              :items="items"
              v-model="driver_info.client_type"
              label="Private Client"
              dense
              outlined
            ></v-select>
          </v-col>
          <v-col md="3">
            <v-text-field
              v-model="driver_info.first_name"
              label="First name"
              required
            ></v-text-field>
          </v-col>
          <v-col md="3">
            <v-text-field
              v-model="driver_info.last_name"
              label="Last name"
              required
            ></v-text-field>
          </v-col>
          <v-col md="2">
            <v-text-field
              v-model="driver_info.driving_lic"
              label="Driving Lic."
              required
            ></v-text-field>
          </v-col>
          <v-col md="2">
            <v-text-field v-model="driver_info.gsm" label="GSM"></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col md="3">
            <v-text-field v-model="driver_info.phone" label="Phone" required></v-text-field>
          </v-col>
          <v-col md="4">
            <v-text-field v-model="driver_info.email" label="Email" required></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col md="12">
            <v-text-field v-model="driver_info.address" label="Address"></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col md="12">
            <v-text-field
              v-model="driver_info.note"
              label="Note"
              outlined
              clearable
            ></v-text-field>
          </v-col>
        </v-row>
      </v-form>
    </div>
  </v-card>
</template>

<style >
.border {
  border: 1px solid black;
}
</style>
<script>
export default {
  name: "NewRegisteration",

  data: () => ({
    tab: null,
    regNo: "",
    valid: false,
    firstname: "",
    lastname: "",
    email: "",
    items:['Private Client'],
    contact_info: {
      cli_name: "jhon",
      client_contract: "",
      start_date: "",
      end_date: "",
      internal_Reference: "",
      pickup_location: "",
      is_same_pickup: false,
      delivery_location: "",
    },

    driver_info: {
      client_type: "",
      first_name: "",
      last_name: "",
      driving_lic: "",
      gsm: "",
      phone: "",
      email: "",
      address: "",
      note: "",
    },
    singleSelect: false,
    selected: [],
  }),
  methods: {
    validate() {
      //this.$refs.form.validate();
      console.log("jnnjnjjn");
    },
  },
};
</script>


<style>
.newregisteration .v-card__title {
  border-bottom: 1px solid #ccc;
}
</style>