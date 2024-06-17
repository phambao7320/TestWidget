var l=Object.defineProperty;var c=(r,e,i)=>e in r?l(r,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[e]=i;var d=(r,e,i)=>c(r,typeof e!="symbol"?e+"":e,i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const p=`
    .widget__container * {
        box-sizing: border-box;
    }        

    h3, p, input {
        margin: 0;
        padding: 0;
    }

    .widget__container {
        box-shadow: 0 0 18px 8px rgba(0, 0, 0, 0.1), 0 0 32px 32px rgba(0, 0, 0, 0.08);
        width: 400px;
        overflow: auto;
        right: -25px;
        bottom: 75px;
        position: absolute;
        transition: max-height .2s ease;
        font-family: Helvetica, Arial ,sans-serif;
        background-color: #e6e6e6a6;
        border-radius: 10px;
        box-sizing: border-box;
    }

    .widget__icon {
        cursor: pointer;
        width: 60%;
        position: absolute;
        top: 18px;
        left: 16px;
        transition: transform .3s ease;
    }

    .widget__hidden {
        transform: scale(0);
    }
    .button__container {
        border: none;
        // background-color: #0f172a;
        width: 200px;
        height: 50px;
        cursor: pointer;
    }

    .widget__container.hidden {
        max-height: 0px;
    }

    .widget__header {
        padding: 1rem 2rem 1.5rem;
        background-color: #000;
        color: #fff;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        text-align: center;
    }

    .widget__header h3 {
        font-size: 24px;
        font-weight: 400;
        margin-bottom: 8px;
    }

    form {
        padding: 2rem 1rem 1.5rem;
    }

    form .form__field {
        margin-bottom: 1.5rem;
        display: flex;
        flex-direction: column;
    }

    .form__field label {
        margin-bottom: 8px;
        font-size: 14px;
    }

    .form__field input,
    .form__field textarea {
        border: 1px solid #000000ad;
        border-radius: 3px;
        padding: 8px 10px;
        background-color: #fff;
    }

    .form__field input {
        height: 48px;
    }

    .form__field textarea::placeholder {
        font-family: Helvetica, Arial ,sans-serif;
    }

    form button {
        height: 48px;
        border-radius: 6px;
        font-size: 18px;
        // background-color: #000;
        color: #fff;
        border: 0;
        width: 100%;
        cursor: pointer;
    }

    form button:hover {
        background-color: rgba(0, 0, 0, 95%);
    }

    .modal {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .modal-content {
        background-color: white;
        padding: 20px;
        border-radius: 4px;
        text-align: center;
        width: 500px;
    }

    .hidden {
        display: none;
    }

    .close-button {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
        font-size: 24px;
    }
<<<<<<<< HEAD:dist/assets/index-CgtQ5jZb.js

    @media only screen and (max-width: 768px) {
        .modal-content {
          width: 100%;
        }
    }
========
>>>>>>>> a45d87a19f0fd1ec2c537f42e8b394853c0949f4:dist/assets/index-CIa2mmFA.js
`,h=`
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="#FFFFFF" stroke="#FFFFFF"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
`;class a{constructor({position:e="bottom-right",CWUrl:i,TCUrl:n}){d(this,"position","");d(this,"CWurl","");d(this,"TCUrl","");d(this,"open",!1);d(this,"widgetContainer",null);d(this,"modal",null);this.position=this.getPosition(e),this.CWurl=i,this.TCUrl=n,this.open=!1,this.initialize(),this.injectStyles()}getPosition(e){const[i,n]=e.split("-");return{[i]:"30px",[n]:"30px"}}async initialize(){const e=document.createElement("div");e.style.position="fixed",Object.keys(this.position).forEach(o=>e.style[o]=this.position[o]),document.addEventListener("resize",()=>{console.log(window.innerWidth)}),document.body.appendChild(e);const i=document.createElement("button");i.classList.add("button__container");const n=document.createElement("span");n.innerText="Open Modal",n.classList.add("widget__icon"),this.widgetIcon=n;const t=document.createElement("span");t.innerHTML=h,t.classList.add("widget__icon","widget__hidden"),this.closeIcon=t,i.appendChild(this.widgetIcon),i.appendChild(this.closeIcon),i.addEventListener("click",this.toggleOpen.bind(this)),this.widgetContainer=document.createElement("div"),this.widgetContainer.classList.add("widget__hidden","widget__container"),this.createWidgetContent(),e.appendChild(this.widgetContainer),e.appendChild(i)}createWidgetContent(){this.widgetContainer.innerHTML=`
      <div id="root-modal" class="modal hidden">
        <div class="modal-content">
          <p>This is a modal content</p>
          <button><a href=${this.CWurl} target="_blank">Go To CW</a></button>
          <button><a href=${this.TCUrl} target="_blank">Go TO TableCheck</a></button>
        </div>
      </div>
<<<<<<<< HEAD:dist/assets/index-CgtQ5jZb.js
    `,this.modal=this.widgetContainer.querySelector(".modal"),this.widgetContainer.querySelector(".modal-content").addEventListener("click",n=>n.stopPropagation()),this.widgetContainer.querySelector("#root-modal").addEventListener("click",this.toggleOpen.bind(this))}injectStyles(){const e=document.createElement("style");e.innerHTML=p.replace(/^\s+|\n/gm,""),document.head.appendChild(e)}toggleOpen(){this.open=!this.open,this.open?(this.widgetContainer.classList.remove("widget__hidden"),this.modal.classList.remove("hidden")):(this.createWidgetContent(),this.widgetContainer.classList.add("widget__hidden"),this.modal.classList.add("hidden"))}}function g(r){return new a(r)}window.MessageWidget=a;window.initializeWidget=g;
========
    `,this.modal=this.widgetContainer.querySelector(".modal"),this.widgetContainer.querySelector("#root-modal").addEventListener("click",this.toggleOpen.bind(this))}injectStyles(){const e=document.createElement("style");e.innerHTML=p.replace(/^\s+|\n/gm,""),document.head.appendChild(e)}toggleOpen(){this.open=!this.open,this.open?(this.widgetContainer.classList.remove("widget__hidden"),this.modal.classList.remove("hidden")):(this.createWidgetContent(),this.widgetContainer.classList.add("widget__hidden"),this.modal.classList.add("hidden"))}}function g(r){return new a(r)}window.MessageWidget=a;window.initializeWidget=g;
>>>>>>>> a45d87a19f0fd1ec2c537f42e8b394853c0949f4:dist/assets/index-CIa2mmFA.js
