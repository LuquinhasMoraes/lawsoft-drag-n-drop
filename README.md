# Projeto Lawsoft

Esse projeto visa avaliar competências de front-end. O sistema exibe uma lista de Prazos e Profissionais, permitindo que o usuário arraste um ou mais prazos para um profissional em questão.

## Tecnologias de desenvolvimento

- Angular 4
- Json Server
- Bootstrap
- JS
- CSS
- HTML

## Arquitetura

Já que o framework Angular 4 foi utilizado do desenvolvimento, todo projeto segue uma arquitetura baseada em Módulos e Componentes, onde a estrutura das views podem ser dividas em componentes e subcomponents. 

Também foi utilizada uma classe de Serviços, chamada AppService. Ela é a camada que se comunica com o back-end através de requições http. 

## Inicializar a aplicação

Clone o projeto na pasta desejada:

`git clone https://github.com/LuquinhasMoraes/lawsoft-drag-n-drop`

Caso não tenha o Angular 2^ instalado em sua máquina, rode o seguinte comando: 

`npm install -g @angular/cli`

Agora é preciso instalar o Json Server para testar a aplicação (caso já tenha, ignore esta etapa).

`npm install -g json-server`

Após a instalação é necessário inicializar o servidor json. Entre na raiz do projeto e dê o seguinte comando:

`json-server db.json`

Isso irá colocar de pé o servidor. 

Agora é necessário inicializar a aplicação, mas antes rode o comando:

`npm install`

Para garantir que todas dependências sejam instaladas.

Após a execução do comando, rode:

`ng serve`





