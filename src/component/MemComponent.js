import React from 'react';


function MemoComponent ({name}) {
  console.log('Inside Memo component');
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(MemoComponent)