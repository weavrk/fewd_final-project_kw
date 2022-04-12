// window.onresize = function(){ location.reload(); }


//stop css carett animation on scroll

function stop() {
  let carrot = document.querySelector(".carrot_icon");
	carrot.classList.add("stop_animation");
}
	window.addEventListener("scroll", stop);

//expanding cards
const panels = document.querySelectorAll(".carousel_shell");

panels.forEach((panel) => {
	panel.addEventListener("click", () => {
		removeActiveClass()	
		panel.classList.add("active")
		})
})

function removeActiveClass() {
	panels.forEach((panel) =>{
		panel.classList.remove("active")
	})
}


// caret open
const openMenu = document.getElementById("carrot");
openMenu.addEventListener ("click", showLinks);

function showLinks () {
	document.querySelector(".nav_links").classList.toggle("nav_links_show");

	if(document.getElementById("carrot").className == "caret_down")
		document.getElementById("carrot").className = "caret_up";
	else
		document.getElementById("carrot").className = "caret_down";
}

// pin sections animation

// ScrollTrigger.saveStyles(".mobile, .desktop");

ScrollTrigger.matchMedia({

	//------------------carrot pin_mobile
	//when it pins it, it moves it left about 400px
	"(max-width: 767px)": function() {
				
				let tll = gsap.timeline({
					scrollTrigger: {
					trigger: "#scrollTrigger",
					scrub: 1,
					start: "top 30px",
					end: "+=3800px",
					pin: true
					}
				})

		tll.to("#carrot", {})
			.to("#carrot", {});
      
	//------------------lexicon play button_mobile
				let tl = gsap.timeline({
					scrollTrigger: {
					trigger: "#playButton",
					scrub: 1,
					start: "top 70px", 
					end: "+=975px",
					pin: true
					}
				})

		tl.to("#lexiconPlayButton", {})
			.to("#lexiconPlayButton", {})
	},

	"(min-width: 768px)": function() {
		// --------------sticks the left bar landing		
		let lp = gsap.timeline({
			scrollTrigger: {
			trigger: "#landingPage",
			scrub: 1,
			end: "+=600px",
			pin: true
			}
		})

lp.to(".landing", {})
	.to(".landing", {});


	// --------------moves section on the right
		let mf = gsap.timeline({
			scrollTrigger: {
			trigger: "#faceTrigger",
			scrub: 1,
			start: "top 100px",
			// difference between this end and fm end is the difference in timing of scroll
			end: "+=800px",
			pin: true,
			markers: false,
			}
		});

mf.to(".freeze", {})
.to(".freeze", {});


// --------------sticks the white mask
let fm = gsap.timeline({
	scrollTrigger: {
	trigger: "#maskTrigger",
	scrub: 1,
	//match this to the height of the .face and mask
	//move this to adjust the starting top of the white box
	start: "top 250px",
	//sets the distance between the face and the deisgn beliefs
	end: "+=1200px",
	pin: true,
	markers: false,
	}
});

fm.to(".mask_faceonscroll", {})
.to(".mask_faceonscroll", {});


// --------------vertical navigation bar-----------
ScrollTrigger.create({
  trigger: "#navTriggerDesktop",
  start: "0px 470px", 
  end: "770px",
  markers: false,
  pin: "#caretDesktop",
	scrub: .5,
});

// --------------vertical navigation bar-----------
ScrollTrigger.create({
  trigger: "#navbarTrigger",
  start: "top -45px", 
  end: "+=2800px",
  markers: false,
  pin: "#desktopPin",
  pinSpace: false,
	scrub: .5,
});


	//------------------lexicon play button_>768
  let tl = gsap.timeline({
    scrollTrigger: {
    trigger: "#playButton",
    scrub: 1,
    start: "top 70px", 
    end: "+=800px",
    pin: true
    }
  })

tl.to("#lexiconPlayButton", {})
.to("#lexiconPlayButton", {})


	//------------------left_navbar_work---------->768
// gsap.to(".workNavShell", {rotation:90, x:0, transformOrigin: '0% 0%'});

// ScrollTrigger.create({
//   trigger: "#worknavbarTrigger",
//   start: "top 60px", 
//   end: "+=3000px",
//   markers: false,
//   pin: "#workdesktopPin",
//   pinSpace: false,
// 	scrub: .5,
// });

// gsap.to("#workdesktopPin", {rotation: -90, x:0, transformOrigin: '100% 0%'});



},
});






// --------------greensock rotation
// gsap.to("#desktopPin", {rotation: -90, x:10, transformOrigin: '0% 0%'});







// let nb = gsap.timeline({
// 	scrollTrigger: {
// 	trigger: "#desktop_pin",
// 	scrub: 1,
// 	start: "top 60px",
// 	end: "+=3800px",
// 	pin: true
// 	}
// })

// nb.to("#navbar_trigger", {})
// .to("#navbar_trigger", {});


// gsap.set("#carrot_icon_desktop", {xPercent:-50});

// let cr = gsap.timeline({
// 	scrollTrigger: {
// 	trigger: "#scrollTrigger_desktop",
// 	scrub: 1,
// 	start: "top top",
// 	end: "+=5000px",
// 	pin: true,
// 	markers: false,
// 	}
// });

// cr.to('#carrot_icon_desktop', {
//   rotation:360*5,
//   duration:1, ease:'none',
// })






// pin the carrot
// ScrollTrigger.create({
//   trigger: "#scrollTrigger",
//   start: "top 30px", 
//   end: "+=3800px",
//   markers: false,
//   pin: "#carrot",
// 	scrub: .5,
// });

//grab the play button
// ScrollTrigger.create({
//     trigger: "#lexiconPlayButton",
//     start: "top 50px", 
//     end: "+=1025px",
//     markers: false,
//     pin: "#playButton",
// });