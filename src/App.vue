<template>
	<div id="app">
		<div></div>
		<!-- <Navbar /> -->
		<VueNavigationBar :options="navbarOptions" />
		<router-view />
		<Footer />
	</div>
</template>

<script>
import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faFacebook,
	faTwitter,
	faInstagram,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueNavigationBar from "vue-navigation-bar";

library.add(faFacebook, faTwitter, faInstagram, faLinkedin, faEnvelope);
Vue.component("font-awesome-icon", FontAwesomeIcon);

export default {
	name: "App",
	components: { VueNavigationBar },
	data() {
		return {
			navbarOptions: {
				elementId: "main-navbar",
				isUsingVueRouter: true,
				mobileBreakpoint: 992,
				brandImagePath: "/home",
				brandImage: require("./assets/img/DistrictlogoB.png"),
				brandImageAltText: "rotaract-image",
				collapseButtonOpenColor: "#661c23",
				collapseButtonCloseColor: "#661c23",
				showBrandImageInMobilePopup: true,
				ariaLabelMainNav: "Main Navigation",
				tooltipAnimationType: "shift-away",
				tooltipPlacement: "bottom",
				menuOptionsRight: [
					{
						type: "link",
						text: "Home",
						path: "/home",
					},
					{
						type: "link",
						text: "About us",
						// arrowColor: "#659CC8",
						subMenuOptions: [
							{
								type: "link",
								text: "Who we are",
								// subText: "Know about us!!!",
								path: "/about-us",
							},
							{
								type: "link",
								text: "Team 2022-23",
								// subText: "Know our team...!!",
								path: "/team",
								arrowColor: "#659CC8",
							},
							{
								type: "link",
								text: "Zonal Bifurcation",
								// subText: "Find a club near you!",
								path: "/zones",
							},
							{
								type: "link",
								text: "FAQ",
								// subText: "Let us clear your doubts",
								path: "/faq",
							},
						],
					},
					// {
					// 	type: "link",
					// 	text: "Club Projects",
					// 	path: "/projects",
					// },
					{
						type: "link",
						text: "For Members",
						subMenuOptions: [
							// {
							// 	type: "link",
							// 	text: "Rotopreneur",
							// 	path: "/rotopreneur",
							// },
							{
								type: "link",
								text: "Pranali",
								path: "/pranali",
							},
							{
								type: "link",
								text: "Resources",
								path: "/toolkit",
							},
							{
								type: "link",
								text: "Blog",
								path: "/blog",
							}
						],
					},
					{
						type: "link",
						text: "Contact Us",
						path: "/contact"
					},
				],
			},
		};
	},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap");

body {
	font-family: "Roboto", sans-serif !important;
	background-image: url("https://github.com/Chinmay2911/User-Details-System-Task/blob/main/body-bg.png?raw=true");
}
h1 h2 h3 h4 h5 h6 {
	font-family: "Playfair Display", sans-serif !important;
}
</style>
<style>
/* vue-navigation-bar */
.vnb {
	background: #fff;
	/* padding-top: 15px;
	padding-bottom: 15px; */
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
}
.vnb * {
	box-sizing: border-box;
}
.vnb a {
	text-decoration: none;
}
.tippy-tooltip {
	padding: 0;
}
.vnb-image {
	max-width: 100%;
	height: auto;
}

/*# sourceMappingURL=vue-navigation-bar.vue.map */
.vnb__brand-image-wrapper {
	/* padding-left: 10px; */
}
.vnb__brand-image-wrapper__link__image {
	max-height: 80px;
}
.vnb-image {
	max-width: 100%;
	height: auto;
}

/*# sourceMappingURL=BrandImage.vue.map */
.vnb__menu-options {
	display: flex;
	flex-direction: row;
	align-items: center;
}
.vnb__menu-options--left {
	/* margin-right: auto;
	justify-content: flex-start;
	padding-left: 30px; */
}
.vnb__menu-options--right {
	/* margin-left: auto; */
	justify-content: flex-end;
	padding-right: 10px;
}
.vnb__menu-options__option:not(:last-child) {
	margin-right: 2.2rem;
}

/*# sourceMappingURL=MenuOptions.vue.map */
.vnb__collapse-button {
	cursor: pointer;
	border: 0;
	background: transparent;
	margin-right: 10px;
}
.vnb__collapse-button:hover {
	opacity: 0.75;
}
.vnb__collapse-button__image {
	max-height: 30px;
	max-width: 30px;
}

/*# sourceMappingURL=CollapseButton.vue.map */
.vnb__popup {
	background: #fff;
	position: absolute;
	left: 10px;
	top: 10px;
	right: 10px;
	display: flex;
	flex-direction: column;
	perspective: 2000px;
	box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.1);
	margin-bottom: 20px;
	z-index: 100000;
}
.vnb__popup__top {
	padding: 15px 24px 0;
	border-top: 1px solid #e0e0e0;
	border-left: 1px solid #e0e0e0;
	border-right: 1px solid #e0e0e0;
	border-top-right-radius: 6px;
	border-top-left-radius: 6px;
}
.vnb__popup__top__image {
	max-height: 50px;
	/* margin-bottom: 5px; */
}
.vnb__popup__top__close-button {
	position: absolute;
	top: 10px;
	right: 10px;
	cursor: pointer;
	border: 0;
	background: transparent;
}
.vnb__popup__top__close-button:hover {
	opacity: 0.75;
}
.vnb__popup__top__close-button__image {
	max-height: 15px;
	width: 15px;
	height: 15px;
}
.vnb__popup__bottom {
	background: #fff;
	padding: 10px 0 10px;
	border-left: 1px solid #e0e0e0;
	border-right: 1px solid #e0e0e0;
	border-bottom: 1px solid #e0e0e0;
	border-bottom-right-radius: 6px;
	border-bottom-left-radius: 6px;
}
.vnb__popup__bottom__custom-section {
	padding: 12px 24px;
}
.vnb__popup__bottom__menu-options {
	list-style-type: none;
	padding-left: 0;
	display: flex;
	flex-direction: column;
}
.vnb__popup__bottom__menu-options__option:not(:last-child) {
	margin-bottom: 10px;
}
.vnb__popup__bottom__menu-options__option__link {
	padding: 12px 24px;
	color: #595959;
	font-weight: 500;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	transition: color 0.2s ease-in, background 0.2s ease-in, border 0.2s ease-in;
	border-left: 2px solid #fff;
	width: 100%;
}
.vnb__popup__bottom__menu-options__option__link:hover {
	color: #333;
	text-decoration: none;
	background: #f3f3f3;
	border-left: 2px solid #007aff;
}
.vnb__popup__bottom__menu-options__option__link--no-highlight {
	padding: 12px 24px 6px;
	font-weight: 400;
	font-size: 0.8rem;
	color: #757575;
}
.vnb__popup__bottom__menu-options__option__link--no-highlight:hover {
	color: #757575;
	background: #fff;
	border-left: 2px solid #fff;
}
.vnb__popup__bottom__menu-options__option__link__icon svg {
	max-height: 16px;
	max-width: 16px;
}
.vnb__popup__bottom__menu-options__option__link__icon--left {
	margin-right: 5px;
}
.vnb__popup__bottom__menu-options__option__link__icon--right {
	margin-left: 5px;
}
.vnb__popup__bottom__sub-menu-options {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	font-size: 0.9rem;
}
.vnb__popup__bottom__sub-menu-options__option {
	width: 100%;
}
.vnb__popup__bottom__sub-menu-options__option__link {
	padding: 6px 24px;
	width: 100%;
	display: block;
	color: #595959;
	font-weight: 500;
	transition: color 0.2s ease-in, background 0.2s ease-in, border 0.2s ease-in;
	border-left: 2px solid #fff;
}
.vnb__popup__bottom__sub-menu-options__option__link:hover {
	color: #333;
	text-decoration: none;
	background: #eee;
	border-left: 2px solid #333;
}
.vnb__popup__bottom__sub-menu-options__option__link__sub-text {
	margin-top: 5px;
	display: block;
	font-size: 0.75rem;
	color: #8c8c8c;
}
.vnb-image {
	max-width: 80%;
	height: auto;
    margin: 10px 0;
}

