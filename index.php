<?php
	$currentPage = 'temp';
	include('components/head.php');
?>

<section id='middle'>

	<h1 class='logo'>
		<?php echo file_get_contents('assets/svg/logo.svg'); ?>
	</h1>

	<p class='move'>
		movve
	</p>
	
	<p class='infos'>
		<a href='mailto:<?php echo($email); ?>' class='hover-underline'>
			<?php echo($email); ?>
		</a>

		<a href='tel:<?php echo str_replace(' ', '', $phone1); ?>' class='hover-underline'>
			<?php echo($phone1); ?>
		</a>

		<a href='tel:<?php echo str_replace(' ', '', $phone2); ?>' class='hover-underline'>
			<?php echo($phone2); ?>
		</a>

		<a href='https://www.instagram.com/<?php echo($instagram); ?>' class='hover-underline' target='_blank'>
			@<?php echo($instagram); ?>
		</a>
	</p>

	<div class='trail'>
		<img src='assets/img/trail/1.jpg' alt='Some image' />
		<img src='assets/img/trail/2.jpg' alt='Some image' />
		<img src='assets/img/trail/3.jpg' alt='Some image' />
		<img src='assets/img/trail/4.jpg' alt='Some image' />
		<img src='assets/img/trail/5.jpg' alt='Some image' />
		<img src='assets/img/trail/6.jpg' alt='Some image' />
		<img src='assets/img/trail/7.jpg' alt='Some image' />
		<img src='assets/img/trail/8.jpg' alt='Some image' />
		<img src='assets/img/trail/9.jpg' alt='Some image' />
	</div>

</section>

<?php include('components/footer.php');?>