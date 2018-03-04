//快速排序
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
            left.push(arr[i])
        }
    }
    return qSort(left).cancat(pivot, qSort(right))
}

var a = [];
for(var i=0; i<10; ++i){
    a[i] = Math.floor((Math.random()*100)+1);
}

console.log(a);
console.log(qSort(a));