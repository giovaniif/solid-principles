import { validate } from "../src/cpf-validator"

describe('CpfValiator', () => {
  it('should return true for valid cpf with digit bigger than zero', () => {
    const isValid = validate("111.444.777-35")
    
    expect(isValid).toBeTruthy()
  })

  it('should return true for valid cpf with first digit equal to zero', () => {
    const isValid = validate("198.454.187-08")
    
    expect(isValid).toBeTruthy()
  })

  it('should return true for valid cpf with last digit equal to zero', () => {
    const isValid = validate("147.085.437-60")
    
    expect(isValid).toBeTruthy()
  })

  it('should return false for cpf with more than 14 charts', () => {
    const isValid = validate("147.085.437-600")
    
    expect(isValid).toBeFalsy()
  })

  it('should return false for cpf with same digits', () => {
    const isValid = validate('111.111.111-11')
    
    expect(isValid).toBeFalsy()
  })
})