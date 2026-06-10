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

### US03 - Extrato

| ID     | Cenário                                      |
| ------ | -------------------------------------------- |
| CT-011 | Visualizar extrato                           |
| CT-012 | Acessar página de extratos                   |
| CT-013 | Exibir saldo disponível                      |
| CT-014 | Exibir histórico das transações              |
| CT-015 | Identificar valores de saída                 |
| CT-016 | Identificar valores de entrada               |
| CT-017 | Exibir indicador para ausência de comentário |

---

### US04 - Transferência

| ID     | Cenário                              |
| ------ | ------------------------------------ |
| CT-018 | Transferência realizada com sucesso  |
| CT-019 | Transferência com valor inválido     |
| CT-020 | Transferência com saldo insuficiente |
| CT-021 | Validação dos campos conta e dígito  |
| CT-022 | Transferência com descrição vazia    |
| CT-023 | Transferência para conta inexistente |
| CT-024 | Auto-transferência                   |

---

## Defeitos Identificados

| ID      | Descrição                                                    | Severidade | Status |
| ------- | ------------------------------------------------------------ | ---------- | ------ |
| BUG-001 |                                                              | Média      | Aberto |
| BUG-002 |                                                              | Média      | Aberto |

---

## Cobertura de Testes

* ✅ Login
* ✅ Cadastro
* ✅ Extrato
* ✅ Transferência

**Total de Casos de Teste:** 24

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


