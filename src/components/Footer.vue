<template>
	<div>
		<footer class="text-white-50">
			<div class="container">
				<div class="row pt-4">
					<div
						class="col-lg-3 col-md-4 mb-4 mb-lg-0"
						style="border-right: 1px solid grey; padding-right: 45px;"
					>
						<img src="../assets/img/DistrictlogoB.png" alt="" width="200" />
						<p class="spacing"><i>Come what may we’ll see it through,</i></p>
						<p class="spacing"><i>Ekatra in all we do</i></p>
						<ul class="list-inline mt-4"></ul>
					</div>
					<div class="col-lg-2 col-md-2 mb-4 mb-lg-0">
						<h6 class="text-uppercase font-weight-bold mb-4">
							<b>About us</b>
						</h6>
						<ul class="list-unstyled mb-0">
							<li class="mb-2">
								<router-link to="about" class="text-muted"
									>Who we are</router-link
								>
							</li>
							<!-- <li class="mb-2"><a href="#" class="text-muted">About Rotary</a></li> -->
							<li class="mb-2">
								<router-link to="team" class="text-muted"
									>Team 2021-22</router-link
								>
							</li>
							<li class="mb-2">
								<router-link to="zones" class="text-muted"
									>Zonal Bifurcation</router-link
								>
							</li>
							<li class="mb-2">
								<router-link to="faq" class="text-muted">FAQs</router-link>
							</li>
						</ul>
					</div>
					<!-- <div class="col-lg-2 col-md-2 mb-4 mb-lg-0">
						<h6 class="text-uppercase font-weight-bold mb-4">
							<router-link to="projects" class="text-muted"
								><b>Our Projects</b></router-link
							>
						</h6>
						<ul class="list-unstyled mb-0">
							<li class="mb-2">
								<a href="#" class="text-muted">Club Service</a>
							</li>
							<li class="mb-2">
								<a href="#" class="text-muted">Community Service</a>
							</li>
							<li class="mb-2">
								<a href="#" class="text-muted">Career and Skills</a>
							</li>
							<li class="mb-2">
								<a href="#" class="text-muted">Going Global</a>
							</li>
							<li class="mb-2"><a href="#" class="text-muted">Sports</a></li>
						</ul>
					</div> -->
					<div class="col-lg-2 col-md-2 mb-lg-0">
						<h6 class="text-uppercase font-weight-bold mb-4">
							<b>For Members</b>
						</h6>
						<ul class="list-unstyled mb-0">
							<li class="mb-2">
								<a href="https://rotaract3142.org/desk" class="text-muted"
									>Pranali</a
								>
							</li>
							<li class="mb-2"><a href="#" class="text-muted">Resources</a></li>
							<li class="mb-2">
								<a href="https://rotaract3142.org/blog" class="text-muted"
									>Blog</a
								>
							</li>
						</ul>
					</div>
					<div class="col-lg-2 col-md-2 mb-lg-6">
						<h6 class="text-uppercase font-weight-bold mb-4">
							<b>Social Media</b>
						</h6>
						<ul class="list-unstyled mb-0">
							<li class="mb-2">
								<a
									href="https://twitter.com/Rotaract_3142"
									target="_blank"
									class="text-muted"
									>Twitter</a
								>
							</li>
							<li class="mb-2">
								<a
									href="https://www.facebook.com/rotaract3142"
									target="_blank"
									class="text-muted"
									>Facebook</a
								>
							</li>
							<li class="mb-2">
								<a
									href="https://www.instagram.com/rotaract3142/"
									target="_blank"
									class="text-muted"
									>Instagram</a
								>
							</li>
							<li class="mb-2">
								<a
									href="https://www.linkedin.com/company/rotaract-district-3142/"
									target="_blank"
									class="text-muted"
									>Linkedin</a
								>
							</li>
							<li class="mb-2">
								<a
									href="https://discord.gg/Ts5SBPqJzd"
									target="_blank"
									class="text-muted"
									>Discord Channel</a
								>
							</li>
							<!-- <li class="mb-2"><a href="#" target="_blank" class="text-muted">Mail</a></li> -->
						</ul>
					</div>
				</div>
				<hr />
				<div class="container text-center">
					<p class="text-muted mb-0 py-2">
						© 2021 Rotaract District 3142. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	</div>
</template>

<script>
export default {
	name: "Footer",
};
</script>

<style scoped>
.spacing{
	margin: 1px;
}
hr {
	color: #585858;
}
i {
	color: #585858;
}
.text-uppercase {
	color: #585858;
}
footer {
	background-color: #fcfcfc;
}
a {
	color: #585858 !important;
	text-decoration: inherit !important;
}
a:hover {
	color: black !important;
}
</style>
