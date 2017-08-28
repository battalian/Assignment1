/**
 * Created by chavaharish on 28-08-2017.
 */
function add5(arg) {
    return arg+5;
}

function for_each(arr, callback) {
    for(i=0; i<arr.length; i++)
        console.log ( callback( arr[i] ));
}

function map(arr, callback) {
    var b=[];
    for(i=0; i<arr.length; i++)
        b.push( callback(arr[i]) );

    return b;
}

arr = [1,2,3,4,5];
for_each(arr, add5);

var go = map(arr, add5);
console.log(go);