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
							src="../../assets/img/CMLogoB.png"
							class="img-fluid"
							alt="ChangeMaker Logo"
							data-aos="zoom-in"
						/>
					</div>
					<div class="col-lg-6 pt-5 pt-lg-0 year-theme">
						<!-- <img class="image" src="../../assets/CMLogoB.png" alt=""><br> -->
						<p data-aos="fade-up" data-aos-delay="100">
							Change is the catalyst for evolution. It  is a process and is inevitable.
Having pie (3.142) as one such constant resonated with us has been a grace for us so far. With CHANGE, another universal constant abiding by our side, the ROTARACT DISTRICT 3142 army has become stronger than ever.
Therefore, we call ourselves THE CHANGEMAKERS.
							<br /><br />
						</p>
					</div>
				</div>
			</div>
		</section>
		<!-- Drr Words -->
		<h1 class="heading">DRR Words</h1>
		<div class="body_wrapper">
			<div class="body_inner_left_holder">
				<article class="material-card Red">
					<h2>
						<span>Rtn. Rtr. Rahesh Donny</span>
						<strong> District Rotaract Representative </strong>
					</h2>
					<div class="mc-content">
						<div class="img-container">
							<img class="img-responsive" src="../../assets/ct/Rahesh.jpeg" />
						</div>
					</div>
				</article>
			</div>
			<div class="body_inner_right">
				<div>
				<i>“The measure of intelligence is the ability to change” – Albert Einstein</i><br>
				Rotaract District 3142 is a youth organization that focuses on providing
				a platform to help the next generation discover their leadership
				abilities, develop their personal skills, create their own network; all
				of this whilst making a substantial impact in the community. We are the
				voice of innovation, ambassadors of humanity, agents of service and the
				movers and shakers of society.<br />
				Over the past 54 years, we have been consistent in creating a legacy of
				responsible youth and have never hesitated to be ahead of our time. Our
				efforts in the field of education, women empowerment, environment
				conservation, mental health, water conservation and medical care are
				second to no other youth organization in the city. We have also
				encouraged cultural exchanges and professional conferences to broaden
				the minds of the members. Even during the pandemic, Rotaract District
				3142 stepped up and was working alongside the government in all areas of
				service related to COVID-19, as the District Rotaract Representative for
				the year 2021-2022, I can confirm that we will continue to render our
				support to society and keep grooming future leaders to become confident
				custodians of this great nation. When the world around you is dark, it’s
				the best time to shine. It’s the year to become a ChangeMaker.
				</div>
			</div>
		</div>
		<div class="body_wrapper">
			<div class="body_inner_left_holder">
				<article class="material-card Red">
					<h2>
						<span>Rtn. Rtr. Amit Lad</span>
						<strong style="font-size: 15px">
							Immediate Past District Rotaract Representative
						</strong>
					</h2>
					<div class="mc-content">
						<div class="img-container">
							<img class="img-responsive" src="../../assets/ct/Amit.jpg" />
						</div>
					</div>
				</article>
			</div>
			<div class="body_inner_right">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book. It has survived not only five
				centuries, but also the leap into electronic typesetting, remaining
				essentially unchanged. It was popularised in the 1960s with the release
				of Letraset sheets containing Lorem Ipsum passages, and more recently
				with desktop publishing software like Aldus PageMaker including versions
				of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
				typesetting industry. Lorem Ipsum has been the industry's standard dummy
				text ever since the 1500s, when an unknown printer took a galley of type
				and scrambled it to make a type specimen book. It has survived not only
				five centuries, but also the leap into electronic typesetting, remaining
				essentially unchanged. It was popularised in the 1960s with the release
				of Letraset sheets containing Lorem Ipsum passages, and more recently
				with desktop publishing software like Aldus PageMaker including versions
				of Lorem Ipsum.
			</div>
		</div>
		<div class="body_wrapper">
			<div class="body_inner_left_holder">
				<article class="material-card Red">
					<h2>
						<span>Rtn. Rtr. Adil Khan</span>
						<strong> DRR Elect | Deputy DRR & District Zonal Chair </strong>
					</h2>
					<div class="mc-content">
						<div class="img-container">
							<img class="img-responsive" src="../../assets/ct/Adil.jpg" />
						</div>
					</div>
				</article>
			</div>
			<div class="body_inner_right">
				With the motto of "Self-development through fellowship and service," it
				should be our prime focus to promote an environment that enables
				individuals to do just that. To achieve this, sustainability of
				experienced, well-trained members is imperative to help newer members
				understand the power of Rotaract. In the coming years, our true
				Rotaraction is going to be challenged; however, we should overcome this
				by realising the importance of the organisation and the impact of our
				work - on our lives as well as others'. My personal gain through
				Rotaract has been immense career advancement, which is why I wish that
				every Rotaractor benefits from the movement not only on the personal
				front but in the professional aspect as well. It is only wise to grab
				every opportunity provided to hone our skills by coming onto the working
				face of the movement. We need to encourage our members to work on ground
				and witness the change that it brings about in an individual while
				making a change in the world. After all, as much as we give to Rotaract,
				we are bound to get back in multitude.
			</div>
		</div>
		<!-- core team -->
		<section class="container">
			<div class="page-header">
				<h1 class="heading core-team">Core Team<br /></h1>
			</div>
			<div class="row active-with-click">
				<div
					v-for="(member, k) in coreTeam"
					:key="k"
					class="col-lg-3 col-md-6 col-sm-5 col-xs-10"
				>
					<article class="material-card" :class="member.color">
						<h2>
							<span>{{ member.name }}</span>
							<strong>
								<i class="fa fa-fw fa-star"></i>
								{{ member.position }}
							</strong>
						</h2>
						<div class="mc-content">
							<div class="img-container">
								<img class="img-responsive" :src="member.image" />
							</div>
						</div>
					</article>
				</div>
			</div>
		</section>
		<br />
		<!-- Council -->
		<div class="container">
			<div class="items">
				<h1 class="heading">ChangeMaker Council</h1>
				<details v-for="(member, k) in council" :key="k">
					<summary
						><b>{{ member.avenue }}</b></summary
					><br />

					<div class="council-container">
						<div class="deputy-container" v-if="member['deputy']">
							<div
								class="team-member"
								v-for="(dep, j) in member['deputy']"
								:key="j"
							>
								<img
									class="team-photo"
									:class="member.color"
									:src="dep.photo"
								/><br />
								<h3>{{ dep.name }}</h3>
								<span>{{ dep.designation }}</span>
							</div>
						</div>
						<hr class="deputy-hr" v-if="member['deputy']" />

						<div class="director-container">
							<div
								class="team-member"
								v-for="(dir, i) in member['directors']"
								:key="i"
							>
								<img
									class="team-photo"
									:class="member.color"
									:src="dir.photo"
								/><br />
								<h3>{{ dir.name }}</h3>
								<span>{{ dir.designation }}</span>
							</div>
						</div>
					</div>
				</details>
			</div>
		</div>
	</div>
</template>

<script>
import Mithila from "../../assets/ct/Mithila.jpg";
import Shanmukh from "../../assets/ct/Shanmukh.jpg";
import Swapnil from "../../assets/ct/Swapnil.jpg";
import Vijal from "../../assets/ct/Vijal.jpg";
import Gauri from "../../assets/ct/Gauri.jpg";
import ChinmayS from "../../assets/ct/ChinmayS.jpg";
import Sushmita from "../../assets/ct/Sushmita.jpg";
import Hardik from "../../assets/ct/Hardik.jpg";
import Siddhi from "../../assets/ct/Siddhi.jpg";
import Vaibhav from "../../assets/ct/Vaibhav.jpg";

// COUNCIL
// secretary
import Ajinkya from "../../assets/council/Ajinkya.png";
import Ruhika from "../../assets/council/Ruhika.png";
import Projesh from "../../assets/council/Projesh.png";
import SagarB from "../../assets/council/SagarB.png";

// Finance
import SahilA from "../../assets/council/SahilA.png";
import Jitesh from "../../assets/council/Jitesh.png";
import VijayK from "../../assets/council/VijayK.png";
import Abhishek from "../../assets/council/Abhishek.png";

