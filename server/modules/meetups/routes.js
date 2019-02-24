import { Router } from 'express';
import * as MeetupController from './controller';

const routes = new Router();

// post new meetup

routes.post('/meetups', MeetupController.createMeetup);

export default routes;