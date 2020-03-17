var smartGarbage = function(trash,bins){
	(trash === 'recycling') ? bins.recycling++
	: (trash === 'waste') ? bins.waste++
	: bins.compost++
	return bins;
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));