<template>
  <div>
    <h1 class="heading">Testimonials</h1>
    <div class="slides"> 
      <transition-group
        name="slide"
        mode="out-in"
        enter-class="slide-in"
        leave-class="slide-out"
        enter-active-class="animated slide-in-active"
        leave-active-class="animated slide-out-active"
      >
        <div v-for="(index, k) in slides" :key="k">
            <div v-if="index == active">
               <section id="testimonials" class="testimonials">
      <div class="container" data-aos="zoom-in">

          <div class="testimonial-item">
            <h3 style="padding-right: 25px; align-text: center;">{{index.name}}</h3>
            <p>
              <i class="bx bxs-quote-alt-left quote-icon-left"></i>
              {{index.text}}
              <i class="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
          </div>

      </div>
    </section>
    
            </div>
        </div>
      </transition-group>
    </div>
    <span class="prev" @click="move(-1)">
      <i class="fa fa-chevron-left" aria-hidden="true"></i>
    </span>
    <span class="next" @click="move(1)">
      <i class="fa fa-chevron-right" aria-hidden="true"></i>
    </span>
    <ul class="dots">
      <li
        v-for="(dot, index) in slides"
        :key="index"
        :class="{ active: ++index === active }"
        @click="jump(index)"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  name:"Testimonials",
  data(){
    return{
        slides: [{
          id:1,
          text:'He this is random text',
          name:'Name Surname'
        },
        {
          id:2,
          text:'He this is Second random text',
          name:'Name Surname 2'
        },
        {
          id:3,
          text:'He this is Third random text',
          name:'Name Surname 3'
        }],
        active: 1
    }
  },
  methods: {
    move(amount) {
      console.log('amount', amount)
      //let newActive
      if (amount === 1){
        if (this.slides.length !== this.active){
          this.active+=1;
        }
        else{
          this.active=1;
        }
      }
      // const newIndex = this.active + amount
      // console.log('new index', newIndex)
      // if (newIndex > this.slides.length) newActive = 1
      // if (newIndex === 0) newActive = this.slides.length
      // console.log(this.slides.length)
      // this.active = newActive || newIndex
    },
    jump(index) {
      this.active = index
    },
  }
}
</script>

<style scoped lang="scss">

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

$primary: #221e21;

.testimonials {
  padding: 25px;
  background-position: center center;
  background-size: cover;
  position: relative;
  border: 2px solid #D91B5C;
}

.testimonials::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.testimonials .section-header {
  margin-bottom: 40px;
}

.testimonials .testimonial-item {
  display: inline-flex;
  text-align: left;
  color: #D91B5C;
}

.testimonials .testimonial-item .testimonial-img {
  width: 50px;
  border-radius: 50%;
  border: 6px solid rgba(255, 255, 255, 0.15);
  margin: 0 auto;
}

.testimonials .testimonial-item h3 {
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0 5px 0;
  color: #D91B5C;
}

.testimonials .testimonial-item h4 {
  font-size: 14px;
  color: #ddd;
  margin: 0 0 15px 0;
}

.testimonials .testimonial-item .quote-icon-left, .testimonials .testimonial-item .quote-icon-right {
  color: rgba(255, 255, 255, 0.6);
  font-size: 26px;
}

.testimonials .testimonial-item .quote-icon-left {
  display: inline-block;
  left: -5px;
  position: relative;
}

.testimonials .testimonial-item .quote-icon-right {
  display: inline-block;
  right: -5px;
  position: relative;
  top: 10px;
}

.testimonials .testimonial-item p {
  font-style: italic;
  margin: 0 auto 15px auto;
  color: #eee;
}

.testimonials .owl-nav, .testimonials .owl-dots {
  margin-top: 5px;
  text-align: center;
}

.testimonials .owl-dot {
  display: inline-block;
  margin: 0 5px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.4) !important;
}

.testimonials .owl-dot.active {
  background-color: #ffc451 !important;
}

@media (min-width: 1024px) {
  .testimonials {
    background-attachment: fixed;
  }
}

@media (min-width: 992px) {
  .testimonials .testimonial-item p {
    width: 80%;
  }
}

.prev,
.next {
    z-index: 20;
  position: absolute;
  width: 50px;
  height: 50px;
  border: 2px solid $primary;
  color: $primary;
  border-radius: 50%;
  margin-top: -145px;
  margin-left: 25px;
  cursor: pointer;
  line-height: 48px;
  text-align: center;
  text-indent: -2px;
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    background: $primary;
    color: #fff;
    transform: scale(1.2);
  }

  &:active {
    transform: translate(0, 3px) scale(1.2);
  }
}

.next {
  right: 0;
  margin-left: auto;
  margin-right: 25px;
  text-indent: 2px;
}

.dots {
  display: block;
  width: 100%;
  text-align: center;
  bottom: 20px;

  li {
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background: $primary;
    opacity: 0.2;
    display: inline-block;
    margin: 0 3px;
    cursor: pointer;
    transition: opacity 0.4s ease-in-out,
      width 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &.active {
      width: 22px;
      opacity: 1;
    }
  }
}

.slides {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-weight: bold;

  @media (min-width: 600px) {
    font-size: 25px;
  }

  @media (min-width: 900px) {
    font-size: 30px;
  }

  .animated {
    transition: all 400ms;
    position: absolute;
    transform: translate(-50%, -50%);
  }

  .slide-in {
    opacity: 0;
    transform: translate(-40%, -50%);
  }

  .slide-in-active {
    transition-delay: 150ms;
  }

  .slide-out {
    opacity: 1;
  }

  .slide-out-active {
    opacity: 0;
    transform: translate(-60%, -50%);
  }
}
</style>