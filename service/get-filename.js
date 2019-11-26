const crypto = require("crypto");
function getFileName(req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
        cb(err, err ? undefined : raw.toString('hex'));
    });
}
;
exports.default = getFileName;