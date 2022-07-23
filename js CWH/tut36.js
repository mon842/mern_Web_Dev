class Library{
    constructor(bookList){
        this.bookList=bookList;//creating object named bookList
        this.issuedBook={};//creating object named issuedBook
    }
    getBookList()
    {
        this.bookList.forEach(element => {
            console.log(element);// will show the booklist when called
        });

    }
    returnBook(bookName)
    {
        delete this.issuedBook[bookName];//deleting the book
    }
    issueBook(bookName,user)
    {
        if (this.issuedBook[bookName]==undefined) {
            this.issuedBook[bookName]=user;// issuing a book with user
            
        } else {
            console.log("it is already issued")
        }
        
    }
}