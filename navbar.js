//NAVBAR
let navigation = document.querySelector('.navbar');
let toggle = document.querySelector('.toggle');
    
    toggle.onclick = function(){
        navigation.classList.toggle('active')
    }

//navbarmobile
let navigationMobile = document.querySelector('.navbarMobile');
let toggleMobile = document.querySelector('.toggleMobile');
    
    toggleMobile.onclick = function(){
        navigationMobile.classList.toggle('activeMobile');
    }
    navigationMobile.onclick = function(){
        navigationMobile.classList.toggle('activeMobile');
    }