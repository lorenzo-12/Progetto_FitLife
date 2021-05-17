
<?php 
  session_start();
  $email = "----";
  if(isset($_SESSION['email'])){
    $email = $_SESSION['email'];
  }
  echo "<script>alert('$email');</script>";
  if(isset($_SESSION['logged_in'])){
    $session = $_SESSION['logged_in'];
  }

    $dbconn = pg_connect("host=localhost
                                  port=5432
                                  dbname=ltw
                                  user=postgres
                                  password=lollo")
              or die('could not connect' . pg_last_error() );
    $username="";
    $q1 = "SELECT username FROM user_d WHERE email=$1";
    $result1 = pg_query_params($dbconn,$q1,array($email));
    $line = pg_fetch_array($result1,null, PGSQL_ASSOC);
    if($line){  
      foreach ($line as $col_value) {
        $username=$col_value;
        echo "<script>alert('$username');</script>";
      }
    }

?>


<!DOCTYPE html>
<head>
    <!--Questo meta qua sotto serve per il mobile layout-->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Scheda</title>
    <!--Icone-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" 
      integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" 
      crossorigin="anonymous" />
    <!--Bootstrap-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" 
        rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" 
        crossorigin="anonymous">
    <link rel="stylesheet" href="loginStyle.css">
</head>
<body>
    <!-- NAVBAR -->
    <nav class="navbar fixed-top navbar-expand-md navbar-dark bg-dark" >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
              <img class="Mylogo" src="../Home/dumbell.svg" alt="logo">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="../Home/index.php">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../Home/index.php#chisiamoAnchor">Chi siamo</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../Scheda/Scheda.php">Scheda</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../alimentazione/bt.php">Alimentazione</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../Shop/index.php">Shop</a>
              </li>
            </ul>
            <form class="d-flex">
                <a class="nav-link" href="../Login/index.html"><button class="btn btn-outline-success" type="button" id="test_login" >Login</button></a>
            </form>
          </div>
        </div>
    </nav>
    <!-- FORMS-->
    <div id="form-box" class="container-sm">
        <div id="button-box">
            <div id="btnBack"></div>
            <button id="logbtn" type="button" class="toggle-btn" onclick="logSwitch()"> Log In</button>
            <button id="regbtn" type="button" class="toggle-btn" onclick="regSwitch()"> Register</button>
        </div>
        <!-- LOGIN FORM -->
        <div id="form-container" class="container-sm">
            <form id="login-form" action="login.php" method="POST">
                <div id="input-container" class="container-sm">
                    <!-- <span class="input-group-text" id="basic-addon1">@</span> -->
                    <div class="input-group mb-4">
                        <input id="input-email" name="l_email" value="" type="email" class="form-control" placeholder="Email" aria-label="Email">
                    </div>
                    <div class="input-group mb-4">
                        <input id="input-psw" name="l_password" value="" type="password" class="form-control" placeholder="Password" aria-label="Password">
                    </div>
                    <div class="form-check mb-4">
                        <input class="form-check-input" name="l_remember" type="checkbox" value="" id="rememberCheck">
                        <label class="form-check-label" for="rememberCheck">
                            Remember me
                        </label>
                      </div>
                    <div class="input-group mb-4">
                        <button id="submit-btn" class="btn btn-success" type="submit">Log In</button>
                    </div>
                </div>
            </form>
            <!-- REGISTER FORM -->
            <form action="registrazione.php" method="POST" id="register-form">
                <div id="input-container" class="container-sm">
                    <div class="input-group mb-4">
                        <input id="input-username" name="r_username" type="text" class="form-control" placeholder="Username" aria-label="Username">
                    </div>
                    <!-- <span class="input-group-text" id="basic-addon1">@</span> -->
                    <div class="input-group mb-4">
                        <input id="input-email" name="r_email" type="email" class="form-control" placeholder="Email" aria-label="Email">
                    </div>
                    <div class="input-group mb-4">
                        <input id="input-psw" name="r_password" type="password" class="form-control" placeholder="Password" aria-label="Password">
                    </div>
                    <div class="form-check mb-4">
                        <input class="form-check-input" type="checkbox" value="" id="rememberCheck">
                        <label class="form-check-label" for="rememberCheck">
                          Remember me
                        </label>
                      </div>
                    <div class="input-group mb-4">
                        <button id="submit-btn" name="registrazionebutton" class="btn btn-success" type="submit">Register</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <!-- FOOTER -->
    <footer class="Myfooter">
        <div id="footer-content" class="container-fluid">
          <h3>Contatti</h3>
          <ul class="socials">
            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
            <li><a href="#"><i class="fab fa-youtube"></i></a></li>
            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
          </ul>
        </div>
      </footer>
      <!-- SCRIPT -->
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" 
        integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" 
        crossorigin="anonymous">
      </script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js">
      </script>
      <script src="loginJS.js"></script>
</body>

<?php 
  if(isset($_COOKIE['email']) and isset($_COOKIE['password'])){ 
    $email = $_COOKIE['email'];
    $password = $_COOKIE['password'];

    echo "<script>
      // alert('$email'+'   '+'$password');
      document.getElementById('input-email').value = '$email';
      document.getElementById('input-psw').value = '$password';
    </script>";
  }

  if(isset($_SESSION['logged_in']) and isset($_SESSION['email'])){
    $email = $_SESSION['email'];
    echo "<script>
    document.getElementById('test_login').innerHTML='$username'; 
    </script>";
  }
  else{
    echo "<script>
    document.getElementById('test_login').innerHTML='Login';
    </script>";
  }
?>