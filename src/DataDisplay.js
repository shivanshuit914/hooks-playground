import React, {useState, useEffect} from 'react';
import dataFetch from './dataFetch';

export default function DataDisplay() {
    const data = dataFetch('https://jsonplaceholder.typicode.com/posts');
    return (
        <div>
          <ul>
            {data.map(el => (
              <li key={el.id}>{el.title}</li>
            ))}
          </ul>
        </div>
    );
}