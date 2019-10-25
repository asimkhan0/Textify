<template>
  <v-container class="pa-0" fluid>
    <v-sheet class="mx-auto" elevation="3">
      
      <SlideGroup :items="imageUrls" @onAddFile="$refs.inputUpload.click()" 
        @progressUpdate="progressUpdate"
        @onDone="fetchTextOnConversionDone"/>
    </v-sheet>
    <v-progress-linear
      v-model="progress"
      height="25"
      reactive
    >
      <strong v-if="progress || progressStatus" class="text-uppercase">{{progressStatus}} - {{ progress }}%</strong>
    </v-progress-linear>
    <v-row  class="mx-5">
      <v-col cols="12">
        <v-textarea
          outlined
          :rows="13"
          shaped
          label="Output Text"
          v-model="textToShow"
        ></v-textarea>
      </v-col>
    </v-row>
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
      imageUrls: [],
      progress: 0,
      progressStatus: '',
      textToShow: ''
    };
  },
  
  watch: {
    imageFiles (newVal) {
      if (newVal.length) {
        this.$store.commit('set_have_images', true)
      } else {
        this.$store.commit('set_have_images', false)
      }
    }
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
    },
    progressUpdate (newVal) {
      this.progress = Math.ceil(newVal.progress * 100)
      this.progressStatus = newVal.status
    },
    fetchTextOnConversionDone (value) {
      this.textToShow = value
    }
  }
};
</script>

<style>
</style>