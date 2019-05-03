<template>
	<div class="home-container">
		<div class="data-analytics-container">
			<div class="data-header-container">
				<div class="menu-container">
					<i class="fa fa-bars"></i>
				</div>
				<div class="nav-bar-container">
					<ul>
						<li>
							<i class="fa fa-user"></i>
						</li>
						<li>
							<a><i class="fa fa-medkit active"></i></a>
						</li>
						<li>
							<a><i class="fa fa-building-o"></i></a>
						</li>
						<li>
							<a><i class="fa fa-credit-card"></i></a>
						</li>
					</ul>
				</div>
			</div>
			<div class="data-body-container">
				<div class="data-dash-header">
					<div class="title-container">
						<div>
							<img :src="'../assets/img/mednefits_icon_blue.png'">
						</div>
						<h3>Data Analytics</h3>
					</div>
					<div class="right-title-container">
						<div>
							<i class="fa fa-search" aria-hidden="true"></i>
						</div>
						<div>
							<i class="fa fa-bell" aria-hidden="true"></i>
						</div>
						<div class="profile-title-container">
							<div>
								<img :src="'../assets/img/jeamar.jpg'">
							</div>
							<div>
								Jeamar Libres
							</div>
							<div>
								<i class="fa fa-angle-down" aria-hidden="true"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import home from '@/components/home'
	export default home
</script>