/*# sourceMappingURL=Popup.vue.map */
.vnb__menu-options__option__button {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	font-weight: 400;
	color: #fff;
	text-align: center;
	vertical-align: middle;
	user-select: none;
	font-size: 0.9rem;
	line-height: 1;
	border-radius: 0.25rem;
	text-transform: uppercase;
	letter-spacing: 1px;
	padding: 0.5rem 1rem;
	transition: background 0.2s ease-in;
}
.vnb__menu-options__option__button__icon svg {
	max-height: 16px;
	max-width: 16px;
}
.vnb__menu-options__option__button__icon--left {
	margin-right: 5px;
}
.vnb__menu-options__option__button__icon--right {
	margin-left: 5px;
}
.vnb-button {
	background: #d91b5c;
}
.vnb-button:hover {
	color: #fff;
	background: #d91b5c;
	text-decoration: none;
}

/*# sourceMappingURL=DesktopMenuItemButton.vue.map */
.vnb__menu-options__option__spacer {
	width: 30px;
}

/*# sourceMappingURL=DesktopMenuItemSpacer.vue.map */
.vnb__menu-options__option__link {
	cursor: pointer;
	font-weight: 500;
	color: #595959;
	transition: color 0.2s ease-in;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	font-size: 1.1rem;
}
.vnb__menu-options__option__link:hover {
	color: #333;
	text-decoration: none;
}
.vnb__menu-options__option__link__icon svg {
	max-height: 20px;
}
.vnb__menu-options__option__link__icon--left {
	margin-right: 5px;
}
.vnb__menu-options__option__link__icon--right {
	margin-left: 5px;
}
.vnb__menu-options__option__arrow {
	max-height: 5px;
	max-width: 25px;
	transition: transform 0.2s ease-in-out;
}
.vnb__menu-options__option__arrow--hover {
	transform: rotate(180deg);
}
.vnb__sub-menu-options {
	background: #fff;
	max-width: 500px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 4px;
	padding: 10px 0;
}
.vnb__sub-menu-options__option {
	min-width: 250px;
	max-width: 300px;
}
.vnb__sub-menu-options__option__link {
	padding: 12px 12px;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	color: #595959;
	transition: color 0.2s ease-in, background 0.2s ease-in, border 0.2s ease-in;
	border-left: 2px solid #fff;
}
.vnb__sub-menu-options__option__link:hover {
	color: #333;
	text-decoration: none;
	background: #f3f3f3;
	border-left: 2px solid #d91b5c;
	cursor: pointer;
}
.vnb__sub-menu-options__option__link__icon svg {
	max-height: 40px;
}
.vnb__sub-menu-options__option__link__icon--left {
	margin-right: 15px;
}
.vnb__sub-menu-options__option__link__icon--right {
	margin-left: 15px;
}
.vnb__sub-menu-options__option__link__text-wrapper {
	width: 100%;
}
.vnb__sub-menu-options__option__link__text-wrapper__text {
	display: block;
	text-align: left;
}
.vnb__sub-menu-options__option__link__text-wrapper__sub-text {
	margin-top: 5px;
	display: block;
	font-size: 0.8rem;
	text-align: left;
	color: #8c8c8c;
}
.vnb__sub-menu-options__option__hr {
	margin-top: 10px;
	margin-bottom: 10px;
	border-color: rgba(0, 0, 0, 0.1);
}

