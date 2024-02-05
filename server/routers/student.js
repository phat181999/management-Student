const {
  getStudents,
  getDetailStudent,
  createStudent,
  updateStudent,
  deleteStudent,
  enrollmentClassStudent,
  getStudentEnrollClass,
  login,
  getStudentsClass,
} = require("../handlers/students.hanlder");
const Joi = require("@hapi/joi");
module.exports = [
  {
    method: "GET",
    path: "/students",
    handler: getStudents,
  },
  {
    method: "GET",
    path: "/students-classes",
    handler: getStudentsClass,
  },
  {
    method: "GET",
    path: "/student/{studentId}",
    handler: getDetailStudent,
    options: {
      validate: {
        params: Joi.object({
          studentId: Joi.number().integer().positive().required(),
        }),
      },
    },
  },
  {
    method: "GET",
    path: "/enrollment/{student_id}",
    handler: getStudentEnrollClass,
    options: {
      validate: {
        params: Joi.object({
          student_id: Joi.number().integer().positive().required(),
        }),
      },
    },
  },
  {
    method: "POST",
    path: "/create/student",
    handler: createStudent,
    options: {
      validate: {
        payload: Joi.object({
          fristName: Joi.string().max(200).required(),
          lastName: Joi.string().max(200).required(),
          birthDate: Joi.date().iso().required(),
        }),
      },
    },
  },
  {
    method: "POST",
    path: "/login/student",
    handler: login,
    options: {
      validate: {
        payload: Joi.object({
          first_name: Joi.string().max(100).required(),
          last_name: Joi.string().max(100).required(),
        }),
      },
    },
  },
  {
    method: "POST",
    path: "/enrollment/student",
    handler: enrollmentClassStudent,
    options: {
      validate: {
        payload: Joi.object({
          student_id: Joi.number().integer().positive().required(),
          class_id: Joi.number().integer().positive().required(),
        }),
      },
    },
  },
  {
    method: "PATCH",
    path: "/update/student/{studentId}",
    handler: updateStudent,
    options: {
      validate: {
        params: Joi.object({
          studentId: Joi.number().integer().positive().required(),
        }),
        payload: Joi.object({
          firstName: Joi.string().max(100).required(),
          lastName: Joi.string().max(100).required(),
          birthDate: Joi.date().iso().required(),
        }),
      },
    },
  },
  {
    method: "DELETE",
    path: "/delete/student/{studentId}",
    handler: deleteStudent,
    options: {
      validate: {
        params: Joi.object({
          studentId: Joi.number().integer().positive().required(),
        }),
      },
    },
  },
];
