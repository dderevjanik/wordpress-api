import { Container } from 'dockerode';
import { runWorpdressTestContainer, waitMs } from '../Utils';
import { connect } from './../../lib/Index';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 8000;

const port = 9001;

describe('Example test', () => {
    let container: Container;

    beforeAll(async () => {
        container = await runWorpdressTestContainer(9001, 9002);
        console.log('> CONTAINER STARTED');
    });

    test('Connecting to Wordpress Rest API endpoint', async () => {
        console.log('making a request');
        const connection = await connect(`http://${container.modem.host}:${port}`);
        console.log(connection);
    });

    afterAll(async () => {
        // await container.stop();
        // await container.remove({ v: true });
    });

});
