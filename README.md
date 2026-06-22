# BugBank - Testes Funcionais e BDD

## Sobre o Projeto

Este repositório reúne os artefatos de teste elaborados para a aplicação **BugBank**, com foco na validação funcional das principais funcionalidades do sistema por meio da abordagem **BDD (Behavior Driven Development)**.

O objetivo é garantir a conformidade dos requisitos de negócio, identificar comportamentos inesperados e documentar evidências que contribuam para a qualidade do produto.

---

## Objetivos

* Validar os fluxos funcionais da aplicação;
* Elaborar cenários de teste utilizando Gherkin;
* Identificar defeitos e inconsistências nos requisitos;
* Documentar resultados esperados e obtidos;
* Aplicar práticas de Quality Assurance (QA) em testes manuais.

---

## Sistema Testado

**BugBank**

https://bugbank.netlify.app/#

---
---

## Casos de Testes

https://docs.google.com/spreadsheets/d/1k7hAhhY0tHLouttQk2l6wm0uwRwIhxa7ohY9yC9ZpjU/edit?usp=sharing

---
## Metodologias e Ferramentas

* Behavior Driven Development (BDD)
* Linguagem Gherkin
* Testes Funcionais Manuais
* Análise de Requisitos
* Elaboração de Casos de Teste
* Git e GitHub

---

## Funcionalidades Cobertas

### US01 - Login

| ID     | Cenário                              | 
| ------ | ------------------------------------ | 
| CT-001 | Login com credenciais válidas        |  
| CT-002 | Login com formato de e-mail inválido |  
| CT-003 | Login com senha inválida             |  
| CT-004 | Login com e-mail não cadastrado      |  

---

### US02 - Cadastro

| ID     | Cenário                            |
| ------ | ---------------------------------- |
| CT-005 | Cadastro com saldo inicial         |
| CT-006 | Cadastro sem saldo inicial         |
| CT-007 | Confirmação de senha divergente    |
| CT-008 | E-mail inválido                    |
| CT-009 | Nome inválido                      |
| CT-010 | Exibição do número da conta criada |

---

---

### US043 - Transferência

| ID     | Cenário                              |
| ------ | ------------------------------------ |
| CT-011 | Transferência realizada com sucesso  |
| CT-012 | Transferência com valor inválido     |
| CT-013 | Transferência com saldo insuficiente |
| CT-014 | Validação dos campos conta e dígito  |
| CT-015 | Transferência com descrição vazia    |
| CT-016 | Transferência para conta inexistente |
| CT-017 | Auto-transferência                   |

---

## Defeitos Identificados

| ID | Descrição | Severidade | Status |
| :--- | :--- | :--- | :--- |
| BUG-001 | O campo "Número da conta" e "Dígito" do formulário de transferência estão aceitando outros tipos de caracteres não numéricos. De acordo com o requisito deveriam aceitar apenas números. | Alta | Aberto |
| BUG-002 | O formulário de transferência aceita a submissão do formulário com o campo "Descrição" vazio, porém o campo é obrigatório de acordo com a documentação do requisito. Entretanto na documentação do Extrato diz que transações sem comentários/descrição devem exibir "(-)", contradizendo a documentação anterior. | Média | Aberto |
| BUG-003 | Após toda realização de transferência com sucesso o usuário deveria ser redireciona à página de extrato, entretanto o redirecionamento não ocorre com a ação é realizada. | Alta | Aberto |
| BUG-004 | Pode ser cadastrado duas contas com o mesmo email e a nova conta substitui a conta atual alterando seu saldo. | Alta| Aberto |
| BUG-005 | Após criar uma conta, ao clicar em "registrar" os dados ainda continuam salvos no formulário| Média| Aberto |
| BUG-006 | Os campos Nome, Email, Senha e Confirmação de senha são de preenchimento obrigatório. O campo Nome não está em preenchimento obrigatório| Alta| Aberto |
| BUG-007 | O switch **"Criar conta com saldo?"** apresenta falha de interação. Ao clicar diretamente no botão deslizante (bolinha), nenhuma ação é executada. A alteração do estado ocorre apenas ao clicar na área vazia ao lado do componente. O comportamento esperado é que toda a área do switch, incluindo o botão deslizante, seja clicável. | Média      | Aberto |
| BUG-008 | A seta de retorno localizada na tela de cadastro não redireciona o usuário para a tela de login. Ao clicar no ícone, nenhuma ação é executada. O comportamento esperado é que o usuário seja direcionado para a tela de login. | Alta       | Aberto |


---

## Observações
* Tentativa de cadastro sem preencher email deve visualizar a mensagem "Email não pode ser vazio"

* Tentativa de cadastro sem preencher senha deve visualizar a mensagem "Senha não pode ser vazio"

* Tentativa de cadastro sem preencher confirmação de senha deve visualizar a mensagem "Confirmar senha não pode ser vazio"

---
## Cobertura de Testes

* ✅ Login
* ✅ Cadastro
* ✅ Transferência

**Total de Casos de Teste:** 17

---

## Equipe

| Integrante         | Papel      |
| ------------------ | ---------- |
| Augusto            | QA Analyst |
| Joyce              | QA Analyst |
| Marcos             | QA Analyst |

---

## Boas Práticas Aplicadas

* Escrita de cenários em Gherkin;
* Validação de fluxos positivos e negativos;
* Definição de resultados esperados;
* Rastreabilidade entre requisitos e casos de teste;
* Registro de defeitos encontrados;
* Organização por User Stories;
* Documentação orientada à qualidade.

---

## Objetivo Acadêmico

Projeto desenvolvido para fins de estudo e aprimoramento das práticas de **Quality Assurance (QA)**, abrangendo análise de requisitos, elaboração de casos de teste e aplicação da metodologia BDD para validação funcional da aplicação BugBank.


