import React from 'react';
import renderer from 'react-test-renderer';
import { List } from './List';

test('list view', () => {
    const props = {
        list: {
            loading: true,
            search: '',
            items: [],
        },
        fetchList: () => {},
    };
    const component = renderer.create(
        <List {...props}/>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props = {
        list: {
            loading: false,
            search: '',
            items: [{data: [{title: 'title_1'}], links: [{href: '#'}]}],
        },
        fetchList: () => {},
    };
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
