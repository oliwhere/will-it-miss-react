import React from 'react';

const YesOrNO = new Map([
    [true, 'YES 😱'],
    [false, 'nope']
]);

export default function Hazard({ yes }) {
return <span className="hazard">{ YesOrNO.get(yes) }</span>
}