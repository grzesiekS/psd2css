import { select } from '../settings.js';

class Splash {
  constructor(element) {
    const thisSplash = this;

    thisSplash.getElement(element);
    thisSplash.handleWindowInnerWidthCheck();
    thisSplash.setSliderPostsInPage(window.innerWidth);
    thisSplash.setSliderPostsPageCount();
    thisSplash.handleRightButtonAction();
    thisSplash.handleLeftButtonAction();

    thisSplash.sliderCurrentPage = 0;
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

  handleRightButtonAction() {
    const thisSplash = this;

    thisSplash.dom.rightButton.addEventListener('click', event => {
      event.preventDefault();
      
      const currentActivePosts = thisSplash.getPosts(thisSplash.dom.splashSliderElementsActive);

      thisSplash.removeActiveClassFromPosts(currentActivePosts);
      thisSplash.removeMarginClassFromFirstPost(currentActivePosts);
      
      if(thisSplash.sliderCurrentPage < thisSplash.sliderPostsPageCount - 1) thisSplash.sliderCurrentPage++;

      const newActivePosts = thisSplash.getPosts(thisSplash.dom.splashSliderElements);

      thisSplash.addActiveClassToPosts(newActivePosts);
      thisSplash.addMarginClassToFirstPost(newActivePosts);

    });
  }

  handleLeftButtonAction() {
    const thisSplash = this;

    thisSplash.dom.leftButton.addEventListener('click', event => {
      event.preventDefault();
      console.log('test');
    });
  }

  getPosts(posts) {
    const thisSplash = this;
    return Array.from(posts)
      .splice(thisSplash.sliderCurrentPage*thisSplash.sliderPostsInPage, (thisSplash.sliderCurrentPage + 1)*thisSplash.sliderPostsInPage);
  }

  removeActiveClassFromPosts(postsList) {
    for(const post of postsList) {
      post.classList.remove(select.splashComponent.activeClassSlider);
    }
  }

  addActiveClassToPosts(postsList) {
    for(const post of postsList) {
      post.classList.add(select.splashComponent.activeClassSlider);
    }
  }

  removeMarginClassFromFirstPost(postsList) {
    if (postsList.length > 0) postsList[0].classList.remove(select.splashComponent.marginClassSlider);
  
  }

  addMarginClassToFirstPost(postsList) {
    postsList[0].classList.add(select.splashComponent.marginClassSlider);
  }

  getElement(element) {
    const thisSplash = this;

    thisSplash.dom = {};
    thisSplash.dom.wrapper = element;
    thisSplash.dom.splashSliderElements = thisSplash.dom.wrapper.querySelectorAll(select.splashComponent.splashSliderElements);
    thisSplash.dom.splashSliderElementsActive = thisSplash.dom.wrapper.querySelectorAll(select.splashComponent.splashSliderElementsActive);
    thisSplash.dom.leftButton = thisSplash.dom.wrapper.querySelector(select.splashComponent.splashButtonLeft);
    thisSplash.dom.rightButton = thisSplash.dom.wrapper.querySelector(select.splashComponent.splashButtonRight);
  }
}

export default Splash;