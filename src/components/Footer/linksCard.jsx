import React from 'react'
import {Feature,FeatureCard,Link} from './footerElements';
function LinksCard({feature}) {
    return (
        <FeatureCard>
        <Feature>
            <strong>{feature.name}</strong>
        </Feature>
        {feature.links.map(link=>(<Link>{link}</Link>))}
        </FeatureCard>

    )
}

export default LinksCard
