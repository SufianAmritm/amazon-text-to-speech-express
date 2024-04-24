import * as apiService from "../../services/api.service.js";
import httpCode from "http-status-codes";
export async function convertText(req, res, next) {
  try {
    const {text} =req.body
    if (!text || typeof text !== "string") {
      const error= new Error("text is required and must be a string");
      error.status = httpCode.BAD_REQUEST;
      throw error
    }
    const voice = await apiService.createAudio(text);
    res.set(voice.headers).send(Buffer.from(voice.stream.buffer));
  } catch (e) {
    next(e);
  }
}

/**
 * @swagger
 * /aws:
 *    post:
 *      summary: Post text to AWS Polly
 *      description: Post text to AWS Polly and receive audio response
 *      tags:
 *        - AWS Polly
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                text:
 *                  type: string
 *                  description: The text to be converted to audio
 *      responses:
 *        '200':
 *          description: Successful response with audio data
 *          content:
 *            audio/wav:
 *              schema:
 *                type: string
 *                format: binary
 *              example: {}
 *        '400':
 *          description: Bad request due to missing or invalid text
 *        '500':
 *          description: Internal server error
 */
