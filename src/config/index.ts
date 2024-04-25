export { default as swaggerConfig } from './swagger.config'
import { config } from 'dotenv';
config();


const {  PORT, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION, BUCKET_NAME } = process.env

export const port:number = Number(PORT) || 3000;
export const awsAccessKey:string = AWS_ACCESS_KEY_ID;
export const awsSecretAccessKey: string = AWS_SECRET_ACCESS_KEY;
export const awsRegion: string = AWS_REGION;
export const bucketName: string = BUCKET_NAME;
export const prefix: string = "/api";
export const specs: string = "/docs";