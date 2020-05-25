import React from 'react';

import AddressBookForm from '../components/AddressBookForm';
import AddressBookList from '../components/AddressBookList';
import ArrayEditExample from '../components/ArrayEditExample';

const AddressBookPage = () => (
    <div>
        <AddressBookForm />
        <AddressBookList users={ [
            {
                firstName: "John",
                lastName: "Doe",
                company: "Asterisk",
                phone: "+1 (934) 504-2067",
            }
        ] }/>

        <ArrayEditExample myData={[ 1, 2, 6, 3, 7, 8, 9, 10 ]} />
    </div>
);

export default AddressBookPage;
