# Tailscale exit nodes on AWS

This is a simple CDK stack that automates the provisioning of Tailscale exit nodes on AWS. It is 
decribed in more detail in [this blog post](blog.scottgerring.com/automating-tailscale-exit-nodes-on-aws/).

To use it, simply edit [bin/tailscale-exitnodes-cdk.ts](bin/tailscale-exitnodes-cdk.ts) to list the
regions you want to use:

```typescript
  stackForRegion('ExitNodesStackSydney', 'ap-southeast-2', "TSSydneyExitNode"),
  stackForRegion('ExitNodesStackZurich', 'eu-central-2', "TSZurichExitNode")
];
```

Next, set the environment variable `TAILSCALE_AUTH_KEY` to your tailscale auth key and deploy with `cdk deploy`.

> **Warning**
> This stack deploys EC2 instances and has cost implications!

# Instructions

```bash
# update bun
bun upgrade
# install deps
bun i
# ts setup
alias tailscale="/Applications/Tailscale.app/Contents/MacOS/Tailscale"
touch .env
# use your actual authkey here
echo "TAILSCALE_AUTH_KEY=tskey-xxxxxxxxxxxxxxxxxxxxxxxx" >> .env

# assume credentials
assume jordi --ex -r ap-south-1
# bootstrap and deploy
bun cdk bootstrap
bun cdk deploy
```