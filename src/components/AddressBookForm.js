import React from 'react';

class AddressBookForm extends React.Component {
    render() {
        const {
            firstName,
            lastName,
            company,
            phone,
        } = this.props.user;

        const { handler } = this.props;

        return (
            <form style={{ margin: 10 }} onSubmit={handler}>
                <div>
                    <input type="text" placeholder="First name" value={firstName}/>
                </div>
                <div>
                    <input type="text" placeholder="Last name" value={lastName}/>
                </div>
                <div>
                    <input type="text" placeholder="Company" value={company}/>
                </div>
                <div>
                    <input type="text" placeholder="Phone number" value={phone}/>
                </div>

                <input type="submit" value="Save"/>
            </form>
        );
    }
}

export default AddressBookForm;
