import React from "react";
import Accordion from "./Accordion";
import classes from "./MainPage.module.css";
import WomanIcon from "../images/illustration-woman-online-desktop.svg";
import BoxIcon from "../images/illustration-box-desktop.svg";
import { useTypedSelector } from "../redux/reduxStore";

const MainPage = () => {
	const questions = useTypedSelector((state) => state.faq.questions);
	return (
		<div className={classes.main}>
			<div className={classes.faq}>
				<div className={classes.images}>
					<div className={classes.womanWrapper}>
						<img src={WomanIcon} alt="woman" className={classes.woman} />
					</div>
					<p className={classes.boxWrapper}>
						<img src={BoxIcon} alt="box" className={classes.box} />
					</p>
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
		</div>
	);
};

export default MainPage;
