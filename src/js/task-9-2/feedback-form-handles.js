import FeedbackFormState from './feedback-form-state.js';
const feedbackForm = document.querySelector('.feedback-form');

const formstate = new FeedbackFormState(feedbackForm);
formstate.restoreData();
