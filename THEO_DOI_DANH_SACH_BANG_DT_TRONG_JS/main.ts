export class Books {
    title: string;
    author: string;
    alreadyRead: boolean;

    constructor(title: string, author: string, alreadyRead: boolean) {
        this.title = title;
        this.author = author;
        this.alreadyRead = alreadyRead;
    }
}
let book1 = new Books('Thám tử lừng danh','Aoyama Gosho',false)
let book2 = new Books('Luffy',' Eiichiro Oda',true)
let books: Books[]=[];
books.push(book1,book2);
for (let i =0;i<books.length;i++){
    let book = books[i];
    let bookInfo = book.title + ' ' + book.author
    if(book.alreadyRead){
        console.log('Bạn đã đọc' + bookInfo);
    }else {
        console.log('Bạn chưa đọc sách ' + bookInfo);
    }
}
