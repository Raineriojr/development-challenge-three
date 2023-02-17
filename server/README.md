# API do app Tasty Recipes - Challenge
Segue abaixo as referências 

## **ROTAS DA APLICAÇÃO**
  
- INGREDIENTES
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
