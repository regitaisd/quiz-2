<template>
	<div class="wrapper">
		<nav class="navbar navbar-static-top navbar-default">
			<div class="container">
				<div class="navbar-header">
					<router-link to="/" class="navbar-brand">Home</router-link>
					<router-link to="/item" class="navbar-brand">Items</router-link>
					<router-link to="/login" class="navbar-brand">Login</router-link>
					<router-link to="/register" class="navbar-brand">Register</router-link>
				</div>
				<!--<ul class="nav navbar-nav navbar-right">
					<li>
						<router-link to="/item">Items</router-link>
					</li>
				</ul>-->
			</div>
		</nav>
		<main>
			<router-view></router-view>
		</main>
		<footer>
			<p class="text-center">Copyright &copy L4AC</p>
		</footer>
	</div>
</template>

<script src="./app.component.js"></script>
<link rel="stylesheet" type="text/css" href="../assets/fonts/bootstrap">