import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface ArticleProps {
    title: string;
}

const Article: React.FC<ArticleProps> = ({
    title,
}) => {
  return (
    <View style={styles.containerarticle}>
        <Text style={styles.imagearticle}></Text>
        <Text style={styles.textarticle}>{title}</Text>
    </View>
  )
}

export default Article

const styles = StyleSheet.create({
    containerarticle: {
        borderRadius:20,
        margin:10,
        padding:15,

        backgroundColor:'#E9EAEC',  
    },
    imagearticle:{
        height: 200,
        backgroundColor:'#0000FF',
    },
    textarticle:{
        marginTop:20,
        fontWeight:'bold',
    }
})