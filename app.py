from flask import Flask, send_from_directory, send_file
import os

app = Flask(__name__)

# Serve the main page
@app.route('/')
def index():
    return send_file('chapter_select.html')

# Serve static files (HTML, CSS, JS, images)
@app.route('/<path:filename>')
def serve_static(filename):
    return send_from_directory('.', filename)

# Serve files from images directory
@app.route('/images/<path:filename>')
def serve_images(filename):
    return send_from_directory('images', filename)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)