
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Button, Icon, Left, Right, Body } from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';

import { openDrawer } from '../../actions/drawer';

const {
  replaceAt,
} = actions;

class ColumnNB extends Component {  // eslint-disable-line

  static propTypes = {
    replaceAt: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  replaceAt(route) {
    this.props.replaceAt('column', { key: route }, this.props.navigation.key);
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.replaceAt('layout')}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Column Grid</Title>
          </Body>
          <Right />
        </Header>

        <Grid>
          <Col style={{ backgroundColor: '#D954D7' }} />
          <Col style={{ backgroundColor: '#D93735' }} />
        </Grid>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    replaceAt: (routeKey, route, key) => dispatch(replaceAt(routeKey, route, key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(ColumnNB);