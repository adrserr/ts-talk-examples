// TYPE ALIASES
type Foot = number

type Rectangle = {
  kind: "rectangle"
  width: number
  height: number
}

type Circle = {
  kind: "circle"
  radius: number
}

// UNION
type Shape = Rectangle | Circle

// INTERSECTION

type Car = {
  engine: string
  wheels: number
}

type Helicopter = {
  engine: string
  propellers: number
}

type FutureCar = Helicopter & Car

const myNewCar: FutureCar = {
  engine: "TDI",
  wheels: 4,
  propellers: 3,
}
// TYPE GUARDS

// IN OPERATOR
function getShapeArea(shape: Shape) {
  if ("radius" in shape) {
    // We are narrowing the possible type og shape, hover on shape
    return shape.radius ** 2 * Math.PI
  } else {
    return shape.width * shape.height
  }
}

// TYPEOF
const Pi = 3.14

if (typeof Pi === "number") {
}

// INSTANCEOF

const arr = new Array()

if (arr instanceof Array) {
}

// USER DEFINED TYPE GUARDS
function isCircle(shape: Shape): shape is Circle {
  // return (shape as Circle).radius !== undefined
  // return shape.kind === "circle"
  return "radius" in shape
}
// INTERFACE

interface TreeNode {
  id: string
  nodes: TreeNode[]
}

// CLASS
class Person {
  public name: string
  public age: number

  public presentYourSelf() {
    return `My name is${this.name} and I am ${this.age} years old`
  }
}

const Mike = new Person()

// TYPE SYSTEMS
class Customer {
  public name: string
}

const customer: Customer = new Person() // no errors, compatible type, Customer can be considered a Person subtype.
const person: Person = new Customer() // Customer can't be a Person, as some attributes are missing.

// GENERICS
function printMe<T>(content: T): T {
  console.log(content)
  return content
}

printMe(0)
printMe("Hello")
printMe({ a: "Hello", b: "World" })

function printMe2(content: any): any {
  1
  console.log(content)
  return content
}

printMe2(0)
printMe2("Hello")
printMe2({ a: "Hello", b: "World" })

// METHOD OVERLOADING
// Is just sugar coating for Javascript that allows an undefined number of params to be passed
interface Product {
  // whatever
}

function getProducts(): Product[]
function getProducts(id: number): Product
function getProducts(id: null, date: Date): Product[]
function getProducts(id?: number, date?: Date) {
  if (!id && date) {
    return [] as Product[]
  }
  if (id) {
    return {} as Product
  }
  return [] as Product[]
}

getProducts()
getProducts(12)
getProducts(null, new Date())
