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
export default {
	name: 'ItemCard',
	props: ['active', 'item', 'addButton']
};
</script>

<style>
</style>