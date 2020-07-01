/* 
1. Create the following classes:
    - Book class. It should have an author and publisher property.
    - Author class. It should have a name and books property.
    - Publisher class.  It should have an authors and books property.
    - Review class.  It should have a rating and user property.
    -Prevent the properties from being accessed by outside code, using the encapsulation concept of "private variables".  Create methods that return the values of these private variables in case other pieces of the code need to access the data of the 4 classes.  Also create methods that allow outside code to "set" new values for the properties on the classes, without directly manipulating the values themselves. 

    //your code here...*/
    class Book 
    {
      #author = 0;
      #publisher = "chicken";
      
  
      getAuthor()
      {
        return this.#author 
      }
  
      setAuthor(x)
      {
        this.#author = x;
      }
  
      getPublisher()
      {
        return this.#publisher 
      }
  
      setPublisher(x)
      {
        this.#publisher = x;
      }
    }
  
    
  const pig = new Book()
  console.log(pig.getPublisher())
  pig.setPublisher('turkey')
  console.log(pig.getPublisher())
  
  
  class Author 
    {
      #name;
      #books;
  
    getname()
    {
      return this.#name 
    }
  
    setname(x)
    {
      this.#name = x;
    }
  
    getbooks()
    {
      return this.#books 
    }
  
    setbooks(x)
    {
      this.#books = x;
    }
  }
  
  class Publisher
    {
      #authors;
      #books;
  
    get authors()
    {
      return this.#authors 
    }
  
    setAuthors(x)
    {
      this.#authors = x;
    }
  
    getBooks()
    {
      return this.#books 
    }
  
    setBooks(x)
    {
      this.#books = x;
    }
    }
  
  class Review
    {
      #rating;
      #user;
  
  getRating()
  {
    return this.#rating 
  }
  
  setRating(x)
  {
    this.#rating = x;
  }
  
  getUser()
  {
    return this.#user 
  }
  
  setUser(x)
  {
    this.#user = x;
  }
    }





/*
2. Create the following classes:
    - Umbrella class.  It should have a an organization name.  It should only have a single instance.  Umbrella is the "Parent Organization" e.g. Allegis Group
    - Company class. It should have a compnay name and # of employees.  Create at least 3 different companies that are children of the Umbrella Organization.  (e.g. TEKsystems, Aerotek, etc.)
    - Site class. It should have the name of the company, and the location of the site.  It is a child class that inherits from the Company class.  Create 3 sites for each company.
    - Employee class. It should have a employee name, job title, and salary properties. Create 10 employee instances: 1 CEO, 1 Manager, 1 Secretary, 2 Engineers, 1 Financial Officer, 1 Janitor, 1 Marketer, 1 HR Personnel, 1 Lawyer.  Feel free to add other employee roles at your own discretion.
    
    - For each class, add 2 properties and 2 methods to each.  The properties and methods should make sense, considering what the classes are supposed to be representing.
*/


class Umbrella 
{
  name;
  companies = [];
  
  constructor (name)
  {
    this.name = name;
  }

  getWorth()
  {
    var sum = 0;
    for (var i = 0; i < this.companies.length; i++) {
      sum += this.companies[i].worth
    }
    return sum;
  }
}

class Company
{
  umbrella;
  name;
  employees = [];
  sites = [];
  worth;

  constructor (umbrella, name, worth)
  {
    this.umbrella = umbrella;
    this.name = name;
    //this.employees = employees;
    this.worth = worth;
    umbrella.companies.push(this)
  }

  addEmployee(x)
  {
    employees.push(x)
  }

  removeEmployee(x)
  {
    const index = employees.indexOf(x);
    if (index > -1) 
    {
      employees.splice(index, 1);
    }
  }

}

class Site
{
  #company;
  location;
  

  constructor(company, location)
  {
    this.company = company;
    this.location = location;
    company.sites.push(this)

  }
  
  getCompany()
  {
    return this.#company
  }

  setCompany(x)
  {
    this.#company = x;
  }
}

class Employee
{
  company;
  name;
  title;
  salary;
  praise = 0;
  
   constructor(company, name, title, salary)
  {
    this.company = company;
    this.name = name;
    this.title = title;
    this.salary = salary;
    company.employees.push(this)
  }

  givePraise()
  {
    this.praise++;
  }

  fire()
  {
    company.removeEmployee(this)
  }

}


const uCorp = new Umbrella("Ucorp")

const com1 = new Company(uCorp, "SunSparkle Farms Holdings", 3.50)
const com2 = new Company(uCorp, "The Greasy Chicken", 1337.50)
const com3 = new Company(uCorp, "Mean Plant Protec llc", 3762.50)

const ste1 = new Site(com1, "404 North Farm rd, nowhere, AE 04040")
const ste1 = new Site(com1, "3477 South Farm rd, also nowhere, AE 39873-8574")
const ste2 = new Site(com1, "777 Up Farm rd, Upstate, AE 48567")
const ste1 = new Site(com2, "444 Main st., Joobricki, CA 84756")
const ste2 = new Site(com2, "856 Dummner Blvd., Alceton, OR 57940")
const ste3 = new Site(com3, "579 Hancock Ave., GooTown, 48562")
const ste3 = new Site(com3, "573 HamburgerHelper St., Beer, AK 99948")
const ste3 = new Site(com3, "99047 preston rd Ste-109, Hoops, TX 95873")

const emp1 = new Employee(com1, "Steve Mackerbee", "Regional farmer", 20)
const emp2 = new Employee(com1, "Angelino Babino", "Assistant to the Regional farmer", 2)
const emp3 = new Employee(com1, "Charpie Gooper", "Farmer Overlord", 80)
const emp4 = new Employee(com1, "SunSparkle Farm", "The actual farm", 700)
const emp5 = new Employee(com2, "Smiffy McGee", "Chicken plucker", 20)
const emp6 = new Employee(com2, "Bjorn", "Chicken Fryer", 30)
const emp7 = new Employee(com2, "Maybel Walton", "Chicken seller", 50)
const emp8 = new Employee(com3, "Bitey Plant", "Security Guard", 5)
const emp9 = new Employee(com3, "Jose Gonzalez", "Gardener", 1)
const emp10 = new Employee(com3, "Chad Takeyomoney", "CEO", 50)

// console.log(uCorp.companies)
// console.log(uCorp.getWorth())
// emp8.givePraise()
// emp8.givePraise()
//console.log(com1.employees)
//console.log(ste2)

/*
******************************************************************************************************************************************************************************************   
Bonus Exercise:

3. Building on Exercise 1, Do the following : 
- Create a Bookstore class.  It should contain a collection of various Book Instances.
- Each Book Instance should contain the Instances of the relavant Authors, Publishers, and Reviews.
- Each Publisher should contain Instances of the Authors that are affiliated with the relavant Publisher.  

Each Book instance should contain instances of the Authors, the Publishers, and the Reviews pertinent to each book.  This exercise is using the advanced encapsulation concept of "composition", reflecting a "HAS A" relationship.
*/



    //your code here...