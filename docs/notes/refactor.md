# Refactor

First things first:

We need tests for everything, this is critical. Code should be broken up into smaller pieces to improve
the testability of the system. We should prioritise unit tests over integration tests.

## Starting point:

Some tasks to begin with:


- [ ] When converting a configuration into a configmap, we need to ensure that number & boolean values are properly converted into strings (JSON.stringify?) 
- []



Notes:

How do we handle arrays? We would want to convert to CSV string values.




# High level overview of what the library does

1: Load schema
2: Load configuration (either from config files or env variables)
    2.1: Parse/transform env variables
    (e.g. make sure that CSV gets converted to array, for YAML/JSON this will already be the case after loading)
    2.2: Parse config files 
3: Validate the configuration against the schema
    3.1: If configuration is invalid, return validation errors
    3.2: If configuration is valid, return the configuration object
