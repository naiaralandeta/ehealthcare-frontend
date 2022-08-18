import React from 'react';
import Table from 'react-bootstrap/Table';

function Medicines() {

  const medicineList = (event) => {

    const medicinesURL = '/api/admin/medicines';

    fetch(medicinesURL, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => console.log(data))
  }

  return (
    <div>
      <h2>Medicines here</h2>
      <button onClick={medicineList}>Medicines here</button>
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
  );
}

function UserScreen() {

  const userDetails = (event) => {

    const detailsURL = '/api/user/data?id=' + 2;

    fetch(detailsURL, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
  }

  return (
    <div class="container">
      <div class="auth-wrapper-signup">
        <div class="col-8">
          <h1>Main</h1>
          <button onClick={userDetails}>User details</button>
          <dl className='col-md-6'>
            <dt>Username</dt>
            <dd>Name</dd>
            <dt>Firstname</dt>
            <dd></dd>
            <dt>Lastname</dt>
            <dd></dd>
            <dt>Email</dt>
            <dd></dd>
            <dt>Password</dt>
            <dd></dd>
            <dt>Birthday date</dt>
            <dd></dd>
            <dt>Phone</dt>
            <dd></dd>
            <dt>Address</dt>
            <dd></dd>
          </dl>
          <br /><br />
          <Medicines />
        </div>
        <div class="col-4">
          <p>.col-4</p>
        </div>
      </div>
    </div>
    
  );
}


export default UserScreen;