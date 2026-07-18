const n=`---
title: "Terraform Multi-Account AWS Architecture at Scale"
date: "2024-09-20"
tags: ["Terraform", "AWS", "IaC", "Multi-Account"]
summary: "How to structure Terraform code for managing hundreds of AWS accounts without losing your mind — patterns, modules, and lessons from production."
readingTime: 10
---

# Terraform Multi-Account AWS Architecture at Scale

Managing AWS infrastructure across multiple accounts with Terraform is one of the most common challenges in enterprise cloud engineering. Here's the battle-tested approach I use.

## The Problem with Naive Multi-Account Terraform

Most teams start with a single \`main.tf\` and quickly find themselves with:

- Hundreds of copy-pasted resource blocks
- Impossible-to-maintain state files
- No clear separation between environments
- IAM role confusion across accounts

## The Solution: Module-Based Architecture

\`\`\`hcl
# modules/networking/vpc/main.tf
module "vpc" {
  source = "terraform-aws-modules/vpc/aws"
  version = "5.1.0"
  
  name = var.vpc_name
  cidr = var.vpc_cidr
  
  azs             = var.availability_zones
  private_subnets = var.private_subnet_cidrs
  public_subnets  = var.public_subnet_cidrs
  
  enable_nat_gateway = true
  single_nat_gateway = var.environment == "dev"
  
  tags = local.common_tags
}
\`\`\`

## Account Structure

A well-designed account structure is foundational:

\`\`\`
Root Management Account
├── Security Account (CloudTrail, Security Hub, GuardDuty)
├── Logging Account (Centralized logs)
├── Shared Services Account (Shared infrastructure)
├── Production OU
│   ├── Prod Account A
│   └── Prod Account B
└── Development OU
    ├── Dev Account A
    └── Staging Account
\`\`\`

## Remote State Strategy

Use S3 + DynamoDB for remote state with account-specific prefixes:

\`\`\`hcl
terraform {
  backend "s3" {
    bucket         = "company-terraform-state"
    key            = "accounts/prod-app/networking/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-state-lock"
    encrypt        = true
  }
}
\`\`\`

## Lessons Learned

1. **State isolation is non-negotiable** — one state file per environment per component
2. **Use workspace sparingly** — account-per-environment is cleaner than Terraform workspaces
3. **Module versioning matters** — pin module versions in production
4. **Test with Terratest** — especially for complex networking modules
`;export{n as default};
