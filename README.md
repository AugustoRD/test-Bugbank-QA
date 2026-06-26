# BugBank - Testes Funcionais, BDD e Testes Automatizados

## Sobre o Projeto

Este repositório reúne os artefatos de teste elaborados para a aplicação **BugBank**, com foco na validação funcional das principais funcionalidades do sistema por meio da abordagem **BDD (Behavior Driven Development)** e também através de **testes automatizados com Playwright**.

O objetivo é garantir a conformidade dos requisitos de negócio, identificar comportamentos inesperados, automatizar fluxos críticos e documentar evidências que contribuam para a qualidade do produto.

---

## Objetivos

- Validar os fluxos funcionais da aplicação;
- Elaborar cenários de teste utilizando Gherkin;
- Identificar defeitos e inconsistências nos requisitos;
- Documentar resultados esperados e obtidos;
- Aplicar práticas de Quality Assurance (QA);
- Implementar testes automatizados de interface com Playwright;
- Garantir maior confiabilidade e regressão automatizada dos cenários críticos.

---

## Sistema Testado

**BugBank**

https://bugbank.netlify.app/#

---

## Casos de Testes

https://docs.google.com/spreadsheets/d/1k7hAhhY0tHLouttQk2l6wm0uwRwIhxa7ohY9yC9ZpjU/edit?usp=sharing

---

## Metodologias e Ferramentas

- Behavior Driven Development (BDD)
- Linguagem Gherkin
- Testes Funcionais Manuais
- Testes Automatizados de Interface com Playwright
- Page Object Model (POM)
- Análise de Requisitos
- Elaboração de Casos de Teste
- Git e GitHub

---

## Funcionalidades Cobertas

### US01 - Login

| ID     | Cenário                              |
|--------|------------------------------------|
| CT-001 | Login com credenciais válidas      |
| CT-002 | Login com formato de e-mail inválido |
| CT-003 | Login com senha inválida           |
| CT-004 | Login com e-mail não cadastrado    |

---

### US02 - Cadastro

| ID     | Cenário                         |
|--------|--------------------------------|
| CT-005 | Cadastro com saldo inicial     |
| CT-006 | Cadastro sem saldo inicial     |
| CT-007 | Confirmação de senha divergente |
| CT-008 | E-mail inválido               |
| CT-009 | Nome inválido                 |
| CT-010 | Exibição do número da conta criada |

---

### US03 - Transferência

| ID     | Cenário                              |
|--------|------------------------------------|
| CT-011 | Transferência realizada com sucesso |
| CT-012 | Transferência com valor inválido   |
| CT-013 | Transferência com saldo insuficiente |
| CT-014 | Validação dos campos conta e dígito |
| CT-015 | Transferência com descrição vazia  |
| CT-016 | Transferência para conta inexistente |
| CT-017 | Auto-transferência                 |

---

## Automação de Testes

Além dos testes manuais, foi implementado um conjunto de **testes automatizados utilizando Playwright**, cobrindo os principais fluxos críticos da aplicação BugBank.

Os testes automatizados incluem:

- Cadastro de usuários via interface;
- Login com validação de autenticação;
- Transferência entre contas;
- Validação de regras de negócio (saldo insuficiente, valores inválidos e contas inexistentes);
- Verificação de mensagens de erro e sucesso;
- Regressão automatizada dos cenários principais.

---

## Defeitos Identificados

| ID | Descrição | Severidade | Status |
|----|----------|------------|--------|
| BUG-001 | O campo "Número da conta" e "Dígito" aceita caracteres não numéricos. | Alta | Aberto |
| BUG-002 | Transferência aceita descrição vazia contrariando requisitos. | Média | Aberto |
| BUG-003 | Não há redirecionamento para extrato após transferência. | Alta | Aberto |
| BUG-004 | Permite criação de contas com mesmo e-mail. | Alta | Aberto |
| BUG-005 | Formulário mantém dados após cadastro. | Média | Aberto |
| BUG-006 | Campo Nome não é obrigatório. | Alta | Aberto |
| BUG-007 | Switch de saldo não funciona corretamente ao clicar no toggle. | Média | Aberto |
| BUG-008 | Ícone de voltar não redireciona para login. | Alta | Aberto |

---

## Observações

- Tentativa de cadastro sem preencher email deve visualizar "Email não pode ser vazio"
- Tentativa de cadastro sem preencher senha deve visualizar "Senha não pode ser vazio"
- Tentativa de cadastro sem preencher confirmação de senha deve visualizar "Confirmar senha não pode ser vazio"

---

## Cobertura de Testes

- Testes Manuais (BDD)
- Testes Automatizados (Playwright)
- Login
- Cadastro
- Transferência

**Total de Casos de Teste:** 17

---

## Equipe

| Integrante | Papel |
|------------|-------|
| Augusto    | QA Analyst |
| Joyce      | QA Analyst |
| Marcos     | QA Analyst |

---

## Boas Práticas Aplicadas

- Escrita de cenários em Gherkin
- Validação de fluxos positivos e negativos
- Definição de resultados esperados
- Rastreabilidade entre requisitos e casos de teste
- Registro de defeitos encontrados
- Organização por User Stories
- Documentação orientada à qualidade
- Implementação de testes automatizados com Playwright
- Uso do padrão Page Object Model (POM)
- Separação entre testes manuais e automatizados

---

## Objetivo Acadêmico

Projeto desenvolvido para fins de estudo e aprimoramento das práticas de Quality Assurance (QA), incluindo análise de requisitos, elaboração de casos de teste e aplicação de BDD, além da automação de testes funcionais com Playwright.

Os testes automatizados cobrem os principais fluxos críticos: login, cadastro e transferência.
