const fs = require('fs');
const archiver = require('archiver')('zip');
const path = require('path');

const desktop = require('path').join(require('os').homedir(), 'Desktop');
const outputFileName = path.join(desktop, 'web.zip')            //输出位置 桌面
const srcDirectory = path.join(__dirname, './dist')             //压缩文件源  dist目录

const zip = async () => {
    if(fs.existsSync(outputFileName)) fs.unlinkSync(outputFileName);

    const output = fs.createWriteStream(outputFileName);
    output.on('close', () => {
        console.log('\x1b[32m','zip file successed!');
    })
    archiver.pipe(output);
    archiver.directory(srcDirectory, false)
    archiver.finalize();
}
zip();