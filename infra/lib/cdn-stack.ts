import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import { SSMParameterReader } from './custom/ssm-parameter-reader';
import { ViewerProtocolPolicy } from 'aws-cdk-lib/aws-cloudfront';

type CdnStackProps = StackProps & {
  websiteBucket: s3.Bucket;
  domainName: string;
  certificateSSMParameterName: string;
};

export class CdnStack extends Stack {
  constructor(scope: Construct, id: string, props: CdnStackProps) {
    super(scope, id, props);

    const certificateArn = new SSMParameterReader(
      this,
      'ACMCertificateArnReader',
      {
        parameterName: props.certificateSSMParameterName,
        region: 'us-east-1',
      }
    ).getParameterValue();

    const certificate = acm.Certificate.fromCertificateArn(
      this,
      'CloudflareCertificate',
      certificateArn
    );

    new cloudfront.Distribution(this, 'WebsiteDistribution', {
      domainNames: [props.domainName],
      defaultRootObject: 'index.html',
      defaultBehavior: {
        origin: new origins.S3Origin(props.websiteBucket),
        viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
      certificate: certificate,
    });
  }
}
