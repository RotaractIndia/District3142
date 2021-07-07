<template>
	<div>
		<section id="contact" class="contact section-bg">
			<div class="container" data-aos="fade-up">
				<div class="row">
					<div class="col-lg-6 col-md-6 contact-image">
						<img
							src="../../assets/img/contact_Image.png"
							alt=""
						/>
					</div>

					<div class="col-lg-6 col-md-6" >
						<div class="inner contact">
							<!-- Form Area -->
							<div class="contact-form">
								<h2 class="heading">Contact Us</h2>
								<br />
								<!-- Form -->
								<form id="contact-us" method="post" action="#">
									<!-- Left Inputs -->
									<div
										class="col-xs-6 wow animated slideInLeft"
										data-wow-delay=".5s"
									>
										<!-- Name -->
										<input
											type="text"
											name="name"
											id="name"
											required="required"
											class="form"
											placeholder="Name"
										/>
										<!-- Email -->
										<input
											type="email"
											name="mail"
											id="mail"
											required="required"
											class="form"
											placeholder="Email"
										/>
										<!-- Subject -->
										<!-- <input type="select" name="subject" id="subject" required="required" class="form" placeholder="Subject" /> -->
										<select name="subject" id="subject" class="form">
											<option
												value="I want to know more about your organisation"
												>I want to know more about your organisation</option
											>
											<option
												value="I want to know more about a particular project"
												>I want to know more about a particular project</option
											>
											<option
												value="Which Rotaract Clubs are around me and how do I join?"
												>Which Rotaract Clubs are around me and how do I
												join?</option
											>
										</select>
									</div>
									<!-- End Left Inputs -->
									<!-- Right Inputs -->
									<div
										class="col-xs-6 wow animated slideInRight"
										data-wow-delay=".5s"
									>
										<!-- Message -->
										<textarea
											name="message"
											id="message"
											class="form textarea"
											placeholder="Message"
										></textarea>
									</div>
									<!-- End Right Inputs -->
									<!-- Bottom Submit -->
									<div class="relative fullwidth col-xs-12">
										<!-- Send Button -->
										<button
											type="submit"
											id="submit"
											name="submit"
											class="form-btn semibold"
										>
											Send Message
										</button>
									</div>
									<!-- End Bottom Submit -->
									<!-- Clear -->
									<div class="clear"></div>
								</form>

								<!-- Your Mail Message -->
								<div class="mail-message-area">
									<!-- Message -->
									<div class="alert gray-bg mail-message not-visible-message">
										<strong>Thank You !</strong> Your email has been delivered.
									</div>
								</div>
							</div>
							<!-- End Contact Form Area -->
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- <section class="contact-page-section">
      <div class="container">
          <div class="sec-title">
              <div class="title">Contact Us</div>
            </div>
            <div class="inner-container">
              <div class="row clearfix">
                -Info Column-
                    <div class="info-column col-md-4 col-sm-12 col-xs-12">
                      <div class="inner-column">
                          <h2>Contact Info</h2> <hr><br>
                            <ul class="list-info">
                              <li><i class="fa fa-map-marker"></i>123 lorem ispum Abc, Street Chandigarh.</li>
                                <li><i class="fa fa-envelope"></i>example@test</li>
                                <li><i class="fa fa-phone"></i>1-234-567-890 <br> 1-234-567-890</li>
                            </ul>
                            <ul class="social-icon-four">
                                <li class="follow">Follow on: </li>
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                  -Form Column-
                    <div class="form-column col-md-8 col-sm-12 col-xs-12">
                      <div class="inner-column">
                          
                            -Contact Form-
                            <div class="contact-form">
                                <form method="post" action="sendemail.php" id="contact-form">
                                    <div class="row clearfix">
                                        <div class="form-group col-md-6 col-sm-6 co-xs-12">
                                            <input type="text" name="name" value="" placeholder="Name" required>
                                        </div>
                                        <div class="form-group col-md-6 col-sm-6 co-xs-12">
                                            <input type="email" name="email" value="" placeholder="Email" required>
                                        </div>
                                        <div class="form-group col-md-6 col-sm-6 co-xs-12">
                                            <input type="text" name="subject" value="" placeholder="Subject" required>
                                        </div>
                                        <div class="form-group col-md-6 col-sm-6 co-xs-12">
                                            <input type="text" name="phone" value="" placeholder="Phone" required>
                                        </div>
                                        <div class="form-group col-md-12 col-sm-12 co-xs-12">
                                          <ul class="list">
                                            <li class="list__item">
                                              <input type="radio" class="radio-btn" name="choice" id="a-opt" />
                                              <label for="a-opt" class="label">I want to know more about Rotaract Organization</label>
                                            </li>
                                            
                                            <li class="list__item">
                                              <input type="radio" class="radio-btn" name="choice" id="b-opt" />
                                              <label for="b-opt" class="label">I want to know more about particular project</label>
                                            </li>
                                            
                                            <li class="list__item">
                                              <input type="radio" class="radio-btn" name="choice" id="c-opt" />
                                              <label for="c-opt" class="label">Which Rotaract Clubs are near me and how do I join?</label>
                                            </li>
                                            
                                            <li class="list__item">
                                              <input type="radio" class="radio-btn" name="choice" id="d-opt" />
                                              <label for="d-opt" class="label">Other</label>
                                            </li>
                                          </ul>

                                            <textarea name="message" placeholder="Massage"></textarea>
                                        </div>
                                        <div class="form-group col-md-12 col-sm-12 co-xs-12">
                                            <button type="submit" class="theme-btn btn-style-one">Send Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            -End Contact Form-
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> -->
	</div>
