<html>    
	<head>    
        	<title>Quiz</title>
			<link href = "style.css" type = "text/css" rel = "stylesheet" /> 
			<script src="script.js"></script>       
    	</head>    
<body>  

<div id="header">QUIZ</div>


<?php

	function randomGen($min,$max,$quantify)
	{
		$numbers=range($min,$max);
		shuffle($numbers);
		return array_slice($numbers,0,$quantify);
	}
	
	$quesno=randomGen(1,7,1);
		
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "test";
  
	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	  
	// Check connection
	if ($conn->connect_error) {
    		die("Connection failed: ".$conn->connect_error);
	}
	
	foreach($quesno as $que)
	{
	
		$query="SELECT QuesID,Question,A,B,C,D FROM quiz WHERE QuesID=$que";
		$result=mysqli_query($conn,$query);
	
	
	?>

	
	<?php
		while($rows=mysqli_fetch_assoc($result))
		{
	?>
	
	<div id="quesno">1</div>

	<div id="ques"> 
		<?php echo $rows['Question']?>
	</div>

	<div class="clear"></div>

	<div id="opt">
	<input type="radio" id="huey" name="drone" value="huey">
  	<label for="huey"><?php echo $rows['A']?></label>	
	</div> 
	
	<div class="clear"></div>

	<div id="opt">
	<input type="radio">
  	<label><?php echo $rows['B']?></label>
	</div>
	
	<div class="clear"></div>

	<div id="opt">
	<input type="radio">
  	<label><?php echo $rows['C']?></label>
	</div>
	
	<div class="clear"></div>

	<div id="opt">
	<input type="radio">
  	<label><?php echo $rows['D']?></label>
	</div>

	<div class="clear"></div>
	
	<?php
		}

	}
	?>

	<a id="next" onclick="nxtQues()">Next</a>

</body>
</html>