// ADVANCED TYPES

//MAPPED TYPES
interface Person {
  name: string
  age: number
  address: string
  /** and many other attributes */
}

// WE WANT A READONLY PERSON
interface ReadonlyPerson {
  readonly name: string
  readonly age: number
  readonly address: string
  /** and many other attributes */
}

// BEST IDEA TO USE A MAPPED TYPE
// function doSomeStuff(person: Readonly<Person>) { // BUILT-IN MAPPED TYPE https://www.typescriptlang.org/docs/handbook/utility-types.html
// function doSomeStuff(person: ReadonlyPerson) {
function doSomeStuff(person: Person) {
  person.age = 25
}
// DECLARED IN typescript/lib/lib.es5.d.ts
type Readonly<T> = {
  readonly [P in keyof T]: T[P]
}

// KEYOF AND LOOKUP TYPE
// LOOKUP TYPES
// Allows use to access the types for provided keys
type PersonAddress = Person["address"]

//KEYOF
// Returns the permitted key properties for a type
type KeysOfPerson = keyof ReadonlyPerson
function testKeyOf(key: KeysOfPerson) {}
testKeyOf("age")

// WE CAN DECLARE OUR OWN MAPPED TYPES
type Modifiable<Type> = {
  -readonly // The minus removes readonly qualifier
  [Key in keyof Type]: Type[Key] // Lookup type
  // with in we iterate over Type keys
}

// CONDITIONAL TYPES
// Always follows this pattern
// T extends U ? X : Y
interface Asset {
  // some attributes
}
function getAssets<T extends number | any>(
  id?: T
): T extends number ? Asset : Asset[] {
  if (id) return {} as any //function can't narrow id type, so it can't narrow the return type
  return [] as any // as type assertion, tells Typescript that you know better the type. So typescript will not infer it
}

getAssets(0) // Asset
getAssets() // Asset[]

// Promisify Type
interface SyncService {
  baseUrl: string
  getStuff(baseUrl: string, id: number): string[]
}

// Instead of rewriting a new type, we are going to create an utility that converts our existing type
// prettier-ignore
type Promisify<Type> = {
  [Key in keyof Type]: Type[Key] extends (...args: any) => any ? (...args: any) => Promise<any> : Type[Key]
}
// type Promisify<Type> = {
//   [Key in keyof Type]: (Type[Key] extends (...args: infer Arguments) => infer Return ?  (...args: Arguments) => Promise<Return> : Type[Key])
// }

type AsyncService = Promisify<SyncService>