//Deputy
import Mahanand from "../../assets/council/Mahanand.png";
import Preeti from "../../assets/council/Preeti.png";
import Mayuresh from "../../assets/council/Mayuresh.png";
import RaviS from "../../assets/council/RaviS.png";
import RahulS from "../../assets/council/RahulS.png";
import Ranjeet from "../../assets/council/Ranjeet.png";

//Club serv
import Viren from "../../assets/council/Viren.png";
import Jugnu from "../../assets/council/Jugnu.png";
import Mayuri from "../../assets/council/Mayuri.png";

//Commserv
import Prem from "../../assets/council/Prem.png";
import Mitesh from "../../assets/council/Mitesh.png";
import Srusti from "../../assets/council/Srusti.png";
import Mansi from "../../assets/council/MansiK.png";

//ED
import Prasad from "../../assets/council/Prasad.png";
import Natasha from "../../assets/council/Natasha.png";
import Twinkle from "../../assets/council/Twinkle.png";

//Sports
import Kunal from "../../assets/council/Kunal.png";
import Aditya from "../../assets/council/AdityaG.png";
import Ruchi from "../../assets/council/Ruchi.png";

//ISD
import Aishwarya from "../../assets/council/Aishwarya.png";
import Needhi from "../../assets/council/Needhi.png";
import Rushikesh from "../../assets/council/RushikeshB.png";

//PD
import Reena from "../../assets/council/Reena.png";
import Anvi from "../../assets/council/Anvi.png";
import VishalS from "../../assets/council/VishalS.png";

//admin and events
import Shraddha from "../../assets/council/Shraddha.png";
import Noopur from "../../assets/council/Noopur.png";
import Archit from "../../assets/council/Archit.png";
import Tanmay from "../../assets/council/Tanmay.png";
import Sumit from "../../assets/council/Sumit.png";
import VijayM from "../../assets/council/VijayM.png";

//digicom
import Radhika from "../../assets/council/Radhika.png";
import ChinmayP from "../../assets/council/ChinmayP.png";
import SagarP from "../../assets/council/SagarP.png";
import Jayesh from "../../assets/council/Jayesh.png";
import KiranB from "../../assets/council/KiranB.png";
import Siddhant from "../../assets/council/Siddhant.png";

//Photography
import RahulY from "../../assets/council/RahulY.png";
import Viraj from "../../assets/council/Viraj.png";
import RahulC from "../../assets/council/RahulC.png";
import Shubhang from "../../assets/council/Shubhang.png";

//marketing
import OmkarK from "../../assets/council/OmkarK.png";
import Zenil from "../../assets/council/Zenil.png";
import Rohan from "../../assets/council/Rohan.png";
import Keerthana from "../../assets/council/Keerthana.png";
import Jinit from "../../assets/council/Jinit.png";

//PR
import Arya from "../../assets/council/Arya.png";
import Khushabu from "../../assets/council/Khusbhu.png";
import Kajal from "../../assets/council/Kajal.png";

//CSR
import Saalim from "../../assets/council/Saalim.png";
import Pratik from "../../assets/council/Pratik.png";

//PIS
import Sanjeevani from "../../assets/council/Sanjeevni.png";
import Mihir from "../../assets/council/Mihir.png";
import Shashant from "../../assets/council/Shashant.png";

//trs
import SagarM from "../../assets/council/SagarM.png";
import Hrishikesh from "../../assets/council/Hrishikesh.png";
import Shivam from "../../assets/council/Shivam.png";

