function qSort(arr){
    if(arr.length==0){
        return []
    }
    var left = [];
    var right = [];
    var pivot = arr[0];
    for(var i=1; i<arr.length; i++){
        console.log("基准值："+ pivot + "当前："+ arr[i]);
        if(arr[i] < pivot){
            console.log("移动"+ arr[i] + "到左边" );
            left.push(arr[i])
        }else{
            console.log("移动"+ arr[i] + "到右边" );
            right.push(arr[i])
        }
    }
    return qSort(left).concat(pivot, qSort(right))
}

var a = [2,3,33,22,11]; 

console.log(a);
console.log(qSort(a));
