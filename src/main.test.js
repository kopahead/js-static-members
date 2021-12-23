const { Dog, Cat } = require('./main');


test('Tests that the dog is a German Shepherd (Static)', () => {
  let breed = Dog.breed;
  expect(breed).toEqual("German Shepherd"); // ✅ Pass
});

test('Tests that the dog has a speed of 48 km/h (Static)', () => {
  let breed = Dog.speed();
  expect(breed).toEqual("48 km/h"); // ✅ Pass
});


test('Tests that the dog is a German Shepherd (Instantiated)', () => {
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

test('Tests that the cat information can be accessed (Instantiated)', () => {
  const cat = new Cat('bengal');

  expect(cat.info()).toEqual('The Bengal, travels a speed of 56.3 km/h'); // ✅ Pass
});

test('Tests that the cat information can be accessed (Static)', () => {
  expect(() => {
    const cat = Cat('bengal');
    cat.staticClassThatThrowsError();
  }).toThrow();  // ✅ Pass // Class constructor Cat cannot be invoked without 'new'
});

test('Tests that the cat information can be accessed (Static)', () => {
  const cat = Cat;
  expect(cat.staticClassThatUsesAClassInstance('bengal')).toEqual('The Bengal, travels a speed of 56.3 km/h');  // ✅ Pass
});