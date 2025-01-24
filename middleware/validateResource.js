const Joi = require('joi');

const resourceSchema = Joi.object({
  name: Joi.string().max(255).required(),
  email: Joi.string().email().required(),
  role: Joi.string().valid('Admin', 'User').required(),
});

const validateResource = (req, res, next) => {
  const { error } = resourceSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  next();
};

module.exports = validateResource;
