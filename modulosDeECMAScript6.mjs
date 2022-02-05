function videoPlay (id) {
    const urlSecreta = `https://platzivideosecreto.com/${id}`;
    console.log(`Se está reproducioneso desde la url: ${urlSecreta}`);
};

function videoStop (id) {
    const urlSecreta = `https://platzivideosecreto.com/${id}`;
    console.log(`Pausamos  la url: ${urlSecreta}`);

}

export class PlatziClass {
    constructor (
        {
            name,
            videoID
        }
    ) {
        this.name = name;
        this.videoID = videoID;
    }
    
    reproducir () {
        let {videoID} = this;
        videoPlay(videoID);
    };

    pausar () {
        let {videoID} = this;
        videoStop(videoID);
    };
}

