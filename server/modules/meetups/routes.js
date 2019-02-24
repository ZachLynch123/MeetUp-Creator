import { Router } from 'express';
import * as MeetupController from './controller';

const routes = new Router();

// post new meetup
routes.post('/meetups', MeetupController.createMeetup);

// get all Meetups
routes.get('/meetups', MeetupController.getAllMeetups);

export default routes;