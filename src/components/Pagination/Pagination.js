import React from "react";
import "./Pagination.scss";

const Pagination = ({
	productsPerPage,
	totalProducts,
	paginate,
	currentPage,
}) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<div id="pagination" className="pagination">
			<a
				href="#pagination"
				className="pagination-item"
				onClick={() => paginate(currentPage - 1)}
			>
				&larr;prev
			</a>
			{pageNumbers.slice(currentPage - 1, currentPage + 6).map((number) => (
				<a
					key={number}
					href="#pagination"
					className={`pagination-item ${currentPage === number && "active"} `}
					onClick={() => paginate(number)}
				>
					{number}
				</a>
			))}
			<a
				href="#pagination"
				className="pagination-item"
				onClick={() => paginate(currentPage + 1)}
			>
				next&rarr;
			</a>
		</div>
	);
};

export default Pagination;
