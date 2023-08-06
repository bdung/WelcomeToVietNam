import React from 'react';
import HighlightedSection from "./HighlightedSection"
import LatestSection from "./LatestSection"

const MainContent = () => {
    return (
        <React.Fragment>
            <HighlightedSection/>
            <LatestSection/>
        </React.Fragment>
    );
}

export default MainContent;