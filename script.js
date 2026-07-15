function addBook() {

    let input = document.getElementById("bookName");
    let book = input.value.trim();

    if(book === ""){
        alert("Enter a book name");
        return;
    }

    let li = document.createElement("li");
    li.textContent = book;

    document.getElementById("bookList").appendChild(li);

    input.value = "";
}