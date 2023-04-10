
var data;

function median(){
    var data = document.getElementById("input-data").value;
    var data = data.split(",");
    var sortedLst = data.sort(function(a, b){return a-b});

    let listLen = data.length;
    
    let index = Math.floor((listLen - 1) / 2 );


    if (listLen % 2){
        alert( sortedLst[index]  ) 
    } else {
        var result = ( ( parseInt(sortedLst[index])  + parseInt(sortedLst[index + 1])) /2 ) 
        document.getElementById("result").innerHTML = result;
    }

}


function convert_to_list(data) {
    var data = data.split(",");
}