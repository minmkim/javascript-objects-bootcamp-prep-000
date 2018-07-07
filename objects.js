var playlist = new Object({test: "test"})

function updatePlayList(playList, artistName, songTitle) {
  playList.artistName = songTitle
  return playList
}

function removeFromPlayList(playlist, artistName) {
  delete playList.artistName
  return playList
}