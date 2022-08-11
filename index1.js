let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (event) {

    let bookName = document.getElementById("bookName").value;
    let author = document.getElementById("Author").value;
    let year=document.getElementById("year").value;
    let fiction = document.getElementById("Fiction");
    let programming = document.getElementById("Computer Programming");
    let medical = document.getElementById("Medical");
    let Nonfiction= document.getElementById("NonFiction");
    let mathematics= document.getElementById("Mathematics");

    if (fiction.checked) {
        checkedValue = fiction.value;
    }

    else if (programming.checked) {
        checkedValue = programming.value;
    }
    else if (medical.checked) {
        checkedValue = medical.value;
    }
    else if (Nonfiction.checked){
        checkedValue = Nonfiction.value;
    }
    else if(mathematics.checked){
        checkedValue = mathematics.value;
    }
   if (bookName.length <= 3 || author.length <= 3) {
        let message = document.getElementById('msg');
        message = alert( 'Invalid values');
    }
    else {

        let tableBody = document.getElementById("tableBody");
        tableBody.innerHTML += `
    <tr>              
        <td>${bookName}</td>
        <td>${author}</td>
        <td>${checkedValue}</td>
        <td>${year}</td>
    </tr>
    `
    alert( 'Books are succesfully added');
      event.preventDefault();
    }
})
