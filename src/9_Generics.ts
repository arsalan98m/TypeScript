/*
==========
Generics 
generic allow you to dynamically define what types of function will use
we want to use functions in different ways 
==========
*/

// Without generic (If i pass string array then this shows an error and this is where generics come to play)

/*
function removeItemFromArray(arr: number[], item: number): number[] {
    const index = arr.indexOf(item);
        if(index != -1){
    arr.splice(index, 1);

    }    return arr;
}

removeItemFromArray([1, 2, 3], 2);
*/

// With Generic

function removeItemFromArray<TypeOfItem>(
  arr: Array<TypeOfItem>,
  item: TypeOfItem
): Array<TypeOfItem> {
  const index = arr.indexOf(item);
  if (index != -1) {
    arr.splice(index, 1);
  }
  return arr;
}

console.log(removeItemFromArray<number>([1, 2, 3], 2));
console.log(removeItemFromArray<string>(["abid", "zahid", "bilal"], "ooo"));
