const request = require('supertest')
const app = require('../../app')
const {mongoConnect} = require('../../services/mongo')

describe('Test APi' , () => {
    beforeAll(async () => {
        await mongoConnect();
    }, 10000);

    describe('Test GET /launches', () => {
        test('It should respond with 200 success', async() => {
            await request(app)
            .get('/v1/launches')
            .expect('Content-Type', /json/)
            .expect(200) 
        })
    })
    
    describe('Test POST /launches', () => {
        const completeLaunchData = {
            "mission": "USS Enterprise",
            "rocket": "NCC 1701-D",
            "target": "Kepler-1649 b",
            "launchDate": "January 4, 2028"
          }
    
        const launchDataWithoutLaunchDate = {
            "mission": "USS Enterprise",
            "rocket": "NCC 1701-D",
            "target": "Kepler-1649 b",
        }
    
        const launchInviteData = {
            "mission": "USS Enterprise",
            "rocket": "NCC 1701-D",
            "target": "Kepler-1649 b",
            "launchDate": "hello"
        }
    
        test('It should respond with 201 created', async() => {
            const response = await request(app)
            .post('/v1/launches')
            .send(completeLaunchData)
              .expect('Content-Type', /json/)
              .expect(201) 
    
              const requestData = new Date(completeLaunchData.launchDate).valueOf()
              const responseData = new Date(response.body.launchDate).valueOf() 
          
              expect(requestData).toBe(responseData)
        })
    
        test('It should catch missing required properties', async() => {
            const response = await request(app)
            .post('/v1/launches')
            .send(launchDataWithoutLaunchDate)
              .expect('Content-Type', /json/)
              .expect(400) 
    
              expect(response.body).toStrictEqual({
                error:'Missing required launch property'
              })
        })
    
        test('It should catch invalid dates', async() => {
            const response = await request(app)
            .post('/v1/launches')
            .send(launchInviteData)
              .expect('Content-Type', /json/)
              .expect(400) 
    
              expect(response.body).toStrictEqual({
                error:'Invalid launch date'
              })
        })
    })
})