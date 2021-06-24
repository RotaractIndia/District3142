<template>
    <div class="container">
  <div><img src="" class="image"></div>
  <div class="items"> 
  <h1>Frequently Asked Questions</h1>
  <details>
   <summary>Item 1</summary>
   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!</p>
</details>
<details>
   <summary>Item 2</summary>
   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!</p>
</details>
<details>
   <summary>Item 3</summary>
   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!</p>
</details>
<details>
   <summary>Item 4</summary>
   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!</p>
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
@import url('https://fonts.googleapis.com/css2?family=Cantarell&display=swap');

body {
	display: flex;
	height: 100vh;
	overflow: hidden;
	font-family: 'Roboto', sans-serif;
}

.container {
	display: flex;
	width: 100%;
    padding: 50px;
}

.image {
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
   max-width: 650px;
}

details,
summary {
	width: 100%;
	padding-top: 20px;
    font-family: 'Roboto',sans-serif;
}

summary::marker{
   content: '+' "    ";
   font-size: 2rem;
   font-weight: 900;
   padding-right: 25px;
}

summary::marker::after{
   content: '-' "    ";
   font-size: 2rem;
   font-weight: 900;
   padding-right: 25px;
}

summary {
	border-top: 2px solid rgba(51, 51, 51, 0.39);
}

@media (max-width: 900px) {
	.container {
		display: flex;
		flex-direction: column;
	}
	.image {
		display: none;
	}
}
</style>