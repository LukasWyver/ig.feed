import { Avatar } from './Avatar';
import { Comment } from './Comment';

export function Post() {
  return (
    <article className="bg-white drop-shadow-md dark:bg-gray-800 rounded-lg p-5 md:p-10">
      <header className="flex items-center justify-between">
        <div className="flex gap-4">
          <Avatar hasBorder imgUrl="https://github.com/lukaswyver.png" />

          <div className="">
            <strong className="block text-gray-900 dark:text-gray-100">
              Lukas Wyver
            </strong>
            <span className="text-sm text-gray-400">Dev Front-End</span>
          </div>
        </div>

        <time
          title="25 de Julho ás 19:04"
          dateTime="2023-06-25 19:04:00z"
          className="text-sm text-gray-400"
        >
          Públicado há 1h
        </time>
      </header>

      <div className="mt-7 text-gray-800 dark:text-gray-300 space-y-6">
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p className="space-x-1">
          <span>👉</span>
          <a
            href="#"
            className="text-success-500 hover:text-success-100 transition-all duration-75 ease-in-out hover:underline font-bold"
          >
            jane.design/doctorcare
          </a>
        </p>

        <p className="space-x-1">
          <a
            href="#"
            className="text-success-500 hover:text-success-100 transition-all duration-75 ease-in-out hover:underline font-bold"
          >
            #novoprojeto
          </a>
          <a
            href="#"
            className="text-success-500 hover:text-success-100 transition-all duration-75 ease-in-out hover:underline font-bold"
          >
            #nlw
          </a>
          <a
            href="#"
            className="text-success-500 hover:text-success-100 transition-all duration-75 ease-in-out hover:underline font-bold"
          >
            #rocketseat
          </a>
        </p>
      </div>

      <form className="flex flex-col mt-6 pt-6 border-t border-gray-300 dark:border-gray-600 group">
        <strong className="mb-4">Deixe seu feedback</strong>
        <textarea
          placeholder="Escreva um comentário..."
          className="resize-y max-h-44 min-h-[96px] focus:caret-success-500 rounded-lg px-4 py-3 mb-4 bg-gray-100 dark:bg-gray-900"
        />

        <footer className='invisible max-h-0 group-focus-within:visible group-focus-within:max-h-none'>
          <button
            type="submit"
            className="px-6 pt-4 pb-3.5 bg-success-500 hover:bg-success-100 transition-colors duration-150 ease-in-out rounded-lg font-bold w-fit text-gray-100"
          >
            Publicar
          </button>
        </footer>
      </form>

      <div className="mt-8">
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
