<template>
  <v-card
    :color="active ? 'primary' : 'grey lighten-1'"
    class="ma-4"
    height="200"
    width="150"
    @click="$emit('click')"
  >
    <v-img v-if="!addButton" :src="item" height="200" width="150" contain />
    <v-row class="fill-height" align="center" justify="center">
      <v-icon v-if="addButton" x-large>add</v-icon>
      <v-scale-transition>
        <v-icon v-if="active" color="white" size="48" v-text="'mdi-close-circle-outline'"></v-icon>
      </v-scale-transition>
    </v-row>
  </v-card>
</template>

<script>
import { createWorker } from 'tesseract.js';

// const worker = createWorker({
// 	logger: m => console.log(m)
// });

export default {
	name: 'ItemCard',
	props: ['active', 'item', 'addButton'],
	data () {
		return {
			imageData: null,
			worker: createWorker({
				logger: m => { 
					console.log(m)
					this.$emit('progressUpdate', m)
				}
			})

		}
	},
	watch: {
		active (newVal, oldVal) {
			if (newVal === true) {
				if (!this.imageData) {
					this.readImage()
				} else {
					this.$emit('onDone', this.imageData)
				}
			}
		} 
	},
	methods: {
		async readImage () {
			await this.worker.load();
			await this.worker.loadLanguage('eng');
			await this.worker.initialize('eng');
			const { data: { text } } = await this.worker.recognize(this.item);
			console.log(text);
			this.imageData = text
			this.$emit('onDone', text)
			await this.worker.terminate();
		}
	}
};
</script>

<style>
</style>