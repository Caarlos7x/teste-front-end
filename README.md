# Teste Vaga Front-End Jr

Este repositório contém o desafio para a vaga de Front-End Júnior, conforme as especificações fornecidas. O objetivo é desenvolver uma página de vitrine de produtos em React e TypeScript, utilizando boas práticas de SEO e HTML semântico, e consumir informações de produtos em formato JSON para exibição em um modal ao clicar em um produto.

Consulte o layout do projeto [Aqui](https://www.figma.com/design/rWnzPeoxgynuNPsJjV0VmV/Teste-Front-End-Jr?node-id=0-1&p=f&t=sa4YCwrro7ucjhQr-0)


## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção da interface.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática.
- **Sass (SCSS)**: Pré-processador CSS utilizado para estilização.
- **HTML Semântico**: Boas práticas para garantir acessibilidade e SEO.
- **JSON**: Dados dos produtos consumidos a partir de um link fornecido.

## Instruções para Rodar o Projeto

### 1. Clonar o Repositório

```bash
git clone https://github.com/Caarlos7x/teste-vaga-front-end-jr.git
cd teste-vaga-front-end-jr
```

### 2. Instalar as Dependências

Este projeto utiliza o npm como gerenciador de pacotes. Execute o comando abaixo para instalar as dependências:
```bash
npm install
```

### 3. Rodar o Projeto
Para rodar o projeto em um ambiente de desenvolvimento local, execute o comando:
```bash
npm run dev
```
Isso irá iniciar o servidor de desenvolvimento e você poderá acessar a página no seu navegador através de `http://localhost:3000`.

### 4. Compilar o Projeto para Produção
Para compilar o projeto para produção, execute:

```bash
npm run build
```
Os arquivos otimizados para produção serão gerados na pasta `build/`.

### Funcionalidades

- **Vitrine de Produtos**: A página exibe uma vitrine de produtos que consome os dados dos produtos em formato JSON através do link fornecido.
- **Modal de Produto**: Ao clicar em um produto, um modal é exibido com as principais informações do produto, como imagem, título, preço e descrição.
- **Responsividade**: O layout foi projetado para ser responsivo, se ajustando automaticamente para diferentes tamanhos de tela.
- **Boas práticas de SEO**: O HTML semântico foi utilizado para garantir que o conteúdo seja bem indexado pelos motores de busca.

### Estrutura do Projeto

```plaintext
src/
├── assets/
├── components/
│   ├── brandShop/
│   │   ├── BrandShop.scss
│   │   └── BrandShop.tsx
│   ├── categoryPurchase/
│   │   ├── CategoryPurchase.module.scss
│   │   └── CategoryPurchase.tsx
│   ├── header/
│   │   ├── Header.scss
│   │   └── Header.tsx
│   ├── itemGallery/
│   │   ├── ItemGallery.scss
│   │   └── ItemGallery.tsx
│   ├── itemGallery-2/
│   │   ├── ItemGallery-2.scss
│   │   └── ItemGallery-2.tsx
│   ├── modal/
│   │   ├── ProductModal.scss
│   │   └── ProductModal.tsx
│   ├── newsLetter-Footer/
│   │   ├── newsletterFooter.scss
│   │   └── newsletterFooter.tsx
│   ├── partnerBanner/
│   │   ├── PartnerBanner.scss
│   │   └── PartnerBanner.tsx
├── pages/
│   └── Home.tsx
├── styles/
│   ├── global.scss
│   └── index.scss
├── types/
├── App.css
├── App.tsx
├── index.css
├── main.tsx
└── vite-env.d.ts
```

### Como os Produtos São Consumidos

Os produtos são consumidos a partir de um arquivo JSON que está disponível em um link fornecido. O JSON contém informações como título, imagem, preço e descrição do produto, que são exibidas na vitrine de produtos.

### Melhorias e Funcionalidades Futuras

- Adicionar funcionalidades de filtragem e ordenação de produtos.
- Implementar testes automatizados para os componentes.
- Melhorar a acessibilidade com navegação por teclado.

### Conclusão
Este projeto foi desenvolvido com base nas especificações fornecidas, utilizando boas práticas de desenvolvimento como organização de código, componentização e SEO. O foco foi garantir que o layout fosse seguido pixel a pixel, respeitando as cores, fontes e tamanhos dos elementos.

### Licença
Este projeto está licenciado sob a MIT License.
