let MusicCardsBig:Array<MusicCard> = [];

type MusicCard = {
    songName: string,
    artist: string,
    imgPath: string,
    songPath: string,
    spotifyURL: string,
    iTunesURL: string,
    amazonMusicURL: string,
    youtubeURL: string
}

MusicCardsBig = [
    {
        songName: "SAIL",
        artist: "Lysah",
        imgPath:"src/assets/MusicPlayerPics/Sail-2048x2048.jpg",
        songPath:"src/assets/Snippets/Lysah-Sail.mp3",
        spotifyURL: "https://open.spotify.com/intl-de/track/5WwF3iTlkxScq2cGKhzu5t?si=ff00c91a7df44702",
        iTunesURL: "https://music.apple.com/at/album/sail/1517015938?i=1517015941",
        amazonMusicURL: "https://amazon.de/music/player/albums/B089B6KC3W?marketplaceId=A1PA6795UKMFR9&musicTerritory=DE&ref=dm_sh_FAqzDmPr8lFswqqn2EQagI2At",
        youtubeURL: "https://youtu.be/iqNRVlaecUw"
    }
]

export default MusicCardsBig;