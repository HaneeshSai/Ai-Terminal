#!/usr/bin/env node

import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import chalk from "chalk";
import { createSpinner } from "nanospinner";
import { HfInference } from "@huggingface/inference";

const hf = new HfInference("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");
const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));
const welcome = async () => {
  const rainbow = chalkAnimation.rainbow("HEYY! I am an AI Terminal").start();
  console.log("type .clear and .exit to clear and exit the session");

  await sleep();
  rainbow.stop();

  await getPrompt();
};

const getApi = async () => {};

const hfResponseStream = async (prompt) => {
  const loading = createSpinner("Fetching Response...").start();

  let firstToken = true;

  for await (const output of hf.textGenerationStream({
    model: "mistralai/Mistral-7B-Instruct-v0.3",
    inputs: prompt,
    parameters: {
      max_new_tokens: 500,
      do_sample: true,
      temperature: 0.7,
    },
  })) {
    if (firstToken) {
      loading.stop();
      firstToken = false;
    }

    if (output.token.text !== "</s>") {
      process.stdout.write(chalk.cyan(output.token.text));
    }
  }

  console.log("\n");
  await getPrompt();
};

const handleResponse = async (prompt) => {
  if (prompt[0] === ".") {
    switch (prompt.substring(1)) {
      case "exit":
        process.exit(0);
        break;

      case "clear":
        console.clear();
        await getPrompt();
        return;
        break;

      default:
        break;
    }
  }

  await hfResponseStream(prompt);
};

const getPrompt = async () => {
  const response = await inquirer.prompt({
    name: "prompt",
    type: "input",
    message: "Prompt: ",
    default() {
      return "";
    },
  });

  handleResponse(response.prompt);
};

await welcome();
