# 🧩 mini-n8n – Editor Visual de Fluxos (Clone Simples do n8n)

Um editor visual inspirado no [n8n](https://n8n.io/), criado com **React**, **React Flow** e **Tailwind CSS**, que permite criar fluxos de automação conectando nós arrastáveis.

Este projeto serve como base para ferramentas de automação personalizadas, estudo de orquestração visual ou construção de seu próprio workflow builder no estilo no-code.

---

## ✨ Funcionalidades

- ✅ Interface drag-and-drop com React Flow
- ✅ Adição de nós: Webhook, HTTP Request, Email
- ✅ Conexão entre nós com links visuais
- ✅ Visualização do fluxo gerado em JSON
- 🚧 Futuro: salvar, carregar e executar fluxos

---

## ⚙️ Tecnologias usadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [React Flow](https://reactflow.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 🚀 Como usar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/RuiOliveira46/mini-n8n-personal.git
   cd mini-n8n-personal
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor local:
   ```bash
   npm run dev
   ```

4. Acesse o app em `http://localhost:5173`

---

## 📁 Estrutura do Projeto

```
mini-n8n-personal/
├── src/
│   ├── App.jsx          # Interface principal com React Flow
│   ├── main.jsx         # Entry point da aplicação React
│   └── index.css        # TailwindCSS
├── index.html           # HTML principal
├── package.json         # Dependências
├── tailwind.config.js   # Config do Tailwind
├── vite.config.js       # Config do Vite
└── README.md
```

---

## 📌 Licença

Este projeto é de código aberto e está disponível sob a licença [MIT](LICENSE).

---

## 🙋‍♂️ Contribuições

Sinta-se à vontade para abrir issues, enviar PRs ou sugerir melhorias!
