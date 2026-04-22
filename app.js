const DRAGON_MODEL_PATH = './dragoncin.glb';

const qrInput = document.getElementById('qrUrl');
const qrContainer = document.getElementById('qrCode');
const generateButton = document.getElementById('generateQr');
const downloadButton = document.getElementById('downloadQr');

const modelViewer = document.getElementById('modelViewer');
const modelStatus = document.getElementById('modelStatus');
const openArLiveTop = document.getElementById('openArLiveTop');
const openArLiveViewer = document.getElementById('openArLiveViewer');

let qrInstance = null;

function getBaseArLiveUrl() {
  if (window.location.protocol !== 'http:' && window.location.protocol !== 'https:') {
    return '';
  }
  const url = new URL(window.location.href);
  const basePath = url.pathname.endsWith('/')
    ? url.pathname
    : url.pathname.substring(0, url.pathname.lastIndexOf('/') + 1);
  url.pathname = `${basePath}ar-live.html`;
  url.search = '';
  url.hash = '';
  return url.toString();
}

function buildArLiveUrl() {
  const base = getBaseArLiveUrl();
  return base;
}

function updateArLinksAndQr() {
  const arUrl = buildArLiveUrl();
  if (openArLiveTop) {
    openArLiveTop.href = arUrl;
  }

  if (openArLiveViewer) {
    openArLiveViewer.href = arUrl;
  }

  if (!qrInput.value || qrInput.value.includes('ar-live.html')) {
    qrInput.value = arUrl;
  }

  renderQr(qrInput.value.trim());
}

function clearQr() {
  qrContainer.innerHTML = '';
}

function renderQr(url) {
  clearQr();

  if (!url) {
    qrContainer.innerHTML = '<p class="qr-caption">Escribe una URL pública para generar el QR.</p>';
    return;
  }

  qrInstance = new QRCode(qrContainer, {
    text: url,
    width: 240,
    height: 240,
    colorDark: '#07111f',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.M,
  });
}

function getQrCanvas() {
  return qrContainer.querySelector('canvas');
}

function setViewerModel(modelSrc) {
  modelViewer.setAttribute('src', modelSrc);
  modelViewer.setAttribute('animation-name', '*');
  modelViewer.setAttribute('autoplay', '');
}

function initializeAnimationFallback() {
  modelViewer.addEventListener('load', () => {
    const animations = modelViewer.availableAnimations || [];
    if (animations.length > 0) {
      modelViewer.animationName = animations[0];
      modelViewer.play();
    }
  });
}

generateButton.addEventListener('click', () => {
  renderQr(qrInput.value.trim());
});

downloadButton.addEventListener('click', () => {
  const canvas = getQrCanvas();
  if (!canvas) {
    return;
  }

  const link = document.createElement('a');
  link.download = 'qr-ar-logo.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
});

qrInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    renderQr(qrInput.value.trim());
  }
});

initializeAnimationFallback();
setViewerModel(DRAGON_MODEL_PATH);
modelStatus.textContent = 'Modelo actual: dragón con animación desde Blender.';
updateArLinksAndQr();
