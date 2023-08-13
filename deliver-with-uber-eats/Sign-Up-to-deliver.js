document.querySelector('body').addEventListener('click', () => allNotappear());
document.querySelector('body').addEventListener('click', () => sectionsAppear());


const companyDropdownElm = document.getElementById('companyDropdown');
const companyElm = document.getElementById('company');

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

productsElm.addEventListener('click', () => ElemClick(productsDropdownElm));
productsElm.addEventListener("click", function(e) { e.stopPropagation()});
productsDropdownElm.addEventListener("click", function(e) { e.stopPropagation()});



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



function ElemClick(elem){
    if(elem.classList.contains('notappear')){
        allNotappear();
        if(elem != companyDropdownElm && elem != productsDropdownElm){
            sectionsDisappear();
        }
        else{
            sectionsAppear();
        }
        elem.classList.remove('notappear');
        
    }
    else {
        elem.classList.add('notappear');
    }

}
function allNotappear(){
const appearanceElm = document.querySelectorAll('.appearance');

    for(i = 0; i < appearanceElm.length; i++){
        if(!appearanceElm[i].classList.contains('notappear')){
            appearanceElm[i].classList.add('notappear');
        }
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

