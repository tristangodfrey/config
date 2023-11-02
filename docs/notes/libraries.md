# Libraries

The configuration schema for a library is owned by the library.
Ideally, when booting up an application and initializing the config, the library should be able to
fetch the configuration that it cares about, without needing to know anything about the application context.

## Open Questions

Q: If a library defines a schema, how do we integrate this schema into the "parent" schema?

A: 
There's two options here
