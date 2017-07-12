import { Container } from 'dockerode';
import { runWorpdressTestContainer, waitMs } from '../Utils';
import { connect } from './../../lib/Index';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 18000;

let wpContainer: Container;
let mysqlContainer: Container;

describe('Example test', () => {

    beforeAll(async (done) => {
        // [wpContainer, mysqlContainer] = await runWorpdressTestContainer(9001, 9002);
        // console.log('> CONTAINER STARTED');
        // done();
    });

    test('Connecting to Wordpress Rest API endpoint', async (done) => {
        console.log('connecting');
        try {
            const connection = await connect(`http://192.168.99.100:9001`, {});
        } catch (e) {
            console.log(e);
        }
        done();
    });

    afterAll(async (done) => {
        // await wpContainer.stop();
        // await mysqlContainer.stop();
        // await wpContainer.remove({ v: true });
        // await mysqlContainer.remove({ v: true });
        done();
    });

});
