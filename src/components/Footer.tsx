import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
	return (
		<footer className={classes.footer}>
			<div>
				Challenge by{" "}
				<a
					href="https://www.frontendmentor.io?ref=challenge"
					target="_blank"
					rel="noreferrer"
				>
					Frontend Mentor
				</a>
				. Coded by{" "}
				<a href="https://github.com/s3rbug" target="_blank" rel="noreferrer">
					s3rbug
				</a>
				.
			</div>
		</footer>
	);
};

export default Footer;
