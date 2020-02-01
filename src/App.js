import React from 'react';
import {Admin, Resource, ListGuesser, EditGuesser, Login} from 'react-admin';
import iocServerDataProvider from "./iocServerDataProvider";
import {IocCreate, IocEdit, IocList} from "./iocs"
import {UserList} from "./users";
import {ProbeCreate, ProbeList} from "./probes";
import {ProbeReportList} from "./probe-reports";
import UserIcon from '@material-ui/icons/Group';
import ReportIcon from '@material-ui/icons/Report';
import DevicesIcon from '@material-ui/icons/Devices';
import Dashboard from './Dashboard';
import myAuthProvider from './authProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import primaryColor from '@material-ui/core/colors/deepPurple';
import secondaryColor from '@material-ui/core/colors/purple';

const MyLoginPage = () => <Login backgroundImage={null} />;

const purple = {
    50: '#f3e5f5',
    100: '#e1bee7',
    200: '#ce93d8',
    300: '#ba68c8',
    400: '#ab47bc',
    500: '#9c27b0',
    600: '#8e24aa',
    700: '#7b1fa2',
    800: '#6a1b9a',
    900: '#4a148c',
    // A100: '#ea80fc',
    // A200: '#e040fb',
    // A400: '#d500f9',
    // A700: '#aa00ff'
    A100: '#aa84c2',
    A200: '#875ba3',
    A400: '#6c388e',
    A700: '#3d1152'
};

const myTheme = createMuiTheme({
    palette: {
        // background: primaryColor
        // primary: ,
        secondary: purple,
        // type: 'dark',
    },
});


const dataProvider = iocServerDataProvider();//jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => (
    <Admin
        authProvider={myAuthProvider}
        dashboard={Dashboard}
        dataProvider={dataProvider}
        loginPage={MyLoginPage}
        theme={myTheme}>
        <Resource name="iocs" list={IocList} edit={IocEdit} create={IocCreate}/>
        {/*<Resource name="iocs" list={IocList} edit={EditGuesser}/>*/}
        <Resource name="probes" list={ProbeList} create={ProbeCreate} icon={DevicesIcon}/>
        <Resource name="probe_reports" list={ProbeReportList} icon={ReportIcon}/>
        {/*<Resource name="probe_reports" list={ListGuesser}/>*/}
        <Resource name="users" list={UserList} icon={UserIcon}/>
        {/*<Resource name="posts" list={ListGuesser} edit={EditGuesser}/>*/}
    </Admin>
);



export default App;