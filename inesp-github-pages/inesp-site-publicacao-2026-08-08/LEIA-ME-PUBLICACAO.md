# Pacote de publicação — Site Institucional do INESP

Este pacote corresponde à versão validada do site do **Instituto Nacional de Ensino, Sociedade e Pesquisa — INESP**, preparada em 8 de agosto de 2026.

## Conteúdo do pacote

- `site/app/`: páginas, componentes, estilos e rota do formulário de contato.
- `site/db/`: esquema e acesso ao banco de dados.
- `site/drizzle/`: migração da tabela de manifestações e contatos.
- `site/dist/`: artefato de produção já compilado e validado.
- `site/package.json` e `site/package-lock.json`: dependências e comandos do projeto.
- `site/.openai/hosting.json`: configuração do projeto no ChatGPT Sites.

Não foram incluídos módulos instalados, caches, arquivos temporários, credenciais ou o histórico interno de desenvolvimento.

## Requisitos técnicos

- Node.js 22.13 ou superior.
- Ambiente Linux para os comandos de instalação e compilação fornecidos.
- Plataforma compatível com Cloudflare Workers.
- Banco Cloudflare D1 vinculado com o nome lógico `DB` para o formulário de contato.

O projeto não é um conjunto de páginas HTML estáticas. A rota `/api/contato` grava os formulários no banco D1; por isso, uma hospedagem estática ou um cPanel convencional não preservará toda a funcionalidade sem adaptação técnica.

## Publicação recomendada

A publicação recomendada é manter o projeto no ChatGPT Sites e vincular o domínio `www.inesp-br.org.br` após a autorização institucional e a configuração do DNS. Essa opção já preserva o banco de dados e a integração do formulário.

Para outra infraestrutura Cloudflare, a equipe responsável deverá:

1. Instalar as dependências com `npm ci`.
2. Gerar e validar o artefato com `npm run build`.
3. Criar um banco D1 e aplicar a migração de `site/drizzle/0000_complete_joshua_kane.sql`.
4. Vincular o banco ao Worker com o nome `DB`.
5. Publicar o Worker gerado em `site/dist/server/index.js` e os ativos estáticos de `site/dist/client/` conforme a configuração da plataforma.
6. Configurar HTTPS e o domínio institucional.

## Desenvolvimento local

Dentro da pasta `site/`:

```bash
npm ci
npm run dev
```

## Observações institucionais antes do lançamento público

Antes de tornar o site público, recomenda-se inserir ou confirmar:

- logomarca oficial;
- e-mail institucional;
- telefone ou WhatsApp institucional;
- fotografias autorizadas;
- indicadores de impacto comprovados;
- editais e relatórios aprovados;
- versão pública do Estatuto Social com dados pessoais protegidos;
- autorização expressa para publicação e vinculação do domínio.

O pacote não inclui o Estatuto Social original, pois o documento contém dados pessoais que exigem tratamento antes da divulgação pública.
