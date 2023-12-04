<template>
  <div class="dataContainer h-w-100">
    <!----------------- Skills ----------------->
    <div v-if="modalContent?.label === 'Skill Highlights'" class="skillHighlights cardContainer h-w-100">
      <v-card width="400" elevation="16" class="rounded-xl" link>
        <v-card-item>
          <v-card-title
            v-for="skill in modalContent?.value.filter((e, i) => i < modalContent?.value.length / 2)"
            :key="skill"
          >
            {{ skill }}
          </v-card-title>
        </v-card-item>
      </v-card>

      <v-card width="400" elevation="16" class="rounded-xl" link>
        <v-card-item>
          <v-card-title
            v-for="skill in modalContent?.value.filter(
              (e, i) => i >= modalContent?.value.length / 2 && i < modalContent?.value.length
            )"
            :key="skill"
          >
            {{ skill }}
          </v-card-title>
          <v-card-title v-if="modalContent?.value.length % 2">&nbsp;</v-card-title>
        </v-card-item>
      </v-card>
    </div>

    <!----------------- Work Experience ----------------->
    <div
      v-if="modalContent?.label === 'Work Experience'"
      :class="{ wrapClass: isWrapClassActive }"
      class="workExperience cardContainer h-w-100"
    >
      <v-card
        width="500"
        elevation="16"
        class="rounded-xl"
        link
        v-for="(work, index) in modalContent?.value"
        :key="index"
      >
        <v-card-item>
          <v-card-title class="company"> {{ work?.company }} </v-card-title>
          <v-card-subtitle class="designation"> {{ work?.designation }} </v-card-subtitle>
          <v-card-subtitle> {{ work?.workDate?.from }} - {{ work?.workDate?.to }} </v-card-subtitle>
          <v-card-subtitle> {{ work?.location }} </v-card-subtitle>
          <v-divider></v-divider>
          <v-card-subtitle> {{ work?.role }} </v-card-subtitle>
          <v-card-text>
            <ul>
              <li v-for="(desc, index) in work?.description" :key="index">
                {{ desc }}
              </li>
            </ul>
          </v-card-text>
        </v-card-item>
      </v-card>
    </div>

    <!----------------- Education ----------------->
    <div
      v-if="modalContent?.label === 'Education'"
      :class="{ wrapClass: isWrapClassActive }"
      class="education cardContainer h-w-100"
    >
      <v-card
        width="450"
        elevation="16"
        class="rounded-xl"
        link
        v-for="(edu, index) in modalContent?.value"
        :key="index"
      >
        <v-card-item>
          <v-card-title class="institution"> {{ edu?.institution }} </v-card-title>
          <v-divider></v-divider>
          <v-card-title> {{ edu?.degree }} </v-card-title>
          <v-card-subtitle class="major"> {{ edu?.major }} </v-card-subtitle>
          <v-card-subtitle> {{ edu?.grade?.label }} : {{ edu?.grade?.value }} </v-card-subtitle>
          <v-card-subtitle> {{ edu?.studyDate?.from }} - {{ edu?.studyDate?.to }} </v-card-subtitle>
          <v-card-subtitle> {{ edu?.location }} </v-card-subtitle>
        </v-card-item>
      </v-card>
    </div>

    <!----------------- Projects ----------------->
    <div
      v-if="modalContent?.label === 'Projects'"
      :class="{ wrapClass: isWrapClassActive }"
      class="projects cardContainer h-w-100"
    >
      <v-card
        width="500"
        elevation="16"
        class="rounded-xl"
        link
        v-for="(project, index) in modalContent?.value"
        :key="index"
      >
        <v-card-item>
          <v-card-title class="projectName"> {{ project?.name }} </v-card-title>
          <v-card-subtitle class="projectOrg"> {{ project?.organization }} </v-card-subtitle>
          <v-divider></v-divider>
          <v-card-text>
            <ul>
              <li v-for="(desc, index) in project.description" :key="index">
                {{ desc }}
              </li>
            </ul>
          </v-card-text>
        </v-card-item>
      </v-card>
    </div>

    <!----------------- Certifications ----------------->
    <div
      v-if="modalContent?.label === 'Certifications'"
      :class="{ wrapClass: isWrapClassActive }"
      class="certifications cardContainer h-w-100"
    >
      <v-card
        width="300"
        elevation="16"
        class="rounded-xl"
        link
        v-for="(cert, index) in modalContent?.value"
        :key="index"
        @click="openCertification(cert)"
      >
        <v-card-item>
          <v-card-title class="certName"> {{ cert?.name }} </v-card-title>
          <v-card-subtitle class="certOrg"> {{ cert?.organization }} </v-card-subtitle>
          <div v-if="cert?.link">
            <v-divider></v-divider>
            <v-card-text>
              <v-icon icon="mdi-file-pdf-box" size="xxx-large"></v-icon>
            </v-card-text>
          </div>
          <div v-if="cert?.description && !cert?.link">
            <v-divider></v-divider>
            <v-card-text>
              <p v-html="cert?.description.join('<br />')"></p>
            </v-card-text>
          </div>
        </v-card-item>
      </v-card>
    </div>

    <!----------------- Languages ----------------->
    <div v-if="modalContent?.label === 'Languages'" class="languages cardContainer h-w-100">
      <v-card width="400" elevation="16" class="rounded-xl" link>
        <v-card-item>
          <v-card-title v-for="lang in modalContent?.value" :key="lang">
            {{ lang }}
          </v-card-title>
        </v-card-item>
      </v-card>
    </div>

    <!----------------- Hobbies ----------------->
    <div v-if="modalContent?.label === 'Hobbies'" class="hobbies cardContainer h-w-100">
      <v-card width="700" elevation="16" class="rounded-xl" link>
        <v-card-item>
          <v-card-title v-for="hobby in modalContent?.value" :key="hobby">
            {{ hobby }}
          </v-card-title>
        </v-card-item>
      </v-card>
    </div>

    <!----------------- Summary ----------------->
    <div v-if="modalContent?.label === 'Summary'" class="summary cardContainer h-w-100">
      <v-card width="600" elevation="16" class="rounded-xl" link>
        <v-card-item>
          <v-card-title class="summaryName"> {{ modalContent?.name }} </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <p v-html="modalContent?.value?.long.join('<br /> <br />')"></p>
          </v-card-text>
        </v-card-item>
      </v-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import { mainStore } from "../stores/store.js";

