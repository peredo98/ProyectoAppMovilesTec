import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";

export default class Info extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.navigation);
    }

    static navigationOptions = ({navigation}) => {
        return {
            headerStyle: {
            backgroundColor: '#fff',
            },
            headerTintColor: '#626262',
            headerTitleStyle: {
            fontWeight: 'bold',
            },
        };
    };
    
    render() {
        var country = this.props.navigation.state.params.country;
        const province = this.props.navigation.state.params.province;
        const latest = this.props.navigation.state.params.latest;
        if (province != ""){
            country = country + ", " + province
        }
        return (
            <Container>
            <Header />
            <Content padder>
                <Card>
                <CardItem header>
                    <Text>{country}</Text>
                </CardItem>
                <CardItem>
                    <Body>
                    <Text style={{color: "red"}}>
                        Infected: {latest.confirmed}
                    </Text>
                    <Text>
                        Deaths: {latest.deaths}
                    </Text>
                    <Text style={{color: "green"}}>
                        Recovered: {latest.recovered}
                    </Text>
                    </Body>
                </CardItem>
                <CardItem footer>
                </CardItem>
                </Card>
            </Content>
            </Container>
        );
    }
}