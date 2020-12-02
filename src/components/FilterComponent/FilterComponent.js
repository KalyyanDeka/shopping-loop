import React, { Fragment, useState } from "react";
import { Checkbox, Collapse } from "antd";

import "./FilterComponent.scss";

const { Panel } = Collapse;

const FilterComponents = ({ handleFilters, filterCategories }) => {
	const [checked, setChecked] = useState([]);

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
			<Fragment className="filter__category" key={index}>
				<Checkbox
					onChange={() => handleToggle(category)}
					type="checkbox"
					checked={checked.indexOf(category) === -1 ? false : true}
				/>
				<span className="filter__name">{category}</span>
			</Fragment>
		));

	return (
		<div className="filter">
			<Collapse defaultActiveKey={["0"]}>
				{/* <Panel header key="1"> */}
				{renderCheckboxLists()}
				{/* </Panel> */}
			</Collapse>
		</div>
	);
};

export default FilterComponents;
