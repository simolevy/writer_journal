import './Generate.css';
import { useState } from 'react';

export function Generate() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);

const handleGenerate = async () => {
  setLoading(true);
  setPrompt('');

  try {
    if (!window.puter) {
      throw new Error('Puter.js not loaded');
    }

    const response = await window.puter.ai.chat(
      "Give me a five word creative writing prompt for a journal entry.",
      { model: "gpt-4.1-nano" }
    );

    const messageContent = response?.message?.content || 'No prompt found.';
    setPrompt(messageContent);

  } catch (err) {
    console.error('Error generating prompt:', err);
    setPrompt('Error occurred.');
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="generate">
      <button onClick={handleGenerate} disabled={loading}>
        {loading ? 'Generating...' : 'AI Generate Journal Prompt'}
      </button>
      {prompt && (
        <div className="generated-prompt">
          <h3>Your Prompt:</h3>
          <p>{prompt}</p>
        </div>
      )}
    </div>
  );
}
