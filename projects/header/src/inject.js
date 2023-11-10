(function injectMe() {
  const existingHeader = document.getElementsByTagName("vdp-header");
  const existingFooter = document.getElementsByTagName("vdp-footer");

  if (!existingHeader.length) {
    const header = document.createElement("vdp-header");
    const yourspot = document.getElementById("vdp-navbar");
    if (yourspot) {
      yourspot.appendChild(header);
    }
  }
  if (!existingFooter.length) {
    const footer = document.createElement("vdp-footer");
    const yourFooter = document.getElementById("footer");
    if (yourFooter) {
      yourFooter.appendChild(footer);
    }
  }
})();
