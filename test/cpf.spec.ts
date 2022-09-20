import { Cpf } from "../src/cpf"

describe('CpfValiator', () => {
  it('should return true for valid cpf with digit bigger than zero', () => {
    const cpf = new Cpf("111.444.777-35")
    
    expect(cpf).toBeDefined()
  })

  it('should return true for valid cpf with first digit equal to zero', () => {
    const cpf = new Cpf("198.454.187-08")
    
    expect(cpf).toBeDefined()
  })

  it('should return true for valid cpf with last digit equal to zero', () => {
    const cpf = new Cpf("147.085.437-60")
    
    expect(cpf).toBeDefined()
  })

  it('should return false for cpf with more than 14 charts', () => {
    expect(() => new Cpf("147.085.437-600")).toThrow(new Error("invalid cpf"))
  })

  const cpfsWithSameDigit = [
    '111.111.111-11',
    '222.222.2222-22',
    '333.333.333-33',
  ]
  it.each(cpfsWithSameDigit)('should return false for cpf with same digits', (cpf: string) => {
    expect(() => new Cpf(cpf)).toThrow(new Error("invalid cpf"))
  })
})