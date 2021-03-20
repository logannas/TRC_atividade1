# API para cadastro de disiplinas

## Introduction

Utilizado o banco de dados mongodb e o ambiente nodejs foi feito uma api para o cadastro de disciplinas onde é possível cadastrar, deletar, atualizar e consultar disciplinas.

## Code Samples

- Servidor rodando na porta 3001
- Mongo - mongodb://localhost:27017/topicos3

POST - /disciplinas
>Cadastra uma nova disciplinas

GET - /disciplinas
>Retorna todas as disciplinas cadastradas 

GET - /disciplinas/:id
>Retorna uma disciplinas específi

PUT - /disciplinas/:id
>Atualiza uma disciplina já existente

DELETE - /disciplinas/:id
> Deleta uma discipina já existente
