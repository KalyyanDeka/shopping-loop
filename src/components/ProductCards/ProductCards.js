import React from "react";
import "./ProductCards.scss";

import Spinner from "../UI/Spinner/Spinner";

const Products = ({ currentProducts, loading }) => {
	const productCards = (
		<div id="products" className="products">
			<div className="products__container">
				{loading && <Spinner />}
				{currentProducts &&
					currentProducts.map((product, index) => (
						<div key={index} className="item">
							<img
								className="item__image"
								src={product.searchImage}
								alt="img"
								variant="top"
							/>

							<h3 className="item__heading">{product.productName}</h3>

							<h3 className="item__price">&#8377; {product.price}</h3>
						</div>
					))}
			</div>
		</div>
	);

	return productCards;
};

export default Products;
