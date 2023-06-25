import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <>
      <Header />

      <div className="max-w-[70rem] mx-auto my-8 px-4 grid md:grid-cols-[256px,1fr] items-start gap-8">
        <Sidebar />

        <main className='space-y-8'>
          <Post />
          <Post />
          <Post />
        </main>
      </div>
    </>
  );
}

export default App;
