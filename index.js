/**
 * Generate a URL-friendly slug from the given text using AI
 * @param {string} text - The text to convert to a slug
 * @param {Object} options - Configuration options
 * @returns {Promise<string>} The generated slug
 */
async function slugai(text, options = {}) {
  const defaults = {
    model: 'gpt-4',
    apikey: '',
    baseurl: 'api.openai.com'
  };

  const config = { ...defaults, ...options };

  if (!config.apikey) {
    throw new Error('OpenAI API key is required');
  }

  try {
    const prompt = `Convert the following text into a URL-friendly slug. 
      The slug should:
      - Be translated into English
      - Use hyphens to separate words
      - Be lowercase
      - Only contain alphanumeric characters and hyphens
      - Be concise and focus on the main topic
      - Not contain any special characters or spaces
      
      Text: "${text}"
      
      Respond with ONLY the slug, no explanations or additional text.`;

    const response = await fetch(`https://${config.baseurl}/v1/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.apikey}`
      },
      body: JSON.stringify({
        model: config.model,
        messages: [
          {
            role: "system",
            content: "You are a URL slug generator that creates concise, SEO-friendly slugs."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.3,
        max_tokens: 50
      })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'AI processing failed');
    }

    const completion = await response.json();
    return completion.choices[0].message.content.trim();
  } catch (error) {
    throw new Error(`Slug generation failed: ${error.message}`);
  }
}

export default slugai;
