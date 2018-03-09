import React, { Component } from 'react';
import { Icon, Input, Menu, Header } from 'semantic-ui-react';
import { menu } from './menu.css';

export default class MenuVertical extends Component {
  state = { activeItem: 'inbox' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu vertical fixed={'left'} inverted size={'large'}>
        <Menu.Item header>
          <Header as={'h3'} inverted>
            {'Management System'}
            <Header.Subheader>
              SubMenu
            </Header.Subheader>
          </Header>
        </Menu.Item>
        <div className={menu}>
          The CSS module is working if this text is bigger than everything in universe.
        </div>

        <Menu.Item name='query' active={activeItem === 'query'} onClick={this.handleItemClick}>
          Query
        </Menu.Item>

      </Menu>
    )
  }
}