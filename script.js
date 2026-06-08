let carrito=[];

function agregar(nombre,precio){
carrito.push({
nombre,
precio
});

actualizar();
}

function quitar(index){
carrito.splice(index,1);
actualizar();
}

function actualizar(){

let lista=document.getElementById("lista");
let total=0;

lista.innerHTML="";

carrito.forEach((item,index)=>{

total+=item.precio;

lista.innerHTML+=`
<div class="item">
<span>${item.nombre} - ${item.precio} Bs</span>

<button class="btn-remove" onclick="quitar(${index})">
❌
</button>

</div>
`;

});

document.getElementById("total").innerText=total;
}

function enviarPedido(){

let nombre=document.getElementById("nombre").value;
let telefono=document.getElementById("telefono").value;

if(carrito.length===0){
alert("Agrega al menos un producto");
return;
}

let total=0;

let pedido=`Hola Luxion Online Store%0A%0A`;

pedido+=`Cliente: ${nombre}%0A`;
pedido+=`WhatsApp: ${telefono}%0A`;

pedido+=`Código: LX-${Math.floor(Math.random()*99999)}%0A%0A`;

carrito.forEach(item=>{
pedido+=`• ${item.nombre} - ${item.precio} Bs%0A`;
total+=item.precio;
});

pedido+=`%0ATotal: ${total} Bs`;

window.open(
`https://wa.me/59175467510?text=${pedido}`,
"_blank"
);

}

function mostrar(id){

const secciones=[
'individual',
'combos',
'cable',
'juegos',
'ramen'
];

secciones.forEach(sec=>{
document.getElementById(sec).style.display='none';
});

document.getElementById(id).style.display='grid';

}