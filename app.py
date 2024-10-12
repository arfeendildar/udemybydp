from flask import Flask, render_template

app = Flask(__name__)

# Function to read data from data.txt
def get_courses_from_file():
    courses = []
    # Specify 'utf-8' encoding to handle Unicode characters properly
    with open('udemy_updated.txt', 'r', encoding='utf-8') as f:
        course = {}
        for line in f:
            line = line.strip()
            if line.startswith("Name:"):
                if course:
                    courses.append(course)
                course = {"name": line.replace("Name:", "").strip()}
            elif line.startswith("Udemy Link:"):
                course["link"] = line.replace("Udemy Link:", "").strip()
            elif line.startswith("Coupon Code:"):
                course["coupon"] = line.replace("Coupon Code:", "").strip()
        if course:
            courses.append(course)
    return courses

@app.route('/')
def index():
    courses = get_courses_from_file()
    return render_template('index.html', courses=courses)

if __name__ == '__main__':
    app.run(debug=True)
