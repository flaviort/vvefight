<?php include('components/globals.php') ?>

<!DOCTYPE html>
	<html lang='en-US'>

		<head>

			<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
			<meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>
			<meta name='format-detection' content='telephone=no'>
			<link rel='shortcut icon' href='favicon.png'>

			<meta name='author' content='<?php echo($siteTitle); ?>'>

			<title><?php echo($siteTitle); ?> <?php echo htmlspecialchars($page);?></title>

			<!-- google -->
			<meta name='description' content='<?php echo($siteDesc); ?>' />
			<link rel='canonical' href='<?php echo($siteUrl); ?>' />
				
			<!-- facebook -->
			<meta property='og:locale' content='en_US' />
			<meta property='og:type' content='website' />
			<meta property='og:title' content='<?php echo($siteTitle); ?>' />
			<meta property='og:description' content='<?php echo($siteDesc); ?>' />
			<meta property='og:url' content='<?php echo($siteUrl); ?>/' />
			<meta property='og:site_name' content='<?php echo($siteTitle); ?>' />
			<meta property='og:image' content='<?php echo($siteUrl); ?>/assets/img/og-image.jpg' />
			<meta property='og:image:secure_url' content='<?php echo($siteUrl); ?>/assets/img/og-image.jpg' />
			<meta property='og:image:width' content='1200' />
			<meta property='og:image:height' content='630' />

			<!-- css -->
			<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css' />
			<link rel='preconnect' href='https://fonts.googleapis.com'>
			<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin>
			<link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap'>
			<link rel='stylesheet' href='assets/css/main.css' type='text/css'>

			<!-- gtag -->
			<script async src='https://www.googletagmanager.com/gtag/js?id=G-H5S6T0TX79'></script>
			<script>
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', 'G-H5S6T0TX79');
			</script>

		</head>

		<body>
			<main id='main-content' class='<?php echo($currentPage); ?>'>