import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';

interface ITask {
  id: string;
  title: string;
}

interface ITaskListProps {
  tasks: ITask[];
}

export const TaskList = (props: ITaskListProps) => {
  return (
    <FlatList
      data={props.tasks}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity style={styles.buttonTask} activeOpacity={0.6}>
          <Text style={styles.titleTask}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  buttonTask: {
    backgroundColor: '#292929',
    padding: 10,
    marginTop: 10,
    borderRadius: 50,
    alignItems: 'center',
  },
  titleTask: {
    color: '#f1f1f1',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
