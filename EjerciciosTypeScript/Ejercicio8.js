function drawRace(indices, length) {
    const reno ='r';
    const space = ' ';
    const carril= '~';
    const finalRace =[];

    indices.forEach((e,i)=>{
        if(e===0){
            finalRace.push(space.repeat(indices.length-i) + carril.repeat(length)+'\n');
        }else{
            const carril1= Array.from(space.repeat(indices.length-i) + carril.repeat(length)+'\n');
            if(e>0){
                carril1.splice(-indices[i]-1,1,reno);
            }else{
                carril1.splice(indices[i]-1,1,reno);
            }
            finalRace.push(carril1.join(''));
        }
    });

    return finalRace.toString();
  }

  function drawRace1(indices, length) {
    const race = indices.reduce((prevValue, value, index) => {
		const reindeerI = (value + length) % length
		let iceTrack = `${'~'.repeat(reindeerI)}${'r'.slice(~reindeerI + 2)}`.padEnd(length, '~')
		return prevValue + ' '.repeat(indices.length - index - 1) + iceTrack + ` /${index + 1}\n`
	}, '')

	return race.trimEnd()
  }

console.log(drawRace1([0, 5, -3], 10));
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/