const header = document.createElement("vdp-header");
const yourspot = document.getElementById("vdp-navbar");
if (yourspot) {
  yourspot.appendChild(header);
}

const footer = document.createElement("vdp-footer");
const yourFooter = document.getElementById("footer");
if (yourFooter) {
  yourFooter.appendChild(footer);
}
