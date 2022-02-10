import React, { useState } from 'react';

function FormRegistro() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [TxtButton, setTxtButton] = useState('Cargar Usuario');

    function uploadUser() {

        setTxtButton('Cargando...');

        const newUser = {
            "name": name,
            "email": email,
            "password": password,
        };


        fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json",
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
            }
        }).catch((error) => console.log(error))
            .then(() => {
                setName('');
                setEmail('');
                setPassword('');
                setTxtButton('Cargado con exito');
            });
        
            setTimeout(() => {
                setTxtButton('Cargar Usuario');
              }, 2000);
    }


    return (
        <div className="card">
            <div className="card-body">

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Nombre</label>
                    <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="mail" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <button type="submit" class="btn btn-primary" onClick={uploadUser}>{TxtButton}</button>
            </div>
        </div>
    );
}

export default FormRegistro;