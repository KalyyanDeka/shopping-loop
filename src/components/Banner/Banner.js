import React, { useEffect } from "react";
import "./Banner.scss";

import gsap, { TweenMax, Expo } from "gsap";

import home from "../../assests/img/home.jpg";

const Banner = () => {
	useEffect(() => {
		TweenMax.to(".home__primary", 2, {
			width: "100%",
			ease: Expo.easeInOut,
		});
		gsap.from(".home__title", {
			opacity: 0,
			duration: 2,
			delay: 1.5,
			y: 100,
		});
		gsap.from(".home__img img", {
			opacity: 0,
			duration: 2,
			delay: 1.5,
			y: -100,
		});

		TweenMax.to(".home__secondary", 2.5, {
			width: "100%",
			ease: Expo.easeInOut,
		});
		gsap.from(".home__scroll", { opacity: 0, duration: 3, x: -100 });
		gsap.from(".home__year", {
			opacity: -1,
			duration: 1.5,
			delay: 1.5,
			x: 100,
		});
	}, []);

	return (
		<div class="home">
			<div class="home__primary">
				<h1 class="home__title">
					Fashion Loop <br />
					Store
				</h1>

				<div class="home__img">
					<img src={home} alt="home" />
				</div>
			</div>

			<div class="home__secondary">
				<a class="home__scroll" href="#about">
					SCROLL DOWN
				</a>
				<span class="home__year">2020</span>
			</div>
		</div>
	);
};

export default Banner;
