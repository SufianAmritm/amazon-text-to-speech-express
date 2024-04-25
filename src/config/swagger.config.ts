export default {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "AWS Prolly",
      version: "1.0.0",
    },
    basePath: "/api",
    servers: [
      {
        url: "http://localhost:3000/api/",
      },
    ],
  },
  tags: [
    {
      name: "AWS Polly",
      description: "API for users",
    },
  ],
  apis: [
    "src/api/controllers/*.ts",
  ],
};