import React, { useState } from 'react';
import CardBody from './CardBody';

// TODO: Add a comment explaining what export default does
export default function Counter(props) {
  // TODO: Add a comment that explains how the useState hook works
  

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Clicks: {props.count}</div>
      {/* TODO: Add a comment that explains what props are getting passed to CardBody */}
      <CardBody
        count={props.count}
        handleIncrement={props.handleIncrement}
        handleDecrement={props.handleDecrement}
        resetCount={props.resetCount}
      />
    </div>
  );
}
