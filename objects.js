var playlist = { Hollyn: "Alone" }

function updatePlaylist(playlist, artistName, songTitle) {
<<<<<<< HEAD
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
=======
  return playlist.${artistName} = `${songTitle}`
>>>>>>> 17b0909beb096ff76224f4fa4f0ccb73ae96ff5e
}