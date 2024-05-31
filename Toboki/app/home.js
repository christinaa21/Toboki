// import React from 'react';
// import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';
// import PostCard from '../component/postCard';
// import Navbar from '../component/navbar';

// const posts = [
//   {
//     avatar: require('../assets/avatar1.png'),
//     name: 'Elise',
//     username: '@furelise',
//     content: 'This is my best read ever! The emotion, the plot, everything is just great. You guys should read it too! It’s called TCGF by Mo Xiang Tong Xiu.',
//   },
//   {
//     avatar: require('../assets/avatar2.png'),
//     name: 'Luna',
//     username: '@moonlightsonata',
//     content: 'Looking for fellow bookworms who enjoy getting lost in a good story. Any recommendations or recent favorites to share? 📚😊',
//   },
//   {
//     avatar: require('../assets/avatar3.png'),
//     name: 'Mark',
//     username: '@theswan',
//     content: 'Finished "Dark Matter" by Blake Crouch and I can’t stop thinking about it! Mind officially blown. Who else needs to unpack this with me? 🤯🌀',
//   },
//   {
//     avatar: require('../assets/avatar4.png'),
//     name: 'Erik',
//     username: '@gymnopedie',
//     content: 'Feeling nostalgic and thinking about childhood favorites. Yes, I’m talking about TinTin series.',
//   },
// ];

// const HomeScreen = () => {
//   return (
//     <ImageBackground source={require('../assets/login.png')} style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <Text style={styles.title}>Beranda</Text>
//         {posts.map((post, index) => (
//           <PostCard
//             key={index}
//             avatar={post.avatar}
//             name={post.name}
//             username={post.username}
//             content={post.content}
//           />
//         ))}
//       </ScrollView>
//       <Navbar />
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   scrollContainer: {
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#4A5C9C',
//     marginBottom: 10,
//   },
// });

// export default HomeScreen;