/*# sourceMappingURL=DesktopMenuItemLink.vue.map */
.tippy-box[data-animation="perspective"][data-placement^="top"] {
	transform-origin: bottom;
}
.tippy-box[data-animation="perspective"][data-placement^="top"][data-state="visible"] {
	transform: perspective(700px);
}
.tippy-box[data-animation="perspective"][data-placement^="top"][data-state="hidden"] {
	transform: perspective(700px) translateY(8px) rotateX(60deg);
}
.tippy-box[data-animation="perspective"][data-placement^="bottom"] {
	transform-origin: top;
}
.tippy-box[data-animation="perspective"][data-placement^="bottom"][data-state="visible"] {
	transform: perspective(700px);
}
.tippy-box[data-animation="perspective"][data-placement^="bottom"][data-state="hidden"] {
	transform: perspective(700px) translateY(-8px) rotateX(-60deg);
}
.tippy-box[data-animation="perspective"][data-placement^="left"] {
	transform-origin: right;
}
.tippy-box[data-animation="perspective"][data-placement^="left"][data-state="visible"] {
	transform: perspective(700px);
}
.tippy-box[data-animation="perspective"][data-placement^="left"][data-state="hidden"] {
	transform: perspective(700px) translateX(8px) rotateY(-60deg);
}
.tippy-box[data-animation="perspective"][data-placement^="right"] {
	transform-origin: left;
}
.tippy-box[data-animation="perspective"][data-placement^="right"][data-state="visible"] {
	transform: perspective(700px);
}
.tippy-box[data-animation="perspective"][data-placement^="right"][data-state="hidden"] {
	transform: perspective(700px) translateX(-8px) rotateY(60deg);
}
.tippy-box[data-animation="perspective"][data-state="hidden"] {
	opacity: 0;
}
.tippy-box[data-animation="shift-away"][data-state="hidden"] {
	opacity: 0;
}
.tippy-box[data-animation="shift-away"][data-state="hidden"][data-placement^="top"] {
	transform: translateY(10px);
}
.tippy-box[data-animation="shift-away"][data-state="hidden"][data-placement^="bottom"] {
	transform: translateY(-10px);
}
.tippy-box[data-animation="shift-away"][data-state="hidden"][data-placement^="left"] {
	transform: translateX(10px);
}
.tippy-box[data-animation="shift-away"][data-state="hidden"][data-placement^="right"] {
	transform: translateX(-10px);
}
.tippy-box[data-animation="shift-toward"][data-state="hidden"] {
	opacity: 0;
}
.tippy-box[data-animation="shift-toward"][data-state="hidden"][data-placement^="top"] {
	transform: translateY(-10px);
}
.tippy-box[data-animation="shift-toward"][data-state="hidden"][data-placement^="bottom"] {
	transform: translateY(10px);
}
.tippy-box[data-animation="shift-toward"][data-state="hidden"][data-placement^="left"] {
	transform: translateX(-10px);
}
.tippy-box[data-animation="shift-toward"][data-state="hidden"][data-placement^="right"] {
	transform: translateX(10px);
}
.tippy-box[data-animation="scale"][data-placement^="top"] {
	transform-origin: bottom;
}
.tippy-box[data-animation="scale"][data-placement^="bottom"] {
	transform-origin: top;
}
.tippy-box[data-animation="scale"][data-placement^="left"] {
	transform-origin: right;
}
.tippy-box[data-animation="scale"][data-placement^="right"] {
	transform-origin: left;
}
.tippy-box[data-animation="scale"][data-state="hidden"] {
	transform: scale(0.5);
	opacity: 0;
}
.tippy-box[data-theme~="light"] {
	color: #26323d;
	box-shadow: 0 0 20px 4px rgba(154, 161, 177, 0.15),
		0 4px 80px -8px rgba(36, 40, 47, 0.25),
		0 4px 4px -2px rgba(91, 94, 105, 0.15);
	background-color: #fff;
}
.tippy-box[data-theme~="light"][data-placement^="top"] > .tippy-arrow:before {
	border-top-color: #fff;
}
.tippy-box[data-theme~="light"][data-placement^="bottom"]
	> .tippy-arrow:before {
	border-bottom-color: #fff;
}
.tippy-box[data-theme~="light"][data-placement^="left"] > .tippy-arrow:before {
	border-left-color: #fff;
}
.tippy-box[data-theme~="light"][data-placement^="right"] > .tippy-arrow:before {
	border-right-color: #fff;
}
.tippy-box[data-theme~="light"] > .tippy-backdrop {
	background-color: #fff;
}
.tippy-box[data-theme~="light"] > .tippy-svg-arrow {
	fill: #fff;
}
@media (max-width: 992px) {
	.vnb {
		justify-content: space-between;
	}
}
</style>
