terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}

# Configure the AWS Provider
provider "aws" {
  region  = "us-east-1"
  profile = "terraform"
}

# Create a VPC
#resource "aws_vpc" "example" {
#  cidr_block = "10.0.0.0/16"
#}

# get data from existing AWS Cluster
data "aws_ecs_cluster" "ecs-test" {
  cluster_name = "test-cluster"
}

# data "aws_autoscaling_group" "foo" {
#   name = "foo"
# }

# resource "aws_ecs_capacity_provider" "ecs-test-capacity-provider" {
#   name = "ecs-test-capacity-provider"

#   auto_scaling_group_provider {
#     auto_scaling_group_arn = data.aws_autoscaling_group.foo.arn
#   }
# }

#create clone cluster
resource "aws_ecs_cluster" "ecs-test-clone" {
  name = "test-cluster-clone"
}

