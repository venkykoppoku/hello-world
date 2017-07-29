import { TestBed, async } from '@angular/core/testing';
import { range , factorial, ncr,pascalaLine} from './index';

describe('index' , () => {

it('range of 1 to 1 should be []' ,async(() => {
        expect(range(1,1)).toEqual([ ]);
    }));

    it('range of 0 to 5 should be [0,1,2,3,4]' ,async(() => {
        expect(range(0,5)).toEqual([0,1,2,3,4]);
    }));


it('factorial of 0 should be 1',async(()=> {
        expect(factorial(0)).toBe(1);
    }));

    it('factorial of 1 should be 1',async(()=> {
        expect(factorial(1)).toBe(1);
    }));

    it('factorial of 5 should be 120',async(()=> {
        expect(factorial(5)).toBe(120);
    }));

  it('ncr 5 and 0 should be 1',async(()=> {
  expect(ncr(5,0)).toBe(1);
  })) ; 
   
     it('ncr 5 and 5 should be 1',async(()=> {
  expect(ncr(5,5)).toBe(1);
  })) ; 

    it('ncr 10 and 0 should be 45',async(()=> {
  expect(ncr(10,2)).toBe(45);
  })) ; 


 it('pascalLine 1 should be [1]',async(()=> {
  expect(pascalaLine(1)).toEqual([1]);
  })) ; 

  it('pascalLine 2 should be [1,1]',async(()=> {
  expect(pascalaLine(2)).toEqual([1,1]);
  })) ; 

  it('pascalLine 3 should be [1,2,1]',async(()=> {
  expect(pascalaLine(3)).toEqual([1,2,1]);
  })) ; 

});