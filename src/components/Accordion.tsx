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
				<div className={classes.title}>{question}</div>
				<ArrowDown
					style={{ transform: open ? "rotate(180deg)" : "none" }}
					className={classes.arrow}
				/>
			</div>
			<div
				className={classes.text}
				style={{
					maxHeight: open ? "500px" : "0",
					transition: open
						? "max-height 0.2s ease-in, margin 0.2s, opacity 0.2s"
						: "max-height 0.2s ease-out, margin 0.2s, opacity 0.2s",
					marginTop: open ? "10px" : "0",
					opacity: open ? "1" : "0",
				}}
			>
				{answer}
			</div>
		</div>
	);
};

export default Accordion;
