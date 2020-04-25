import {fetchUtils, DataProvider} from 'ra-core';

const server = process.env.REACT_APP_API_URL;

const authenticatedClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
};


function isEmpty(obj): Boolean {
    return Object.keys(obj).length === 0 && obj.constructor === Object
}

/**
 * Maps react-admin queries to a simple REST API
 *
 * This REST dialect is similar to the one of FakeRest
 *
 * @see https://github.com/marmelab/FakeRest
 *
 * @example
 *
 * @example
 *
 * import React from 'react';
 * import { Admin, Resource } from 'react-admin';
 * import simpleRestProvider from 'ra-data-simple-rest';
 *
 * import { PostList } from './posts';
 *
 * const App = () => (
 *     <Admin dataProvider={simpleRestProvider('http://path.to.my.api/')}>
 *         <Resource name="posts" list={PostList} />
 *     </Admin>
 * );
 *
 * export default App;
 */
export default (apiUrl = server, httpClient = authenticatedClient): DataProvider => ({
    getList: (resource, params) => {
        // const { page, perPage } = params.pagination;
        // const { field, order } = params.sort;
        // const query = {
        //     sort: JSON.stringify([field, order]),
        //     range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
        //     filter: JSON.stringify(params.filter),
        // };
        // if(isEmpty(params.filter)){
        //     params.filter = null;
        // }
        const url = `${apiUrl}/list/${resource}?query=${JSON.stringify(params)}`;

        // return httpClient(url, {
        //     method: 'GET',
        //     body: JSON.stringify(params)
        // }).then(({headers, json}) => (
        //     {
        //         data: json,
        //         total: parseInt(headers.get('content-range').split('/').pop(), 10),
        //     }
        // ));
        console.log("Calling getList " + url);
        return httpClient(url).then(({json}) => (
            json
        ));
    },

    // getOne: (resource, params) =>
    //     httpClient(`${apiUrl}/${resource}/${params.id}`).then(({json}) => ({
    //         data: json,
    //     })),

    getOne: (resource, params) => {
        // if(isEmpty(params.filter)){
        //     params.filter = null;
        // }
        const url = `${apiUrl}/one/${resource}/${params.id}`;
        console.log("Calling getOne " + url);
        return httpClient(url).then(({json}) => (
            json
        ))
    },

    // getMany: (resource, params) => {
    //     const query = {
    //         filter: JSON.stringify({id: params.ids}),
    //     };
    //     const url = `${apiUrl}/${resource}?${stringify(query)}`;
    //     return httpClient(url).then(({json}) => ({data: json}));
    // },

    getMany: (resource, params) => {
        // if(isEmpty(params.filter)){
        //     params.filter = null;
        // }
        const url = `${apiUrl}/many/${resource}?query=${JSON.stringify(params)}`;

        console.log("Calling getMany " + url);
        return httpClient(url).then(({json}) => (
            json
        ))
    },

    getManyReference: (resource, params) => {
        // if(isEmpty(params.filter)){
        //     params.filter = null;
        // }
        const url = `${apiUrl}/many_reference/${resource}?query=${JSON.stringify(params)}`;
        console.log("Calling getManyReference " + url);
        return httpClient(url).then(({json}) => (
            json
        ))
    },

    // getManyReference: (resource, params) => {
    //     const {page, perPage} = params.pagination;
    //     const {field, order} = params.sort;
    //     const query = {
    //         sort: JSON.stringify([field, order]),
    //         range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
    //         filter: JSON.stringify({
    //             ...params.filter,
    //             [params.target]: params.id,
    //         }),
    //     };
    //     const url = `${apiUrl}/${resource}?${stringify(query)}`;
    //
    //     return httpClient(url).then(({headers, json}) => {
    //         if (!headers.has('content-range')) {
    //             throw new Error(
    //                 'The Content-Range header is missing in the HTTP Response. The simple REST data provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare Content-Range in the Access-Control-Expose-Headers header?'
    //             );
    //         }
    //         return {
    //             data: json,
    //             total: parseInt(
    //                 headers
    //                     .get('content-range')
    //                     .split('/')
    //                     .pop(),
    //                 10
    //             ),
    //         };
    //     });
    // },

    update: (resource, params) => {
        const url = `${apiUrl}/update/${resource}`;
        console.log("Calling update " + url + " with body " + JSON.stringify(params));
        return httpClient(url, {
            method: 'PUT',
            body: JSON.stringify(params)
        }).then(({json}) => (
            json
        ))
    },

    // update: (resource, params) =>
    //     httpClient(`${apiUrl}/${resource}/${params.id}`, {
    //         method: 'PUT',
    //         body: JSON.stringify(params.data),
    //     }).then(({json}) => ({data: json})),

    // simple-rest doesn't handle provide an updateMany route, so we fallback to calling update n times instead
    // updateMany: (resource, params) =>
    //     Promise.all(
    //         params.ids.map(id =>
    //             httpClient(`${apiUrl}/${resource}/${id}`, {
    //                 method: 'PUT',
    //                 body: JSON.stringify(params.data),
    //             })
    //         )
    //     ).then(responses => ({data: responses.map(({json}) => json.id)})),

    updateMany: (resource, params) => {
        const url = `${apiUrl}/update_many/${resource}`;
        console.log("Calling updateMany " + url);
        return httpClient(url, {
            method: 'PUT',
            body: JSON.stringify(params)
        }).then(({json}) => (
            json
        ))
    },

    // create: (resource, params) =>
    //     httpClient(`${apiUrl}/${resource}`, {
    //         method: 'POST',
    //         body: JSON.stringify(params.data),
    //     }).then(({json}) => ({
    //         data: {...params.data, id: json.id},
    //     })),

    create: (resource, params) => {
        const url = `${apiUrl}/create/${resource}`;
        console.log("Calling create " + url);
        return httpClient(url, {
            method: 'POST',
            body: JSON.stringify(params)
        }).then(({json}) => (
            json
        ))
    },

    // delete: (resource, params) =>
    //     httpClient(`${apiUrl}/${resource}/${params.id}`, {
    //         method: 'DELETE',
    //     }).then(({json}) => ({data: json})),

    delete: (resource, params) => {
        const url = `${apiUrl}/delete/${resource}?query=${JSON.stringify(params)}`;
        console.log("Calling delete " + url);
        return httpClient(url, {
            method: 'DELETE'
        }).then(({json}) => (
            json
        ))
    },

    // simple-rest doesn't handle filters on DELETE route, so we fallback to calling DELETE n times instead
    // deleteMany: (resource, params) =>
    //     Promise.all(
    //         params.ids.map(id =>
    //             httpClient(`${apiUrl}/${resource}/${id}`, {
    //                 method: 'DELETE',
    //             })
    //         )
    //     ).then(responses => ({data: responses.map(({json}) => json.id)})),

    deleteMany: (resource, params) => {
        const url = `${apiUrl}/delete_many/${resource}?query=${JSON.stringify(params)}`;
        console.log("Calling deleteMany " + url);
        return httpClient(url, {
            method: 'DELETE'
        }).then(({json}) => (
            json
        ))
    },
});