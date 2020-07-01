//1. Create a Class called WhyClass.  This class should have one property, and two methods.  THe property is called "purpose", and stores a string.  This string should clearly explain why classes are used in Object Oriented Programming.  The first method is called explain().  This method should print the contents stored in the purpose 'field' of the class.  The second method is called pieces().  This 2nd method should print out the various parts that are essential to building a class.  Instantiate the class, and invoke the method so the results are showing in the console once this file is run.

class WhyClass {
    purpose; //why classes are used in Object Oriented Programming;

    explain(){
        console.log("Maintainablity : Encapsulation allows OOP coding style to be compartmentalized; assisting in finding specific faults quickly when they occur.")
        console.log("Reusable : All objects with their methods can easily be reused")
        console.log("Scalable : There is no limit on how many times an object can be instantiated. Being Self-contained objects are easy to replaced with optimized code and faster algorithms")
        console.log("")
        console.log("Polymorphism : allows for objects to build off of each other and become more specific in their scpoe. (i.e. a 'class Bird{}' => class Chicken extends Bird => class CornishHen extends Chicken) all the attributes from the previous classes get passed down from Bird to Chicken to CornishHen")
        console.log("This allows for code to be repurposed for other uses.")
      
    }

    pieces(){
        //various parts that are essential to building a class (print to console)
      console.log("First you must declare a class and assign it a name using Pascal Case")
      console.log("")
      console.log("class NewClass {}")
      console.log("")
      console.log("Inside the braces you may declare attributes for the object using any data type or undeclared as on example 'secondAttribute'.")
      console.log("")
      console.log("class NewClass")
      console.log("{")
      console.log("firstAttribute = 0;")
      console.log("secondAttribute;")
      console.log("}")
      console.log("")
      console.log("You may make any methods specific to the object as well. Note: these methods will only be available to this object and any children objects.")
      console.log("")
      console.log("class NewClass")
      console.log("{")
      console.log('firstAttribute = "first!";')
      console.log("secondAttribute;")
      console.log("")
      console.log("newMethod()")
      console.log("{")
      console.log('console.log("Hello World!")')
      console.log("}}")
      console.log("")
      console.log("")
      console.log("To make an instance of this class you must declare a new variable and assign it 'new' and the name of the class you would like to instantiate. In our case it is 'newClass()', be sure to include the '()' to call the class to create the new object.")
      console.log("")
      console.log("const newObject = new NewClass()")
      console.log("")
      console.log("All together it looks like this.")
      console.log("")
      console.log("class NewClass")
      console.log("{")
      console.log('firstAttribute = "first!";')
      console.log("secondAttribute;")
      console.log("")
      console.log("newMethod()")
      console.log("{")
      console.log('console.log("Hello World!")')
      console.log("}}")
      console.log("")
      console.log("const newObject = new NewClass()")
      console.log("")
      console.log("")
      console.log("Now you have a new object and can use it's attributes or call it's methods!")
      console.log("")
      console.log("console.log(newObject.firstAttribute)")
      console.log("first!")
      console.log("")
      console.log("console.log(newObject.newMethod())")
      console.log("Hello World!")


    }
}
    const newObject = new WhyClass()
    console.log(newObject.pieces())
    




/*2. You are exploring the rainforests of the Amazon.  You have observed many different types of wildlife on your excursion.  To jog your memory, some different types of wildlife that you observed are found in the following URL : https://www.ietravel.com/blog/amazon-rainforest-animals-beginners-guide-21-species.  Feel free to use other resources online if you wish.

Create a class that can categorize at least 6 of the creatures that you recall observing the Amazon.  Each creature should have 3 unique characteristics, and 2 unique actions that it can do. */


class Wildlife {
    
    name;
    species;
    homeElement;
  
    constructor(name, species, homeElement){
      this.name = name;
      this.species = species;
      this.homeElement = homeElement;
    }
  
    eat(){
      console.log("The " + this.name + " scarfs down some food.")
    }
  
