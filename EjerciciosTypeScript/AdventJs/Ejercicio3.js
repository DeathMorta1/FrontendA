const inventory = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
  ]

function organizeInventory(inventory) {
    const finalObj ={};
    if(inventory.length===0){return finalObj}
    inventory.forEach(obj => {
        if(!finalObj[obj.category]){
            finalObj[obj.category] = {
                [obj.name] : obj.quantity
            };
        }else{
            if(!finalObj[obj.category][obj.name]){
                finalObj[obj.category][obj.name] = obj.quantity;
            }else{
                
                finalObj[obj.category][obj.name] += obj.quantity;
            }
        }
    });
    return finalObj;
}

function organizeInventory2(inventory) {
    const finalObj = {};

    inventory.forEach(({ category, name, quantity }) => {
        if (!finalObj[category]) {
            finalObj[category] = {};
        }
        finalObj[category][name] = (finalObj[category][name] || 0) + quantity;
    });

    return finalObj;
}

function organizeInventory3(inventory) {
    return inventory.reduce((acc, { category, name, quantity }) => {
        acc[category] = acc[category] || {};
        acc[category][name] = (acc[category][name] || 0) + quantity;
        return acc;
    }, {});
}

console.log(organizeInventory3(inventory));

// Resultado esperado:
// {
//   toys: {
//     doll: 5,
//     car: 5
//   },
//   sports: {
//     ball: 2,
//     racket: 4
//   }
