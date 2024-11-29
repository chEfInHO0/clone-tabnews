const calculadora = require('../models/calculadora')

test('Soma', () => {
  expect(calculadora.sum(1, 1)).toBe(2)
})
test('Soma com NaN', () => {
  expect(calculadora.sum(1, NaN)).toBe('Erro')
})
test('Soma com string no parametro 2', () => {
  expect(calculadora.sum(1, '3')).toBe('Erro')
})
test('Soma com string no parametro 1', () => {
  expect(calculadora.sum('1', 1)).toBe('Erro')
})

test('Subtracao', () => {
  expect(calculadora.diff(1, 1)).toBe(0)
})
test('Subtracao com NaN', () => {
  expect(calculadora.diff(1, NaN)).toBe('Erro')
})
test('Subtracao com string no parametro 2', () => {
  expect(calculadora.diff(1, '3')).toBe('Erro')
})
test('Subtracao com string no parametro 1', () => {
  expect(calculadora.diff('1', 1)).toBe('Erro')
})