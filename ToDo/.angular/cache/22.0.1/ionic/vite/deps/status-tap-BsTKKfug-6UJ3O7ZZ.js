import {
  findClosestIonContent,
  scrollToTop
} from "./chunk-DFRKVH5B.js";
import {
  componentOnReady
} from "./chunk-HVQQUDLO.js";
import "./chunk-YIRVZL7S.js";
import {
  readTask,
  writeTask
} from "./chunk-56BVRWGR.js";
import "./chunk-PAXKX5KU.js";

// node_modules/@ionic/core/dist/esm/status-tap-BsTKKfug.js
var startStatusTap = () => {
  const win = window;
  win.addEventListener("statusTap", () => {
    readTask(() => {
      const width = win.innerWidth;
      const height = win.innerHeight;
      const el = document.elementFromPoint(width / 2, height / 2);
      if (!el) {
        return;
      }
      const contentEl = findClosestIonContent(el);
      if (contentEl) {
        new Promise((resolve) => componentOnReady(contentEl, resolve)).then(() => {
          writeTask(async () => {
            contentEl.style.setProperty("--overflow", "hidden");
            await scrollToTop(contentEl, 300);
            contentEl.style.removeProperty("--overflow");
          });
        });
      }
    });
  });
};
export {
  startStatusTap
};
//# sourceMappingURL=status-tap-BsTKKfug-6UJ3O7ZZ.js.map
