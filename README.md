# Workshop Cloud

## Introdução
   A fim de ensinar como utilizar os recursos do  Google Cloud para fazer o deploy de uma aplicação, o GDSC UFBA preparou um workshop onde serão exibidos alguns conceitos sobre  Cloud, modelos de computação em nuvem e, um momento prático composto das seguintes etapas:
   - Escolha do projeto  
   - Instalação de ferramentas e preparação do ambiente
   - Configurações
   - Deploy do projeto    
 
  #### Ferramentas necessárias para acompanhar o projeto Ao Vivo:
         - gcloud
         - Clonar o projeto
 
 ### Escolha do Projeto
   Utilizaremos para o deploy uma imagem docker com a aplicação de uma página construída em ReactJs. 
   A criação da página não é o foco do projeto entretanto, abaixo você encontrará a descrição básica do processo para elaboração da mesma. <br>
  
   [Assista ao Vídeo](https://youtu.be/gpw6euz3-98)
   
   
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
   
      - Selecione My first project > novo projeto > escolha um nome > confirme a criação > abra o projeto
   <div gap="20">
      <img width="400" alt="first project" src="https://user-images.githubusercontent.com/75585553/154121106-f44f9ddc-b71d-4819-9ebb-65f67895acb4.png">
      <img width="400" alt="newproject" src="https://user-images.githubusercontent.com/75585553/154121301-19e9c3d0-5af6-4b33-978d-9eb4ca5a3e03.png">
      <img width="400" alt="newproject2" src="https://user-images.githubusercontent.com/75585553/154121387-d774ac16-eecc-4d83-87ba-acaacb249d5e.png">
      <img width="400" alt="project" src="https://user-images.githubusercontent.com/75585553/154122583-7d585a1c-12c6-402b-9ff8-cb0502ee966b.png">
   </div>   
   
   <strong> Habilitando alguns serviços: </strong>
   <div>
      <img width="400" alt="compute engine" src="https://user-images.githubusercontent.com/75585553/154123459-d4c68aa6-0b9d-49e5-8088-7ea33b89dd0a.png">
      <img width="400" alt="ativar" src="https://user-images.githubusercontent.com/75585553/154123484-06675aa4-e90a-420a-bd0b-33b91336270b.png">
   </div>
   
   #### Maquinas Virtuais VM
   
      - Criar instância > renomei (opcional) > selecione a região > configure a máquina > selecione o disco de inicialização (Sistema operacional) > 
      - Em firewall selecione "Permitir tráfego HTTP" > Clique em "CRIAR"
    * Deixamos as configurações padrões tanto da máquina quanto do SO pois, são mais que suficiente para o projeto em questão
  <div>
     <img width="400" alt="vm" src="https://user-images.githubusercontent.com/75585553/154125662-ed5ac213-c3b7-43bb-bd20-a11da7e29be4.png">
     <img width="400" alt="vm" src="https://user-images.githubusercontent.com/75585553/154126105-eb8c5761-c207-4e04-8382-dbd96bc99571.png">
     <img width="400" alt="vm" src="https://user-images.githubusercontent.com/75585553/154126330-c30ede46-486b-485c-9c94-51de303c7f6c.png">
   </div>
   
   #### Terminadas as configurações, iremos agora nos conectar à máquina criada. Em seguida, seguiremos uma série de comandos para enfim fazer o deploy da aplicação:
   
   <img width="926" alt="vm" src="https://user-images.githubusercontent.com/75585553/154554220-6d3ec300-bb8a-4f4f-9cb0-5b9c96c0d35f.png">
   
   ### Será aberto um terminal e, a partir dele precisaremos digitar os seguintes comandos para instalar as dependências necessárias:
         - sudo apt update
         - sudo apt install git
         - git clone "repositório do projeto"
         - cd "pasta-do-projeto"
         - curl -fsSl  https://deb.nodesource.com/setup_14.x | sudo -E bash -
         - sudo apt-get install -y nodejs
         - npm i
         - npm run-script build
         - sudo npm install -g serve
         - sudo serve -l 80 -s build
         
   #### Pronto, você receberá a seguinte mensagem:
   <img width="404" alt="vm" src="https://user-images.githubusercontent.com/75585553/154557178-d75b4b5e-76b3-4f6b-8ee9-73ace3ad33fb.png">
   
   Ao retornar para página do Google Cloud, você poderá observar a informação IP externo preenchida. Pode pegar esse link e enviar pra seus amigos que eles conseguirão       visualizar seu projeto.
   
<img width="901" alt="vm" src="https://user-images.githubusercontent.com/75585553/154557643-1bf3698c-e0e4-4447-a7de-6d758e2ad146.png">


   #### Deploy com a imagem Docker
      * Vamos seguir as seguintes orientações após ter excluído o projeto anterior
      
##### * As configurações do nosso arquivo Dockerfile e ngnx.config se encontram dentro do projeto.
   
   #### https://hub.docker.com/ 

   O procedimento incial é semelhante ao anterior.
      - Crie uma nova Instância de VM
      - Escolha um nome para seu projeto e faça as configurações da máquina
      -  <strong> Procure por Contêiner e selecione 'Deploy Contêiner' </strong>
      -  Selecione a imagem do contêiner
      - Escolha a política de reinicialização  (sugestão: "em caso de falha")
      - pronto, já pode confirmar 
      - Mantenha o restante das configuração iguais a da primeira VM
   
     
   




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
