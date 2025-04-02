
// pages/api/hello.js
/**
 * @openapi
 * /hello:
 *   get:
 *     summary: Returns a greeting
 *     description: Provides a simple greeting message.
 *     responses:
 *       200:
 *         description: Greeting returned successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 greeting:
 *                   type: string
 *                   example: Hello, world!
 */
export async function GET(req: Request) {
    return Response.json({ greeting: 'Hello, world!' });
}
  