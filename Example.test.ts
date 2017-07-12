import { Container } from 'dockerode';
import { connect } from './lib/Index';
import { runWorpdressTestContainer, waitMs } from './test/Utils';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

let wpContainer: Container;
let mysqlContainer: Container;

describe('Example test', () => {

    beforeAll(async (done) => {
        [wpContainer, mysqlContainer] = await runWorpdressTestContainer(9001, 9002);

        console.log('containers');
        console.log('c1');
        console.log('c2');

    });

    test('Connecting to Wordpress Rest API endpoint', async (done) => {
        try {
            console.log('> connecting');
            const connection = await connect(`http://192.168.99.100:9001`);
            console.log('> connected');
        } catch (e) {
            console.log('ERRRRRRRRRRRRRRRRRRRRRROR');
        }
        expect('d').toBe('d');
    });

    afterAll(async (done) => {
        console.log('------------------');
        console.log('r1');
        console.log('r2');

        await wpContainer.stop();
        await mysqlContainer.stop();

        await wpContainer.remove({ v: true });
        await mysqlContainer.remove({ v: true });
    });

});
