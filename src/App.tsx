import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import styles from "./App.module.css";
import './global.css';

import marceline from './assets/marceline.png';
import jujuba from './assets/jujuba.png';

// author; {avatar_url: ""}, name: "", role:""}
//publishedAt: Date 
// content: String

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: jujuba,
      name: 'Princesa Jujuba',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera!!'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio, é um projeto que fiz na NLW Return, evento da Rocketseat.'},
      { type: 'Link', content: 'jane.designer/doctorcare'},
    ],
    publishedAt: new Date ('2023-03-07 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: marceline,
      name: 'Marceline',
      role: 'Fullstack Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera!!'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio, é um projeto que fiz na NLW Return, evento da Rocketseat.'},
      { type: 'Link', content: 'jane.designer/doctorcare'}
    ],
    publishedAt: new Date ('2023-03-11 20:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}   
        </main>
      </div>
    </div>
  )
}

