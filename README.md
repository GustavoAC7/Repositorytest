# Assistente Virtual para WhatsApp

Este projeto contém um exemplo simples de assistente virtual utilizando Node.js e Twilio para interagir via WhatsApp.

## Pré-requisitos
- Node.js 18 ou superior
- Conta no [Twilio](https://www.twilio.com/)

## Configuração
1. Clone este repositório e acesse a pasta.
2. Copie o arquivo `.env.example` para `.env` e preencha as credenciais do Twilio.
3. Instale as dependências com `npm install`.
4. Inicie o servidor com `npm start`.
5. Configure o webhook do seu número de WhatsApp no Twilio apontando para `https://seu-dominio.com/whatsapp`.

## Scripts
- `npm start` &ndash; inicia a aplicação.
- `npm test` &ndash; executa os testes (nenhum incluído).

## Funcionamento
Envie a mensagem **"oi"** para o seu número do WhatsApp configurado no Twilio. A aplicação responderá com uma mensagem de boas-vindas. Qualquer outra mensagem receberá uma resposta padrão informando que o comando não foi reconhecido.
