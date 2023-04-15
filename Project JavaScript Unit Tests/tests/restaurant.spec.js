const createMenu = require('../src/restaurant');

describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    expect(typeof createMenu()).toBe('object');
    expect(createMenu()).toHaveProperty('fetchMenu');
    expect(typeof createMenu().fetchMenu).toBe('function');
  });
  it('Verifica se a função `createMenu({ food: {}, drinks: {} }).fetchMenu()` tem o comportamento esperado', () => {
    expect(Object.getOwnPropertyNames(createMenu({ food: {}, drinks: {} }).fetchMenu())).toEqual(['food', 'drinks']);
    expect(createMenu({ food: {}, drinks: {} }).fetchMenu()).toEqual({ food: {}, drinks: {} });
  });
  it('Verifica se a propriedade consumption do objeto retornado pela função createMenu({ food: {}, drinks: {} }), após a criação do menu, retorna um array vazio', () => {
    expect(createMenu({ food: {}, drinks: {} }).consumption).toEqual([]);
  });

  const returnedObjCreateMenu = createMenu(
    {
      food: { coxinha: 3.90, sanduiche: 9.90 },
      drinks: { agua: 3.90, cerveja: 6.90 }
    });

  it('Verifica se a função `returnedObjCreateMenu.order()` tem o comportamento esperado', () => {
    expect(returnedObjCreateMenu.order('picanha')).toBe('Item indisponível');
    expect(returnedObjCreateMenu.order('coxinha')).toEqual(['coxinha']);
    expect(returnedObjCreateMenu.order('sanduiche')).toEqual(['coxinha', 'sanduiche']);
    expect(returnedObjCreateMenu.order('agua')).toEqual(['coxinha', 'sanduiche', 'agua']);
    expect(returnedObjCreateMenu.order('agua')).toEqual(['coxinha', 'sanduiche', 'agua', 'agua']);
  });

  it('Verifica se a função `returnedObjCreateMenu.pay()` retorna a soma dos preços de tudo que foi pedido acrescido de 10%', () => {
    expect(returnedObjCreateMenu.pay()).toBeCloseTo(23.76);
  });
});
