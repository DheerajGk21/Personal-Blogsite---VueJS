<template>
  <!-- Main -->
  <div class="mainBase h-w-100">
    <!-- Data Component Modal -->
    <Transition name="expand-collapse">
      <modal v-if="store?.isModalVisible" />
    </Transition>

    <!-- Document Viewer Modal -->
    <Transition name="expand-collapse">
      <document-viewer v-if="store?.isDocViewerVisible" />
    </Transition>

    <!-- Left Body -->
    <div class="leftPaneBody">
      <introduction />
      <leftPaneSummary />
    </div>

    <!-- Right Body -->
    <right-pane-body />

    <!-- Footer -->
    <contact />
  </div>
</template>

<script setup>
import "../styles/blogsiteMain.css";
import "../styles/animations.css";

import introduction from "./introduction.vue";
import leftPaneSummary from "./leftPaneSummary.vue";
import rightPaneBody from "./rightPaneBody.vue";
import contact from "./contact.vue";
import modal from "./dataComponentModal.vue";
import documentViewer from "./documentViewerModal.vue";

import { mainStore } from "../stores/store.js";

//-------------- Configurations ----------------------
const store = mainStore();
</script>

<style scoped>
.mainBase {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background: var(--dark-1);
}

.leftPaneBody {
  width: 28%;
  height: 100%;
  margin-left: 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
