import React from "react";
import styles from "./DrugInfo.module.css";

// DrugInfo Component
const DrugInfo = ({ title, info, whatFor, dose, sideEffects, howToTake }) => {
	return (
		<div className={styles.drugInfo}>
			<h2>{title}</h2>
			{/* <img src={drugImage} alt={title} /> */}
			<p>{info}</p>
			<p>{whatFor}</p>
			<p>{dose}</p>
			<p>{sideEffects}</p>
			<p>{howToTake}</p>
		</div>
	);
};

export default DrugInfo;
