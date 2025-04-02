import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Next.js API',
    version: '1.0.0',
    description: 'Documentation of Next.js API routes',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Local server'
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./src/app/api/**/*.ts'], // Updated path to scan TypeScript files
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
