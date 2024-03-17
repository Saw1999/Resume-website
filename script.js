var itemContents = document.querySelectorAll(".item-content")


function showDetails (item) {
    for (itemContent of itemContents) {
        itemContent.classList.remove("active-content")        
    }

    document.getElementById(item).classList.add("active-content") 
}; 


/*document.addEventListener("click", (event) => {

    if (!event.target.closest(".list-item-one")){
        document.getElementById("skill").classList.remove("active-content")
    }

    if (!event.target.closest(".list-item-two")){
        document.getElementById("education").classList.remove("active-content")
    }

    if (!event.target.closest(".list-item-three")){
        document.getElementById("project").classList.remove("active-content")
    }

    if (!event.target.closest(".list-item-four")){
        document.getElementById("employment").classList.remove("active-content")
    }
}) */


var employmentItems = document.querySelectorAll(".employment-details")

function showEmployment(employment){
    for (employmentItem of employmentItems) {
        employmentItem.classList.remove("active-details")
    }

    document.getElementById(employment).classList.add("active-details")

}


document.addEventListener("click", (event) => {

    if (!event.target.closest(".em-item-one")){
        document.getElementById("employment-one").classList.remove("active-details")
    }

    if (!event.target.closest(".em-item-two")){
        document.getElementById("employment-two").classList.remove("active-details")
    }
}) 

var menu = document.querySelector("#menu-list")

function openMenu() {
    menu.style.right ="0";
    document.querySelector("nav .fa-bars").style.display= "none";
}

function closeMenu() {
    menu.style.right ="-160px";
    document.querySelector("nav .fa-bars").style.display= "block";
}

// icons animation for about page
const icons= document.querySelectorAll("#about .col-1 i")

function showIcon(iconElement) {
    iconElement.style.opacity="1";
    
}

function hideIcons(icons) {
    icons.forEach(icon => {
        icon.style.opacity="0";
    });
}

function animateIcon() {
    let iconIndex= 0;

    function showNextIcon(){
        showIcon(icons[iconIndex]);
        setTimeout(() => {
            iconIndex = (iconIndex+1) % icons.length;
            if (iconIndex === 0){
                setTimeout(()=> {
                    hideIcons(icons);
                    setTimeout(() => {
                        showNextIcon() 
                    },2000);                   
                }, 1000);
            } else {
                showNextIcon();
            }
        },1000)
    }
    showNextIcon();
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbyZSm1GGQnYi9PrB_i6XFcXskQsDhLnvK8b2SfFyXDkOfSeIUec5kBtyjDZinAk3EV9/exec'
const form = document.forms['submit-to-google-sheet']
const confrimMSG =document.getElementById("con-msg")


form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        confrimMSG.innerHTML = "Thank you! Message sent successfully."
        setTimeout(function () {
            confrimMSG.innerHTML =""
        }, 5000)  // message will be removed after five seconds
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
