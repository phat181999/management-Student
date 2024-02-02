const { pool } = require("../config/config");

async function getAllTeacher() {
  try {
    const result = await pool.query("SELECT * FROM teachers");
    return result.rows;
  } catch (error) {
    console.error("Error fetching teachers", error);
    throw error;
  }
}

async function getTeacher(teacher_id) {
  try {
    const result = await pool.query(
      "SELECT * FROM teachers WHERE teacher_id = $1",
      [teacher_id]
    );
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (error) {
    console.error("Error fetching teachers", error);
    throw error;
  }
}

async function createNewTeacher(firstName, lastName) {
  try {
    const result = await pool.query(
      "INSERT INTO teachers (first_name, last_name) VALUES ($1, $2) RETURNING first_name, last_name",
      [firstName, lastName]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error creating teachers:", error);
    throw error;
  }
}

async function updateDetaiTeacher(firstName, lastName, teacher_id) {
  try {
    const result = await pool.query(
      "UPDATE teachers SET first_name = $1, last_name = $2  WHERE teacher_id = $3 RETURNING *",
      [firstName, lastName, teacher_id]
    );
    if (result.rows.length !== 1) {
      return null;
    }
    return result.rows[0];
  } catch (error) {
    console.error("Error updating teachers:", error);
    throw error;
  }
}

async function deleteSpecTeacher(teacher_id) {
  try {
    const result = await pool.query(
      "DELETE FROM teachers WHERE teacher_id = $1 RETURNING *",
      [teacher_id]
    );
    if (result.rows.length !== 1) {
      return null;
    }
    return result.rows[0];
  } catch (error) {
    console.error("Error deleting teachers:", error);
    throw error;
  }
}
module.exports = {
  getAllTeacher,
  getTeacher,
  createNewTeacher,
  updateDetaiTeacher,
  deleteSpecTeacher,
};
