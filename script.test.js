const obj = {
   a: 1,
   b: 2,
   c: 3,
   d: 4,
   e: 5
}

Object.entries(obj).forEach(([key, val]) => console.log(key, val))