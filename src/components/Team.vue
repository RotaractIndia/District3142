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
              src="../assets/CMLogoB.png"
              class="img-fluid"
              alt="ChangeMaker Logo"
              data-aos="zoom-in"
            />
          </div>
          <div class="col-lg-6 pt-5 pt-lg-0 year-theme">
            <!-- <img class="image" src="../assets/CMLogoB.png" alt=""><br> -->
            <p data-aos="fade-up" data-aos-delay="100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              aute irure dolor in reprehenderit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Duis aute irure dolor in
              reprehenderit. <br /><br />
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
              <img class="img-responsive" src="../assets/ct/Rahesh.jpeg" />
            </div>
          </div>
        </article>
      </div>
      <div class="body_inner_right">
        Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but
        also the leap into electronic typesetting, remaining essentially
        unchanged. It was popularised in the 1960s with the release of Letraset
        sheets containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
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
            <span>Rtn. Rtr. Amit Lad</span>
            <strong style="font-size: 15px">
              Immediate Past District Rotaract Representative
            </strong>
          </h2>
          <div class="mc-content">
            <div class="img-container">
              <img class="img-responsive" src="../assets/ct/Amit.jpg" />
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
              <img class="img-responsive" src="../assets/ct/Adil.jpg" />
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
        <h1 class="heading">Core Team<br /></h1>
      </div>
      <div class="row active-with-click">


        <div
        v-for="(member,k) in coreTeam" :key="k" 
        class="col-md-3 col-sm-5 col-xs-10">
          <article class="material-card" :class=member.color>
            <h2>
              <span>{{member.name}}</span>
              <strong>
                <i class="fa fa-fw fa-star"></i>
                {{member.position}}
              </strong>
            </h2>
            <div class="mc-content">
              <div class="img-container">
                <img class="img-responsive" src="../assets/ct/Mithila.jpg"/>
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
  <details
  v-for="(member,k) in council" :key="k"
  >
   <summary><b>{{member.avenue}}</b></summary><br>

<div class="council-container">
  <div class="deputy-container" v-if="member['deputy']">
    <div class="team-member"
    v-for="(dep, j) in member['deputy']" :key="j">
        <img class="team-photo" :src=dep.photo><br>
        <h3>{{dep.name}}</h3>
        <span>{{dep.designation}}</span>
      </div>
  </div>

  <div class="director-container">
   <div class="team-member" v-for="(dir, i) in member['directors']" :key="i">
      <img class="team-photo" :src=dir.photo><br>
      <h3>{{dir.name}}</h3>
      <span>{{dir.designation}}</span>
    </div>
  </div>

</div>
</details>
<!-- <details>
   <summary><b>Team Finance</b></summary><br>
   <div class="team-member">
      <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div>
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div>
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div> 
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div> 
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div> 
</details>
<details>
   <summary><b>Team Club Service</b></summary><br>
   <div class="team-member">
      <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div>
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div>
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div> 
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div> 
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div> 
</details>
<details>
   <summary><b>Team Community Service</b></summary><br>
   <div class="team-member">
      <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div>
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div>
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div> 
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div> 
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div> 
</details>
<details>
   <summary><b>Team Entrepreneurship Service</b></summary><br>
   <div class="team-member">
      <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div>
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div>
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div> 
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div> 
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div> 
</details>
<details>
   <summary><b>Team International Service</b></summary><br>
   <div class="team-member">
      <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div>
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div>
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div> 
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div> 
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div> 
</details>
<details>
   <summary><b>Team Sports</b></summary><br>
   <div class="team-member">
      <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div>
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div>
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div> 
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div> 
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div> 
</details>
 <details>
   <summary><b>Team Professional Development</b></summary><br>
   <div class="team-member">
      <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div>
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div>
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div> 
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div> 
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div> 
</details>
<details>
   <summary><b>Team Admin & Events</b></summary><br>
   <div class="team-member">
      <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div>
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div>
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div> 
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div> 
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div> 
</details>
<details>
   <summary><b>Team Digital Communications</b></summary><br>
   <div class="team-member">
      <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div>
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div>
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div> 
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div> 
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div> 
</details>
<details>
   <summary><b>Team Corporate Communications</b></summary><br>
   <div class="team-member">
      <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div>
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div>
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div> 
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div> 
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div> 
</details>
<details>
   <summary><b>Team Training, Revival & Sustenance</b></summary><br>
   <div class="team-member">
      <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div>
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div>
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div> 
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div> 
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div> 
</details>
<details>
   <summary><b>Team Zones</b></summary><br>
   <div class="team-member">
      <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div>
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div>
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div> 
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div> 
    
    <div class="team-member">
    <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
      <h3>Person's Name</h3>
      <span>This section could be used to show a very short bio description for each member</span>
    </div> 
