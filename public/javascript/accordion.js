document.querySelectorAll('.accordion__button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;
        
        button.classList.toggle('accordion__button--active');
        if(button.classList.contains('accordion__button--active')) {
            accordionContent.setAttribute('style', 'overflow: auto; max-height: 350px;');
            
            document.querySelectorAll('.accordion__button').forEach(btn => {
                if(button !== btn) {
                    const accContent = btn.nextElementSibling;
                    if(btn.classList.contains('accordion__button--active')) {
                        btn.classList.toggle('accordion__button--active');
                        accContent.setAttribute('style', 'overflow: hidden; max-height: 0;');
                    }
                }
            })
        } else {
            accordionContent.setAttribute('style', 'overflow: hidden; max-height: 0;');
        }
    })
})