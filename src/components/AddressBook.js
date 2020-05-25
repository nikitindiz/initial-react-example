import React from 'react';

class AddressBook extends React.Component {
    constructor() {
        super();

        this.state = {
            users: [
                {
                  firstName: "Hawkins",
                  lastName: "Solomon",
                  company: "Yandex",
                  phone: "+1 (934) 504-2067",
                },
                {
                  firstName: "Shelton",
                  lastName: "Frost",
                  company: "Yahoo!",
                  phone: "+1 (980) 571-2853",
                },
                {
                  firstName: "Mckenzie",
                  lastName: "Rasmussen",
                  company: "Google",
                  phone: "+1 (812) 496-2735",
                }
            ],
        };
    }

    render() {
        const { users } = this.state;

        const {
            firstName,
            lastName,
            company,
            phone
        } = this.state.users[0];

        return (
            <div>
                <div style={{ margin: 10 }}>
                    <div>
                        <input type="text" placeholder="First name" value={firstName} onChange={(event) => {
                            const updatedArray = users;
                            updatedArray[0].firstName = event.target.value;

                            this.setState({
                                users: updatedArray,
                            })
                        }}/>
                    </div>
                    <div>
                        <input type="text" placeholder="Last name" value={lastName} onChange={(event) => {
                            const updatedArray = users;
                            updatedArray[0].lastName = event.target.value;

                            this.setState({
                                users: updatedArray,
                            })
                        }}/>
                    </div>
                    <div>
                        <input type="text" placeholder="Company" value={company} onChange={(event) => {
                            const updatedArray = users;
                            updatedArray[0].company = event.target.value;

                            this.setState({
                                users: updatedArray,
                            })
                        }}/>
                    </div>
                    <div>
                        <input type="text" placeholder="Phone number" value={phone} onChange={(event) => {
                            const updatedArray = users;
                            updatedArray[0].phone = event.target.value;

                            this.setState({
                                users: updatedArray,
                            })
                        }}/>
                    </div>
                </div>

                <div style={{ margin: 10 }}>
                    { users.map(({ firstName, lastName, phone }) => {
                        return (
                            <div style={{ padding: 5, border: '1px solid black', marginBottom: 4}}>
                                <span style={ { marginLeft: 5 } }>
                                    { firstName }
                                </span>
                                <span style={ { marginLeft: 5 } }>
                                    { lastName }
                                </span>
                                <span style={ { marginLeft: 5 } }>
                                    { phone }
                                </span>
                            </div>
                        );
                    }) }
                </div>
            </div>
        );
    }
}

export default AddressBook;