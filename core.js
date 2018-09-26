"use strict";
window.addEventListener("load", init);

// Global Variables
let nums			=	[1,2,3,4,5,6,7,8,9,0];
let randIndex1 = Math.floor(Math.random() * nums.length);
let randIndex2 = Math.floor(Math.random() * nums.length);
let randIndex3 = Math.floor(Math.random() * nums.length);
let randIndex4 = Math.floor(Math.random() * nums.length);

// DOM Elements
let first_num		=	document.querySelector("#first_num");
let second_num		=	document.querySelector("#second_num");
let third_num		=	document.querySelector("#third_num");
let fourth_num		=	document.querySelector("#fourth_num");
let tha_msg			=	document.querySelector("#tha_msg");

let user_input		=	document.querySelector("#user_input");
let process_btn		=	document.querySelector("#tha_btn");

let tha_true_sound	=	document.querySelector("#true_sound");
let tha_false_sound	=	document.querySelector("#false_sound");


function init()
{
	setNumbers();

	setTimeout(function clearFields()
		{
			first_num.value = "";
			second_num.value = "";
			third_num.value = "";
			fourth_num.value = "";
		}, 1000);

	acceptInput();
}

function setNumbers()
{
	insertFirst();insertSecond();insertThird();insertFourth();
}

// Insert Generated Numbers in the Dom
function insertFirst()
{
	return first_num.value = nums[randIndex1].toString();
}

function insertSecond()
{
	return second_num.value = nums[randIndex2].toString();
}

function insertThird()
{
	return third_num.value = nums[randIndex3].toString();
}

function insertFourth()
{
	return fourth_num.value = nums[randIndex4].toString();
}


function acceptInput()
{
	let numConcate = [insertFirst(),insertSecond(),insertThird(),insertFourth()];

	user_input.addEventListener('keyup', function()
	{		

		if(this.value.length === 4)
		{
			user_input.value.split("");
			if(JSON.stringify(numConcate) === JSON.stringify(user_input.value.split("")))
			{
				setTimeout(function(){window.location.reload()},1000);
				tha_msg.innerHTML = "CORRECT";
				tha_true_sound.setAttribute("autoplay", "");
				user_input.setAttribute("disabled", "");
			}
			
			else
			{
				setTimeout(function(){window.location.reload()},1000);
				tha_msg.innerHTML = "INCORRECT";
				tha_false_sound.setAttribute("autoplay", "");
				user_input.setAttribute("disabled", "");
			}

			user_input.value = "";
		}

	});
}


/* 	WHAT NEEDS TO BE DONE
	-	Create function that puts numbers togethe into a string or somethings
	-	Make use of the JSON.stringify function to compare
*/

