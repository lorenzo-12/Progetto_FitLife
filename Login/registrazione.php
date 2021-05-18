<html>
    <title>esempio in php</title>
    <head></head>
    <body>
        

        <?php 
            $dbconn = pg_connect("host=localhost
                                port=5432
                                dbname=ltw
                                user=postgres
                                password=@postgres17!@")
            or die('could not connect' . pg_last_error() );

            $username = $_POST['r_username'];
            $email = $_POST['r_email'];
            $password = $_POST['r_password'];
            $q1 = "SELECT * FROM user_d WHERE email=$1";
            $q2 = "SELECT * FROM user_d WHERE username=$1";
            $result1 = pg_query_params($dbconn,$q1,array($email));
            $result2 = pg_query_params($dbconn,$q2,array($username));
            if(($line=pg_fetch_array($result1,null, PGSQL_ASSOC))){
                // echo "<h1> Sorry, email alredy taken </h1>";
                echo '<script language="javascript">';
                echo 'alert("Sorry, email alredy used");';
                echo 'window.location.href="index.html";';
                echo '</script>';
            }
            elseif (($line = pg_fetch_array($result2,null,PGSQL_ASSOC))){
                // echo "<h1> Sorry, username alredy taken </h1>";
                echo '<script language="javascript">';
                echo 'alert("Sorry, username alredy taken");';
                echo 'window.location.href="index.html";';
                echo '</script>';
            }
            else{
                $q3 = "INSERT INTO user_d VALUES ($1,$2,$3);";
                $result3 = pg_query_params($dbconn,$q3,array($username,$email,$password));
                // echo "<h1> Welcome </h1>";
                echo '<script language="javascript">';
                echo 'alert("Welcome");';
                echo 'window.location.href="index.html";';
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