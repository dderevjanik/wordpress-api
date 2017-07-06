const { red, green } = require("chalk");
const axios = require("axios");
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
    log("-- Resolving dependencies --");
    try {
        log(`> docker pull ${wordpressImage}`);
        await pullImage(dockerode, wordpressImage);
        log(green(`image '${wordpressImage}' downloaded`));
    } catch (e) {
        log(red("cannot pull images from dockerhub"));
        process.exit(1);
    }
    log("-- Running wordpress container --");

    log("-- Installing wordpress --");

    process.exit(0);
})();
