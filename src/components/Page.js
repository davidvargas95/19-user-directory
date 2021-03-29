import API from "../utils/API";
import Header from "./Header";
import Body from "./Body";
import Searchbar from "./Searchbar";
import React, {Component} from "react";

class Page extends Component {

    state = {
        users: [],
        search: "",
    }

    componentDidMount = () => {
        API.getUsers()
            .then(res => {
                const user = res.data.results;
                const sorted = []

                for(let i=0; i<user.length; i++) {
                const info = {
                    image: user[i].picture.thumbnail,
                    firstName: user[i].name.first,
                    lastName: user[i].name.last,
                    dob: user[i].dob.age,
                    email: user[i].email,
                    phoneNum: user[i].cell
                }
                sorted.push(info)
            }
            this.setState({users: sorted})      
        })
    };

    handleSearchChange = event => {
        this.setState({search: event.target.value})
    };

    filterEmployee() {
        const search = this.state.search.toLowerCase();

        return this.state.users.filter(user => {
            return(
                user.firstName.toLowerCase().includes(search)
            )
        })
    };

    renderTable = () => {
        return this.filterEmployee().map((user, index) => {

            const {
                image,
                firstName,
                lastName,
                dob,
                email,
                phoneNum
            } = user
            
            return(
                <tr key={index}>
                    <td><img src={image} alt="profilePicture" /></td>
                    <td>{firstName} {lastName}</td>
                    <td>{dob}</td>
                    <td>{email}</td>
                    <td>{phoneNum}</td>
                </tr>
            )
        })
    };

    render() {
        return(
            <div className="container">
                <Header />
                <Searchbar
                    handleSearchChange = {this.handleSearchChange}
                 />

                <div>
                    <table id="users" className="table table-striped">
                        <Body />
                        <tbody className="border">
                            {this.renderTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


// function Test() {
//     return(
//         <div>
//             <Header />
//             <Searchbar />
//             <Body />
//             <h1>Hello</h1>
//         </div>
//     )
// }

export default Page;