import React from "react";
import "./Navbar.scss";

const Navbar = () => {
	return (
		<header className="l-header">
			<nav className="nav bd-grid">
				<div className="nav__toggle" id="nav-toggle">
					<ion-icon name="reorder-two-outline"></ion-icon>
				</div>
				<div>
					<a href="/" className="nav__logo">
						LOGO
					</a>
				</div>

				<div className="nav__menu" id="nav-menu">
					<ul className="nav__list">
						<li className="nav__item">
							<a href="/" className="nav__link">
								Men
							</a>
						</li>
						<li className="nav__item">
							<a href="/" className="nav__link">
								Women
							</a>
						</li>
						<li className="nav__item">
							<a href="/" className="nav__link">
								Kids
							</a>
						</li>

						<li className="nav__item">
							<a href="/" className="nav__link">
								Home
							</a>
						</li>

						<li className="nav__item">
							<a href="/" className="nav__link">
								Offers
							</a>
						</li>
					</ul>
				</div>
				<div className="nav__icon-cart">
					<ion-icon name="cart-outline"></ion-icon>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
