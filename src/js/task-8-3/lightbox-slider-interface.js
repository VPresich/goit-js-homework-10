import Slider from '../common/slider.js';

class LightboxSliderInterface {
  #sliderRef;
  #prevBtn;
  #nextBtn;
  #sliderContent;
  #slidesCount;
  #elementsList;

  constructor(indexList, elementsList, lightboxRef) {
    this.#sliderRef = new Slider(indexList, 1, elementsList.length);

    this.#prevBtn = lightboxRef
      .element()
      .querySelector('#prev-lightbox-button');
    this.#nextBtn = lightboxRef
      .element()
      .querySelector('#next-lightbox-button');
    this.#sliderContent = lightboxRef
      .element()
      .querySelector('.lightbox-image');
    this.#slidesCount = lightboxRef
      .element()
      .querySelector('.lightbox-counter');

    this.#elementsList = elementsList;
    this.initBtnsFunction();
    this.update();
  }

  update() {
    this.updateContent();
    this.updateButtons();
    this.updateCounter();
  }

  destroy() {
    this.#prevBtn.removeEventListener('click', this.onPrevBtnClick.bind(this));
    this.#nextBtn.removeEventListener('click', this.onNextBtnClick.bind(this));
  }

  initBtnsFunction() {
    this.#prevBtn.addEventListener('click', this.onPrevBtnClick.bind(this));
    this.#nextBtn.addEventListener('click', this.onNextBtnClick.bind(this));
  }

  updateContent() {
    const slideNumber = this.#sliderRef.currentSlide;
    const imgRef = this.#elementsList[slideNumber].querySelector('img');

    this.#sliderContent.src = imgRef.dataset.source;
    this.#sliderContent.alt = imgRef.alt;
  }

  updateButtons() {
    this.#prevBtn.disabled = this.#sliderRef.isExistPrev();
    this.#nextBtn.disabled = this.#sliderRef.isExistNext();
  }

  updateCounter() {
    this.#slidesCount.textContent = `${
      this.#sliderRef.currentSlide + 1 + '/' + this.#elementsList.length
    }`;
  }
  onPrevBtnClick() {
    this.#sliderRef.onPrevSlide();
    this.update();
  }

  onNextBtnClick() {
    this.#sliderRef.onNextSlide();
    this.update();
  }
}

export default LightboxSliderInterface;
