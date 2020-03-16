var merge = function (array1,array2){
	if(array1.length === 0){
		return array2;
	}
	else if(array2.length == 0){
		return array1;
	}
	let mergearray = [];
	let i = 0;
	let temp = 0;
	while(i < array1.length){

		for(let j = temp; j < array2.length;j++){
			if(array1[i] > array2[j]){
				mergearray.push(array2[j]);
				if(j === array2.length-1){
					for(let k = i; k < array1.length; k++){
						mergearray.push(array1[k]);
					}
					return mergearray;
				}
			}
			else{
				temp = j;
				mergearray.push(array1[i]);
				i++;
				if(i === array1.length){
					for(let k = j; k < array2.length; k++){
						mergearray.push(array2[k]);
					}
					return mergearray;
				}
				break;
			}
		}
	}
	return mergearray;


	}

	console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
	console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
	console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
