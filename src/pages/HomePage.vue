<template>
  <v-container fluid class="grey lighten-5">
    <v-row>
      <v-col sm="4" md="2">
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field
              class="custom-field pt-0"
              v-model="regSearch"
              placeholder="REG. NO"
              required
              background-color="white"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-card class="pa-2" outlined tile>
          <v-row>
            <v-col cols="12" md="12">
              <side-bar @showRegInfo="showRegInfo" />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col md="10">
        <v-card class="deep-purple lighten-5 rounded-0 mb-3 pa-2">
          <div class="d-flex align-item-center">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <h4>{{ selectedReg.reg_no }}</h4>
          </div>
        </v-card>

        <v-card class="pa-2" outlined tile>
          <!-- form start -->
          <vehicle-detail :vehicleData="selectedReg" />
          <v-card v-if="!newContact">
            <v-tabs color="deep-purple accent-4">
              <v-tab> Rental History </v-tab>
              <v-tab> Documents </v-tab>

              <v-tab-item>
                <v-container fluid>
                  <v-row>
                    <v-col cols="12" md="4">
                      <v-text-field
                        v-model="rentalSearch"
                        placeholder="Search for Registration No, Client, Driver"
                        required
                        dense
                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="2">
                      <v-btn elevation="2" depressed @click="search">
                        <v-icon left>search</v-icon>
                        <!-- <v-icon>fas fa-search</v-icon> -->
                        search</v-btn
                      >
                    </v-col>
                    <v-col cols="12" md="4"> </v-col>
                    <v-col cols="12" md="2">
                      <v-btn
                        elevation="2"
                        color="primary"
                        @click="newContact = true"
                        depressed
                        >New</v-btn
                      >
                    </v-col>
                  </v-row>
                  <v-row>
                    <rental-history :data="historyData" />
                  </v-row>
                </v-container>
              </v-tab-item>
              <v-tab-item> </v-tab-item>
            </v-tabs>
          </v-card>
          <div v-if="newContact">
            <Contract></Contract>
          </div>
          <!-- form end -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style >
.border {
  border: 1px solid black;
}
</style>
<script>
import RentalHistory from "../components/RentalHistory.vue";
import SideBar from "../components/SideBar.vue";
import VehicleDetail from "../components/VehicleDetail.vue";
import Contract from "../components/Contract.vue";
export default {
  components: {
    VehicleDetail,
    SideBar,
    RentalHistory,
    Contract,
  },
  name: "HomePage",
  data: () => ({
    rentalSearch: "",
    regSearch: "",
    newContact: false,
    selectedReg: {},
    historyData: [],
  }),
  methods: {
    showRegInfo(val) {
      this.selectedReg = val;
      this.historyData = val.rent_history ? val.rent_history : [];
    },
    search() {
      const temp = [];
      this.selectedReg?.rent_history?.filter((e) => {
        if (e.reg_no?.indexOf(this.rentalSearch?.toLowerCase()) > -1) {
          temp.push(e);
        }
        if (
          e.driver_name
            ?.toLowerCase()
            .indexOf(this.rentalSearch?.toLowerCase()) > -1
        ) {
          temp.push(e);
        }
        if (
          e.client_name
            ?.toLowerCase()
            .indexOf(this.rentalSearch?.toLowerCase()) > -1
        ) {
          temp.push(e);
        }
      });
      if (this.rentalSearch == "") {
        this.historyData = this.selectedReg.rent_history;
      } else {
        this.historyData = temp;
      }
    },
  },
};
</script>


<style>
/* .custom-field .v-input__control .v-input__slot {
  border: 1px solid #949494 !important;
}

.theme--light.v-text-field > .v-input__control > .v-input__slot:before {
  border-color: #00000078;
  border: 1px solid #00000078;
} */
.link {
  cursor: pointer;
  text-decoration: underline;
}
</style>