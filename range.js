var range = function(start,end,step){
  const array = [];
  if( start > end || step <= 0 || start === undefined || end === undefined || step ===undefined ){
    return [];
  }
  for(let i = start; i <= end; i += step){
    array.push(i);
  }
  return array;
} 