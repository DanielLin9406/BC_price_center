module "network" {
  source = "./ecs_network"

  vpc_cidr             = var.vpc_cidr
  environment          = var.environment
  project_name         = var.project_name
  public_subnet_cidrs  = var.public_subnet_cidrs
  private_subnet_cidrs = var.private_subnet_cidrs
  availability_zones   = var.availability_zones
}


module "ecs_alb" {
  source = "./ecs_alb"

  environment       = var.environment
  project_name      = var.project_name
  cluster           = var.cluster
  vpc_id            = module.network.vpc_id
  public_subnet_ids = module.network.public_subnet_ids
  security_group_id = module.ecs_instances.ecs_instance_security_group_id

}

module "ecs_instances" {
  source = "./ecs_instances"

  environment            = var.environment
  project_name           = var.project_name
  cluster                = var.cluster
  desired_capacity       = var.desired_capacity
  instance_group         = var.instance_group
  load_balancers         = var.load_balancers
  instance_type          = var.instance_type
  max_size               = var.max_size
  min_size               = var.min_size
  custom_userdata        = var.custom_userdata
  ecs_aws_ami            = var.ecs_aws_ami
  key_name               = var.key_name
  redis_endpoint_address = module.ecs_cache.redis_endpoint_address
  depends_id             = module.network.depends_id
  vpc_id                 = module.network.vpc_id
  private_subnet_ids     = module.network.private_subnet_ids
  alb_target_group_arn   = module.ecs_alb.alb_target_group_arn
}

module "ecs_cache" {
  source = "./ecs_cache"

  vpc_id               = module.network.vpc_id
  environment          = var.environment
  project_name         = var.project_name
  private_subnet_cidrs = var.private_subnet_cidrs
  private_subnet_ids   = module.network.private_subnet_ids
}


