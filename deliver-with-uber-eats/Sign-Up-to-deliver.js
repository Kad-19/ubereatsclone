document.querySelector('body').addEventListener('click', () => allNotappear());
document.querySelector('body').addEventListener('click', () => sectionsAppear());


const companyDropdownElm = document.getElementById('companyDropdown');
const companyElm = document.getElementById('company');

let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
companyElm.addEventListener("click", () => ElemClick(companyDropdownElm));

companyElm.addEventListener("click", function(e) { e.stopPropagation()});
companyDropdownElm.addEventListener("click", function(e) { e.stopPropagation()});


const languageDropdownElm = document.getElementById('langDropdown');
const langElm = document.getElementById('language');
const langBottomElm = document.getElementById('languageBottom');

langElm.addEventListener('click', () => ElemClick(languageDropdownElm));
langElm.addEventListener("click", function(e) { e.stopPropagation()});

langBottomElm.addEventListener('click', () => ElemClick(languageDropdownElm));
langBottomElm.addEventListener("click", function(e) { e.stopPropagation()});
languageDropdownElm.addEventListener("click", function(e) { e.stopPropagation()});



const productsDropdownElm = document.getElementById('productsDropdown');
const productsElm = document.getElementById('products');
const productsMobileElm = document.getElementById('productsMobile');

productsElm.addEventListener('click', () => ElemClick(productsDropdownElm));
productsElm.addEventListener("click", function(e) { e.stopPropagation()});
productsDropdownElm.addEventListener("click", function(e) { e.stopPropagation()});

productsMobileElm.addEventListener('click', () => ElemClick(productsDropdownElm));
productsMobileElm.addEventListener("click", function(e) { e.stopPropagation()});


const loginElm = document.getElementById('login');
const loginDropdownElm = document.getElementById('loginDropdown');

loginElm.addEventListener('click', () => ElemClick(loginDropdownElm));
loginElm.addEventListener("click", function(e) { e.stopPropagation()});
loginDropdownElm.addEventListener("click", function(e) { e.stopPropagation()});



const signupElm = document.getElementById('signup');
const signupDropdownElm = document.getElementById('signUpDropdown');

signupElm.addEventListener('click', () => ElemClick(signupDropdownElm));
signupElm.addEventListener("click", function(e) { e.stopPropagation()});
signupDropdownElm.addEventListener("click", function(e) { e.stopPropagation()});


const locationElm = document.getElementById('location');
const locationDropdownElm = document.getElementById('locationDropdown');

locationElm.addEventListener('click', () => ElemClick(locationDropdownElm));
locationElm.addEventListener("click", function(e) { e.stopPropagation()});
locationDropdownElm.addEventListener("click", function(e) { e.stopPropagation()});

const locationBtnElm = document.getElementById('locationbtn');
const locationHiddenTextElm = document.getElementById('hiddenText');
const locationHiddenTitleElm = document.getElementById('hiddenTextTitle');

locationBtnElm.addEventListener('click', () => showMore(locationHiddenTextElm, locationHiddenTitleElm, locationBtnElm));


const backList = document.querySelectorAll('.backIcon');

for(i = 0;i < backList.length; i++){
    backList[i].addEventListener('click', () => allNotappear());
    backList[i].addEventListener('click', () => sectionsAppear());
}

const menuMobileElm = document.getElementById('menuMobile');
const menuIconList = document.querySelectorAll('.menu_Icon');
const menuIconElm = document.getElementById('menuIcon');


for(i = 0; i < menuIconList.length; i++){
    menuIconList[i].addEventListener('click', () => ElemClick(menuMobileElm));
}

menuIconList[0].addEventListener('click', () => {    
        menuIconList[1].classList.remove('notappear');                
        menuIconList[0].classList.add('notappear');
});

menuIconList[1].addEventListener('click', () => {   
        menuIconList[0].classList.remove('notappear');                  
        menuIconList[1].classList.add('notappear');
});

menuIconElm.addEventListener('click', function(e) { e.stopPropagation()});
menuMobileElm.addEventListener('click', function(e) { e.stopPropagation()});

const deliverDropdownElm = document.getElementById('deliverDropdown');
const deliverButtonElm = document.getElementById('deliverButton');

if (screenWidth <= 768){
    deliverButtonElm.addEventListener('click', () => ElemClick(deliverDropdownElm));

}

deliverButtonElm.addEventListener("click", function(e) { e.stopPropagation()});
deliverDropdownElm.addEventListener("click", function(e) { e.stopPropagation()});


function ElemClick(elem){
    if(elem.classList.contains('notappear')){
        if (!(elem == companyDropdownElm && screenWidth <= 768)){
            allNotappear();
        }
        if(((elem != companyDropdownElm && elem != productsDropdownElm) || (screenWidth <= 768)) && (elem != deliverDropdownElm) ){
            sectionsDisappear();
        }
        else{
            sectionsAppear();
        }
        elem.classList.remove('notappear');
        
    }
    else {
        elem.classList.add('notappear');
        sectionsAppear();
    }
    scroll();

}
function allNotappear(){
const appearanceElm = document.querySelectorAll('.appearance');

    for(i = 0; i < appearanceElm.length; i++){
        if(!appearanceElm[i].classList.contains('notappear')){
            appearanceElm[i].classList.add('notappear');
        }
    }
    changeIcon();
    scroll();
}

function changeIcon(){
        if (deliverDropdownElm.classList.contains('notappear')){
            menuIconList[1].classList.add('notappear');
            menuIconList[0].classList.remove('notappear');
        }
}

function scroll(){
    if (deliverDropdownElm.classList.contains('notappear')){
        document.body.style.overflow = 'auto';
    }
    else {
        document.body.style.overflow = 'hidden';

    }
}

function sectionsDisappear(){
    const sectionsList = document.querySelectorAll('section');
    const footerElem = document.querySelector('footer');

    if(!footerElem.classList.contains('notappear')){
        footerElem.classList.add('notappear');
    }    
    for(i=0; i< sectionsList.length; i++){
        if(!sectionsList[i].classList.contains('notappear')){
            sectionsList[i].classList.add('notappear');
        }
    }
}

function sectionsAppear(){
    const sectionsList = document.querySelectorAll('section');
    const footerElem = document.querySelector('footer');

    if(footerElem.classList.contains('notappear')){
        footerElem.classList.remove('notappear');
    }    
    for(i=0; i< sectionsList.length; i++){
        if(sectionsList[i].classList.contains('notappear')){
            sectionsList[i].classList.remove('notappear');
        }
    }
}

function showMore(text, title, elem){
    if(text.classList.contains('notappear')){
        text.classList.remove('notappear');
        title.classList.remove('notappear');
        elem.innerText = "Show less";
    }
    else{
        text.classList.add('notappear');
        title.classList.add('notappear');
        elem.innerText = "Show more";
    }
}

