
// function to calc square
function radsquare(numLength) {
    
    let p = 4 * numLength;
    let message = "The perimeter of the square is " + p.toFixed(2);
    alert(message);
}
// function to cal circle
function radCircle(numLength) {
    let p = 2 * Math.PI * numLength;
    let message = "The perimeter of the circle is " + p.toFixed(2);
    alert(message);
}
// function to cal rectangle
function radRectangle(numLength, numWidth) {
    p = (numLength + numWidth) * 2;
    message = "The perimeter of the rectangle is " + p.toFixed(2);
    alert(message);
}

function LengthRadiusValid(numLength) {

    let msg = "";

    //test validation w/if
    if (numLength <= 0) {
        
        msg = "Length/radius must be a number greater than 0\n";
        return msg;
    }

    if(isNaN(numLength)) {

        msg = "Length/radius is a required number\n";
        return msg;
    }
    return numLength;
}

function WidthValid(numWidth){
    let msg = "";

    //test validation w/if
    if (numWidth <= 0) {
        
        msg = "Width must be a number greater than 0\n";
        return msg;
    }

    if(isNaN(numWidth)) {

        msg = "Width is a required number\n";
        return msg;
    }
    return numWidth;
}

//Button Click Event
document.getElementById("btnGetPerim").addEventListener('click', function (){
    let length = parseFloat(document.getElementById("numLength").value);
    let width = parseFloat(document.getElementById("numWidth").value);

    //radSquare Radio Button option check
    if(document.getElementById('radSquare').checked){
        alert('Square button is checked!');

        //Validation Check
        let length_radius_valid_check = LengthRadiusValid(length);
        if (isNaN(length_radius_valid_check) == false){
            //Square function used
            radsquare(length);
            
        }
        else {
            alert(length_radius_valid_check);
        }
    }
    
    //radCircle Radio Button option check
    if(document.getElementById('radCircle').checked){
        alert('Circle button is checked!');

        //Validaton Check
        let length_radius_valid_check = LengthRadiusValid(length);
        if(isNaN(length_radius_valid_check) == false){
            //Circle Function used
            radCircle(length);
        }
        else{
            alert(length_radius_valid_check);
        }
    }
    
    //radRectangle Radio Button option check
    if(document.getElementById('radRectangle').checked){
        alert('Rectangle Button is checked!');

        let length_radius_valid_check = LengthRadiusValid(length);
        if(isNaN(length_radius_valid_check) == false){
            let width_valid_check = WidthValid(width);
            if(isNaN(width_valid_check) == false){
                radRectangle(length,width);
            }
            else{
                alert(width_valid_check);
            }
        }
        else{
            alert(length_radius_valid_check);
        }
    }
});