</details> -->
 </div>
</div>
  </div>
</template>

<script>
export default {
  name: "Team",
  data(){
    return{
      coreTeam:[
        { name:"Rtr. Mithila Salvi", position:"District Secretry", image:"../assets/ct/Mithila.jpg", color:"Deep-Purple" },
        { name:"Rtr. Shanmukhswami Gowda", position:"Deputy DRR & Corporate Communications Chair", image:"../assets/ct/Shanmukh.jpg", color:"Purple" },
        { name:"Rtn. Rtr. Swapnil Kadu", position:"District Finance Chair", image:"../assets/ct/Swapnil.jpg", color:"Blue" },
        { name:"Rtr. Vijal Kathrani", position:"District TRS Chair", image:"../assets/ct/Vijal.jpg", color:"Light-Blue" },
        { name:"Rtr. Gauri Rane", position:"District Digital Communications Chair", image:"../assets/ct/Gauri.jpg", color:"Cyan" },
        { name:"Rtr. Chinmay Sheth", position:"District Technology Development Chair", image:"../assets/ct/ChinmayS.jpg", color:"Teal" },
        { name:"Rtr. Sushmita Valecha", position:"District Avenues 1 Chair", image:"../assets/ct/Sushmita.jpg", color:"Green" },
        { name:"Rtn. Rtr. Hardik Patel", position:"District Avenues 2 Chair", image:"../assets/ct/Hardik.jpg", color:"Light-Green" },
        { name:"Rtr. Siddhi Kubal", position:"District Administration Chair", image:"../assets/ct/Siddhi.jpg", color:"Lime" },
        { name:"Rtn. Rtr. Vaibhav Vispute", position:"District Sergeant-At-Arms", image:"../assets/ct/Vaibhav.jpg", color:"Yellow" },
      ],
      council:[
        {
          avenue:"Team Secretariat",
          directors:[
            {
              name:"Rtr. Ajinkya Dhuri",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Jt Secretary"
            },
            {
              name:"Rtr. Dr. Projesh Mukherjee",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Jt Secretary"
            },
            {
              name:"Rtr. Ruhika Kalsekar",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Jt Secretary"
            },
            {
              name:"Rtr. Sagar Brijwani",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Jt Secretary"
            },
          ],
        },
        {
          avenue:"Team Finance",
          directors:[
            {
              name:"Rtr. Sahil Agarwal",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Director Finance"
            },
            {
              name:"Rtr. Jitesh Bhatia ",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Director Finance"
            },
            {
              name:"Rtr. Vijay Kumawat",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Director Finance"
            },
            {
              name:"Rtr. Abhishek Pandey",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Director Finance"
            },
          ],
        },
        {
          avenue:"Team Club Service",
          deputy:[
            {
              name:"Rtr.Mahanand Vishwakarma",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Deputy Avenues 1 Chair"
            },
          ],
          directors:[
            {
              name:"Rtr. Viren Lassi",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Club Service Director"
            },
            {
              name:"Rtr. Jugnu Borkar",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Jt Club Service Director"
            },
            {
              name:"Rtr Mayuri Sapkale",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Jt Club Service Director"
            },
            {
              name:"Rtr. Abhishek Pandey",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Director Finance"
            },
          ],
        },
        {
          avenue:"Team Community Service",
          deputy:[
            {
              name:"Rtr.Mahanand Vishwakarma",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Deputy Avenues 1 Chair"
            },
          ],
          directors:[
            {
              name:"Rtr. Prem Nadar",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Community Service Director"
            },
            {
              name:"Rtr. Mitesh Jain",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Jt Community Service Director"
            },
            {
              name:"Rtr. Srushti Yashwante",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Jt Community Service Director"
            },
            {
              name:"Rtr. Mansi Kante",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Jt Community Service Director"
            },
          ],
        },
        {
          avenue:"Team Entrepreneurship Development",
          deputy:[
            {
              name:"Rtr.Mahanand Vishwakarma",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Deputy Avenues 1 Chair"
            },
          ],
          directors:[
            {
              name:"Rtr. Prasad Yadav",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Entrepreneurship Development Director"
            },
            {
              name:"Rtr. Natasha Jain",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Jt Entrepreneurship Development Director"
            },
            {
              name:"Rtr. Twinkle Matta",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Jt Entrepreneurship Development Director"
            },
          ],
        },
        {
          avenue:"Team Sports",
          deputy:[
            {
              name:"Rtr.Dr. Preeti Bhogle",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Deputy Avenues 2 Chair"
            },
          ],
          directors:[
            {
              name:"Rtr. Kunal Kataria",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Director Sports"
            },
            {
              name:"Rtr. Aditya Gharat",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Jt Director Sports"
            },
            {
              name:"Rtr. Rruchi Bhandari",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Jt Director Sports"
            },
          ],
        },
        {
          avenue:"Team International Service",
          deputy:[
            {
              name:"Rtr.Dr. Preeti Bhogle",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Deputy Avenues 2 Chair"
            },
          ],
          directors:[
            {
              name:"Rtr. Aishwarya Gupta ",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"International Service Director"
            },
            {
              name:"Rtr. Needhi Shukla",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Jt International Service Director"
            },
            {
              name:"Rtr. Rushikesh Bhadane",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Jt International Service Director"
            },
          ],
        },
        {
          avenue:"Team Professional Development",
          deputy:[
            {
              name:"Rtr.Dr. Preeti Bhogle",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Deputy Avenues 2 Chair"
            },
          ],
          directors:[
            {
              name:"Rtr. Vishal Shah",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Professional Development Director"
            },
            {
              name:"Rtr. Reena Mapari",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Jt Professional Development Director"
            },
            {
              name:"Rtr. Anvi Shetty",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Jt Professional Development Director"
            },
          ],
        },
        {
          avenue:"Team Admin & Events",
          deputy:[
            {
              name:"Rtr.Ranjeet Pandey",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Deputy Events and Admin"
            },
          ],
          directors:[
            {
              name:"Rtr. Shraddha Purohit",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Director Admin"
            },
            {
              name:"Rtr. Noopur Rahane",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Jt Director Admin"
            },
            {
              name:"Rtn. Rtr. Archit Patki",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Jt Director Admin"
            },
            {
              name:"Rtr. Tanmay Deshpande",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Director Events"
            },
            {
              name:"Rtr. Sumit Bhanage",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Jt Director Events"
            },
            {
              name:"Rtr. Vijay Malkani",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Jt Director Events"
            },
          ],
        },
        {
          avenue:"Team Digital Communications",
          deputy:[
            {
              name:"Rtr. Mayuresh Jadhav",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Deputy Digital Communications Chair"
            },
          ],
          directors:[
            {
              name:"Rtr. Radhika Jagtap",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Social Media Director"
            },
            {
              name:"Rtr. Chinmay Pradhan",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Jt Social Media Director"
            },
            {
              name:"Rtr. Sagar Pandit",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Creative Director"
            },
            {
              name:"Rtr. Jayesh Zurunge",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Jt Creative Director"
            },
            {
              name:"Rtr. Kiran Barai",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Jt Creative Director"
            },
            {
              name:"Rtr. Jitesh Bhatia",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Editor"
            },
          ],
        },
        {
          avenue:"Team Photography",
          deputy:[
            {
              name:"Rtr. Mayuresh Jadhav",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Deputy Digital Communications Chair"
            },
          ],
          directors:[
            {
              name:"Rtr. Rahul Yadav",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Director of Photography"
            },
            {
              name:"Rtr. Viraj Sawant",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Assistant Director of Photography"
            },
            {
              name:"Rtr. Rahul Chahande",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Assistant Professional Development Director"
            },
            {
              name:"Rtr. Shubhang Kashikar",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Assistant Director of Photography"
            },
          ],
        },
        {
          avenue:"Team Marketing",
          deputy:[
            {
              name:"Rtr. Rahul Shelar",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Deputy Corporate Communicataions Chair"
            },
            {
              name:"Rtr. Ravi Suthar",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Deputy Corporate Communicataions Chair"
            },
          ],
          directors:[
            {
              name:"Rtr. Jinit Patel",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Director Marketing"
            },
            {
              name:"Rtr. Omkar Kadu",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Jt Director Marketing"
            },
            {
              name:"Rtr. Zenil Shah",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Jt Director Marketing"
            },
            {
              name:"Rtr. Keerthana Nambiar",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Jt Director Marketing"
            },
            {
              name:"Rtr. Rohan Solanki",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Jt Director Marketing"
            },
          ],
        },
        {
          avenue:"Team Public Relations",
          deputy:[
            {
              name:"Rtr. Rahul Shelar",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Deputy Corporate Communicataions Chair"
            },
            {
              name:"Rtr. Ravi Suthar",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Deputy Corporate Communicataions Chair"
            },
          ],
          directors:[
            {
              name:"Rtr. Arya Gawade",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Director PR"
            },
            {
              name:"Rtr. Khushabu Agarwal",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Jt Director PR"
            },
            {
              name:"Rtr. Dhiraj Valecha",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Jt Director PR"
            },
            {
              name:"Rtr. Kajal Dusseja",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Jt Director PR"
            },
            {
              name:"Rtr. Rohan Solanki",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Jt Director Marketing"
            },
          ],
        },
        {
          avenue:"Team CSR",
          deputy:[
            {
              name:"Rtr. Rahul Shelar",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Deputy Corporate Communicataions Chair"
            },
            {
              name:"Rtr. Ravi Suthar",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Deputy Corporate Communicataions Chair"
            },
          ],
          directors:[
            {
              name:"Rtr. Saalim Ali",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Director CSR"
            },
            {
              name:"Rtr. Pratik Mate",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Jt Director CSR"
            },
          ],
        },
        {
          avenue:"Team PIS",
          deputy:[
            {
              name:"Rtr. Rahul Shelar",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Deputy Corporate Communicataions Chair"
            },
            {
              name:"Rtr. Ravi Suthar",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Deputy Corporate Communicataions Chair"
            },
          ],
          directors:[
            {
              name:"Rtr. Sanjeevani Bhagat",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Director PIS"
            },
            {
              name:"Rtr. Mihir Kocharekar",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Jt Director PIS"
            },
            {
              name:"Rtr. Shashant Singh",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Jt Director PIS"
            },
          ],
        },
        {
          avenue:"Team Training, Revival & Sustenance",
          directors:[
            {
              name:"Rtr. Sagar Mulchandani",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Director Training, Revival & Sustenance "
            },
            {
              name:"Rtr. Hrishikesh Sawant",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Director Training, Revival & Sustenance"
            },
            {
              name:"Rtr Shivam Yadav",
              photo:"http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120",
              designation:"Director Training, Revival & Sustenance"
            },
          ],
        },
      ],
    }
  }
};
</script>