//-------------- Configurations ----------------------
const store = mainStore();

//-------------- Global Variables ----------------------
var modalContent = store?.modalData;

// ----- aligns overflowing cards to next row -----
var compareQuantity = () => {
  if (modalContent?.label === "Work Experience") return 2;
  else if (modalContent?.label === "Education") return 2;
  else if (modalContent?.label === "Projects") return 2;
  else if (modalContent?.label === "Certifications") return 6;
  else return 2;
};

var isWrapClassActive = ref(modalContent?.value.length > compareQuantity());

//-------------- Methods ----------------------

// Open Certification Viewer
function openCertification(certificate) {
  if (certificate?.link) {
    store.toggleDocViewerModal(true);
    store.setDocViewerModalData(certificate);
  }
}
</script>

<style scoped>
.dataContainer {
  overflow: auto;
  position: relative;
}

.cardContainer {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.v-card {
  background: var(--darkest-1);
  color: var(--white);
}

.v-divider {
  color: var(--lightest-1);
  height: 2px;
}

/* ----- aligns overflowing cards to next row ----- */
.wrapClass {
  height: auto !important;
  margin-top: 10px;
  margin-bottom: 30px;
}

/* -------- Skills -------- */
.skillHighlights {
  text-align: center;
}

.skillHighlights .v-card,
.skillHighlights .v-card-title {
  padding: 5px !important;
}

/* -------- Work Experience -------- */
.workExperience {
  flex-wrap: wrap;
}

.workExperience .v-card {
  margin: 20px 10px;
}

.workExperience .v-card-item {
  padding: 20px;
}

.workExperience .v-card-text {
  padding: 1rem 1rem 1rem 2rem;
}

.workExperience .company {
  font-weight: bold;
  white-space: initial;
}

.workExperience .designation {
  font-weight: bold;
}

.workExperience .v-divider {
  margin: 10px 0px 15px 0px;
}

/* -------- Education -------- */
.education {
  flex-wrap: wrap;
  text-align: center;
  padding: 2% 5%;
}

.education .v-card {
  margin: 3% 1%;
}

.education .v-card-title,
.education .v-card-subtitle {
  margin: 5px;
}

.education .institution {
  white-space: initial;
  font-weight: bold;
}

.education .major {
  font-weight: bold;
}

.education .v-divider {
  margin: 10px 0px 15px 0px;
}

/* -------- Projects -------- */
.projects {
  flex-wrap: wrap;
  padding: 2% 5%;
}

.projects .v-card {
  margin: 3% 1%;
}

.projects .v-card-item {
  padding: 20px;
}

.projects .v-card-text {
  padding: 1rem 1rem 1rem 2rem;
}

.projects .projectName {
  font-weight: bold;
  white-space: initial;
}

.projects .projectOrg {
  font-weight: bold;
}

.projects .v-divider {
  margin: 10px 0px 15px 0px;
}

/* -------- Certifications -------- */
.certifications {
  flex-wrap: wrap;
  align-items: stretch;
  text-align: center;
  padding: 2% 5%;
}

.certifications .v-card {
  margin: 3% 1%;
  min-height: 200px;
}

.certifications .v-card-item {
  height: 100%;
  padding: 20px;
}

.certifications .certName {
  font-weight: bold;
  white-space: initial;
}

.certifications .certOrg {
  font-weight: bold;
  white-space: initial;
}

.certifications .v-divider {
  margin: 10px 0px 15px 0px;
}

/* -------- Languages -------- */
.languages {
  text-align: center;
}

.languages .v-card,
.languages .v-card-title {
  padding: 25px 5px !important;
}

.languages .v-card-title {
  font-size: xx-large;
}

/* -------- Hobbies -------- */
.hobbies {
  text-align: center;
}

.hobbies .v-card,
.hobbies .v-card-title {
  padding: 15px 5px !important;
}

.hobbies .v-card-title {
  font-size: x-large;
}

/* -------- Summary -------- */
.summary {
  text-align: center;
}

.summary .v-card,
.summary .v-card-title {
  padding: 15px !important;
}

.summary .v-card-title {
  font-size: xx-large;
}

.summary .v-divider {
  margin: 10px 0px 15px 0px;
}
</style>
