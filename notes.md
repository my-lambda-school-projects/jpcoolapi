Middleware

- built-in
- third party
- custom

Install morgan 'yarn add morgan'.

m1
m2
m3
m4

what is code used for? a communication medium.

- context (comments explain your decisions)
  - why not using async/await
- clarity
- minimize cognitive load
  - do one thing
  - shorter functions
  - reducing complexity
- no surprises === reveal intent

  - well named artifacts

  const x = 2.99
  const taxPercent = 2.99

pure function

- no side effects
- same arguments > same output
- does not rely on outer scope for state

```js
const e = 5;
const total = 0;
function addFive(number) {
  total = number + e; // impure
}

function addFive(number) {
  const today = new Date(); // impure
  return number + 5; // pure
}

const today = new Date();
function addFive(number, today) {
  const date = today; // pure
  return number + 5; // pure
}
```

function vs procedure

- functions return a value (make them pure)
- procedures do not return a value (will change state, hence not pure)

structure an application

- by type (reducers, actions, containers, components)
- by feature
- hybrid
  - type then feature
  - feature then type << preferred >>

components

- users
  - UserList
  - UserCard
