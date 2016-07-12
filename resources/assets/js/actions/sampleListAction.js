import fetch from 'isomorphic-fetch';

export const FETCH_SAMPLE_LIST = 'FETCH_SAMPLE_LIST';
export function fetchSampleList() {
    return {
        type: FETCH_SAMPLE_LIST,
    };
}

export const RECEIVE_SAMPLE_LIST = 'RECEIVE_SAMPLE_LIST';
export function receiveSampleList(sampleList) {
    return {
        type: RECEIVE_SAMPLE_LIST,
        sampleList: sampleList
    };
}

export function getSampleList() {
    return dispatch => {
        dispatch(fetchSampleList());
        return fetch('http://192.168.99.100/sample/redux/list')
               .then(response => response.json())
               .then(json => dispatch(receiveSampleList(json)));
    };
}
