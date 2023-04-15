const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Se a função é chamada sem parâmentro, retorna undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Se o parâmetro passado não for uma string, retorna a mensagem "Parâmetro inválido, é necessário uma string"', () => {
    expect(handlerElephants(['names'])).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Se o parâmetro passado for "count", retorna 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Se o parâmetro passado for "names", retorna ["Ilana", "Orval", "Bea", "Jefferson"]', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Se o parâmetro passado for "averageAge", retorna um numero próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('Se o parâmetro passado for "location", retorna "NW"', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Se o parâmetro passado for "popularity", retorna 5', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('Se o parâmetro passado for "availability", retorna ["Friday", "Saturday", "Sunday", "Tuesday"]', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Se o parâmetro passado não contempla nenhuma funcionalidade, retorna null', () => {
    expect(handlerElephants('employee')).toBeNull();
  });
});
