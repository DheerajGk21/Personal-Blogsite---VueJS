<template>
  <div class="modal h-w-100">
    <div class="modalContainer">
      <!-- Action Bar -->
      <div class="actionBar boxShadowLight">
        <v-spacer></v-spacer>
        <h2>{{ modalTitle }}</h2>
        <v-spacer></v-spacer>
        <v-icon color="white" icon="mdi-close" size="x-large" @click="closeDocViewerModal"></v-icon>
      </div>

      <!-- Document Viewer -->
      <div class="modalBody">
        <iframe :src="getCertificationURL()" class="h-w-100" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import dataComponent from "./dataComponent.vue";

import * as Utilities from "../utilities/utilities.js";

import { mainStore } from "../stores/store.js";

//-------------- Configurations ----------------------
const store = mainStore();

//-------------- Global Variables ----------------------
var modalTitle = store.docViewerData?.name;
var certificateData = store?.docViewerData;

//-------------- Functions ----------------------
function closeDocViewerModal() {
  store.toggleDocViewerModal(false);
}

function getCertificationURL() {
  if (certificateData?.link) return Utilities.getCertificationURL(certificateData?.link);
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  z-index: 999;
  /* backdrop-filter: blur(40px); */
}

.modalContainer {
  height: 93%;
  width: 95%;
  background: var(--lightest-1);
  margin: auto;
  border-radius: var(--borderRadius);
  overflow-x: hidden;
}

.actionBar {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px;
  background: var(--dark-1);
}

.modalBody {
  height: calc(100% - 50px);
  width: 100%;
  overflow: auto;
  display: flex;
}
</style>
