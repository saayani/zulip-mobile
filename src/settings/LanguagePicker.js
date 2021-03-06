/* @flow */
import React, { PureComponent } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import languages from './languages';
import LanguagePickerItem from './LanguagePickerItem';

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
});

export default class LanguagePicker extends PureComponent {
  props: {
    value: string,
    onValueChange: (locale: string) => void,
  };

  render() {
    const { value, onValueChange } = this.props;

    return (
      <FlatList
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        data={languages}
        keyExtractor={item => item.locale}
        renderItem={({ item }) =>
          <LanguagePickerItem
            selected={item.locale === value}
            onValueChange={onValueChange}
            {...item}
          />}
      />
    );
  }
}