</template>

<script>
export default {
	name: "Contact",
};
</script>

<style scoped>
.heading {
	padding: 15px;
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
#contact {
	padding: 10px 0 10px;
}

.contact-text {
	margin: 45px auto;
}

.mail-message-area {
	width: 100%;
	padding: 0 15px;
}

.mail-message {
	width: 100%;
	background: rgba(255, 255, 255, 0.8) !important;
	-webkit-transition: all 0.7s;
	-moz-transition: all 0.7s;
	transition: all 0.7s;
	margin: 0 auto;
	border-radius: 0;
}

.not-visible-message {
	height: 0px;
	opacity: 0;
}

.visible-message {
	height: auto;
	opacity: 1;
	margin: 25px auto 0;
}

/* Input Styles */

.form {
	width: 100%;
	padding: 15px;
	background: #f8f8f8;
	border: 1px solid rgba(0, 0, 0, 0.075);
	margin-bottom: 25px;
	color: #727272 !important;
	font-size: 13px;
	-webkit-transition: all 0.4s;
	-moz-transition: all 0.4s;
	transition: all 0.4s;
	border-radius: 15px;
}

.form:hover {
	border: 1px solid #d1d1d1;
}

.form:focus {
	color: white;
	outline: none;
	border: 1px solid #d1d1d1;
}

.textarea {
	height: 150px;
	max-height: 200px;
	max-width: 100%;
}

/* Generic Button Styles */

.button {
	padding: 8px 12px;
	display: block;
	width: 120px;
	margin: 10px 0 0px 0;
	border-radius: 3px;
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	transition: all 0.3s;
	text-align: center;
	font-size: 0.8em;
	box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
	-moz-box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
	-webkit-box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
}

.button:hover {
	color: white;
}

/* Send Button Styles */

.form-btn {
	/* width: 180px; */
	display: block;
	height: auto;
	border-radius: 5px;
	padding: 15px;
	color: #fff;
	background-color: #116ece;
	border: none;
	outline: none;
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	transition: all 0.3s;
	margin: auto;
	box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
	-moz-box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
	-webkit-box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
	float: right;
}

/* .form-btn:hover{
    background: linear-gradient(120deg, #0080ff, #027fff, #116ece, #004080);
    color: white;
    border:none;
  } */

