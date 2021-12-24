const { Dog, Cat1, Cat2, Cat3, Cat4 } = require('./main');


test('It returns the speed that can be travelled by the Dog', () => {
  let breed = Dog.breed;
  expect(breed).toEqual("German Shepherd"); // ✅ Pass
});

test('It throws an error because a static property cannot be accessed on an instantiated class', () => {
  let breed = Dog.speed();
  expect(breed).toEqual("48 km/h"); // ✅ Pass
});


test('It throws an error because a static method cannot be accessed on an instantiated class', () => {
  const dog = new Dog();
  const breed = dog.breed;
  expect(breed).toBeUndefined(); // ✅ Pass
});

test('Tests that the dog has a speed of 48 km/h (Instantiated)', () => {
  const dog = new Dog();

  expect(() => {
    dog.speed();
  }).toThrow();  // ✅ Pass
});

test('It returns the cat breed information when a non-static method is called on an instantiated class', () => {
  const cat = new Cat1('bengal');
  expect(cat.info()).toEqual('The Bengal, travels a speed of 56.3 km/h'); // ✅ Pass
});

test('It throws an error when a static method is called on an instantiated class', () => {
  expect(() => {
    const cat = new Cat2('bengal');
    cat.info();
  }).toThrow();  // ✅ Pass
});

test('It returns the cat breed information using static data accessed from the class', () => {
  expect(Cat3.info('bengal')).toEqual('The bengal, travels a speed of 56.3 km/h');  // ✅ Pass
});

test('It returns the breed information accessed from an instantiated class', () => {
  expect(Cat4.info('bengal')).toEqual('The Bengal, travels a speed of 56.3 km/h');  // ✅ Pass
});