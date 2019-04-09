docker build -t maheshgprasad/multi-client:latest -t maheshgprasad/multi-client:$SHA -f ./client/Dockerfile ./client
docker build -t maheshgprasad/multi-server:latest -t maheshgprasad/multi-server:$SHA -f ./server/Dockerfile ./server
docker build -t maheshgprasad/multi-worker:latest -t maheshgprasad/multi-worker:$SHA -f ./worker/Dockerfile ./worker

docker push maheshgprasad/multi-client:latest
docker push maheshgprasad/multi-server:latest
docker push maheshgprasad/multi-worker:latest

docker push maheshgprasad/multi-client:$SHA
docker push maheshgprasad/multi-server:$SHA
docker push maheshgprasad/multi-worker:$SHA

kubectl apply -f k8s
kubectl set image deployments/server-deployment server=maheshgprasad/multi-server:$SHA
kubectl set image deployments/client-deployment client=maheshgprasad/multi-client:$SHA
kubectl set image deployments/worker-deployment worker=maheshgprasad/multi-worker:$SHA