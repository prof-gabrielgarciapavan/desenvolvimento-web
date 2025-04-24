# Projeto React + Vite com Testes Unitários

Este projeto é uma aplicação React configurada com Vite e testes unitários usando Jest e Testing Library.

## Comandos de Configuração

1. Criação do projeto com Vite:
```bash
npm create vite@latest . -- --template react
```

2. Instalação das dependências do projeto:
```bash
npm install
```

3. Instalação das dependências de teste:
```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @babel/preset-env @babel/preset-react jest-environment-jsdom
```

## Arquivos de Configuração

### Babel (.babelrc)
```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

### Jest (jest.config.js)
```javascript
/** @type {import('jest').Config} */
export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
```

### Jest Setup (jest.setup.js)
```javascript
import '@testing-library/jest-dom';
```

## Scripts Disponíveis

No arquivo package.json, os seguintes scripts estão configurados:

```bash
# Inicia o servidor de desenvolvimento
npm run dev

# Gera a build de produção
npm run build

# Executa os testes
npm test

# Executa os testes em modo watch
npm run test:watch
```

## Estrutura do Projeto

```
projeto/
├── src/
│   ├── components/
│   │   ├── Button.jsx
│   │   └── Button.test.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .babelrc
├── jest.config.js
├── jest.setup.js
└── vite.config.js
```     