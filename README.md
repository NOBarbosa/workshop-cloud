# Workshop Cloud

imagem do container local
docker build . -t workshop-cloud

baixe isso: https://cloud.google.com/sdk/docs/install

faça o login no gcloud

gcloud auth configure-docker
docker tag workshop-cloud gcr.io/<id-project>/workshop-cloud
gcloud docker push gcr.io/<id-project>/workshop-cloud