import React from 'react';
import Column from './columns';

function Table () {
  return (
    <table>
      <tbody>
        <tr>
         <Column />
        </tr>
        <tr>
          <Column />
        </tr>
      </tbody>
    </table>
  )
}

export default Table