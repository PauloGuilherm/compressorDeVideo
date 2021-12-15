const { spawn } = require('child_process');

function resize(video,quality){
    const promise = new Promise((resolve,reject)=>{
        const ffmpeg = spaw('./FFmpeg/bin/ffmpeg.exe',[
            '-i',
            `${parent}/${video}`,
            '-codec:v',
            'libx264',
            '-profile:v',
            'main',
            '-preset',
            'slow',
            '-b:v',
            '400k',
            '-maxrate',
            '400k',
            '-bufsize',
            '800k',
            '-vf',
            `scale=-2:${quality}`,
            '-threads',
            '0',
            '-b:a',
            '128k',
            `${parente}/resultado/${video}-${quality}.mp4`
        ]);

        ffmpeg.stderr.on('data',(data)=>{
            console.log(data);
        });

        ffmpeg.on('close',(code)=>{
            resolve();
        });

    });
    return promise;
};