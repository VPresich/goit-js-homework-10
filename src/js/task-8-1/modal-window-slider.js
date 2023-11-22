import SliderInterface from '../common/slider-interface.js';

class ModalWindowSlider extends SliderInterface {
  #sliderContent;
  #elementsList;

  constructor(params) {
    const { elementsList, sliderContent } = params;
    super(params);

    this.#elementsList = elementsList;
    this.#sliderContent = sliderContent;

    super.update();
  }

  destroy() {
    super.destroy();
  }

  updateContent() {
    const slideNumber = super.getCurrentSlide();
    const imgRef = this.#elementsList[slideNumber].querySelector('img');

    this.#sliderContent.src = imgRef.dataset.source;
    this.#sliderContent.alt = imgRef.alt;
  }
}

export default ModalWindowSlider;
