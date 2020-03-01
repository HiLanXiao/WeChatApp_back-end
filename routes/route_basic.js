const Joi = require("joi");

module.exports = [
  {
    method: "GET",
    path: "/login",
    options: {
      tags: ["api", "basic"],
      description: "基础 api ",
      validate: {
        params: Joi.object({
          id: Joi.number()
            .required()
            .description("the id for the todo item")
        })
      }
    },
    handler: (req, res) => {
      try {
        console.log("reply");
        return "Hello";
      } catch {
        console.log("Find Errors");
      }
    }
  }
];
