const logoRecherche = document.querySelector('.btn-recherche')
const inputRecherche = document.querySelector('.input')

logoRecherche.addEventListener('click',()=>{
    inputRecherche.classList.toggle('active')
})
// nav onglet 
const LienAnimalerie = document.querySelector('.link-animalerie')
const LienJardin = document.querySelector('.link-jardin')
const onglets = document.querySelector('.onglets')
const ongletsAnimalerie = document.querySelector('.animalerie')
const ongletJardin = document.querySelector('.jardin')


LienAnimalerie.addEventListener('click', (e) => {

    e.preventDefault();
    onglets.classList.add('anim')
    ongletsAnimalerie.classList.remove('active')
    ongletJardin.classList.remove('active')
    onglets.classList.toggle('active')
    ongletsAnimalerie.classList.toggle('active')
});
LienJardin.addEventListener('click', (e) => {
    e.preventDefault();  
    onglets.classList.add('anim')
    ongletsAnimalerie.classList.remove('active')
    ongletJardin.classList.remove('active')
    onglets.classList.toggle('active')
    ongletJardin.classList.toggle('active')
});


