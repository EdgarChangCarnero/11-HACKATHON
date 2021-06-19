const carritoUno = document.getElementById('carritoUno');
const carritoDos = document.getElementById('carritoDos');
const carritoTres = document.getElementById('carritoTres');
const total = document.querySelector('.total');
const img = document.querySelector('.img');
const nom = document.querySelector('.nombre');
const prec = document.querySelector('.precio');
const elim = document.querySelector('.eliminar');
let producto = '',
    logo ='',
    arrayImg = [],
    nombre = '',
    arrayNombre = []
    precio = ''
    arrayPrecio = [];
    boton = '';
    eliminar =`<img src="https://e7.pngegg.com/pngimages/854/935/png-clipart-computer-icons-scalable-graphics-icon-design-delete-button-logo-sign-thumbnail.png" alt="" width="20px" height="20px">`;
    arrayEliminar = [];
carritoUno.addEventListener('click', (e)=>{
    logo = e.target.parentElement.firstElementChild;
    nombre = e.target.parentElement.firstElementChild.nextElementSibling.textContent;
    precio = e.target.parentElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.textContent;
    boton.innerHTML = eliminar;
    arrayImg = [...arrayImg, `<br>${logo}`];
    arrayNombre = [...arrayNombre, `<br>${nombre}`];
    arrayPrecio = [...arrayPrecio, `<br>${precio}`];
    arrayEliminar = [...arrayEliminar, `<br>${eliminar}`];
    img.innerHTML= `<br>${arrayImg}`;
    nom.innerHTML = `<br>${arrayNombre}`;
    prec.innerHTML = `<br>${arrayPrecio}`;
    elim.innerHTML = `<br>${arrayEliminar}`;
    total.innerHTML=`<p>Total de curso es ${arrayImg.length}</p>`;

    // elim.addEventListener('click', (e)=>{
    //     if (idElim === idImg){
    //         img.style.display = 'none';
    //         nom.style.display = 'none';
    //         prec.style.display = 'none';
    //         elim.style.display = 'none';
    //     }       
    // });
    // console.log (arrayEliminar);    
    
});
carritoDos.addEventListener('click', (e)=>{
    logo = e.target.parentElement.firstElementChild;
    nombre = e.target.parentElement.firstElementChild.nextElementSibling.textContent;
    precio = e.target.parentElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.textContent;
    boton.innerHTML = eliminar;
    arrayImg = [...arrayImg, `<br>${logo}`];
    arrayNombre = [...arrayNombre, `<br>${nombre}`];
    arrayPrecio = [...arrayPrecio, `<br>${precio}`];
    arrayEliminar = [...arrayEliminar, `<br>${eliminar}`];
    img.innerHTML = `<br>${arrayImg}`;
    nom.innerHTML = `<br>${arrayNombre}`;
    prec.innerHTML = `<br>${arrayPrecio}`;
    elim.innerHTML = `<br>${arrayEliminar}`;
    total.innerHTML=`<p>Total de curso es ${arrayImg.length}</p>`;
});
carritoTres.addEventListener('click', (e)=>{
    logo = e.target.parentElement.firstElementChild;
    nombre = e.target.parentElement.firstElementChild.nextElementSibling.textContent;
    precio = e.target.parentElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.textContent;
    boton.innerHTML = eliminar;
    arrayImg = [...arrayImg, `<br>${logo}`];
    arrayNombre = [...arrayNombre, `<br>${nombre}`];
    arrayPrecio = [...arrayPrecio, `<br>${precio}`];
    arrayEliminar = [...arrayEliminar, `<br>${eliminar}`];
    img.innerHTML = `<br>${arrayImg}`;
    nom.innerHTML = `<br>${arrayNombre}`;
    prec.innerHTML = `<br>${arrayPrecio}`;
    elim.innerHTML = `<br>${arrayEliminar}`;
    total.innerHTML=`<p>Total de curso es ${arrayImg.length}</p>`;
});

