const ventas = [
    { producto: "Laptop", precio: 1200, cantidad: 2 },
    { producto: "Smartphone", precio: 800, cantidad: 5 },
    { producto: "Audífonos", precio: 50, cantidad: 10 },
    { producto: "Teclado", precio: 100, cantidad: 4 },
    { producto: "Monitor", precio: 300, cantidad: 3 }
];

//Calcular total de ingresos
const totalIngresos = ventas.reduce((total,{precio,cantidad})=>{
    return total + (precio * cantidad);
},0);

console.log(totalIngresos);

//Contar la cantidad total de productos
const totalVendidos = ventas.reduce((total,venta)=>{
    return total + venta.cantidad;
},0);

console.log(totalVendidos);

//Agrupar los productos por categorias de precios (baratos y caros)
const catalogo = ventas.reduce((cat,venta)=>{
    if(venta.precio<200)
        cat.barato.push(venta);
    else
        cat.caro.push(venta);
    return cat;
},{barato:[],caro:[]});

console.log(catalogo);

//Crear un objeto que muestre las cantidades por producto.
const objCantProc = ventas.reduce((obj,venta,index)=>{
    obj[`Venta_${index+1}`] = `Nombre: ${venta.producto}, Cantidad ${venta.cantidad}`;
    return obj;
},{});

console.log(objCantProc);

//Encontrar el producto mas caro
const masCaro = ventas.reduce((obj,venta)=>{
    return venta.precio > obj.precio ? venta:obj
});

console.log(masCaro);