class Splash {
  constructor(element) {
    const thisSplash = this;

    thisSplash.getElement(element);
  }

  getElement(element) {
    const thisSplash = this;

    thisSplash.dom = {};
    thisSplash.dom.wrapper = element;
  }
}

export default Splash;