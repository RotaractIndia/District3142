<template>
  <div class="navbar-component">
    <div class="navbar area">
      <router-link to="home" class="logo"
        ><img src="../assets/img/DistrictlogoB.png" alt=""
      /></router-link>
      <ul class="menu">
        <li>
          <router-link class="main-menu" to="home">Home</router-link>
        </li>

        <li @mouseover="listTwo = true" @mouseleave="listTwo = false">
          <a class="main-menu" >About us</a>
          <transition name="fade">
            <ul v-if="listTwo" @click="listTwo = false" class="menu2">
              <li class="sub-menu"><router-link to="about">Who we are</router-link></li>
              <li class="sub-menu"><router-link to="team">Team 2021-22</router-link></li>
              <li class="sub-menu"><router-link to="zones">Zonal Bifurcation</router-link></li>
              <li class="sub-menu"><router-link to="faq">FAQ</router-link></li>
            </ul>
          </transition>
        </li>

        <li @mouseover="listThree = true" @mouseleave="listThree = false">
          <router-link to="/projects" class="main-menu">Our Projects</router-link>

          <transition name="fade">
            <ul v-if="listThree" @click="listThree = false">
              <li class="sub-menu"><router-link to="/">Community Service</router-link></li>
              <li class="sub-menu"><router-link to="/">Club Service</router-link></li>
              <li class="sub-menu"><router-link to="/">Career & Skills</router-link></li>
              <li class="sub-menu"><router-link to="/">Going Global</router-link></li>
              <li class="sub-menu"><router-link to="/">Sports</router-link></li>
            </ul>
          </transition>
        </li>

        <li @mouseover="listFour = true" @mouseleave="listFour = false">
          <a href="#" class="main-menu">For Members</a>

          <transition name="fade">
            <ul v-if="listFour" @click="listFour = false" class="menu2">
              <li class="sub-menu"><a href="https://rotaract3142.org/desk" target="_blank">Pranali</a></li>
              <li class="sub-menu"><a href="/" target="_blank">Resources</a></li>
              <li class="sub-menu"><a href="https://rotaract3142.org/blog" target="_blank">Blog</a></li>
            </ul>
          </transition>
        </li>

        <li>
          <router-link to="contact" class="main-menu">Contact Us</router-link>
        </li>
      </ul>

      <!-- mobile navbar here -->
      
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      listTwo:   false,
      listThree: false,
      listFour:  false,
    }
  }
};
</script>

<style scoped>
.menu {
  font-weight: 600;
  margin: 0;
  list-style: none;
}

.menu a {
  display: block;
  padding: 25px;
  color: #838383;
  text-decoration: none;
}

.menu li {
  display: block;
  float: left;
  position: relative;
  background:transparent;
  color: #838383;
  min-width: 150px;
}

.main-menu:hover {
  color: #101113;
}

.menu2{
  font-size: 14px;
}
/* 
.menu2{
  display: block;
  float: left;
  position: relative;
  background:transparent;
  color: darkgray;
  min-width: 150px;
} */

.menu li ul {
  z-index: 99999;
  position: absolute;
  left: 0;
  top: 76px;
  margin: 0;
  padding: 0;
}

.menu li ul li {
  background: #FCFCFC;
  transition: background 0.2s;
}

/* 
.menu li ul li:hover {
  background: #101113;
} */

.sub-menu a{
  padding: 10px;
}

.sub-menu a:hover{
  color: #101113;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}

nav {
  display: flex;
  align-items: center;
  justify-content: center;
}
nav .menu-item {
  color: #777;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
}
nav .menu-item.active,
nav .menu-item:hover {
  border-bottom-color: black;
}
nav .menu-item a {
  color: inherit;
  text-decoration: none;
}

.logo img {
  height: 100px;
  width: auto;
  padding-bottom: 15px;
}
*,
*:before,
*:after {
  box-sizing: border-box;
}
body {
  background-color: #fcfcfc;
  color: #838383;
  font-size: 14px;
  font-family: Roboto, sans-serif !important;
  line-height: 20px;
}
a {
  text-decoration: none;
  transition: all 0.3s linear 0s;
}
.area {
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
  margin-left: auto;
  margin-right: auto;
}
@media (min-width: 768px) {
  .area {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .area {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .area {
    width: 1140px;
  }
}
.navbar-component {
  background-color: #fcfcfc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16), 0 2px 10px rgba(0, 0, 0, 0.12);
  height: 85px !important;
}
.navbar-component > .navbar {
  justify-content: space-between;
}
.navbar > .brand {
  display: block;
  font-size: 16px;
  color: #777;
  margin: 22px;
}
.navbar > .toggle {
  outline: none;
  border: 0;
  display: inline-block;
  background-color: transparent;
  background-image: none;
  vertical-align: middle;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  touch-action: manipulation;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 22px;
}
@media (min-width: 768px) {
  .navbar > .toggle {
    display: none;
  }
}
.navbar > .toggle > .icon {
  position: relative;
  margin-top: 8px;
  margin-bottom: 8px;
}

.navbar > .toggle > .icon:before,
.navbar > .toggle > .icon:after {
  position: absolute;
  content: "";
}
.navbar > .toggle > .icon:before {
  top: -8px;
}
.navbar > .toggle > .icon:after {
  top: 8px;
}
.navbar > .toggle.-active > .icon {
  background-color: transparent;
}
.navbar > .toggle.-active > .icon:before {
  transform: translateY(8px) rotate(45deg);
}
.navbar > .toggle.-active > .icon:after {
  transform: translateY(-8px) rotate(-45deg);
}
.navbar > .list {
  display: none;
  flex-flow: row nowrap;
  align-items: center;
  white-space: nowrap;
  margin: 0px 0px 10px 0px;
}
@media (min-width: 768px) {
  .navbar > .list {
    display: flex;
  }
}
@media (max-width: 768px) {
  .navbar > .list {
    position: fixed;
    top: 64px;
    left: 0;
    width: 100%;
    overflow-y: hidden;
    overflow-x: auto;
    border-top: 1px solid #ddd;
    background-color: #fff;
  }
}
.navbar > .list.-on {
  display: flex;
}
.navbar > .list > .item {
  display: block;
  flex-shrink: 0;
  height: 64px;
  font-weight: bold;
  font-size: 15px;
  line-height: 64px;
  padding-left: 22px;
  padding-right: 22px;
  text-transform: uppercase;
  color: #838383;
}
.navbar > .list > .item.-link {
  color: #838383;
  border-bottom: 4px solid transparent;
}
.navbar > .list > .item.-link.-active,
.navbar > .list > .item.-link:hover,
.navbar > .list > .item.-link:focus {
  color: #333;
  border-bottom-color: black;
}
</style>