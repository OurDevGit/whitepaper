import React from 'react';
import StackImage from '../../../assets/images/whitepaper/stack.svg';
import TechLine from '../../../assets/images/whitepaper/tech-line.svg';
import SourceLine from '../../../assets/images/whitepaper/source-line.svg';

const Cylinder = () => 
    <div style={{ justifyContent: 'center', display: 'flex'}}>
        <img src={TechLine}  style={{ alignSelf:'flex-start'}}/>
        <img src={StackImage} />
        <img src={SourceLine} style={{ alignSelf:'flex-end', marginBottom: '10px'}} />
    </div>

export default Cylinder;