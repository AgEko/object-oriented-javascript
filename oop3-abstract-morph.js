
/*
1. 

Create a Abstract Creature class that is NOT allowed to be instantiated. Find a way to prevent this class from being instantiated with an instance.  In the Creature class, include two abstract methods.  move(), and act().  These methods are NOT allowed to be invoked from the Abstract class, so throw an error in these methods if they are invoked by any inherited sub-classes.  

Create at least 3 sub-classes that inherit from the Abstract Creature Class.  Example sub-classes are: 
    -Human
    -Dinosaur
    -Bird
    -Reptile
    -Fish

These sub-classes MUST implement the abstract methods of move() and act(), which are found on the abstract Creature class. In addition to the 2 abstract methods, implement 1 unique method on each sub-class.  Also, each sub-class MUST have at least 2 unique property fields on them.  Example property fields are:
    -name
    -weight
    -food
    -age

*/
/*
Todos:
[x]Creature class *ABSTRACT
 [x]no properties req.
 [x]Two methods; move() & act()

[x]Extend class Creature *3 
 [x]Each will have two unique properties
 [x]Each will have a unique method

*/

    
class Creature {


    constructor()
    {
      if (this.constructor === Creature)
      {
        throw new TypeError('Class "Creature" can not be makeaded')
      }
    }
  
    move()
    {
      
      throw new Error(`Not Implemented by child class!!!`)
      console.log("move")
    }
  
    act()
    {
      throw new Error(`Not Implemented by child class!!!`)
      console.log("act")
    }
  }
  
  
  class Human extends Creature 
  {
    name;
    title;
    
    constructor(name, title)
    {
      super();
      this.name = name;
      this.title = title;
    }
  
    move()
    {
      console.log("You are now free to smoke about the cabin, cabin")
    }
  
    act()
    {
      console.log("Performs in the local theatre. What a show. We shall never forget. The legendary 'Sit here and cry' will be in memorium for the years to come.")
    }
  
    complain()
    {
      console.log("Yadda yadda yadda")
    }
  }
  
  class Dog extends Creature 
  {
    breed;
    isGoodBoy;
  
    constructor(breed)
    {
      super();
      this.breed = breed;
      this.isGoodBoy = true;
    }
  
    move()
    {
      console.log("INITIALIZING MADDOG MODE")
      console.log(".")
      console.log(". .")
      console.log(". . .")
      console.log(`MADDOG INIT SUCCESS. STANDING BY`)
    }
  
    act()
    {
      console.log("SiC'em!!")
      this.bork()
    }
  
    bork()
    {
      console.log("BORK! Thou darest impede upon mine dominion? Stand and deliver thou cur! BORK BORK!")
    }
  
  }
  
  class Sponge extends Creature
  {
    colour;
    job;
  
    constructor(colour, job)
    {
      super();
  
      this.colour = colour;
      this.job = job;
      
    }
  
    flip()
    {
      console.log(`This ${this.job} flips krabby patties to the utmost perfection!`)
    }
  }
  
  
  const hooman = new Human("Andrew B.", "Cornell-Alumni")
  hooman.act()
  
  
  const poodoo = new Dog("poodle")
  console.log(poodoo)
  
  poodoo.act()
  
  
  const bob = new Sponge("Yellow","Fry Cook")
  bob.flip()



/*


2. For the following Person class, modify the class methods, so the sub-class methods will successfully fire.  For the Teacher method, a set of methods have already been set up.  For the Student class, it will be up to you to determine how to set up the methods to fire in the Student sub-class.  :


*/

class Person {
    name;

    eat() 
    {
        console.log(this.name + " is eating");
    }

    sleep() 
    {
        console.log(this.name + " is sleeping");
    }

    code = function() 
    {
        console.log(this.name + " is coding");
    }

    repeat = function() 
    {
        console.log(this.name + " is repeating the above steps, yet another time");
    }

    explain() 
    {
        //this function should contain a console.log() explaining what you had to do to get the correct functions to work, and the reasoning behind what you did.
        console.log("Changed all Teacher class methods to arrow functions to override arrow functions in Person class (fields)");
        console.log("Copied Teacher class methods to Student class. Updated all console.log s to reflect student actions.")
    }

}


class Teacher extends Person {

    //refactor the methods in this Teacher class, so all of these methods override the methods in the Person super class.  

    constructor(name) {
        super(name);
        this.name = name;
    }

    eat = () => 
    {
        console.log(this.name + " loves to teach before eating");
    }

    sleep = () => 
    {
        console.log(this.name + " sleeps after preparing the lesson plan");
    }

    code = () => 
    {
        console.log(this.name + " codes first, then teaches it the next day.");
    }

    repeat = () => 
    {
        console.log(this.name + " teaches, codes, eats, sleeps, and repeats");
    }
}


class Student extends Person 
{
    //set up your methods in this student class, so all of these methods will override the methods from the super class.

    //eat method should print out - <stduent name> studies, then eats

    //sleep method should print out, <student name> studies coding so much, that they dream about it in their sleep

    //code method should print out, <student name> was first overwhelmed by coding, but kept at it, and now has become a coding guru!

    //repeat method should print out, <student name> keeps on studying, coding, eating, and sleeping, and puts it all on repeat.  

  /*
  TODO
  -[x]override methods
  -[x]console.log() actions on lines 67-73
   */

  constructor(name) 
  {
    super(name);
    this.name = name;
  }

  eat = () => 
  {
    console.log(this.name + " studies, then eats.");
  }

  sleep = () => 
  {
    console.log(this.name + " studies coding so much, that they dream about it in their sleep.");
  }

  code = () => 
  {
    console.log(this.name + " was first overwhelmed by coding, but kept at it, and now has become a coding guru!");
  }

  repeat = () => 
  {
    console.log(`${this.name} keeps on studying, coding, eating, and sleeping, and puts it all on repeat.`);
  }

  explain = () => 
  {
    console.log(`${this.name} goes Super Saiyin. Saves Namek, Namekians rejoice.`)
  }
}


const teacher = new Teacher("Dr. Teacher");

teacher.explain();

console.log("")

const student = new Student("Pupil Student");

student.explain();

console.log("")

teacher.eat();
teacher.sleep();
teacher.code();
teacher.repeat();

console.log("")

student.eat();
student.sleep();
student.code();
student.repeat();



//****************************************************************************************************************************************************************************************   
//Bonus Exercise:

//3. Consider the following class:

class Cook {

    prepare(food1,food2,food3) {
      
        console.log("The cook is cooking " + food1, food2,"and", food3);
    }

    // prepare = function(food1) {
    //     console.log('The cook is cooking' + food1);
    // }

    explain = () => {
        console.log("what could you do to get the prepare function to print out the food items that are being passed in to the function?  Once you figure it out, Write down your thought process in this explain method.");
        //prepare() is already set up to print out the desired data. Issue is that the second prepare (field) is overriding prepare() and takes none of the same arguements.
        //could pass arguements to the second prepare. Then prepare() will never be called.
        //Both methods do the same exact job. Redundant. Delete one.
        //I would keep the prepare() over the second prepare (field) just in case I would make an extention off of class Cook and would make any children classes override the method.

        //Would probably want to change the prepare method make proper grammar and make the cook a Swedish chef. Everyone knows Swedish Chefs are better.
    }

}

const cook = new Cook();

cook.prepare("turkey","salami","pizza");

cook.explain();

