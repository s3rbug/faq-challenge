import * as constants from "../constants/faq";

export type LoadQuestions = {
	type: typeof constants.LOAD_QUESTIONS;
};

export type FaqActionTypes = LoadQuestions;
