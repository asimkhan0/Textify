<template>
  <v-slide-group
    v-model="model"
    class="pa-4"
    :prev-icon="prevIcon ? 'mdi-minus' : undefined"
    :next-icon="nextIcon ? 'mdi-plus' : undefined"
    :multiple="multiple"
    :mandatory="mandatory"
    :show-arrows="showArrows"
    :center-active="centerActive"
  >
    <v-slide-item v-for="(item, n) in items" :key="n" v-slot:default="{ active, toggle }">
      <v-card
        :color="active ? 'primary' : 'grey lighten-1'"
        class="ma-4"
        height="200"
        width="150"
        @click="toggle"
      >
			<v-img :src="item" height="200" width="150" contain />
        <v-row class="fill-height" align="center" justify="center">

          <v-scale-transition>
            <v-icon v-if="active" color="white" size="48" v-text="'mdi-close-circle-outline'"></v-icon>
          </v-scale-transition>
        </v-row>
      </v-card>
    </v-slide-item>
  </v-slide-group>
</template>

<script>
export default {
	name: 'SlideGroup',
	props: {
		items: {
			type: Array,
			default: []
		}
	},
	data () {
		return {
			model: null,
			multiple: null,
			mandatory: null,
			showArrows: null,
			centerActive: null
		}
	}
}
</script>