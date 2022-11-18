import React from "react";

export default function Show(props) {
    const [hashState, setHash]= React.useState(window.location.hash);

    function hashListenerACB(){ setHash(window.location.hash); } // when notified, update state with current value

    function componentWasCreatedACB(){
        window.addEventListener('hashchange', hashListenerACB);
        return function isTakenDownACB(){ 
            window.removeEventListener('hashchange', hashListenerACB);
        };
    }


    React.useEffect(componentWasCreatedACB, []);

    // if (props.hash === hashState)
    // return <div>{ props.children }</div>;
    // else
    //     return false;

    return (<div className={hashState === props.hash? " " : "hidden" }>{ props.children }</div>);
}
