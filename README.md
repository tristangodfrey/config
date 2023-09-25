# Figure

YAML-based configuration library for NodeJS/TypeScript.
Uses JSON schema to validate configurations and provide additional metadata.

## Implementations

- TypeScript

## Installation

`npm install -g figure-config`

`npm install figure --save`

## Getting started

### Create a configuration schema

Figure will look for a configuration schema named "schema.yaml" in the configuration directory.

File: `config/schema.yaml`
```yaml
title: "Figure CLI config"
type: object
properties:
  azureDevops:
    type: object
    properties:
      pat:
        type: string
        env: "AZURE_PAT" #Figure will use this environment variable as a value for this property if present
      organisation:
        type: string
        env: "AZURE_ORG"
      project:
        type: string
        env: "AZURE_PROJECT"
    required:
      - pat
      - organisation
      - project
required:
  - azureDevops
```

### Additional metadata

`env: "ENVIRONMENT_VARIABLE_NAME"` - Links a configuration property to an environment variable
`isSecret: true` - Specifies a configuration property as secret, for generating kubernetes resources + creating azure variable groups

### Create configuration

Figure will load configuration files in the following order:
- default.yaml
- <env>.yaml (where <env> is the value of `process.env.NODE_ENV`, unless overridden)

After the files have been loaded, values are substituted with corresponding environment variables (if present).

File: `config/default.yaml`
```yaml
azureDevops:
  pat: 'some_token'
  organisation: 'some_org'
  project: 'some_project'
```

File: `config/development.yaml`
```yaml
azureDevops:
  pat: 'dev_token'
```

### Generate type definitions

`figure generate -o src/config.ts`

### Instantiate configuration instance

```typescript
import figure from "figure"
import {Configuration} from "./config.ts" //Import generated type

process.env.NODE_ENV = "development"
process.env.AZURE_PROJECT = "env_project"

const config = figure<Configuration>({ configFolderPath: process.env.CONFIG_FOLDER_PATH }).config

// Value from default.yaml
console.log(config.azureDevops.pat) //"dev_token"

// Value from development.yaml
console.log(config.azureDevops.organisation) //"some_org"

// Value from process.env.AZURE_PROJECT
console.log(config.azureDevops.project) //"env_project"

```

