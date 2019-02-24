import Meetup from './model';

export const createMeetup = async (req, res) => {
    const { title, description } = req.body;
    console.log(req.body);
    
    const newMeetup = new Meetup({ title, description });

    try {
        return res.status(201).json({meetup: await newMeetup.save()})
    } catch (e) {
        return res.status(500).json({error: true, message: "Error w/ meetup"})
    }
}

export const getAllMeetups = async (req, res) => {
    try {
        res.status(200).json({meetups: await Meetup.find({})})
    } catch (e) {
        return res.status(500).json({error: true, message: "Error w/ meetup"})
    }
}