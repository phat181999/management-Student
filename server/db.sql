-- Create Students table
CREATE TABLE
    IF NOT EXISTS students (
        student_id SERIAL PRIMARY KEY,
        first_name VARCHAR(50),
        last_name VARCHAR(50),
        birth_date DATE
    );

-- Create Teachers table
CREATE TABLE
    IF NOT EXISTS teachers (
        teacher_id SERIAL PRIMARY KEY,
        first_name VARCHAR(50),
        last_name VARCHAR(50)
    );

-- Create Classes table
CREATE TABLE
    IF NOT EXISTS classes (
        class_id SERIAL PRIMARY KEY,
        teacher_id INT REFERENCES teachers (teacher_id),
        class_name VARCHAR(50)
    );

-- Create Enrollment table to represent the many-to-many relationship between classes and students
CREATE TABLE
    IF NOT EXISTS enrollment (
        enrollment_id SERIAL PRIMARY KEY,
        student_id INT REFERENCES students (student_id),
        class_id INT REFERENCES classes (class_id)
    );