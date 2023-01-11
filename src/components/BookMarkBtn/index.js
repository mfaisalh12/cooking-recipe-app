import React from 'react';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

export default function BookMarkBtn(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.btnContainer}>
      <Icon name={props.name} style={styles.btnIcon} />
    </TouchableOpacity>
  );
}

BookMarkBtn.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string,
};
