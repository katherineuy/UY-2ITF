function regCheck() {
    var input1 = document.getElementById("eType");
    var input2 = document.getElementById("eTitle");
    var input3 = document.getElementById("eDate-from");
    var input4 = document.getElementById("eDate-to");
    var input5 = document.getElementById("postDate");

    if(input1.value == "0" && input2.value == "" && input3.value == "" && input4.value == "" &&
    input5.value == ""){
        alert("ERROR. Please fill out all the fields.")
        return false;
    }
    else if(input1.value == "0"){
        alert("Please select an event.");
        return false;
    }
    else if(input2.value == ""){
        alert("Please fill out this field.")
        return false;
    }
    else if(input3.value > input4.value){
        alert("Please select correct date.")
        return false;
    }
    else if(input3.value == "" || input4.value == ""){
        alert("Please set the date.")
        return false;
    }
    else if(input5.value == ""){
        alert("Please set the post date")
        return false;
    }
    alert("Entry is submitted. Thank you!")
    return true;
}