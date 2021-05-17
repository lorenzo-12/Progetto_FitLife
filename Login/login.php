<html>
    <title>esempio in php</title>
    <head></head>
    <body> 


        <?php 

            $dbconn = pg_connect("host=localhost
                                port=5432
                                dbname=ltw
                                user=postgres
                                password=lollo")
            or die('could not connect' . pg_last_error() );


            $email = $_POST['l_email'];
            $password = $_POST['l_password'];
            $q1 = "SELECT * FROM user_d WHERE email=$1";
            $q2 = "SELECT * FROM user_d WHERE email=$1 AND password=$2";
            $result1 = pg_query_params($dbconn,$q1,array($email));
            $result2 = pg_query_params($dbconn,$q2,array($email,$password));
            if(!($line=pg_fetch_array($result1,null, PGSQL_ASSOC))){
                // echo "<h1> Sorry, you are not a registred user </h1>";
                 echo '<script language="javascript">';
                 echo 'alert("Sorry, you are not a registred user");';
                 echo 'window.location.href="index.php";';
                 echo '</script>';
            }
            elseif (!($line = pg_fetch_array($result2,null,PGSQL_ASSOC))){
                // echo "<h1> Sorry, Wrong password </h1>";
                 echo '<script language="javascript">';
                 echo 'alert("Sorry, Wrong password");';
                 echo 'window.location.href="index.php";';
                 echo '</script>';
            }
            else{
                // echo "<h1> Welcome back </h1>";
                if(isset($_POST['l_remember'])){
                    setcookie('email',$email,time()+60*60*7);
                    setcookie('password',$password,time()+60*60*7);
                }
                session_start();
                $_SESSION['email'] = $email;
                $_SESSION['logged_in'] = True;
                 echo '<script language="javascript">';
                 echo 'alert("Welcome Back");';
                 echo 'window.location.href="../Home/index.php";';
                 echo '</script>';
            }
            exit();
            
            $query = 'SELECT * FROM user_d';
            $result = pg_query($query) or die('query failed' . pg_last_error());

            //printing result in html
            echo "<table>\n";
            while ($line = pg_fetch_array($result,null, PGSQL_ASSOC)){
                foreach ($line as $col_value) {
                    echo "\t\t<td>$col_value</td>";
                }
                echo "\t</tr>\n";
            }
            echo "</table>\n";
        ?>
    </body>
</html>