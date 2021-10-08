document.querySelectorAll('.accordion__button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;
        
        button.classList.toggle('accordion__button--active');

        if(button.classList.contains('accordion__button--active')) {
            accordionContent.setAttribute('style', 'overflow: auto; max-height: 350px;')
        } else {
            accordionContent.setAttribute('style', 'overflow: hidden; max-height: 0;');
        }
    })
})