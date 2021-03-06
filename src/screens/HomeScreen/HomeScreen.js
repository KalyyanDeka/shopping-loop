import React, { Fragment, useState, useEffect } from "react";
import "./HomeScreen.scss";

import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../store/actions/productActions";

// components
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import ProductCards from "../../components/ProductCards/ProductCards";
import Pagination from "../../components/Pagination/Pagination";
import FilterComponent from "../../components/FilterComponent/FilterComponent";

const HomeScreen = () => {
	const dispatch = useDispatch();

	const [currentPage, setCurrentPage] = useState(1);
	const [filters, setFilters] = useState([]);

	let productsPerPage = 8;

	const productList = useSelector((state) => state.productList);
	const { loading, products } = productList;

	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch]);

	// Store product categories
	const categories = products.map((item) => item.category);

	const filterCategories = [...new Set(categories)];

	const handleFilters = (category) => {
		setFilters(category);
	};

	// filter products
	const filteredProducts = products.filter((product) => {
		if (!filters.length) {
			return product;
		} else if (filters.indexOf(product.category) !== -1) {
			return product;
		} else return false;
	});

	// Get current products
	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

	const currentProducts = products.slice(
		indexOfFirstProduct,
		indexOfLastProduct
	);

	// Change page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<Fragment>
			<Navbar />
			<Banner />

			<main style={{ marginTop: "80px" }}>
				<h3 className="section__intro">
					Shop from our wide range of products!
				</h3>

				<FilterComponent
					handleFilters={(category) => handleFilters(category)}
					filterCategories={filterCategories}
				/>
				<ProductCards
					loading={loading}
					currentProducts={!filters.length ? currentProducts : filteredProducts}
				/>

				{!filters.length && (
					<Pagination
						productsPerPage={productsPerPage}
						totalProducts={products.length}
						paginate={paginate}
						currentPage={currentPage}
					/>
				)}
			</main>
		</Fragment>
	);
};

export default HomeScreen;
