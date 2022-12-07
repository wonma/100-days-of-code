import React, { useState, useEffect } from 'react';

const withLivePosition = TargetComp => {
  return props => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const mousemoveHandler = e => {
        setPosition({
          x: e.clientX,
          y: e.clientY
        });
      };
      document.addEventListener('mousemove', mousemoveHandler);

      return () => {
        document.removeEventListener('mousemove', mousemoveHandler);
      };
    }, []);

    return <TargetComp position={position} {...props} />;
  };
};

const MetricDisplay2 = ({ position }) => {
  if (!position) {
    return null;
  }
  return (
    <fieldset>
      <legend>Display Style 2</legend>
      <h2>x:{position.x}</h2>
      <h2>y:{position.y}</h2>
    </fieldset>
  );
};

const MetricDisplay1 = ({ position }) => {
  if (!position) {
    return null;
  }
  return (
    <fieldset>
      <legend>Display Style 1</legend>
      <p>x:{position.x}</p>
      <p>y:{position.y}</p>
    </fieldset>
  );
};

const MetricDisplay1WithLivePosition = withLivePosition(MetricDisplay1);
const MetricDisplay2WithLivePosition = withLivePosition(MetricDisplay2);

const CursorTracker1 = () => {
  return (
    <div>
      <MetricDisplay1WithLivePosition />
      <MetricDisplay2WithLivePosition />
    </div>
  );
};

export default CursorTracker1;
