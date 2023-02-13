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
  # setting {
  # name = "containerInsights"
  # value = data.aws_ecs_cluster.ecs-test.setting.0.value
  # }
}