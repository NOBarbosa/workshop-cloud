# Workshop Cloud

### Introdução
  
### Comandos


imagem do container local
docker build . -t workshop-cloud

baixe isso: https://cloud.google.com/sdk/docs/install

faça o login no gcloud

gcloud auth configure-docker
docker tag workshop-cloud gcr.io/<id-project>/workshop-cloud
gcloud docker push gcr.io/<id-project>/workshop-cloud

docker tag workshop-cloud southamerica-east1-docker.pkg.dev/workshop-cloud-339513/workshop-cloud/front:latest
docker push southamerica-east1-docker.pkg.dev/workshop-cloud-339513/workshop-cloud/front:latest

gcloud components install kubectl

gcloud container clusters get-credentials <nome-do-cluster>