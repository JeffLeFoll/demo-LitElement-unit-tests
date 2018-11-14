import "../src/jeff-ut.js";

const assert = chai.assert;

export const stripExpressionDelimeters = (html) => html.replace(/<!---->/g, '');

suite("demo-litelement-unit-tests", () => {
  let container;

  setup(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  teardown(() => {
    if (container && container.parentNode) {
      container.parentNode.removeChild(container);
    }
  });

  test('test rendu initial', async () => {
    const el = document.createElement('jeff-ut');
    container.appendChild(el);
    await new Promise((resolve) => {
        setTimeout(() => {
          assert.ok(el.shadowRoot);
          assert.equal(stripExpressionDelimeters(el.shadowRoot.getElementById('compteur').innerHTML), 'Compteur : 0');
          resolve();
        });
      });
  });

  test('test rendu avec valeur initial à 3', async () => {
    const el = document.createElement('jeff-ut');
    el.value = 3;

    container.appendChild(el);

    await new Promise((resolve) => {
        setTimeout(() => {
          assert.ok(el.shadowRoot);
          assert.equal(stripExpressionDelimeters(el.shadowRoot.getElementById('compteur').innerHTML), 'Compteur : 3');
          resolve();
        });
      });
  });

  test('test increment par defaut', async () => {
    const el = document.createElement('jeff-ut');
    el._increment();
    
    container.appendChild(el);

    await new Promise((resolve) => {
        setTimeout(() => {
          assert.ok(el.shadowRoot);
          assert.equal(stripExpressionDelimeters(el.shadowRoot.getElementById('compteur').innerHTML), 'Compteur : 1');
          resolve();
        });
      });
  });

  test('test increment par palier de 2', async () => {
    const el = document.createElement('jeff-ut');
    el.incrementValue = 2;
    el._increment();
    
    container.appendChild(el);

    await new Promise((resolve) => {
        setTimeout(() => {
          assert.ok(el.shadowRoot);
          assert.equal(stripExpressionDelimeters(el.shadowRoot.getElementById('compteur').innerHTML), 'Compteur : 2');
          resolve();
        });
      });
  });

  test('test incrementer deux fois', async () => {
    const el = document.createElement('jeff-ut');
    el._increment();
    el._increment();
    
    container.appendChild(el);

    await new Promise((resolve) => {
        setTimeout(() => {
          assert.ok(el.shadowRoot);
          assert.equal(stripExpressionDelimeters(el.shadowRoot.getElementById('compteur').innerHTML), 'Compteur : 2');
          resolve();
        });
      });
  });
});
