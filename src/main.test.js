const { Dog, Cat1, Cat2, Cat3, Cat4 } = require('./main');


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
  const cat = new Cat1('bengal');
  expect(cat.info()).toEqual('The Bengal, travels a speed of 56.3 km/h'); // ✅ Pass
});

test('Tests that the cat information can be accessed (Static)', () => {
  expect(() => {
    const cat = new Cat2('bengal');
    cat.info();
  }).toThrow();  // ✅ Pass // Class constructor Cat cannot be invoked without 'new'
});

test('Tests that the cat information can be accessed (Static)', () => {
  expect(Cat3.info('bengal', '56.3 km/h')).toEqual('The bengal, travels a speed of 56.3 km/h');  // ✅ Pass
});

test('Tests that the cat information can be accessed (Static)', () => {
  expect(Cat4.info('bengal')).toEqual('The Bengal, travels a speed of 56.3 km/h');  // ✅ Pass
});