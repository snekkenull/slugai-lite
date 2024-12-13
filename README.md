# slugai-lite

AI-powered slug generator that creates clean, SEO-friendly URLs. This package uses OpenAI's API to generate optimized slugs directly from any text input.

## Features

- Direct AI-powered slug generation
- Multilingual support (automatically translates to English)
- Clean, SEO-friendly output
- Minimal configuration needed

## Installation

```bash
npm install slugai-lite
```

## Usage

```javascript
import slugai from 'slugai-lite';

// Basic usage
const slug = await slugai('Hello World', {
  apikey: 'your-openai-api-key'
});
// Output: hello-world

// Multilingual example
const viSlug = await slugai('Tôi yêu ẩm thực Việt Nam', {
  apikey: 'your-openai-api-key'
});
// Output: vietnamese-cuisine

// Custom OpenAI configuration
const customSlug = await slugai('Your text here', {
  model: 'gpt-4',          // OpenAI model to use
  apikey: 'your-api-key',  // OpenAI API key (required)
  baseurl: 'api.openai.com' // API base URL
});
```

## Options

- `model` (string): OpenAI model to use (default: "gpt-4")
- `apikey` (string): OpenAI API key (required)
- `baseurl` (string): API base URL (default: "api.openai.com")

## Output Format

The generated slugs will be:
- In English
- Lowercase
- Hyphen-separated
- Clean and SEO-friendly
- Free of special characters

## License

Apache-2.0
