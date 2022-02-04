# Workshop Cloud

## Introdução
   A fim de ensinar como utilizar os recursos do  Google Cloud para fazer o deploy de uma aplicação, o GDSC UFBA preparou um workshop onde serão exibidos alguns conceitos sobre  Cloud, modelos de computação em nuvem e, um momento prático composto das seguintes etapas:
   - Escolha do projeto  
   - Instalação de ferramentas e preparação do ambiente
   - Configurações    
 
 ### Escolha do Projeto
   Utilizaremos para o deploy uma imagem docker com a aplicação de uma página construída em ReactJs.
   A criação da página não é o foco do projeto entretanto, abaixo você encontrará a descrição do processo para elaboração da mesma.
   
   #### Ferramentas e Configurações de Ambiante
      - Editor de código: VS Code
      - NodeJs + NPM
      - DOCKER 
 
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
