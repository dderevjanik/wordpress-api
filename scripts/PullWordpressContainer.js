const { red, green, yellow, underline } = require("chalk");
const { post } = require("request");
const log = console.log;
const Docker = require("dockerode");

const wordpressImage = "wordpress:4.8.0";
const mysqlImage = "mysql:5.7";
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
    log(yellow("-- Downloading wordpress image --"));

    log(`downloading ${wordpressImage}`);
    await pullImage(dockerode, wordpressImage);
    log(green("> Image download"));

    log(`downloading ${mysqlImage}`);
    await pullImage(dockerode, mysqlImage);
    log(green("> Image download"));

    log("all docker images downloaded");
    process.exit(0);
})();
