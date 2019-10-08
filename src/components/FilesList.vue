<template>
  <v-container class="pa-0" fluid>
    <v-sheet class="mx-auto" elevation="3">
      <!-- <v-layout class="pt-2 px-4">
        <v-btn class="primary" @click="$refs.inputUpload.click()">Select Images</v-btn>
      </v-layout> -->

      <SlideGroup :items="imageUrls" @onAddFile="$refs.inputUpload.click()"/>
    </v-sheet>

    <input v-show="false" ref="inputUpload" type="file" @change="change" accept="image/*" multiple />
  </v-container>
</template>

<script>
import SlideGroup from "./SlideGroup";

export default {
  name: "FilesList",
  components: {
    SlideGroup
  },
  data() {
    return {
      files: [],
      imageFiles: [],
      imageUrls: []
    };
  },
  methods: {
    change($event) {
      // this.files = Array.from($event.target.files)
      // console.log(this.files)

      const files = Array.from($event.target.files);
      files.forEach(file => {
        if (file !== undefined) {
          this.imageName = file.name;
          if (this.imageName.lastIndexOf(".") <= 0) {
            return;
          }
          const fr = new FileReader();
          fr.readAsDataURL(file);
          fr.addEventListener("load", () => {
            // this.imageUrl = fr.result
            // this.imageFile = file // this is an image file that can be sent to server...
            this.imageUrls.push(fr.result);
            this.imageFiles.push(file);
          });
        } else {
          this.imageName = "";
          this.imageFile = "";
          this.imageUrl = "";
        }
      });
    }
  }
};
</script>

<style>
</style>