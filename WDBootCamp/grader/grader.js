function average(arr){
    var total = 0;
    arr.forEach(function(num){
        total = total+num;
    });
    console.log(Math.round(total/arr.length));
    }


var scores = [40, 65, 77, 82, 80, 54, 73, 62, 95, 49];
average(scores);