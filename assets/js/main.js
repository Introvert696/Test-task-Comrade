let navLinksArr = document.querySelectorAll(".nav-dropdown");
const openBtn = document.querySelector("#openBtn");
const closeBtn = document.querySelector("#closeBtn");
const leftMenu = document.querySelector('.nav-items');
const header = document.querySelector('header');

navLinksArr.forEach(el => {
    const item = el.childNodes[1];
    item.addEventListener('click',(it)=>{
        // console.log(item);
        hideAll();
        openMenu(el);
    });
    console.log(el.childNodes[1]);
});

function hideAll(){
    navLinksArr.forEach(el => {
        const hideIt = el.childNodes[1];
        // hideIt.className.add('hide');
        hideIt.classList.add('hide');
    });
}
function openMenu(el){
    const newItem = el.childNodes[3];
    console.log(newItem.classList.add('next-nav-menu'));
}
function openRight(){
    leftMenu.classList.remove('hide');
    header.classList.add('h-100pc');
    openBtn.classList.add('hide');
    closeBtn.classList.remove('hide');
}

function closeRight(){
    leftMenu.classList.add('hide');
    header.classList.remove('h-100pc');
    openBtn.classList.remove('hide');
    closeBtn.classList.add('hide');
}