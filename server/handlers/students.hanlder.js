const {
  getAllStudent,
  getStudent,
  createNewStudent,
  updateDetaiStudent,
  deleteSpecStudent,
  enrollmentClass,
  getStudentEnrollment,
  checkStudentExistence,
  getStudentsClasses,
} = require("../services/user.services");

const getStudents = async (request, h) => {
  try {
    const result = await getAllStudent();
    return h.response(result).code(200);
  } catch (err) {
    console.error("Error handling request", error);
    return h.response("Internal Server Error").code(500);
  }
};

const getStudentsClass = async (request, h) => {
  try {
    const result = await getStudentsClasses();
    return h.response(result).code(200);
  } catch (err) {
    console.error("Error handling request", error);
    return h.response("Internal Server Error").code(500);
  }
};

const getDetailStudent = async (request, h) => {
  try {
    const { studentId } = request.params;
    const result = await getStudent(studentId);
    if (!result) {
      return h.response("Student not found").code(404);
    }
    return h.response(result).code(200);
  } catch (err) {
    console.error("Error handling request", error);
    return h.response("Internal Server Error").code(500);
  }
};

const createStudent = async (request, h) => {
  try {
    const { fristName, lastName, birthDate } = request.payload;
    const result = await createNewStudent(fristName, lastName, birthDate);
    return h.response(result).code(201);
  } catch (err) {
    console.error("Error handling request", error);
    return h.response("Internal Server Error").code(500);
  }
};

const updateStudent = async (req, h) => {
  try {
    const { studentId } = req.params;
    const { firstName, lastName, birthDate } = req.payload;

    const updatedStudent = await updateDetaiStudent(
      firstName,
      lastName,
      birthDate,
      studentId
    );
    if (!updatedStudent) {
      return h.response("Student not found").code(404);
    }
    return h.response(updatedStudent).code(200);
  } catch (err) {
    console.error("Error handling update request", err);
    return h.response("Internal Server Error").code(500);
  }
};

const deleteStudent = async (req, h) => {
  try {
    const { studentId } = req.params;

    const deletedStudent = await deleteSpecStudent(studentId);
    if (!deletedStudent) {
      return h.response("Student not found").code(404);
    }
    return h.response(deletedStudent).code(200);
  } catch (err) {
    console.error("Error handling delete request", err);
    return h.response("Internal Server Error").code(500);
  }
};

const enrollmentClassStudent = async (request, h) => {
  try {
    const { student_id, class_id } = request.payload;
    const result = await enrollmentClass(student_id, class_id);
    return h.response(result).code(201);
  } catch (err) {
    console.error("Error handling request", error);
    return h.response("Internal Server Error").code(500);
  }
};

const getStudentEnrollClass = async (request, h) => {
  try {
    const { student_id } = request.params;
    const result = await getStudentEnrollment(student_id);
    return h.response(result).code(201);
  } catch (err) {
    console.error("Error handling request", error);
    return h.response("Internal Server Error").code(500);
  }
};

const login = async (r, h) => {
  try {
    const { first_name, last_name } = r.payload;
    console.log(first_name, last_name);
    const result = await checkStudentExistence(first_name, last_name);
    console.log(result, "result");
    if (!result) {
      return h.response("Somethigs wrong").code(400);
    }
    return h.response(result).code(200);
  } catch (err) {
    console.error("Error handling request", error);
    return h.response("Internal Server Error").code(500);
  }
};
module.exports = {
  getStudents,
  createStudent,
  getDetailStudent,
  updateStudent,
  deleteStudent,
  enrollmentClassStudent,
  getStudentEnrollClass,
  login,
  getStudentsClass,
};
