<template>
  <div>
    <section
      id="home"
      class="d-flex align-items-center position-relative vh-100 cover hero"
    >
      <div class="container-fluid container-fluid-max">
        <div class="row">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <h1 class="text-white text">
              Be a part of our story <br />
              Be the
              <span
                class="txt-rotate"
                data-period="2000"
                data-rotate='[ "Change.", "ChangeMaker."]'
              ></span>
            </h1>
            <br />
            <div class="mt-3">
              <router-link to="contact" class="btn text-white mr-2">JOIN US</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="about-container">
      <!--about-me-text-->
      <div class="about-text">
        <h3>About Us</h3>
        <p>
          The thing which mankind is most afraid of. The thing which is the
          catalyst for evolution. The thing which cannot be finished at once and
          is inevitable. AND therefore, we call ourselves THE CHANGEMAKERS.
        </p>
      </div>
    </div>
    <!-- Card Layout -->
    <div class="container">
      <h1 class="heading">Thrust Area</h1>
      <div class="thrust-area-container">
        <a class="card" href="#!">
          <div
            class="front"
            style="background-image: url(https://i.ibb.co/YjXYb1V/thrust-One.png)"
          >
          </div>
          <div class="back">
            <div>
              <p>
                We are a part of a supremely fast paced world, while we humans have taken nature for granted for the longest time. Climate Change has become a major global challenge today and we are becoming more vulnerable to it every passing minute.  Here at RID 3142, we actively take steps towards sustainability, awareness and partnering with organisations that work for the same cause.
              </p>
            </div>
          </div></a
        >
        <a class="card" href="#!">
          <div
            class="front"
            style="background-image: url(https://i.ibb.co/Gc9ymFw/thrust-Two.png)"
          >
          </div>
          <div class="back">
            <div>
              <p>
                Rotaract District 3142 is a part of one of the largest youth organisations. Taking strides towards being a credible brand and increasing our brand value is our prime focus. We as a district scream youth, responsible, energy, fun and self- development. We welcome all brands, big or small to join us and help us create the change we wish to. Partnership is our strong suit!
              </p>
              <!-- <button class="button">Click Here</button> -->
            </div>
          </div></a
        >
        <a class="card" href="#!">
          <div
            class="front"
            style="background-image: url(https://i.ibb.co/wphZV1J/thrust-Three.png)"
          >
          </div>
          <div class="back">
            <div>
              <p>
                There is no health without mental health. Your mental health matters and we, here at RID 3142, strongly advocate for it. We, the change makers intend on breaking the stigma, continuing our work on denying the stereotypes associated with disorders and treatments. Help us make the world a safe space to talk, to seek help and empathise. 
              </p>
            </div>
          </div></a
        >
      </div>
    </div>
    <!-- merch -->
    <section id="merch" class="merch">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-6 order-1 order-lg-2"
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            <img src="../../assets/img/Merch.png" class="img-fluid" alt="" />
          </div>
          <div
            class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content_merch"
            data-aos="fade-right"
          >
            <h3>Official Merchandise of Rotaract 3142</h3>
            <p class="font-italic">
              <i><b>Ekatra is all we do!</b></i> <br>
              Come Ekatra and flaunt the feeling of proud rotaraction with our cool merchandise.<br> Shop for Rotaract District 3142’s Official Merchandise Support is very important and special to us. 
            </p>
            <a href="#" class="read-more"
              >Buy now<i class="icofont-long-arrow-right"></i
            ></a>
          </div>
        </div>
      </div>
    </section>
    <!-- Blogs -->
    <!-- <div class="container">
      <h1 class="heading">Featured Stories</h1>
      <div class="container_blog">
        <div class="card_blog">
          <div class="card-header-blog">
            <img
              src="https://s.aolcdn.com/images/dims?client=fh7w6q744eiognjk&signature=d59d0cf6af1d779a3dca451e0ba259c33bbc6115&image_uri=https%3A%2F%2Fs.aolcdn.com%2Fos%2Fab%2F_cms%2F2019%2F08%2F30142658%2F2020-jeep-wrangler-16.jpg&thumbnail=750%2C422&quality=80"
              alt=""
            />
          </div>
          <div class="card-body-blog">
            <span class="tag tag-teal">Technology</span>
            <h4>Why is the Tesla Cybertruck designed the way it is?</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur tenetur distinctio neque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              consequuntur sequi suscipit iure fuga ea!
            </p>
            <div class="user">
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
        <div class="card_blog">
          <div class="card-header-blog">
            <img
              src="https://images.cruisecritic.com/image/18740535/10-best-cruise-destinations-for-hot-air-balloon-rides_600x400_21.jpg"
              alt=""
            />
          </div>
          <div class="card-body-blog">
            <span class="tag tag-purple">Place</span>
            <h4>Hot Air Ballooning in Nepal - 1 Day</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur tenetur distinctio neque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              consequuntur sequi suscipit iure fuga ea!
            </p>
            <div class="user">
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
        <div class="card_blog">
          <div class="card-header-blog">
            <img
              src="https://dynaimage.cdn.cnn.com/cnn/q_auto,w_412,c_fill,g_auto,h_232,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200305114843-01-edge-hudson-yards-observation-deck.jpg"
              alt=""
            />
          </div>
          <div class="card-body-blog">
            <span class="tag tag-pink">Travel</span>
            <h4>New York City | Layout, People, Economy, Culture</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur tenetur distinctio neque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              consequuntur sequi suscipit iure fuga ea!
            </p>
            <div class="user">
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- Sponsors -->
    <SponsorCarousel></SponsorCarousel>
    <!-- Testimonials -->
    <!-- <Testimonials></Testimonials> -->
