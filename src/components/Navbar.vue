<template>
  <div class="navbar-component">
    <div class="navbar area">
      <a href="#" class="logo"
        ><img src="../assets/DistrictlogoB.png" alt=""
      /></a>
      <ul class="menu">
        <li @mouseover="listOne = true" @mouseleave="listOne = false">
          <a href="#">Menu Item</a>

          <transition name="fade">
            <ul v-if="listOne" @click="listOne = false">
              <li><a href="#">Sub Menu Item</a></li>
              <li><a href="#">Sub Menu Item</a></li>
              <li><a href="#">Sub Menu Item</a></li>
            </ul>
          </transition>
        </li>

        <li @mouseover="listTwo = true" @mouseleave="listTwo = false">
          <a href="#">Menu Item</a>

          <transition name="fade">
            <ul v-if="listTwo" @click="listTwo = false">
              <li><a href="#">Sub Menu Item</a></li>
              <li><a href="#">Sub Menu Item</a></li>
              <li><a href="#">Sub Menu Item</a></li>
            </ul>
          </transition>
        </li>

        <li @mouseover="listThree = true" @mouseleave="listThree = false">
          <a href="#">Menu Item</a>

          <transition name="fade">
            <ul v-if="listThree" @click="listThree = false">
              <li><a href="#">Sub Menu Item</a></li>
              <li><a href="#">Sub Menu Item</a></li>
              <li><a href="#">Sub Menu Item</a></li>
            </ul>
          </transition>
        </li>

        <li @mouseover="listFour = true" @mouseleave="listFour = false">
          <a href="#">Menu Item</a>

          <transition name="fade">
            <ul v-if="listFour" @click="listFour = false">
              <li><a href="#">Sub Menu Item</a></li>
              <li><a href="#">Sub Menu Item</a></li>
              <li><a href="#">Sub Menu Item</a></li>
            </ul>
          </transition>
        </li>
      </ul>

      <!-- <nav>
          <div class="menu-item"><a href="#">Home</a></div>
          <div class="menu-item"><a href="#">About</a></div>
          <Dropdown title="Services" :items="services" />
          <div class="menu-item"><a href="#">Contact</a></div>
        </nav> -->
      <!-- <nav role="navigation" id="navigation" class="list">
          <a href="#" class="item -link"><router-link to="/home">Home</router-link></a>
          <a href="#" class="item -link"><router-link to="/about">About Us</router-link></a>
          <a href="#" class="item -link">Our Initiative</a>
          <a href="#" class="item -link">For Members</a>
          <Dropdown title="For Members" :items="forMembers" />
          <a href="#" class="item -link"><router-link to="/contact">Contact Us</router-link></a>
          <a href="#" class="item -link"><router-link to="/faq">FAQ</router-link></a>
        </nav>
        
        <button data-collapse data-target="#navigation" class="toggle">
          
          <span class="icon"></span>
        </button>-->
    </div>
  </div>

  <!-- <div class="navbar-component">

      <div class="navbar area">

        <a href="#" class="logo"><img src="../assets/DistrictlogoB.png" alt=""></a>

        <nav role="navigation" id="navigation" class="list">
          <a href="#" class="item -link">Home</a>
          <a href="#" class="item -link">Products</a>
          <a href="#" class="item -link">About Us</a>
          <ul class="nav-dropdown">
            <li>
              <a href="#!">Web Design</a>
            </li>
            <li>
              <a href="#!">Web Development</a>
            </li>
            <li>
              <a href="#!">Graphic Design</a>
            </li>
          </ul>
          <a href="#" class="item -link">Blog</a>
          <a href="#" class="item -link">Contact us</a>
        </nav>

        <button data-collapse data-target="#navigation" class="toggle">
          <span class="icon"></span>
        </button>
      </div>
    </div> -->
</template>

<script>
//import Dropdown from '../components/sections/Dropdown.vue';

export default {
  name: "Navbar",

  // components:{
  //   Dropdown
  // },
  methods: {
    openMenu() {
      let mainNav = document.getElementById("js-menu");
      mainNav.classList.toggle("active");
    },
  },

  data() {
    return {
      listOne:   false,
      listTwo:   false,
      listThree: false,
      listFour:  false,
      services: [
        {
          title: "Web",
          link: "#",
        },
        {
          title: "Design",
          link: "#",
        },
        {
          title: "Videos",
          link: "#",
        },
      ],
      forMembers: [
        {
          title: "Resources",
          link: "#",
        },
        {
          title: "Pranali",
          link: "#",
        },
      ],
    };
  },
};
</script>

<style scoped>
.menu {
  font: 14px/1.5 "Open Sans", sans-serif;
  font-weight: 600;
  margin: 0;
  padding: 0;
  list-style: none;
}

.menu a {
  display: block;
  padding: 20px;
  color: darkgray;
  text-decoration: none;
}

.menu li {
  display: block;
  float: left;
  position: relative;
  background:transparent;
  color: darkgray;
  min-width: 180px;
}

.menu li ul {
  z-index: 999;
  position: absolute;
  left: 0;
  top: 61px;
  margin: 0;
  padding: 0;
}

.menu li ul li {
  background: #333;
  transition: background 0.2s;
}

.menu li ul li:hover {
  background: #444;
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