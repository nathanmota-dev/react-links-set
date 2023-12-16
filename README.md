# React Links Set

**Uma árvore de links inspirada no Linktree com suporte ao modo escuro.**

O React Links Set é uma solução simples e elegante para criar uma página de links personalizada, ideal para compartilhar várias redes sociais, projetos e outras URLs importantes em um único lugar. Inspirado no serviço popular Linktree, este projeto oferece uma funcionalidade adicional de DARK MODE para uma experiência visual aprimorada.

Exibição Celular

![React Links Set Logo](/src/assets/Capture2.jpeg)

Exibição Desktop

![React Links Set Logo](/src/assets/Capture.JPG)

### Tecnologias utilizadas

- `ReactJs` - [ReactJs](https://pt-br.legacy.reactjs.org/)

## Como Executar o Projeto

1. Clone o repositório para sua máquina local:

   ```bash
   git clone https://github.com/nathanmota-dev/react-links-set
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd react-links-set
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

5. Abra seu navegador em: [http://localhost:3000/](http://localhost:3000/) para visualizar o projeto em execução.

### Exemplo de Uso

Navegue para SocialMedia.js e altere para seu usuário e adicione novos campos conforme a necessidade.

```jsx
const SocialMedia = [
        { id: 1, name: "Instagram", url: "https://www.instagram.com/seu-usuario" },
        { id: 2, name: "LinkedIn", url: "https://www.linkedin.com/in/seu-usuario/" },
        { id: 3, name: "GitHub", url: "https://github.com/seu-usuario" },
        { id: 4, name: "Twitter", url: "https://twitter.com/seu-usuario" }        
    ]
```

Navegue para Header.js e altere a imagem e seu nome.

```jsx
<div className="contentProfile">
    <div className="contentImg"></div>
    <h1>Seu nome</h1>
</div>
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir um problema ou enviar um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT.