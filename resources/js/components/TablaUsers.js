import React from 'react';

class TablaUsers extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            users : [],
        }

        this.renderRows = this.renderRows.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.getUsers = this.getUsers.bind(this);
    }

    componentDidMount(){
        this.getUsers();
    }

    getUsers(){
        fetch('/api/users').then((res) => res.json())
        .then((json) => {
           this.setState({
               users: json,
           });
       });
    }

    deleteUser(id){

        fetch('/api/users/'+id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json",
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content

            }
        }).catch((error) => console.log(error))
            .then(() => {
                this.getUsers();
            });
    }

    renderRows(){

        let filas = this.state.users.map((user)=>{
            return(

                <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td><button className='btn btn-danger' onClick={() => this.deleteUser(user.id)}>Borrar</button></td>
            </tr>
            );
        });

        return filas;
    }

    render(){
        return(
            <table className='table mt-3'>
            <thead>
                <th>#</th>
                <th>Nombre</th>
                <th>E-mail</th>
                <th>---</th>
            </thead>
            <tbody>
                {this.renderRows()}
            </tbody>
        </table>
    );
    }
}

export default TablaUsers;