Uma aplicação web desenvolvida com **Vue 3 + Quasar** que permite explorar e buscar GIFs animados usando a API do GIPHY. A interface é leve, responsiva, e com suporte a tema escuro/claro. Ideal pra quem quer dar boas risadas, achar aquele GIF perfeito ou só procrastinar com estilo. 😄

---

## ✨ Funcionalidades

- 🔍 Busca de GIFs em tempo real usando a API do Giphy
- 📁 Paginação para explorar mais resultados
- 🌙 Suporte a tema Dark/Light
- 📱 Interface responsiva para mobile
- ❤️ Favoritar GIFs e acessá-los depois
- 📂 Organização por categorias
- 🌀 Animações com Lottie para carregamento e vazio

---

## 🛠️ Tecnologias Utilizadas

- [Vue 3](https://vuejs.org/)
- [Quasar Framework](https://quasar.dev/)
- [Pinia](https://pinia.vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vue3-Lottie](https://github.com/chenxinan/vue3-lottie)
- [Giphy API](https://developers.giphy.com/)

---

## 📦 Como Rodar o Projeto

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/app-giphy.git

# Acesse a pasta
cd app-giphy

# Instale as dependências
npm install

# Insira a chave da API no arquivo giphyStore.js, na linha 5, irá ficar assim:
const apiKey = 'qNQZcMw7FF6TrOQ0RAyshhYbdxDxi2ds'

Você pode testar com uma segunda chave: '4hBDlSrRxC4ycO7xFENWlqn1A5OKbvIK'

* Esse passo é necessário, pois o projeto está disponibilizado no vercel, (pode ser acessado por este link: https://frontend-desafio-api-giphy-1n9g.vercel.app/#/ ), e lá a apiKey está configurada como uma variável de ambiente.

# Rode o projeto
quasar dev

! Importante:
# Se você receber o erro:

\npm\quasar.ps1 não pode ser carregado porque a execução de
scripts foi desabilitada neste sistema. Para obter mais informações, consulte about_Execution_Policies em
https://go.microsoft.com/fwlink/?LinkID=135170.
No linha:1 caractere:1
+ quasar dev
+ ~~~~~~
    + CategoryInfo          : ErrodeSegurança: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess

rode com npx: npx quasar dev
