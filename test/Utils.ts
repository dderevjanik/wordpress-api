import * as Dockerode from 'dockerode';
import { post } from 'request';

export const dockerode = new Dockerode();
export const host = dockerode.modem.host;

/**
 * Wait a specific time (in ms)
 * @param ms - miliseconds
 */
export const waitMs = async (ms: number) => {
    return new Promise((resolve, err) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
};
/**
 * Run wordpress container and expose his port
 * @param wpPort - wordpress port
 * @param mysqlPort - mysql port
 * @returns docker container
 */
export const runWorpdressTestContainer = async (wpPort: number, mySqlPort: number) => {
    const mysqlContainer = await dockerode.createContainer({
        Env: [
            `MYSQL_ROOT_PASSWORD=admin`,
            `MYSQL_USER=admin`,
        ],
        ExposedPorts: {
            '3306/tcp': {},
        },
        HostConfig: {
            PortBindings: {
                '3306/tcp': [{
                    HostIP: '0.0.0.0',
                    HostPort: mySqlPort.toString(),
                }],
            },
        },
        Image: 'mysql:5.7',
    });
    await mysqlContainer.start();

    const wpContainer = await dockerode.createContainer({
        Env: [
            `WORDPRESS_DB_HOST=${dockerode.modem.host}:${mySqlPort}`,
            'WORDPRESS_DB_PASSWORD=admin',
        ],
        ExposedPorts: {
            "80/tcp": {},
        },
        HostConfig: {
            PortBindings: {
                "80/tcp": [
                    {
                        HostIp: '0.0.0.0',
                        HostPort: wpPort.toString(),
                    },
                ],
            },
        },
        Image: 'conetix/wordpress-with-wp-cli',
    });
    await wpContainer.start();
    await waitMs(8000);

    post(`http://192.168.99.100:${wpPort}/wp-admin/install.php?step=2`, {
        formData: {
            Submit: "Install WordPress",
            admin_email: "test@test.com",
            admin_password: "admin",
            admin_password2: "admin",
            blog_public: 0,
            user_name: "admin",
            weblog_title: "wordpress - rest - api",
        },
    });

    await waitMs(6000);
    return [wpContainer, mysqlContainer];
};
