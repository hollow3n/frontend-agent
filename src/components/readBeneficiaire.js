import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
    }, []);

    const setData = (data) => {
        let { id, prenom, nom, gsm, email, ville } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Prénom', prenom);
        localStorage.setItem('Nom', nom);
        localStorage.setItem('Numéro', gsm);
        localStorage.setItem('Email', email);
        localStorage.setItem('Ville', ville);

    }

    const getData = () => {
        axios.get(`http://localhost:/beneficiaire/`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`http://localhost:/beneficiaire/${id}`)
        .then(() => {
            getData();
        })
    }

    return (
        <div>
            <div style={{display:"flex", justifyContent:"space-between"}}> 
                <h2>Liste des bénéficiaires</h2>
                <Link to="/createBeneficiaire">
                    <button>Ajouter un bénéficiaire</button>
                </Link>
            </div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Prénom</Table.HeaderCell>
                        <Table.HeaderCell>Nom</Table.HeaderCell>
                        <Table.HeaderCell>Numéro de téléphone</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Ville</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.id}</Table.Cell>
                                <Table.Cell>{data.prenom}</Table.Cell>
                                <Table.Cell>{data.nom}</Table.Cell>
                                <Table.Cell>{data.gsm}</Table.Cell>
                                <Table.Cell>{data.email}</Table.Cell>
                                <Table.Cell>{data.ville}</Table.Cell>
                                <Link to='/updateClient'>
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
