const {
  getAllClass,
  getClass,
  createNewClass,
  updateDetaiClass,
  deleteSpecClass,
  getClassTeacher,
  getClasses,
} = require("../services/class.service");

const getClasses1 = async (request, h) => {
  try {
    const result = await getAllClass();
    return h.response(result).code(200);
  } catch (err) {
    console.error("Error handling request", error);
    return h.response("Internal Server Error").code(500);
  }
};

const getClasses2 = async (request, h) => {
  try {
    const result = await getClasses();
    return h.response(result).code(200);
  } catch (err) {
    console.error("Error handling request", error);
    return h.response("Internal Server Error").code(500);
  }
};

const getDetailClass = async (request, h) => {
  try {
    const { class_id } = request.params;
    const result = await getClass(class_id);
    if (!result) {
      return h.response("Class not found").code(404);
    }
    return h.response(result).code(200);
  } catch (err) {
    console.error("Error handling request", error);
    return h.response("Internal Server Error").code(500);
  }
};

const createClass = async (request, h) => {
  try {
    const { teacher_id, class_name } = request.payload;
    const result = await createNewClass(teacher_id, class_name);
    return h.response(result).code(201);
  } catch (err) {
    console.error("Error handling request", error);
    return h.response("Internal Server Error").code(500);
  }
};

const updateClass = async (req, h) => {
  try {
    const { class_id } = req.params;
    const { class_name, teacher_id } = req.payload;

    const result = await updateDetaiClass(teacher_id, class_name, class_id);
    if (!result) {
      return h.response("Class not found").code(404);
    }
    return h.response(result).code(200);
  } catch (err) {
    console.error("Error handling update request", err);
    return h.response("Internal Server Error").code(500);
  }
};

const deleteClass = async (req, h) => {
  try {
    const { class_id } = req.params;

    const result = await deleteSpecClass(class_id);
    if (!result) {
      return h.response("Class not found").code(404);
    }
    return h.response(result).code(200);
  } catch (err) {
    console.error("Error handling delete request", err);
    return h.response("Internal Server Error").code(500);
  }
};

const getTeacherRelateClass = async (req, h) => {
  try {
    const { teacher_id } = req.params;

    const result = await getClassTeacher(teacher_id);
    if (!result) {
      return h.response("Teacher not found").code(404);
    }
    return h.response(result).code(200);
  } catch (err) {
    console.error("Error handling delete request", err);
    return h.response("Internal Server Error").code(500);
  }
};

module.exports = {
  getClasses1,
  getDetailClass,
  createClass,
  updateClass,
  deleteClass,
  getTeacherRelateClass,
  getClasses2,
};
