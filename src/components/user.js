import Table from 'react-bootstrap/Table'
import React from 'react';

function ResponsiveBreakpointsExample() {

  return (
    
    <div className="auth-wrapper" >
      <div>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>Medicine</th>
              <th>Company</th>
              <th>Price</th>
              <th>Uses</th>
              <th>Disease</th>
              <th>Discount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default ResponsiveBreakpointsExample;