// ENUMS

// NUMERIC ENUMS
enum Direction {
  Up, // Starts on 0 and auto-increments by one
  Down, // 1
  Right, // 2
  Left, // 3
}

enum Direction2 {
  Up = 1,
  Down, // 2
  Right, // 3
  Left, // 4
}

// Numeric enums can be reversed (REVERSE MAPPING)
const a = Direction.Down
const nameOfDown = Direction[a] // Down

// STRING ENUMS
enum Direction3 {
  Up = "UP",
  Down = "DOWN",
  Right = "RIGHT", // All of them musth be initialized
  Left = "LEFT",
}

// HETEROGENEOUS

enum Heterogeneous {
  Up = "UP",
  Down = 0,
  Right = "RIGHT", // All of them musth be initialized
  Left = 15,
}
