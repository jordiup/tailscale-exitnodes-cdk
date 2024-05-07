#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import {
	TailscaleExitnodesCdkStack,
	ExitNodeProps,
} from '../lib/tailscale-exitnodes-cdk-stack';

const app = new cdk.App();

const tailscaleAuthKey = process.env.TAILSCALE_AUTH_KEY!;

const stackForRegion = function (
	id: string,
	region: string,
	exitNodeName: string
) {
	return new TailscaleExitnodesCdkStack(app, id, {
		tailscaleAuthKey,
		exitNodeName,
		env: {
			region: region,
		},
	});
};

const stacks = [
	stackForRegion('ExitNodesStackMumbai24', 'ap-south-1', 'TSMumbaiExitNode2'),
];
