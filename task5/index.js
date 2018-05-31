var arr = [12,6,90,2,55,121,3,77,21214,22];

function linearSearch(searchValue){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === searchValue) return i;
      }
}

function binarySearch(value){
    var sortedArr = sorter(arr);
    console.log(arr);
    var startIndex  = 0,
        stopIndex   = sortedArr.length - 1,
        middle      = Math.floor((stopIndex + startIndex)/2);

    while(sortedArr[middle] != value && startIndex < stopIndex){

        //adjust search area
        if (value < sortedArr[middle]){
            stopIndex = middle - 1;
        } else if (value > sortedArr[middle]){
            startIndex = middle + 1;
        }

        //recalculate middle
        middle = Math.floor((stopIndex + startIndex)/2);
    }

    //make sure it's the right value
    return (sortedArr[middle] != value) ? -1 : middle;
}


function sorter(arr){
    var swap;
    var swapCount = 0;
  
    do{
        for (var i = 1, swapCount = 0; i < arr.length; i++){
            if(arr[i - 1]>arr[i]){
                swap = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = swap; 
                swapCount +=1;
            }
        }
    }while(swapCount>0 ); 
    return arr; 
  }


console.log(linearSearch(3));
console.log(binarySearch(3));