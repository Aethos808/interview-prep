**Things to do to make our app useable on the internet**
- hosting in aws
    - set up networking (overview here: https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/welcome-dns-service.html)
        - ☑ buying domain
        - ☑ create a cluster to host your app
            - ☑ this will come with a load balancer
            - ☑ after creating, go to AWS Management Console > ECS > clusters > (your-cluster-name) > click (your-task-name).
            The public IP used to access the service will be listed under Details > Network > Public IP     
        - ☑ dns
            - ☑ in your hosted zone (should be created automatically when domain is registered)
            create records to route different types of traffic           
        - ☑ enable HTTPS
            - ☑ create SSL cert in AWS ACM
            - ☑ Open https port (443) in your EC2 instances
              - ☑ add a record to your Hosted Zone in Route 53 (it can do this for you automatically when you create the cert)
                - ☑ you will need to configure the record to allow traffic from the hosted zone to the service IP
                  - ☑ add a listener in the EC2 load balancer linked to the cert
        - vpc
        - subnets
        - ☑ security groups
    - create terraform as a backup
  - Deploy app into ECS
    - create repos in ecr
        - ☑ cost-service repo
        - tax service repo
    - make sure you have aws-cli installed on your machine (check resources for download link and instructions)
    - add SSL cert to client requests
  - show app on our website
- set up CICD (in GHA, or Jenkins)
    - create merge/deployment plan
    - create rollback plan
    - test deployments
    - set up terraform backup
- host relevant data in some db (should probably do one SQL db and one NOSQL db)
    - maybe AWS Aurora?
    - add CICD job to remove stuff from db safely
- maybe later move to hosting in kubernetes?
    - local testing of kubernetes environment
    - set up EKS
    - update CICD to reflect the new deployment location and structure

- **nice to haves**
    - use helm with kubernetes configuration
    - rewrite service to use AWS Lambda
    - set up health checking through AWS Route 53
    - set up separate hosted zones/subdomains for each microservice
        - you will likely need at least an NS record pointing to each subdomain (https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/ResourceRecordTypes.html#NSFormat)
    - add interaction with amazon s3, and KMS

RESOURCES:
- AWS Cli
  - https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html
- Domain Name
    - thisismytestaws.click
- Networking
    - DNS (using Amazon Route 53 - Amazon's DNS service)
        - Routing internet traffic overview: https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/welcome-dns-service.html
        - Resource Records explained: https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/rrsets-working-with.html 
        - Resource record types for DNS: https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/ResourceRecordTypes.html#NSFormat
        - Public Hosted Zones explained: https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/AboutHZWorkingWith.html
    - SSL
        - Mainly for aws cert manager and domain validation https://www.voidkat.com/aws-adding-ssl/#:~:text=Adding%20HTTPS%20to%20Route%2053%20domains%20on%20AWS,Apply%20HTTPS%20for%20Static%20Websites%20on%20S3%20
        - https://exanubes.com/blog/adding-ssl-certificate-to-fargate-app


**To set up AWS API Gateway with a new ECS cluster, you will need to follow these steps:**

1. Create an ECS cluster: In the AWS Management Console, navigate to the ECS service and create a new cluster. 
   You will need to give the cluster a name and select the region in which you want to create it.

2. Create a task definition: A task definition is a blueprint that describes how a container should be deployed and run. 
   You can create a task definition by using the ECS console, or by using the AWS CLI or SDK.

3. Register the task definition: Once you have created a task definition, you will need to register it with your ECS cluster. 
   This will make the task available to be run on the container instances in your cluster.

4. Create a service: A service is used to run and maintain a specified number of instances of a task definition. 
   You can create a service by using the ECS console, or by using the AWS CLI or SDK.

5. Create an API Gateway: In the AWS Management Console, navigate to the API Gateway service and create a new API.

6. Create a resource and method: Once your API is created, you will need to create a resource and method for your API. 
   This is where you will specify the path for your API and the type of request it will handle (e.g. GET, POST, etc.).

7. Connect the API Gateway to your ECS service: After you have created your resource and method, you will need to connect it to your 
   ECS service. This is done by creating an "Integration" between the API Gateway