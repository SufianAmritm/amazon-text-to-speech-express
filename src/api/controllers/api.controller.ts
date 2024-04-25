import { NextFunction ,Request,Response} from "express";
import * as apiService from "../../services/api.service";
import httpCode from "http-status-codes";
import { POLLY_AUDIO } from "src/services/types/api.service.type";
export async function convertText(req:Request, res:Response, next:NextFunction) {
  try {
    const { text } = req.body;
    if (!text || typeof text !== "string") {
      const error = new Error("text is required and must be a string");
      res.status(httpCode.BAD_REQUEST).send(error.message);
    }
    const voice:POLLY_AUDIO = await apiService.createAudio(text);
    // res.setHeader("Content-disposition", "attachment; filename=audio.mp3");
    res.setHeader("Content-Type", voice.contentType);
    res.write(Buffer.from(voice.stream.buffer));
    res.end();
    // res.send(Buffer.from(voice.stream.buffer));
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
