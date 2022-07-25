import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as path from 'path';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';

export class StoreStack extends Stack {
  public websiteBucket: s3.Bucket;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    this.websiteBucket = new s3.Bucket(this, 'WebsiteBucket', {
      bucketName: 'www.jsonjason.com',
      publicReadAccess: false,
    });

    new s3deploy.BucketDeployment(this, 'DeployWebsite', {
      sources: [s3deploy.Source.asset(path.join(__dirname, '../../out'))],
      destinationBucket: this.websiteBucket,
    });
  }
}
