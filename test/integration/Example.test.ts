import { Container } from 'dockerode';
import { host, runWorpdressTestContainer, waitMs } from '../Utils';
import { connect } from './../../lib/Index';

const port = 9001;
let container: Container;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 8000;

describe('Example test', () => {

    beforeAll(async () => {
        container = await runWorpdressTestContainer(port);
    });

    test('test1', () => {
        // code
    });

    afterAll(async () => {
        await container.stop();
        await container.remove({ v: true });
    });

});