</div>
</template>

<script>
import SponsorCarousel from '../sections/SponsorCarousel.vue';
// import Testimonials from './sections/Testimonials.vue';

export default {
  name: "Home",
  components:{SponsorCarousel},
  mounted() {
    this.titleText();
  },
  methods: {
    titleText() {
      var TxtRotate = function (el, toRotate, period) {
        console.log("TxtRotate");
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = "";
        this.tick();
        this.isDeleting = false;
      };

      TxtRotate.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

        var that = this;
        var delta = 300 - Math.random() * 100;

        if (this.isDeleting) {
          delta /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === "") {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
        }

        setTimeout(function () {
          that.tick();
        }, delta);
      };

      window.onload = function () {
        console.log("window");
        var elements = document.getElementsByClassName("txt-rotate");
        for (var i = 0; i < elements.length; i++) {
          var toRotate = elements[i].getAttribute("data-rotate");
          var period = elements[i].getAttribute("data-period");
          if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
          }
        }
        // INJECT CSS
        // var css = document.createElement("style");
        // css.type = "text/css";
        // css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
        // document.body.appendChild(css);
      };
    },
  },
};
</script>

<!--https://www.codesdope.com/blog/article/12-creative-css-and-javascript-text-typing-animati/ -->
<style scoped>

/*Sponsors */
.merch {
  padding: 55px 0;
  background-color: rgb(238, 238, 238);
}

.merch .img {
  max-width: 100%;
  height: auto;
}

.merch .content_merch h3 {
  padding-top: 75px !important;
  padding-bottom: 25px;
  font-weight: 900;
  font-size: 55px;
  font-family: "FairPlayDisplay";
}

.merch .content_merch ul {
  list-style: none;
  padding: 0;
}

.merch p {
  padding-bottom: 25px;
}

.merch .content_merch ul li {
  padding-bottom: 10px;
}

.merch .content_merch ul i {
  font-size: 20px;
  padding-right: 4px;
  color: #5846f9;
}

.merch .content_merch p:last-child {
  margin-bottom: 0;
}

.content_merch {
  display: block;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1000px;
  padding-bottom: 25px;
}

.merch .content_merch .read-more {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 10px;
  border-radius: 5px;
  transition: 0.5s;
  color: #fff;
  text-decoration: none !important;
  background-color: #116ece;
  position: relative;
}

/* .merch .content_merch .read-more:hover {
  background: linear-gradient(120deg, #0080ff, #027fff, #116ece, #004080);
} */

.merch .content_merch .read-more i {
  font-size: 22px;
  position: absolute;
  right: 20px;
  top: 12px;
}

