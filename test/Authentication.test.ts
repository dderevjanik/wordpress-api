import { connect } from './../lib/Index';

describe('connection', () => {
    const host = 'http://localhost:8080/';
    test('', () => {
        expect(host).toBe('http://localhost:8080/');
    });
});
