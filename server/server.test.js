let app = require('./server');
let testServer = require('supertest');

describe('Test logging in a user & getting user back', () => {

    // The .agent here is critical here for session aka tracking user login
    const agent = testServer.agent(app);

    test('Responds with a OK 200 status', async () => {
        const response = await agent.post('/api/user/login')
        .send({username: 'blaze', password: 'password'});
        expect(response.statusCode).toBe(200);
    })

    test('Should not be able to get user', async () => {
        const response = await agent.get('/api/user');
        expect(response.statusCode).toBe(200);
    })
})