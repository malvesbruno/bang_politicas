let invisibles = document.getElementsByClassName('invisible');

const observerInvisble = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Element is now visible:', entry.target);
                entry.target.classList.remove('invisible')
                entry.target.classList.add('visible')
            } else {
                console.log('Element is now hidden:', entry.target);
                entry.target.classList.remove('visible')
                entry.target.classList.add('invisible')
            }
        });
    }, { threshold: 0.1 });

for (let el = 0; el < invisibles.length; el++){
    let elemento = invisibles[el]
    try{
        observerInvisble.observe(elemento)
    }catch (error){
        console.log(error)
    }
}