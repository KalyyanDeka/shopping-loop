import React, { Fragment, useState, useEffect } from "react";
import "./HomeScreen.scss";

import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../store/actions/productActions";

import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import ProductCards from "../../components/ProductCards/ProductCards";
import Pagination from "../../components/Pagination/Pagination";

const HomeScreen = () => {
	const dispatch = useDispatch();

	const [currentPage, setCurrentPage] = useState(1);

	let productsPerPage = 8;

	const productList = useSelector((state) => state.productList);
	const { loading, error, products } = productList;

	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch]);

	// Get current posts
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

				<ProductCards loading={loading} currentProducts={currentProducts} />
				<Pagination
					productsPerPage={productsPerPage}
					totalProducts={products.length}
					paginate={paginate}
					currentPage={currentPage}
				/>
			</main>
		</Fragment>
	);
};

export default HomeScreen;
