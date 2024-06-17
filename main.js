import { CLOSE_ICON, MESSAGE_ICON, styles } from "./assets.js";

export class TestWidget {
  constructor({ position = "bottom-right", CWUrl, TCUrl }) {
    this.position = this.getPosition(position);
    this.CWurl = CWUrl;
    this.TCUrl = TCUrl;
    this.open = false;
    this.initialize();
    this.injectStyles();
  }

  position = "";
  CWurl = "";
  TCUrl = "";
  open = false;
  widgetContainer = null;
  modal = null;

  getPosition(position) {
    const [vertical, horizontal] = position.split("-");
    return {
      [vertical]: "30px",
      [horizontal]: "30px",
    };
  }

  async initialize() {
    const container = document.createElement("div");
    container.style.position = "fixed";
    Object.keys(this.position).forEach(
      (key) => (container.style[key] = this.position[key])
    );

    document.addEventListener("resize", () => {
      console.log(window.innerWidth);
    });

    document.body.appendChild(container);

    const buttonContainer = document.createElement("button");
    buttonContainer.classList.add("button__container");
    const widgetIconElement = document.createElement("span");
    widgetIconElement.innerText = "Open Modal";
    widgetIconElement.classList.add("widget__icon");
    this.widgetIcon = widgetIconElement;

    const closeIconElement = document.createElement("span");
    closeIconElement.innerHTML = CLOSE_ICON;
    closeIconElement.classList.add("widget__icon", "widget__hidden");
    this.closeIcon = closeIconElement;

    buttonContainer.appendChild(this.widgetIcon);
    buttonContainer.appendChild(this.closeIcon);
    buttonContainer.addEventListener("click", this.toggleOpen.bind(this));

    this.widgetContainer = document.createElement("div");
    this.widgetContainer.classList.add("widget__hidden", "widget__container");

    this.createWidgetContent();

    container.appendChild(this.widgetContainer);
    container.appendChild(buttonContainer);
  }

  createWidgetContent() {
    this.widgetContainer.innerHTML = `
      <div id="root-modal" class="modal hidden">
        <div class="modal-content">
          <p>This is a modal content</p>
          <button><a href=${this.CWurl} target="_blank">Go To CW</a></button>
          <button><a href=${this.TCUrl} target="_blank">Go TO TableCheck</a></button>
        </div>
      </div>
    `;
    this.modal = this.widgetContainer.querySelector(".modal");

    const rootModal = this.widgetContainer.querySelector("#root-modal");
    rootModal.addEventListener("click", this.toggleOpen.bind(this));
  }

  injectStyles() {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = styles.replace(/^\s+|\n/gm, "");

    document.head.appendChild(styleTag);
  }

  toggleOpen() {
    this.open = !this.open;
    if (this.open) {
      this.widgetContainer.classList.remove("widget__hidden");
      this.modal.classList.remove("hidden");
    } else {
      this.createWidgetContent();
      this.widgetContainer.classList.add("widget__hidden");
      this.modal.classList.add("hidden");
    }
  }
}

export function initializeWidget(props) {
  return new TestWidget(props);
}

// initializeWidget({
//   TCUrl: "https://jwt.io",
//   CWUrl: "https://www.google.com/",
// });
