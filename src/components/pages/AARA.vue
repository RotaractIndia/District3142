<template>
  <div>
    <div class="mob-message">
      For best user experience view this link on a desktop/laptop.
    </div>
    <div class="parentbody">
      <div class="district-logo">
        <img src="/assets/rotaract3142/img/assembly/rid3142.png" />
      </div>
      <div class="assembly-logo">
        <img src="/assets/rotaract3142/img/assembly/main-logo.png" />
      </div>
      <div class="aara-heist-logo">
        <img src="/assets/rotaract3142/img/assembly/aara-heist-logo.png" />
      </div>
      <div class="button-4 chat-live">
        <div class="eff-4"></div>
        <a href="#"> Live Chat! </a>
      </div>
      <div class="wingImage wingImage-left"></div>
      <div class="marquee marquee-left active-class">
        <div class="marquee-scroll">
          <h2>Support Rotary :</h2>
          <p>Rotary Club of Thane North End</p>
          <p></p>
          <p></p>
          <h2>Platinum host clubs :</h2>
          <h2>Rotaract Club of</h2>
          <p>Dombivli</p>
          <p>Kalyan West</p>
          <p>Kalyan Riverside</p>
          <p>New Bombay Seaside</p>
          <p>Saraswati College</p>
          <p>Smart City Navi Mumbai</p>
          <p>SIES (Nerul)</p>
          <p>Thane Downtown</p>
          <p>Thane North End</p>
          <p>Ulhasnagar Sapna Garden</p>
        </div>
      </div>
      <iframe
        class="mainScreen"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen=""
        src="https://www.youtube.com/embed/XfJWUDYAyks?autoplay=1&loop=1&rel=0&showinfo=0"
        frameborder="0"
      ></iframe>
      <div class="chatBox">
        <i class="fa fa-times close" aria-hidden="true"></i
        ><iframe
          class="chatBoxFrame"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen=""
          data-src="https://www.youtube.com/embed/XfJWUDYAyks?autoplay=1&loop=1&rel=0&showinfo=0"
          src="https://www.youtube.com/live_chat?v=XfJWUDYAyks&amp;embed_domain=rotaract3142.org"
          frameborder="0"
        ></iframe>
      </div>
      <div class="marquee marquee-right active-class">
        <div class="marquee-scroll">
          <h2>Support Rotary :</h2>
          <p>Rotary Club of Thane North End</p>
          <p></p>
          <p></p>
          <h2>Platinum host clubs :</h2>
          <h2>Rotaract Club of</h2>
          <p>Dombivli</p>
          <p>Kalyan West</p>
          <p>Kalyan Riverside</p>
          <p>New Bombay Seaside</p>
          <p>Saraswati College</p>
          <p>Smart City Navi Mumbai</p>
          <p>SIES (Nerul)</p>
          <p>Thane Downtown</p>
          <p>Thane North End</p>
          <p>Ulhasnagar Sapna Garden</p>
        </div>
      </div>
      <div class="wingImage wingImage-right"></div>
      <div class="sponsors-main-body">
        <div class="sponsor-heading">Sponsors for Assembly and AARA 2020</div>
        <div class="outer">
          <div class="inner">
            <label>Back</label>
          </div>
        </div>
        <div class="sponsor-subheading">Rotary Partner :</div>
        <div class="sponsor-body sponsor-body-1">
          <div class="sponsor-block sponsor-block-16">
            <div>Rotary Club of Thane North End</div>
          </div>
        </div>
        <div class="sponsor-subheading">Other Partners :</div>
        <div class="sponsor-body sponsor-body-2">
          <div class="sponsor-block sponsor-block-1">
            <div>Event Partner : Amit and Vaibhav</div>
          </div>
          <div class="sponsor-block sponsor-block-2">
            <div>Video Partner : Sahil and Annsh</div>
          </div>
          <div class="sponsor-block sponsor-block-3">
            <div>Website Partner : BDA Bhavesh Joshi</div>
          </div>
          <div class="sponsor-block sponsor-block-4">
            <div>Voucher Partner : Sumit Jain</div>
          </div>
          <div class="sponsor-block sponsor-block-5">
            <div>Studio Partner</div>
          </div>
        </div>
        <div class="sponsor-subheading">Other Sponsors :</div>
        <div class="sponsor-body sponsor-body-3">
          <div class="sponsor-block sponsor-block-6">
            <div>Stockart</div>
          </div>
          <div class="sponsor-block sponsor-block-7">
            <div>Anantam</div>
          </div>
          <div class="sponsor-block sponsor-block-8">
            <div>Gurudev Farsan</div>
          </div>
          <div class="sponsor-block sponsor-block-10">
            <div>Lalit Gold</div>
          </div>
          <!-- <div class="sponsor-block sponsor-block-15"></div>
			<div class="sponsor-block sponsor-block-9"></div>
			<div class="sponsor-block sponsor-block-11"></div>
			<div class="sponsor-block sponsor-block-12"></div>
			<div class="sponsor-block sponsor-block-13"></div>
			<div class="sponsor-block sponsor-block-14"></div> -->
        </div>
      </div>
      <div class="sponsor-container">
        <div class="chevron"></div>
        <div class="chevron"></div>
        <div class="chevron"></div>
        <span class="text">Sponsors</span>
      </div>
    </div>
    <div class="video--event-bg"></div>
    <video autoplay muted loop id="myVideo">
      <source
        src="/assets/rotaract3142/img/assembly/assembly-event.mp4"
        type="video/mp4"
      />
    </video>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
    name:"aaraDemo",
    mounted(){
        $(document).ready(function () {
		$('.chat-live').on('click', function () {
			$('.chatBox').addClass('active-class');
		});
		$('.fa-times.close').on('click', function () {
			$('.chatBox').removeClass('active-class');
		});
		$('.login--yes').on('click', function () {
			$('.login--overlay').fadeOut();
		});
		$('.sponsor-container').on('click', function () {
			$('.sponsors-main-body').addClass('show-them');
			$('.sponsor-container').addClass('show-them');
		});
		$('.outer').on('click', function () {
			$('.sponsors-main-body').removeClass('show-them');
			$('.sponsor-container').removeClass('show-them');
		});
		setInterval(this.changeWings, 60000);
	});
    }, 
    methods:{
        changeWings() {
		$('.marquee, .wingImage').toggleClass('active-class');
	}
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800');
	@import url('https://fonts.googleapis.com/css?family=Raleway:300,900,100,600,400,500,800');

	.copy-right-area,
	.web-footer,
	.navbar {
		display: none;
	}

	.parentbody {
		width: 100vw;
		height: 100vh;
		background: rgb(199, 112, 112);
		background-size: cover;
		background-position: 50% 20%;
		background-repeat: no-repeat;
		box-sizing: border-box;
		margin: 0;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;
	}

	#myVideo {
		position: fixed;
		right: 0;
		bottom: 0;
		min-width: 100%;
		min-height: 100%;
	}

	.video--event-bg {
		position: fixed;
		right: 0;
		bottom: 0;
		min-width: 100%;
		min-height: 100%;
		background-image: url(/assets/rotaract3142/img/assembly/event-bg-main.png);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: 50% 50%;

	}

	.login--overlay {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 999999;
		background-color: rgba(0, 0, 0, 0.8);
	}

	.login--modal {
		background-color: #fff;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		padding: 20px 30px;
		border-radius: 3px;
		box-shadow: 0 1px 12px 0 rgba(0, 0, 0, .2);
	}

	.login--modal-text {
		font-size: 24px;
		text-align: center;
		color: #333;
	}

	.login--yes,
	.login--no {
		width: 150px;
		border-radius: 2px;
		font-size: 18px;
		cursor: pointer;
		text-align: center;
		background: #5e64ff;
		padding: 10px 12px;
		box-sizing: border-box;
		height: 40px;
		margin: 0 10px 0;
		color: #fff;
	}

	.login--yes {
		background: #888;
	}

	.login--yes:hover,
	.login--no:hover {
		text-decoration: none !important;
		background: rgb(255, 30, 88) !important;
		color: #fff !important;
		transition: 0.3s all;
	}

	.login--page-buttons {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-moz-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
		-webkit-justify-content: flex-end;
		justify-content: flex-end;
		margin: 30px 0 0;
	}

	.district-logo {
		position: absolute;
		top: 50px;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.district-logo img {
		width: 180px;
	}

	.assembly-logo {
		position: absolute;
		bottom: 20px;
		left: 0px;
	}

	.assembly-logo img {
		width: 180px;
	}

	.aara-heist-logo {
		position: absolute;
		bottom: -40px;
		right: 30px;
	}

	.aara-heist-logo img {
		width: 170px;
	}

	.flip-clock {
		display: none !important;
	}

	div {
		display: inline-block;
		line-height: 1;
		text-align: center;
	}

	.mainScreen {
		position: absolute;
		left: calc(50vw - 350px);
		top: calc(50vh - 210px);
		width: 700px;
		height: 400px;
		border-radius: 5px;
	}

	/* define the animation */
	@-webkit-keyframes marquee {
		0% {
			-webkit-transform: translate(0, 0);
		}

		100% {
			-webkit-transform: translate(0%, -100%);
		}
	}

	@-moz-keyframes marquee {
		0% {
			transform: translate(0, 0);
		}

		100% {
			transform: translate(0, -100%);
		}
	}

	/* define your limiting container */
	.marquee {
		border: solid 2px;
		overflow: hidden;
		box-sizing: border-box;
		width: 220px;
		position: absolute;
		height: 400px;
		border: transparent;
		top: calc(50vh - 210px);
		opacity: 0;
		transition: 0.4s all;
		background: rgba(0, 0, 0, 0.6);
	}

	.wingImage {
		overflow: hidden;
		box-sizing: border-box;
		width: 220px;
		position: absolute;
		height: 300px;
		top: calc(50vh - 155px);
		background-repeat: no-repeat;
		background-size: contain;
		background-position: 50% 50%;
		opacity: 0;
		transition: 0.4s all;
	}

	.wingImage.active-class,
	.marquee.active-class {
		opacity: 1;
	}

	.wingImage-right,
	.marquee-right {
		left: calc(50vw + 350px);
	}

	.wingImage-right {
		background-image: url(/assets/rotaract3142/img/assembly/amit-wing-bg.png);
	}

	.wingImage-left,
	.marquee-left {
		left: calc(50vw - 570px);
	}

	.wingImage-left {
		background-image: url(/assets/rotaract3142/img/assembly/niki-wing-bg.png);
	}

	/* this is the tray moving around your container */
	.marquee .marquee-scroll {
		display: inline-block;
		padding: 400px 0 0;
		text-indent: 0;
		animation: marquee 20s linear infinite;
		/* here you select the animation */
		-webkit-animation: marquee 30s linear infinite;
		/* here you select the animation */
	}

	.marquee .marquee-scroll h2 {
		color: #fff;
		text-transform: capitalize;
		font-size: 18px;
	}

	.marquee .marquee-scroll p {
		color: #fff;
		text-transform: capitalize;
		font-size: 14px;
	}

	/* pause the animation on mouse over
	.marquee .marquee-scroll:hover {
		animation-play-state: paused;
		-webkit-animation-play-state: paused;
	} */
	.sponsor-container {
		position: fixed;
		right: 50%;
		bottom: 60px;
		cursor: pointer;
	}

	.sponsor-container.show-them {
		display: none;
	}

	.chevron {
		position: absolute;
		width: 28px;
		height: 8px;
		opacity: 0;
		transform: scale3d(0.5, 0.5, 0.5);
		animation: move 3s ease-out infinite;
	}

	.chevron:first-child {
		animation: move 3s ease-out 1s infinite;
	}

	.chevron:nth-child(2) {
		animation: move 3s ease-out 2s infinite;
	}

	.chevron:before,
	.chevron:after {
		content: ' ';
		position: absolute;
		top: 0;
		height: 100%;
		width: 51%;
		background: #fff;
	}

	.chevron:before {
		left: 0;
		transform: skew(0deg, 30deg);
	}

	.chevron:after {
		right: 0;
		width: 50%;
		transform: skew(0deg, -30deg);
	}

	@keyframes move {
		25% {
			opacity: 1;

		}

		33% {
			opacity: 1;
			transform: translateY(30px);
		}

		67% {
			opacity: 1;
			transform: translateY(40px);
		}

		100% {
			opacity: 0;
			transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
		}
	}

	.text {
		display: block;
		margin-left: 20px;
		font-family: "Helvetica Neue", "Helvetica", Arial, sans-serif;
		font-size: 12px;
		color: #fff;
		text-transform: uppercase;
		white-space: nowrap;
		opacity: .25;
		animation: pulse 2s linear alternate infinite;
	}

	@keyframes pulse {
		to {
			opacity: 1;
		}
	}

	.sponsors-main-body {
		position: fixed;
		width: 100vw;
		height: 100vh;
		background-color: #fff;
		left: 0;
		top: 100%;
		transition: 0.8s all;
		padding: 20px;
		overflow: auto;
		z-index: 99999;
	}

	.sponsor-block:hover {

		transform: scale(1.1);
	}

	.sponsors-main-body.show-them {
		top: 0;
	}

	.sponsor-heading {
		margin: 20px 0 0px;
		font-size: 32px;
		font-weight: 900;
		font-family: "Helvetica Neue", "Helvetica", Arial, sans-serif;
	}

	.sponsor-subheading {
		width: 1000px;
		margin: 30px auto 10px;
		font-size: 18px;
		font-weight: 600;
		font-family: "Helvetica Neue", "Helvetica", Arial, sans-serif;
	}

	.outer {
		position: absolute;
		margin: auto;
		width: 70px;
		cursor: pointer;
		top: 20px;
		right: 20px;
	}

	.inner {
		width: inherit;
		text-align: center;
	}

	.inner label {
		font-size: .8em;
		line-height: 4em;
		text-transform: uppercase;
		color: #000;
		transition: all .3s ease-in;
		opacity: 0;
		cursor: pointer;
		width: 100%;
		margin: 0;
	}

	.inner:before,
	.inner:after {
		position: absolute;
		content: '';
		height: 1px;
		width: inherit;
		background: #000;
		left: 0;
		transition: all .3s ease-in;
	}

	.inner:before {
		top: 50%;
		transform: rotate(45deg);
	}

	.inner:after {
		bottom: 50%;
		transform: rotate(-45deg);
	}

	.outer:hover label {
		opacity: 1;
	}

	.outer:hover .inner:before,
	.outer:hover .inner:after {
		transform: rotate(0);
	}

	.outer:hover .inner:before {
		top: 0;
	}

	.outer:hover .inner:after {
		bottom: 0;
	}

	.fa-times.close {
		position: absolute;
		font-size: 21px;
		right: -9px;
		top: -12px;
		background: rgba(255, 255, 255, 0.8);
		padding: 2px 5px;
		border-radius: 50%;
		cursor: pointer;
		transition: 0.3s all;
	}

	.fa-times.close:hover {
		background: rgba(255, 255, 255, 1);
	}

	.button-4 {
		width: 140px;
		height: 50px;
		border: 2px solid #fff;
		background-color: #fff;
		float: left;
		text-align: center;
		cursor: pointer;
		position: relative;
		box-sizing: border-box;
		overflow: hidden;
		margin: 0 0 40px 50px;
		position: absolute;
		right: 30px;
		top: 30px;
	}

	.button-4 a {
		font-family: arial;
		font-size: 16px;
		color: #34495e;
		text-decoration: none;
		line-height: 50px;
		transition: all .5s ease;
		z-index: 2;
		position: relative;
	}

	.eff-4 {
		width: 140px;
		height: 50px;
		left: -140px;
		background: #34495e;
		position: absolute;
		transition: all .5s ease;
		z-index: 1;
	}

	.button-4:hover .eff-4 {
		left: 0;
	}

	.button-4:hover a {
		color: #fff;
	}

	.button-4 a:hover {
		color: #fff !important;
	}

	.sponsor-body {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-moz-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
		flex-wrap: wrap;
		width: 1200px;
		margin: 0 auto;
		justify-content: space-evenly;
	}

	.sponsor-body-3 {
		width: 900px;
	}

	.sponsor-block {
		width: calc(20% - 40px);
		height: 90px;
		background-repeat: no-repeat;
		background-position: 50% 50%;
		background-size: contain;
		margin: 0px 20px 20px;
		position: relative;
		transition: 0.3s transform ease-in;
		cursor: pointer;
	}

	.sponsor-block>div {
		width: 100%;
		text-align: center;
		position: absolute;
		left: 0;
		bottom: -20px;
		font-size: 11px;
	}

	.sponsor-block-1 {
		background-image: url(/assets/rotaract3142/img/assembly/sponsor-logos/aaiba.png);
		background-size: 120px;
	}

	.sponsor-block-2 {
		background-image: url(/assets/rotaract3142/img/assembly/sponsor-logos/animatedly.png);
		background-size: 170px;
	}

	.sponsor-block-3 {
		background-image: url(/assets/rotaract3142/img/assembly/sponsor-logos/scrapenext.png);
	}

	.sponsor-block-4 {
		background-image: url(/assets/rotaract3142/img/assembly/sponsor-logos/trision-new.png);
		background-size: 160px;
	}

	.sponsor-block-5 {
		background-image: url(/assets/rotaract3142/img/assembly/sponsor-logos/pixelworld.jpg);
		background-size: 90px;
	}

	.sponsor-block-6 {
		background-image: url(/assets/rotaract3142/img/assembly/sponsor-logos/stoxkart.jpeg);
		background-size: 150px;
	}

	.sponsor-block-7 {
		background-image: url(/assets/rotaract3142/img/assembly/sponsor-logos/anantam.png);
		background-size: 180px;
	}

	.sponsor-block-8 {
		background-image: url(/assets/rotaract3142/img/assembly/sponsor-logos/gurudev-farsan.jpg);
		background-size: 160px;
	}

	.sponsor-block-9 {
		background-image: url(/assets/rotaract3142/img/assembly/sponsor-logos/rcd.png);
		background-size: 175px;
	}

	.sponsor-block-10 {
		background-image: url(/assets/rotaract3142/img/assembly/sponsor-logos/rckalyanriverside.jpg);
		background-size: 160px;
	}

	.sponsor-block-11 {
		background-image: url(/assets/rotaract3142/img/assembly/sponsor-logos/rcnbs.png);
		background-size: 195px;
	}

	.sponsor-block-12 {
		background-image: url(/assets/rotaract3142/img/assembly/sponsor-logos/rcsaraswati.png);
		background-size: 105px;
	}

	.sponsor-block-13 {
		background-image: url(/assets/rotaract3142/img/assembly/sponsor-logos/rcsiesn.png);
		background-size: 85px;
	}

	.sponsor-block-14 {
		background-image: url(/assets/rotaract3142/img/assembly/sponsor-logos/rcsmartcity.png);
		background-size: 150px;
	}

	.sponsor-block-15 {
		background-image: url(/assets/rotaract3142/img/assembly/sponsor-logos/rctne-new.png);
		background-size: 180px;
	}

	.sponsor-block-16 {
		background-image: url(/assets/rotaract3142/img/assembly/sponsor-logos/rotarytne.jpg);
	}

	.mob-message {
		position: fixed;
		top: 0;
		width: 100%;
		text-align: center;
		left: 0;
		background: #fff;
		z-index: 99999999;
		display: none;
	}

	.chatBox {
		position: fixed;
		right: 30px;
		z-index: 999;
		width: 400px;
		height: 400px;
		top: -400px;
		border-radius: 3px;
		border: 2px solid #fff;
		transition: 0.3s all;
	}

	.chatBox.active-class {
		top: 90px;
	}

	.chatBoxFrame {
		width: 100%;
		height: 100%;
	}

	@media screen and (max-width: 960px) {

		.login--yes,
		.login--no {
			font-size: 14px;
			margin: 0 5px;
			height: 36px;
		}

		.login--modal {

			width: 300px;
			top: 35%;
			padding: 20px 15px;
		}

		.login--modal-text {
			font-size: 18px;
		}

	}

	@media screen and (max-width: 900px) {
		.button-4 {
			right: 50%;
			top: 555px;
			transform: translate(50%);
		}

		.chatBox {
			width: 95%;
			height: 300px;
			transform: translate(50%);
			right: 50%;
		}

		.marquee .marquee-scroll {
			padding: 150px 0 0;
		}

		.mob-message {
			display: block;
		}

		.mainScreen {
			width: 95%;
			height: 300px;
			top: 250px;
			left: 50%;
			transform: translate(-50%);
		}

		.assembly-logo {
			left: 0;
			top: 613px;
			bottom: auto;
		}

		.aara-heist-logo {
			top: 560px;
			right: 0;
			bottom: auto;
		}

		.wingImage-left {
			top: 100px;
			left: 0;
			height: 130px;
			transform: none;
			width: 150px;
		}

		.wingImage-right {
			top: 100px;
			right: 0;
			height: 130px;
			transform: none;
			width: 150px;
			left: auto;
		}

		.marquee-right {
			display: none;
		}

		.marquee-left {
			top: 100px;
			left: 50%;
			height: 130px;
			width: 300px;
			transform: translate(-50%);
			border-radius: 5px;
		}

		.sponsor-container {
			position: absolute;
			right: calc(50% + 20px);
			bottom: auto;
			top: 720px;
			cursor: pointer;
			transform: translate(50%);
		}

		.parentbody {
			overflow: auto;
		}

		.rotaract--quarter-main {
			top: 20%;
		}

		.rotaract--carousel {
			top: 45%;
		}

		.sponsor-subheading,
		.sponsor-body {
			width: 100%;
			margin: 0 auto;
			display: block;
		}

		.sponsor-block {
			width: 150px;
			margin: 0px 10px 40px;
			position: relative;
		}

		.sponsor-block:hover {
			transform: none;
		}

		.sponsor-heading {
			font-size: 30px;
			margin: 80px 0 20px;
		}

		.sponsors-main-body {
			padding: 0 10px;
		}
	}
</style>