<template>
  <div class="container">
  <div><img src="../../assets/img/faq.png" class="image"></div>
  <div class="items"> 
  <h1>Frequently Asked Questions</h1>

  <details v-for="(question, k) in questions" :key="k">
   <summary>{{question.q}}</summary>
   <p>{{question.a}}</p>
   </details>
 </div>
</div>
</template>

<script>
export default {
  name: "Faq",
  data(){
     return{
        questions:[
           {
              q:"What is Rotaract?",
              a:"Rotaract is the youth wing of Rotary. It’s a non-profit International Youth Organisation that works by the motto of self-development and fellowship – through service. It brings together like minded young adults between the age group of 16 to 30 years, who wish to lead a change and make the society a better place to live in.",
           },
           {
              q:"Who is eligible to join Rotaract ?",
              a:"Anyone and everyone between the age group of 16 to 30years. Our family is inclusive of members from all caste, creed, sex and gender.",
           },
           {
              q:"What are the benefits of joining Rotaract?",
              a:"The advantages are innumerable, personal growth , opportunity to network with people from different professional backgrounds, finding a family, gaining community service hours , overcoming your limitations , building leadership skills, implementing your thought process, letters and citations to build your resume. The list can go on!",
           },
           {
              q:"How to join a Rotaract Club?",
              a:"We wish to grow our community and steps to be a part of us are as follows: \n-	Zonal bifurcation page \n-	Find the zone inclusive / near your residential area. \n-	Connect with the Zonal Rotaract Representative of that respective zone. \n-	They will be more than happy to guide you until you find the suitable club for yourself. ",
           },
           {
              q:"Why to partner with us?",
              a:"Rotaract district 3142’s strongest suit has to be, its more than 3000 energetically charged, vibrant rotaractors. As a brand we resonate with words like youth, leadership, responsibility, fellowship and personal development. We as an entity can provide your brand with multiple platforms to showcase yourself at various occasions. Building and maintaining relationships is what we are good at. Press below to contact us for partnerships and sponsorships.",
           },
        ]
     }
  }
};
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

p{
   padding-top: 20px !important;
   white-space: pre-wrap;
}
details,
summary {
	width: 100%;
	padding-top: 20px;
    font-family: 'Roboto',sans-serif;
}

summary::marker{
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