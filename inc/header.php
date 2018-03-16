<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link href="UYB.css" type="text/css" rel="stylesheet">
        <script src="https://use.fontawesome.com/7c65225290.js"></script>
        <title><?php echo $pageTitle; ?></title>
  </head>
  <body id="<?php echo $section; ?>"> 
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #1d2e5c;">
        <a class="navbar-brand" href="index.php">Unform Your Bias&trade;</a>
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#collapse-navbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa fa-bars" aria-hidden="true" id="navIcon"></i>
        </button>
        <div class="collapse navbar-collapse" id="collapse-navbar">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item <?php if ($section == "HomePage") { echo "active"; } ?>"><a class="nav-link" href="index.php">Home</a></li>
                <li class="nav-item <?php if ($section == "BiosPage") { echo "active"; } ?>"><a class="nav-link" href="Bios.php">Bios</a></li>
                <li class="nav-item <?php if ($section == "EducationPage") { echo "active"; } ?>"><a class="nav-link" href="UYBEducation.php">Education</a></li>
                <li class="nav-item <?php if ($section == "CommunitiesPage") { echo "active"; } ?>"><a class="nav-link" href="UYBCommunities.php">Communities</a></li>
                <li class="nav-item dropdown <?php if ($section == "VolunteerPage") { echo "active"; } ?>"><a class="nav-link dropdown-toggle" href="UYBVolunteer.php" id="navbarDropdown">Volunteer <span class="caret"></span></a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="initiativePage.php#marketing">Marketing</a>
                        <a class="dropdown-item" href="initiativePage.php#fundraising">Fundraising</a>
                        <a class="dropdown-item" href="initiativePage.php#communityOutreach">Community Outreach</a>
                        <a class="dropdown-item" href="initiativePage.php#educationInitiative">Education</a>
                        <a class="dropdown-item" href="initiativePage.php#administration">Administration</a>
                    </div>
                </li>
                <li class="nav-item <?php if ($section == "DonatePage") { echo "active"; } ?>"><a class="nav-link" href="UYBDonate.php">Donate</a></li>
                <li class="nav-item <?php if ($section == "spreadTheWordPage") { echo "active"; } ?>"><a class="nav-link" href="spreadTheWord.php">Spread The Word</a></li>
            </ul>
            <ul class="nav justify-content-end">
                <li class="nav-item"><a class="nav-link" href="https://twitter.com/UnformYourBias" target="_blank" id="social" style="color: whitesmoke;"><i class="fa fa-twitter fa-lg"></i></a></li>
                <li class="nav-item"><a class="nav-link" href="https://www.facebook.com/UnformYourBias/" target="_blank" id="social" style="color: whitesmoke;"><i class="fa fa-facebook-official fa-lg"></i></a></li>
            </ul>
        </div>
    </nav>