/**
 * Created by chavaharish on 27-08-2017.
 */
function add5() {
    return "hi from other side";
}

function setTimeOutSync(  n, callback) {
    var start = new Date().getTime();
    console.log(start);
    while(((new Date().getTime())- start) < n)
    {

    }
    console.log( new Date().getTime() );
     console.log( callback())  ;

}
setTimeOutSync(5000, add5);