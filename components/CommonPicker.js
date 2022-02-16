import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {ModalContain} from '../components/PickerContain';
import {ParallelPicker, CascadePicker} from "react-native-slidepicker";

export default class PickerDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {show: this.props.show};
  }

  close = () => this.setState({show: false});

  showData = (arr) => {
    console.info('arr', arr);
  };

  setOnePickerRef = (ref) => (this.oneRef = ref);

  showOneData = () => {
    const data = this.oneRef.getResult();
    console.info('data', data);
  };

  render() {
    return (
      <View style={styles.page}>
        <ModalContain isModalShow={this.state.show}>
          <ParallelPicker
            ref={this.setOnePickerRef}
            dataSource={this.props.data}
            confirm={this.showData}
            cancel={this.close}
            pickerDeep={1}
            pickerStyle={{
              visibleNum: 3,
              itemHeight: 60,
              activeFontColor: '#F52D3A',
              activeFontSize: 21,
              normalFontColor: '#ccc',
            }}
            customHead={
              <View style={styles.head}>
                <TouchableOpacity onPress={this.showOneData}>
                  <Text style={{fontSize: 18, color: '#0aa'}}>取消</Text>
                </TouchableOpacity>
                <Text style={{fontSize: 18}}>Choose Animals</Text>
                <TouchableOpacity onPress={this.showOneData}>
                  <Text style={{fontSize: 18, color: '#0aa'}}>确定</Text>
                </TouchableOpacity>
              </View>
            }
          />
        </ModalContain>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    zIndex: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: '#eee',
  },
  head: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
});
