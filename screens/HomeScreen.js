import React from 'react';
import { View  , Text , TouchableOpacity , TextInput , StyleSheet} from 'react-native';
import dictionary from '../database';

class HomeScreen extends React.Component{
    constructor() {
        super();
        this.state = {
          text: '',
          isSearchPressed: false,
          isLoading: false,
          word  : "Searching. . .",
          lexicalCategory :'',
          definition : ""
        };
      }
    
      getWord = (text) => {
        var text = text.toLowerCase();
        try {
          var word = dictionary[text]['word'];
          var lexicalCategory = dictionary[text]['lexicalCategory'];
          var definition = dictionary[text]['definition'];
          this.setState({
            word: word,
            lexicalCategory: lexicalCategory,
            definition: definition,
          });
        } catch (err) {
          alert('Oh no!😓This word is not available in our dictionary ');
          this.setState({
            text: '',
            isSearchPressed: false,
          });
        }
      };
    render(){
    return(
        <View style={styles.container}>
            <TextInput style={styles.inputBox} onChangeText={(text) => this.setState({text : text})} 
            value={ this.state.text }  placeholder="Search"/>

            <TouchableOpacity style={styles.searchButton}
            onPress={() => {
                this.setState({
                    isSearchPressed : true
                });
                this.getWord(this.state.text);
            }}> 
                <Text style={styles.searchButtonText}>Search</Text>
            </TouchableOpacity>
            
            <View style={styles.outputContainer}>
          <Text style={{fontSize:20}}>
            {
              this.state.isSearchPressed && this.state.word === "Searching. . ."
              ? this.state.word
              : ""
            }
          </Text>
            {
              this.state.word !== "Searching. . ." ?
              (
                <View style={{justifyContent:'center', marginLeft:10 }}>
                  <View style={styles.detailsContainer}>
                    <Text style={styles.detailsTitle}>
                      Word :{" "}
                    </Text>
                    <Text style={{fontSize:18 }}>
                      {this.state.text}
                    </Text>
                  </View>
                  <View style={styles.detailsContainer}>
                    <Text style={styles.detailsTitle}>
                      Type :{" "}
                    </Text>
                    <Text style={{fontSize:18}}>
                      {this.state.lexicalCategory}
                    </Text>
                  </View>
                  <View style={{flexDirection:'row',flexWrap: 'wrap'}}>
                    <Text style={styles.detailsTitle}>
                      Definition :{" "}
                    </Text>
                    <Text style={{ fontSize:18}}>
                      {this.state.definition}
                    </Text>
                  </View>
                </View>
              )
              :null
            }
        </View>


<View style={styles.credits}>
<Text>Dictionary App : Offline Version</Text>
<Text style={styles.creditsText}>App made by Junaid</Text>
</View>
        </View>
    );
    }

}

export default HomeScreen;

const styles = StyleSheet.create({
    inputBox:{
        borderWidth:1,
        width:300,
        height:40,
        borderRadius:20,
        textAlign:"center",
        color:"#000000",
        fontSize:20
    },
    container:{
        alignSelf:"center",
        alignItems:"center",
        marginTop:150
    },
    searchButton:{
        backgroundColor:"blue",
        marginTop:30,
        height:40,
        width:150,
        borderRadius:20

    },
    searchButtonText:{
        textAlign:"center",
        marginTop:5,
        fontSize:20,
        color:"#FFFFFF"
    },
    outputContainer:{
        flex:0.7,
        alignItems:'center',
        marginTop:2
      },
      detailsContainer:{
        flexDirection:'row',
        alignItems:'center'
      },
      detailsTitle:{
        color:'blue',
        fontSize:20,
        fontWeight:'bold'
      },
      credits:{
        marginTop:230,
        alignItems:"center"
      },
      creditsText:{
        marginTop:2,
        fontWeight:"500"
      }
});