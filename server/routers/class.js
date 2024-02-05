const {
  getClasses1,
  getDetailClass,
  createClass,
  updateClass,
  deleteClass,
  getTeacherRelateClass,
  getClasses2,
} = require("../handlers/class.handler");
const Joi = require("@hapi/joi");
module.exports = [
  {
    method: "GET",
    path: "/classes",
    handler: getClasses1,
  },
  {
    method: "GET",
    path: "/classes2",
    handler: getClasses2,
  },
  {
    method: "GET",
    path: "/class/{class_id}",
    handler: getDetailClass,
    options: {
      validate: {
        params: Joi.object({
          class_id: Joi.number().integer().positive().required(),
        }),
      },
    },
  },
  {
    method: "GET",
    path: "/teacherClass/{teacher_id}",
    handler: getTeacherRelateClass,
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
    path: "/create/class",
    handler: createClass,
    options: {
      validate: {
        payload: Joi.object({
          teacher_id: Joi.number().required(),
          class_name: Joi.string().max(100).required(),
        }),
      },
    },
  },
  {
    method: "PATCH",
    path: "/update/class/{class_id}",
    handler: updateClass,
    options: {
      validate: {
        params: Joi.object({
          class_id: Joi.number().integer().positive().required(),
        }),
        payload: Joi.object({
          teacher_id: Joi.string().max(100).required(),
          class_name: Joi.string().max(100).required(),
        }),
      },
    },
  },
  {
    method: "DELETE",
    path: "/delete/class/{studentId}",
    handler: deleteClass,
    options: {
      validate: {
        params: Joi.object({
          studentId: Joi.number().integer().positive().required(),
        }),
      },
    },
  },
];
