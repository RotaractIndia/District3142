<template>
  <div class="demo-row">
    <div class="container" id="id-sponsors">
      <div class="text-center">
        <h2 class="heading mt-5">Our Partners</h2>
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
              <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                <div class="sponsor-feature">
                   <a href="https://hapkit-sanitary-inspection.business.site/" target="_blank">
                  <img
                    alt="hapkit"
                    src="../../assets/partners/hapkit.jpeg"
                  />
                   </a>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                <div class="sponsor-feature">
                  <a href="https://www.bambooindia.com/" target="_blank">
                  <img
                    alt="bamboo-india"
                    src="../../assets/partners/BamboIndia.jpg"
                  />
                  </a>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                <div class="sponsor-feature">
                  <a href="https://www.instagram.com/betterhumanco/" target="_blank">
                  <img
                    alt="BH-social"
                    src="../../assets/partners/BHSocial.png"
                  />
                  </a>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                <div class="sponsor-feature">
                   <a href="https://www.wwfindia.org/" target="_blank">
                  <img
                    alt="wwf"
                    src="../../assets/partners/wwf.png"
                    style="background: #fff;"
                  />
                   </a>
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
  font-family: FairPlayDisplay;
  width: 100%;
  font-weight: 900;
  font-size: 2.25rem;
  /* text-transform: uppercase; 
  padding: 35px;
  padding-bottom: 0.5em;
  margin-left: 1rem;
  */
  letter-spacing: 0.1ch;
  line-height: 1;
  padding-bottom: 0.5em;
  position: relative;
  text-align: center;
  margin: 20px 0;
}
/*for Demo Only*/
.demo-row {
  padding: 30px 0;
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
@media screen and (max-width: 500px) {
  .demo-row{
    padding: 10px 0;
  }
  .heading{
    padding: 10px;
    margin:0;
  }
}

</style>