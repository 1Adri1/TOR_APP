import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { API_KEY, URL } from "@env";


function Example() {
  let [temperatur, setTemp] = useState(0);
  

   // setInterval(function(){updatetemp();}, 60000);

  function updatetemp(){
    let text : any;
    let temperatur : number;
    
    let requestOptions : RequestInit = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(URL+"/Temperatur/ofen.json", requestOptions)
      .then(response => response.json())
      .then(result => {
      console.log(result);
      text = result;
    
    temperatur = text.eta.value["@strValue"];

    setTemp(temperatur);
    
      })
      .catch(error => console.log('error', error));
    }

    updatetemp();
    
  function myFunction(tor : string) {
    let myHeaders = new Headers();
    myHeaders.append('Access-Control-Allow-Origin', '*');
    myHeaders.append("Authorization", API_KEY);

    let requestOptions : RequestInit = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch(tor, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        //text = result;
        // const obj = JSON.parse(text);
        alert(result);
      })
      .catch((error) => {
        console.log('error', error);
        alert(error);
      });
  }
  return (

    <View style={styles.container}>

    <Text style={styles.text1}>Temperatur Blaubach: {temperatur}°C</Text>

        <Pressable
          style={styles.button}
          onPress={() => myFunction(URL+'/tor?tor=0')}>
          <Text style={styles.text}>{'TOR 0'}</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => myFunction(URL+'/tor?tor=1')}>
          <Text style={styles.text}>{'TOR 1'}</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => myFunction(URL+'/tor?tor=2')}>
          <Text style={styles.text}>{'TOR 2'}</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => myFunction(URL+'/tor?tor=3')}>
          <Text style={styles.text}>{'TOR 3'}</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => myFunction(URL+'/tor?tor=4')}>
          <Text style={styles.text}>{'TOR 4'}</Text>
        </Pressable>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginTop:20,
  },
  container1: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    flexDirection: 'row',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginLeft: 10,
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 4,
    backgroundColor: 'black',
    marginBottom: 20,

  },
  text: {
    fontSize: 30,
    lineHeight: 50,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  text1: {
    marginBottom: 15,
    fontSize: 20,
    lineHeight: 50,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
});

export default Example;
