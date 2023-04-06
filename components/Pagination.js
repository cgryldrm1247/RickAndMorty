import React from 'react';
import {View, Text, Button} from 'react-native';

const Pagination = ({currentPage, totalPages, onPageChange}) => {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'center', marginVertical: 10}}>
        <Button
          title="Önceki"
          onPress={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
        <Text style={{marginHorizontal: 10}}>
          {currentPage} / {totalPages}
        </Text>
        <Button
          title="Sonraki"
          onPress={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
      </View>
    );
  };
  export default Pagination;