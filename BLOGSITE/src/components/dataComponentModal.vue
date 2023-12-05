<template>
  <div class="modal h-w-100">
    <div class="modalContainer">
      <!-- Actionbar -->
      <div class="actionBar boxShadowLight">
        <h2>{{ modalTitle }}</h2>
        <v-spacer></v-spacer>
        <v-icon color="white" icon="mdi-close" size="x-large" @click="closeModal"></v-icon>
      </div>

      <!-- Data Component -->
      <div class="modalBody">
        <dataComponent />
      </div>
    </div>
  </div>
</template>

<script setup>
import dataComponent from "./dataComponent.vue";

import { mainStore } from "../stores/store.js";

//-------------- Configurations ----------------------
const store = mainStore();

//-------------- Global Variables ----------------------
var modalTitle = store.modalData?.label;

//-------------- Functions ----------------------
function closeModal() {
  store.toggleModal(false);
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  z-index: 999;
  backdrop-filter: blur(50px);
}

.modalContainer {
  height: 90%;
  width: 90%;
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
  background: var(--darkest-1);
}

.modalBody {
  height: calc(100% - 50px);
  width: 100%;
  overflow: auto;
}
</style>
