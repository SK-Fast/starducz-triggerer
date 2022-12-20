const ytch = require('yt-channel-info')
const ytdl = require('ytdl-core');

const payload = {
    channelId: 'UCI3sucRCHXUYjLi4Nadc2dQ',
    channelIdType: 0,
 }
 
function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}

const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
}

const main = async () => {
    const channelVids = await ytch.getChannelVideos(payload)

    const firstVideo = channelVids.items[0]
    const secondVideo = channelVids.items[1]

    const videoID = firstVideo.videoId
    const secVideoID = secondVideo.videoId

    console.log(`since the video "${firstVideo.title}", starducz haven't been uploading for:`)

    let info = await ytdl.getInfo(videoID);
    let infoSecond = await ytdl.getInfo(secVideoID);

    const d = new Date(info.videoDetails.uploadDate);
    const millis = Date.now() - d;

    console.log(monthDiff(d, new Date()) + ' months')

    await delay(1000)

    console.log((millis / 86400) + ' days')
    
    await delay(1000)

    console.log((millis / 3600) + ' hours')

    await delay(1000)

    console.log((millis / 60) + ' minute')

    await delay(1000)


    console.log(millis + ' ms')

    await delay(1000)

    console.log(`and... ` + (millis * 1000) + ' micro seconds')

    if (parseInt(info.videoDetails.viewCount) < parseInt(infoSecond.videoDetails.viewCount)) {
        console.log(`which btw that video has ${info.videoDetails.viewCount} views.`)
        await delay(1000)

        console.log(`which has ${Math.abs(parseInt(info.videoDetails.viewCount) - parseInt(infoSecond.videoDetails.viewCount))} less than his second latest video.`)

        await delay(1500)

        console.log(`lmao.`)

    }

    await delay(1000)

    console.log(`thx, not to harass btw`)


}

main()