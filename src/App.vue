<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Textify</span>
        <!-- <span class="font-weight-light">MATERIAL DESIGN</span> -->
      </v-toolbar-title>
      <!-- <v-spacer></v-spacer> -->
      <span class="primary lighten-3 pa-2 ml-12">{{displayMsg}}</span>
      <!-- <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn> -->
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
      return this.have_images ? 'click on image you want to convert' : 'Click add button and select images'
    }
  }
};
</script>
