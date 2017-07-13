import { Container } from 'dockerode';
import { connect } from './lib/Index';
import { runWorpdressTestContainer } from './test/Utils';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 150000;

const wpPort = 9001;
const mysqlPort = 9002;
let wpContainer: Container;
let mysqlContainer: Container;

describe('Example test', () => {

    beforeAll(async (done) => {
        [wpContainer, mysqlContainer] = await runWorpdressTestContainer(9001, 9002);
        done();
    });

    it('Connecting to Wordpress Rest API endpoint', async (done) => {
        try {
            const connection = await connect(`http://${wpContainer.modem.host}:${wpPort}`);
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
