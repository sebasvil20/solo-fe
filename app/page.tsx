'use client'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'

import { NewPostCard } from '@/components/NewPostCard'
import { Post } from '@/components/post'
import { Divider, Spinner } from '@nextui-org/react'
import { PostInfo } from '@/types'

export default function Home() {
  const { data: session, status } = useSession()

  const [posts, setPosts] = useState<PostInfo[]>([])

  useEffect(() => {
    if (status === 'authenticated') {
      setPosts([
        {
          userNick: session?.user.nickname,
          userName: session?.user.name,
          postText: 'Odio a todo el mundo, sé cosas',
          postDate: 'Julio 31, 2023',
          userPhoto: session?.user.image
            ? session?.user.image
            : './avatar1.png',
        },
      ])
    }
  }, [status, session])

  if (status === 'loading') {
    return (
      <section className='w-full h-screen flex flex-col items-center justify-center'>
        <Spinner color='secondary' />
      </section>
    )
  }

  const addNewPost = (newPost: PostInfo) => {
    setPosts([newPost, ...posts])
  }

  return (
    <section className='flex flex-col items-center justify-center'>
      <h1 className='mb-8 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
        You are really SOLO
      </h1>
      <Divider className='mb-4' />
      {!session ? (
        <section>
          <h1>Inicia sesión para continuar</h1>
        </section>
      ) : (
        <>
          <section className='mb-8'>
            <NewPostCard addNewPost={addNewPost} />
          </section>
          <section className='flex flex-row items-center justify-center gap-2 flex-wrap'>
            {posts.map((post, index) => (
              <Post key={index + post.postText.slice(10)} post={post} />
            ))}
          </section>
        </>
      )}
    </section>
  )
}
