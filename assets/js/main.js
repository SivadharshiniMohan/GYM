/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr= ScrollReveal(
    {
        origin:'top',
        distance:'60px',
        duration:2500,
        delay:400
    }
)
sr.reveal(`.home__data, .footer__Container,.footer__group`)
sr.reveal(`.home__img`,{delay:700, origin:'bottom'})

sr.reveal(`.logos__img, .program__card, .pricing__card`,{interval:100})
sr.reveal(`.choose__img, .calculate__content`,{origin:'left'})

sr.reveal(`.choose__content, .calculate__img`,{origin:'right'})


/*=============== CALCULATE JS ===============*/

const calculateForm = document.getElementById("calculate-form"),
 calculateCm= document.getElementById("calculate-cm"),
 calculateKg= document.getElementById("calculate-kg"),
 calculateMessage= document.getElementById("calculate-message")


const calculateBmi= (e)=>{
    e.preventDefault()

    //check if the fields have value
    if(calculateCm.value === "" || calculateKg.value === ""){        
        //Add and remove the color
calculateMessage.classList.remove("color-green")
calculateMessage.classList.add("color-red")

//show message
calculateMessage.textContent="Fill in the HEight and Weight"

//REmove message three seconds

setTimeout(()=>{
    calculateMessage.textContent=''
},10000)
    } else{
        //BMI formula
        const cm = calculateCm.value / 100,
        kg= calculateKg.value,
        bmi= Math.round(kg / (cm*cm))

        //show your health status
        if(bmi<18.5){
            //Add color and display msg
            calculateMessage.classList.add("color-green")
            calculateMessage.textContent=`your BMI is ${bmi} and you are skinny`
        } else  if(bmi < 25){
             calculateMessage.classList.add("color-green")
            calculateMessage.textContent=`your BMI is ${bmi} and you are HEalthy`
        } else {
             calculateMessage.classList.add("color-green")
            calculateMessage.textContent=`your BMI is ${bmi} and you are overweight`
        }
        //To clear the input filed
        calculateCm.value = ""
        calculateKg.value = ""

        //Remove message four second
        setTimeout(()=>{
            calculateMessage.textContent=''
        },4000)

    }
   
}
calculateForm.addEventListener('click', calculateBmi)
/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
conatctMEssgae= document.getElementById("contact-message"),
conatctUser=document.getElementById("contact-user")

const sendEmail=(e)=>{
    e.preventDefault();
    //Check if the field has value
    if(conatctUser.value===""){
        //Add and remove the color
        conatctMEssgae.classList.remove('color-green')
        conatctMEssgae.classList.add("color-red")
        //show msg
        conatctMEssgae.textContent="you must enter the email"


        //REmove msg three sec
        setTimeout(()=>{
            calculateMessage.textContent=''
        },3000)
    } else{
        //serviceId -templateID - form - publickey
        emailjs.sendForm('service_4pfhns6', 'template_bkjdxtx', '#contact-form', 'PcaOW1n0cWf6br36u')
        .then(()=>{
            //Show msg and add color
            conatctMEssgae.classList.add('color-green')
            conatctMEssgae.textContent="your registered successfully"

                 //Remove message three second
        setTimeout(()=>{
            calculateMessage.textContent=''
        },3000)

        },(error)=>{
            //Mail sending error
            conatctMEssgae.textContent="OOPS! Something has failed"

        })

        //To clear the input field

        conatctUser.value=""

    }
}

contactForm.addEventListener('submit', sendEmail)