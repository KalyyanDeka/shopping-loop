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
			<button
				className="pagination-item"
				onClick={() => paginate(currentPage - 1)}
				disabled={currentPage === 1}
			>
				prev
			</button>
			{pageNumbers.slice(currentPage - 1, currentPage + 6).map((number) => (
				<button
					key={number}
					className={`pagination-item ${currentPage === number && "active"} `}
					onClick={() => paginate(number)}
				>
					{number}
				</button>
			))}
			<button
				className="pagination-item"
				onClick={() => paginate(currentPage + 1)}
				disabled={currentPage === totalProducts / productsPerPage}
			>
				next
			</button>
		</div>
	);
};

export default Pagination;
