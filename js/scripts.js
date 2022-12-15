
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    function animOnScroll (coords) {
        for (let index =0; index < animItems.length; index++){
            const animItem = animItems[index],
                animItemHeight = animItem.offsetHeight,
                animItemOffset = offset(animItem).top,
                animStart = 4;
            
            let aminItemPoint = window.innerHeight - animItemHeight /animStart;

            if (animItemHeight > window.innerHeight){
                window.innerHeight -  window.innerHeight /animStart;
            }
            if ((pageYOffset >animItemOffset -aminItemPoint))
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return{top:rect.top + scrollTop, left: rect.left + scrollLeft}
        
    }
}