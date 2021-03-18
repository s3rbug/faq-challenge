import { LOAD_QUESTIONS } from "./../constants/faq";
import { FaqActionTypes } from "./types";

export const loadQuestions = (): FaqActionTypes => {
	return {
		type: LOAD_QUESTIONS,
	};
};
