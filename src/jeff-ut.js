import { LitElement, html } from "../node_modules/@polymer/lit-element";

class JeffUt extends LitElement {
  static get properties() {
    return {
      incrementValue: { type: Number },
      decrementValue: { type: Number },
      value: {type: Number}
    };
  }

  constructor() {
    super();
    this.value = 0;
    this.incrementValue = 1;
    this.decrementValue = 1;
  }

  render() {
    return html`
        <style>
            .inline {
                display: inline;
            }
        </style>
        <div id="compteur">Compteur : ${this.value}</div>
        <div>
            </div class="inline"><input type="button" value="increment" @click="${this._increment}"></div>
            </div class="inline"><input type="button" value="decrement" @click="${this._decrement}"></div>
        </div>
    `;
  }

  _increment() {
      this.value += this.incrementValue;
    }
    
    _decrement() {
        this.value -= this.decrementValue;
  }
}

customElements.define("jeff-ut", JeffUt);
