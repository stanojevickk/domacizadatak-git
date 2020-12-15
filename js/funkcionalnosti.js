var today = new Date();

var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
        
const datum = document.getElementById("datum");

datum.style.fontFamily = "Popins, sans-serif";
datum.innerText = date;