import React, { useState } from "react";
import classes from "./Accordion.module.css";
import { ReactComponent as ArrowDown } from "../images/icon-arrow-down.svg";

type PropsType = {
	question: string;
	answer: string;
};

const Accordion = ({ question, answer }: PropsType) => {
	const [open, setOpen] = useState(false);
	return (
		<div className={classes.root} onClick={() => setOpen(!open)}>
			<div className={classes.header}>
				<div
					className={
						classes.title + " " + (open ? classes.checkedQuestion : "")
					}
				>
					{question}
				</div>
				<ArrowDown
					style={{ transform: open ? "rotate(180deg)" : "none" }}
					className={classes.arrow}
				/>
			</div>
			<div className={classes.text + " " + (open ? classes.checked : "")}>
				{answer}
			</div>
		</div>
	);
};

export default Accordion;
