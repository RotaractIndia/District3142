<template>
	<div class="container">
		<div class="items">
			<h1 class="heading">Our Zones</h1>

			<details v-for="(zoneData, k) in zones" :key="k">
				<summary>
					<b>{{ zoneData.zone }}</b>
				</summary>
				<br />
				<div class="zrr-container">
					<div class="team-member" v-for="(zrr, i) in zoneData['zrr']" :key="i">
						<img class="team-photo" :src="zrr.photo" />
						<h3>{{ zrr.name }}</h3>
						<span>Zonal Rotaract Representative</span>
					</div>
				</div>
				<div class="team-member">
					<ul>
						<li v-for="(club, j) in zoneData['clubs']" :key="j">
							{{ club.name }}
							<span v-if="club.isPlatinum" class="platinum-badge"
								>Platinum</span
							>
						</li>
					</ul>
				</div>
			</details>
		</div>
	</div>
</template>

<script>
import SnehaW from "../../assets/council/Snehaw.png";
import Kingshuk from "../../assets/council/Kingshuk.png";
import Himanshu from "../../assets/council/Himanshu.png";
import Pranod from "../../assets/council/Pranod.png";
import Devashish from "../../assets/council/Dev.png";
import Amri from "../../assets/council/Amri.png";
import AishwaryaW from "../../assets/council/AishwaryaW.png";
import Hetvi from "../../assets/council/Hetvi.png";


