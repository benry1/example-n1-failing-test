# Example of tests failing

Environment:

- Node v18+
- Latest NTS cli, sdk, compiler as of 6/15/25

## Steps to Reproduce

1. `pnpm i` + `pnpm i @n1xyz/cli` to install a cli local to the project
2. `pnpm exec n1 app dev` - notice this fails due to chokidar dependnecy not being met by the CLI
3. `pnpm i chokidar`
4. `pnpm exec n1 app dev` - works now
5. `Enter command: run` - Error on line 1 of the test file (import) -**SyntaxError: Cannot use import statement outside a module**

## Steps to make it work

1. `pnpm i typescript`
2. `pnpm exec tsc tests/counter.test.ts` - compile the counter test to common JS
3. `pnpm exec n1 app dev` + `run` - Run the tests as normal. The new commonJS works fine, the old typescript file fails
