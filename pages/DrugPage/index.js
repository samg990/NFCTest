import React from "react";
import Header from "../../components//Header/Header";
import Footer from "../../components/Footer/Footer";
import DrugInfoComponent from "../../components/DrugInfo/DrugInfo";
import styles from "./DrugPage.module.css";

const DrugInfo = () => {
	return (
		<div className={styles.container}>
			<Header />
			<DrugInfoComponent
				className={styles.main}
				title="Vitamin D3"
				info="Vitamin D3, also known as cholecalciferol, is an essential nutrient that plays a crucial role in maintaining overall health. It is a fat-soluble vitamin that is primarily obtained through sunlight exposure, dietary intake, and supplementation. This article will provide information on the purpose of Vitamin D3, recommended doses, potential side effects, and guidelines for taking it."
				whatFor="Vitamin D3 plays a vital role in numerous bodily functions, including:

        1.Bone health: It facilitates calcium absorption, which is necessary for maintaining strong bones and teeth.
        2.Immune system support: Vitamin D3 contributes to the proper functioning of the immune system, helping the body fight off infections and diseases.
        3.Muscle function: It plays a role in maintaining healthy muscle function and strength.
        4.Mood regulation: Vitamin D3 is believed to help regulate mood and may play a role in preventing depression.
        5.Cardiovascular health: It may contribute to maintaining a healthy heart and blood vessels, reducing the risk of cardiovascular diseases."
				dose="The recommended daily allowances (RDAs) for Vitamin D3 vary according to age, sex, and life stage:

        1..Infants (0-12 months): 400 IU (10 mcg)
        2..Children (1-18 years): 600 IU (15 mcg)
        3..Adults (19-70 years): 600-800 IU (15-20 mcg)
        4..Older adults (71+ years): 800 IU (20 mcg)
        5..Pregnant and breastfeeding women: 600-800 IU (15-20 mcg)
        It is important to consult a healthcare professional to determine the appropriate dose based on individual needs and health conditions."
				sideEffects="Vitamin D3 is generally considered safe when taken in recommended amounts. However, excessive intake can lead to side effects, including:

        1..Hypercalcemia: High levels of calcium in the blood, causing symptoms like nausea, vomiting, constipation, and fatigue.
        2..Kidney stones: Excess calcium can contribute to the formation of kidney stones.
        3..Kidney damage: Prolonged high doses of Vitamin D3 may cause kidney damage or failure.
        4..Heart problems: Excessive Vitamin D3 may increase the risk of heart problems, such as irregular heartbeat or heart attack."
			/>
			<Footer />
		</div>
	);
};

export default DrugInfo;
