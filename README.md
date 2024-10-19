
# AI-in-Terminal

🚀 **AI-in-Terminal** is an AI-powered terminal tool that integrates with Hugging Face’s API to generate natural language responses right inside your terminal! No more switching between your code editor and browser to ask AI for help—get responses directly in your terminal.

## Features

- 🤖 **Seamless AI Integration**: Leverages Hugging Face API to generate natural language responses.
- ⚡ **Easy-to-Use**: Input prompts and get answers in real-time within your terminal.
- 💻 **No Setup Required**: Just use `npx` to start using the AI right away—no configuration or API key setup needed.
- 🎨 **Stylish Terminal**: Beautiful terminal experience with `chalk` for styling, `chalk-animation` for effects, and `NanoSpinner` for loading animations.

## Why This Project?

As developers, we often need to consult AI assistants for help. Instead of switching to a browser to interact with AI tools like ChatGPT, this project brings AI assistance directly into the terminal, helping you stay focused on coding without the hassle of context switching.

## Tech Stack

- **Node.js**: Backend runtime to run the tool.
- **Hugging Face API**: AI responses are powered by Hugging Face’s Inference API (no API key setup required for users).
- **Inquirer**: Manages terminal prompts.
- **Chalk**: Adds colors and styles to the terminal output.
- **chalk-animation**: Provides animations to make the terminal experience lively.
- **NanoSpinner**: Displays loading animations for better UX.

## How It Works

1. You enter a natural language prompt in your terminal.
2. The tool uses Hugging Face's Inference API (via a pre-configured API key) to process the prompt.
3. The AI-generated response is fetched and displayed in real-time in the terminal.

## Installation & Usage

To use AI-in-Terminal instantly with no setup, run the following command:

```
npx ai-in-terminal
```

This will instantly bring up the AI interface, allowing you to start typing your prompts and getting responses right inside your terminal.

### Example Usage:

```
npx ai-in-terminal
```

You'll be prompted to enter a natural language input, and the AI response will be displayed shortly.

## No API Key Needed!

This tool comes with a pre-configured Hugging Face API key, so you don’t need to set up your own API key to use the tool. Just run the `npx` command and start interacting with the AI instantly!

## Contributing

Feel free to submit pull requests, suggest features, or open issues. Contributions are always welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or feedback, feel free to reach out!
