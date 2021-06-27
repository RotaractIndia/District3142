<template>
<div class="container">
  <div class="items"> 
  <h1 class="heading">Team Zones</h1>
<details>
   <summary><b>Zone 1</b></summary><br> 
    <!-- member-->
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Rtr. Sneha Wayare</h3>
      <span>ZRR | Zone 1</span>
    </div> 
    <!-- member-->
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Rtr. Kingshuk Mazumder</h3>
      <span>ZRR | Zone 1</span>
    </div> 
    <div class="team-member">
        <ul>
            <li>RC Thane Downtown</li>
            <li>RC Thane Downtown</li>
            <li>RC Thane Downtown</li>
            <li>RC Thane Downtown</li>
            <li>RC Thane Downtown</li>
            <li>RC Thane Downtown</li>
        </ul>
    </div> 
    <!-- member-->
    <div class="team-member">
        <ul>
            <li>RC Thane Downtown</li>
            <li>RC Thane Downtown</li>
            <li>RC Thane Downtown</li>
            <li>RC Thane Downtown</li>
            <li>RC Thane Downtown</li>
            <li>RC Thane Downtown</li>
        </ul>
    </div> 
</details>
<details>
   <summary><b>Zone 2</b></summary><br>
    <!-- member-->
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Rtr. Himanshu Dapurkar</h3>
      <span>ZRR | Zone 2</span>
    </div> 
    <!-- member-->
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Rtr. Pranod Kalsekar</h3>
      <span>ZRR | Zone 2</span>
    </div> 
    <div class="team-member">
        <ul>
            <li>RC Thane Downtown</li>
            <li>RC Thane Downtown</li>
            <li>RC Thane Downtown</li>
            <li>RC Thane Downtown</li>
            <li>RC Thane Downtown</li>
            <li>RC Thane Downtown</li>
        </ul>
    </div> 
    <!-- member-->
    <div class="team-member">
        <ul>
            <li>RC Thane Downtown</li>
            <li>RC Thane Downtown</li>
            <li>RC Thane Downtown</li>
            <li>RC Thane Downtown</li>
            <li>RC Thane Downtown</li>
            <li>RC Thane Downtown</li>
        </ul>
    </div> 
</details>
<details>
   <summary><b>Zone 3</b></summary><br>
   <div class="team-member">
      <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Rtr. Devashish Mande</h3>
      <span>ZRR | Zone 3</span>
    </div>
    <!-- member-->
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Rtr. Amri Neve</h3>
      <span>ZRR | Zone 3</span>
    </div>
    <!-- member-->
    <div class="team-member">
        <ul>
            <li>RC Thane Downtown</li>
            <li>RC Thane Downtown</li>
            <li>RC Thane Downtown</li>
            <li>RC Thane Downtown</li>
            <li>RC Thane Downtown</li>
            <li>RC Thane Downtown</li>
            <li>RC Thane Downtown</li>
            <li>RC Thane Downtown</li>
            <li>RC Thane Downtown</li>
        </ul>
    </div> 
</details>
<details>
   <summary><b>Zones 4</b></summary><br>
   <div class="team-member">
      <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Rtr. Aishwarya Warke</h3>
      <span>ZRR | Zone 4</span>
    </div>
    <!-- member-->
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Rtr. Hetvi Dedhia</h3>
      <span>ZRR | Zone 4</span>
    </div>
    <!-- member-->
    <div class="team-member">
        <ul>
            <li>RC Thane Downtown</li>
            <li>RC Thane Downtown</li>
            <li>RC Thane Downtown</li>
            <li>RC Thane Downtown</li>
            <li>RC Thane Downtown</li>
            <li>RC Thane Downtown</li>
            <li>RC Thane Downtown</li>
            <li>RC Thane Downtown</li>
            <li>RC Thane Downtown</li>
        </ul>
    </div> 
    <div class="team-member">
        <ul>
            <li>RC Thane Downtown</li>
            <li>RC Thane Downtown</li>
            <li>RC Thane Downtown</li>
            <li>RC Thane Downtown</li>
            <li>RC Thane Downtown</li>
            <li>RC Thane Downtown</li>
            <li>RC Thane Downtown</li>
            <li>RC Thane Downtown</li>
            <li>RC Thane Downtown</li>
        </ul>
    </div> 
</details>
 </div>
</div>
</template>

<script>
export default {
    name:'Zones',
}
</script>

<style scoped>

/* Team Member CSS 
===========================*/
.summary{
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
  width: 18%;
  float: left;
  text-align: center;
  margin-right: 5%;
}

.team-member:last-child {margin-right: 0;}


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
  font-family: 'Roboto',sans-serif;
  font-size: 20px;
}

.email {
  color: #EA2678;
  
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
@media (max-width:850px){
  .team-member {
    width:25%;
    margin-left: 4%;
    margin-right: 4%;
    margin-bottom: 40px;
    
  }
  
}

@media (max-width:650px){
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
    font-family: 'FairPlayDisplay' !important; 
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
    font-family: 'Roboto',sans-serif;
}

summary {
	border-top: 2px solid rgba(51, 51, 51, 0.39);
}

@media (max-width: 900px) {
	.container {
		display: flex;
		flex-direction: column;
		height: 600px;
	}
	.image {
		display: none;
	}
}

hr{
  height: 15px;
  width: 25%;
}
.body_wrapper{
  margin-left:19%;
  margin-right:10%;
  display:flex;
  padding:20px;
}
.body_inner_left_holder{
  width:33.333%;
  padding-right:60px;
  padding-top:10px;
}
.body_inner_left{
  width:100%;
 }
.body_inner_right{
  display:flex;
  width:55%;
  justify-content:flex-start;
  float:right;
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