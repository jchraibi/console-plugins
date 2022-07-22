import { Wizard } from '@patternfly/react-core';
import * as React from 'react';
import { useLocation } from 'react-router';

export default function DetailedView(props) {
    const location = useLocation();
    const  mypattern  = location.state;

    const myTab = Object.values(mypattern);
    const pattern = myTab[0];

    const title = 'Basic wizard';
    const steps = [
        { name: 'Overview', component: <p>{pattern.Overview.raw}</p> },
        { name: 'Overall Architecture', component: <p>{pattern['Overall Architecture'].raw}</p> },
        { name: 'Guiding Principles', component: <p>{pattern['Guiding principles'].raw}</p> },
        { name: 'Architecture Diagram', component: <p><img src={pattern['Architecture diagram'].raw } width='100%'/></p> },
        { name: 'Review', component: <p>Review step content</p>, nextButtonText: 'Finish' }
    ];

    return (
        console.log(myTab[0].Title.raw),
        <React.Fragment>
            <Wizard
                navAriaLabel={`${title} steps`}
                mainAriaLabel={`${title} content`}
                steps={steps}
                height={1000}
            />
        </React.Fragment>
    )
}
