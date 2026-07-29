/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */




interface Books{
     Title:String; // judul 
     AuthorsName:String;// Nama Penulis
     ISBNNumber:String; // ISBN
     PagesTotal:number;
     CategoryBook:String;
     IsAvailable:Boolean;//
     
}



const book1 : Books ={
     Title: "Matematika",
     AuthorsName:"Via",
     ISBNNumber:"V1ias",
     PagesTotal:5,
     CategoryBook:"Pelajaran",
     IsAvailable:true,
};

// book1.AuthorsName

const book2 : Books ={
     Title: "Sejarah",
     AuthorsName:"sysca",
     ISBNNumber:"Scsy34",
     PagesTotal:20,
     CategoryBook:"Pelajaran",
     IsAvailable:true,
};
const book3 : Books ={
     Title: "Bahasa Inggris",
     AuthorsName:"Lyla",
     ISBNNumber:"Ly783d",
     PagesTotal:15,
     CategoryBook:"Pelajaran",
     IsAvailable:true,
};
console.log("===Book Data===");
console.log({
     book1,
     book2,
     book3,
});
