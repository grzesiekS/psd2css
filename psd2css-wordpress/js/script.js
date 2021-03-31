import { select } from './settings.js';

import Splash from './components/Splash.js';

const app = {
  initSplash: () => {
    const splashElement = document.querySelector(select.splashComponent.splash);
    new Splash(splashElement);
  },

  init: () => {
    app.initSplash();
  },
};

app.init();