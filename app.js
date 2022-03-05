"use strict";
const cursor = document.querySelector('.cursor');
window === null || window === void 0 ? void 0 : window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX+'px';
    cursor.style.top = e.pageY+'px';
    // console.log(e.pageX, e.pageY);
    cursor.setAttribute('data-fromTop', (cursor.offsetTop - scrollY) )
});

window.addEventListener('scroll',(e)=> {
    const fromTop = parseInt(cursor.getAttribute('data-fromTop'));
    cursor.style.top = scrollY + fromTop +  'px';
})

window.addEventListener('click', ()=> {
    if(cursor.classList.contains('active')){
        cursor.classList.remove('click');
        // Triggering a dom reflow
        void cursor.offsetWidth;
        cursor.classList.add('click');
    } else {
        cursor.classList.add('click');

    }
})