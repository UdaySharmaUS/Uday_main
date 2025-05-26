const request = require('supertest');
const { app } = require('../src/index.js');
const { Compound } = require('../src/models/index.js');

describe('GET /api/compound/all', () => {
    it('should return a list of compounds with pagination', async () => {
        const res = await request(app).get('/api/compound/all?page=1');
        expect(res.statusCode).toEqual(200);
        expect(res.body.compounds.length).toBeGreaterThan(0);
        expect(res.body.currentPage).toBe(1);
    });

    it('should return the details of a specific compound', async () => {
        const res = await request(app).get('/api/compound/1');
        expect(res.statusCode).toEqual(200);
        expect(res.body.name).toBe("Ammonium");
    });

    it('should return 404 if the compound is not found', async () => {
        const res = await request(app).get('/api/compound/9999');
        expect(res.statusCode).toEqual(404);
    });
});

describe('PUT /api/compound/:id', () => {
    it('should update a compound and return the updated details', async () => {
        const updateData = {
            name: "Updated Compound",
            description: "Updated description",
        };

        const res = await request(app).put('/api/compound/1').send(updateData);
        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toBe('Compound updated successfully');

        const updatedCompound = await Compound.findByPk(1);
        expect(updatedCompound.name).toBe("Updated Compound");
        expect(updatedCompound.description).toBe("Updated description");
    });

    it('should return 404 if trying to update a compound that does not exist', async () => {
        const res = await request(app).put('/api/compound/9999').send({ name: 'Non-existing' });
        expect(res.statusCode).toEqual(404);
    });
});