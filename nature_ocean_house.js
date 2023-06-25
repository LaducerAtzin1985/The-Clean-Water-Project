//Project: Clean Water Initiative

//1. Define function to check water for contaminants
function checkForContaminants(){
	//2. Create array to hold water sample data
	var waterData = [];
	//3. Initialize loop to iterate through array
	for(var i = 0; i < waterData.length; i++){
		//4. Create if statement to check if sample data is above a predetermined amount
		if(waterData[i] > 5){ 	
			//5. Log outsite to the console if sample data is above predetermined amount.
			console.log("Water is contaminated!");
			//6. If sample data is under predetermined amount, log output to console
		}else{
			console.log("Water is safe!");
		}
	}
}

//7. Define function to promote access to clean water
function promoteAccessToCleanWater(){
	//8. Create array to hold user data
	var userData = [];
	//9. Initialize loop to iterate through array
	for(var i = 0; i < userData.length; i++){
		//10. Create if statement to check if user has access to clean water
		if(userData[i].accessToCleanWater === false){
			//11. Log output to console if user has no access
			console.log("User does not have access to clean water!");
			//12. If user does have access, log output
		}else{
			console.log("User has access to clean water!");
		}
	}
}

//13. Define function to promote health and wellness
function promoteWellness(){
	//14. Create array to hold user data
	var userData = [];
	//15. Initialize loop to iterate through array
	for(var i = 0; i < userData.length; i++){
		//16. Create if statement to check if user is living a healthy lifestyle
		if(userData[i].lifestyle != "healthy"){
			//17. Log output to console if user is not living a healthy lifestyle
			console.log("User is not living a healthy lifestyle!");
			//18. If user is living a healthy lifestyle, log output
		}else{
			console.log("User is living a healthy lifestyle!");
		}
	}
}

//19. Define function to raise awareness
function raiseAwareness(){
	//20. Create array to hold user data
	var userData = [];
	//21. Initialize loop to iterate through array
	for(var i = 0; i < userData.length; i++){
		//22. Create if statement to check if user is aware of the problem
		if(userData[i].awareness === false){
			//23. Log output to console if user is unaware
			console.log("User is unaware of the problem!");
			//24. If user is aware, log output
		}else{
			console.log("User is aware of the problem!");
		}
	}
}

//25. Define function to disseminate information
function disseminateInfo(){
	//26. Create array to hold user data
	var userData = [];
	//27. Initialize loop to iterate through array
	for(var i = 0; i < userData.length; i++){
		//28. Create if statement to check if user has received information
		if(userData[i].receivedInfo === false){
			//29. Log output to console if user has not received information
			console.log("User has not received information!");
			//30. If user has received information, log output
		}else{
			console.log("User has received information!");
		}
	}
}

//31. Define function to provide clean water
function provideCleanWater(){
	//32. Create array to hold user data
	var userData = [];
	//33. Initialize loop to iterate through array
	for(var i = 0; i < userData.length; i++){
		//34. Create if statement to check if user has access to clean water
		if(userData[i].accessToCleanWater === false){
			//35. Log output to console if user does not have access
			console.log("User does not have access to clean water!");
			//36. If user does have access, log output
		}else{
			console.log("User has access to clean water!");
		}
	}
}

//37. Define function to monitor water quality
function monitorWaterQuality(){
	//38. Create array to hold water sample data
	var waterData = [];
	//39. Initialize loop to iterate through array
	for(var i = 0; i < waterData.length; i++){
		//40. Create if statement to check if water sample data is stable
		if(waterData[i] < 10){
			//41. Log output to console if water sample data is stable
			console.log("Water sample data is stable!");
			//42. If water sample data is not stable, log output
		}else{
			console.log("Water sample data is not stable!");
		}
	}
}