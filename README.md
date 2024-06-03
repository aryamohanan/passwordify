This Node.js package helps you generate basic, random passwords for non-critical applications.

## Features:

Generates passwords of specified length.
Includes lowercase letters, uppercase letters, and numbers by default. (Optional: Symbols can be enabled, but security is not cryptographically guaranteed.)
Simple and easy to use.

``` sh
npm install passwordify
```

## Usage:

```javascript

const generatePassword = require('passwordify');

const password1 = generatePassword(); // Generates a 16-character password with default options
const password2 = generatePassword(20, { lowerCase: false }); // Generates a 20-character password without lowercase letters
const password3 = generatePassword(12, { symbols: true }); // Generates a 12-character password with symbols (less secure)

console.log(password1); // Output: (example) Bq2!nN3tRa9y7u1E
console.log(password2); // Output: (example) 9#Y8$2%T&WKUqPLxZ
console.log(password3); // Output: (example) 7*a&K$ZV2{9m# (less secure due to symbols)

```