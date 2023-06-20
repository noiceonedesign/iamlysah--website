let MusicCardsSmall:Array<MusicCard> = [];

type MusicCard = {
    songName: string,
    artist: string,
    imgPath: string,
    songPath: string,
    spotifyURL: string,
    iTunesURL: string,
    amazonMusicURL: string,
    youtubeURL: string,
    active: boolean
}

MusicCardsSmall = [
    {
        songName: "I DON'T MISS YOU",
        artist: "Lysah",
        imgPath:"../assets/MusicPlayerPics/IDMY-2048x2048.jpg",
        songPath:"../assets/Snippets/Idontmissyou.mp3",
        spotifyURL: "https://open.spotify.com/intl-de/track/3VnGitPggHoaRaafKaVWO5?si=1edde692d0634abc",
        iTunesURL: "https://music.apple.com/at/album/i-dont-miss-you/1538952510?i=1538952511",
        amazonMusicURL: "https://amazon.de/music/player/albums/B08MWXSMK8?marketplaceId=A1PA6795UKMFR9&musicTerritory=DE&ref=dm_sh_WiWRHAeOFnoIrWsv3ydOyqL9c",
        youtubeURL: "https://youtu.be/kYJkDS67n2o",
        active: false
    },
    {
        songName: "WILL IT BE YOU",
        artist: "Lysah",
        imgPath:"src/assets/MusicPlayerPics/WIBY-2048x2048.jpg",
        songPath:"src/assets/Snippets/WIBY.mp3",
        spotifyURL: "https://open.spotify.com/intl-de/track/08kSH9dbAKSmPq9eAUZSlq?si=a15e575cd16d4fe9",
        iTunesURL: "https://music.apple.com/at/album/will-it-be-you/1532243983?i=1532243984",
        amazonMusicURL: "https://amazon.de/music/player/albums/B08HY9ST3P?marketplaceId=A1PA6795UKMFR9&musicTerritory=DE&ref=dm_sh_xb2MN1cLAJBdIPbt3ISf7U1dU",
        youtubeURL: "https://youtu.be/wWOZX-QNCWk",
        active: false
    },
    {
        songName: "STAY A LITTLE LONGER",
        artist: "Lysah",
        imgPath:"src/assets/MusicPlayerPics/SALL-2048x2048.jpg",
        songPath:"src/assets/Snippets/SALL.mp3",
        spotifyURL: "https://open.spotify.com/intl-de/track/3r2ZNa5JnOuhrMYGWPSIu1?si=88a67753c1be4c2f",
        iTunesURL: "https://music.apple.com/at/album/stay-a-little-longer/1525188249?i=1525188250",
        amazonMusicURL: "https://amazon.de/music/player/albums/B08DDBDPX3?marketplaceId=A1PA6795UKMFR9&musicTerritory=DE&ref=dm_sh_KhhgD6bokgEtoEPNRlj9FioJ3",
        youtubeURL: "https://youtu.be/nqEeCHMh9rk",
        active: false
    },
    {
        songName: "STRONGER",
        artist: "Lysah",
        imgPath:"src/assets/MusicPlayerPics/Stronger-2048x2048.jpg",
        songPath:"src/assets/Snippets/Stronger.mp3",
        spotifyURL: "https://open.spotify.com/intl-de/track/57rCNY4TEJcQMpj3GxcZbe?si=64001235fc8b414b",
        iTunesURL: "https://music.apple.com/at/album/stronger/1503337646?i=1503337647",
        amazonMusicURL: "https://amazon.de/music/player/albums/B085Z82L3L?marketplaceId=A1PA6795UKMFR9&musicTerritory=DE&ref=dm_sh_l6nB49Yo7QkFtPZCWwBuUzuMv",
        youtubeURL: "https://youtu.be/qDmuF6uRT9U",
        active: false
    }
]




export default MusicCardsSmall;