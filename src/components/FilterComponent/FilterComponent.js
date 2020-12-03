import React, { Fragment, useState } from "react";

import "./FilterComponent.scss";

const FilterComponents = ({ handleFilters, filterCategories }) => {
	const [checked, setChecked] = useState([]);
	const [showFilters, setShowFilters] = useState(false)

	const handleToggle = (category) => {
		const currentIndex = checked.indexOf(category);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(category);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
		handleFilters(newChecked);
	};

	const renderCheckboxLists = () =>
		filterCategories.map((category, index) => (
			<Fragment key={index}>
				<nobr>
					<input
						className="checkbox__input"
						onChange={() => handleToggle(category)}
						type="checkbox"
						checked={checked.indexOf(category) === -1 ? false : true}
					/>
					<span className="checkboxes__name">{category}</span>
				</nobr>
			</Fragment>
		));

		const toggleFilters = () => {
			setShowFilters(!showFilters)
		}

	return (
		<div className="checkboxes">
			<button  onClick={toggleFilters} className="checkboxes__button">Apply filters &darr;</button>{" "}
			{showFilters && renderCheckboxLists()}
		</div>
	);
};

export default FilterComponents;
