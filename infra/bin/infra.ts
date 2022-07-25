#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { StoreStack } from '../lib/store-stack';
import { CdnStack } from '../lib/cdn-stack';
import { AcmStack } from '../lib/acm-stack';

const app = new cdk.App();

const domainName = 'jsonjason.com';
const certificateSSMParameterName =
  'PERSONAL_WEBSITE_CLOUDFLARE_CERTIFICATE_ARN';

const storeStack = new StoreStack(app, 'PersonalWebsiteStoreStack', {
  env: {
    account: process.env.CDK_DEPLOY_ACCOUNT || process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEPLOY_REGION || process.env.CDK_DEFAULT_REGION,
  },
});

const cdnStack = new CdnStack(app, 'PersonalWebsiteCdnStack', {
  env: {
    account: process.env.CDK_DEPLOY_ACCOUNT || process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEPLOY_REGION || process.env.CDK_DEFAULT_REGION,
  },
  websiteBucket: storeStack.websiteBucket,
  certificateSSMParameterName,
  domainName,
});

const acmStack = new AcmStack(app, 'PersonalWebsiteAcmStack', {
  env: {
    account: process.env.CDK_DEPLOY_ACCOUNT || process.env.CDK_DEFAULT_ACCOUNT,
    region: 'us-east-1', // ACM certificate used with CloudFront must be in us-east-1
  },
  domainName,
});
cdnStack.addDependency(acmStack);
cdnStack.addDependency(storeStack);
