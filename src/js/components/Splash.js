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

    thisSplash.addActiveClassToPosts(
      thisSplash.getActivePosts(thisSplash.dom.splashSliderElements)
    );

    thisSplash.addMarginClassToFirstPost(
      thisSplash.getActivePosts(thisSplash.dom.splashSliderElements)
    );

  }

  handleWindowInnerWidthCheck() {
    window.addEventListener('resize', () => {
      if(window.innerWidth > 0) {
        this.setSliderPostsInPage(window.innerWidth);
        this.setSliderPostsPageCount();

        this.removeActiveClassFromPosts(
          this.getAllPosts(this.dom.splashSliderElements)
        );

        this.addActiveClassToPosts(
          this.getActivePosts(this.dom.splashSliderElements)
        );
        
        this.removeMarginClassFromAllPosts(
          this.getAllPosts(this.dom.splashSliderElements)
        );

        this.addMarginClassToFirstPost(
          this.getActivePosts(this.dom.splashSliderElements)
        );

        this.sliderCurrentPage = 0;
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
      
      thisSplash.handleButtonActiveClassRemove();
      
      if(thisSplash.sliderCurrentPage < thisSplash.sliderPostsPageCount - 1) thisSplash.sliderCurrentPage++;

      thisSplash.handleButtonActiveClassAdd();
    });
  }

  handleLeftButtonAction() {
    const thisSplash = this;

    thisSplash.dom.leftButton.addEventListener('click', event => {
      event.preventDefault();
      
      thisSplash.handleButtonActiveClassRemove();

      if(thisSplash.sliderCurrentPage > 0) thisSplash.sliderCurrentPage--;

      thisSplash.handleButtonActiveClassAdd();
    });
  }

  handleButtonActiveClassRemove() {
    const thisSplash = this;
    const currentActivePosts = thisSplash.getAllPosts(thisSplash.dom.splashSliderElements);

    thisSplash.removeActiveClassFromPosts(currentActivePosts);
    thisSplash.removeMarginClassFromFirstPost(currentActivePosts);
  }

  handleButtonActiveClassAdd() {
    const thisSplash = this;
    const newActivePosts = thisSplash.getActivePosts(thisSplash.dom.splashSliderElements);

    thisSplash.addActiveClassToPosts(newActivePosts);
    thisSplash.addMarginClassToFirstPost(newActivePosts);
  }

  getActivePosts(posts) {
    const thisSplash = this;
    return Array.from(posts)
      .slice(thisSplash.sliderCurrentPage*thisSplash.sliderPostsInPage, (thisSplash.sliderCurrentPage + 1)*thisSplash.sliderPostsInPage);
  }

  getAllPosts(posts) {
    return Array.from(posts);
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
    if (postsList.length > 0) postsList[0].classList.add(select.splashComponent.marginClassSlider);
  }

  removeMarginClassFromAllPosts(postsList) {
    for (const post of postsList) {
      post.classList.remove(select.splashComponent.marginClassSlider);
    }
     
  }

  getElement(element) {
    const thisSplash = this;

    thisSplash.dom = {};
    thisSplash.dom.wrapper = element;
    thisSplash.dom.splashSliderElements = thisSplash.dom.wrapper.querySelectorAll(select.splashComponent.splashSliderElements);
    thisSplash.dom.leftButton = thisSplash.dom.wrapper.querySelector(select.splashComponent.splashButtonLeft);
    thisSplash.dom.rightButton = thisSplash.dom.wrapper.querySelector(select.splashComponent.splashButtonRight);
  }
}

export default Splash;