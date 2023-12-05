<template>
  <div class="carouselContainer">
    <!------ Main Card ------>
    <div :style="carouselCardSize" class="carouselCard carouselMainCard" ref="carouselCardRef">

      <!-- Icon Design Collection -->
      <div class="iconSet">
        <div class="iconSetTop dFlex-jcCenter">
          <v-icon color="white" icon="mdi-certificate"></v-icon>
        </div>
        <div class="iconSetMiddle dFlex-jcCenter">
          <v-icon color="white" icon="mdi-school"></v-icon>
          <v-icon color="white" icon="mdi-ubisoft"></v-icon>
          <v-icon color="white" icon="mdi-translate-variant"></v-icon>
        </div>
        <div class="iconSetBottom dFlex-jcCenter">
          <v-icon color="white" icon="mdi-weight-lifter"></v-icon>
        </div>
      </div>

      <!-- Main Card Label -->
      <div class="mainCardName">Collectives</div>

      <!-- Main Card Action -->
      <div class="cardNav dFlex-jcCenter">
        <v-icon @click="scrollCard('left')" icon="mdi-arrow-left-bold-circle"></v-icon>
        <v-icon @click="scrollCard('right')" icon="mdi-arrow-right-bold-circle"></v-icon>
      </div>
    </div>

    <!------ Secondary Cards ------>
    <div class="cardContainer h-w-100" ref="cardContainerRef">
      <div
        :style="carouselCardSize"
        class="carouselCard"
        v-for="field in cardContents"
        :key="field?.label"
        @click="openModal(field)"
      >
        <v-icon color="white" :icon="field?.icon"></v-icon>
        <div class="cardLabel">{{ field?.label }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from "vue";

import blogSiteInfo from "../assets/conf/blogSiteInfo.json";

import { mainStore } from "../stores/store.js";

//-------------- Configurations ----------------------
const store = mainStore();

//-------------- Global Variables ----------------------
const carouselCardHeight = { height: "75%" };

var cardContents = ref([]);
var carouselCardRef = ref(null);
var cardContainerRef = ref(null);
var carouselCardSize = ref({ ...carouselCardHeight, minWidth: null });

//-------------- Computed Properties ----------------------

// Return carousel-card-height as carousel-card-width
carouselCardSize.value.minWidth = computed(() => {
  return carouselCardRef?.value?.clientHeight + "px";
});

//-------------- Lifecycle Hooks ----------------------

onMounted(() => {
  Object.keys(blogSiteInfo).forEach((field) => {
    if (!blogSiteInfo.excludeFields.includes(field)) {
      cardContents.value.push(blogSiteInfo[field]);
    }
  });
});

//-------------- Functions ----------------------

function scrollCard(direction) {
  if (direction === "left") cardContainerRef.value.scrollLeft -= carouselCardRef?.value?.clientHeight;

  if (direction === "right") cardContainerRef.value.scrollLeft += carouselCardRef?.value?.clientHeight;
}

function openModal(modalData) {
  store.toggleModal(true);
  store.setModalData(modalData);
}
</script>

<style scoped>
.carouselContainer {
  height: 40%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  position: relative;
}

.carouselCard {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: var(--darkest-1);
  margin-right: 10%;
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 0px 10px -1px var(--lightest-1);
  transition: transform 0.3s;
}

.carouselCard:hover {
  background: var(--lightest-1);
  text-shadow: 5px 5px 8px #000000;
  box-shadow: 0px 0px 10px -4px #07182e;
}

/* -------------------------Main Card ------------------------- */
.carouselMainCard {
  align-items: unset;
  margin: 4% !important;
  box-shadow: 0px 0px 10px -1px var(--lightest-1);
}

.carouselMainCard:hover {
  transform: none;
  background: var(--darkest-1);
  box-shadow: 0px 0px 10px 1px var(--lightest-1);
}

/* ---- ICON SET ---- */
.iconSet {
  font-size: xx-small;
}
.iconSetTop,
.iconSetMiddle,
.iconSetBottom .v-icons {
  margin: 1px;
}
/* -- ICON SET-END -- */

.mainCardName {
  color: var(--white);
  font-size: larger;
  font-weight: bold;
  margin: 0 auto;
}

.cardNav {
  height: 25%;
  width: 100%;
}
/* ------------------------- Secondary Card ------------------------- */

.cardContainer {
  padding-left: 1%;
  padding-right: 20%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  overflow: hidden;
  scroll-behavior: smooth;
}

.v-icon {
  color: var(--lightest-1);
  font-size: 300%;
  margin-right: 2%;
}

.cardLabel {
  font-size: larger;
  font-weight: bold;
}
</style>
