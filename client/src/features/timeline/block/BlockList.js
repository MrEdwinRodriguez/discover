import {Fragment} from 'react';

import BlockItem from './BlockItem';

const BlockList = ({blockArray}) => {
    return (
      <Fragment>
          {blockArray.map((item) => (
            <BlockItem name={item.name} date={item.date} postText={item.text} />
          ))}
      
      </Fragment>
    )
  };

  export default BlockList;