const accordions = document.querySelectorAll('.accordion');


accordions.forEach((accordion)=>{

    const accordionButton = accordion.querySelector('.accordionButton');
    accordionButton.addEventListener('click',()=>{

        accordion.querySelector('.minusicon').classList.toggle('active');
        accordion.querySelector('.plusicon').classList.toggle('active');
        accordion.querySelector('.AccordionText').classList.toggle('active');

    });

});