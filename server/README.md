# API do app Tasty Recipes - Challenge
Segue abaixo as referências 

## **Tecnologias utilizadas**
- NodeJS
- [Fastify](https://www.fastify.io/)
- [Prisma](https://www.fastify.io/)
- Typescript

## **ROTAS DA APLICAÇÃO**
  
- ## Teste de execução
  - GET - `/`

- ## INGREDIENTES
  - GET - Lista todos os Ingredientes: `/ingredients/list`
  
  - PATCH - Zerar quant. de ingrediente: `/ingredients/reset/id`
    - param: `id` do ingrediente.
  
  - DELETE - Deletar Ingrediente: `/ingredients/delete/id`
    - param: `id` do ingrediente.
  
  - POST - Cadastrar Ingrediente: `/ingredients/create`
    - body: 
    ``` 
      {
        "name": string,
        "measurement": string,
        "number_of_units": number
      }
      ```
  - PUT - Alterar Ingrediente: `/ingredients/update/id`
     - body: 
      ``` 
        {
          "name": string,
          "measurement": string,
          "number_of_units": number
        }

- ## RECEITAS
  - GET 
    - Lista todas receitas: `/recipes/list-all`
    - Buscar receitas: `/recipes/search` 
    - Lista receitas possíveis com base nos ingredientes cadastrados: `/recipes/list/possible-recipes`