export default {
  name: "Team",
  data(){
    return{
      // core
      Mithila,Shanmukh,Swapnil,Vijal,Gauri,ChinmayS,Sushmita,Hardik,Siddhi,Vaibhav,
      // Council
      // Secretary
      Ruhika, Ajinkya,Projesh,SagarB,
      // Finance
      SahilA, Jitesh,VijayK,Abhishek,
      //Deputy 
      Mahanand,Preeti,Mayuresh,RahulS,RaviS,Ranjeet,
      //Club serv
      Viren,Jugnu,Mayuri,
      //Commserv 
      Prem, Mitesh,Srusti,Mansi,
      //ED
      Prasad,Natasha,Twinkle,
      //Sports
      Kunal,Ruchi,Aditya,
      //ISD
      Aishwarya,Needhi,Rushikesh,
      //PD  
      Reena,Anvi,VishalS,
      //Admin and events
      Shraddha,Noopur,Archit,Tanmay,Sumit,VijayM,
      //Digicom
      Radhika,ChinmayP,SagarP,Jayesh,KiranB,Siddhant,
      //photography
      RahulY,Viraj,RahulC,Shubhang,
      //marketing
      OmkarK,Zenil,Rohan,Keerthana,Jinit,
      //PR
      Arya,Khushabu,Kajal,
      //CSR
      Saalim,Pratik,
      //PIS
      Sanjeevani, Mihir, Shashant,
      //trs
      SagarM,Hrishikesh,Shivam,
      coreTeam:[
        { name:"Rtr. Mithila Salvi", position:"District Secretry", image:Mithila, color:"Deep-Purple" },
        { name:"Rtr. Shanmukhswami Gowda", position:"Deputy DRR & Corporate Communications Chair", image:Shanmukh, color:"Purple" },
        { name:"Rtn. Rtr. Swapnil Kadu", position:"District Finance Chair", image:Swapnil, color:"Blue" },
        { name:"Rtr. Vijal Kathrani", position:"District Training, Revival & Sustenance Chair", image:Vijal, color:"Light-Blue" },
        { name:"Rtr. Gauri Rane", position:"District Digital Communications Chair", image:Gauri, color:"Cyan" },
        { name:"Rtr. Chinmay Sheth", position:"District Technology Development Chair", image:ChinmayS, color:"Teal" },
        { name:"Rtr. Sushmita Valecha", position:"District Avenues 1 Chair", image:Sushmita, color:"Green" },
        { name:"Rtn. Rtr. Hardik Patel", position:"District Avenues 2 Chair", image:Hardik, color:"Light-Green" },
        { name:"Rtr. Siddhi Kubal", position:"District Administration Chair", image:Siddhi, color:"Lime" },
        { name:"Rtn. Rtr. Vaibhav Vispute", position:"District Sergeant-At-Arms", image:Vaibhav, color:"Peach" },
      ],
      council:[
        {
          avenue:"Team Secretariat",
          directors:[
            {
              name:"Rtr. Ajinkya Dhuri",
              photo:Ajinkya,
              designation:"Jt Secretary"
            },
            {
              name:"Rtr. Dr. Projesh Mukherjee",
              photo:Projesh,
              designation:"Jt Secretary"
            },
            {
              name:"Rtr. Ruhika Kalsekar",
              photo:Ruhika,
              designation:"Jt Secretary"
            },
            {
              name:"Rtr. Sagar Brijwani",
              photo:SagarB,
              designation:"Jt Secretary"
            },
          ],
          color:"Deep-Purple-border"
        },
        {
          avenue:"Team Finance",
          directors:[
            {
              name:"Rtr. Sahil Agarwal",
              photo:SahilA,
              designation:"Director Finance"
            },
            {
              name:"Rtr. Jitesh Bhatia ",
              photo:Jitesh,
              designation:"Director Finance"
            },
            {
              name:"Rtr. Vijay Kumawat",
              photo:VijayK,
              designation:"Director Finance"
            },
            {
              name:"Rtr. Abhishek Pandey",
              photo:Abhishek,
              designation:"Director Finance"
            },
          ],
          color:"Blue-border"
        },
        {
          avenue:"Team Club Service",
          deputy:[
            {
              name:"Rtr. Mahanand Vishwakarma",
              photo:Mahanand,
              designation:"Deputy Avenues 1 Chair"
            },
          ],
          directors:[
            {
              name:"Rtr. Viren Lassi",
              photo:Viren,
              designation:"Club Service Director"
            },
            {
              name:"Rtr. Jugnu Borkar",
              photo:Jugnu,
              designation:"Jt Club Service Director"
            },
            {
              name:"Rtr Mayuri Sapkale",
              photo:Mayuri,
              designation:"Jt Club Service Director"
            },
          ],
          color:"Green-border"
        },
        {
          avenue:"Team Community Service",
          deputy:[
            {
              name:"Rtr.Mahanand Vishwakarma",
              photo:Mahanand,
              designation:"Deputy Avenues 1 Chair"
            },
          ],
          directors:[
            {
              name:"Rtr. Prem Nadar",
              photo:Prem,
              designation:"Community Service Director"
            },
            {
              name:"Rtr. Mitesh Jain",
              photo:Mitesh,
              designation:"Jt Community Service Director"
            },
            {
              name:"Rtr. Srushti Yashwante",
              photo:Srusti,
              designation:"Jt Community Service Director"
            },
            {
              name:"Rtr. Mansi Kante",
              photo:Mansi,
              designation:"Jt Community Service Director"
            },
          ],
          color:"Green-border"
        },
        {
          avenue:"Team Entrepreneurship Development",
          deputy:[
            {
              name:"Rtr. Mahanand Vishwakarma",
              photo:Mahanand,
              designation:"Deputy Avenues 1 Chair"
            },
          ],
          directors:[
            {
              name:"Rtr. Prasad Yadav",
              photo:Prasad,
              designation:"Entrepreneurship Development Director"
            },
            {
              name:"Rtr. Natasha Jain",
              photo:Natasha,
              designation:"Jt Entrepreneurship Development Director"
            },
            {
              name:"Rtr. Twinkle Matta",
              photo:Twinkle,
              designation:"Jt Entrepreneurship Development Director"
            },
          ],
          color:"Green-border"
        },
        {
          avenue:"Team Sports",
          deputy:[
            {
              name:"Rtr. Dr. Preeti Bhogle",
              photo:Preeti,
              designation:"Deputy Avenues 2 Chair"
            },
          ],
          directors:[
            {
              name:"Rtr. Kunal Kataria",
              photo:Kunal,
              designation:"Director Sports"
            },
            {
              name:"Rtr. Aditya Gharat",
              photo:Aditya,
              designation:"Jt Director Sports"
            },
            {
              name:"Rtr. Rruchi Bhandari",
              photo:Ruchi,
              designation:"Jt Director Sports"
            },
          ],
          color:"Light-Green-border"
        },
        {
          avenue:"Team International Service",
          deputy:[
            {
              name:"Rtr.Dr. Preeti Bhogle",
              photo:Preeti,
              designation:"Deputy Avenues 2 Chair"
            },
          ],
          directors:[
            {
              name:"Rtr. Aishwarya Gupta ",
              photo:Aishwarya,
              designation:"International Service Director"
            },
            {
              name:"Rtr. Needhi Shukla",
              photo:Needhi,
              designation:"Jt International Service Director"
            },
            {
              name:"Rtr. Rushikesh Bhadane",
              photo:Rushikesh,
              designation:"Jt International Service Director"
            },
          ],
          color:"Light-Green-border"
        },
        {
          avenue:"Team Professional Development",
          deputy:[
            {
              name:"Rtr.Dr. Preeti Bhogle",
              photo:Preeti,
              designation:"Deputy Avenues 2 Chair"
            },
          ],
          directors:[
            {
              name:"Rtr. Vishal Shah",
              photo:VishalS,
              designation:"Professional Development Director"
            },
            {
              name:"Rtr. Reena Mapari",
              photo:Reena,
              designation:"Jt Professional Development Director"
            },
            {
              name:"Rtr. Anvi Shetty",
              photo:Anvi,
              designation:"Jt Professional Development Director"
            },
          ],
          color:"Light-Green-border"
        },
        {
          avenue:"Team Admin & Events",
          deputy:[
            {
              name:"Rtr. Ranjeet Pandey",
              photo:Ranjeet,
              designation:"Deputy Events and Admin"
            },
          ],
          directors:[
            {
              name:"Rtr. Shraddha Purohit",
              photo:Shraddha,
              designation:"Director Admin"
            },
            {
              name:"Rtr. Noopur Rahane",
              photo:Noopur,
              designation:"Jt Director Admin"
            },
            {
              name:"Rtn. Rtr. Archit Patki",
              photo:Archit,
              designation:"Jt Director Admin"
            },
            {
              name:"Rtr. Tanmay Deshpande",
              photo:Tanmay,
              designation:"Director Events"
            },
            {
              name:"Rtr. Sumit Bhanage",
              photo:Sumit,
              designation:"Jt Director Events"
            },
            {
              name:"Rtr. Vijay Malkani",
              photo:VijayM,
              designation:"Jt Director Events"
            },
          ],
          color:"Lime-border"
        },
        {
          avenue:"Team Digital Communications",
          deputy:[
            {
              name:"Rtr. Mayuresh Jadhav",
              photo:Mayuresh,
              designation:"Deputy Digital Communications Chair"
            },
          ],
          directors:[
            {
              name:"Rtr. Radhika Jagtap",
              photo:Radhika,
              designation:"Social Media Director"
            },
            {
              name:"Rtr. Chinmay Pradhan",
              photo:ChinmayP,
              designation:"Jt Social Media Director"
            },
            {
              name:"Rtr. Sagar Pandit",
              photo:SagarP,
              designation:"Creative Director"
            },
            {
              name:"Rtr. Jayesh Zurunge",
              photo:Jayesh,
              designation:"Jt Creative Director"
            },
            {
              name:"Rtr. Kiran Barai",
              photo:KiranB,
              designation:"Jt Creative Director"
            },
            {
              name:"Rtr. Jitesh Bhatia",
              photo:Jitesh,
              designation:"Editor"
            },
			{
              name:"Rtr. Siddhant Patel",
              photo:Siddhant,
              designation:"Editor"
            },
          ],
          color:"Cyan-border"
        },
        {
          avenue:"Team Photography",
          deputy:[
            {
              name:"Rtr. Mayuresh Jadhav",
              photo:Mayuresh,
              designation:"Deputy Digital Communications Chair"
            },
          ],
          directors:[
            {
              name:"Rtr. Rahul Yadav",
              photo:RahulY,
              designation:"Director of Photography"
            },
            {
              name:"Rtr. Viraj Sawant",
              photo:Viraj,
              designation:"Assistant Director of Photography"
            },
            {
              name:"Rtr. Rahul Chahande",
              photo:RahulC,
              designation:"Assistant Director of Photography"
            },
            {
              name:"Rtr. Shubhang Kashikar",
              photo:Shubhang,
              designation:"Assistant Director of Photography"
            },
          ],
          color:"Cyan-border"
        },
        {
          avenue:"Team Marketing",
          deputy:[
            {
              name:"Rtr. Rahul Shelar",
              photo:RahulS,
              designation:"Deputy Corporate Communicataions Chair"
            },
            {
              name:"Rtr. Ravi Suthar",
              photo:RaviS,
              designation:"Deputy Corporate Communicataions Chair"
            },
          ],
          directors:[
            {
              name:"Rtr. Jinit Patel",
              photo:Jinit,
              designation:"Director Marketing"
            },
            {
              name:"Rtr. Omkar Kadu",
              photo:OmkarK,
              designation:"Jt Director Marketing"
            },
            {
              name:"Rtr. Zenil Shah",
              photo:Zenil,
              designation:"Jt Director Marketing"
            },
            {
              name:"Rtr. Keerthana Nambiar",
              photo:Keerthana,
              designation:"Jt Director Marketing"
            },
            {
              name:"Rtr. Rohan Solanki",
              photo:Rohan,
              designation:"Jt Director Marketing"
            },
          ],
          color:"Purple-border"
        },
        {
          avenue:"Team Public Relations",
          deputy:[
            {
              name:"Rtr. Rahul Shelar",
              photo:RahulS,
              designation:"Deputy Corporate Communicataions Chair"
            },
            {
              name:"Rtr. Ravi Suthar",
              photo:RaviS,
              designation:"Deputy Corporate Communicataions Chair"
            },
          ],
          directors:[
            {
              name:"Rtr. Arya Gawade",
              photo:Arya,
              designation:"Director PR"
            },
            {
              name:"Rtr. Khushabu Agarwal",
              photo:Khushabu,
              designation:"Jt Director PR"
            },
            {
              name:"Rtr. Kajal Dusseja",
              photo:Kajal,
              designation:"Jt Director PR"
            },
          ],
          color:"Purple-border"
        },
        {
          avenue:"Team CSR",
          deputy:[
            {
              name:"Rtr. Rahul Shelar",
              photo:RahulS,
              designation:"Deputy Corporate Communicataions Chair"
            },
            {
              name:"Rtr. Ravi Suthar",
              photo:RaviS,
              designation:"Deputy Corporate Communicataions Chair"
            },
          ],
          directors:[
            {
              name:"Rtr. Saalim Ali",
              photo:Saalim,
              designation:"Director CSR"
            },
            {
              name:"Rtr. Pratik Mate",
              photo:Pratik,
              designation:"Jt Director CSR"
            },
          ],
          color:"Purple-border"
        },
        {
          avenue:"Team PIS",
          deputy:[
            {
              name:"Rtr. Rahul Shelar",
              photo:RahulS,
              designation:"Deputy Corporate Communicataions Chair"
            },
            {
              name:"Rtr. Ravi Suthar",
              photo:RaviS,
              designation:"Deputy Corporate Communicataions Chair"
            },
          ],
          directors:[
            {
              name:"Rtr. Sanjeevani Bhagat",
              photo:Sanjeevani,
              designation:"Director PIS"
            },
            {
              name:"Rtr. Mihir Kocharekar",
              photo:Mihir,
              designation:"Jt Director PIS"
            },
            {
              name:"Rtr. Shashant Singh",
              photo:Shashant,
              designation:"Jt Director PIS"
            },
          ],
          color:"Purple-border"
        },
        {
          avenue:"Team Training, Revival & Sustenance",
          directors:[
            {
              name:"Rtr. Sagar Mulchandani",
              photo:SagarM,
              designation:"Director Training, Revival & Sustenance "
            },
            {
              name:"Rtr. Hrishikesh Sawant",
              photo:Hrishikesh,
              designation:"Director Training, Revival & Sustenance"
            },
            {
              name:"Rtr Shivam Yadav",
              photo:Shivam,
              designation:"Director Training, Revival & Sustenance"
            },
          ],
          color:"Light-Blue-border"
        },
      ],
    }
  }
};
</script>

