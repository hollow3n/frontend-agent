import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function ReadTransfert() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://localhost9999:/transfert/`)
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
    }, []); 


    return (
        <div>
            <div style={{display:"flex", justifyContent:"space-between"}}> 
                <h2>Liste des transferts</h2>
                <Link to="/createTransfert">
                   <button>Ajouter un transfert</button>
                </Link>
            </div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Référence</Table.HeaderCell>
                        <Table.HeaderCell>Montant</Table.HeaderCell>
                        <Table.HeaderCell>Client</Table.HeaderCell>
                        <Table.HeaderCell>Bénéficiaire</Table.HeaderCell>
                        <Table.HeaderCell>Motif</Table.HeaderCell>
                        <Table.HeaderCell>Etat</Table.HeaderCell>
                        <Table.HeaderCell>PIN</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.ref}</Table.Cell>
                                <Table.Cell>{data.montant} DH</Table.Cell>
                                <Table.Cell>{data.client}</Table.Cell>
                                <Table.Cell>{data.beneficiaire}</Table.Cell>
                                <Table.Cell>{data.motif}</Table.Cell>
                                <Table.Cell>{data.etat}</Table.Cell>
                                <Table.Cell>{data.pin}</Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}
