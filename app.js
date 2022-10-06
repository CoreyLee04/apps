
// function to calc square
function square(numLength) {
    
    p = 4 * numLength;

    alert(p.toFixed(2));
    //alert('The perimeter of a square is ${p}');
}
// function to cal circle
function radCircle(numLength) {
    p = 2 * Math.PI * numLength;
    alert(p.toFixed(2));
}
// function to cal rectangle
function radRectangle(numWidth, numLength) {
    p = numLength + numWidth * 2;
    alert(p.toFixed(2));
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

    //test error w/if
    if(numWidth <= 0){
        msg = "Width must be a number greater than 0\n";
        return msg;
    }

    if (isNaN(numWidth)) {
        msg = "Width is a required number\n";
        return msg;
    }
}

//Button Click Event
document.getElementById("btnGetPerim").addEventListener('click', function (){
    let length = parseInt(document.getElementById("numLength").value);
    let width = parseInt(document.getElementById("numWidth").value);

    //radSquare Radio Button option check
    if(document.getElementById('radSquare').checked){
        alert('Square button is checked!');

        //Validation Check
        let length_radius_valid_check = LengthRadiusValid(length);
        if (isNaN(length_radius_valid_check) == false){
            //Square function used
            square(length);
            
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

        //validation check
        let width_valid_check = WidthValid(width);
        let length_radius_valid_check = LengthRadiusValid(length);
        

        alert(length_radius_valid_check);
        alert(width_valid_check);

        
    
    }
});
