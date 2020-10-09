window.onload = function() {
  function startCamera () {
    navigator.mediaDevices.getUserMedia (
      { 
        video: { facingMode: 'environment' }, 
        audio: true 
      }
    ).then( (stream) => {
      document.getElementById('videoFeed').srcObject = stream;
    });
  }

  function stopCamera () {
    document.getElementById('videoFeed')
      .srcObject
      .getVideoTracks ()
      .forEach (track => {
        track.stop () 
      });
  }

  document.querySelector('.start-video').addEventListener ('click', () => {
    startCamera();
  });

  document.querySelector('.stop-video').addEventListener ('click', () => {
    stopCamera();
  });

  let videoRecorder = null
  document.querySelector('.record-video').addEventListener('click', event => {
    let chunks = [];
    const videoFeed = document.getElementById('videoFeed');
    if (!videoRecorder) {
      const stream = videoFeed.srcObject;

      videoRecorder = new MediaRecorder(stream);
      videoRecorder.start(3000);

      videoRecorder.ondataavailable = event => {
        chunks.push(event.data);
      }

      videoRecorder.onstop = event => {
        let blob = new Blob(chunks, { 'type' : 'video/mp4' });
        saveAs(blob, 'video.mp4');
      }

    } else {
      videoRecorder.stop();
      stopCamera();
    }
  });
}
