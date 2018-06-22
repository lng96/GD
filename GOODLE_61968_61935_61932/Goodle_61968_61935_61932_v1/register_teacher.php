<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Prototype</title>
    <link rel="stylesheet" type="text/css" href="css/register_student.css">
</head>
<body>
<!-- <body> -->
<?php
include 'datab.php';

$username = $email = $firstname = $secondname = $lastname = $password = $submit ="";
$emailErr = "";

   if ($_SERVER["REQUEST_METHOD"] == "POST") {
	   
		$submit = $_POST["submit"];
		$username = $_POST["username"];
		$email = $_POST["email"];
		$firstname = $_POST["firstname"];
		$secondname = $_POST["secondname"];
		$lastname = $_POST["lastname"];
		$password = $_POST["password"];
  

 	if (!preg_match("/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/",$email)){
		
		$emailErr = "Wrong email!";
		$email = null;
}		
	
}
	// $sql = "CREATE TABLE teachers (
    // id INT AUTO_INCREMENT PRIMARY KEY,
	// username VARCHAR(128),
	// email VARCHAR(1024),
	// firstname VARCHAR(128),
	// secondname VARCHAR(128),
	// lastname VARCHAR(128),
	// password VARCHAR(128)
    // )";
	// $conn->exec($sql);
	// sled purvoto puskane tova trqbva da se zakomentira
	
	if (!$submit==null && !$username==null && !$email==null && !$firstname==null && !$secondname==null && !$lastname==null && !$password==null){
	
 
	$stmt = $conn->prepare("INSERT INTO teachers (username, email, firstname, secondname, lastname, password) 
    VALUES (:username, :email, :firstname, :secondname, :lastname, :password)");
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':firstname', $firstname);
	$stmt->bindParam(':secondname', $secondname);
	$stmt->bindParam(':lastname', $lastname);
	$stmt->bindParam(':password', $password);

    $stmt->execute();

   
	$conn = null;
	header("Location: ./success_registration.php");
	}
	
	
 ?>
 <a class="exitBtn" href="FirstPage.html">Назад</a>

    <img src="logo.png">
    <!-- <h1 style = "color: #78cad3"></h1> -->
    <div class="imageContainer"> </div>
        <h1>Регистрация</h1>
        <div class="form" >
        <div>
            <form class="input" method="post">
<p><span class="error">* required.</span></p>
<!-- <form method="post" >   -->
 <p> <input type="text" name="username"  required value="<?php echo $username;?>"  placeholder="Потребителско име">
  <span class="error"> <?php echo "*";?></span> </p>
  <!-- <br><br> -->
  <p>  <input type="text" name="email"  required value="<?php echo $email;?>" placeholder="Email">
  <span class="error"> <?php echo "*".$emailErr;?></span></p>
  <!-- <br><br> -->
 <p>  <input name="firstname" placeholder="Име" rows="3" cols="40"  required ><?php echo $firstname;?></input>
  <span class="error"> <?php echo "*";?></span> </p>
  <!-- <br><br> -->
<p>  <input name="secondname"  placeholder="Презиме" rows="3" cols="40"  required ><?php echo $secondname;?></input>
  <span class="error"> <?php echo "*";?></span> </p>
  <!-- <br><br>  -->
 <p>  <input name="lastname" placeholder="Фамилия" rows="3" cols="40"  required ><?php echo $lastname;?></input>
  <span class="error"> <?php echo "*";?></span> </p>
  <!-- <br><br>  -->
 <p> <input name="password" placeholder="Парола" rows="3" cols="40"  required ><?php echo $password;?></input>
  <span class="error"> <?php echo "*";?></span></p>
  <!-- <br><br>  -->
  <input type="submit" name="submit"  class="button" value="Регистрирай">   
</form>
</form>
</div>
</body>
</html>
