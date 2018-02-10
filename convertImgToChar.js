//given an array of strings, ordered from darkest to lightest
//use of a helper function to get the brightness at an (x,y) coordinate
//recreate the image as a nested array using the brightness values of the input array

function imageToChar(array){
    var result = [];
    var arrayBrightnessSection = 256 / array.length; 

    for(var yAxis=0; yAxis >= 0; yAxis++ ){
        var rowOfPixels = [];
        for(var xAxis = 0; xAxis >= 0; xAxis++){
            var brightness = helper(xAxis, yAxis);
            if(brightness !== undefined){
                var indexInArray = Math.round(brightness / arrayBrightnessSection); 
                rowOfPixels.push(array[indexInArray]);
            } else if( !brightness && xAxis === 0 ){
                return result; 
            } else {
                result.push(rowOfPixels);
                break; 
            }
        }
    }
}


function helper(x,y){
    var image = [
        [56, 0],
        [0, 255]
    ]
    if(image[y][x]){
        return image[y][x];
    } else {
        return undefined; 
    } 
}



var result = imageToChar(['0', '1', '2', '3', '4', '5', '6', '7'])
console.log(result);


