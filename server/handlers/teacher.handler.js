const {
  getAllTeacher,
  getTeacher,
  createNewTeacher,
  updateDetaiTeacher,
  deleteSpecTeacher,
} = require("../services/teacher.service");

const getTeachers = async (request, h) => {
  try {
    const result = await getAllTeacher();
    return h.response(result).code(200);
  } catch (err) {
    console.error("Error handling request", error);
    return h.response("Internal Server Error").code(500);
  }
};

const getDetailTeacher = async (request, h) => {
  try {
    const { teacher_id } = request.params;
    const result = await getTeacher(teacher_id);
    if (!result) {
      return h.response("Teacher not found").code(404);
    }
    return h.response(result).code(200);
  } catch (err) {
    console.error("Error handling request", error);
    return h.response("Internal Server Error").code(500);
  }
};

const createTeacher = async (request, h) => {
  try {
    const { firstName, lastName } = request.payload;
    const result = await createNewTeacher(firstName, lastName);
    return h.response(result).code(201);
  } catch (err) {
    console.error("Error handling request", error);
    return h.response("Internal Server Error").code(500);
  }
};

const updateTeacher = async (req, h) => {
  try {
    const { teacher_id } = req.params;
    const { firstName, lastName } = req.payload;

    const result = await updateDetaiTeacher(firstName, lastName, teacher_id);
    if (!result) {
      return h.response("Teacher not found").code(404);
    }
    return h.response(result).code(200);
  } catch (err) {
    console.error("Error handling update request", err);
    return h.response("Internal Server Error").code(500);
  }
};

const deleteTeacher = async (req, h) => {
  try {
    const { teacher_id } = req.params;

    const result = await deleteSpecTeacher(teacher_id);
    if (!result) {
      return h.response("Student not found").code(404);
    }
    return h.response(result).code(200);
  } catch (err) {
    console.error("Error handling delete request", err);
    return h.response("Internal Server Error").code(500);
  }
};

module.exports = {
  getTeachers,
  getDetailTeacher,
  createTeacher,
  updateTeacher,
  deleteTeacher,
};
