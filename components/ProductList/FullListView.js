import React, { Component } from "react";
import { observer } from "mobx-react";
import { NativeRouter, Route, Link, Switch } from "react-router-native";

import { ListView, ScrollView } from "react-native";
import {
  Container,
  Header,
  Content,
  Button,
  Input,
  Grid,
  Item,
  Col,
  Thumbnail,
  Icon,
  SwipeRow,
  Segment,
  View,
  Left,
  Right,
  Body,
  List,
  ListItem,
  Text
} from "native-base";

//Import Product Store
import ProductStore from "../Store/ProductStore";
import UserStore from "../Store/UserStore";
import UsersList from "./UsersList";
import ProductListView from "./ProductListView";

class FullListView extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      sortList: "product"
    };
  }
  render() {
    return (
      <View>
        <View>
          <Item rounded>
            <Icon name="ios-search" />
            <Input
              placeholder="Search"
              onChangeText={inputVal => {
                ProductStore.productSearch(inputVal);
                UserStore.userSearch(inputVal);
              }}
            />
          </Item>

          <Segment style={{ backgroundColor: "white" }}>
            <Button
              first
              active={this.state.sortList === "product"}
              onPress={() => this.setState({ sortList: "product" })}
            >
              <Text>By Product</Text>
            </Button>
            <Button
              active={this.state.sortList === "user"}
              onPress={() => this.setState({ sortList: "user" })}
              last
            >
              <Text>By User</Text>
            </Button>
          </Segment>
        </View>
        <ScrollView style={{ minHeight: 90 }}>
          <Text> </Text>
          {this.state.sortList === "product" && <ProductListView />}
          {this.state.sortList === "user" && <UsersList />}
        </ScrollView>
      </View>
    );
  }
}

export default observer(FullListView);