/*Merch ends here*/
.about-container {
  width: 65%;
  background: #ea4e73;
  background-image: linear-gradient(to bottom right, #e61b90, #e32d58, #e32a8e);
  border-radius: 6px;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
  display: flex;
  margin: -3% auto 20px auto;
  position: relative;
  justify-content: space-evenly;
  align-items: center;
}

.about-text h3 {
  font-family: PlayFairDisplay;
  font-size: 35px;
}

.about-text {
  text-align: center;
  width: 100%;
  padding: 2rem 6rem;
  color: rgb(252, 252, 252);
}
.about-text p:nth-child(1) {
  font-weight: bold;
  font-size: 35px;
}
.about-text p:nth-child(2) {
  line-height: 25px;
}
.about-text p:nth-child(3),
.about-text p:nth-child(4) {
  font-size: 16px;
}

/*About */

html {
  font-size: 18px;
  line-height: 1.5;
  font-weight: 300;
  color: #333;
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
  padding: 0;
  height: 100vh;
  background-color: #ecf0f9;
}

a{
  text-decoration: none;
  color: #fff;
}

.heading {
  padding: 35px;
  font-family: FairPlayDisplay;
  width: 100%;
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

.card {
  color: inherit;
  cursor: pointer;
  height: 400px;
  min-height: 400px;
  perspective: 1000px;
  margin: 1rem;
  position: relative;
  border: none !important;
  background-color: transparent !important;
}
@media screen and (max-width: 800px) {
  .card {
    width: calc(50% - 2rem);
  }
}
@media screen and (max-width: 500px) {
  .card {
    width: 100%;
  }
}

.thrust-area-container {
  display: grid;
  grid-template-columns: repeat(3, 330px);
  justify-content: space-evenly;
  margin-bottom: 2rem;
}

.front,
.back {
  display: flex;
  background-position: center;
  background-size: cover;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: ease-in-out 600ms;
  border-radius: 10px;
}

.front {
  background-size: cover;
  padding: 2rem;
  font-size: 1.618rem;
  font-weight: 600;
  color: transparent !important;
  overflow: hidden;
  font-family: Roboto, sans-serif;
}
.front:before {
  position: absolute;
  display: block;
  content: "";
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.25;
  z-index: -1;
}
.card:hover .front {
  transform: rotateY(-180deg);
}
.card:nth-child(even):hover .front {
  transform: rotateY(-180deg);
}

.back {
  background: #e32c6d;
  transform: rotateY(180deg);
  padding: 0 2em;
  color: #eee;
}
.back .button {
  background: linear-gradient(135deg, #1a9be6, #1a57e6);
}
.back .button:before {
  box-shadow: 0 0 10px 10px rgba(26, 87, 230, 0.25);
  background-color: rgba(26, 87, 230, 0.25);
}
.card:hover .back {
  transform: rotateY(0deg);
}
.card:nth-child(even) .back {
  transform: rotateY(180deg);
}
.card:nth-child(even) .back .button {
  background: linear-gradient(135deg, #1a9be6, #1a57e6);
}
.card:nth-child(even) .back .button:before {
  box-shadow: 0 0 10px 10px rgba(26, 87, 230, 0.25);
  background-color: rgba(26, 87, 230, 0.25);
}
.card:nth-child(even):hover .back {
  transform: rotateY(0deg);
}

.button {
  transform: translateZ(40px);
  cursor: pointer;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  font-weight: bold;
  color: #fff;
  padding: 0.5em 1em;
  border-radius: 100px;
  font: inherit;
  border: none;
  position: relative;
  transform-style: preserve-3d;
  transition: 300ms ease;
}
.button:before {
  transition: 300ms ease;
  position: absolute;
  display: block;
  content: "";
  transform: translateZ(-40px);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  height: calc(100% - 20px);
  width: calc(100% - 20px);
  border-radius: 100px;
  left: 10px;
  top: 16px;
}
.button:hover {
  transform: translateZ(55px);
}
.button:hover:before {
  transform: translateZ(-55px);
}
.button:active {
  transform: translateZ(20px);
}
.button:active:before {
  transform: translateZ(-20px);
  top: 12px;
}
/* card view*/
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");

* {
  box-sizing: border-box;
}
body {
  font-family: "Open Sans", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  margin: 0;
}
.container_blog {
  display: grid;
  grid-template-columns: repeat(3, 350px);
  justify-content: space-evenly;
  margin-bottom: 2rem;
}
.card_blog {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  background-color: #FFFAFB;
}
.card-header-blog img {
  padding: 10px;
  border-radius: 15px;
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.card-body-blog {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  min-height: 250px;
}
.tag {
  background-color: #ccc;
  color: #fff;
  border-radius: 50px;
  font-size: 12px;
  margin: 0;
  padding: 2px 10px;
  text-transform: uppercase;
}
.tag-teal {
  background-color: #92d4e4;
}
.tag-purple {
  background-color: #3d1d94;
}
.tag-pink {
  background-color: #c62bcd;
}
.card-body-blog h4 {
  margin: 10px 0;
}
.card-body-blog p {
  font-size: 14px;
  /* margin: 0 0 40px 0; */
  font-weight: 500;
  color: rgb(70, 68, 68);
}
.user {
  display: flex;
  margin-top: auto;
}

.user a{
  font-family: 'Roboto',sans-serif;
  text-decoration: none;
  color: #4e4e4e;
}
.user a:hover{
  color: black;
}

.user img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
}
.user-info h5 {
  margin: 0;
}
.user-info small {
  color: #888785;
}
@media (max-width: 940px) {
  .container_blog {
    grid-template-columns: 1fr;
    justify-items: center;
  }
}

/*Blog */
.banner_part .banner_video {
  position: absolute;
  bottom: -245px;
}
.btn {
  
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 10px;
  border-radius: 5px;
  transition: 0.5s;
  color: #fff;
  text-decoration: none !important;
  background-color: #116ece;
  position: relative;
  /* top: 558px;
  left: 145px;
  background: transparent
    linear-gradient(90deg, #0080ff 0%, #027fff 63%, #116ece 100%, #004080 100%)
    0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 7px;
  opacity: 1; */
}

btn:hover{
  background: linear-gradient(120deg, #0080ff, #027fff, #116ece, #004080);
}
span {
  background-color: #e61b90;
  color: rgb(250, 250, 250);
}

#home {
  background-image: url("../../assets/img/HeaderImg.png");
  background-size: cover;
  background-repeat: no-repeat;
  max-height: 500px;
}

.text-white {
  margin-left: 25px !important;
}

.text {
  font-size: 3em;
  font-family: "Playfair Display";
  color: #333 !important;
}

.hero {
  /* background-attachment: fixed; */
  transition: transform 0.5s ease-in-out;
}

.hero::after {
  width: 100%;
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.hero .container-fluid {
  z-index: 10;
}
</style>