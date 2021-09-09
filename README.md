# 📋 Sobre a atividade

Nessa atividade você irá usar o useEffect para fazer uma requisição na API toda vez que o componente for atualizado. Para isso, utilizaremos o código da atividade passada (em que aprendemos a usar o useEffect para renderizar informações da API assim que a página é carregada).

**Em caso de dúvidas em relação ao enunciado, procure o time de ensino ou seu coach!**

# ℹ️ Informações úteis

## 🖐️🍝 Mão na massa!

*   A partir da atividade anterior, faça uma cópia para iniciar um novo projeto.
*   Crie um state chamado `next` para armazenar a próxima página da [API do Rick and Morty](https://rickandmortyapi.com/). Para cada página haverá uma propriedade com o mesmo nome contendo o link para a próxima ou `null` para indicar que é a última página. A primeira página é a mesma usada na atividade anterior: [](https://rickandmortyapi.com/api/character/)[https://rickandmortyapi.com/api/character/](https://rickandmortyapi.com/api/character/).
*   Assim que a página for carregada ou atualizada, faça uma nova requisição para o link guardado em `next` e o atualize em seguida com o próximo.
*   Adicione os cards da nova requisição na página e faça isso para todas as próximas.

Dessa forma todos os personagens serão carregados aos poucos, permitindo que o usuário não fique esperando todo o carregamento para ver algo aparecer na tela.

# 💡Conhecimentos aplicados:

*   Fundamentos do React;
*   Deploy no Vercel;
*   Componentização;
*   Renderização condicional;
*   Ciclo de vida - Atualização;
*   Requisição API - fetch.
