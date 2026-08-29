# Dentista Landing Page 🦷

Uma landing page moderna, responsiva e interativa para uma clínica odontológica, construída com React e Vite. O projeto foi desenhado para apresentar serviços de alto padrão, resultados reais de pacientes e facilitar a localização das unidades da clínica.

## ✨ Funcionalidades Principais

* **Slider de Comparação Antes/Depois:** Um componente customizado (`ImageComparisonSlider`) desenvolvido do zero que permite aos usuários deslizarem uma barra interativa para ver a transformação dos sorrisos dos pacientes. Conta com suporte avançado para redimensionamento, recorte de imagens em grade (ex: focar apenas na parte inferior de uma montagem) e funciona perfeitamente em dispositivos móveis (touch) e desktop.
* **Mapa Interativo do Brasil:** Um mapa vetorial (SVG) dinâmico que exibe as unidades da clínica espalhadas pelo país. Os estados em que a clínica atua (ex: SP e RJ) recebem cores de destaque, suporte a hover e, ao serem clicados, filtram dinamicamente a lista de endereços exibida na tela.
* **Design Responsivo e Moderno:** Interface polida utilizando CSS puro com variáveis globais, adaptando-se com perfeição em celulares, tablets e computadores.
* **Carregamento Rápido (Vite):** Utiliza Vite como *build tool* para garantir um tempo de inicialização ultrarrápido durante o desenvolvimento e otimização pesada no build de produção.

## 🛠️ Tecnologias Utilizadas

* **React (v18):** Biblioteca principal para construção das interfaces.
* **Vite:** Ferramenta de build e servidor de desenvolvimento incrivelmente rápido.
* **Vanilla CSS:** Estilização componentizada sem necessidade de dependências extras, mantendo o bundle final muito leve.
* **Lucide React:** Biblioteca de ícones moderna e minimalista.

## 🚀 Como executar o projeto

Siga os passos abaixo para rodar o projeto localmente na sua máquina.

### Pré-requisitos
Certifique-se de ter o **Node.js** instalado na sua máquina. Recomendamos a versão LTS mais recente.

### Passo 1: Instalar as dependências
Abra o terminal na pasta raiz do projeto e execute o comando abaixo para baixar as dependências necessárias:

```bash
npm install
```

### Passo 2: Iniciar o servidor de desenvolvimento
Após a instalação ser concluída, rode o servidor local do Vite com o comando:

```bash
npm run dev
```

### Passo 3: Acessar no navegador
O terminal exibirá um link local (geralmente `http://localhost:5173`). Clique no link ou copie e cole no seu navegador para ver a landing page funcionando em tempo real. Qualquer alteração feita nos arquivos `.jsx` ou `.css` será refletida automaticamente na tela (Hot Module Replacement).

---

## 🏗️ Como gerar a versão de produção (Build)

Quando o projeto estiver pronto para ser publicado em um servidor real (como Vercel, Netlify ou AWS), execute:

```bash
npm run build
```

Este comando criará uma pasta `dist` na raiz do seu projeto contendo todos os arquivos estáticos minificados e otimizados, prontos para implantação.

Para testar localmente como a versão de produção ficou antes de subir, você pode rodar:

```bash
npm run preview
```
