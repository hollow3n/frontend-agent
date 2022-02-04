import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://localhost:/compte/`)
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
    }, []);

    const setData = (data) => {
        let { id, idClient, solde} = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Client', idClient)
        localStorage.setItem('Solde', solde);

    }

    const getData = () => {
        axios.get(`https://localhost:/compte/`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://localhost:/compte/${id}`)
        .then(() => {
            getData();
        })
    }

    return (
        <div>
            <div style={{display:"flex", justifyContent:"space-between"}}> 
                <h2>Liste des comptes</h2>
                <Link to="/createCompte">
                    <button>Ajouter un compte</button>
                </Link>
            </div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Client</Table.HeaderCell>
                        <Table.HeaderCell>Solde</Table.HeaderCell>
                        <Table.HeaderCell>Date de création</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.id}</Table.Cell>
                                <Table.Cell>{data.idClient}</Table.Cell>
                                <Table.Cell>{data.solde}</Table.Cell>
                                <Table.Cell>{data.date}</Table.Cell>
                                <Link to='/updateCompte'>
                                    <Table.Cell> 
                                        <Button onClick={() => setData(data)}>Modifier</Button>
                                    </Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <Button onClick={() => onDelete(data.id)}>Supprimer</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}
