<html>
    <head>
        <title>
            Alien Abducted Me.
        </title>
    </head>
    <body>
        <h2>Your Reports is ready.</h2>
        <?php
            $first_name = $_POST['firstname'];
            $last_name = $_POST['lastname'];
            $when_it_happened = $_POST['whenithappened'];
            $how_long = $_POST['howlong'];
            $how_many = $_POST['howmany'];
            $alien_description = $_POST['aliendescription'];
            $what_they_did = $_POST['whattheydid'];
            $fang_spotted = $_POST['fangspotted'];
            $other = $_POST['other'];
            $email = $_POST['email'];

            $dbc = mysqli_connect('localhost', 'root', 'Kelvin1827', 'aliendatabase') or die('Error connecting to MySQL server.');

            $query = "INSERT INTO aliens_abduction (".
                "first_name, last_name, when_it_happened, how_long, how_many, alien_description, what_they_did, fang_spotted, other, email) VALUES ('$first_name', '$last_name', '$when_it_happened', '$how_long', '$how_many', '$alien_description', '$what_they_did', '$fang_spotted', '$other', '$email')";
            
            $result = mysqli_query($dbc, $query) or die('Error querying database.');

            mysqli_close($dbc);

            echo 'Thank you <strong>'.$first_name.'</strong> for submitting the form.<br>';
            echo 'You were abducted <strong>'.$when_it_happened.'</strong>';
            echo ' and were gone for <strong>'.$how_long.'</strong><br>';
            echo 'Number of aliens: <strong>'.$how_many.'</strong><br>';
            echo 'Describe them: <strong>'.$alien_description.'</strong><br>';
            echo 'The alliens did this '.$what_they_did.'<br>';
            echo 'Was Fang there?  <strong>'.$fang_spotted.'</strong><br>';
            echo 'Other comments: '.$other.'<br>';
            echo 'Your email address is <code>'.$email.'</code>';
            echo $result;

        ?>
    </body>
</html>