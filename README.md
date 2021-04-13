# listawebcontrato
  Projeto front end em angular consome a API pública: 
      http://dadosabertos.almg.gov.br/ws/prestacao_contas/contratos/ajuda
  lista de pessoas físicas e jurídicas com contratos ou convênios vigentes firmados pela ALMG.
# Sobre o Projeto 
   utilizado angular 9.1, bootstrap 4.6
# Melhorias
   Funcionalidades a serem implementadas e refatorações devem ser feitas no código. Penso que uma treview para a visualização dos aditamentos dos contratos pode ser construida. Há também um bug do EventEmitter pra ser corrigido, fazendo eventos serem emitidos duas vezes. Restou implementar os botões de navegação da topbar. 
# Para rodar
  -No momento é um projeto de teste e está em inicio de desenvolvimento. Portanto é necessário ter o node e o npm instalado. faz o pull do projeto, dentro do diretório "listawebcontrato-ui" roda o comando npm install para instalar as dependencias e depois "ng serve" para rodar o projeto. Agora é só rodar de um navegador no localhost na porta 4200(http://localhost:4200)
  -Posteriormente, se necessário, vai ser criado um make para gerar uma imagem docker.
