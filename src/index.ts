import { Codex } from "@openai/codex-sdk";

const codex = new Codex();
const thread = codex.startThread();
const turn = await thread.run("こんにちは、今日の東京の天気は？");

console.log(turn.finalResponse);
console.log(turn.items);