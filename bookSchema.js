let bookProps = {
	"name": "name of the book",
	"authors": [];
	"category": "category of the book", 
	"keywords": "some keywords",
	"coverUrl": "address of the cover", 
	"price": "price of the book",
	"content": {
		"copyrightStatement": "statement for copyright",
		"preface": "book's preface",
		"tableOfContent":"table of content of the book",
		"chapter": [],
		"index":{

		}
	}
}

// creation of the book
let book = new Book(bookProps);