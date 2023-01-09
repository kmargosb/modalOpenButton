//----------------------- VARIABLES ----------------

let $openBtn = document.querySelector('.open-btn');
let $modalContainer = document.querySelector('.modal-container')
let $closeBtn = document.querySelector('.close-btn');
let $modal = document.querySelector('.modal');


// --------------------- Funciones ----------------------

$openBtn.addEventListener('click', function(){
    // console.log("funciona")
    $modalContainer.style.display = "none";
    $modal.style.display = "flex"
})
window.addEventListener('click', function(element){
    // console.log("funciona el click");
    if(element.target === document.body){
        $modalContainer.style.display = "flex";
        $modal.style.display = "none";
    }
})
$closeBtn.addEventListener('click', function(){    
    $modalContainer.style.display = "flex";
    $modal.style.display = "none";    
})


// Funciona el click en cualquier parte de la ventana pero no cambia el display a "none"