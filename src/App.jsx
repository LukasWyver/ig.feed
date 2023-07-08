import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/lukaswyver.png',
      name: 'Lukas Wyver',
      role: 'Dev Front-End'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'},
      {type: 'hashtag', content: '#novoprojeto'},
      {type: 'hashtag', content: '#nlw'},
      {type: 'hashtag', content: '#rocketseat'},
    ],
    publishedAt: new Date('2023-07-02 18:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala dev 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais uma aula no masterclass do Ignite. Vamos falar sobre as novidades do Next.JS 13 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'},
      {type: 'hashtag', content: '#novoprojeto'},
      {type: 'hashtag', content: '#nlw'},
      {type: 'hashtag', content: '#rocketseat'},
    ],
    publishedAt: new Date('2023-07-01 15:30:00')
  },
];

function App() {
  return (
    <>
      <Header />

      <div className="max-w-[70rem] mx-auto my-8 px-4 grid md:grid-cols-[256px,1fr] items-start gap-8">
        <Sidebar />

        <main className='space-y-8'>
          {posts.map(post => {
           return (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
           )
          })}
        </main>
      </div>
    </>
  );
}

export default App;
