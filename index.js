function checkloveper(){
    var name = document.getElementById('name').value;
    var lname = document.getElementById('lname').value;

    if(name == ""){
        alert('Please enter your name');
    }else if (name.length <=2) {
        alert('Min length is 3')
    }else if (!isNaN(name)){
        alert('Numbers are not allowed');
    }
    if(lname == ""){
        alert("Please enter your name");
    }else if (lname.length <= 2) {
        alert('Min length is 3')
    }else if(!isNaN(lname)){
        alert('Numbers are not allowed');
    }else{
        var lovedata = Math.random() * 100;
        lovedata = Math.floor(lovedata);
        document.getElementById('lovevalue').value = lovedata + "%";
    }
}

//============form validation part===================//

