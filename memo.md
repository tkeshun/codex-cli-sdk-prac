https://developers.openai.com/codex/sdk/
https://github.com/openai/codex/tree/main


.gitがないと動かない

npm run dev

> codex-cli-sdk@1.0.0 dev
> tsx src/index.ts

/home/shun/workspace/codex-cli-sdk/node_modules/@openai/codex-sdk/src/exec.ts:174
              new Error(`Codex Exec exited with code ${code}: ${stderrBuffer.toString("utf8")}`),
              ^

Error: Codex Exec exited with code 1: Reading prompt from stdin...
Not inside a trusted directory and --skip-git-repo-check was not specified.

    at ChildProcess.<anonymous> (/home/shun/workspace/codex-cli-sdk/node_modules/@openai/codex-sdk/src/exec.ts:174:15)
    at Object.onceWrapper (node:events:623:26)
    at ChildProcess.emit (node:events:508:28)
    at ChildProcess._handle.onexit (node:internal/child_process:294:12)

Node.js v24.11.1


お天気エージェント
```
import { Codex } from "@openai/codex-sdk";

const codex = new Codex();
const thread = codex.startThread();
const turn = await thread.run("こんにちは、今日の東京の天気は？");

console.log(turn.finalResponse);
console.log(turn.items);
```

- new Codex()
  - SDK client。内部でcodexバイナリを起動する
- codex.startThread()
  - 会話セッションの作成
- thread.run()
  - １ターン分