export default {
	name: "Zones",
	data() {
		return {
			SnehaW,Kingshuk,Himanshu,Pranod,Devashish,Amri,AishwaryaW,Hetvi,

			zones: [
				{
					zone: "Zone 1",
					zrr: [
						{
							name: "Rtr. Sneha Wayare",
							photo:SnehaW,
						},
						{
							name: "Rtr. Kingshuk Mazumder",
							photo:Kingshuk,
						},
					],
					clubs: [
						{
							name: "Rotaract Club of Saraswati College of Engineering",
							isPlatinum: true,
						},
						{ name: "Rotaract Club of SIES Nerul", isPlatinum: false },
						{ name: "Rotaract Club of BVP Sunrise", isPlatinum: false },
						{
							name: "Rotaract Club of Bharati Vidyapeeth Belapur",
							isPlatinum: false,
						},
						{
							name: "Rotaract Club of Smart City Navi Mumbai",
							isPlatinum: true,
						},
						{
							name: "Rotaract Club of Navi Mumbai Hillside",
							isPlatinum: false,
						},
						{ name: "Rotaract Club of Link Town Airoli", isPlatinum: false },
						{
							name: "Rotaract Club of Navi Mumbai Industrial Area",
							isPlatinum: true,
						},
						{ name: "Rotaract Club of New Bombay", isPlatinum: true },
						{ name: "Rotaract Club of Lekarz", isPlatinum: false },
						{ name: "Rotaract Club of New Bombay Seaside", isPlatinum: true },
						{
							name: "Rotaract Club of Navi Mumbai Industrial Area",
							isPlatinum: false,
						},
						{ name: "Rotaract Club of New Bombay Seaside", isPlatinum: false },
						{
							name: "Rotaract Club of DY Patil University School of Management",
							isPlatinum: false,
						},
						{ name: "Rotaract Club of NMIMS Sunrise", isPlatinum: false },
						{
							name: "Rotaract Club of DYPSBB Satellite City",
							isPlatinum: false,
						},
						{
							name: "Rotaract Club of DY Patil College of Ayurveda",
							isPlatinum: false,
						},
						{
							name: "Rotaract Club of Navi Mumbai Bayside MGM",
							isPlatinum: false,
						},
						{ name: "Rotaract Club of Navi Mumbai Sunrise", isPlatinum: false },
						{
							name:
								"Rotaract Club of D. Y. Patil University school of pharmacy",
							isPlatinum: false,
						},
					],
				},
				{
					zone: "Zone 2",
					zrr: [
						{
							name: "Rtr. Himanshu Dapurkar",
							photo:Himanshu,
						},
						{
							name: "Rtr. Pranod Kalsekar",
							photo:Pranod,
						},
					],
					clubs: [
						{ name: "Rotaract Club of Hiranandani Estate", isPlatinum: false },
						{ name: "Rotaract Club of Thane Central", isPlatinum: false },
						{ name: "Rotaract Club of Thane Downtown", isPlatinum: true },
						{ name: "Rotaract Club of Thane East", isPlatinum: false },
						{
							name: "Rotaract Club of Anand Vishwa Gurukul",
							isPlatinum: false,
						},
						{ name: "Rotaract Club of Thane Green City", isPlatinum: false },
						{ name: "Rotaract Club of Thane Suburban", isPlatinum: false },
						{
							name: "Rotaract Club of KC College  Engineering",
							isPlatinum: false,
						},
						{ name: "Rotaract Club of Thane North", isPlatinum: false },
						{ name: "Rotaract Club of Thane North End", isPlatinum: true },
						{ name: "Rotaract Club of Thane TownWing", isPlatinum: false },
						{ name: "Rotaract Club of Thane Hills", isPlatinum: false },
						{ name: "Rotaract Club of Thane Horizon", isPlatinum: false },
						{ name: "Rotaract Club of Singhania School", isPlatinum: false },
						{ name: "Rotaract Club of Thane Premium", isPlatinum: true },
						{ name: "Rotaract Club of Thane Creekside", isPlatinum: false },
						{ name: "Rotaract Club of Thane Mid Town", isPlatinum: false },
						{ name: "Rotaract Club of Thane Lake City", isPlatinum: false },
						{
							name: "Rotaract Club of Billabong High International School",
							isPlatinum: false,
						},
						{
							name: "Rotaract Club of Premium KBP Community",
							isPlatinum: false,
						},
					],
				},
				{
					zone: "Zone 3",
					zrr: [
						{
							name: "Rtr. Devashish Mande",
							photo:Devashish,
						},
						{
							name: "Rtr. Amri Neve",
							photo:Amri,
						},
					],
					clubs: [
						{ name: "Rotaract Club of Birla", isPlatinum: true },
						{ name: "Rotaract Club of Dombivli", isPlatinum: true },
						{ name: "Rotaract Club of Dombivli East", isPlatinum: true },
						{ name: "Rotaract Club of Dombivli Suncity", isPlatinum: true },
						{ name: "Rotaract Club of Kalyan Central", isPlatinum: true },
						{ name: "Rotaract Club of Kalyan Riverside", isPlatinum: false },
						{ name: "Rotaract Club of Kalyan Diamonds", isPlatinum: false },
						{ name: "Rotaract Club of Kalyan West", isPlatinum: false },
						{
							name: "Rotaract Club of KV Pendharkar College",
							isPlatinum: false,
						},
						{
							name: "Rotaract Club of Dombivli Midtown Youth",
							isPlatinum: false,
						},
						{ name: "Rotaract Club of Dombivli Crown City", isPlatinum: false },
						{ name: "Rotaract Club of Dombivli Regency ", isPlatinum: false },
					],
				},
				{
					zone: "Zone 4",
					zrr: [
						{
							name: "Rtr. Aishwarya Warke",
							photo:AishwaryaW,
						},
						{
							name: "Rtr. Hetvi Dedhia",
							photo:Hetvi,
						},
					],
					clubs: [
						{ name: "Rotaract Club of Ambernath", isPlatinum: true },
						{ name: "Rotaract Club of Ambernath East", isPlatinum: false },
						{ name: "Rotaract Club of Ambernath North", isPlatinum: false },
						{ name: "Rotaract Club of Badlapur", isPlatinum: false },
						{
							name: "Rotaract Club of Badlapur Industrial Area",
							isPlatinum: false,
						},
						{
							name: "Rotaract Club of Bharat College Badlapur",
							isPlatinum: false,
						},
						{ name: "Rotaract Club of MIM college", isPlatinum: false },
						{
							name: "Rotaract Club of Ulhasnagar Sapna Garden",
							isPlatinum: true,
						},
						{
							name: "Rotaract Club of Chandibai Himatmal Mansukhani College",
							isPlatinum: false,
						},
						{
							name: "Rotaract Club of Ambernath Smart City",
							isPlatinum: false,
						},
						{ name: "Rotaract Club of Ulhasnagar", isPlatinum: false },
					],
				},
			],
		};
	},
};
</script>

