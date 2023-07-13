import { useState } from 'react';
import { Avatar } from './Avatar';
import { ThumbsUp, Trash2 } from 'lucide-react';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment(){
    onDeleteComment(content);
  }

  function handleLikeComment(){
    setLikeCount((state) => {
      return state +1;
    })
  }

  return (
    <div className="mt-6 flex gap-4">
      <Avatar src="https://github.com/lukaswyver.png" alt=''/>

      <div className="flex-1">
        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
          <header className='flex items-start justify-between'>
            <div className="flex flex-col">
              <strong className='text-sm/relaxed'>LukasWyver <span className='text-gray-400'>(você)</span></strong>
              <time
                title="25 de Julho ás 19:04"
                dateTime="2023-06-25 19:04:00z"
                className="text-xs text-gray-400"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário" className='rounded-sm text-gray-400 dark:text-gray-500 hover:text-danger-500 dark:hover:text-danger-500 transition-colors duration-75 ease-linear'>
              <Trash2 size="24"/>
            </button>
          </header>

          <p className='mt-4 text-gray-600 dark:text-gray-300'>{content}</p>
        </div>

        <footer className='mt-4'>
          <button onClick={handleLikeComment} className="flex items-center rounded-sm text-gray-400 dark:text-gray-500 hover:text-success-500 dark:hover:text-success-500 transition-colors duration-75 ease-linear">
            <ThumbsUp className='mr-2'/>
            Aplaudir
            <span className="before:content-['\2022'] before:px-1">{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
