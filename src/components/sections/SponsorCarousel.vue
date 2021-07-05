<template>
  <div class="demo-row">
    <div class="container" id="id-sponsors">
      <div class="text-center">
        <h2 style="margin: 20px 0;" class="heading">Our Partners</h2>
      </div>
      <div id="sponsor-carousel" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <!-- <ol class="carousel-indicators">
          <li
            data-target="#carousel-example-generic"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
          <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        </ol> -->
        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
          <div class="item active">
            <div class="row">
              <div class="col-sm-3 col-xs-6">
                <div class="sponsor-feature">
                  <img
                    alt="hapkit"
                    src="../../assets/partners/hapkit.jpeg"
                  />
                </div>
              </div>
              <div class="col-sm-3 col-xs-6">
                <div class="sponsor-feature">
                  <img
                    alt="bamboo-india"
                    src="../../assets/partners/BamboIndia.jpg"
                  />
                </div>
              </div>
              <div class="col-sm-3 col-xs-6">
                <div class="sponsor-feature">
                  <img
                    alt="BH-social"
                    src="../../assets/partners/BHSocial.png"
                  />
                </div>
              </div>
              <div class="col-sm-3 col-xs-6">
                <div class="sponsor-feature">
                  <img
                    alt="wwf"
                    src="../../assets/partners/wwf.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="item">
            <div class="row">
              <div class="col-sm-3 col-xs-6">
                <div class="sponsor-feature">
                  <img
                    alt=""
                    src="https://itagroup.hs.llnwd.net/o40/csg/pse-demo/channel-incentive/logos/logo1.jpg"
                    style="width: 160px"
                  />
                </div>
              </div>
              <div class="col-sm-3 col-xs-6">
                <div class="sponsor-feature">
                  <img
                    alt=""
                    src="https://itagroup.hs.llnwd.net/o40/csg/pse-demo/channel-incentive/logos/logo2.jpg"
                    style="width: 160px"
                  />
                </div>
              </div>
              <div class="col-sm-3 col-xs-6">
                <div class="sponsor-feature">
                  <img
                    alt=""
                    src="https://itagroup.hs.llnwd.net/o40/csg/pse-demo/channel-incentive/logos/logo3.jpg"
                    style="width: 160px"
                  />
                </div>
              </div>
              <div class="col-sm-3 col-xs-6">
                <div class="sponsor-feature">
                  <img
                    alt=""
                    src="https://itagroup.hs.llnwd.net/o40/csg/pse-demo/channel-incentive/logos/logo4.jpg"
                    style="width: 160px"
                  />
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: "SponsorCarousel",
  methods: {
    carousel() {
        console.log($);
      //let sc = document.getElementById("sponsor-carousel");
      $('#sponsor-carousel').carousel({
        interval: 3000,
        cycle: true
        }); 
    },
  },
  mounted() {
    // this.carousel();
  },
};
</script>

<style scoped>
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
/*for Demo Only*/
.demo-row {
  padding: 50px 0;
}

/*Implement*/
.sponsor-feature {
  padding: 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
}
.sponsor-feature img{
  height: 250px;
  width: 250px;
  object-fit: cover;
  border: 1px solid #eee;
}

.sponsor-feature img:hover{
  box-shadow: 0 0 11px rgba(33,33,33,.2); 
}
/* #id-sponsors .carousel { */
  /* margin-bottom: 20px; */
/* } */
/* #id-sponsors .item { */
  /* padding-bottom: 20px; */
/* } */
#id-sponsors .carousel-indicators {
  bottom: -25px;
}
</style>