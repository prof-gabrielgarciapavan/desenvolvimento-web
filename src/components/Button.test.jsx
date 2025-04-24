import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

import { describe, expect, jest, test } from '@jest/globals';

describe('Button Component', () => {
  test('deve renderizar o texto do botão corretamente', () => {
    const { getByTestId } = render(<Button text="Clique aqui" />);
    const buttonElement = getByTestId('custom-button');
    expect(buttonElement.textContent).toBe('Clique aqui');
  });

  test('deve chamar a função onClick quando clicado', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(<Button text="Clique aqui" onClick={handleClick} />);
    const buttonElement = getByTestId('custom-button');
    
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});