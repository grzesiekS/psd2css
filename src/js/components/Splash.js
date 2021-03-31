import { select } from '../settings.js';

class Splash {
  constructor(element) {
    const thisSplash = this;

    thisSplash.getElement(element);
    thisSplash.handleWindowInnerWidthCheck();
    thisSplash.setSliderPostsInPage(window.innerWidth);
    thisSplash.setSliderPostsPageCount();

    thisSplash.sliderCurrentPage = 0;

    console.log(thisSplash.sliderPostsPageCount);
  }

  handleWindowInnerWidthCheck() {
    window.addEventListener('resize', () => {
      if(window.innerWidth > 0) {
        this.setSliderPostsInPage(window.innerWidth);
        this.setSliderPostsPageCount();
      }
    });
  }

  setSliderPostsInPage(innerWidth) {
    const thisSplash = this;

    if(innerWidth >= 950) thisSplash.sliderPostsInPage = 3;
    else thisSplash.sliderPostsInPage = 1;
  }

  setSliderPostsPageCount() {
    const thisSplash = this;
    thisSplash.sliderPostsPageCount = Math.ceil(thisSplash.dom.splashSliderElements.length/thisSplash.sliderPostsInPage);
  }

  getElement(element) {
    const thisSplash = this;

    thisSplash.dom = {};
    thisSplash.dom.wrapper = element;
    thisSplash.dom.splashSliderElements = thisSplash.dom.wrapper.querySelectorAll(select.splashComponent.splashSliderElements);
    thisSplash.dom.splashSliderElementsActive = thisSplash.dom.wrapper.querySelectorAll(select.splashComponent.splashSliderElementsActive);
    console.log(thisSplash.dom.splashSliderElementsActive);
  }
}

export default Splash;