const { itsTrue } = require('./main');

test('Tests that its true', () => {
  let notFalse = itsTrue()
  expect(notFalse).toEqual(true);
});