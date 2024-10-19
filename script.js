const main = document.querySelector('main');
const plus = document.querySelector('.plus');
const check = document.querySelector('.check');
const form = document.querySelector('form');
const yesRadio = document.querySelector('#yes');
const noRadio = document.querySelector('#no');
const addBookButton = document.querySelector('#add-book-button');
const cancelButton = document.querySelector('#cancel-button');

main.addEventListener('click', () => {
  plus.style.display = "block";
  form.style.display = "none";
  check.style.display = "none";
});

plus.addEventListener('click', () => {
  plus.style.display = "none";
  form.style.display = "block";
  check.style.display = "block";
});

check.addEventListener('click', () => {
  plus.style.display = "block";
  form.style.display = "none";
  check.style.display = "none";
})

cancelButton.addEventListener('click', (event) => {
  event.preventDefault();

  plus.style.display = "block";
  form.style.display = "none";
  check.style.display = "none";

  form.reset();
})

// Library array.
const myLibrary = [];

function Book(title, author, pages, status) {

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

addBookButton.addEventListener('click', (event) => {
  event.preventDefault();

  const title = document.querySelector('#book-title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#num-of-pages').value;


  if (title === "" || author === "" || pages === "") {
    alert("Please complete the form");
  }
  else {
    function status() {
      if(yesRadio.checked) {
        return "Have read"
      }
      if(noRadio.checked) {
        return "Have not read";
      }
    }
    
    const newBook = new Book(title, author, pages, status());

    myLibrary.push(addBookToLibrary(newBook));
    
    console.log(myLibrary);
  
    form.reset();
  }
  

});

function addBookToLibrary(book) {

const bookCardDiv = document.createElement('div');
const bookTitleH1 = document.createElement('h1');
const bookAuthorH3 = document.createElement('h3');
const numOfPagesH4 = document.createElement('h4');
const statusPara = document.createElement('p')
const removeButton = document.createElement('button');

bookCardDiv.setAttribute("class", "book-card");
bookTitleH1.setAttribute("id", "title");
bookAuthorH3.setAttribute("id", "author");
numOfPagesH4.setAttribute("id", "numOfPages");
statusPara.setAttribute("id", "status");
removeButton.setAttribute("id", "remove-book-button");

main.appendChild(bookCardDiv);
bookCardDiv.appendChild(bookTitleH1);
bookCardDiv.appendChild(bookAuthorH3);
bookCardDiv.appendChild(numOfPagesH4);
bookCardDiv.appendChild(statusPara);
bookCardDiv.appendChild(removeButton);

bookTitleH1.textContent = `${book.title}`;
bookAuthorH3.textContent = `by: ${book.author}`;
numOfPagesH4.textContent = `${book.pages} pages`;
statusPara.textContent = `status: ${book.status}`;
removeButton.textContent = "remove book";

statusPara.style.cursor = "pointer";
statusPara.style.display = "inline-block";

statusPara.addEventListener('click', () => {

  if(statusPara.textContent === "status: Have read") {
    statusPara.textContent = "status: Have not read";
  } 
  else if(statusPara.textContent === "status: Have not read") {
    statusPara.textContent = "status: Have read";
  }
});

// removeButton.addEventListener('click', () => {
//   myLibrary.pop(addBookToLibrary());
// });

}
