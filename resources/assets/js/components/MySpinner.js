import React from 'react';
import Spinner from 'react-spin';

function MySpinner() {
    const spinCfg = {
        width: 12,
        radius: 35,
    };
    return (
        <Spinner config={spinCfg} />
    )
}

export default MySpinner
