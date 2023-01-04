import Joi from 'joi';

const formSchema = Joi.object({
  name: Joi.string()
    .min(4)
    .max(30)
    .regex(/[A-Za-z]+[\s]*/)
    .messages({
      'string.empty': 'This field is required',
      'string.base': 'Must be a valid name',
      'string.min': 'Name between 4 and 30 chars',
      'string.max': 'Name between 4 and 30 chars'
    }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .messages({
      'string.empty': 'This field is required',
      'string.email': 'Must be a valid email'
    }),
  phone: Joi.string()
    .min(8)
    .max(13)
    .regex(/[0-9]+/)
    .messages({
      'string.empty': 'This field is required',
      'string.base': 'This field is required',
      'string.pattern.base': 'Numbers only',
      'string.min': 'Number between 8 and 13 chars',
      'string.max': 'Number between 8 and 13 chars'
    })
});

export default formSchema;
