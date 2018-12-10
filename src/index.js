var _ = require('lodash');
var glob = require("glob-promise")
const fs = require('fs-extra')
const SkeletonBinary = require('./SkeletonBinary')

let args = process.argv.slice(2);

const results = args.map(async (obj) => {
    return await glob(obj).then(function(files) {
        return files;
    });
});

Promise.all(results).then((fileList) => {
    fileList = _.flatten(fileList);
    fileList = _.uniq(fileList);

    for (let i in fileList) {
        let filePath = fileList[i];
        let nb;
        try {
            nb = fs.readFileSync(filePath);
        } catch(err) {
            if (err.code === 'ENOENT') {
                console.log('File not found!');
            } else {
                throw err;
            }
        }
        try {
            let skel_bin = new SkeletonBinary();
            skel_bin.data = new Uint8Array(nb.buffer);
            skel_bin.initJson();
            console.log(filePath);

            let fileName = filePath.substr(0,filePath.lastIndexOf('.'));

            fs.outputFileSync(`output/${fileName}.json`, JSON.stringify(skel_bin.json));
        } catch(err) {
            console.log(err);
            if (err.message.search(`Cannot read property 'name' of undefined`) == 0) {
                console.log('Maybe file is not gf-skel file');
            }
        }
    }
});
