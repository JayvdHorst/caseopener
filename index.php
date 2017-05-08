<?php

// Database
require('includes/config.php');
require('includes/bootstrap.php');

// Basic html head
include 'views/head.html';

$action = isset($_GET['action'])?$_GET['action']:'twfcases';

switch ($action) {
    default:

    case 'twfcases':

		include 'views/header.html';
        include 'views/home.html';

    break;

    case 'bravo';

	    include 'views/header.html';
        include 'views/bravo.html';

    break;
}

// Basis footer HTML includen
include 'views/footer.html';

