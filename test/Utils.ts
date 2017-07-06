import * as Dockerode from 'dockerode';
import { post } from 'request';

const dockerode = new Dockerode();

/**
 * @param ms - miliseconds
 */
const waitMs = async (ms: number) => {
    return new Promise((resolve, err) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
};

export const runWorpdressTestContainer = async (portToExpose: number) => {
    const container = await dockerode.createContainer({
        ExposedPorts: {
            "80/tcp": {},
        },
        HostConfig: {
            PortBindings: {
                "80/tcp": [
                    {
                        HostIp: dockerode.modem.host,
                        HostPort: portToExpose.toString(),
                    },
                ],
            },
        },
        Image: 'appcontainers/wordpress',
    });
    await container.start();
    await waitMs(5000);
    post(`http://${dockerode.modem.host}:${portToExpose}/wp-admin/install.php?step=2`, {
        formData: {
            "Submit": "Install WordPress",
            "admin_email": "test@test.com",
            "admin_password": "admin",
            "admin_password2": "admin",
            "blog_public": 0,
            "language": "",
            "pass1-text": "admin",
            "user_name": "admin",
            "weblog_title": "wordpress - rest - api",
        },
    });
    await waitMs(3000);
    return container;
};
