const app = require('../api/server.js');
const supertest = require('supertest');
const request = supertest(app);

const db = require('../database/dbConfig');
const pModel = require('./prisonersModel');

describe('prisoners model', function() {
    
    
    describe('test environment', function() {
        it('should use the testing environment', function() {
            expect(process.env.DB_ENV).toBe('testing');
        })
    })
    
    
   
    
})
describe('get prisoners', function () {
    it('gets prisoners', async function(){
        
        const res = await (await request.get('/api/prisons'));
        expect(res.body.length).not.toBe(null);
        expect(res.status).toBe(200);
        
    })
})