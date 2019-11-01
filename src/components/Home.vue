<template>
  <v-container class="pa-0" fluid>
    <v-layout wrap>
      <Files />
    </v-layout>
  </v-container>
</template>

<script>
import Files from './Files'

export default {
  name: 'Home',
  components: {
    Files
  },
  data: () => ({
  }),
};
</script>
