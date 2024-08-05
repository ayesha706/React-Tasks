import React from 'react';
import { useGetUserByNameQuery } from '../rtk-query/spi';


const RtkqueryUsername = () => {
    const { data, isError, isLoading } = useGetUserByNameQuery('users')
    console.log("============================", data);
    return (
        <div className="App">
            {isError ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <h3>Data in console</h3>
            ) : null}
        </div>
    )
}

export default RtkqueryUsername
