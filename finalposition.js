
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  
const finalPosition = function (moves) {
	let newdirection = [0,0];
	for (const direction of moves){
		(direction === 'north') ? newdirection[1]+= 1
		: (direction === 'south') ? newdirection[1] -= 1
		: (direction === 'east') ? newdirection[0] += 1
		:newdirection[0] -= 1;
	}
	return newdirection;
}

console.log(finalPosition(moves));