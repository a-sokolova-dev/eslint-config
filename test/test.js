import { exec } from 'node:child_process'
import { join } from 'node:path'

const JS = `/eslint-config/test/index.js
  3:1  error  Unexpected console statement  no-console`

const TS = `/eslint-config/test/index.ts
  1:8  error  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any`

async function eslint(config, files) {
  let path = join(import.meta.dirname, files)
  let configPath = join(import.meta.dirname, '..', config)
  return new Promise(resolve => {
    exec(
      `pnpm eslint --config ${configPath} ${path}`,
      (_, stdout) => {
        let fixed = stdout.replace(
          /.*\/(eslint-config)\//g,
          '/eslint-config/'
        )
        let trimmed = fixed.replace(/✖ \d+ problems?.*/, '').trim()
        resolve(trimmed)
      }
    )
  })
}

async function check(config, files, expected) {
  let actual = await eslint(config, files)
  if (actual !== expected) {
    process.stderr.write(`Expected:\n${expected}\n`)
    process.stderr.write(`Actual:\n${actual}\n`)
    process.exit(1)
  }
}

await check('ts.js', 'index.{ts,js}', JS + '\n\n' + TS)
await check('index.js', 'index.js', JS)
