class Vec {
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  plus (vector) {
    return new Vec(this.x + vector.x, this.y + vector.y);
  }

  minus (vector) {
    return new Vec(this.x - vector.x, this.y - vector.y);
  }

  get length() {
    return Math.hypot(this.x, this.y);
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5

class Group {
  constructor() {
    this.group = {};
  }

  add(value) {
    if (!this.group[value]) this.group[value] = value;
  }

  delete(value) {
    if (this.group[value]) delete this.group[value];
  }

  has(value) {
    return !!this.group[value];
  }

  static from(iteratee) {
    const newGroup = new Group();
    for (const i of iteratee) {
      newGroup.add(i);
    }
    return newGroup;
  }

  [Symbol.iterator]() {
    let i = 0;
    const { group } = this;
    const keys = Object.keys(group);
    return {
      next() {
        if (i < keys.length) {
          return { value: group[keys[i++]], done: false };
        }

        return { done: true };
      },
    };
  }
}

const group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

for (const value of Group.from(['a', 'b', 'c'])) {
  console.log(value);
}
// → a
// → b
// → c

let map = {one: true, two: true, hasOwnProperty: true};

// Fix this call
console.log(Object.hasOwnProperty.call(map, 'one'));
// → true
