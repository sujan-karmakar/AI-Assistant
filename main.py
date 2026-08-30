from flask import Flask, render_template, request
import ipynb.fs.full.ai_personal_assistant as notebook

assistent = notebook.PersonalAssistant()

app = Flask(__name__)

app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/ask", methods=["POST"])
def ask():
    question = request.form["question"]
    answer = assistent.ans_query(question)
    return render_template("index.html", question=question, answer=answer)

@app.route("/summarize", methods=["POST"])
def summarize():
    email = request.form["email"]
    summary = assistent.summarize_email(email)
    return render_template("index.html", email=email, summary=summary)


if __name__ == "__main__":
    app.run(debug=True)