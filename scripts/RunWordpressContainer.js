const { red, green, yellow, underline } = require("chalk");
const { post } = require("request");
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
        docker.pull(imageName, (err, stream) => {
            docker.modem.followProgress(stream, onFinished, onProgress);
            function onFinished(cErr, output) {
                if (cErr) {
                    log(red("Error: cannot pull an image ") + cErr);
                    rej();
                }
                resolve();
            }
            function onProgress(ev) {
                // empty
            }
        });
    });
};

(async () => {
    pullImage(dockerode, wordpressImage);
    process.exit(0);
})();
