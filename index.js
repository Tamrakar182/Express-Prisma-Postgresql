import express from 'express';
import dotenv from 'dotenv';
import prisma from './db/prisma.js';

dotenv.config();

const app = express();

const PORT = 5000;

app.get('/', async (req, res) => {
    await prisma.user.create({
        data: {
            name: 'John Doe',
            email: 'johndoe@email.com',
            password: '123456789',
        },
    });   

    const users = await prisma.user.findMany();

    const names = users.map((user) => user.name);

    res.send(`There are ${users.length} users in the database. Their names are: ${names.join(', ')}`);

});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}: http://localhost:${PORT}`);
});
