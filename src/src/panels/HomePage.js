import React, { Component} from 'react';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Gradient from '@vkontakte/vkui/dist/components/Gradient/Gradient';
import Text from '@vkontakte/vkui/dist/components/Typography/Text/Text';
import Title from '@vkontakte/vkui/dist/components/Typography/Title/Title';
import { Tabbar, TabbarItem } from '@vkontakte/vkui';
import { Icon28UserCircleOutline } from '@vkontakte/icons';
import { Icon28CalendarOutline } from '@vkontakte/icons';
import { Icon28InfoCircleOutline } from '@vkontakte/icons';

import '../css/Home.css'



class HomePage extends Component {
  constructor (props) {
    super(props);
    this.state = {
        group: '',
        stud: '',
        prof: '',
        dorm: '',
        year: '',
        specialty:'',
        changed: false
    }
  }
  componentDidMount = () => {
    const group = localStorage.getItem('group');
    const stud = localStorage.getItem('stud');
    const prof = localStorage.getItem('prof');
    const dorm = localStorage.getItem('dorm');
    const year = localStorage.getItem('year');
    const specialty = localStorage.getItem('specialty');
    this.setState({ stud, group, year, dorm, prof, specialty});
  }
  render () {
    return (
        <Panel id={this.props.id}> 
            <PanelHeader>PolyApp</PanelHeader>
            <Div>
            {this.props.fetchedUser &&
                <Gradient style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: 20,
                    background: 'none'
                  }}>
                    <Avatar src={this.props.fetchedUser.photo_200} size={96} />
                    <Title style={{ marginBottom: 4, marginTop: 20 }} level="3" weight="medium">{`${this.props.fetchedUser.first_name} ${this.props.fetchedUser.last_name}`}</Title>
                    <Text style={{ color: 'var(--text_secondary)' }}>{this.props.fetchedUser.city && this.props.fetchedUser.city.title ? this.props.fetchedUser.city.title : ''}</Text>
                  </Gradient>
            }
            </Div>
            <Group className="group-about">
                <Header mode="primary">?????? ??????</Header>
                <Header mode="secondary" aside={<Text>{this.state.group}</Text>}>????????????</Header>
                <Header mode="secondary" aside={<Text>{this.state.year}</Text>}>????????</Header>
                <Header mode="secondary" aside={<Text>{this.state.specialty}</Text>}>??????????????????????</Header>
                <Header mode="secondary" aside={<Text>{this.state.stud}</Text>}>????????????????????????</Header>
                {this.state.prof != '' ? <Header mode="secondary" aside={<Text>{this.state.prof}</Text>}>??????????????????</Header> : null}
            </Group>
            <FixedLayout filled vertical="bottom">
                <Tabbar className='tabbar-padding'>
                    <TabbarItem text="??????????????" onClick={this.props.go} data-to="questions">
                        <Icon28InfoCircleOutline/>
                    </TabbarItem>
                    <TabbarItem text="??????????????????" onClick={this.props.go} data-to="start">
                        <Icon28CalendarOutline />
                    </TabbarItem>
                    <TabbarItem text="??????????????" selected>
                        <Icon28UserCircleOutline/>
                    </TabbarItem>
                </Tabbar>
            </FixedLayout>
          </Panel>   
    )
  }
}

export default HomePage;