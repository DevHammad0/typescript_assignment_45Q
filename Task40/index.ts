// function called make_album() that builds a Object describing a music album
function make_album(artist: string, title: string, tracks?: number) {
    let album: { artist: string; title: string; tracks?: number } = {
      artist: artist,
      title: title,
    };
    if (tracks) {
      // if track has value adding that value to albums object
      album.tracks = tracks;
    }
    return album;
  }
  

  let album1 = make_album("Taylor Swift", "Red");
  let album2 = make_album("Ed Sheeran", "Divide", 16);
  let album3 = make_album("Adele", "25");
  

  console.log(album1); // { artist: 'Taylor Swift', title: 'Red' }
  console.log(album2); // { artist: 'Ed Sheeran', title: 'Divide', tracks: 16 }
  console.log(album3); // { artist: 'Adele', title: '25' }
  
  let album4 = make_album("Coldplay", "Parachutes", 10);
  console.log(album4); // { artist: 'Coldplay', title: 'Parachutes', tracks: 10 }
  