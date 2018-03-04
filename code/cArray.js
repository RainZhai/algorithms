function CArray(numElements){
    this.dataStore = [];
    this.pos = 0;
    this.gaps = [5, 3, 1];
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.setGaps = setGaps;
    this.shellSort = shellSort;
    this.mergeSort = mergeSort;
    this.mergeArrays = mergeArrays;
    for(var i = 0; i< numElements; ++i){
        this.dataStore[i] = 0;
    }
}

function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight){
    var rightArr = new Array(stopRight - startRight+1);
    var leftArr = new Array(stopLeft - startLeft+1);
    k = startRight;
    for(var i = 0; i< (rightArr.length -1); ++i){
        rightArr[i] = arr[k];
        ++k;
    }
    k = startLeft;
    for(var i = 0; i< (leftArr.length -1); ++i){
        leftArr[i] = arr[k];
        ++k;
    }

    rightArr[rightArr.length-1] = Infinity;
    leftArr[leftArr.length-1] = Infinity;
    var m =0;
    var n =0;
    for(var k = startLeft; k<stopRight; ++k){
        if(leftArr[m] <=rightArr[n]){
            arr[k] = leftArr[m]
            m++;
        }else{
            arr[k] = rightArr[n];
            n++;
        }
    }
    console.log("left array:",leftArr);
    console.log("right array:",rightArr);

}

function mergeSort(){
    if(this.dataStore.length<2){
        return;
    }
    var step = 1;
    var left, right;
    while(step < arr.length){
        left = 0;
        right = step;
        while(right + step <=arr.length){
            mergeArrays(this.dataStore, left, left+step, right, right+step);
            left = right + step;
            right = left + step;
        }
        if(right < arr.length){
            mergeArrays(this.dataStore, left, left+step, right, arr.length);
        }
        step *= 2;
    }
}