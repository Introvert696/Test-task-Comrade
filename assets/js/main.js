let navLinksArr = document.querySelectorAll(".nav-dropdown");


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
    const leftMenu = document.querySelector('.nav-items');
    const header = document.querySelector('header');
    leftMenu.classList.remove('hide');
    header.classList.add('h-100pc');
}