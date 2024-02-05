const { pool } = require("../config/config");

async function getAllClass() {
  try {
    const result = await pool.query(`
      SELECT
          classes.class_id,
          classes.class_name,
          teachers.teacher_id AS teacher_id,
          teachers.first_name AS teacher_first_name,
          teachers.last_name AS teacher_last_name,
          students.student_id,
          students.first_name AS student_first_name,
          students.last_name AS student_last_name
      FROM
          classes
      INNER JOIN teachers ON classes.teacher_id = teachers.teacher_id
      INNER JOIN enrollment ON classes.class_id = enrollment.class_id
      INNER JOIN students ON enrollment.student_id = students.student_id
    `);

    return result.rows;
  } catch (error) {
    console.error("Error fetching classes", error);
    throw error;
  }
}

async function getClasses() {
  try {
    const result = await pool.query("SELECT * FROM classes ");

    return result.rows;
  } catch (error) {
    console.error("Error fetching classes", error);
    throw error;
  }
}

async function getClass(class_id) {
  try {
    const result = await pool.query(
      "SELECT * FROM classes WHERE class_id = $1",
      [class_id]
    );
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (error) {
    console.error("Error fetching classes", error);
    throw error;
  }
}

async function createNewClass(teacher_id, class_name) {
  try {
    const result = await pool.query(
      "INSERT INTO classes (teacher_id, class_name) VALUES ($1, $2) RETURNING teacher_id, class_name",
      [teacher_id, class_name]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error creating classes:", error);
    throw error;
  }
}

async function updateDetaiClass(teacher_id, class_name, class_id) {
  try {
    const result = await pool.query(
      "UPDATE classes SET teacher_id = $1, class_name = $2  WHERE class_id = $3 RETURNING *",
      [teacher_id, class_name, class_id]
    );
    if (result.rows.length !== 1) {
      return null;
    }
    return result.rows[0];
  } catch (error) {
    console.error("Error updating classes:", error);
    throw error;
  }
}

async function deleteSpecClass(class_id) {
  try {
    const result = await pool.query(
      "DELETE FROM classes WHERE class_id = $1 RETURNING *",
      [class_id]
    );
    if (result.rows.length !== 1) {
      return null;
    }
    return result.rows[0];
  } catch (error) {
    console.error("Error deleting classes:", error);
    throw error;
  }
}

async function getClassTeacher(teacher_id) {
  try {
    const result = await pool.query(
      `SELECT
                classes.class_id,
                classes.class_name,
                teachers.teacher_id,
                teachers.first_name AS teacher_first_name,
                teachers.last_name AS teacher_last_name
            FROM
                classes
            INNER JOIN
                teachers ON classes.teacher_id = teachers.teacher_id
            WHERE
                teachers.teacher_id = $1`,
      [teacher_id]
    );

    if (result.rows.length !== 0) {
      return result.rows;
    }

    return null;
  } catch (error) {
    console.error("Error fetching class and teacher information:", error);
    throw error;
  }
}

module.exports = {
  getAllClass,
  getClass,
  createNewClass,
  updateDetaiClass,
  deleteSpecClass,
  getClassTeacher,
  getClasses,
};
