const QRCode = require('qrcode');

QRCode.toDataURL('Ecabott', function (err, url) {
  console.log(url);
});
QRCode.toString('ecabott.github.io',{
  type:'terminal'}, function (err, url) {console.log(url);
});