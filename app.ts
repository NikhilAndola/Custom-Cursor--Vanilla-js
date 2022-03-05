
const cursor = document.querySelector('.cursor');

type mouseEventProp = 'clientX' | 'clientY' | 'pageX' | 'pageY';

window?.addEventListener('mousemove', (e: any) => {
    cursor.style.left = e.pageX
    cursor.style.top = e.pageX
    console.log(e.pageX, e.pageY);
})