import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text, FlatList, ActivityIndicator } from 'react-native';
import { RepositoryController } from '../view-controllers/RepositoryViewController';
import { StackNavigationProp } from '@react-navigation/stack';
import { useRoute } from '@react-navigation/native';
import ButtonProjectComponent from '../components/button_project_component'
import BackNavigationButton from '../components/button_back_navigation_component';
import { useTheme } from '@react-navigation/native';

interface AllProjectsNeutralViewProps {
  navigation: StackNavigationProp<any>;
}

interface RouteParams {
  platform: string,
}

const AllProjectsNeutralView: React.FC<AllProjectsNeutralViewProps> = ({ navigation }) => {
  const route = useRoute();
  const { platform } = route.params as RouteParams;
  const { colors } = useTheme();
  const { repositories, loading, error, handleRepositoryPress, fetchRepositories } = RepositoryController({ platform });

  useEffect(() => {
    fetchRepositories();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <SafeAreaView style={[styles.safeAreaView, { backgroundColor: colors.background }]}>
      <View style={styles.backButton}>
        <BackNavigationButton onPress={() => navigation.navigate("AllPlatforms")}/> 
      </View>
      <View style={styles.mainView}>
        <View style={styles.titleView}>
          <Text style={[styles.titleText, { color: colors.text }]}>Choisissez un projet</Text>
        </View>
        <View style={styles.mainContent}>
          <FlatList
            style={styles.flatList}
            data={repositories}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <ButtonProjectComponent title={item.name} memborsCount={item.name} onPress={() => navigation.navigate("Project", {platform: platform, owner: item.owner.name, repository: item.name})}></ButtonProjectComponent>             
            )}
          />
        </View>  
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // LIST VIEW
  safeAreaView: {
    flex: 1,
  },
  backButton:{
    margin: 20,
  },
  mainView: {
    flex: 1,
    display: 'flex',
  },
  titleView: {
    display: 'flex',
    margin: 20,
  },
  titleText: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 100,
    fontWeight: 'bold',
  },
  mainContent:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    height: '80%',
    marginLeft: '10%',
    marginRight: '10%',
  },
  flatList:{
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  }
})

export default AllProjectsNeutralView;