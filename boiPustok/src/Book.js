let myBookSchema = require('./bookSchema.json');

let Book = function (bookSchema) {
    this.info = bookSchema;
    this.saveInDatabase = function () {
        //method to save book in database
    }
    this.getFromDatabase = function () {
        //method to get the book from database
    }
}
