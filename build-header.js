const fs = require("fs-extra");
const concat = require("concat");
(async function build() {
  const files = [
    "./dist/header/runtime.js",
    // "./dist/header/polyfills.js",
    "./dist/header/main.js",
    "./dist/header/scripts.js",
  ];
  await concat(files, "projects/portal/src/assets/shared-topnav.js");
  // await fs.copyFile('./dist/angularElements/styles.css', 'elements/styles.css')
  // await fs.copy('./dist/angularElements/assets/', 'elements/assets/' )
})();
