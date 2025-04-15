import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const QRCodeComponent = ({ value }) => {
  return <QRCodeCanvas value={value} size={100} />;
};

export default QRCodeComponent;