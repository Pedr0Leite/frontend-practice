import * as React from 'react';
import Card from './Card';
import InfoDiv from './InfoDiv';

export default function MainDiv() {
  return (
    <div className="mainGrid">
      <Card />
      <InfoDiv />
    </div>
  );
}
