<template>
  <div>
    <section id="about" class="about">
      <div class="container">
        <div class="row justify-content-between">
          <div
            class="
              col-lg-5
              d-flex
              align-items-center
              justify-content-center
              about-img
            "
          >
            <img
              src="../../assets/img/Aboutus_1.png"
              class="img-fluid"
              alt=""
              data-aos="zoom-in"
            />
          </div>
          <div class="col-lg-6 pt-5 pt-lg-0">
            <h1 data-aos="fade-up">Who are we?</h1>
            <br />
            <p data-aos="fade-up" data-aos-delay="100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              aute irure dolor in reprehenderit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Duis aute irure dolor in
              reprehenderit.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Duis aute irure dolor in reprehenderit.Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Duis aute irure dolor
              in reprehenderit <br /><br />
              <a href="#"><b>Read More About Rotary</b></a>
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Events -->
    <section id="about" class="about">
      <div class="container">
        <h1 class="heading">Our Flagship Initiative</h1>
        <div class="row justify-content-between">
          
          <div
            class="
              col-lg-5
              d-flex
              align-items-center
              justify-content-center
              about-img
            "
          >
            <img
              src="data:image/png;base64,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"
              class="img-fluid"
              alt=""
              data-aos="zoom-in"
            />
          </div>
          <div class="col-lg-6 pt-5 pt-lg-0">
            <h1 data-aos="fade-up">Project Daptar 960x640
              
            </h1>
            <br />
            <p data-aos="fade-up" data-aos-delay="100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              aute irure dolor in reprehenderit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Duis aute irure dolor in
              reprehenderit.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Duis aute irure dolor in reprehenderit.Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Duis aute irure dolor
              in reprehenderit    
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="about" class="about">
      <div class="container">
        <div class="row justify-content-between">
          <div
            class="
              col-lg-5
              d-flex
              align-items-center
              justify-content-center
              about-img
            "
          >
            <img
              src="https://pbs.twimg.com/media/DftpEhIV4AAUu0e.jpg"
              class="img-fluid"
              alt=""
              data-aos="zoom-in"
            />
          </div>
          <div class="col-lg-6 pt-5 pt-lg-0">
            <h1 data-aos="fade-up">Drop of Hope</h1>
            <br />
            <p data-aos="fade-up" data-aos-delay="100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              aute irure dolor in reprehenderit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Duis aute irure dolor in
              reprehenderit.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Duis aute irure dolor in reprehenderit.Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Duis aute irure dolor
              in reprehenderit
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="about" class="about">
      <div class="container">
        <div class="row justify-content-between">
          <div
            class="
              col-lg-5
              d-flex
              align-items-center
              justify-content-center
              about-img
            "
          >
            <img
              src="https://rotaract3142.kanr.is/src/assets/images/next_the_conclave.png"
              class="img-fluid"
              alt=""
              data-aos="zoom-in"
            />
          </div>
          <div class="col-lg-6 pt-5 pt-lg-0">
            <h1 data-aos="fade-up">Next: The Conclave</h1>
            <br />
            <p data-aos="fade-up" data-aos-delay="100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              aute irure dolor in reprehenderit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Duis aute irure dolor in
              reprehenderit.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Duis aute irure dolor in reprehenderit.Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Duis aute irure dolor
              in reprehenderit
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="about" class="about">
      <div class="container">
        <div class="row justify-content-between">
          <div
            class="
              col-lg-5
              d-flex
              align-items-center
              justify-content-center
              about-img
            "
          >
            <img
              src="https://i.ytimg.com/vi/TMhFTC9xbww/hqdefault.jpg"
              class="img-fluid"
              alt=""
              data-aos="zoom-in"
            />
          </div>
          <div class="col-lg-6 pt-5 pt-lg-0">
            <h1 data-aos="fade-up">Under 18 Summit</h1>
            <br />
            <p data-aos="fade-up" data-aos-delay="100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              aute irure dolor in reprehenderit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Duis aute irure dolor in
              reprehenderit.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Duis aute irure dolor in reprehenderit.Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Duis aute irure dolor
              in reprehenderit
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="about" class="about">
      <div class="container">
        <div class="row justify-content-between">
          <div
            class="
              col-lg-5
              d-flex
              align-items-center
              justify-content-center
              about-img
            "
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UODiwCNk32Jx68mzaGogWPnh2FdLS0FHir7TGr9eM1v42VPY1WavcBWJRg6R8hC_Fjs&usqp=CAU"
              class="img-fluid"
              alt=""
              data-aos="zoom-in"
            />
          </div>
          <div class="col-lg-6 pt-5 pt-lg-0">
            <h1 data-aos="fade-up">Rotaract Entertainment Destination</h1>
            <br />
            <p data-aos="fade-up" data-aos-delay="100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              aute irure dolor in reprehenderit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Duis aute irure dolor in
              reprehenderit.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Duis aute irure dolor in reprehenderit.Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Duis aute irure dolor
              in reprehenderit
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="about" class="about">
      <div class="container">
        <div class="row justify-content-between">
          <div
            class="
              col-lg-5
              d-flex
              align-items-center
              justify-content-center
              about-img
            "
          >
            <img
              src="https://rotaract3142.org/assets/rotaract3142/img/about_us.jpg"
              class="img-fluid"
              alt=""
              data-aos="zoom-in"
            />
          </div>
          <div class="col-lg-6 pt-5 pt-lg-0">
            <h1 data-aos="fade-up">Rotaract Initiative towards Sporting Excellence</h1>
            <br />
            <p data-aos="fade-up" data-aos-delay="100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              aute irure dolor in reprehenderit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Duis aute irure dolor in
              reprehenderit.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Duis aute irure dolor in reprehenderit.Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Duis aute irure dolor
              in reprehenderit
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.heading {
  font-family: FairPlayDisplay;
  margin-left: 1rem;
  font-weight: 900;
  font-size: 2.25rem;
  text-transform: uppercase;
  letter-spacing: 0.1ch;
  line-height: 1;
  padding-bottom: 2em;
  margin-bottom: 1rem;
  position: relative;
  text-align: center;
}
.card {
  padding: 125px;
  flex-direction: row;
  align-items: center;
  border: none !important;
  background-color: transparent !important;
}
.card-body{
  margin: 4rem;
}
.card-title {
  font-weight: bold;
}
.card img {
  width: 30%;
  border-top-right-radius: 0;
  border-bottom-left-radius: calc(0.25rem - 1px);
}
@media only screen and (max-width: 768px) {
  a {
    display: none;
  }
  .card-body {
    padding: 0.5em 1.2em;
  }
  .card-body .card-text {
    margin: 0;
  }
  .card img {
    width: 50%;
  }
}
@media only screen and (max-width: 1200px) {
  .card img {
    width: 40%;
  }
}
.about {
  padding: 50px 0;
}

h1 {
  font-weight: 600;
  font-size: 45px;
  color: #000000;
  font-family: "PlayFairDisplay" !important;
}

.about .content ul {
  list-style: none;
  padding: 0;
}

a {
  font-family: "Roboto";
  color: rgb(90, 90, 90) !important;
  font-size: 18px;
}
a:hover {
  font-family: "Roboto";
  color: #000000 !important;
  font-size: 18px;
}

.about-img img{
  height: 300px;
  width: 400px;
  object-fit: contain;
}
</style>
