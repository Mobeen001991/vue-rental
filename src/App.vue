<template>
  <v-app>
 
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
<style>
.w-100{
  width: 100%;
}
body{
  font-size: 14px;
}
.d-flex{
  display: flex;
}
.align-item-center{
  align-items: center;
}
</style>