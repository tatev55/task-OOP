// class Rectangle {
//   constructor(width, length) {
//     this._width = width;
//     this._length = length;
//   }

//   get width(){
//     return this._width;
//   }

//   set width(value){
//     this._width = value ;
//   }

//   get length() {
//     return this._length;
//   }

//   set length(value){
//     this._length = value;
//   }
//   getArea(){
//     return this._width * this._length ;
//   }

//   getPerimeter(){
//     return 2 *(this._width + this._length);
//   }
  
//   toString(){
//     return `Rectangle (width = ${this._width}, length =${ this.length})`
//   }
// }

// const rectangle = new Rectangle(20, 30);
// console.log(rectangle.toString());
// console.log(rectangle.getArea());
// console.log(rectangle.getPerimeter())







// class Employee{
//   constructor(id, firstName, lastName, position, salary, workingHours){
//     this._id = id;
//     this._firstName = firstName;
//     this._lastName = lastName;
//     this._position = position;
//     this._salary = salary;
//     this._workingHours = workingHours;
//   }

//   get id(){
//     return this._id;
//   }

//   set id(value){
//     this._id = value;
//   }

//   get firstName(){
//     return this._firstName;
//   }

//   set firstName(value){
//     this._firstName = value ;
//   }

//   get lastName(){
//     return this._lastName;
//   }

//   set lastName(value){
//     this._lastName = value
//   }

//   get position(){
//     return this._position;
//   }

//   set position(value) {
//     this._position = value;
//   }

//   get salary (){
//     return this._salary
//   }

//   set salary(value){
//     this._salary = value;
//   }

//   get workingHours(){
//     return this._workingHours;
//   }

//   set workingHours(value){
//     this._workingHours = value
//   }

//   getFullName(){
//     return `${this._firstName} ${this._lastName}`
//   }

//   getAnnualSalary(){
//     return this._salary * 12;
//   }

//   raiseSalary(percent){
//     this._salary += this._salary * ( percent / 100);
//     return this._salary;
    
//   }

// }

// const employee = new Employee('777', 'Mark', 'Smith', 'doctor', 2000, 24);
// console.log(employee);
// console.log(employee.getAnnualSalary());
// console.log(employee.raiseSalary(5));
// console.log(employee.getFullName());







// class Author{
//     constructor(name, email, gender){
//       this._name = name;
//       this._email = email;
//       this._gender = gender;
//     }
  
//     get name(){
//       return this._name;
//     }
//     set name(value){
//       this._name = value;
//     }
  
//     get email(){
//       return this._email;
//     }
//     set email(value){
//       this._email = value
//     }
  
//     get gender(){
//       return this._gender;
//     }
  
//     set gender(value){
//       this._gender = value;
//     }
  
//     toString(){
//       return `Author ${this._name}, email-address: ${this._email}, gender: ${this._gender}`
//     }
  
//   }
  
//   class Book {
//     constructor(title, author, price, quantity){
//       this._title = title;
//       this._author = author;
//       this._price = price;
//       this._quantity = quantity;
//     }
//     get title(){
//       return this._title;
//     }
  
//     set title(value){
//       this._title = title;
//     }
  
//     get author(){
//       return this._author;
//     }
  
//     set author(value){
//       this._author = value;
//     }
//     get price(){
//       return this._price
//     }
  
//     set price(value){
//       this._price = value ;
//     }

  
//     get quantity(){
//       return this._quantity; 
//     }
  
//     set quantity(value){
//       this._quantity = value
//     }
  
//     getProfit(){
//       return this._price * this._quantity
//     }
  
//     toString(){
//       return `Title: ${this._title}, Author: ${this._author},  Price: ${this._price}, Quantity: ${this._quantity}`
//     }
  
//   }
  
//   const author = new Author('Tolstoy', '@gmail.com', 'male');
//   const book = new Book('War and Peace', author, 200, 50);
//   console.log(book._author._name);
//   console.log(book.getProfit());
//   console.log(book.toString());
  
  
  
  

  
//   class Book{
//     constructor(title, author, publication_year){
//       this._title = title;
//       this._author = author;
//       this._publication_year = publication_year;
//     }
  
//     display_details(){
//       return `Title: ${this._title}, Author: ${this._author}, Publication Year: ${this._publication_year}`
//     }
  
//   }
  
//   class Ebook extends Book{
//     constructor(title, author, publication_year, price){
//       super(title, author, publication_year);
//       this._price = price
//     }
  
//     display_details(){
      
//       return `${super.display_details()}, Price: ${this._price}`;
//     }
    
//   }
  
//   const book = new Book('The Boy in the Striped Pyjamas', 'John Boyne', 2006);
//   console.log(book.display_details()); 
  
//   const ebook = new Ebook('The Count of Monte Cristo', 'Alexandre Dumas', 1844, 20);
//   console.log(ebook.display_details());





  
  
  
//   class Person{
//     constructor(firstName, lastName, gender, age){
//       this._firstName = firstName;
//       this._lastName = lastName;
//       this._gender = gender;
//       this._age = age;
//     }
//     get firstName(){
//       return this._firstName
//     }
  
//     set firstName(value){
//       this._firstName = value;
//     }
  
//     get lastName(){
//       return this._lastName;
//     }
  
//     set lastName(value){
//       this._lastName = value;
//     }
  
//     get fullName(){
//       return `${this._firstName} ${this._lastName}`
//     }
  
//     get gender(){
//       return this._gender;
//     }
//     set gender(value){
//       this._gender = value;
//     }
//     get age(){
//       return this._age
//     }
//     set age(value){
//       this._age = value;
//     }
  
//     toString(){
//       return `fullName: ${this._firstName} ${this._lastName}, Gender: ${this._gender}, Age: ${this._age}`;
//     }
//   }
  
//   class Students extends Person{
//     constructor(firstName, lastName, gender, age, program = [], year, fee){
//       super(firstName, lastName, gender, age);
//       this._program = program;
//       this._year = year;
//       this._fee = fee;
//     }
//    get year(){
//     return this._year;
//    }
  
//    set year(value){
//     this._year = value;
//    }
  
//    get fee(){
//     return this._fee
//    }
    
//    set fee(value){
//     this._fee = value;
//    }
  
//    passExam(program, grade){
//       if(this._program.includes(program) && grade >= 50){
//         this.year+= 1;
//       }
//    }
//    toString(){
//     return `Student: ${super.toString()},Program: ${this._program.join(', ')}, Year: ${this._year}, Fee: ${this._fee}`
//    }
//   }
  
//   class Teacher extends Person{
//     constructor(firstName, lastName, gender, age, program, pay){
//       super(firstName, lastName, gender, age);
//       this._program = program;
//       this._pay = pay; 
//     }
  
//     get program(){
//       return this._program;
//     }
//     set program(value){
//       this._program = value;
//     }
  
//     get pay(){
//       return this._pay;
//     }
//     set pay(value){
//       this._pay = value
//     }
//     toString(){
//       return `Teacher: ${super.toString()}, Program: ${this._program}, Pay: ${this._pay}`;
//     }
//   }
  
  
//   const student = new Students('Henry', 'Smith', 'Female', 27, ['Math', 'Informatika'], 3, 2000);
//   student.passExam('Math', 55); 
//   console.log(student.toString());
//   const teacher = new Teacher('John', 'Doe', 'Male', 35, 'Math', 3000);
//   console.log(teacher.toString());