function letra(cancion){
  fetch('https://api.lyrics.ovh/v1/Daddy Yankee/${cancion}')
  .then(response => response.json())
  .then(data => 
    console.log(data))
  .catch(error => console.error('Error:', error));
}

