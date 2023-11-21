const request = require('supertest')
const app = require('../../app')

describe('Test GET /launches', () => {
    test('It should respond with 200 success', async() => {
        await request(app)
        .get('/launches')
        .expect('Content-Type', /json/)
        .expect(200) 
    })
})

describe('Test POST /launches', () => {
    const completeLaunchData = {
        "mission": "USS Enterprise",
        "rocket": "NCC 1701-D",
        "target": "Kepler-186 f",
        "launchDate": "January 4, 2028"
      }

    const launchDataWithoutLaunchDate = {
        "mission": "USS Enterprise",
        "rocket": "NCC 1701-D",
        "target": "Kepler-186 f",
    }

    const launchInviteData = {
        "mission": "USS Enterprise",
        "rocket": "NCC 1701-D",
        "target": "Kepler-186 f",
        "launchDate": "hello"
    }

    test('It should respond with 201 created', async() => {
        const response = await request(app)
        .post('/launches')
        .send(completeLaunchData)
          .expect('Content-Type', /json/)
          .expect(201) 

          const requestData = new Date(completeLaunchData.launchDate).valueOf()
          const responseData = new Date(response.body.launchDate).valueOf() 
      
          expect(requestData).toBe(responseData)
    })

    test('It should catch missing required properties', async() => {
        const response = await request(app)
        .post('/launches')
        .send(launchDataWithoutLaunchDate)
          .expect('Content-Type', /json/)
          .expect(400) 

          expect(response.body).toStrictEqual({
            error:'Missing required launch property'
          })
    })

    test('It should catch invalid dates', async() => {
        const response = await request(app)
        .post('/launches')
        .send(launchInviteData)
          .expect('Content-Type', /json/)
          .expect(400) 

          expect(response.body).toStrictEqual({
            error:'Invalid launch date'
          })
    })
})