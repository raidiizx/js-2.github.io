function putname() {
    const value = document.getElementById("name-Input").value;
    if (value === "") {
        alert("Sorry please enter your name");
    } else {
        alert(`Happy birth day ${value}`);
    }
}


