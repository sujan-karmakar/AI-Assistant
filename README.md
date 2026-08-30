# AI Personal Assistant

This is a basic Flask web application that integrates with the Groq API via the OpenAI Python SDK to answer general queries and summarize emails.

## Features

- Ask Anything form for general questions.
- Email Summarization form for condensing long text.
- Flask backend with Jinja templates
- Modern dark interface with square, bordered form elements.
- Processing state shown while requests are running.

## Project Structure

- `main.py` - Flask application and route definitions
- `templates/index.html` - UI for the assistant
- `static/style.css` - dark styling for the page
- `static/script.js` - JavaScript for processing messages and form behavior
- `ai_personal_assistant.ipynb` - notebook containing the assistant logic

## Requirements

- Python 3.9+
- Flask
- ipynb
- dotenv (optional, if you are using environment variables)

Install dependencies:

```bash
pip install flask ipynb python-dotenv
```

## Running the App

From the project root, start the Flask server:

```bash
python main.py
```

Or

```bash
flask --app main --debug run
```

Then open:

```text
http://127.0.0.1:5000/
```

## Routes

- `GET /` - renders the main assistant page
- `POST /ask` - handles general question requests
- `POST /summarize` - handles email summarization requests

## How it Works

The Flask app imports the notebook helper and calls methods such as:
- `PersonalAssistent().ans_query(question)`
- `PersonalAssistent().summarize_email(email)`

These results are then displayed in the browser UI.
