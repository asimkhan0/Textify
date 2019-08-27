<template>
  <v-container class="pa-0" fluid>
    <v-layout wrap>
      <FilesList />
    </v-layout>
  </v-container>
</template>

<script>
import FilesList from './FilesList'

export default {
  name: 'Home',
  components: {
    FilesList
  },
  data: () => ({
  }),
};
</script>