.form-btn:active {
	opacity: 0.9;
}
center {
	margin-top: 330px;
}
input {
	position: relative;
	z-index: 99;
}
.contact .info-box {
	color: #444444;
	text-align: center;
	box-shadow: 0 0 30px rgba(214, 215, 216, 0.6);
	padding: 20px 0 30px 0;
	background: #fff;
}

.contact .info-box i {
	font-size: 32px;
	color: #5846f9;
	border-radius: 50%;
	padding: 8px;
}

.contact .info-box h3 {
	font-size: 20px;
	color: #2c4964;
	font-weight: 700;
	margin: 10px 0;
}

.contact .info-box p {
	padding: 0;
	line-height: 24px;
	font-size: 14px;
	margin-bottom: 0;
}

.contact .php-email-form {
	box-shadow: 0 0 30px rgba(214, 215, 216, 0.6);
	padding: 30px;
	background: #fff;
}

.contact .php-email-form .validate {
	display: none;
	color: red;
	margin: 0 0 15px 0;
	font-weight: 400;
	font-size: 13px;
}

.contact .php-email-form .error-message {
	display: none;
	color: #fff;
	background: #ed3c0d;
	text-align: left;
	padding: 15px;
	font-weight: 600;
}

.contact .php-email-form .error-message br + br {
	margin-top: 25px;
}

.contact .php-email-form .sent-message {
	display: none;
	color: #fff;
	background: #888888;
	text-align: center;
	padding: 15px;
	font-weight: 600;
}

.contact .php-email-form .loading {
	display: none;
	background: #fff;
	text-align: center;
	padding: 15px;
}

.contact .php-email-form .loading:before {
	content: "";
	display: inline-block;
	border-radius: 50%;
	width: 24px;
	height: 24px;
	margin: 0 10px -6px 0;
	border-top-color: #eee;
	-webkit-animation: animate-loading 1s linear infinite;
	animation: animate-loading 1s linear infinite;
}

.contact .php-email-form input,
.contact .php-email-form textarea {
	border-radius: 5px;
	box-shadow: none;
	font-size: 14px;
}

.contact .php-email-form input:focus,
.contact .php-email-form textarea:focus {
	border-color: #5846f9;
}

.contact .php-email-form input {
	padding: 20px 15px;
}

.contact .php-email-form textarea {
	padding: 12px 15px;
}

.contact .php-email-form button[type="submit"] {
	background: #5846f9;
	border: 0;
	padding: 10px 24px;
	color: #fff;
	transition: 0.4s;
	border-radius: 5px;
}

.contact .php-email-form button[type="submit"]:hover {
	background: #7b27d8;
}

@-webkit-keyframes animate-loading {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}

@keyframes animate-loading {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}

