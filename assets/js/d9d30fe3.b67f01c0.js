"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[5007],{2701:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>t,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(4848),o=n(8453);const a={title:"Argo Workflows on EKS",sidebar_position:4},t="Argo Workflows on EKS",l={id:"blueprints/job-schedulers/argo-workflows-eks",title:"Argo Workflows on EKS",description:"Argo Workflows is an open source container-native workflow engine for orchestrating parallel jobs on Kubernetes. It is implemented as a Kubernetes CRD (Custom Resource Definition). As a result, Argo workflows can be managed using kubectl and natively integrates with other Kubernetes services such as volumes, secrets, and RBAC.",source:"@site/docs/blueprints/job-schedulers/argo-workflows-eks.md",sourceDirName:"blueprints/job-schedulers",slug:"/blueprints/job-schedulers/argo-workflows-eks",permalink:"/data-on-eks/docs/blueprints/job-schedulers/argo-workflows-eks",draft:!1,unlisted:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/blueprints/job-schedulers/argo-workflows-eks.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Argo Workflows on EKS",sidebar_position:4},sidebar:"blueprints",previous:{title:"Airflow on EKS",permalink:"/data-on-eks/docs/blueprints/job-schedulers/self-managed-airflow"},next:{title:"Streaming Platforms on EKS",permalink:"/data-on-eks/docs/category/streaming-platforms-on-eks"}},i={},c=[{value:"Prerequisites:",id:"prerequisites",level:2},{value:"Deploy",id:"deploy",level:2},{value:"Validate",id:"validate",level:2},{value:"Run <code>update-kubeconfig</code> command:",id:"run-update-kubeconfig-command",level:3},{value:"List the nodes",id:"list-the-nodes",level:3},{value:"List the namespaces in EKS cluster",id:"list-the-namespaces-in-eks-cluster",level:3},{value:"Access Argo Workflow WebUI",id:"access-argo-workflow-webui",level:3},{value:"Submit Spark Job with Argo Workflow",id:"submit-spark-job-with-argo-workflow",level:3},{value:"Submit Spark Job with Spark Operator and Argo Workflow",id:"submit-spark-job-with-spark-operator-and-argo-workflow",level:3},{value:"Trigger a workflow to create a spark job based on SQS message",id:"trigger-a-workflow-to-create-a-spark-job-based-on-sqs-message",level:2},{value:"Install eventbus which is for event transmission in argo events",id:"install-eventbus-which-is-for-event-transmission-in-argo-events",level:3},{value:"Deploy <code>eventsource-sqs.yaml</code> to link with external SQS",id:"deploy-eventsource-sqsyaml-to-link-with-external-sqs",level:3},{value:"Deploy <code>sensor-rbac.yaml</code> and <code>sensor-sqs-spark-crossns.yaml</code> for triggering workflow",id:"deploy-sensor-rbacyaml-and-sensor-sqs-spark-crossnsyaml-for-triggering-workflow",level:3},{value:"Verify argo-events namespace",id:"verify-argo-events-namespace",level:3},{value:"Test from SQS",id:"test-from-sqs",level:3},{value:"Destroy",id:"destroy",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"argo-workflows-on-eks",children:"Argo Workflows on EKS"}),"\n",(0,r.jsx)(s.p,{children:"Argo Workflows is an open source container-native workflow engine for orchestrating parallel jobs on Kubernetes. It is implemented as a Kubernetes CRD (Custom Resource Definition). As a result, Argo workflows can be managed using kubectl and natively integrates with other Kubernetes services such as volumes, secrets, and RBAC."}),"\n",(0,r.jsxs)(s.p,{children:["The example demonstrates how to use ",(0,r.jsx)(s.a,{href:"https://argoproj.github.io/argo-workflows/",children:"Argo Workflows"})," to assign jobs to Amazon EKS."]}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:"Use Argo Workflows to create a spark job."}),"\n",(0,r.jsx)(s.li,{children:"Use Argo Workflows to create a spark job through spark operator."}),"\n",(0,r.jsxs)(s.li,{children:["Trigger Argo Workflows to create a spark job based on Amazon SQS message insert event by using ",(0,r.jsx)(s.a,{href:"https://argoproj.github.io/argo-events/",children:"Argo Events"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"https://github.com/awslabs/data-on-eks/tree/main/schedulers/terraform/argo-workflow",children:"Code repo"})," for this example."]}),"\n",(0,r.jsx)(s.h2,{id:"prerequisites",children:"Prerequisites:"}),"\n",(0,r.jsx)(s.p,{children:"Ensure that you have the following tools installed locally:"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html",children:"aws cli"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://Kubernetes.io/docs/tasks/tools/",children:"kubectl"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://learn.hashicorp.com/tutorials/terraform/install-cli",children:"terraform"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://github.com/argoproj/argo-workflows/releases/latest",children:"Argo WorkflowCLI"})}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"deploy",children:"Deploy"}),"\n",(0,r.jsx)(s.p,{children:"To provision this example:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"git clone https://github.com/awslabs/data-on-eks.git\ncd data-on-eks/schedulers/terraform/argo-workflow\n\nregion=<your region> # set region variable for following commands\nterraform init\nterraform apply -var region=$region #defaults to us-west-2\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Enter ",(0,r.jsx)(s.code,{children:"yes"})," at command prompt to apply"]}),"\n",(0,r.jsx)(s.p,{children:"The following components are provisioned in your environment:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"A sample VPC, 2 Private Subnets and 2 Public Subnets"}),"\n",(0,r.jsx)(s.li,{children:"Internet gateway for Public Subnets and NAT Gateway for Private Subnets"}),"\n",(0,r.jsx)(s.li,{children:"EKS Cluster Control plane with one managed node group"}),"\n",(0,r.jsx)(s.li,{children:"EKS Managed Add-ons: VPC_CNI, CoreDNS, Kube_Proxy, EBS_CSI_Driver"}),"\n",(0,r.jsx)(s.li,{children:"K8S Metrics Server, CoreDNS Autoscaler, Cluster Autoscaler, AWS for FluentBit, Karpenter, Argo Workflows, Argo Events, Kube Prometheus Stack, Spark Operator and Yunikorn Scheduler"}),"\n",(0,r.jsx)(s.li,{children:"K8s roles and rolebindings for Argo Workflows and Argo Events"}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"terraform-output",src:n(342).A+"",width:"812",height:"94"})}),"\n",(0,r.jsx)(s.h2,{id:"validate",children:"Validate"}),"\n",(0,r.jsxs)(s.p,{children:["The following command will update the ",(0,r.jsx)(s.code,{children:"kubeconfig"})," on your local machine and allow you to interact with your EKS Cluster using ",(0,r.jsx)(s.code,{children:"kubectl"})," to validate the deployment."]}),"\n",(0,r.jsxs)(s.h3,{id:"run-update-kubeconfig-command",children:["Run ",(0,r.jsx)(s.code,{children:"update-kubeconfig"})," command:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"aws eks --region eu-west-1 update-kubeconfig --name argoworkflows-eks\n"})}),"\n",(0,r.jsx)(s.h3,{id:"list-the-nodes",children:"List the nodes"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"kubectl get nodes\n\n# Output should look like below\nNAME                                       STATUS   ROLES    AGE   VERSION\nip-10-1-0-189.eu-west-1.compute.internal   Ready    <none>   10m   v1.27.3-eks-a5565ad\nip-10-1-0-240.eu-west-1.compute.internal   Ready    <none>   10m   v1.27.3-eks-a5565ad\nip-10-1-1-135.eu-west-1.compute.internal   Ready    <none>   10m   v1.27.3-eks-a5565ad\n"})}),"\n",(0,r.jsx)(s.h3,{id:"list-the-namespaces-in-eks-cluster",children:"List the namespaces in EKS cluster"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"kubectl get ns\n\n# Output should look like below\nNAME                    STATUS   AGE\nargo-events             Active   7m45s\nargo-workflows           Active   8m25s\nspark-team-a            Active   5m51s\ndefault                 Active   25m\nkarpenter               Active   21m\nkube-node-lease         Active   25m\nkube-prometheus-stack   Active   8m5s\nkube-public             Active   25m\nkube-system             Active   25m\nspark-operator          Active   5m43s\nyunikorn                Active   5m44s\n"})}),"\n",(0,r.jsx)(s.h3,{id:"access-argo-workflow-webui",children:"Access Argo Workflow WebUI"}),"\n",(0,r.jsx)(s.p,{children:"Get the load balancer url:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"kubectl -n argo-workflows get service argo-workflows-server -o jsonpath=\"{.status.loadBalancer.ingress[*].hostname}{'\\n'}\"\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Copy and paste the result in your browser.\nThe initial username is ",(0,r.jsx)(s.code,{children:"admin"}),". The login token is autogenerated and you can get it by running the following command:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"argo auth token # get login token\n\n# result:\nBearer k8s-aws-v1.aHR0cHM6Ly9zdHMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vP0FjdGlvbj1HZXRDYWxsZXJJZGVudGl0eSZWZXJzaW9uPTIwMTEtMDYtMTUmWC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNWNFhDV1dLUjZGVTRGMiUyRjIwMjIxMDEzJTJGdXMtd2VzdC0yJTJGc3RzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyMjEwMTNUMDIyODAyWiZYLUFtei1FeHBpcmVzPTYwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCUzQngtazhzLWF3cy1pZCZYLUFtei1TaWduYXR1cmU9NmZiNmMxYmQ0MDQyMWIwNTI3NjY4MzZhMGJiNmUzNjg1MTk1YmM0NDQzMjIyMTg5ZDNmZmE1YzJjZmRiMjc4OA\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"argo-workflow-login",src:n(6589).A+"",width:"1568",height:"764"})}),"\n",(0,r.jsx)(s.h3,{id:"submit-spark-job-with-argo-workflow",children:"Submit Spark Job with Argo Workflow"}),"\n",(0,r.jsxs)(s.p,{children:["Export EKS API from ",(0,r.jsx)(s.code,{children:"terraform output"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'eks_api_url=https://ABCDEFG1234567890.yl4.eu-west-2.eks.amazonaws.com\n\ncat workflow-examples/argo-spark.yaml | sed "s/<your_eks_api_server_url>/$eks_api_url/g" | kubectl apply -f -\n\nkubectl get wf -n argo-workflows\nNAME    STATUS    AGE   MESSAGE\nspark   Running   8s\n'})}),"\n",(0,r.jsx)(s.p,{children:"You can also check the workflow status from Web UI"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"argo-wf-spark",src:n(7345).A+"",width:"1904",height:"776"})}),"\n",(0,r.jsx)(s.h3,{id:"submit-spark-job-with-spark-operator-and-argo-workflow",children:"Submit Spark Job with Spark Operator and Argo Workflow"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"kubectl apply -f workflow-examples/argo-spark-operator.yaml\n\nkubectl get wf -n argo-workflows\nNAME             STATUS      AGE     MESSAGE\nspark            Succeeded   3m58s\nspark-operator   Running     5s\n"})}),"\n",(0,r.jsx)(s.p,{children:"The workflow status from web UI"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"argo-wf-spark-operator",src:n(4328).A+"",width:"1710",height:"790"})}),"\n",(0,r.jsx)(s.h2,{id:"trigger-a-workflow-to-create-a-spark-job-based-on-sqs-message",children:"Trigger a workflow to create a spark job based on SQS message"}),"\n",(0,r.jsxs)(s.h3,{id:"install-eventbus-which-is-for-event-transmission-in-argo-events",children:["Install ",(0,r.jsx)(s.a,{href:"https://argoproj.github.io/argo-events/eventbus/eventbus/",children:"eventbus"})," which is for event transmission in argo events"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"kubectl apply -f argo-events-manifests/eventbus.yaml\n"})}),"\n",(0,r.jsxs)(s.h3,{id:"deploy-eventsource-sqsyaml-to-link-with-external-sqs",children:["Deploy ",(0,r.jsx)(s.code,{children:"eventsource-sqs.yaml"})," to link with external SQS"]}),"\n",(0,r.jsxs)(s.p,{children:["In this case, we configure a EventSource to license to the queue ",(0,r.jsx)(s.code,{children:"test1"})," in region ",(0,r.jsx)(s.code,{children:"us-east-1"}),". The eventsource is capable of monitoring events across regions, so the Amazon EKS cluster and Amazon SQS queue don\u2019t need to be located in the same Region."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'queue_name=test1\nregion_sqs=us-east-1\n\ncat argo-events-manifests/eventsource-sqs.yaml | sed "s/<region_sqs>/$region_sqs/g;s/<queue_name>/$queue_name/g" | kubectl apply -f -\n'})}),"\n",(0,r.jsx)(s.p,{children:"Let's create that queue in your account."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'# create a queue\nqueue_url=$(aws sqs create-queue --queue-name $queue_name --region $region_sqs --output text)\n\n# get your queue arn\nsqs_queue_arn=$(aws sqs get-queue-attributes --queue-url $queue_url --attribute-names QueueArn --region $region_sqs --query "Attributes.QueueArn" --output text)\n\ntemplate=`cat argo-events-manifests/sqs-accesspolicy.json | sed -e "s|<sqs_queue_arn>|$sqs_queue_arn|g;s|<your_event_irsa_arn>|$your_event_irsa_arn|g"`\n\naws sqs set-queue-attributes --queue-url $queue_url --attributes $template --region $region_sqs\n'})}),"\n",(0,r.jsxs)(s.h3,{id:"deploy-sensor-rbacyaml-and-sensor-sqs-spark-crossnsyaml-for-triggering-workflow",children:["Deploy ",(0,r.jsx)(s.code,{children:"sensor-rbac.yaml"})," and ",(0,r.jsx)(s.code,{children:"sensor-sqs-spark-crossns.yaml"})," for triggering workflow"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"kubectl apply -f argo-events-manifests/sensor-rbac.yaml\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"cd workflow-examples\n"})}),"\n",(0,r.jsx)(s.p,{children:"Update the variables in Shell script and execute"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"./taxi-trip-execute.sh\n"})}),"\n",(0,r.jsx)(s.p,{children:"Update YAML file and run the below command"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"kubectl apply -f sensor-sqs-sparkjobs.yaml\n"})}),"\n",(0,r.jsx)(s.h3,{id:"verify-argo-events-namespace",children:"Verify argo-events namespace"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"kubectl get all,eventbus,EventSource,sensor,sa,role,rolebinding -n argo-events\n\n# Output should look like below\nNAME                                                      READY   STATUS    RESTARTS   AGE\npod/argo-events-controller-manager-bfb894cdb-26qw7        1/1     Running   0          18m\npod/aws-sqs-crossns-spark-sensor-zkgz5-6584787c47-zjm9p   1/1     Running   0          44s\npod/aws-sqs-eventsource-544jd-8fccc6f8-w6ssd              1/1     Running   0          4m45s\npod/eventbus-default-stan-0                               2/2     Running   0          5m21s\npod/eventbus-default-stan-1                               2/2     Running   0          5m13s\npod/eventbus-default-stan-2                               2/2     Running   0          5m11s\npod/events-webhook-6f8d9fdc79-l9q9w                       1/1     Running   0          18m\n\nNAME                                TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)                      AGE\nservice/eventbus-default-stan-svc   ClusterIP   None           <none>        4222/TCP,6222/TCP,8222/TCP   5m21s\nservice/events-webhook              ClusterIP   172.20.4.211   <none>        443/TCP                      18m\n\nNAME                                                 READY   UP-TO-DATE   AVAILABLE   AGE\ndeployment.apps/argo-events-controller-manager       1/1     1            1           18m\ndeployment.apps/aws-sqs-crossns-spark-sensor-zkgz5   1/1     1            1           44s\ndeployment.apps/aws-sqs-eventsource-544jd            1/1     1            1           4m45s\ndeployment.apps/events-webhook                       1/1     1            1           18m\n\nNAME                                                            DESIRED   CURRENT   READY   AGE\nreplicaset.apps/argo-events-controller-manager-bfb894cdb        1         1         1       18m\nreplicaset.apps/aws-sqs-crossns-spark-sensor-zkgz5-6584787c47   1         1         1       44s\nreplicaset.apps/aws-sqs-eventsource-544jd-8fccc6f8              1         1         1       4m45s\nreplicaset.apps/events-webhook-6f8d9fdc79                       1         1         1       18m\n\nNAME                                     READY   AGE\nstatefulset.apps/eventbus-default-stan   3/3     5m21s\n\nNAME                           AGE\neventbus.argoproj.io/default   5m22s\n\nNAME                              AGE\neventsource.argoproj.io/aws-sqs   4m46s\n\nNAME                                       AGE\nsensor.argoproj.io/aws-sqs-crossns-spark   45s\n\nNAME                                            SECRETS   AGE\nserviceaccount/argo-events-controller-manager   0         18m\nserviceaccount/argo-events-events-webhook       0         18m\nserviceaccount/default                          0         18m\nserviceaccount/event-sa                         0         16m\nserviceaccount/operate-workflow-sa              0         53s\n\nNAME                                                   CREATED AT\nrole.rbac.authorization.k8s.io/operate-workflow-role   2023-07-24T18:52:30Z\n\nNAME                                                                  ROLE                         AGE\nrolebinding.rbac.authorization.k8s.io/operate-workflow-role-binding   Role/operate-workflow-role   52s\n"})}),"\n",(0,r.jsx)(s.h3,{id:"test-from-sqs",children:"Test from SQS"}),"\n",(0,r.jsxs)(s.p,{children:["Send a message from SQS: ",(0,r.jsx)(s.code,{children:'{"message": "hello"}'})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'aws sqs send-message --queue-url $queue_url --message-body \'{"message": "hello"}\' --region $region_sqs\n'})}),"\n",(0,r.jsx)(s.p,{children:"Argo Events would capture the message and trigger Argo Workflows to create a workflow for spark jobs."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"kubectl get wf -A\n\n# Output should look like below\nNAMESPACE        NAME                           STATUS    AGE   MESSAGE\nargo-workflows   aws-sqs-spark-workflow-hh79p   Running   11s\n"})}),"\n",(0,r.jsx)(s.p,{children:"Run the command below to check spark application driver pods and executor pods under spark-team-a namespace."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"kubectl get po -n spark-team-a\n\n# Output should look like below\nNAME                               READY   STATUS    RESTARTS   AGE\nevent-wf-sparkapp-tcxl8-driver     1/1     Running   0          45s\npythonpi-a72f5f89894363d2-exec-1   1/1     Running   0          16s\npythonpi-a72f5f89894363d2-exec-2   1/1     Running   0          16s\n"})}),"\n",(0,r.jsx)(s.p,{children:"See the SQS workflow status in web UI"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"argo-wf-spark-operator",src:n(4573).A+"",width:"3956",height:"1964"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"argo-wf-spark-operator",src:n(6916).A+"",width:"3956",height:"1520"})}),"\n",(0,r.jsx)(s.h2,{id:"destroy",children:"Destroy"}),"\n",(0,r.jsx)(s.p,{children:"To teardown and remove the resources created in this example:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"kubectl delete -f argo-events-manifests/.\n\n./cleanup.sh\n"})})]})}function u(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},4328:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/argo-wf-spark-operator-ff79e6e70984bda22112c899e501e0c5.png"},7345:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/argo-wf-spark-5b904b96ed2057519c456d8717f024a6.png"},6916:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/argo-wf-sqs-spark-tree-45d26e933bee735a4a35f9c07734c033.png"},4573:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/argo-wf-sqs-spark-bdbbd935219cd810dfda7845e54848bd.png"},6589:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/argo-workflow-login-684a2020b281eb65eaf4eb5a87dddc1a.png"},342:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/terraform-output-argo-378b3afed510645f9af681a777b53316.png"},8453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>l});var r=n(6540);const o={},a=r.createContext(o);function t(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);