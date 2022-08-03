export function createEpisodeCode (seasonNum: number, episodeNum: number): string {

    let zeroPaddedSeasonNum = seasonNum.toString()    
    let zeroPaddedEpisodeNum = episodeNum.toString()

    if (seasonNum < 10) {
        zeroPaddedSeasonNum = '0' + seasonNum.toString()
    }
   
    if (episodeNum < 10) {
        zeroPaddedEpisodeNum = '0' + episodeNum.toString()
    }
    

return 'S'+zeroPaddedSeasonNum+'E'+zeroPaddedEpisodeNum 

}

