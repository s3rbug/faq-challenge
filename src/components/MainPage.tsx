import React from "react";
import Accordion from "./Accordion";
import classes from "./MainPage.module.css";
import WomanIconMobile from "../images/illustration-woman-online-mobile.svg";
import { useTypedSelector } from "../redux/reduxStore";

type PropsType = {
	children: React.ReactNode;
};

const MainPage = ({ children }: PropsType) => {
	const questions = useTypedSelector((state) => state.faq.questions);
	return (
		<div className={classes.main}>
			<div className={classes.faq}>
				<div className={classes.images}>
					<img
						src={WomanIconMobile}
						alt="woman mobile"
						className={classes.woman + " " + classes.womanMobile}
					/>
				</div>
				<div className={classes.questions}>
					<h1>FAQ</h1>
					<div className={classes.accordions}>
						{questions.map((element, id) => (
							<Accordion
								key={"accordion-" + id}
								question={element.question}
								answer={element.answer}
							/>
						))}
					</div>
				</div>
			</div>
			<>{children}</>
		</div>
	);
};

export default MainPage;
