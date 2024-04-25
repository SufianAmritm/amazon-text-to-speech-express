import expressLoader from './express';
import { Express } from 'express';
export default async (app:Express) => {
  expressLoader(app);
}