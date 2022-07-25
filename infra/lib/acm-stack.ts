import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as ssm from 'aws-cdk-lib/aws-ssm';

type AcmStackProps = StackProps & {
  domainName: string;
};

export class AcmStack extends Stack {
  constructor(scope: Construct, id: string, props: AcmStackProps) {
    super(scope, id, props);

    const certificate = new acm.Certificate(this, 'CloudflareCertificate', {
      domainName: props.domainName,
      validation: acm.CertificateValidation.fromDns(),
    });

    new ssm.StringParameter(this, 'CloudflareCertificateArnSSMParam', {
      parameterName: 'PERSONAL_WEBSITE_CLOUDFLARE_CERTIFICATE_ARN',
      description: 'Personal website Cloudflare Certificate ARN',
      stringValue: certificate.certificateArn,
    });
  }
}
