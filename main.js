//----------------------- VARIABLES ----------------

let $openBtn = document.querySelector('.open-btn');
let $modalContainer = document.querySelector('.modal-container')
let $closeBtn = document.querySelector('.close-btn');
let $modal = document.querySelector('.modal');


// --------------------- Funciones ----------------------

$openBtn.addEventListener('click', () => {
    // console.log("funciona")
    $modalContainer.style.display = "none";
    $modal.style.display = "flex"
    
})
window.addEventListener('click', (element) => {
    // console.log("funciona el click");
    if(element.target === document.body){
        $modalContainer.style.display = "flex";
        $modal.style.display = "none";
    }
})
$closeBtn.addEventListener('click', () => {    
    $modalContainer.style.display = "flex";
    $modal.style.display = "none";
})