<style scoped>
.council-container{
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
    height: 600px;
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
  margin-left: 19%;
  margin-right: 10%;
  display: flex;
  padding: 20px;
}
.body_inner_left_holder {
  width: 33.333%;
  padding-right: 60px;
  padding-top: 10px;
}
.body_inner_left {
  width: 100%;
}
.body_inner_right {
  padding-top: 25px;
  display: flex;
  width: 55%;
  justify-content: flex-start;
  float: right;
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
  filter: grayscale(100%);
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
.material-card.Yellow h2 {
  background-color: #ffeb3b;
}
.material-card.Yellow h2:after {
  border-top-color: #ffeb3b;
  border-right-color: #ffeb3b;
  border-bottom-color: transparent;
  border-left-color: transparent;
}
.material-card.Yellow h2:before {
  border-top-color: transparent;
  border-right-color: #f57f17;
  border-bottom-color: #f57f17;
  border-left-color: transparent;
}
.material-card.Yellow.mc-active h2:before {
  border-top-color: transparent;
  border-right-color: #ffeb3b;
  border-bottom-color: #ffeb3b;
  border-left-color: transparent;
}
.material-card.Yellow.mc-active h2:after {
  border-top-color: #f57f17;
  border-right-color: #f57f17;
  border-bottom-color: transparent;
  border-left-color: transparent;
}
.material-card.Yellow .mc-btn-action {
  background-color: #ffeb3b;
}
.material-card.Yellow .mc-btn-action:hover {
  background-color: #f57f17;
}
.material-card.Yellow .mc-footer h4 {
  color: #f57f17;
}
.material-card.Yellow .mc-footer a {
  background-color: #f57f17;
}
.material-card.Yellow.mc-active .mc-content {
  background-color: #fffde7;
}
.material-card.Yellow.mc-active .mc-footer {
  background-color: #fff9c4;
}
.material-card.Yellow.mc-active .mc-btn-action {
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
  padding: 55px 0;
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

.material-card.Purple h2 span{
  font-size:20px;
}
</style>