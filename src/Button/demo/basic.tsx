import React from 'react';
import Button from '..';
import GlobalConfig from '../../GlobalConfig';

export default ()=><GlobalConfig globalColor='red'>
    <Button className='self-btn' type='primary' style={{background: 'lightpink'}}>按钮</Button>
</GlobalConfig>