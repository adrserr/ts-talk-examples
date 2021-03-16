// ANY
// no type inferred, value undefined
// We can assign anything to this variable
// this is like not using Typescript
let anyVar

anyVar = "I am string"
anyVar = false
anyVar = 1.55
anyVar = () => {
  console.log("Hello")
}

// UNKOWN
let unknownVar: unknown

unknownVar = 0
unknownVar = "String"
unknownVar = [0, 1, "string", true]

// Difference between any and unknown
const sum = (x: any, y: number) => {
  return x + y
}

// It looks bad  🌋 💣 🧨
sum(false, 1)

const multiply = (x: unknown, y: number) => {
  return x * y // We need to check the type before
  // if(typeof x === 'number'){
  // }
}

// NEVER

const infinite = () => {
  while (true) {
    console.log("Hey there, I am using Typescript")
  }
}

const otherNeverExample = (value: string | number) => {
  if (typeof value === "string") {
    console.log(value) // type string
  } else if (typeof value === "number") {
    console.log(value) // type number
  } else {
    console.log(value) // type never
  }
}

// SYMBOLS
function symbols() {
  const symbol1 = Symbol("key")
  const symbol2 = Symbol("key")

  if (symbol1 === symbol2) return true
}

// UNION TYPES
let value: string | number = 0
value = "Now I am a String"

// TYPE WIDENING AND NARROWING
// @strict: true
const y = null
const n = 12
const s = "Hello"
let x = 0 // NOT GOOD FIXME: refine it a bit the explanation of widening and add tsconfig to get type checking
x = null
// https://www.typescriptlang.org/play?strictNullChecks=false#code/DYUwLgBAHhC8EDsCuxgFgBQpIE84QAZM95lUg
