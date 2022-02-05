1. A context API do React serve unicamente para compartilharmos estados entre componentes, e um dos problemas dela é que esse estado não consegue ser muito complexo. Ou seja, compartilhamos informações simples entre componentes
Ex: Dashboard com vários gráficos dentro e esses gráficos precisam de algum dado presente em um pai superior, e com a context api evitamos o prop drilling
1.1. Quando precisamos precisamos de estados globais que vários componentes vão ter acesso a esses dados a todo instante a context api para de resolver
Ex: E-commerce com um carrinho de compras (esse carrinho está conectado com vários componentes), utilizando a context api 
a partir do momento que o componente está conectado a ao contexto, quando um propriedade atualizar ele vai ser re-renderizado
2. Opções para gerenciamento de estado no react:
 - Context API: Compartilhar informações entre componentes (autenticação, não tem muita modificação de estado, sem muita granularidade (filtros, add, remover, pois deixa a desejar na performance))
 - Redux: Segue a arquitetura flux
 - Mobx: Observables
 - Recoiljs: Substituto do redux/mobx, e segue a estrutura de atomos, pequenos estados (tipo useState acessivel em vários components)
 - Zustand: Semelhante ao Recoil
 - Melhores pro Diego: Context API e Recoil
 - Existem algumas bibliotecas que fazem gerenciamento de estado automatico com graphql: Apollo , relay.dev
2. Arquitura flux: Alto nível de complexidade

Uma forma de organizar as alterações em estados globais na nossa aplicação (estados compartilhados)

Action: Ação de mudança de estado (ADD_PRODUCT_TO_CART)

Reducer: É o estado global que armazena as informações (o carrinho de compras), e pode realizar tratativas

O reducer não é uma mão de duas vias, são unidirecionais.

Então para sabermos se alguma informação foi atualizada, fazemos um Connect do componente com o reducer, ai toda vez que o reducer tiver uma alteração ele vai avisar automaticamente o componente (tipo listagem do produto)

Entre as actions e o reducer a gente consegue adicionar os middlewares (verificar se tem estoque de produto antes de adicionar ao carrinho ou não (Redux Saga))