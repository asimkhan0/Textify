<template>
  <v-slide-group
    v-model="model"
    class="pa-4"
    :multiple="multiple"
    :mandatory="mandatory"
    :show-arrows="showArrows"
    :center-active="centerActive"
  >
    <item-card @click="$emit('onAddFile')" :addButton="true"></item-card>

    <v-slide-item v-for="(item, n) in items" :key="n" v-slot:default="{ active, toggle }">
      <item-card :active="active" @click="toggle" :item="item" 
        @progressUpdate="$emit('progressUpdate', $event)"
        @onDone="$emit('onDone', $event)"></item-card>
    </v-slide-item>
  </v-slide-group>
</template>

<script>
import ItemCard from './SlideGroup/ItemCard'

export default {
  name: 'SlideGroup',
  components: {
    ItemCard
  },
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
			showArrows: true,
			centerActive: null
		}
  },
  // watch: {
  //   model (newVal, oldVal) {
  //     debugger
  //   }
  // }
}
</script>