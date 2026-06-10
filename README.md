# test-Bugbank-QA (rascunho)

# US01 - Login
| ID     | Pré-condição           | Cenário                             | BDD                                                                                                                                                      | Resultado Esperado                                                                                               | Status |
| ------ | ---------------------- | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------ |
| CT-001 | Estar na tela de login | Login com sucesso                   | Dado que o usuário preenche email e senha corretamente.<br>Quando clicar em "Acessar".<br>Então o sistema deve acessar a tela inicial.                   | O usuário deve ser redirecionado para a página inicial.                                                          | ⬜      |
| CT-002 | Estar na tela de login | Login com email de formato inválido | Dado que o usuário preenche o campo email com formato inválido.<br>Então o sistema deve exibir a mensagem "Formato inválido".                            | Exibir a mensagem "Formato inválido" abaixo do campo de email.                                                   | ⬜      |
| CT-003 | Estar na tela de login | Login com senha inválida            | Dado que o usuário preenche o campo senha incorretamente.<br>Quando clicar em "Acessar".<br>Então o sistema deve exibir a mensagem de erro.              | Exibir "Usuário ou senha inválido. Tente novamente ou verifique suas informações!" e não redirecionar o usuário. | ⬜      |
| CT-004 | Estar na tela de login | Login com email não cadastrado      | Dado que o usuário preenche o campo email com um email não cadastrado.<br>Quando clicar em "Acessar".<br>Então o sistema deve exibir a mensagem de erro. | Exibir "Usuário ou senha inválido. Tente novamente ou verifique suas informações!" e não redirecionar o usuário. | ⬜      |


# US02 - Cadastro
| ID     | Pré-condição              | Cenário                       | BDD                                                                                                                                                                                                                | Resultado Esperado                                       | Status |
| ------ | ------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- | ------ |
| CT-005 | Estar na tela de registro | Cadastro com saldo inicial    | Dado que o usuário preenche Nome, E-mail, Senha e Confirmação de senha com dados válidos.<br>E ativa a opção "Criar conta com saldo".<br>Quando clicar em "Cadastrar".<br>Então o cadastro deve ser efetuado.      | Conta criada com sucesso e saldo inicial de R$ 1.000,00. | ⬜      |
| CT-006 | Estar na tela de registro | Cadastro sem saldo inicial    | Dado que o usuário preenche Nome, E-mail, Senha e Confirmação de senha com dados válidos.<br>Quando não habilitar a criação de conta com saldo.<br>E clicar em "Cadastrar".<br>Então o cadastro deve ser efetuado. | Conta criada com sucesso e saldo inicial de R$ 0,00.     | ⬜      |
| CT-007 | Estar na tela de registro | Confirmação de senha inválida | Dado que o usuário preenche Nome, E-mail e Senha válidos.<br>E preenche a confirmação de senha incorretamente.<br>Quando clicar em "Cadastrar".<br>Então o cadastro não deve ser efetuado.                         | Exibir a mensagem "As senhas não são iguais".            | ⬜      |
| CT-008 | Estar na tela de registro | E-mail inválido               | Dado que o usuário preenche Nome, Senha e Confirmação de senha válidos.<br>E informa um e-mail inválido.<br>Quando clicar em "Cadastrar".<br>Então o cadastro não deve ser efetuado.                               | Exibir a mensagem "Formato inválido".                    | ⬜      |
| CT-009 | Estar na tela de registro | Nome inválido                 | Dado que o usuário preenche E-mail, Senha e Confirmação de senha válidos.<br>E informa um nome inválido.<br>Quando clicar em "Cadastrar".<br>Então o cadastro não deve ser efetuado.                               | O sistema deve impedir o cadastro.                       | ⬜      |
                                          |

# US03 - Extrato
| Observação                              | Resultado        |
| --------------------------------------- | ---------------- |
| Seta de voltar do cadastro não funciona | Bug identificado |


# US04 - Transferência
| a fazer    | fazr                                                      |
| -------------- | --------------------------------------------------------------- |
| fzr | to do |

# Resumo Geral
| ID     | Funcionalidade | Cenário                       |
| ------ | -------------- | ----------------------------- |
| CT-001 | Login          | Login com sucesso             |
| CT-002 | Login          | E-mail inválido               |
| CT-003 | Login          | Senha inválida                |
| CT-004 | Login          | E-mail não cadastrado         |
| CT-005 | Cadastro       | Cadastro com saldo inicial    |
| CT-006 | Cadastro       | Cadastro sem saldo inicial    |
| CT-007 | Cadastro       | Confirmação de senha inválida |
| CT-008 | Cadastro       | E-mail inválido               |
| CT-009 | Cadastro       | Nome inválido                 |


## Pendências

* [ ] Completar os casos CT-010 ao CT-018;
* [ ] Criar os cenários da funcionalidade **Extrato**;
* [ ] Criar os cenários da funcionalidade **Transferência**;
* [ ] Corrigir o bug da seta de retorno do cadastro.

---

## Equipe

Projeto desenvolvido para validação funcional da aplicação **BugBank**, utilizando a abordagem **BDD (Behavior Driven Development)** e testes funcionais manuais.

