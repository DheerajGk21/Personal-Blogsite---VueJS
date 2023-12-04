<template>
  <div class="contact">
    <!-- Contact Trapezium Head Design -->
    <div class="contactHead" @click="toggleContacts">
      <div class="contactHeadIcon" :class="{ contactHeadIconExpanded: isContactExpanded }"></div>
    </div>

    <!-- Contact Body -->
    <Transition name="slide">
      <div v-show="isContactExpanded" class="contactBody">
        <v-card class="h-w-100">
          <v-card-text>
            <div v-for="detail in contactDetails" v-bind:key="detail.label">
              <p v-if="detail?.type === 'phone'">
                <a :href="'tel:'.concat(detail.value.trim())">{{ detail.value }}</a>
              </p>
              <p v-else-if="detail?.type === 'email'">
                <a :href="'mailto:'.concat(detail.value)">{{ detail.value }}</a>
              </p>
              <p v-else-if="detail?.type === 'link'">
                <a :href="detail.value" target="_blank">{{ detail.label }}</a>
              </p>
              <p v-else-if="detail?.type === 'assetLink'">
                <a :href="getAssetURL(detail.value)" target="_blank">{{ detail.label }}</a>
              </p>
              <p v-else>
                {{ detail.value }}
              </p>
            </div>
          </v-card-text>
        </v-card>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import blogSite from "../assets/conf/blogSiteInfo.json";
import * as Utilities from "../utilities/utilities.js";

//-------------- Global Variables ----------------------
var contactDetails = blogSite.contact.details;
var isContactExpanded = ref(false);

const autoOpenContactsTimeout = setTimeout(() => toggleContacts(), 5000);

//-------------- Functions ----------------------
function toggleContacts() {
  clearTimeout(autoOpenContactsTimeout);
  isContactExpanded.value = !isContactExpanded.value;
}

function getAssetURL(pathWithFileName) {
  return Utilities.getCustomURL(pathWithFileName);
}
</script>

<style scoped>
.contact {
  width: 55%;
  position: fixed;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0px 25px 20px -2px var(--lightest-1);
}

.contactHead {
  height: 10px;
  width: 100%;
  border-bottom: 20px solid var(--light-1);
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  cursor: pointer;
}

.contact:hover .contactHead {
  border-bottom: 20px solid var(--lightest-1);
}

.contactHeadIcon {
  width: 10px;
  margin: auto;
  border-bottom: 13px solid var(--white);
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  transform: translateY(2px);
}

.contactHeadIconExpanded {
  border-bottom: 0px solid var(--white);
  border-top: 13px solid var(--white);
  transform: translateY(4px);
}

.contactBody {
  height: 300px;
  width: 100%;
  background: var(--light-1);
}

.contact:hover .contactBody {
  background: var(--lightest-1);
}

.contactBody .v-card {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-top: 3px solid var(--light-1);
  border-left: 5px solid var(--light-1);
  border-right: 5px solid var(--light-1);
  border-radius: 10px 10px 0px 0px;
  background: var(--darkest-1);
  color: var(--white) !important;
}

.contact:hover .contactBody .v-card {
  border-color: var(--lightest-1);
}

a {
  text-decoration: none;
}

.v-card-text {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-weight: bold;
}

.v-card-text p {
  transition: transform 0.2s ease;
}

.v-card-text p:hover {
  color: var(--lightest-1);
  background: linear-gradient(to right, #31e0f700, #31e0f70f, #31e0f77a, #31e0f70f, #31e0f700);
  transform: scale(1.1, 1.2);
}

/* -------------- Slide-In-Out -------------- */

.slide-enter-active,
.slide-leave-active {
  transition: all 1s ease;
}

.slide-enter-from,
.slide-leave-to {
  height: 0px;
}
</style>
