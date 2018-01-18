import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {fetchList} from '../actions/listActions';

const Img = styled.img`
    display: inline-block;
    width: 100px;
    border: 1px solid red;
`;

const P = styled.p`
    font-size: 20px;
    margin: 0;
    padding: 10px 0;
`;

const LoadMask = styled.div`
    display: ${props => props.visible ? 'block' : 'none'};
    font-size: 30px;
    text-align: center;
    line-height: 2;
`;

class List extends Component {
    componentWillMount() {
        this.props.fetchList(this.props.list.search);
    }

    onChange(e) {
        this.props.fetchList(e.target.value);
    }

    render() {
        return (
            <div>
                <LoadMask visible={this.props.list.loading}>Loading...</LoadMask>
                <input type="text" value={this.props.list.search} onChange={this.onChange.bind(this)}/>
                <ul>
                    {
                        this.props.list.items.map((item, i) => (
                            <li key={i}>
                                <P>{item.data[0].title}</P>
                                <Img alt={item.data[0].title} src={item.links[0].href}/>
                            </li>))
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        list: state.list
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchList: search => dispatch(fetchList(search))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(List);