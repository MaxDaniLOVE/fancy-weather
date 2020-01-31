export default function voiceRecognize() {
  const recognition = new webkitSpeechRecognition();
  recognition.interimResults = false;
  recognition.lang = 'en-US';
  recognition.addEventListener('result', (event) => {
    const result = event.results[event.resultIndex];
    document.querySelector('.search-input').value = result[0].transcript;
  });
  function start() {
    recognition.start();
  }
  start();
}
