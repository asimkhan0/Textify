<template>
  <v-app>
    <v-app-bar app>
      <v-row align="center" class="ml-3">
        <v-toolbar-title class="headline text-uppercase">
          <span>Textify</span>
        </v-toolbar-title>
        <span class="primary lighten-3 pa-1 ml-7">{{displayMsg}}</span>
      </v-row>
    </v-app-bar>

    <v-content>
      <Home/>
    </v-content>
  </v-app>
</template>

<script>
import Home from './components/Home';
import { mapGetters } from 'vuex'


export default {
  name: 'App',
  components: {
    Home,
  },
  data: () => ({
    // displayMsg: 'Click add button and select images'
    //
  }),
  computed: {
    ...mapGetters({
      have_images: 'get_have_images'
    }),
    displayMsg () {
      return this.have_images ? 'click on any image' : 'Add button -> select images'
    }
  }
};
</script>
