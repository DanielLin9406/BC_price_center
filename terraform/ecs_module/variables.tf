variable "vpc_cidr" {
  description = "VPC cidr block. Example: 10.0.0.0/16"
}

variable "environment" {
  description = "The name of the environment"
}

variable "public_subnet_cidrs" {
  type        = list(string)
  description = "List of public cidrs, you may want one per avalibility zone"
}

variable "private_subnet_cidrs" {
  type        = list(string)
  description = "List of private cidrs, you may want one per avalibility zone"
}


variable "availability_zones" {
  type        = list(string)
  description = "List of avalibility zones you want. Example: eu-west-1a and eu-west-1b"
}

variable "cluster" {
  description = "The name of the ECS cluster"
}

variable "instance_group" {
  default     = "default"
  description = "The name of the instances that you consider as a group"
}

variable "load_balancers" {
  type        = list
  default     = []
  description = "The load balancers to couple to the instances"
}

variable "instance_type" {
  description = "AWS instance type to use"
}

variable "project_name" {
  description = "tag name that can be used in aws tag editor"
}

variable "custom_userdata" {
  default     = ""
  description = "Inject extra command in the instance template to be run on boot"
}

variable "ecs_aws_ami" {
  description = "The AWS ami id to use for ECS"
}

variable "key_name" {
  description = "SSH key name to be used"
}

variable "max_size" {
  description = "Maximum size of the nodes in the cluster"
}

variable "min_size" {
  description = "Minimum size of the nodes in the cluster"
}

variable "desired_capacity" {
  description = "The desired capacity of the cluster"
}