    businessAsUsual(){
      console.log("The " + this.name + " does some unique " + this.species + "-only stuff.")
    }
  }

  class Chicken extends Wildlife {
    cluck(){
        console.log("BAWWK BUCK BUCK BUHH...CAWKK!")
    }
    //Could do this eleven more times to give unique actions for each animal, but I think we have proof of concept.
  }


  
  const chicken = new Chicken("Chicken","bird","land")
  const macaw = new Wildlife("Hyacinth Macaw","bird","air")
  const snakeMonster = new Wildlife("Anaconada","monster","land")
  const bulletAnt = new Wildlife("bullet ant","bug","land")
  const bigfoot = new Wildlife("bigfoot","monster","land")
  const piranha = new Wildlife("piranha","fish","water")
  console.log(chicken.homeElement)
  chicken.eat()
  chicken.businessAsUsual()
  chicken.cluck()






/*3. Convert the following Object Literals into a general class called Shape, and instantiate the class to generate the object literals
*/


class Shape 
{
  name;
  sides;

  constructor(name,sides) 
  {
    this.name = name;
    this.sides = sides;
  }
}

class Triangle extends Shape 
{
  base;
  height;

  constructor (name, sides, base)
  {
    super(name, sides);
    this.base = base;
    //Pythagorean Theorem [Bonus section](Amir: "If you use the formula to caluclate the height, this is a bonus.  If you hard code the correct value here, that will be sufficient, but no bonus :( ")
    this.height = Math.sqrt((this.sides[1]**2) - ((this.base / 2)**2));
  }

  calcArea() 
  {
    console.log(`${this.name}'s area is calculated to be : ${.5 * this.base * this.height}`);
  }

  calcPerimeter() 
  {
    console.log(`${this.name}'s perimeter is calculated to be : ${(this.base) + (this.sides[1] + this.sides[2]) }`)
  }
}

class Rectangle extends Shape 
{
  length;
  width;

  constructor (name, sides, length, width)
  {
    super(name, sides);
    this.length = length;
    this.width = width;
  }

  calcArea() 
  {
    console.log(`${this.name}'s area is calculated to be : ${this.length * this.width}`);
  }

  calcPerimeter() 
  {
    console.log(`${this.name}'s perimeter is calculated to be : ${(this.length * 2) + (this.width * 2)}`)
  }
}

class Circle extends Shape 
{
  radius;

  constructor (name, sides, radius)
  {
    super(name, sides);
    this.radius = radius;
  }

  calcCircumference() 
  {
    console.log(`${this.name}'s circumference is calculated to be : ${(2 * Math.PI * this.radius).toFixed(2)}`)
  }

  calcArea() 
  {
    console.log(`${this.name}'s area is calculated to be : ${(Math.PI * this.radius**2).toFixed(2)}`);
  }
}

const triangle = new Triangle("triangle uno", [4,7,7], 4)
const rectangle = new Rectangle("rectangle", 4, 2, 5)
const circle = new Circle("Circle", 1, 5)

console.log("")

console.log(triangle);
triangle.calcArea();
triangle.calcPerimeter();

console.log("")

console.log(rectangle);
rectangle.calcArea();
rectangle.calcPerimeter();

console.log("")

console.log(circle);
circle.calcCircumference();
circle.calcArea();


/*********************************************** 
Bonus Exercises:

-=[ATTEMPTED]=- 
//4. Create three more instances of the Shape class for a pentagon, hexagon, and an octagon.  Add in  comments explaining the formulas for calculating the perimeter and the areas of these 3 shapes.  Also, as noted above, if you use the formula to calculate the height of the triangle instead of hard coding it, you will also obtain the bonus for this exercise.  The dimensions for the triangle are already provided for you in the triangle object literal.

TRIANGLE EXERCISE COMPLETED SEE LINE: 156


-=[ATTEMPTED]=- 
//5. Below is a class Earth.  It is instantiated with a earth 'instance'.  Because there is only 1 known earth, we don't want multiple instances of earth.  Modify the class so the properties are usuable WITHOUT instantiating the class.

*/


class Planet {
    static name = "Planet";
    static planetNum; //distance from the sun.  1-mercury, 2-venus, 3-earth, ...

    constructor(name,num) {
        this.name = name;
        this.planetNum = num;
    }

}

const earth = new Planet('earth', 3);
console.log(earth);

const mars = [Planet.name, Planet.planetNum]
//mars[0] = 'Mars';
//It does use a property of class Planet, not really sure what this would be used for.
mars[1] = 4;

console.log(mars)

