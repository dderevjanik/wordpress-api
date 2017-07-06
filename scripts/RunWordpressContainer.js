const { red } = require("chalk");
const log = console.log;
const Docker = require("dockerode");

const wordpressImage = "appcontainers/wordpress";

const dockerode = new Docker();

/**
 * @param docker - docker to pull an image
 * @param {string} imageName - image to pull
 */
const pullImage = (docker, imageName) => {
    return new Promise((resolve, rej) => {
        docker.pull(imageName, (pullErr, stream) => {
            if (pullErr) {
                log(red(`Cannot pull image "${imageName}"`));
            }
            docker.modem.followProgress(stream, onFinished, onProgress);
            function onFinished(err, output) {
                if (err) {
                    log(red("Cannot pull an image ") + err);
                    rej();
                }
                resolve();
            }
            function onProgress(ev) {
                // onProgress
            }
        });
    });
};

(async () => {
    try {
        await pullImage(dockerode, wordpressImage);
        await pullImage(dockerode, mysqlImage);
    } catch (e) {
        log(red("cannot pull images from dockerhub"));
        process.exit(1);
    }

    dockerode.run();
    dockerode.run();
    process.exit(0);
})();
