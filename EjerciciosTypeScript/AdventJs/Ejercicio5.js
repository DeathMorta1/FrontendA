const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
];

function organizeShoes(shoes) {
    const final=[];
    const r = shoes.filter(p=> p.type==='R');
    const i = shoes.filter(p=> p.type==='I');
    if(r.length<i.length){
        r.forEach(e => {
            if(i.find(g=> g.size===e.size)){
                final.push(e.size);
            }
        });
    }else{
        i.forEach(e => {
            if(r.find(g=> g.size===e.size)){
                final.push(e.size);
            }
        });
    }
    return final;
}

function organizeShoes1(shoes) {
	const pairOfShoes = []
	const iShoes = []
	const rShoes = []

	for (const shoe of shoes) {
		if (shoe.type === 'I') {
			iShoes.push(shoe.size)
			continue
		}

		rShoes.push(shoe.size)
	}

	for (const iShoe of iShoes) {
		const rShoeI = rShoes.findIndex((shoe) => shoe === iShoe)
		if (rShoeI === -1) continue

		pairOfShoes.push(iShoe)
		rShoes.splice(rShoeI, 1)
	}

	return pairOfShoes
}
  
console.log(organizeShoes(shoes));
// [38, 42]