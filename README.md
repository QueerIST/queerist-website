<p align="center">
  <img src="src/img/Cores%20fundo%20claro.png" height="150">
</p>

# Frontend do Website do QueerIST

Este projeto é escrito em [Typescript](https://www.typescriptlang.org/), com a framework [React](https://react.dev/) para os componentes visuais. Engloba apenas o frontend da aplicação, e necessita de comunicar com um backend feito pelo headless CMS [Strapi](https://strapi.io/) para receber e mostrar dados.

Usa o package manager [yarn](https://yarnpkg.com/), a ferramenta de construção [vite](https://vite.dev/) com a framework [vike](https://vike.dev/) para funcionalidades adicionais como SSR, gestão de rotas e dados. Erros de lógica e formatação são validados com o [ESLint](https://eslint.org/), inspirando-se nas regras do [Standard](https://standardjs.com/).

Para contribuir para este repositório, ler a secção [Contribuir](#contribuir).

## Instalar o projeto

É necessário o `yarn` para correr o projeto, que recomendamos instalar pelo `nvm` (node version manager).

Começamos por instalar o download do `nvm` pelo [site oficial](https://www.nvmnode.com/guide/download.html#nvm-for-linux-and-macos-nvm-sh).

De seguida, corremos

```bash
nvm use
```

para instalar a versão recomendada do npm.

```bash
npm install -g corepack
```

irá instalar o package manager `yarn`.

> :warning: É aconselhado instalar e usar o [Visual Studio Code](https://code.visualstudio.com/) como editor de texto. Há uma lista de extensões recomendadas. Para bom funcionamento do projeto, é necessário instalar também as extensões recomendadas do VS Code, listadas dentro da pasta `.vscode`.

Para que a app tenha acesso às variáveis de ambiente necessárias, incluindo segredos, copia-se o ficheiro `.env.development` e renomea-se a cópia para `.env.development.local` ou `.env.local` (se for para produção).

## Correr a app

Para instalar as dependencias do projeto, é necessário correr

```bash
yarn
```

(equivalente a `yarn install`). Isto deve ser corrido no primeiro clone do projeto, cada vez que se adiciona uma dependência nova ou cada vez que se faz pull de um commit novo através do GitHub. 

```bash
yarn dev
```
Corre a app em modo de desenvolvimento na porta 3000. Abre [http://localhost:3000](http://localhost:3000) num browser para veres.
A página irá dar reload sempre que guardares alterações, ao mesmo tempo que valida erros de ESlint e Typescript na consola.

## Contribuir

Depois de ler atentamente as instruções de [instalação](#instalar-o-projeto), o projeto deverá estar bem configurado localmente.

Este repositório dedica-se exclusivamente à interface em React do site atual do QueerIST.

Qualquer contribuição deverá ser feita através de commits separados mas significativos, sendo que cada deverá ter um propósito objetivo. Não deverá existir commits de merge.

As mensagens de commit seguem um formato específico, começando por um emoji do github delimitado por dois pontos (alusivo à função deste commit), de seguida um verbo em português no presente da terceira pessoa do singular (com a ação deste commit) de uma lista fechada de verbos, e o resto da frase a explicar em mais detalhe o commit.

Este formato assegura consistencia e concisão nas mensagens de commit.

Exemplos de mensagens são:

- :sparkles: Cria Share componente
- :zap: Melhora add to calender código e svg
- :bug: Corrige data de fim de evento no futuro
- :heavy_plus_sign: Adiciona vike e vike-react

Para encontrar o emoji do github adequado, é possível usar o site [gitmoji.dev](https://gitmoji.dev/), o assistente de terminal [gitmoji-cli](https://github.com/carloscuesta/gitmoji-cli) ou ainda a extensão do VS Code [Gitmoji Commit](https://marketplace.visualstudio.com/items?itemName=benjaminadk.emojis4git), ajustando-se à preferência do contribuidor.
As três opções permitem escrever o propósito do commit e receber sugestões do emoji adequado.


## Lançar a app

Para correr a app no servidor público, é necessário ter o ficheiro `.env.local` com os segredos de produção. De seguida, correr

```bash
yarn build
```

para compilar e construir o projeto na pasta `dist/`, e finalmente correr

```bash
yarn preview
```

que irá lançar uma instância otimizada da app.

---

Feito com :heart: por [Francisco Sousa](https://github.com/TheMrKiko).