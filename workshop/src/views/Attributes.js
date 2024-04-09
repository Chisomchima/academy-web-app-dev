import React from 'react'
import { useGetAttributes } from '../hooks/index.js'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    CircularLoader,
    AlertBar,
} from '@dhis2/ui'
import styles from './Attributes.module.css'

export const Attributes = () => {
    const { loading, error, data } = useGetAttributes()

    if (loading) {
        return (
            <div className={styles.loaderContainer}>
                <CircularLoader />
            </div>
        )
    }

    if (error) {
        return (
            <div className={styles.errorContainer}>
                <AlertBar duration={8000} critical>
                    {error.message}
                </AlertBar>
            </div>
        )
    }

    return (
        <div>
            <h1>Attributes</h1>

            {data?.attributes?.attributes && (
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Attribute Name</TableCell>
                            <TableCell>ID</TableCell>
                            <TableCell>Unique</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.attributes.attributes.map((attribute) => (
                            <TableRow key={attribute.id}>
                                <TableCell>{attribute.displayName}</TableCell>
                                <TableCell>{attribute.id}</TableCell>
                                <TableCell>
                                    {attribute.unique ? 'Yes' : 'No'}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
        </div>
    )
}
