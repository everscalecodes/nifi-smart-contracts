# Tests
## Requirements
* Check requirements in [INSTALLATION](INSTALLATION.md).
* Run local node.
* Set up `net.test.url` and `net.test.timeout` in `config.template.ts`.
  * `net.test.timeout` is too small will crash tests.
  * `net.test.timeout` large value increases execution time.

## Run
```sh
yarn test
```

## Notes
### Tests are run sequentially
When running in parallel, the local node may give errors. Therefore, the execution time is long.

### Contract.ts
All classes for interacting with contracts extend Contract.ts. The basic concept is one instance of a class - one contract in net.