<style scoped>
.platinum-badge {
	font-size: 12px !important;
	padding: 6px 9px;
	background: linear-gradient(to bottom, #e5e4e2 0%, #d6d5d3 100%);
	border-radius: 15px;
	letter-spacing: 1px !important;
}

/* Team Member CSS 
===========================*/
.summary {
	font-size: 20px;
}
h1.team-h1 {
	margin: 0;
	position: absolute;
	top: -16px;
	text-align: center;
	left: 40%;
	font-family: georgia;
	font-style: italic;
	background-color: white;
	padding: 0px 20px;
	color: #222;
}

.cf:before,
.cf:after {
	content: " "; /* 1 */
	display: table; /* 2 */
}

.cf:after {
	clear: both;
}

/**
 * For IE 6/7 only
 * Include this rule to trigger hasLayout and contain floats.
 */
.cf {
	*zoom: 1;
}

.team-container {
	max-width: 1000px;
	margin: auto;
	border-top: 1px #e9e9e9 solid;
	border-bottom: 1px #e9e9e9 solid;
	padding-top: 5em;
	padding-bottom: 5em;
	margin-top: 3em;
	position: relative;
}

.team-member {
	float: left;
	text-align: center;
	margin-right: 2rem;
}

.team-member ul {
	list-style-type: none;
}

.team-member ul li {
	display: flex;
	gap: 1rem;
	text-align: left;
	padding: 8px;
}

.Black-border[data-v-e38b2810] {
    border-color: #000000 !important;
}

.Blue-border[data-v-e38b2810] {
    border-color: #029aff !important;
}

.Green-border[data-v-e38b2810] {
    border-color: #02eb3c !important;
}

.Yellow-border[data-v-e38b2810] {
    border-color: #e0e404 !important;
}

.team-member:last-child {
	margin-right: 0;
}

.team-member span,
.team-member h3 {
	/* max-width: 200px; */
	font-family: Roboto, sans-serif;
	letter-spacing: -1px;
	font-size: 18px;
}

.team-member h3 {
	margin-top: 8px;
	color: #000000;
	font-family: "Roboto", sans-serif;
	font-size: 20px;
}

.email {
	color: #ea2678;
}

.team-member span {
	display: block;
}
.team-photo {
	border-radius: 50%;
	text-align: center;
	margin: auto;
	width: 200px;
	object-fit: cover;
	height: 200px;
	transition: 0.1s transform ease-in-out;
}

.team-photo:hover {
	transform: scale(0.9);
	cursor: pointer;
}

/* code for phone layout */
@media (max-width: 850px) {
	.team-member {
		/* width: 25%; */
		margin-left: 4%;
		margin-right: 4%;
		margin-bottom: 40px;
	}
}

@media (max-width: 650px) {
	.team-member {
		float: none;
		display: block;
		margin: 50px auto;
		width: 100%;
		text-align: center;
	}

	.team-member h3,
	.team-member span {
		margin: 15px auto;
	}
}

/* ENDS Team Member CSS 
===========================*/
.container-team {
	display: flex;
	width: 100%;
	padding: 50px;
}

.image-team {
	padding-top: 50px;
	width: 100%;
	padding-right: 55px;
	float: left;
}

h1 {
	text-align: center;
	text-transform: uppercase;
	font-family: "FairPlayDisplay" !important;
	font-weight: 600;
}

.items {
	display: flex;
	flex-direction: column;
	padding-bottom: 25px;
	font-size: 20px;
}

details,
summary {
	width: 100%;
	padding-top: 20px;
	font-family: "Roboto", sans-serif;
}

summary {
	border-top: 2px solid rgba(51, 51, 51, 0.39);
}

@media (max-width: 900px) {
	.container {
		display: flex;
		flex-direction: column;
		/* height: 600px; */
	}
	.image {
		display: none;
	}
}

hr {
	height: 15px;
	width: 25%;
}
.body_wrapper {
	margin-left: 19%;
	margin-right: 10%;
	display: flex;
	padding: 20px;
}
.body_inner_left_holder {
	width: 33.333%;
	padding-right: 60px;
	padding-top: 10px;
}
.body_inner_left {
	width: 100%;
}
.body_inner_right {
	display: flex;
	width: 55%;
	justify-content: flex-start;
	float: right;
}
.heading {
	padding: 35px;
	font-family: FairPlayDisplay;
	margin-left: 1rem;
	font-weight: 900;
	font-size: 2.25rem;
	text-transform: uppercase;
	letter-spacing: 0.1ch;
	line-height: 1;
	padding-bottom: 0.5em;
	margin-bottom: 1rem;
	position: relative;
	text-align: center;
}
@import "https://fonts.googleapis.com/css?family=Raleway:400,300,200,500,600,700";
.fa-spin-fast {
	-webkit-animation: fa-spin-fast 0.2s infinite linear;
	animation: fa-spin-fast 0.2s infinite linear;
}
@-webkit-keyframes fa-spin-fast {
	0% {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
	}
	100% {
		-webkit-transform: rotate(359deg);
		transform: rotate(359deg);
	}
}
@keyframes fa-spin-fast {
	0% {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
	}
	100% {
		-webkit-transform: rotate(359deg);
		transform: rotate(359deg);
	}
}
</style>
<style scoped>
@media (min-width: 768px) and (max-width: 1024px) {
  .zrr-container{
    display: flex;
    justify-content: space-evenly;
  }
  .team-member{
    margin-left: 0;
  }
}
@media screen and (max-width: 425px) {
	.heading {
		margin: 2rem;
		padding: 0;
		font-size: 2rem;
	}
	.team-member {
		margin: 20px auto;
	}
	ul {
		padding-left: 0;
	}
	li {
		font-size: 14px;
    align-items: center;
	}
	.platinum-badge {
		margin: 0 !important;
		padding: 3px 10px;
	}
}
</style>
