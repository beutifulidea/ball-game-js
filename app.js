let x = 20;
let y = 20;
let WoodLeft = 0;
let vstop = false;
let dx = 1;
let dy = 1;
//move function
const moveBall = () => {
	//اگه توپ رسید به سقف
	if (y < 0) dy = 1;
	if (y > 650) dy = -1;
	if (x < 0) dx = 1;
	if (x > 650) dx = -1;
	const ball = document.querySelector("#ball");
	// اینجا فاصله از چپ برای x در نظر گرفتیم
	ball.style.left = x + "px";
	ball.style.top = y + "px";
	//
	if (dy == 1) {
		ball.style.background = "radial-gradient(rgb(126, 7, 7),rgb(211, 94, 74))";
		y = y + 3;
	}
	if (dy == -1) {
		y = y - 3;
	}
	//
	if (dx == 1) {
		ball.style.background = "radial-gradient(rgb(91, 104, 216),rgb(131, 166, 233))";
		x = x + 5;
	}
	if (dx == -1) {
		x = x - 5;
	}
	//
	if (y > 650) {
		if (document.querySelector("#ball").style.left < document.querySelector("#wood").style.left - 80 || document.querySelector("#ball").style.left > document.querySelector("#wood").style.left+80) {
			alert("Game Over");
			//console.log("ball:", document.querySelector("#ball").style.left);
			//console.log("wood:", document.querySelector("#wood").style.left);
		}
	}
};

let timer = setInterval(() => {
	moveBall();
}, 10);

const controlBall = () => {
	if (vstop === false) {
		clearInterval(timer); //اگه خواهیم حرکت متوقف کنیم
		 vstop =true;
	} else {
		timer = setInterval(() => {
			moveBall();
		}, 10);
		vstop = false;
	}
};

document.addEventListener("keydown", (e) => {
	const wood = document.querySelector("#wood");

	if (e.key === "ArrowRight") {
		WoodLeft += 80;
		if (WoodLeft > 538) {
			WoodLeft = 530;
		}
		wood.style.left = WoodLeft + "px";
	} else if (e.key === "ArrowLeft") {
		WoodLeft -= 80;
		if (WoodLeft < 10) {
			WoodLeft = 0;
		}
		wood.style.left = WoodLeft + "px";
	}
   if (e.key === " ") {
		controlBall();
   }
});

document.addEventListener("DOMContentLoaded", () => {
	document.querySelector("#wood").style.left = WoodLeft + "px";
});
