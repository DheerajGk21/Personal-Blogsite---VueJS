import Config from "../assets/conf/config.json";

export function getBaseURL() {
  if (Config.productionMode) return Config.productionUrl;
  else return import.meta.url.split("utilities")[0];
}

export function getImageURL(imgName) {
  return getBaseURL() + "/assets/images/" + imgName;
}

export function getCertificationURL(docName) {
  return getBaseURL() + "/assets/certifications/" + docName;
}

export function getCustomURL(pathWithFilename) {
  return getBaseURL() + pathWithFilename;
}
