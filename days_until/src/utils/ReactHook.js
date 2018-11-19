/**
 * 
 * 
 * this component is using experimental react-hook which are new in React alpha version 16.7.  they will later be replaced with Suspense api.
 * the way this component is set up is to allow the component 
 */

import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
const ReactHook = () => {

    /**
     * 
     * set up two states: one for entries, and the other for req param
     * the query will allow users to enter an id of a specific entry 
     * each time the user enters a new id, the data request should fire again and retrieve 
     * the entry data. and update the data in the entries array. if left blank 
     * then it should retrieve the whole list of entries.
     * we are starting off with three different initial states below.  they will all 
     * be used to programatically update the component.  
     */
     const [data, setData] = useState({ entries: [] });
     const [entryId, setEntryId] = useState('');
     const [url, setURL] = useState(`http://localhost:5000/api/entries`);

     const fetchEntries = async () => {
        const result = await axios(`${url}`);  //not sure if we need '.get' in this axios call.
            setData(result.data);
     };

     /**
      * this method is necessary to prevent rerendering in an endless loop.  the second argument is an array that can be left blank which will only update 
      * the component once when it mounts. if you define attributes in the second argument, then each time there is a change in that attribute the component 
      * will update and re render   
      */
     useEffect(() => {
         fetchEntries();
     }, [url]);

     return (
         <Fragment>
            <input type="text" value={entryId} onChange={(e) => setEntryId(e.target.value)}/>
                <button type="button" onClick={() => setURL(`http://localhost:5000/api/entries/${entryId}`)}>Search by Entry ID</button>
                    <ul>
                        {/*entries is most likely an object so it might throw an error here trying to map it as an array*/}
                        {data.entries.map(entry => (             
                            <li key={entry.id}>{ entry.title }</li>
                        ))}
                    </ul>
            </Fragment>
        );
    }
export default ReactHook;
