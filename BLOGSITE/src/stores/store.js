import { defineStore } from "pinia";
import { ref } from "vue";

export const mainStore = defineStore("store", () => {
  //-------------- Data Component Modal ----------------------
  var isModalVisible = ref(false);
  var modalData = ref(null);

  function toggleModal(isVisible) {
    if (isVisible) isModalVisible.value = isVisible;
    else isModalVisible.value = !isModalVisible.value;
  }

  function setModalData(data) {
    modalData.value = data;
  }

  //-------------- Document Viewer Modal ----------------------
  var isDocViewerVisible = ref(false);
  var docViewerData = ref(null);

  function toggleDocViewerModal(isVisible) {
    if (isVisible) isDocViewerVisible.value = isVisible;
    else isDocViewerVisible.value = !isDocViewerVisible.value;
  }

  function setDocViewerModalData(data) {
    docViewerData.value = data;
  }

  return {
    //-------------- Data Component Modal ----------------------
    isModalVisible,
    toggleModal,
    modalData,
    setModalData,

    //-------------- Document Viewer Modal ----------------------
    isDocViewerVisible,
    toggleDocViewerModal,
    docViewerData,
    setDocViewerModalData,
  };
});
