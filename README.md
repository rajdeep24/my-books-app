# my-books-app


1. RESTful Architecture 

** 7 RESTful Routes **

BOOK Model 

* VIEW ROUTES *
GET /book -> handles or html (this is a page to view all books)
GET /book/:id handles or html (this is a page to view one book by id)
GET /book/edit/:id handles or html (View a book form, pre-populated with data.)
GET /book/new handles or html (View a book form that is empty )


* API ROUTES *

POST /book -> JSON
PUT /book/:id -> JSON (Update an existing book, by ID)
DELETE /book/:id -> JSON (Delete an existing book, by ID)

--------------

BOOK Model + Author Model

* VIEW ROUTES *
GET /book -> handles or html (View all books, include associated authors)
GET /book/:id handles or html (this is a page to view one book by id with associated author)
GET /book/edit/:id handles or html (View a book form, pre-populated with data.)
GET /book/new handles or html (View a book form that is empty )


* API ROUTES *

POST /book -> JS
PUT /book/:id -> JSON (Update an existing book, by ID, and maybe corresponding author?)
DELETE /book/:id -> JSON (Delete an existing book, by ID, 


)

2. Resource-Driven APIs (IN REACT)

Resource = A single item in a database table (single row, single document, single object)

Collection = multiple items from a database table (Multiple rows, multiple documents, array of objects)

We abstract the views in react into API routes 
* API Routes * 

instead of returning HTML or handlebar views, everything is returned in JSON 

BOOK Model 

GET /book -> JSON (Returns a collection of books from the DB)
GET /book/:id JSON (Returns a single book resource form the DB)
POST /book -> JSON (CREATES a single book resource in the DB)
PUT /book/:id -> (UPDATES a single resource in the DB by ID)
DELETE /book/:id -> (Removes a single book resource in the DB by ID)


To create a book, with an authorID as a foreign key, what must I have FIRST?

I MUST have an author. 
I MUST have that author's ID. 