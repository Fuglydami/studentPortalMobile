import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';
import {Button} from 'react-native';
import {useTablePagination} from '../hooks/useTableComponent';

const DataTable: React.FC = () => {
  const tableData: Array<string[]> = [
    ['1', 'John Doe', '25'],
    ['2', 'Jane Doe', '30'],
    ['2', 'Jane Doe', '30'],
    ['2', 'Jane Doe', '30'],
    ['2', 'Jane Doe', '30'],
    ['2', 'Jane Doe', '30'],
    ['2', 'Jane Doe', '30'],
    ['2', 'Jane Doe', '30'],
    ['2', 'Jane Doe', '30'],
    ['2', 'Jane Doe', '30'],
    ['2', 'Jane Doe', '30'],
    ['2', 'Jane Doe', '30'],
  ];

  const {currentPage, totalPages, getCurrentPageData, handlePagination} =
    useTablePagination(tableData);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Table borderStyle={styles.tableBorder}>
          <Row
            data={['ID', 'Name', 'Age']}
            style={styles.head}
            textStyle={styles.text}
          />
          <Rows data={getCurrentPageData()} textStyle={styles.text} />
        </Table>
      </ScrollView>

      <View style={styles.pagination}>
        <Button
          title="Prev"
          onPress={() => handlePagination('prev')}
          disabled={currentPage === 1}
        />
        <Text>{`Page ${currentPage} of ${totalPages}`}</Text>
        <Button
          title="Next"
          onPress={() => handlePagination('next')}
          disabled={currentPage === totalPages}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  head: {height: 40, backgroundColor: '#f1f8ff'},
  text: {margin: 6},
  tableBorder: {borderWidth: 1, borderColor: '#c8e1ff'},
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default DataTable;
