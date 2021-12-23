const { Dog } = require('./main');

test('Tests that the dog is a German Shepherd (Static)', () => {
  let breed = Dog.breed;
  expect(breed).toEqual("German Shepherd");
});

test('Tests that the dog is a German Shepherd (Instantiated)', () => {
  const dog = new Dog();
  const breed = dog.breed;
  expect(breed).toEqual("German Shepherd");
});