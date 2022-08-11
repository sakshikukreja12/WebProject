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

// my code Logic for deleting the selected book from table based on book name.
let deleteButton = document.getElementById('RemoveBtn');

deleteButton.addEventListener('click', function(event) {
    // below we are getting the number of records stored in table along with the heading row.
    let numberOfRecords = document.getElementsByClassName("table-striped")[0].rows;

    let findIndex =0; // this variable will be used for deleting the record from the table

    let searcText = document.getElementById('txt-search').value.toLowerCase();

    // is for loop m hum us record ki index find kareinge jo reocrd hum delete krna chahte hain 
    // takey baad m hum deleteRow() method use kr k simply record delete kr sakein.

    for(let i=1; i<numberOfRecords.length; i++){
        let bookName = numberOfRecords[i].children[0].innerText;

        if(searcText==bookName.toLowerCase())
        {
            findIndex = i;
            break;
        }
    }
    // agar jo record humne search kiya h wo table m moujood hoga to findIndex ki value 
    // other than zero hogi so in that situation we want to delete that record.
    if(findIndex!=0)
    {
        document.getElementsByClassName("table-striped")[0].deleteRow(findIndex);
        // record deleted from the table;
        alert("record deleted succesfully from the table")
    }
    else
    {
        alert("The record you want to delete does not exist in the table");
    }
   event.preventDefault();  
})

btnSearch = document.getElementById('btn-search')
let updated

btnSearch.addEventListener('click', function(){
    text = document.getElementById('txt-search').value.toLowerCase();
    let tableBody = document.getElementById("tableBody")
    tableRows = tableBody.getElementsByTagName('tr')
    for(let i=0; i<tableRows.length; i++){
        let name = tableRows[i].getElementsByTagName('td')[0].innerText;
        if(name.toLowerCase() == text){
            document.getElementById("bookName").value = name
            document.getElementById("Author").value = tableRows[i].getElementsByTagName('td')[1].innerHTML
            document.getElementById("year").value = tableRows[i].getElementsByTagName('td')[3].innerHTML
            updated = tableRows[i] 
        }
    }
})