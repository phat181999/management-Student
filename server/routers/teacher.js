const {
  getTeachers,
  getDetailTeacher,
  createTeacher,
  updateTeacher,
  deleteTeacher,
} = require("../handlers/teacher.handler");
const Joi = require("@hapi/joi");

module.exports = [
  {
    method: "GET",
    path: "/teachers",
    handler: getTeachers,
  },
  {
    method: "GET",
    path: "/teacher/{teacher_id}",
    handler: getDetailTeacher,
    options: {
      validate: {
        params: Joi.object({
          teacher_id: Joi.number().integer().positive().required(),
        }),
      },
    },
  },
  {
    method: "POST",
    path: "/create/teacher",
    handler: createTeacher,
    options: {
      validate: {
        payload: Joi.object({
          firstName: Joi.string().max(100).required(),
          lastName: Joi.string().max(100).required(),
        }),
      },
    },
  },
  {
    method: "PATCH",
    path: "/update/teacher/{teacher_id}",
    handler: updateTeacher,
    options: {
      validate: {
        params: Joi.object({
          teacher_id: Joi.number().integer().positive().required(),
        }),
        payload: Joi.object({
          firstName: Joi.string().max(100).required(),
          lastName: Joi.string().max(100).required(),
        }),
      },
    },
  },
  {
    method: "DELETE",
    path: "/delete/teacher/{teacher_id}",
    handler: deleteTeacher,
    options: {
      validate: {
        params: Joi.object({
          teacher_id: Joi.number().integer().positive().required(),
        }),
      },
    },
  },
];
