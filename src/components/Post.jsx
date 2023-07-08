/* eslint-disable react/prop-types */
import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import { useState } from 'react';

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState([
    'Post muito bacana, hein?!',
    'Muito bom cara, parabéns!! 👏👏',
  ]);
  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(
    publishedAt,
    "dd 'de' LLLL 'ás' HH:mm'h'",
    {
      locale: ptBr,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true,
  });

  function handleNewCommentChange() {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleCreateNewComment() {
    event.preventDefault();

    if (isNewCommentEmpty) {
      return;
    }

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Este campo é obrigatório!');
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className="rounded-lg bg-white p-5 drop-shadow-md dark:bg-gray-800 md:p-10">
      <header className="flex items-center justify-between">
        <div className="flex gap-4">
          <Avatar hasBorder imgUrl={author.avatarUrl} />

          <div className="">
            <strong className="block text-gray-900 dark:text-gray-100">
              {author.name}
            </strong>
            <span className="text-sm text-gray-400">{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
          className="text-sm text-gray-400"
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className="mt-7 space-y-6 text-gray-800 dark:text-gray-300">
        {content.map((line) => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return (
              <p key={line.content}>
                <a
                  href="#"
                  className="font-bold text-success-500 transition-all duration-75 ease-in-out hover:text-success-100 hover:underline"
                >
                  {line.content}
                </a>
              </p>
            );
          } else if (line.type === 'hashtag') {
            return (
              <a
                key={line.content}
                href="#"
                className="mx-1 font-bold text-success-500 transition-all duration-75 ease-in-out first-of-type:ml-0 hover:text-success-100 hover:underline"
              >
                {line.content}
              </a>
            );
          }
        })}
      </div>

      <form
        onSubmit={handleCreateNewComment}
        className="group mt-6 flex flex-col border-t border-gray-300 pt-6 dark:border-gray-600"
      >
        <strong className="mb-4">Deixe seu feedback</strong>
        <textarea
          required
          name="comment"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          placeholder="Escreva um comentário..."
          className="mb-4 max-h-44 min-h-[96px] resize-y rounded-lg bg-gray-100 px-4 py-3 focus:caret-success-500 dark:bg-gray-900"
        />

        <footer className="invisible max-h-0 group-focus-within:visible group-focus-within:max-h-none">
          <button
            type="submit"
            disabled={isNewCommentEmpty}
            className="w-fit cursor-pointer rounded-lg bg-success-500 px-6 pb-3.5 pt-4 font-bold text-white transition-colors duration-150 ease-in-out hover:bg-success-100 disabled:cursor-not-allowed disabled:bg-gray-400/50 dark:text-gray-100 disabled:dark:bg-gray-600"
          >
            Publicar
          </button>
        </footer>
      </form>

      <div className="mt-8">
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
