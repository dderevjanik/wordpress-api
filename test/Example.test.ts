import { Container } from 'dockerode';
import { connect } from '../lib/Index';
import { runWorpdressTestContainer, waitMs } from './Utils';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 13000;

let wpContainer: Container;
let mysqlContainer: Container;

describe('Example test', () => {

    beforeAll(async (done) => {
        [wpContainer, mysqlContainer] = await runWorpdressTestContainer(9001, 9002);
        done();
    });

    test('Connecting to Wordpress Rest API endpoint', async (done) => {
        try {
            const connection = await connect(`http://192.168.99.100:9001`);
        } catch (e) {
            done();
        }
        done();
    });

    afterAll(async (done) => {
        await wpContainer.stop();
        await mysqlContainer.stop();
        await wpContainer.remove({ v: true });
        await mysqlContainer.remove({ v: true });
        done();
    });

});
