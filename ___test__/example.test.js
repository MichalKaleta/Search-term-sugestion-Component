import { add } from './example';

test('should pass',()=>{
    expect( add(1,9) ).toBe(10);
  })

test('should fail',()=>{
  expect( add(1,5) ).toBe(10);
})

test('should pass2',()=>{
  expect( add(5,5) ).toBe(10);
})