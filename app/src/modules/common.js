import fs from 'fs';
import axios from 'axios';
import canvas from 'canvas';


function request(url, options = {}, callback = null) {
    if (typeof options === 'function') {
        callback = options;
        options = {};
    }
    if (typeof callback !== 'function') {
        callback = () => { };
    }
    axios(url, options)
        .then(response => {
            callback(null, response, response.data);
        })
        .catch(error => {
            callback(error);
        });
}


const GET = axios.get;


/**
 * 
 * @param {string} input - a stringified JSON object or a path to a JSON file
 * @returns {boolean}
 */
function isJSON(input) {
    try {
        JSON.parse(input);
        return true;
    } catch (e) {
        if (isExists(input)) {
            return isJSON(fs.readFileSync(input, 'utf8'));
        } else {
            return false;
        }
    }
}


function fileStats(path) {
    try {
        return fs.statSync(path);
    } catch (e) {
        throw e;
    }
}

/**
 * Checks if a file/directory exists
 * @param {string} path - a path to a file/directory
 * @param {string} type - "file" or "dir"
 * @returns {boolean}
 */
function isExists(path, type = 'file') {
    try {
        const result = fs.statSync(path);
        return type === 'file' ? result.isFile() : result.isDirectory();
    } catch (e) {
        return false;
    }
}

function reader(path) {
    return fs.createReadStream(path);
}

function writer(path) {
    return fs.createWriteStream(path);
}

function mkdir(path) {
    return fs.mkdirSync(path, { recursive: true });
}

/** 
 * Download a file from an url which could be video, audio, json, etc.
 * 
 * @param {string} path - a path to a file
 * @param {string} url - an url to a file
 * @returns {string} path
 */
function downloadFile(path, url) {
    return new Promise((resolve, reject) => {
        GET(url, { responseType: 'stream' })
            .then(res => {
                const _writer = writer(path);

                res.data.pipe(_writer);

                _writer.on('error', (err) => {
                    reject(err);
                })
                _writer.on('close', () => {
                    resolve(path);
                })
            })
            .catch(err => {
                reject(err);
            });
    });
}


function deleteFile(path) {
    return new Promise((resolve, reject) => {
        fs.unlink(path, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}


function scanDir(path) {
    return fs.readdirSync(path);
}


function getStream(input) {
    return new Promise((resolve, reject) => {
        if (isExists(input)) {
            resolve(reader(input));
        } else {
            if (isURL(input)) {
                GET(input, { responseType: 'stream' })
                    .then(res => {
                        resolve(res.data);
                    })
                    .catch(err => {
                        reject(err);
                    });
            } else {
                reject(new Error('Invalid input'));
            }
        }
    })
}


function isURL(url) {
    return /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(url);
}


function random(min, max) {
    min = parseInt(min);
    max = parseInt(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


/**
 * Circle an image
 */
function circle(image, x, y, radius) {
    const tempCanvas = new canvas(image.width, image.height);
    const ctx = tempCanvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(image, 0, 0);
    return canvas;
}


function sleep(ms) {
    const date = Date.now();
    while (Date.now() - date < ms) { };
}


/**
 * for loop minified
 * @param {number} times 
 * @param {function} callback 
 * 
 * @example
 *      // console.log from 0 to 99
 *      loop(100, i => console.log(i));
 */
function loop(times, callback = () => { }) {
    if (times && !isNaN(times) && times > 0) {
        for (let i = 0; i < times; i++) {
            callback(i);
        }
    }
}


function getRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    loop(6, () => {
        color += letters[Math.floor(Math.random() * letters.length)];
    })
    return color;
}


function getRandomPassword(length = 8, specialChars = false) {
    const letters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' + (specialChars ? '!@#$%^&*()_+~`|}{[]\:;?><,./-=' : '');
    let password = '';
    loop(length, () => {
        password += letters[Math.floor(Math.random() * letters.length)];
    })
    return password;
}


function addCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


/**
 * convert a base64
 * @param {String} file - Path to a file 
 */
function saveToBase64(file) {
    let bitmap = fs.readFileSync(file);
    return Buffer.from(bitmap).toString('base64');
}


/**
 * reverse from Base64
 * @param {String} base64 - Base64 string
 */
function saveFromBase64(path, base64) {
    return new Promise((resolve, reject) => {
        const bitmap = Buffer.from(base64, 'base64');
        const _writer = writer(path);

        _writer.write(bitmap, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(path);
            }

            _writer.destroy();
        });
    })
}


export { request, GET, isJSON, fileStats, isExists, reader, writer, mkdir, downloadFile, deleteFile, scanDir, getStream, isURL, random, circle, sleep, loop, getRandomHexColor, getRandomPassword, addCommas, saveToBase64, saveFromBase64 };
