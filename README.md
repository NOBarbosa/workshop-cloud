# Workshop Cloud

### Introdução
  
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