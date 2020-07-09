import React from 'react';
import { shallow } from 'enzyme';
import App, { Login, Dashboard, CreateMeeting } from '../../../client/components/App';
import { MemoryRouter } from 'react-router'
import { Route } from 'react-router-dom';

test('routes using memory router', () => {
    const component = shallow( 
    <MemoryRouter initialEntries={['/']}>
        <App/>
     </MemoryRouter>
    );
    expect(component.find(Login)).toHaveLength(1);
})

// test('should show No match component for route not defined', () => {
//     const component = shallow( 
//     <MemoryRouter initialEntries={['/dashboard']}>
//         <App/>
//     </MemoryRouter>
//     );
//     expect(component.find(Dashboard)).toHaveLength(1);
// })

// test('should show No match component for route not defined', () => {
//     const component = shallow( 
//     <MemoryRouter initialEntries={['/create']}>
//         <App/>
//     </MemoryRouter>
//     );
//     expect(component.find(CreateMeeting)).toHaveLength(1);
// })