/* .list {
  flex: 0 0 20rem;
}

.list__item {
  position: relative;
}
.list__item:hover > .label {
  color: #009688;
}
.list__item:hover > .label::before {
  border: 0.5rem solid #009688;
  margin-right: 1.2rem;
}

.radio-btn {
  position: absolute;
  opacity: 0;
  visibility: hidden;
}
.radio-btn:checked + .label {
  color: #009688;
}
.radio-btn:checked + .label::before {
  margin-right: 1.2rem;
  border: 0.5rem solid #009688;
  background: #ffffff;
}

.label {
  display: flex;
  align-items: center;
  padding: 0.55rem 0;
  color: #00b8ca;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.25s linear;
}

.label::before {
  display: inline-block;
  content: "";
  height: 1.125rem;
  width: 1.125rem;
  margin-right: 0.625rem;
  border: 0.5rem solid #00b8ca;
  border-radius: 50%;
  transition: all 0.25s linear;
}

li,
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.sec-title {
  position: relative;
  padding-bottom: 40px;
  text-align: center;
}
.sec-title .title {
  position: relative;
  color: #00b8ca;
  font-size: 18px;
  font-weight: 700;
  padding-right: 50px;
  margin-bottom: 15px;
  display: inline-block;
  text-transform: capitalize;
}
.sec-title .title:before {
  position: absolute;
  content: "";
  right: 0;
  bottom: 7px;
  width: 40px;
  height: 1px;
  background-color: #bbb;
}
.sec-title h2 {
  position: relative;
  color: #252525;
  font-size: 36px;
  font-weight: 700;
  line-height: 1.5em;
  display: block;
}
.sec-title.light h2 {
  color: #fff;
}
.contact-page-section {
  position: relative;
  padding-top: 25px;
  padding-bottom: 25px;
}
.contact-page-section .inner-container {
  border-radius: 20px;
  position: relative;
  z-index: 1;
  background-color: #00b8ca;
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.1);
}
.contact-page-section .form-column {
  position: relative;
  padding: 0 0 0 15px;
}
.contact-page-section .form-column .inner-column {
  border-radius: 0px 20px 20px 0px;
  position: relative;
  padding: 60px 45px 30px;
  background-color: #fff;
}
.contact-page-section .info-column {
  position: relative;
}
.contact-page-section .info-column .inner-column {
  position: relative;
  padding: 60px 35px;
}
.contact-page-section .info-column h2 {
  position: relative;
  color: #fff;
  font-size: 30px;
  font-weight: 700;
  line-height: 1.4em;
  margin-bottom: 45px;
}
.contact-page-section .info-column .list-info {
  position: relative;
  margin-bottom: 60px;
}
.contact-page-section .info-column .list-info li {
  position: relative;
  margin-bottom: 25px;
  font-size: 18px;
  color: #fff;
  line-height: 1.8em;
  padding-left: 45px;
}
.contact-page-section .info-column .list-info li:last-child {
  margin-bottom: 0;
}
.contact-page-section .info-column .list-info li i {
  position: absolute;
  left: 0;
  top: 8px;
  color: #fff;
  font-size: 30px;
}
.contact-form {
  position: relative;
}
.contact-form .form-group {
  position: relative;
  margin-bottom: 20px;
}
.contact-form input[type="text"],
.contact-form input[type="email"],
.contact-form textarea {
  position: relative;
  display: block;
  width: 100%;
  height: 60px;
  color: #222;
  font-size: 14px;
  line-height: 38px;
  padding: 10px 30px;
  border: 1px solid #ddd;
  background-color: #fff;
  transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
}
.contact-form input[type="text"]:focus,
.contact-form input[type="email"]:focus,
.contact-form textarea:focus {
  border-color: #00b8ca;
}
.contact-form textarea {
  height: 100px;
  resize: none;
}
.contact-form .theme-btn {
  margin-top: 15px;
  border-radius: 35px;
  font-size: 16px;
  font-weight: 700;
  text-transform: capitalize;
  padding: 16px 39px;
  border: 2px solid #00b8ca;
  font-family: Arimo, sans-serif;
  background: #00b8ca;
  display: inline-block;
  position: relative;
  line-height: 24px;
  cursor: pointer;
  color: #fff;
}
.contact-form .theme-btn:hover {
  color: #00b8ca;
  border-color: #00b8ca;
  background: 0 0;
}
.contact-form input.error,
.contact-form select.error,
.contact-form textarea.error {
  border-color: red !important;
}
.contact-form label.error {
  display: block;
  line-height: 24px;
  padding: 5px 0 0;
  margin: 0;
  font-size: 15px;
  color: red;
  font-weight: 500;
}
.social-icon-four {
  position: relative;
}
.social-icon-four li {
  position: relative;
  margin-right: 18px;
  display: inline-block;
}
.social-icon-four li.follow {
  color: #fff;
  font-weight: 600;
  font-size: 24px;
  display: block;
  margin-bottom: 20px;
}
.social-icon-four li a {
  position: relative;
  font-size: 20px;
  color: #fff;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.social-icon-four li a:hover {
  color: #222;
} */

@media (min-width: 768px) and (max-width: 1024px) {
  .contact-image img{
    width: 100%;
    padding-top: 105px;
  }
}
@media screen and (max-width: 425px) {
	.contact-image{
		display: none;
	}
}
</style>
