const { pool } = require("../config/config");
const authen = require("../middlewares/authentication");

async function getAllStudent() {
  try {
    const result = await pool.query("SELECT * FROM students");
    return result.rows;
  } catch (error) {
    console.error("Error fetching student", error);
    throw error;
  }
}

async function getStudent(studentId) {
  try {
    const result = await pool.query(
      "SELECT * FROM students WHERE student_id = $1",
      [studentId]
    );
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (error) {
    console.error("Error fetching student", error);
    throw error;
  }
}

async function createNewStudent(fristName, lastName, birthDate) {
  try {
    const result = await pool.query(
      "INSERT INTO students (first_name, last_name) VALUES ($1, $2, $3) RETURNING first_name, last_name, birth_date",
      [fristName, lastName, birthDate]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error creating student:", error);
    throw error;
  }
}

async function updateDetaiStudent(fristName, lastName, birthDate, studentId) {
  try {
    const result = await pool.query(
      "UPDATE students SET first_name = $1, last_name = $2, birth_date = $3 WHERE student_id = $4 RETURNING *",
      [fristName, lastName, birthDate, studentId]
    );
    if (result.rows.length !== 1) {
      // No rows were updated, meaning the student with the given studentId doesn't exist
      return null;
    }
    return result.rows[0];
  } catch (error) {
    console.error("Error updating student:", error);
    throw error;
  }
}

async function deleteSpecStudent(studentId) {
  try {
    const result = await pool.query(
      "DELETE FROM students WHERE student_id = $1 RETURNING *",
      [studentId]
    );
    if (result.rows.length !== 1) {
      // No rows were updated, meaning the student with the given studentId doesn't exist
      return null;
    }
    return result.rows[0];
  } catch (error) {
    console.error("Error deleting student:", error);
    throw error;
  }
}

async function enrollmentClass(student_id, class_id) {
  try {
    const result = await pool.query(
      "INSERT INTO enrollment (student_id, class_id) VALUES ($1, $2) RETURNING student_id, class_id",
      [student_id, class_id]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error creating student:", error);
    throw error;
  }
}

async function getStudentEnrollment(student_id) {
  try {
    const result = await pool.query(
      `SELECT
              students.student_id,
              students.first_name AS student_first_name,
              students.last_name AS student_last_name,
              classes.class_id,
              classes.class_name,
              teachers.teacher_id,
              teachers.first_name AS teacher_first_name,
              teachers.last_name AS teacher_last_name
          FROM
              students
          INNER JOIN
              enrollment ON students.student_id = enrollment.student_id
          INNER JOIN
              classes ON enrollment.class_id = classes.class_id
          INNER JOIN
              teachers ON classes.teacher_id = teachers.teacher_id
          WHERE
              students.student_id = $1`,
      [student_id]
    );

    if (result.rows.length !== 0) {
      return result.rows;
    }

    return null;
  } catch (error) {
    console.error("Error fetching student enrollment information:", error);
    throw error;
  }
}

async function checkStudentExistence(firstName, lastName) {
  try {
    const query =
      "SELECT * FROM students WHERE first_name = $1 AND last_name = $2";
    const result = await pool.query(query, [firstName, lastName]);
    const student = { firstName: firstName, lastName: lastName };
    if (result.rows.length > 0) {
      const token = authen.createToken(student);
      return token;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error checking student existence:", error);
    throw error;
  }
}

module.exports = {
  getAllStudent,
  getStudent,
  createNewStudent,
  updateDetaiStudent,
  deleteSpecStudent,
  enrollmentClass,
  getStudentEnrollment,
  checkStudentExistence,
};
