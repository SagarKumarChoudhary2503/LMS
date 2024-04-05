let data = JSON.parse(localStorage.getItem("object")) || [
    {id: 1, Category: "Science Fiction", Title: "Dune", Author: "Frank Herbert" }, 
    {id: 2, Category: "Non-Fiction", Title: "Frankenstein", Author: "Mary Shelley"},
    {id: 3, Category: "Fantasy", Title: "Pride and Prejudice", Author: "Jane Austen" }, 
    {id: 4, Category: "Thriller", Title: "The Red and the Black", Author: "Stendhal"},
    {id: 5, Category: "Young Adult", Title: "David Copperfield", Author: "Charles Dickens" }, 
];

function readAll() {
    var tabledata = document.querySelector(".data_table");
    var elements = "";

    data.forEach(record => {
        elements += `<tr>
            <td>${record.Category}</td>
            <td>${record.Title}</td>
            <td>${record.Author}</td>
            <td>
                 <button class="edit" onclick="edit(${record.id})">Edit</button>
                 <button class="delete" onclick="delet(${record.id})">Delete</button>
            </td>
        </tr>`;
    });

    tabledata.innerHTML = elements;
}

function delet(id) {
    if (confirm("Are you sure want to delete?")) {
        data = data.filter(rec => rec.id != id);
        localStorage.setItem("object", JSON.stringify(data));
        readAll();
    }
}

function create() {
    document.querySelector(".create_form").style.display = "block";
    document.querySelector(".add_div").style.display = "none";
    document.querySelector(".Cname").value = "";
    document.querySelector(".Tname").value = "";
    document.querySelector(".Aname").value = "";
}

function add() {
    var catg = document.querySelector(".Cname").value;
    var Book = document.querySelector(".Tname").value;
    var name = document.querySelector(".Aname").value;
    if (catg === "" || Book === "" || name === "") {
        alert("Fill in all details before create");
        return; 
    }
    var newobj = { id: data.length + 1, Category: catg, Title: Book, Author: name }; 
    data.push(newobj);
    localStorage.setItem("object", JSON.stringify(data));

    document.querySelector(".create_form").style.display = "none";
    document.querySelector(".add_div").style.display = "block";

    readAll();
}

function edit(id) {
    document.querySelector('.update_form').style.display = "block";
    var obj = data.find(rec => rec.id === id);
    document.querySelector('.catg').value = obj.Category;
    document.querySelector('.Tiname').value = obj.Title;
    document.querySelector('.Auname').value = obj.Author;
    document.querySelector('.id').value = obj.id;
}

function update() {
    var id = parseInt(document.querySelector('.id').value);
    var catg = document.querySelector('.catg').value;
    var Book = document.querySelector('.Tiname').value;
    var name = document.querySelector('.Auname').value;

    var index = data.findIndex(rec => rec.id === id);
    if (index !== -1) {
        data[index] = { id: id, Category: catg, Title: Book, Author: name };
        localStorage.setItem("object", JSON.stringify(data));
        document.querySelector('.update_form').style.display = "none";
        readAll();
    }
}