<style scoped>
.Deep-Purple-border {
	border-color: #673ab7 !important;
}
.Blue-border {
	border-color: #2196f3 !important;
}
.Green-border {
	border-color: #4caf50 !important;
}
.Light-Green-border {
	border-color: #8bc34a !important;
}
.Lime-border {
	border-color: #cddc39 !important;
}
.Cyan-border {
	border-color: #00bcd4 !important;
}
.Purple-border {
	border-color: #9c27b0 !important;
}
.Light-Blue-border {
	border-color: #03a9f4 !important;
}
</style>
<style scoped>
.council-container {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

/* Team Member CSS 
===========================*/
.summary {
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
	width: 16%;
	float: left;
	text-align: center;
	margin-right: 5%;
}

.team-member:last-child {
	margin-right: 0;
}

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
	font-family: "Roboto", sans-serif;
	font-size: 20px;
}

.email {
	color: #ea2678;
}

.team-member span {
	display: block;
}
.team-photo {
	border: 5px solid #eee;
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
@media (max-width: 850px) {
	.team-member {
		width: 25%;
		margin-left: 4%;
		margin-right: 4%;
		margin-bottom: 40px;
	}
}

@media (max-width: 650px) {
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
	font-family: "FairPlayDisplay" !important;
	font-weight: 600;
}

.active-with-click {
	display: flex;
	justify-content: center;
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
	font-family: "Roboto", sans-serif;
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

hr {
	height: 15px;
	width: 25%;
}
.body_wrapper {
	display:grid;
	grid-template-columns: .75fr 1fr;
	margin-left: 15%;
	margin-right: 10%;
	/* display: flex; */
	padding: 20px;
}
.body_inner_left_holder {
	/* width: 33.333%; */
	padding-right: 40px;
	padding-top: 10px;
}
.body_inner_left {
	width: 100%;
}
.body_inner_right {
	/* padding-top: 25px; */
	display: flex;
	/* width: 55%; */
	justify-content: flex-start;
	float: right;
}
.heading {
	padding: 35px;
	padding-top: 0;
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

body {
	background-color: #eceff1;
	color: #37474f;
	font-family: "Raleway", sans-serif;
	font-weight: 300;
	font-size: 16px;
}
h1,
h2,
h3 {
	font-weight: 200;
}

.img-fluid {
	padding: 15px;
}

.image {
	height: auto;
	width: 350px;
	float: center;
}

.about {
	padding: 35px 0;
}

.year-theme {
	display: flex;
	align-self: flex-end;
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

.material-card.Purple h2 span {
	font-size: 20px;
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
.material-card {
	position: relative;
	height: 0;
	padding-bottom: calc(100% - 16px);
	margin-bottom: 10em;
	font-family: "Roboto", sans-serif;
}
.img-responsive {
	height: auto;
	width: 100%;
}
.material-card h2 {
	height: 100px;
	font-family: Roboto, sans-serif;
	position: absolute;
	top: calc(100% - 16px);
	left: 0;
	width: 100%;
	padding: 10px 16px;
	color: #fff;
	font-size: 1.4em;
	line-height: 1.4em;
	margin: 0;
	z-index: 10;
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	-ms-transition: all 0.3s;
	-o-transition: all 0.3s;
	transition: all 0.3s;
}
.material-card h2 span {
	display: block;
}
.material-card h2 strong {
	font-weight: 400;
	display: block;
	font-size: 16px;
	line-height: 1.4rem;
}
.material-card h2:before,
.material-card h2:after {
	content: " ";
	position: absolute;
	left: 0;
	top: -16px;
	width: 0;
	border: 8px solid;
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	-ms-transition: all 0.3s;
	-o-transition: all 0.3s;
	transition: all 0.3s;
}
.material-card h2:after {
	top: auto;
	bottom: 0;
}
@media screen and (max-width: 767px) {
	.material-card.mc-active {
		padding-bottom: 0;
		height: auto;
	}
}
.material-card.mc-active h2 {
	top: 0;
	padding: 10px 16px 10px 90px;
}
.material-card.mc-active h2:before {
	top: 0;
}
.material-card.mc-active h2:after {
	bottom: -16px;
}
.material-card .mc-content {
	position: absolute;
	right: 0;
	top: 0;
	bottom: 16px;
	left: 16px;
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	-ms-transition: all 0.3s;
	-o-transition: all 0.3s;
	transition: all 0.3s;
}
.material-card .mc-btn-action {
	position: absolute;
	right: 16px;
	top: 15px;
	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	border-radius: 50%;
	border: 5px solid;
	width: 54px;
	height: 54px;
	line-height: 44px;
	text-align: center;
	color: #fff;
	cursor: pointer;
	z-index: 20;
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	-ms-transition: all 0.3s;
	-o-transition: all 0.3s;
	transition: all 0.3s;
}
.material-card.mc-active .mc-btn-action {
	top: 62px;
}
.material-card .mc-description {
	position: absolute;
	top: 100%;
	right: 30px;
	left: 30px;
	bottom: 54px;
	overflow: hidden;
	opacity: 0;
	filter: alpha(opacity=0);
	-webkit-transition: all 1.2s;
	-moz-transition: all 1.2s;
	-ms-transition: all 1.2s;
	-o-transition: all 1.2s;
	transition: all 1.2s;
}
.material-card .mc-footer {
	height: 0;
	overflow: hidden;
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	-ms-transition: all 0.3s;
	-o-transition: all 0.3s;
	transition: all 0.3s;
}
.material-card .mc-footer h4 {
	position: absolute;
	top: 200px;
	left: 30px;
	padding: 0;
	margin: 0;
	font-size: 16px;
	font-weight: 700;
	-webkit-transition: all 1.4s;
	-moz-transition: all 1.4s;
	-ms-transition: all 1.4s;
	-o-transition: all 1.4s;
	transition: all 1.4s;
}
.material-card .mc-footer a {
	display: block;
	float: left;
	position: relative;
	width: 52px;
	height: 52px;
	margin-left: 5px;
	margin-bottom: 15px;
	font-size: 28px;
	color: #fff;
	line-height: 52px;
	text-decoration: none;
	top: 200px;
}
.material-card .mc-footer a:nth-child(1) {
	-webkit-transition: all 0.5s;
	-moz-transition: all 0.5s;
	-ms-transition: all 0.5s;
	-o-transition: all 0.5s;
	transition: all 0.5s;
}
.material-card .mc-footer a:nth-child(2) {
	-webkit-transition: all 0.6s;
	-moz-transition: all 0.6s;
	-ms-transition: all 0.6s;
	-o-transition: all 0.6s;
	transition: all 0.6s;
}
.material-card .mc-footer a:nth-child(3) {
	-webkit-transition: all 0.7s;
	-moz-transition: all 0.7s;
	-ms-transition: all 0.7s;
	-o-transition: all 0.7s;
	transition: all 0.7s;
}
.material-card .mc-footer a:nth-child(4) {
	-webkit-transition: all 0.8s;
	-moz-transition: all 0.8s;
	-ms-transition: all 0.8s;
	-o-transition: all 0.8s;
	transition: all 0.8s;
}
.material-card .mc-footer a:nth-child(5) {
	-webkit-transition: all 0.9s;
	-moz-transition: all 0.9s;
	-ms-transition: all 0.9s;
	-o-transition: all 0.9s;
	transition: all 0.9s;
}
.img-container {
  height: auto;
  width: 100%;
}
.material-card .img-container {
	overflow: hidden;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	-ms-transition: all 0.3s;
	-o-transition: all 0.3s;
	transition: all 0.3s;
}
.material-card.mc-active .img-container {
	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	border-radius: 50%;
	left: 0;
	top: 12px;
	width: 60px;
	height: 60px;
	z-index: 20;
}
.material-card.mc-active .mc-content {
	padding-top: 5.6em;
}
@media screen and (max-width: 767px) {
	.material-card.mc-active .mc-content {
		position: relative;
		margin-right: 16px;
	}
}
.material-card.mc-active .mc-description {
	top: 50px;
	padding-top: 5.6em;
	opacity: 1;
	filter: alpha(opacity=100);
}
@media screen and (max-width: 767px) {
	.material-card.mc-active .mc-description {
		position: relative;
		top: auto;
		right: auto;
		left: auto;
		padding: 50px 30px 70px 30px;
		bottom: 0;
	}
}
.material-card.mc-active .mc-footer {
	overflow: visible;
	position: absolute;
	top: calc(100% - 16px);
	left: 16px;
	right: 0;
	height: 82px;
	padding-top: 15px;
	padding-left: 25px;
}
.material-card.mc-active .mc-footer a {
	top: 0;
}
.material-card.mc-active .mc-footer h4 {
	top: -32px;
}
.material-card.Red h2 {
	background-color: #f44336;
}
.material-card.Red h2:after {
	border-top-color: #f44336;
	border-right-color: #f44336;
	border-bottom-color: transparent;
	border-left-color: transparent;
}
.material-card.Red h2:before {
	border-top-color: transparent;
	border-right-color: #b71c1c;
	border-bottom-color: #b71c1c;
	border-left-color: transparent;
}
.material-card.Red.mc-active h2:before {
	border-top-color: transparent;
	border-right-color: #f44336;
	border-bottom-color: #f44336;
	border-left-color: transparent;
}
.material-card.Red.mc-active h2:after {
	border-top-color: #b71c1c;
	border-right-color: #b71c1c;
	border-bottom-color: transparent;
	border-left-color: transparent;
}
.material-card.Red .mc-btn-action {
	background-color: #f44336;
}
.material-card.Red .mc-btn-action:hover {
	background-color: #b71c1c;
}
.material-card.Red .mc-footer h4 {
	color: #b71c1c;
}
.material-card.Red .mc-footer a {
	background-color: #b71c1c;
}
.material-card.Red.mc-active .mc-content {
	background-color: #ffebee;
}
.material-card.Red.mc-active .mc-footer {
	background-color: #ffcdd2;
}
.material-card.Red.mc-active .mc-btn-action {
	border-color: #ffebee;
}
.material-card.Blue-Grey h2 {
	background-color: #607d8b;
}
.material-card.Blue-Grey h2:after {
	border-top-color: #607d8b;
	border-right-color: #607d8b;
	border-bottom-color: transparent;
	border-left-color: transparent;
}
.material-card.Blue-Grey h2:before {
	border-top-color: transparent;
	border-right-color: #263238;
	border-bottom-color: #263238;
	border-left-color: transparent;
}
.material-card.Blue-Grey.mc-active h2:before {
	border-top-color: transparent;
	border-right-color: #607d8b;
	border-bottom-color: #607d8b;
	border-left-color: transparent;
}
.material-card.Blue-Grey.mc-active h2:after {
	border-top-color: #263238;
	border-right-color: #263238;
	border-bottom-color: transparent;
	border-left-color: transparent;
}
.material-card.Blue-Grey .mc-btn-action {
	background-color: #607d8b;
}
.material-card.Blue-Grey .mc-btn-action:hover {
	background-color: #263238;
}
.material-card.Blue-Grey .mc-footer h4 {
	color: #263238;
}
.material-card.Blue-Grey .mc-footer a {
	background-color: #263238;
}
.material-card.Blue-Grey.mc-active .mc-content {
	background-color: #eceff1;
}
.material-card.Blue-Grey.mc-active .mc-footer {
	background-color: #cfd8dc;
}
.material-card.Blue-Grey.mc-active .mc-btn-action {
	border-color: #eceff1;
}
.material-card.Pink h2 {
	background-color: #e91e63;
}
.material-card.Pink h2:after {
	border-top-color: #e91e63;
	border-right-color: #e91e63;
	border-bottom-color: transparent;
	border-left-color: transparent;
}
.material-card.Pink h2:before {
	border-top-color: transparent;
	border-right-color: #880e4f;
	border-bottom-color: #880e4f;
	border-left-color: transparent;
}
.material-card.Pink.mc-active h2:before {
	border-top-color: transparent;
	border-right-color: #e91e63;
	border-bottom-color: #e91e63;
	border-left-color: transparent;
}
.material-card.Pink.mc-active h2:after {
	border-top-color: #880e4f;
	border-right-color: #880e4f;
	border-bottom-color: transparent;
	border-left-color: transparent;
}
.material-card.Pink .mc-btn-action {
	background-color: #e91e63;
}
.material-card.Pink .mc-btn-action:hover {
	background-color: #880e4f;
}
.material-card.Pink .mc-footer h4 {
	color: #880e4f;
}
.material-card.Pink .mc-footer a {
	background-color: #880e4f;
}
.material-card.Pink.mc-active .mc-content {
	background-color: #fce4ec;
}
.material-card.Pink.mc-active .mc-footer {
	background-color: #f8bbd0;
}
.material-card.Pink.mc-active .mc-btn-action {
	border-color: #fce4ec;
}
.material-card.Purple h2 {
	background-color: #9c27b0;
}
.material-card.Purple h2:after {
	border-top-color: #9c27b0;
	border-right-color: #9c27b0;
	border-bottom-color: transparent;
	border-left-color: transparent;
}
.material-card.Purple h2:before {
	border-top-color: transparent;
	border-right-color: #4a148c;
	border-bottom-color: #4a148c;
	border-left-color: transparent;
}
.material-card.Purple.mc-active h2:before {
	border-top-color: transparent;
	border-right-color: #9c27b0;
	border-bottom-color: #9c27b0;
	border-left-color: transparent;
}
.material-card.Purple.mc-active h2:after {
	border-top-color: #4a148c;
	border-right-color: #4a148c;
	border-bottom-color: transparent;
	border-left-color: transparent;
}
.material-card.Purple .mc-btn-action {
	background-color: #9c27b0;
}
.material-card.Purple .mc-btn-action:hover {
	background-color: #4a148c;
}
.material-card.Purple .mc-footer h4 {
	color: #4a148c;
}
.material-card.Purple .mc-footer a {
	background-color: #4a148c;
}
.material-card.Purple.mc-active .mc-content {
	background-color: #f3e5f5;
}
.material-card.Purple.mc-active .mc-footer {
	background-color: #e1bee7;
}
.material-card.Purple.mc-active .mc-btn-action {
	border-color: #f3e5f5;
}
.material-card.Deep-Purple h2 {
	background-color: #673ab7;
}
.material-card.Deep-Purple h2:after {
	border-top-color: #673ab7;
	border-right-color: #673ab7;
	border-bottom-color: transparent;
	border-left-color: transparent;
}
.material-card.Deep-Purple h2:before {
	border-top-color: transparent;
	border-right-color: #311b92;
	border-bottom-color: #311b92;
	border-left-color: transparent;
}
.material-card.Deep-Purple.mc-active h2:before {
	border-top-color: transparent;
	border-right-color: #673ab7;
	border-bottom-color: #673ab7;
	border-left-color: transparent;
}
.material-card.Deep-Purple.mc-active h2:after {
	border-top-color: #311b92;
	border-right-color: #311b92;
	border-bottom-color: transparent;
	border-left-color: transparent;
}
.material-card.Deep-Purple .mc-btn-action {
	background-color: #673ab7;
}
.material-card.Deep-Purple .mc-btn-action:hover {
	background-color: #311b92;
}
.material-card.Deep-Purple .mc-footer h4 {
	color: #311b92;
}
.material-card.Deep-Purple .mc-footer a {
	background-color: #311b92;
}
.material-card.Deep-Purple.mc-active .mc-content {
	background-color: #ede7f6;
}
.material-card.Deep-Purple.mc-active .mc-footer {
	background-color: #d1c4e9;
}
.material-card.Deep-Purple.mc-active .mc-btn-action {
	border-color: #ede7f6;
}
.material-card.Indigo h2 {
	background-color: #3f51b5;
}
.material-card.Indigo h2:after {
	border-top-color: #3f51b5;
	border-right-color: #3f51b5;
	border-bottom-color: transparent;
	border-left-color: transparent;
}
.material-card.Indigo h2:before {
	border-top-color: transparent;
	border-right-color: #1a237e;
	border-bottom-color: #1a237e;
	border-left-color: transparent;
}
.material-card.Indigo.mc-active h2:before {
	border-top-color: transparent;
	border-right-color: #3f51b5;
	border-bottom-color: #3f51b5;
	border-left-color: transparent;
}
.material-card.Indigo.mc-active h2:after {
	border-top-color: #1a237e;
	border-right-color: #1a237e;
	border-bottom-color: transparent;
	border-left-color: transparent;
}
.material-card.Indigo .mc-btn-action {
	background-color: #3f51b5;
}
.material-card.Indigo .mc-btn-action:hover {
	background-color: #1a237e;
}
.material-card.Indigo .mc-footer h4 {
	color: #1a237e;
}
.material-card.Indigo .mc-footer a {
	background-color: #1a237e;
}
.material-card.Indigo.mc-active .mc-content {
	background-color: #e8eaf6;
}
.material-card.Indigo.mc-active .mc-footer {
	background-color: #c5cae9;
}
.material-card.Indigo.mc-active .mc-btn-action {
	border-color: #e8eaf6;
}
.material-card.Blue h2 {
	background-color: #2196f3;
}
.material-card.Blue h2:after {
	border-top-color: #2196f3;
	border-right-color: #2196f3;
	border-bottom-color: transparent;
	border-left-color: transparent;
}
.material-card.Blue h2:before {
	border-top-color: transparent;
	border-right-color: #0d47a1;
	border-bottom-color: #0d47a1;
	border-left-color: transparent;
}
.material-card.Blue.mc-active h2:before {
	border-top-color: transparent;
	border-right-color: #2196f3;
	border-bottom-color: #2196f3;
	border-left-color: transparent;
}
.material-card.Blue.mc-active h2:after {
	border-top-color: #0d47a1;
	border-right-color: #0d47a1;
	border-bottom-color: transparent;
	border-left-color: transparent;
}
.material-card.Blue .mc-btn-action {
	background-color: #2196f3;
}
.material-card.Blue .mc-btn-action:hover {
	background-color: #0d47a1;
}
.material-card.Blue .mc-footer h4 {
	color: #0d47a1;
}
.material-card.Blue .mc-footer a {
	background-color: #0d47a1;
}
.material-card.Blue.mc-active .mc-content {
	background-color: #e3f2fd;
}
.material-card.Blue.mc-active .mc-footer {
	background-color: #bbdefb;
}
.material-card.Blue.mc-active .mc-btn-action {
	border-color: #e3f2fd;
}
.material-card.Light-Blue h2 {
	background-color: #03a9f4;
}
.material-card.Light-Blue h2:after {
	border-top-color: #03a9f4;
	border-right-color: #03a9f4;
	border-bottom-color: transparent;
	border-left-color: transparent;
}
.material-card.Light-Blue h2:before {
	border-top-color: transparent;
	border-right-color: #01579b;
	border-bottom-color: #01579b;
	border-left-color: transparent;
}
.material-card.Light-Blue.mc-active h2:before {
	border-top-color: transparent;
	border-right-color: #03a9f4;
	border-bottom-color: #03a9f4;
	border-left-color: transparent;
}
.material-card.Light-Blue.mc-active h2:after {
	border-top-color: #01579b;
	border-right-color: #01579b;
	border-bottom-color: transparent;
	border-left-color: transparent;
}
.material-card.Light-Blue .mc-btn-action {
	background-color: #03a9f4;
}
.material-card.Light-Blue .mc-btn-action:hover {
	background-color: #01579b;
}
.material-card.Light-Blue .mc-footer h4 {
	color: #01579b;
}
.material-card.Light-Blue .mc-footer a {
	background-color: #01579b;
}
.material-card.Light-Blue.mc-active .mc-content {
	background-color: #e1f5fe;
}
.material-card.Light-Blue.mc-active .mc-footer {
	background-color: #b3e5fc;
}
.material-card.Light-Blue.mc-active .mc-btn-action {
	border-color: #e1f5fe;
}
.material-card.Cyan h2 {
	background-color: #00bcd4;
}
.material-card.Cyan h2:after {
	border-top-color: #00bcd4;
	border-right-color: #00bcd4;
	border-bottom-color: transparent;
	border-left-color: transparent;
}
.material-card.Cyan h2:before {
	border-top-color: transparent;
	border-right-color: #006064;
	border-bottom-color: #006064;
	border-left-color: transparent;
}
.material-card.Cyan.mc-active h2:before {
	border-top-color: transparent;
	border-right-color: #00bcd4;
	border-bottom-color: #00bcd4;
	border-left-color: transparent;
}
.material-card.Cyan.mc-active h2:after {
	border-top-color: #006064;
	border-right-color: #006064;
	border-bottom-color: transparent;
	border-left-color: transparent;
}
.material-card.Cyan .mc-btn-action {
	background-color: #00bcd4;
}
.material-card.Cyan .mc-btn-action:hover {
	background-color: #006064;
}
.material-card.Cyan .mc-footer h4 {
	color: #006064;
}
.material-card.Cyan .mc-footer a {
	background-color: #006064;
}
.material-card.Cyan.mc-active .mc-content {
	background-color: #e0f7fa;
}
.material-card.Cyan.mc-active .mc-footer {
	background-color: #b2ebf2;
}
.material-card.Cyan.mc-active .mc-btn-action {
	border-color: #e0f7fa;
}
.material-card.Teal h2 {
	background-color: #009688;
}
.material-card.Teal h2:after {
	border-top-color: #009688;
	border-right-color: #009688;
	border-bottom-color: transparent;
	border-left-color: transparent;
}
.material-card.Teal h2:before {
	border-top-color: transparent;
	border-right-color: #004d40;
	border-bottom-color: #004d40;
	border-left-color: transparent;
}
.material-card.Teal.mc-active h2:before {
	border-top-color: transparent;
	border-right-color: #009688;
	border-bottom-color: #009688;
	border-left-color: transparent;
}
.material-card.Teal.mc-active h2:after {
	border-top-color: #004d40;
	border-right-color: #004d40;
	border-bottom-color: transparent;
	border-left-color: transparent;
}
.material-card.Teal .mc-btn-action {
	background-color: #009688;
}
.material-card.Teal .mc-btn-action:hover {
	background-color: #004d40;
}
.material-card.Teal .mc-footer h4 {
	color: #004d40;
}
.material-card.Teal .mc-footer a {
	background-color: #004d40;
}
.material-card.Teal.mc-active .mc-content {
	background-color: #e0f2f1;
}
.material-card.Teal.mc-active .mc-footer {
	background-color: #b2dfdb;
}
.material-card.Teal.mc-active .mc-btn-action {
	border-color: #e0f2f1;
}
.material-card.Green h2 {
	background-color: #4caf50;
}
.material-card.Green h2:after {
	border-top-color: #4caf50;
	border-right-color: #4caf50;
	border-bottom-color: transparent;
	border-left-color: transparent;
}
.material-card.Green h2:before {
	border-top-color: transparent;
	border-right-color: #1b5e20;
	border-bottom-color: #1b5e20;
	border-left-color: transparent;
}
.material-card.Green.mc-active h2:before {
	border-top-color: transparent;
	border-right-color: #4caf50;
	border-bottom-color: #4caf50;
	border-left-color: transparent;
}
.material-card.Green.mc-active h2:after {
	border-top-color: #1b5e20;
	border-right-color: #1b5e20;
	border-bottom-color: transparent;
	border-left-color: transparent;
}
.material-card.Green .mc-btn-action {
	background-color: #4caf50;
}
.material-card.Green .mc-btn-action:hover {
	background-color: #1b5e20;
}
.material-card.Green .mc-footer h4 {
	color: #1b5e20;
}
.material-card.Green .mc-footer a {
	background-color: #1b5e20;
}
.material-card.Green.mc-active .mc-content {
	background-color: #e8f5e9;
}
.material-card.Green.mc-active .mc-footer {
	background-color: #c8e6c9;
}
.material-card.Green.mc-active .mc-btn-action {
	border-color: #e8f5e9;
}
.material-card.Light-Green h2 {
	background-color: #8bc34a;
}
.material-card.Light-Green h2:after {
	border-top-color: #8bc34a;
	border-right-color: #8bc34a;
	border-bottom-color: transparent;
	border-left-color: transparent;
}
.material-card.Light-Green h2:before {
	border-top-color: transparent;
	border-right-color: #33691e;
	border-bottom-color: #33691e;
	border-left-color: transparent;
}
.material-card.Light-Green.mc-active h2:before {
	border-top-color: transparent;
	border-right-color: #8bc34a;
	border-bottom-color: #8bc34a;
	border-left-color: transparent;
}
.material-card.Light-Green.mc-active h2:after {
	border-top-color: #33691e;
	border-right-color: #33691e;
	border-bottom-color: transparent;
	border-left-color: transparent;
}
.material-card.Light-Green .mc-btn-action {
	background-color: #8bc34a;
}
.material-card.Light-Green .mc-btn-action:hover {
	background-color: #33691e;
}
.material-card.Light-Green .mc-footer h4 {
	color: #33691e;
}
.material-card.Light-Green .mc-footer a {
	background-color: #33691e;
}
.material-card.Light-Green.mc-active .mc-content {
	background-color: #f1f8e9;
}
.material-card.Light-Green.mc-active .mc-footer {
	background-color: #dcedc8;
}
.material-card.Light-Green.mc-active .mc-btn-action {
	border-color: #f1f8e9;
}
.material-card.Lime h2 {
	background-color: #cddc39;
}
.material-card.Lime h2:after {
	border-top-color: #cddc39;
	border-right-color: #cddc39;
	border-bottom-color: transparent;
	border-left-color: transparent;
}
.material-card.Lime h2:before {
	border-top-color: transparent;
	border-right-color: #827717;
	border-bottom-color: #827717;
	border-left-color: transparent;
}
.material-card.Lime.mc-active h2:before {
	border-top-color: transparent;
	border-right-color: #cddc39;
	border-bottom-color: #cddc39;
	border-left-color: transparent;
}
.material-card.Lime.mc-active h2:after {
	border-top-color: #827717;
	border-right-color: #827717;
	border-bottom-color: transparent;
	border-left-color: transparent;
}
.material-card.Lime .mc-btn-action {
	background-color: #cddc39;
}
.material-card.Lime .mc-btn-action:hover {
	background-color: #827717;
}
.material-card.Lime .mc-footer h4 {
	color: #827717;
}
.material-card.Lime .mc-footer a {
	background-color: #827717;
}
.material-card.Lime.mc-active .mc-content {
	background-color: #f9fbe7;
}
.material-card.Lime.mc-active .mc-footer {
	background-color: #f0f4c3;
}
.material-card.Lime.mc-active .mc-btn-action {
	border-color: #f9fbe7;
}
.material-card.Peach h2 {
	background-color: #f98484;
}
.material-card.Peach h2:after {
	border-top-color: #f98484;
	border-right-color: #f98484;
	border-bottom-color: transparent;
	border-left-color: transparent;
}
.material-card.Peach h2:before {
	border-top-color: transparent;
	border-right-color: #f57f17;
	border-bottom-color: #f57f17;
	border-left-color: transparent;
}
.material-card.Peach.mc-active h2:before {
	border-top-color: transparent;
	border-right-color: #ffeb3b;
	border-bottom-color: #ffeb3b;
	border-left-color: transparent;
}
.material-card.Peach.mc-active h2:after {
	border-top-color: #f57f17;
	border-right-color: #f57f17;
	border-bottom-color: transparent;
	border-left-color: transparent;
}
.material-card.Peach .mc-btn-action {
	background-color: #ffeb3b;
}
.material-card.Peach .mc-btn-action:hover {
	background-color: #f57f17;
}
.material-card.Peach .mc-footer h4 {
	color: #f57f17;
}
.material-card.Peach .mc-footer a {
	background-color: #f57f17;
}
.material-card.Peach.mc-active .mc-content {
	background-color: #fffde7;
}
.material-card.Peach.mc-active .mc-footer {
	background-color: #fff9c4;
}
.material-card.Peach.mc-active .mc-btn-action {
	border-color: #fffde7;
}
.material-card.Amber h2 {
	background-color: #ffc107;
}
.material-card.Amber h2:after {
	border-top-color: #ffc107;
	border-right-color: #ffc107;
	border-bottom-color: transparent;
	border-left-color: transparent;
}
.material-card.Amber h2:before {
	border-top-color: transparent;
	border-right-color: #ff6f00;
	border-bottom-color: #ff6f00;
	border-left-color: transparent;
}
.material-card.Amber.mc-active h2:before {
	border-top-color: transparent;
	border-right-color: #ffc107;
	border-bottom-color: #ffc107;
	border-left-color: transparent;
}
.material-card.Amber.mc-active h2:after {
	border-top-color: #ff6f00;
	border-right-color: #ff6f00;
	border-bottom-color: transparent;
	border-left-color: transparent;
}
.material-card.Amber .mc-btn-action {
	background-color: #ffc107;
}
.material-card.Amber .mc-btn-action:hover {
	background-color: #ff6f00;
}
.material-card.Amber .mc-footer h4 {
	color: #ff6f00;
}
.material-card.Amber .mc-footer a {
	background-color: #ff6f00;
}
.material-card.Amber.mc-active .mc-content {
	background-color: #fff8e1;
}
.material-card.Amber.mc-active .mc-footer {
	background-color: #ffecb3;
}
.material-card.Amber.mc-active .mc-btn-action {
	border-color: #fff8e1;
}
.material-card.Orange h2 {
	background-color: #ff9800;
}
.material-card.Orange h2:after {
	border-top-color: #ff9800;
	border-right-color: #ff9800;
	border-bottom-color: transparent;
	border-left-color: transparent;
}
.material-card.Orange h2:before {
	border-top-color: transparent;
	border-right-color: #e65100;
	border-bottom-color: #e65100;
	border-left-color: transparent;
}
.material-card.Orange.mc-active h2:before {
	border-top-color: transparent;
	border-right-color: #ff9800;
	border-bottom-color: #ff9800;
	border-left-color: transparent;
}
.material-card.Orange.mc-active h2:after {
	border-top-color: #e65100;
	border-right-color: #e65100;
	border-bottom-color: transparent;
	border-left-color: transparent;
}
.material-card.Orange .mc-btn-action {
	background-color: #ff9800;
}
.material-card.Orange .mc-btn-action:hover {
	background-color: #e65100;
}
.material-card.Orange .mc-footer h4 {
	color: #e65100;
}
.material-card.Orange .mc-footer a {
	background-color: #e65100;
}
.material-card.Orange.mc-active .mc-content {
	background-color: #fff3e0;
}
.material-card.Orange.mc-active .mc-footer {
	background-color: #ffe0b2;
}
.material-card.Orange.mc-active .mc-btn-action {
	border-color: #fff3e0;
}
.material-card.Deep-Orange h2 {
	background-color: #ff5722;
}
.material-card.Deep-Orange h2:after {
	border-top-color: #ff5722;
	border-right-color: #ff5722;
	border-bottom-color: transparent;
	border-left-color: transparent;
}
.material-card.Deep-Orange h2:before {
	border-top-color: transparent;
	border-right-color: #bf360c;
	border-bottom-color: #bf360c;
	border-left-color: transparent;
}
.material-card.Deep-Orange.mc-active h2:before {
	border-top-color: transparent;
	border-right-color: #ff5722;
	border-bottom-color: #ff5722;
	border-left-color: transparent;
}
.material-card.Deep-Orange.mc-active h2:after {
	border-top-color: #bf360c;
	border-right-color: #bf360c;
	border-bottom-color: transparent;
	border-left-color: transparent;
}
.material-card.Deep-Orange .mc-btn-action {
	background-color: #ff5722;
}
.material-card.Deep-Orange .mc-btn-action:hover {
	background-color: #bf360c;
}
.material-card.Deep-Orange .mc-footer h4 {
	color: #bf360c;
}
.material-card.Deep-Orange .mc-footer a {
	background-color: #bf360c;
}
.material-card.Deep-Orange.mc-active .mc-content {
	background-color: #fbe9e7;
}
.material-card.Deep-Orange.mc-active .mc-footer {
	background-color: #ffccbc;
}
.material-card.Deep-Orange.mc-active .mc-btn-action {
	border-color: #fbe9e7;
}
.material-card.Brown h2 {
	background-color: #795548;
}
.material-card.Brown h2:after {
	border-top-color: #795548;
	border-right-color: #795548;
	border-bottom-color: transparent;
	border-left-color: transparent;
}
.material-card.Brown h2:before {
	border-top-color: transparent;
	border-right-color: #3e2723;
	border-bottom-color: #3e2723;
	border-left-color: transparent;
}
.material-card.Brown.mc-active h2:before {
	border-top-color: transparent;
	border-right-color: #795548;
	border-bottom-color: #795548;
	border-left-color: transparent;
}
.material-card.Brown.mc-active h2:after {
	border-top-color: #3e2723;
	border-right-color: #3e2723;
	border-bottom-color: transparent;
	border-left-color: transparent;
}
.material-card.Brown .mc-btn-action {
	background-color: #795548;
}
.material-card.Brown .mc-btn-action:hover {
	background-color: #3e2723;
}
.material-card.Brown .mc-footer h4 {
	color: #3e2723;
}
.material-card.Brown .mc-footer a {
	background-color: #3e2723;
}
.material-card.Brown.mc-active .mc-content {
	background-color: #efebe9;
}
.material-card.Brown.mc-active .mc-footer {
	background-color: #d7ccc8;
}
.material-card.Brown.mc-active .mc-btn-action {
	border-color: #efebe9;
}
.material-card.Grey h2 {
	background-color: #9e9e9e;
}
.material-card.Grey h2:after {
	border-top-color: #9e9e9e;
	border-right-color: #9e9e9e;
	border-bottom-color: transparent;
	border-left-color: transparent;
}
.material-card.Grey h2:before {
	border-top-color: transparent;
	border-right-color: #212121;
	border-bottom-color: #212121;
	border-left-color: transparent;
}
.material-card.Grey.mc-active h2:before {
	border-top-color: transparent;
	border-right-color: #9e9e9e;
	border-bottom-color: #9e9e9e;
	border-left-color: transparent;
}
.material-card.Grey.mc-active h2:after {
	border-top-color: #212121;
	border-right-color: #212121;
	border-bottom-color: transparent;
	border-left-color: transparent;
}
.material-card.Grey .mc-btn-action {
	background-color: #9e9e9e;
}
.material-card.Grey .mc-btn-action:hover {
	background-color: #212121;
}
.material-card.Grey .mc-footer h4 {
	color: #212121;
}
.material-card.Grey .mc-footer a {
	background-color: #212121;
}
.material-card.Grey.mc-active .mc-content {
	background-color: #fafafa;
}
.material-card.Grey.mc-active .mc-footer {
	background-color: #f5f5f5;
}
.material-card.Grey.mc-active .mc-btn-action {
	border-color: #fafafa;
}
.material-card.Blue-Grey h2 {
	background-color: #607d8b;
}
.material-card.Blue-Grey h2:after {
	border-top-color: #607d8b;
	border-right-color: #607d8b;
	border-bottom-color: transparent;
	border-left-color: transparent;
}
.material-card.Blue-Grey h2:before {
	border-top-color: transparent;
	border-right-color: #263238;
	border-bottom-color: #263238;
	border-left-color: transparent;
}
.material-card.Blue-Grey.mc-active h2:before {
	border-top-color: transparent;
	border-right-color: #607d8b;
	border-bottom-color: #607d8b;
	border-left-color: transparent;
}
.material-card.Blue-Grey.mc-active h2:after {
	border-top-color: #263238;
	border-right-color: #263238;
	border-bottom-color: transparent;
	border-left-color: transparent;
}
.material-card.Blue-Grey .mc-btn-action {
	background-color: #607d8b;
}
.material-card.Blue-Grey .mc-btn-action:hover {
	background-color: #263238;
}
.material-card.Blue-Grey .mc-footer h4 {
	color: #263238;
}
.material-card.Blue-Grey .mc-footer a {
	background-color: #263238;
}
.material-card.Blue-Grey.mc-active .mc-content {
	background-color: #eceff1;
}
.material-card.Blue-Grey.mc-active .mc-footer {
	background-color: #cfd8dc;
}
.material-card.Blue-Grey.mc-active .mc-btn-action {
	border-color: #eceff1;
}
</style>
<style scoped>
.deputy-hr {
		height: 1px;
		width: auto;
		margin: 0 1rem;
	}
/* Media queries */
@media (min-width: 768px) and (max-width: 1024px) {
	.about {
		padding: 20px 0;
	}
	.body_wrapper {
		margin: 0 !important;
		grid-template-rows: .5fr 1fr;
		grid-template-columns: unset;
		justify-items: center;
		align-items: center;
	}
	.body_inner_left_holder {
		width: 50% !important;
		padding: 0 !important;
	}
	article.material-card {
		margin-bottom: 100px !important;
	}
	.body_inner_right {
		width: 80% !important;
	}
	.deputy-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	.deputy-container > .team-member {
		margin-bottom: 10px;
	}

	.director-container {
		display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
	}
	.deputy-hr {
		margin: 0 3rem 1rem;
		width: 90%;
	}
  .team-member{
    width: 25%;
  }
}
@media screen and (max-width: 425px) {
	.heading {
		margin: 0;
		padding: 0;
		font-size: 2rem;
	}
	.about {
		padding: 15px 0;
	}
	.year-theme {
		padding: 1rem !important;
	}
	.body_wrapper {
		margin: 0 !important;
		grid-template-rows: .5fr 1fr;
		grid-template-columns: unset;
		align-items: center;
	}
	.body_inner_left_holder {
		width: 100% !important;
		padding: 0 !important;
	}
	article.material-card {
		margin-bottom: 100px !important;
	}
	.body_inner_right {
		width: 100% !important;
	}
	.core-team {
		margin: 1rem 0;
	}
	.deputy-hr {
		margin: 0 3rem;
		width: auto;
	}
}
</style>
