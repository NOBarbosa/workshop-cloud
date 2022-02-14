# Workshop Cloud

## Introdução
   A fim de ensinar como utilizar os recursos do  Google Cloud para fazer o deploy de uma aplicação, o GDSC UFBA preparou um workshop onde serão exibidos alguns conceitos sobre  Cloud, modelos de computação em nuvem e, um momento prático composto das seguintes etapas:
   - Escolha do projeto  
   - Instalação de ferramentas e preparação do ambiente
   - Configurações
   - Deploy do projeto    
 
 
 ### Escolha do Projeto
   Utilizaremos para o deploy uma imagem docker com a aplicação de uma página construída em ReactJs. 
   A criação da página não é o foco do projeto entretanto, abaixo você encontrará a descrição básica do processo para elaboração da mesma. <br>
   <strong> Caso seu interesse seja somente em utilizar o projeto basta fazer o clone do repositório e  realizar os seguintes passos: <br>
         - navegue até o projeto e abra o mesmo com seu editor de código <br>
         - Rode no terminal o comando: npm install ou yarn install <br>
         - Inicialize o projeto com o comando: npm start ou yarn start
   </strong> [Assista ao Vídeo](https://youtu.be/gpw6euz3-98)
   
   #### Ferramentas e Configurações de Ambiente para construção da página
      - Editor de código: VS Code
      - NodeJs + NPM
      - DOCKER 
      - gcloud
   1 -  Crie o projeto com: npx create-react-app nome-do-projeto <br>
   2 -  Na pasta SRC iremos divir o nosso projeto em componetes, são eles: <br>
         - Header <br>
         - Main <br>
         - Footer <br>
         - Carrossel (opcional)<br>
         <img width="223" alt="scr-components" src="https://user-images.githubusercontent.com/75585553/152552930-6480034c-8285-489f-9ebf-2bc30b93e56a.png">
         
  Cada componente possui seu próprio arquivo index.js e style.css.
  
  #### O por quê do Docker:
      Além de ser padrão de mercado, ter a possibilidade de transformar uma aplicação em imagem docker permite que ela seja alocada 
      como container em ambientes diferentes, fazendo com que ela possa ser utilizada tanto no computador do desenvolvedor quanto
      no servidor da produção, por exemplo.
      Outra vantagem é que o grupo de máquinas físicas ou virtuais onde os containers são executados (cluster) permite maior 
      facilidade de gerenciamento uma vez que é possível monitorar constantemente.
      
      
  ## Google Cloud Platform

   <strong> Com sua conta já criada, siga os passos: <strong>
   
      - Selecione My first project > novo projeto > escolha um nome > confirme a criação
      
### Comandos





imagem do container local
docker build . -t workshop-cloud

baixe isso: https://cloud.google.com/sdk/docs/install

faça o login no gcloud

gcloud auth configure-docker southamerica-east1-docker.pkg.dev

docker tag workshop-cloud southamerica-east1-docker.pkg.dev/<project-id>/workshop-cloud/front:latest
docker push southamerica-east1-docker.pkg.dev/<project-id>/workshop-cloud/front:latest

gcloud components install kubectl

gcloud container clusters get-credentials cluster-1 --zone=us-central1-c --project=workshop-cloud-340123

## Referências
   - http://wiki.inf.ufpr.br/maziero/doku.php?id=socm:start    
   - https://cloud.google.com/kubernetes-engine/docs/tutorials/hello-app 
   - https://www.globalmind.com.br/vantagens-da-utilizacao-do-docker-container/
