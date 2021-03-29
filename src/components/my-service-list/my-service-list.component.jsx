import React from 'react';
import { MyService } from '../my-service/my-service.component';

import './my-service-list.styles.css';

export const MyServiceList = (props) => (
    <div className="service">
        {props.services.map(service => (
            <MyService key={service.id} service={service} />
        ))}     
    </div>
)